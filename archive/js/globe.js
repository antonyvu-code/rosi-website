// ROSI — Interactive Canvas 3D Globe Projection Engine & Dotted Continents

const globeHubs = [
    { key: "norway", name: "Lofoten, Norway", lat: 68.2, lon: 13.6 },
    { key: "amalfi", name: "Amalfi Coast, Italy", lat: 40.6, lon: 14.6 },
    { key: "maldives", name: "Maldives Archipelago", lat: 3.2, lon: 73.0 },
    { key: "tokyo", name: "Tokyo Bay, Japan", lat: 35.6, lon: 139.8 },
    { key: "hawaii", name: "Oahu, Hawaii", lat: 21.3, lon: -157.8 }
];

let globeCanvas = null;
let gCtx = null;
let gWidth = 0;
let gHeight = 0;

let globeRadius = 150;
let angleX = 0.3; // tilt angle
let angleY = 0;   // spin angle

// LERP targeting variables for smooth navigation focus
let targetAngleX = 0.3;
let targetAngleY = 0;

let isDraggingGlobe = false;
let previousMousePosition = { x: 0, y: 0 };
let autoSpinSpeed = 0.003;
let hoveredPinKey = null;
let landPoints = []; // Pre-cached 3D vectors of landmass dots

// Geometrical continent bounding checks for dotted world representation
function isLandPoint(lat, lon) {
    // North America
    if (lat > 15 && lat < 75 && lon > -168 && lon < -50) return true;
    // South America
    if (lat > -55 && lat <= 12 && lon > -85 && lon < -35) {
        if (lat < -10 && lon < -70 + (lat + 10) * 0.5) return false; 
        return true;
    }
    // Greenland
    if (lat > 60 && lat < 83 && lon > -70 && lon < -10) return true;
    // Africa
    if (lat > -35 && lat < 37 && lon > -18 && lon < 51) {
        if (lat < 5 && lat > -15 && lon < -10) return false;
        return true;
    }
    // Eurasia (Europe + Asia)
    if (lat > 10 && lat < 78 && lon > 20 && lon < 180) {
        // Exclude Caspian sea / Indian ocean gaps roughly
        if (lat < 25 && lon > 40 && lon < 60) return false; // Red Sea / Persian Gulf
        return true;
    }
    // India peninsula
    if (lat > 8 && lat <= 25 && lon > 68 && lon < 88) return true;
    // Indochina & Southeast Asia
    if (lat > -10 && lat <= 10 && lon > 95 && lon < 140) return true;
    // Australia
    if (lat > -42 && lat < -10 && lon > 113 && lon < 154) return true;
    // Antarctica (polar base)
    if (lat < -70) return true;

    return false;
}

// Generate dotted continents map points on sphere surfaces
function generateDottedLandmass() {
    landPoints = [];
    const latStep = 3.5;
    const lonStep = 4.0;

    for (let lat = -80; lat <= 80; lat += latStep) {
        for (let lon = -180; lon < 180; lon += lonStep) {
            if (isLandPoint(lat, lon)) {
                const vec = latLonToVector3(lat, lon, globeRadius);
                landPoints.push(vec);
            }
        }
    }
}

// Conversion helper: Lat/Lon to 3D Cartesian coordinates on sphere
function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.sin(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.cos(theta);

    return { x, y, z };
}

// 3D rotation around Y and X axis
function rotate3D(point, rx, ry) {
    // Rotate Y (ry)
    let cosY = Math.cos(ry);
    let sinY = Math.sin(ry);
    let x1 = point.x * cosY - point.z * sinY;
    let z1 = point.x * sinY + point.z * cosY;

    // Rotate X (rx)
    let cosX = Math.cos(rx);
    let sinX = Math.sin(rx);
    let y2 = point.y * cosX - z1 * sinX;
    let z2 = point.y * sinX + z1 * cosX;

    return { x: x1, y: y2, z: z2 };
}

// Smoothly rotate globe to face specific coordinates
window.focusLocationOnGlobe = function(key) {
    const hub = globeHubs.find(h => h.key === key);
    if (!hub) return;

    // Calculate target angles
    const destAngleY = - (hub.lon + 90) * (Math.PI / 180);
    const destAngleX = (hub.lat) * (Math.PI / 180);

    // Normalize target Y rotation to shortest angular difference path
    let diffY = destAngleY - angleY;
    diffY = Math.atan2(Math.sin(diffY), Math.cos(diffY));
    targetAngleY = angleY + diffY;

    // Normalize target X rotation
    let diffX = destAngleX - angleX;
    diffX = Math.atan2(Math.sin(diffX), Math.cos(diffX));
    targetAngleX = angleX + diffX;
};

// Draw the Globe wireframe, dotted landmass, and pins
function drawGlobe() {
    if (!gCtx) return;
    gCtx.clearRect(0, 0, gWidth, gHeight);

    const cx = gWidth / 2;
    const cy = gHeight / 2;

    // 1. Draw outer glowing atmosphere ring
    const atmosphereGlow = gCtx.createRadialGradient(cx, cy, globeRadius - 5, cx, cy, globeRadius + 20);
    atmosphereGlow.addColorStop(0, 'rgba(31, 168, 160, 0.25)'); // Lagoon Teal
    atmosphereGlow.addColorStop(0.7, 'rgba(11, 61, 82, 0.05)'); // Deep Ocean
    atmosphereGlow.addColorStop(1, 'rgba(26, 34, 38, 0)');
    gCtx.beginPath();
    gCtx.arc(cx, cy, globeRadius + 20, 0, Math.PI * 2);
    gCtx.fillStyle = atmosphereGlow;
    gCtx.fill();

    // 2. Draw Sphere Outline Circle
    gCtx.beginPath();
    gCtx.arc(cx, cy, globeRadius, 0, Math.PI * 2);
    gCtx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    gCtx.lineWidth = 1;
    gCtx.stroke();

    // 3. Draw Gridlines (Parallels & Meridians)
    const gridColorFront = 'rgba(31, 168, 160, 0.05)';
    const gridColorBack = 'rgba(255, 255, 255, 0.01)';

    // Draw Parallels (latitude rings)
    for (let lat = -60; lat <= 60; lat += 30) {
        const phi = (90 - lat) * (Math.PI / 180);
        const r = globeRadius * Math.sin(phi);
        const yOffset = globeRadius * Math.cos(phi);

        gCtx.beginPath();
        gCtx.ellipse(cx, cy + yOffset * Math.cos(angleX), r, r * Math.abs(Math.sin(angleX)), 0, 0, Math.PI * 2);
        gCtx.strokeStyle = lat > 0 ? gridColorFront : gridColorBack;
        gCtx.lineWidth = 0.5;
        gCtx.stroke();
    }

    // 4. Draw Dotted Landmass
    gCtx.fillStyle = 'rgba(31, 168, 160, 0.18)'; // Glowing Teal Dots
    landPoints.forEach(point => {
        const rot = rotate3D(point, angleX, angleY);
        // Only draw front side dots
        if (rot.z > 0) {
            const sx = cx + rot.x;
            const sy = cy - rot.y;
            
            gCtx.beginPath();
            gCtx.arc(sx, sy, 1.2, 0, Math.PI * 2);
            gCtx.fill();
        }
    });

    // 5. Draw Hubs Pins on Globe
    let currentHoverKey = null;

    globeHubs.forEach(hub => {
        const vec = latLonToVector3(hub.lat, hub.lon, globeRadius);
        const rot = rotate3D(vec, angleX, angleY);

        if (rot.z > 0) {
            const sx = cx + rot.x;
            const sy = cy - rot.y;

            // Check if mouse is hovering over pin
            const dist = Math.hypot(mouseXInCanvas - sx, mouseYInCanvas - sy);
            const isHovered = dist < 12;

            if (isHovered) {
                currentHoverKey = hub.key;
            }

            // Pulsing ring
            const pulseRadius = 5 + (Date.now() % 1500) / 1500 * 18;
            const pulseOpacity = 1 - (Date.now() % 1500) / 1500;

            gCtx.beginPath();
            gCtx.arc(sx, sy, pulseRadius, 0, Math.PI * 2);
            gCtx.strokeStyle = `rgba(255, 122, 77, ${pulseOpacity})`;
            gCtx.lineWidth = 1.5;
            gCtx.stroke();

            // Core
            gCtx.beginPath();
            gCtx.arc(sx, sy, isHovered || selectedHubKey === hub.key ? 8 : 5, 0, Math.PI * 2);
            gCtx.fillStyle = isHovered || selectedHubKey === hub.key ? 'var(--color-lagoon-teal)' : 'var(--color-sunset-coral)';
            gCtx.lineWidth = 2;
            gCtx.strokeStyle = 'var(--color-foam)';
            gCtx.fill();
            gCtx.stroke();

            // Label
            gCtx.font = `600 11px var(--font-heading)`;
            gCtx.fillStyle = isHovered || selectedHubKey === hub.key ? 'var(--color-lagoon-teal)' : 'rgba(255, 255, 255, 0.85)';
            gCtx.textAlign = 'center';
            gCtx.fillText(hub.name.split(',')[0], sx, sy - 15);
        }
    });

    hoveredPinKey = currentHoverKey;
    document.body.style.cursor = hoveredPinKey ? 'pointer' : 'default';
}

// Track mouse position relative to canvas
let mouseXInCanvas = -1000;
let mouseYInCanvas = -1000;

function setupGlobeEvents() {
    const container = document.querySelector('.globe-container');
    if (!container) return;

    globeCanvas.addEventListener('mousedown', (e) => {
        isDraggingGlobe = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
        const rect = globeCanvas.getBoundingClientRect();
        mouseXInCanvas = e.clientX - rect.left;
        mouseYInCanvas = e.clientY - rect.top;

        if (isDraggingGlobe) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;

            angleY += deltaX * 0.005;
            angleX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, angleX + deltaY * 0.005));

            // Sync targets during dragging
            targetAngleY = angleY;
            targetAngleX = angleX;

            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    window.addEventListener('mouseup', () => {
        isDraggingGlobe = false;
    });

    // Touch
    globeCanvas.addEventListener('touchstart', (e) => {
        isDraggingGlobe = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    globeCanvas.addEventListener('touchmove', (e) => {
        const rect = globeCanvas.getBoundingClientRect();
        mouseXInCanvas = e.touches[0].clientX - rect.left;
        mouseYInCanvas = e.touches[0].clientY - rect.top;

        if (isDraggingGlobe) {
            const deltaX = e.touches[0].clientX - previousMousePosition.x;
            const deltaY = e.touches[0].clientY - previousMousePosition.y;

            angleY += deltaX * 0.005;
            angleX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, angleX + deltaY * 0.005));

            targetAngleY = angleY;
            targetAngleX = angleX;

            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    });

    globeCanvas.addEventListener('touchend', () => {
        isDraggingGlobe = false;
    });

    // Click hotspots
    globeCanvas.addEventListener('click', () => {
        if (hoveredPinKey) {
            showLocationBox(hoveredPinKey);
        }
    });
}

function resizeGlobeCanvas() {
    if (!globeCanvas) return;
    const rect = globeCanvas.parentElement.getBoundingClientRect();
    gWidth = globeCanvas.width = Math.min(rect.width, 500);
    gHeight = globeCanvas.height = Math.min(rect.width, 500);
    globeRadius = Math.min(gWidth, gHeight) * 0.35;
    
    // Re-generate dots after size resize
    generateDottedLandmass();
}

// Loop update
function animateGlobe() {
    if (!isDraggingGlobe) {
        // Slow auto spin if no target is active, or interpolate to target
        if (Math.abs(targetAngleY - angleY) > 0.001 || Math.abs(targetAngleX - angleX) > 0.001) {
            angleY += (targetAngleY - angleY) * 0.08;
            angleX += (targetAngleX - angleX) * 0.08;
        } else {
            angleY += autoSpinSpeed;
            targetAngleY = angleY;
        }
    }
    drawGlobe();
    requestAnimationFrame(animateGlobe);
}

// Init Globe script
document.addEventListener('DOMContentLoaded', () => {
    globeCanvas = document.getElementById('globe-canvas');
    const loader = document.getElementById('globe-loader');
    if (globeCanvas) {
        gCtx = globeCanvas.getContext('2d');
        
        resizeGlobeCanvas();
        window.addEventListener('resize', resizeGlobeCanvas);
        
        setupGlobeEvents();
        generateDottedLandmass();

        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }

        animateGlobe();
    }
});
