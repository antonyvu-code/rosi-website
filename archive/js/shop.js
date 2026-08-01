// ROSI — Flagship E-Commerce Engine (Products, Cart, 3D CAD Viewer, AR Camera Viewfinder)

// 1. E-Commerce Product Database
const products = [
    { id: "rod-carbon", name: "Rosi DeepSea Carbon Rod", category: "rods", price: 320.00, icon: "analytics-outline", desc: { en: "High-modulus carbon fibre blank built for offshore bottom dragging.", de: "Hochmoduliger Kohlefaser-Blank für das Tiefsee-Grundangeln.", vi: "Thân cần carbon mật độ cao chuyên dụng câu đáy đại dương." } },
    { id: "reel-spinning", name: "Rosi Pro Cast Spinning Reel", category: "rods", price: 190.00, icon: "settings-outline", desc: { en: "Waterproof marine gear box with 9 stainless bearings.", de: "Wasserdichtes Getriebe mit 9 Edelstahl-Kugellagern.", vi: "Hộp số chống mặn hoàn hảo với 9 vòng bi thép không gỉ." } },
    { id: "rod-troller", name: "Rosi Ocean Troller Heavy", category: "rods", price: 450.00, icon: "construct-outline", desc: { en: "Engineered to withstand massive runs from bluefin tuna.", de: "Entwickelt für den Kampf mit kapitalen Blauflossen-Thunfischen.", vi: "Thiết kế chịu áp lực lớn từ những cú phóng của cá ngừ vây xanh." } },
    { id: "lure-jerk", name: "Lagoon Teal Jerkbait Lure", category: "lures", price: 22.00, icon: "sparkles-outline", desc: { en: "Realistic erratic action mimics injured reef forage.", de: "Realistischer Lauf simuliert einen verletzten Riff-Beutefisch.", vi: "Chuyển động lảo đảo mô phỏng mồi cá nhỏ bị thương ở rạn san hô." } },
    { id: "lure-squid", name: "Sunset Coral Squid Jig", category: "lures", price: 18.00, icon: "color-wand-outline", desc: { en: "Glow-in-the-dark eyes and premium feathered hooks.", de: "Leuchtende Augen und erstklassig gefiederte Haken.", vi: "Mắt phát quang trong bóng đêm và lưỡi lông vũ cao cấp." } },
    { id: "lure-apex", name: "Deepwater Apex Tuna Plug", category: "lures", price: 30.00, icon: "ribbon-outline", desc: { en: "Heavy rattling chamber draws predators from deep trenches.", de: "Schwere Rasselkammer lockt Räuber aus tiefen Gräben an.", vi: "Buồng tạo âm rung nặng thu hút động vật săn mồi dưới hố sâu." } },
    { id: "souv-amalfi", name: "Amalfi Lemon Keyring", category: "souvenirs", price: 15.00, icon: "key-outline", desc: { en: "Hand-carved olive wood keyring scented with Sorrento lemons.", de: "Handgeschnitzter Schlüsselanhänger mit Duft nach Sorrento-Zitronen.", vi: "Móc khóa gỗ ô liu khắc tay thơm hương chanh vàng Sorrento." } },
    { id: "souv-norway", name: "Lofoten Wooden Cod Model", category: "souvenirs", price: 40.00, icon: "image-outline", desc: { en: "Miniature replicas of norwegian cod carved by local craftsmen.", de: "Miniatur-Kabeljau aus Holz, geschnitzt von lokalen Handwerkern.", vi: "Mô hình cá tuyết bằng gỗ thu nhỏ chạm khắc bởi nghệ nhân Na Uy." } },
    { id: "souv-maldives", name: "Maldives Pearl Sand Globe", category: "souvenirs", price: 25.00, icon: "globe-outline", desc: { en: "Authentic fine white sand and micro pearl shells.", de: "Echter feiner weißer Sand mit winzigen Perlmuscheln.", vi: "Cát trắng mịn Maldives và những vỏ sò ngọc trai tí hon." } },
    { id: "souv-hawaii", name: "Oahu Surf Logo Flask", category: "souvenirs", price: 20.00, icon: "thermometer-outline", desc: { en: "Insulated marine flask keeps ice cold for up to 36 hours.", de: "Isolierte Trinkflasche hält Eis bis zu 36 Stunden kalt.", vi: "Bình giữ nhiệt thủy quân lục chiến giữ đá lạnh tới 36 giờ." } }
];

let cart = [];

// 2. Render Products Grid
function renderProducts(filter = "all") {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';
    const lang = localStorage.getItem('rosi-language') || 'en';

    const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

    filtered.forEach(p => {
        const descText = p.desc[lang] || p.desc['en'];
        
        // Determine image tag based on product category
        let imgHtml = `<ion-icon name="${p.icon}"></ion-icon>`;
        if (p.category === 'rods') {
            imgHtml = `<img src="assets/gear.png" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">`;
        } else if (p.category === 'lures') {
            imgHtml = `<img src="assets/gear.png" alt="${p.name}" style="width:100%; height:100%; object-fit:cover; filter: hue-rotate(95deg) brightness(1.2);">`;
        } else if (p.category === 'souvenirs') {
            let sImg = 'assets/amalfi.png';
            if (p.id.includes('norway')) sImg = 'assets/norway.png';
            else if (p.id.includes('maldives')) sImg = 'assets/maldives.png';
            else if (p.id.includes('hawaii')) sImg = 'assets/hawaii.png';
            else if (p.id.includes('tokyo')) sImg = 'assets/tokyo.png';
            imgHtml = `<img src="${sImg}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">`;
        }
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="prod-img">
                ${imgHtml}
                <span class="prod-tag">${p.category}</span>
            </div>
            <div class="prod-body">
                <h4 class="prod-name">${p.name}</h4>
                <p class="prod-desc">${descText}</p>
                <div class="prod-footer">
                    <span class="prod-price">€${p.price.toFixed(2)}</span>
                    <div class="action-buttons-row">
                        ${p.category === 'souvenirs' ? `
                            <button class="ar-icon-btn" onclick="openARViewer('${p.id}')" title="AR View">
                                <ion-icon name="aperture-outline"></ion-icon>
                            </button>
                        ` : `
                            <button class="rotate-3d-btn" onclick="open3DViewer('${p.id}')" title="3D View">
                                <ion-icon name="cube-outline"></ion-icon>
                            </button>
                        `}
                        <button class="add-to-cart-btn" onclick="addToCart('${p.id}')" title="Add to Cart">
                            <ion-icon name="add-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 2. Cart Actions
function addToCart(productId, customName = null, customPrice = null, customIcon = "gift-outline") {
    let item;
    
    if (customName) {
        item = { id: productId, name: customName, price: customPrice, icon: customIcon };
    } else {
        const storeItem = products.find(p => p.id === productId);
        if (!storeItem) return;
        item = { id: storeItem.id, name: storeItem.name, price: storeItem.price, icon: storeItem.icon };
    }

    const existing = cart.find(i => i.id === item.id);
    if (existing) {
        existing.qty += 1;
    } else {
        item.qty = 1;
        cart.push(item);
    }

    updateCartUI();
    openCartDrawer();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge-count');
    const container = document.getElementById('cart-items-container');
    const footer = document.getElementById('cart-footer');
    const subtotal = document.getElementById('cart-subtotal-price');

    if (!badge || !container || !footer || !subtotal) return;

    const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
    const totalPrice = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

    badge.textContent = totalCount;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                Your cart is empty. Explore our Gear Shop or run the Gear Finder!
            </div>
        `;
        const lang = localStorage.getItem('rosi-language') || 'en';
        container.querySelector('.cart-empty-state').textContent = translations[lang]["cart.empty"];
        
        footer.style.display = 'none';
    } else {
        container.innerHTML = '';
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <div class="cart-item-icon">
                    <ion-icon name="${item.icon}"></ion-icon>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">€${item.price.toFixed(2)}</div>
                    <div class="cart-item-qty">Qty: ${item.qty}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            `;
            container.appendChild(itemEl);
        });

        subtotal.textContent = `€${totalPrice.toFixed(2)}`;
        footer.style.display = 'block';
    }
}

// Side drawers controllers
const cartDrawer = document.getElementById('cart-drawer-panel');
const drawerOverlay = document.getElementById('drawer-overlay');

function openCartDrawer() {
    if (cartDrawer && drawerOverlay) {
        cartDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        const bookingDrawer = document.getElementById('booking-drawer-panel');
        if (bookingDrawer) bookingDrawer.classList.remove('active');
        const accountDrawer = document.getElementById('account-drawer-panel');
        if (accountDrawer) accountDrawer.classList.remove('active');
    }
}

function closeCartDrawer() {
    if (cartDrawer && drawerOverlay) {
        cartDrawer.classList.remove('active');
        if (!document.getElementById('booking-drawer-panel').classList.contains('active') && 
            !document.getElementById('account-drawer-panel').classList.contains('active')) {
            drawerOverlay.classList.remove('active');
        }
    }
}

function checkoutCart() {
    const lang = localStorage.getItem('rosi-language') || 'en';
    let msg = "Thank you Cap! Your gear package has been ordered and will be waiting at your selected hub.";
    if (lang === 'vi') msg = "Cảm ơn thuyền trưởng! Đơn hàng phụ kiện đã được xác nhận và sẽ có sẵn tại Hub dịch vụ bạn đã chọn.";
    if (lang === 'de') msg = "Danke Kapitän! Ihre Ausrüstung wurde bestellt und wartet an Ihrem gewählten Stützpunkt auf Sie.";

    alert(msg);
    cart = [];
    updateCartUI();
    closeCartDrawer();
}

// ==========================================
// 3. 3D Product CAD Wireframe Rotator Modal
// ==========================================
let active3dProduct = null;
let canvas3d = null;
let ctx3d = null;
let angle3d = 0;
let isDragging3d = false;
let prevX3d = 0;

function init3DProductCanvas() {
    canvas3d = document.getElementById('prod-3d-canvas');
    if (!canvas3d) return;

    ctx3d = canvas3d.getContext('2d');
    canvas3d.width = canvas3d.parentElement.clientWidth;
    canvas3d.height = 300;

    // Mouse drag handlers
    canvas3d.addEventListener('mousedown', (e) => {
        isDragging3d = true;
        prevX3d = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging3d) {
            const deltaX = e.clientX - prevX3d;
            angle3d += deltaX * 0.015;
            prevX3d = e.clientX;
            draw3DWireframe();
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging3d = false;
    });

    // Touch support
    canvas3d.addEventListener('touchstart', (e) => {
        isDragging3d = true;
        prevX3d = e.touches[0].clientX;
    });

    canvas3d.addEventListener('touchmove', (e) => {
        if (isDragging3d) {
            const deltaX = e.touches[0].clientX - prevX3d;
            angle3d += deltaX * 0.015;
            prevX3d = e.touches[0].clientX;
            draw3DWireframe();
        }
    });

    canvas3d.addEventListener('touchend', () => {
        isDragging3d = false;
    });
}

// Draw mechanical wireframe representation (Awwwards 3D blueprint CAD style)
function draw3DWireframe() {
    if (!ctx3d) return;
    const w = canvas3d.width;
    const h = canvas3d.height;
    ctx3d.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    // Set styling
    ctx3d.strokeStyle = 'var(--color-lagoon-teal)';
    ctx3d.lineWidth = 1.5;

    // Draw cylindrical spool nodes
    const spoolRadius = 50;
    const segments = 24;

    // We draw parallel circular segments projected in 3D
    const depths = [-40, -20, 0, 20, 40];

    depths.forEach(z => {
        ctx3d.beginPath();
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2 + angle3d;
            
            // 3D coordinate on circle circumference
            const px = spoolRadius * Math.sin(theta);
            const py = spoolRadius * Math.cos(theta);

            // Project coordinate onto 2D viewport
            const sx = cx + px;
            const sy = cy + py * 0.4 + z * 0.2; // tilt ellipse slightly

            if (i === 0) ctx3d.moveTo(sx, sy);
            else ctx3d.lineTo(sx, sy);
        }
        ctx3d.stroke();
    });

    // Draw longitudinal struts connecting the spool
    ctx3d.beginPath();
    ctx3d.strokeStyle = 'rgba(255, 122, 77, 0.4)'; // Coral highlights
    for (let i = 0; i < 4; i++) {
        const theta = (i / 4) * Math.PI * 2 + angle3d;
        
        const px = spoolRadius * Math.sin(theta);
        const py = spoolRadius * Math.cos(theta);

        const sFrontX = cx + px;
        const sFrontY = cy + py * 0.4 - 40 * 0.2;
        
        const sBackX = cx + px;
        const sBackY = cy + py * 0.4 + 40 * 0.2;

        ctx3d.moveTo(sFrontX, sFrontY);
        ctx3d.lineTo(sBackX, sBackY);
    }
    ctx3d.stroke();

    // Draw mechanical handle arm
    ctx3d.beginPath();
    ctx3d.strokeStyle = 'var(--color-sunset-coral)';
    ctx3d.lineWidth = 3;
    
    const hAngle = angle3d * 0.8;
    const hx = 60 * Math.sin(hAngle);
    const hy = 60 * Math.cos(hAngle);

    // Draw handle shaft
    ctx3d.moveTo(cx, cy);
    ctx3d.lineTo(cx + hx, cy + hy * 0.4 + 50);
    ctx3d.stroke();

    // Draw handle knob
    ctx3d.beginPath();
    ctx3d.arc(cx + hx, cy + hy * 0.4 + 50, 8, 0, Math.PI * 2);
    ctx3d.fillStyle = 'var(--color-foam)';
    ctx3d.fill();
}

window.open3DViewer = function(productId) {
    active3dProduct = products.find(p => p.id === productId);
    if (!active3dProduct) return;

    // Fill detail cards
    document.getElementById('prod-3d-name').textContent = active3dProduct.name;
    const lang = localStorage.getItem('rosi-language') || 'en';
    document.getElementById('prod-3d-desc').textContent = active3dProduct.desc[lang] || active3dProduct.desc['en'];
    document.getElementById('prod-3d-price').textContent = `€${active3dProduct.price.toFixed(2)}`;

    // Connect button
    const addBtn = document.getElementById('prod-3d-add-btn');
    addBtn.setAttribute('onclick', `addToCart('${active3dProduct.id}'); close3DModal();`);

    // Show modal
    document.getElementById('prod-3d-modal').classList.add('active');

    // Init canvas rendering
    setTimeout(() => {
        init3DProductCanvas();
        draw3DWireframe();
    }, 100);
};

window.close3DModal = function() {
    document.getElementById('prod-3d-modal').classList.remove('active');
    active3dProduct = null;
    ctx3d = null;
};

// ==========================================
// 4. AR Viewfinder Camera Simulation Modal
// ==========================================
let arVideoTrack = null;
let activeArSouvenir = null;

window.openARViewer = function(productId) {
    activeArSouvenir = products.find(p => p.id === productId);
    if (!activeArSouvenir) return;

    // Set UI labels
    document.getElementById('ar-asset-label').textContent = activeArSouvenir.name.split(' ').slice(1).join(' ');
    
    // Toggle modal visibility
    document.getElementById('ar-preview-modal').classList.add('active');

    // Attempt actual camera permission using WebXR / media stream
    const cameraSimView = document.querySelector('.ar-camera-view-sim');
    
    // Inject video node if not already present
    let videoEl = document.getElementById('ar-webcam-feed');
    if (!videoEl) {
        videoEl = document.createElement('video');
        videoEl.id = 'ar-webcam-feed';
        videoEl.autoplay = true;
        videoEl.playsInline = true;
        videoEl.style.position = 'absolute';
        videoEl.style.top = '0';
        videoEl.style.left = '0';
        videoEl.style.width = '100%';
        videoEl.style.height = '100%';
        videoEl.style.objectFit = 'cover';
        videoEl.style.zIndex = '1';
        cameraSimView.prepend(videoEl);
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(stream => {
            videoEl.srcObject = stream;
            arVideoTrack = stream.getVideoTracks()[0];
            videoEl.style.display = 'block';
        })
        .catch(err => {
            console.log("Webcam access denied. Falling back to digital radar simulation grid.", err);
            // Hide video stream node if blocked
            videoEl.style.display = 'none';
        });

    setupArDragEvents();
};

window.closeARModal = function() {
    document.getElementById('ar-preview-modal').classList.remove('active');
    
    // Stop camera stream track
    if (arVideoTrack) {
        arVideoTrack.stop();
        arVideoTrack = null;
    }
    
    const videoEl = document.getElementById('ar-webcam-feed');
    if (videoEl) videoEl.srcObject = null;

    activeArSouvenir = null;
};

// Draggable AR Asset math variables
let arScale = 1.0;
let arRotation = 0;

window.rotateArAsset = function(deg) {
    arRotation += deg;
    updateArAssetTransform();
};

window.scaleArAsset = function(multiplier) {
    arScale = Math.max(0.5, Math.min(2.5, arScale * multiplier));
    updateArAssetTransform();
};

function updateArAssetTransform() {
    const asset = document.getElementById('ar-movable-asset');
    if (asset) {
        asset.style.transform = `translate(${arAssetOffset.x}px, ${arAssetOffset.y}px) rotate(${arRotation}deg) scale(${arScale})`;
    }
}

// Drag logic
let arAssetOffset = { x: 0, y: 0 };
let isDraggingAr = false;
let dragStartPos = { x: 0, y: 0 };

function setupArDragEvents() {
    const asset = document.getElementById('ar-movable-asset');
    const bounds = document.querySelector('.ar-camera-view-sim');
    if (!asset || !bounds) return;

    // Reset initial transforms
    arScale = 1.0;
    arRotation = 0;
    arAssetOffset = { x: 0, y: 0 };
    updateArAssetTransform();

    asset.addEventListener('mousedown', dragStart);
    bounds.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);

    // Touch
    asset.addEventListener('touchstart', dragStart);
    bounds.addEventListener('touchmove', dragMove);
    window.addEventListener('touchend', dragEnd);

    function dragStart(e) {
        isDraggingAr = true;
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        dragStartPos = { x: clientX - arAssetOffset.x, y: clientY - arAssetOffset.y };
    }

    function dragMove(e) {
        if (!isDraggingAr) return;
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        arAssetOffset.x = clientX - dragStartPos.x;
        arAssetOffset.y = clientY - dragStartPos.y;

        updateArAssetTransform();
    }

    function dragEnd() {
        isDraggingAr = false;
    }
}

window.captureAR = function() {
    // Shutter flash effect
    const cameraSimView = document.querySelector('.ar-camera-view-sim');
    const flash = document.createElement('div');
    flash.style.position = 'absolute';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.backgroundColor = '#ffffff';
    flash.style.zIndex = '999';
    flash.style.opacity = '1';
    flash.style.transition = 'opacity 0.5s ease-out';
    cameraSimView.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 500);
    }, 100);

    const lang = localStorage.getItem('rosi-language') || 'en';
    let msg = "Souvenir locked! AR photo saved to your device gallery.";
    if (lang === 'vi') msg = "Đã khóa mục tiêu! Ảnh chụp AR đã được lưu vào thư viện thiết bị của bạn.";
    if (lang === 'de') msg = "Souvenir fixiert! AR-Foto wurde in Ihrer Galerie gespeichert.";

    setTimeout(() => alert(msg), 200);
};

// ==========================================
// 5. Gear Finder Questionnaire logic
// ==========================================
let gfCurrentStep = 1;
const gfQuestions = document.querySelectorAll('.gf-question-slide');
const gfDots = document.querySelectorAll('.gf-step-dot');
const gfNextBtn = document.getElementById('gf-next');
const gfPrevBtn = document.getElementById('gf-prev');

function updateGearFinderUI() {
    gfQuestions.forEach(q => {
        q.classList.remove('active');
        if (parseInt(q.getAttribute('data-step')) === gfCurrentStep) {
            q.classList.add('active');
        }
    });

    gfDots.forEach(dot => {
        dot.classList.remove('active');
        if (parseInt(dot.getAttribute('data-step')) <= gfCurrentStep) {
            dot.classList.add('active');
        }
    });

    const lang = localStorage.getItem('rosi-language') || 'en';

    if (gfCurrentStep === 1) {
        gfPrevBtn.style.visibility = 'hidden';
    } else {
        gfPrevBtn.style.visibility = 'visible';
    }

    if (gfCurrentStep === 4) {
        if (lang === 'vi') gfNextBtn.textContent = "Hoàn thành";
        else if (lang === 'de') gfNextBtn.textContent = "Fertig";
        else if (lang === 'fr') gfNextBtn.textContent = "Terminer";
        else if (lang === 'es') gfNextBtn.textContent = "Finalizar";
        else if (lang === 'it') gfNextBtn.textContent = "Fine";
        else gfNextBtn.textContent = "Finish";
        renderGearFinderResult();
    } else {
        if (lang === 'vi') gfNextBtn.textContent = "Câu hỏi tiếp";
        else if (lang === 'de') gfNextBtn.textContent = "Nächste";
        else if (lang === 'fr') gfNextBtn.textContent = "Suivant";
        else if (lang === 'es') gfNextBtn.textContent = "Siguiente";
        else if (lang === 'it') gfNextBtn.textContent = "Avanti";
        else gfNextBtn.textContent = "Next Question";
    }
}

function handleGfNext() {
    if (gfCurrentStep < 4) {
        gfCurrentStep++;
        updateGearFinderUI();
    } else {
        gfCurrentStep = 1;
        updateGearFinderUI();
    }
}

function handleGfPrev() {
    if (gfCurrentStep > 1) {
        gfCurrentStep--;
        updateGearFinderUI();
    }
}

function renderGearFinderResult() {
    const resultBox = document.getElementById('gf-recommendation-result');
    if (!resultBox) return;

    const destination = document.querySelector('input[name="gf-dest"]:checked')?.value || 'norway';
    const target = document.querySelector('input[name="gf-target"]:checked')?.value || 'giant';
    const skill = document.querySelector('input[name="gf-skill"]:checked')?.value || 'beginner';

    let pkgName = "Rosi All-Water Marine Voyager Kit";
    let pkgPrice = 390.00;
    let pkgIcon = "gift-outline";
    let pkgDesc = "A versatile package containing a medium carbon rod, saltwater spinning reel, and 3 standard lures.";

    if (destination === "norway" && target === "giant") {
        pkgName = "Rosi Arctic Titan Heavy Trawler Pack";
        pkgPrice = 590.00;
        pkgIcon = "ribbon-outline";
        pkgDesc = "Specially compiled for freezing deep-water cod & halibut. Includes the Heavy Ocean Troller Rod, watertight 9-bearing reel, and 2 rattling lures.";
    } else if (destination === "maldives" || target === "light") {
        pkgName = "Rosi Lagoon Explorer Spinning Pack";
        pkgPrice = 360.00;
        pkgIcon = "sparkles-outline";
        pkgDesc = "Ideal for tropical lagoons. Includes the Pro Cast Reel, jerkbait lures, and a beautiful Maldives shell keyring souvenir.";
    } else if (destination === "amalfi") {
        pkgName = "Rosi BlueCoast Medium Troller Kit";
        pkgPrice = 420.00;
        pkgIcon = "boat-outline";
        pkgDesc = "Perfect for Mediterranean coastal waters. Includes the DeepSea Carbon rod, squid jigs, and a lemonwood souvenir anchor.";
    }

    const lang = localStorage.getItem('rosi-language') || 'en';
    let btnText = "Add Package to Cart";
    if (lang === 'vi') {
        btnText = "Thêm Gói Này Vào Giỏ";
        if (pkgName.includes("Arctic")) {
            pkgName = "Combo Đồ Câu Khơi Xa Rosi Arctic Titan";
            pkgDesc = "Thiết kế riêng cho việc câu cá tuyết và cá bơn khổng lồ vùng biển băng. Gồm Cần câu hạng nặng Ocean Troller, máy câu 9 vòng bi chống mặn và 2 mồi rung.";
        } else if (pkgName.includes("Tropical")) {
            pkgName = "Bộ Cần Câu Rạn San Hô Rosi Tropical Reef";
            pkgDesc = "Lý tưởng cho các rạn san hô nông nhiệt đới. Gồm máy câu Pro Cast, mồi jerkbait và móc khóa ngọc trai Maldives.";
        } else {
            pkgName = "Gói Cần Câu Biển Rosi BlueCoast Troller";
            pkgDesc = "Hoàn hảo cho vùng biển vịnh Amalfi. Gồm cần DeepSea Carbon, mồi mực Sunset Coral và quà lưu niệm gỗ chanh.";
        }
    } else if (lang === 'de') {
        btnText = "Paket in den Warenkorb";
        if (pkgName.includes("Arctic")) {
            pkgName = "Rosi Arktis-Titan Schwerlast-Paket";
            pkgDesc = "Spezial-Zusammenstellung für Dorsch & Heilbutt im Eismeer. Enthält die schwere Rute, wasserdichte Rolle und 2 Rasselköder.";
        } else if (pkgName.includes("Tropical")) {
            pkgName = "Rosi Tropenriff Spinnfischer-Set";
            pkgDesc = "Ideal für tropische Lagunen. Enthält die Pro Cast Rolle, Jerkbaits und ein Malediven-Muschel-Souvenir.";
        } else {
            pkgName = "Rosi BlueCoast Schleppfischer-Set";
            pkgDesc = "Perfekt für das Mittelmeer. Enthält die Carbonrute, Tintenfisch-Köder und das Zitronenholz-Souvenir.";
        }
    }

    resultBox.innerHTML = `
        <div class="gfr-img">
            <ion-icon name="${pkgIcon}"></ion-icon>
        </div>
        <div class="gfr-details">
            <span class="gfr-tag">RECOMMENDED SETUP</span>
            <h5 class="gfr-name">${pkgName}</h5>
            <p class="gfr-desc">${pkgDesc}</p>
            <div class="gfr-price-line">
                <span class="gfr-price">€${pkgPrice.toFixed(2)}</span>
                <button class="btn btn-accent btn-sm" onclick="addToCart('${pkgName.replace(/\s+/g, '-').toLowerCase()}', '${pkgName}', ${pkgPrice}, '${pkgIcon}')">
                    <ion-icon name="cart-outline"></ion-icon> ${btnText}
                </button>
            </div>
        </div>
    `;
}

// Bind events
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-filter');
            renderProducts(cat);
        });
    });

    // Drawer events
    const cartToggleBtn = document.getElementById('cart-toggle');
    const cartCloseBtn = document.getElementById('cart-close-btn');

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', () => {
        closeCartDrawer();
        close3DModal();
    });

    // Gear Finder Events
    if (gfNextBtn) gfNextBtn.addEventListener('click', handleGfNext);
    if (gfPrevBtn) gfPrevBtn.addEventListener('click', handleGfPrev);

    document.addEventListener('languageChanged', () => {
        renderProducts();
        updateCartUI();
        if (gfCurrentStep === 4) {
            renderGearFinderResult();
        }
    });
});
