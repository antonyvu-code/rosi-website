// ROSI — Captain Voyager Loyalty Profile & My Catches Log Engine

// Initial logged catches array
let loggedCatches = [
    { id: 1, species: "Giant Trevally", weight: 8.5, location: "Maldives Archipelago", date: "2026-06-21", points: 50 },
    { id: 2, species: "Arctic Cod", weight: 14.2, location: "Lofoten, Norway", date: "2026-06-15", points: 50 }
];

let loyaltyPoints = 350;

// Render logged catches list
function renderCatchesList() {
    const listContainer = document.getElementById('catches-log-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    loggedCatches.forEach(c => {
        const item = document.createElement('div');
        item.className = 'catch-feed-item';
        item.innerHTML = `
            <div>
                <div class="cf-title">${c.weight}kg ${c.species}</div>
                <div class="cf-meta">${c.location} · ${c.date}</div>
            </div>
            <div class="cf-points">+${c.points} pts</div>
        `;
        listContainer.appendChild(item);
    });
}

// Log new catch
function logNewCatch(e) {
    e.preventDefault();

    const species = document.getElementById('catch-species').value;
    const weight = parseFloat(document.getElementById('catch-weight').value) || 1.0;
    const location = document.getElementById('catch-location').value;
    const dateToday = new Date().toISOString().split('T')[0];

    // Create entry
    const newCatch = {
        id: Date.now(),
        species,
        weight,
        location,
        date: dateToday,
        points: 50
    };

    // Add to top of list
    loggedCatches.unshift(newCatch);

    // Increase points
    loyaltyPoints += 50;

    // Update UI elements
    updateLoyaltyPointsUI();
    renderCatchesList();

    // Reset Form
    document.getElementById('catch-logger-form').reset();

    // Success alert notification
    const lang = localStorage.getItem('rosi-language') || 'en';
    let msg = `Trophy logged! 50 points added. Keep casting, Captain!`;
    if (lang === 'vi') msg = `Ghi nhận thành tích thành công! +50 điểm. Hãy tiếp tục khơi xa nhé, thuyền trưởng!`;
    if (lang === 'de') msg = `Fang eingetragen! +50 Punkte. Allzeit gute Fahrt, Kapitän!`;
    
    alert(msg);
}

// Recalculate loyalty status tier level
function updateLoyaltyPointsUI() {
    const pointsVal = document.getElementById('loyalty-points-value');
    const tierBadge = document.getElementById('loyalty-tier-badge');

    if (!pointsVal || !tierBadge) return;

    pointsVal.textContent = `${loyaltyPoints} pts`;

    // Tier thresholds
    if (loyaltyPoints < 400) {
        tierBadge.textContent = "Siren Silver Tier";
        tierBadge.style.color = "var(--color-sunset-coral)";
        tierBadge.style.borderColor = "var(--color-sunset-coral)";
        tierBadge.style.backgroundColor = "rgba(255, 122, 77, 0.15)";
    } else if (loyaltyPoints < 600) {
        tierBadge.textContent = "Siren Gold Tier";
        tierBadge.style.color = "#ffd700"; // gold color
        tierBadge.style.borderColor = "#ffd700";
        tierBadge.style.backgroundColor = "rgba(255, 215, 0, 0.15)";
    } else {
        tierBadge.textContent = "Siren Diamond Flagship Tier";
        tierBadge.style.color = "var(--color-lagoon-teal)";
        tierBadge.style.borderColor = "var(--color-lagoon-teal)";
        tierBadge.style.backgroundColor = "rgba(31, 168, 160, 0.15)";
    }
}

// Sidebar Drawer Open/Close controls
const accountDrawer = document.getElementById('account-drawer-panel');
const accountOverlay = document.getElementById('drawer-overlay');

function openAccountDrawer() {
    if (accountDrawer && accountOverlay) {
        accountDrawer.classList.add('active');
        accountOverlay.classList.add('active');
        // Close other drawers
        const cartDrawer = document.getElementById('cart-drawer-panel');
        if (cartDrawer) cartDrawer.classList.remove('active');
        const bookingDrawer = document.getElementById('booking-drawer-panel');
        if (bookingDrawer) bookingDrawer.classList.remove('active');
    }
}

function closeAccountDrawer() {
    if (accountDrawer && accountOverlay) {
        accountDrawer.classList.remove('active');
        if (!document.getElementById('booking-drawer-panel').classList.contains('active') && 
            !document.getElementById('cart-drawer-panel').classList.contains('active')) {
            accountOverlay.classList.remove('active');
        }
    }
}

// Bind load elements
document.addEventListener('DOMContentLoaded', () => {
    // Initial renders
    updateLoyaltyPointsUI();
    renderCatchesList();

    // Trigger toggle button bind
    const profileToggle = document.getElementById('profile-toggle');
    const closeBtn = document.getElementById('account-close-btn');

    if (profileToggle) profileToggle.addEventListener('click', openAccountDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeAccountDrawer);
    if (accountOverlay) accountOverlay.addEventListener('click', closeAccountDrawer);
});
