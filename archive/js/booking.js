// ROSI — Ocean Experience Booking Desk Logic

// Base prices for experiences
const experienceBasePrices = {
    boat: 180.00,  // Boats & Charter (per person)
    dining: 90.00, // Catch & Dine (per person)
    water: 120.00, // Water sports (per person)
    diving: 150.00 // Scuba diving (per person)
};

// Location price adjustments
const locationAdjustments = {
    amalfi: 20.00,
    norway: 30.00,
    maldives: 50.00,
    hawaii: 25.00,
    tokyo: 15.00
};

// Sub-selection choices & pricing add-ons
const bookingSubOptions = {
    boat: [
        { id: "boat-trawler", name: "Coastal Fishing Trawler", price: 0.00, icon: "anchor-outline" },
        { id: "boat-catamaran", name: "Lagoon Luxury Catamaran", price: 80.00, icon: "boat-outline" },
        { id: "boat-yacht", name: "Riva Flybridge Yacht", price: 150.00, icon: "ribbon-outline" }
    ],
    dining: [
        { id: "dine-lunch", name: "Lunch Sitting (12:30 PM)", price: 0.00, icon: "sunny-outline" },
        { id: "dine-sunset", name: "Sunset Sitting (6:00 PM)", price: 30.00, icon: "sunny" },
        { id: "dine-chef", name: "Chef's Table (8:30 PM)", price: 60.00, icon: "star-outline" }
    ],
    water: [
        { id: "water-wake", name: "Wakeboarding Session", price: 0.00, icon: "water-outline" },
        { id: "water-para", name: "Parasailing Glide", price: 20.00, icon: "cloud-outline" },
        { id: "water-fly", name: "Flyboard Flight", price: 40.00, icon: "flash-outline" }
    ],
    diving: [
        { id: "dive-discover", name: "Discover Scuba (Beginner)", price: 0.00, icon: "sparkles-outline" },
        { id: "dive-reef", name: "Guided Reef Dive (Certified)", price: 35.00, icon: "fish-outline" },
        { id: "dive-padi", name: "PADI Open Water Course", price: 120.00, icon: "ribbon-outline" }
    ]
};

let selectedSubOptionId = null;

// Booking elements
const bookingDrawer = document.getElementById('booking-drawer-panel');
const bookingOverlay = document.getElementById('drawer-overlay');
const bookingForm = document.getElementById('booking-wizard-form');
const successMessage = document.getElementById('booking-success-message');

const selectLocation = document.getElementById('booking-location');
const selectExperience = document.getElementById('booking-experience');
const inputGuests = document.getElementById('booking-guests');
const pricePreview = document.getElementById('booking-total-price');

// Inject sub-options container on DOM load
function injectSubOptionsContainer() {
    const expField = selectExperience.parentElement;
    if (!expField) return;

    const subField = document.createElement('div');
    subField.className = 'booking-field';
    subField.id = 'booking-sub-options-field';
    subField.innerHTML = `
        <label id="booking-sub-options-label">Select Package Tier</label>
        <div class="booking-sub-grid" id="booking-sub-grid-container" style="display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 8px;">
            <!-- Clickable Cards injected dynamically -->
        </div>
    `;

    // Insert right after the experience dropdown field
    expField.insertAdjacentElement('afterend', subField);
}

// Draw the sub-option clickable cards
function renderSubOptionCards() {
    const container = document.getElementById('booking-sub-grid-container');
    const label = document.getElementById('booking-sub-options-label');
    if (!container || !selectExperience) return;

    const exp = selectExperience.value;
    const options = bookingSubOptions[exp] || [];

    const lang = localStorage.getItem('rosi-language') || 'en';
    if (lang === 'vi') {
        label.textContent = "Chọn Phân Khúc / Khung Giờ";
    } else if (lang === 'de') {
        label.textContent = "Paket-Option wählen";
    } else {
        label.textContent = "Select Package Tier";
    }

    container.innerHTML = '';

    options.forEach((opt, idx) => {
        // Set default selection to first item
        if (idx === 0 && !selectedSubOptionId) {
            selectedSubOptionId = opt.id;
        }

        const card = document.createElement('div');
        card.className = `mode-box ${selectedSubOptionId === opt.id ? 'active' : ''}`;
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'space-between';
        card.style.padding = '12px 16px';
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
            <div style="display:flex; align-items:center; gap: 10px; text-align: left;">
                <ion-icon name="${opt.icon}" style="font-size: 1.3rem; color: var(--color-lagoon-teal);"></ion-icon>
                <div>
                    <h5 style="margin:0; font-size:0.85rem; font-weight:600; color:var(--color-foam);">${opt.name}</h5>
                    <p style="margin:0; font-size:0.65rem; color:rgba(255,255,255,0.5);">Addon: +€${opt.price.toFixed(2)}</p>
                </div>
            </div>
            ${selectedSubOptionId === opt.id ? '<ion-icon name="checkmark-circle" style="color:var(--color-sunset-coral); font-size:1.2rem;"></ion-icon>' : ''}
        `;

        card.addEventListener('click', () => {
            selectedSubOptionId = opt.id;
            renderSubOptionCards();
            calculateBookingPrice();
        });

        container.appendChild(card);
    });
}

// Open booking drawer
window.openBooking = function(preselectedExperience = null, preselectedLocation = null) {
    if (bookingDrawer && bookingOverlay) {
        bookingDrawer.classList.add('active');
        bookingOverlay.classList.add('active');

        const cartDrawer = document.getElementById('cart-drawer-panel');
        if (cartDrawer) cartDrawer.classList.remove('active');
        const accountDrawer = document.getElementById('account-drawer-panel');
        if (accountDrawer) accountDrawer.classList.remove('active');

        if (preselectedLocation && selectLocation) {
            selectLocation.value = preselectedLocation;
        }

        const dateInput = document.getElementById('booking-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }

        if (bookingForm && successMessage) {
            bookingForm.style.display = 'block';
            successMessage.style.display = 'none';
            bookingForm.reset();
            if (preselectedLocation && selectLocation) {
                selectLocation.value = preselectedLocation;
            }
        }

        if (preselectedExperience && selectExperience) {
            selectExperience.value = preselectedExperience;
        }

        selectedSubOptionId = null; // Reset selection
        renderSubOptionCards();
        calculateBookingPrice();
    }
};

// Close booking drawer
window.closeBookingDrawer = function() {
    if (bookingDrawer && bookingOverlay) {
        bookingDrawer.classList.remove('active');
        if (!document.getElementById('cart-drawer-panel').classList.contains('active') &&
            !document.getElementById('account-drawer-panel').classList.contains('active')) {
            bookingOverlay.classList.remove('active');
        }
    }
};

// Pricing calculation logic
function calculateBookingPrice() {
    if (!selectLocation || !selectExperience || !inputGuests || !pricePreview) return;

    const loc = selectLocation.value;
    const exp = selectExperience.value;
    const guests = parseInt(inputGuests.value) || 1;

    const base = experienceBasePrices[exp] || 100.00;
    const adjustment = locationAdjustments[loc] || 0.00;

    // Retrieve sub-option addon pricing
    const options = bookingSubOptions[exp] || [];
    const activeOpt = options.find(o => o.id === selectedSubOptionId);
    const addonPrice = activeOpt ? activeOpt.price : 0.00;

    const total = (base + adjustment + addonPrice) * guests;
    pricePreview.textContent = `€${total.toFixed(2)}`;
}

// Submit Form
window.submitBooking = function(event) {
    event.preventDefault();

    const name = document.getElementById('booking-name').value;
    const date = document.getElementById('booking-date').value;

    if (!name || !date) return;

    const randomCode = `ROSI-${Math.floor(1000 + Math.random() * 9000)}-${selectLocation.value.substring(0,3).toUpperCase()}`;

    const successDesc = successMessage.querySelector('p');
    if (successDesc) {
        const lang = localStorage.getItem('rosi-language') || 'en';
        
        if (lang === 'vi') {
            successDesc.innerHTML = `Mã đặt chỗ của bạn là <strong>${randomCode}</strong>. Thuyền trưởng sẽ liên hệ với bạn qua email để xác nhận lịch trình chi tiết.`;
        } else if (lang === 'de') {
            successDesc.innerHTML = `Ihr Buchungscode lautet <strong>${randomCode}</strong>. Der Kapitän wird Sie bezüglich Details kontaktieren.`;
        } else {
            successDesc.innerHTML = `Your ocean voyage reservation code is <strong>${randomCode}</strong>. The captain will reach out via email regarding tides and coordinates.`;
        }
    }

    if (bookingForm && successMessage) {
        bookingForm.style.display = 'none';
        successMessage.style.display = 'block';
    }
};

// Bind events
document.addEventListener('DOMContentLoaded', () => {
    injectSubOptionsContainer();
    renderSubOptionCards();

    const closeBtn = document.getElementById('booking-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeBookingDrawer);

    if (selectLocation) selectLocation.addEventListener('change', calculateBookingPrice);
    if (selectExperience) {
        selectExperience.addEventListener('change', () => {
            selectedSubOptionId = null; // Reset selection on change
            renderSubOptionCards();
            calculateBookingPrice();
        });
    }
    if (inputGuests) {
        inputGuests.addEventListener('input', calculateBookingPrice);
        inputGuests.addEventListener('change', calculateBookingPrice);
    }
});
