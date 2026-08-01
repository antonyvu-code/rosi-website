// ROSI — Interactive World Map, Hubs Database & Sidebar Coordination

const hubsDatabase = {
    en: {
        amalfi: {
            name: "Amalfi Coast, Italy",
            desc: "Navigate vertical Mediterranean cliffs. Charter high-speed Riva boats, catch sea bream, and dine under cliffside lemon groves.",
            tags: ["Riva Charter", "Lemon Grove Dine", "Parasailing"],
            img: "assets/amalfi.png"
        },
        norway: {
            name: "Lofoten, Norway",
            desc: "Experience extreme arctic fishing under the Northern Lights. Catch massive cod, halibut, and enjoy private waterfront log-cabin grills.",
            tags: ["Arctic Trawlers", "Waterfront Grill", "Sea Kayaking"],
            img: "assets/norway.png"
        },
        maldives: {
            name: "Maldives Archipelago",
            desc: "Ultimate tropical luxury. Sail shallow sandbanks, spearfish giant trevally, and feast on a private island prepared by a personal chef.",
            tags: ["Catamarans", "Private Sandbank", "Flyboards"],
            img: "assets/maldives.png"
        },
        hawaii: {
            name: "Oahu, Hawaii",
            desc: "Ride the massive Pacific swells. Hook deep-sea yellowfin tuna (Ahi) and end your evening with a traditional coastal luau banquet.",
            tags: ["Deep Sea Gear", "Shoreline Luau", "Surf Lessons"],
            img: "assets/hawaii.png"
        },
        tokyo: {
            name: "Tokyo Bay, Japan",
            desc: "Where technology meets tradition. Catch marine seabass and black sea bream, then enjoy omakase at our Michelin-starred sushi counter.",
            tags: ["Pro Rods", "Michelin Sushi", "Skyline Cruising"],
            img: "assets/tokyo.png"
        }
    },
    de: {
        amalfi: {
            name: "Amalfiküste, Italien",
            desc: "Segeln Sie entlang vertikaler Klippen. Mieten Sie Riva-Boote, fangen Sie Goldbrassen und speisen Sie in Zitronenhainen am Hang.",
            tags: ["Riva-Charter", "Gourmetgarten", "Parasailing"],
            img: "assets/amalfi.png"
        },
        norway: {
            name: "Lofoten, Norwegen",
            desc: "Arktisches Extremangeln unter den Nordlichtern. Fangen Sie Dorsch, Heilbutt und genießen Sie private Fischgrills am Fjord.",
            tags: ["Arktis-Trawler", "Fjord-Grills", "Seekajak"],
            img: "assets/norway.png"
        },
        maldives: {
            name: "Malediven-Archipel",
            desc: "Tropischer Luxus pur. Segeln Sie über Sandbänke, angeln Sie Riesen-Stachelmakrelen und dinieren Sie auf einer einsamen Insel.",
            tags: ["Katamarane", "Insel-Dinner", "Flyboards"],
            img: "assets/maldives.png"
        },
        hawaii: {
            name: "Oahu, Hawaii",
            desc: "Erleben Sie die Dünung des Pazifiks. Fangen Sie Gelbflossen-Thunfisch (Ahi) und genießen Sie ein traditionelles Luau am Strand.",
            tags: ["Tiefsee-Ruten", "Strand-Luau", "Surfkurs"],
            img: "assets/hawaii.png"
        },
        tokyo: {
            name: "Tokioter Bucht, Japan",
            desc: "Tradition trifft Moderne. Fangen Sie Wolfsbarsch vor der Skyline und genießen Sie Omakase an unserer Sushi-Theke.",
            tags: ["Profi-Ruten", "Michelin-Sushi", "Skyline-Cruise"],
            img: "assets/tokyo.png"
        }
    },
    fr: {
        amalfi: {
            name: "Côte Amalfitaine, Italie",
            desc: "Naviguez sous les falaises de la Méditerranée. Louez des bateaux Riva, pêchez des dorades et dînez sous les citronniers côtiers.",
            tags: ["Charters Riva", "Dîner Citronniers", "Parasailing"],
            img: "assets/amalfi.png"
        },
        norway: {
            name: "Lofoten, Norvège",
            desc: "Pêche extrême en Arctique sous les aurores boréales. Attrapez des cabillauds géants et grillez-les au feu de bois près du fjord.",
            tags: ["Chalutiers Arctiques", "Grillades Fjord", "Kayak de Mer"],
            img: "assets/norway.png"
        },
        maldives: {
            name: "Archipel des Maldives",
            desc: "Luxe tropical ultime. Naviguez sur les bancs de sable, pêchez des carangues et savourez un buffet privé préparé par un chef.",
            tags: ["Catamarans", "Banc de Sable Privé", "Flyboards"],
            img: "assets/maldives.png"
        },
        hawaii: {
            name: "Oahu, Hawaï",
            desc: "Surfez sur la légendaire houle du Pacifique. Attrapez des thons jaunes (Ahi) et profitez d'un banquet Luau sur la plage.",
            tags: ["Matériel Grand Large", "Banquet Luau", "Cours de Surf"],
            img: "assets/hawaii.png"
        },
        tokyo: {
            name: "Baie de Tokyo, Japon",
            desc: "Quand la tradition rencontre la technologie. Pêchez des bars marins et savourez un omakase à notre comptoir à sushis étoilé.",
            tags: ["Cannes de Précision", "Sushis Étoilés", "Croisière Horizon"],
            img: "assets/tokyo.png"
        }
    },
    es: {
        amalfi: {
            name: "Costa Amalfitana, Italia",
            desc: "Navega entre acantilados mediterráneos. Alquila lanchas Riva, pesca doradas y cena bajo los limoneros de los barrancos.",
            tags: ["Charter Riva", "Cena en Limonares", "Parasailing"],
            img: "assets/amalfi.png"
        },
        norway: {
            name: "Lofoten, Noruega",
            desc: "Pesca ártica extrema bajo las auroras boreales. Pesca bacalaos gigantescos y caliéntate en cabañas de madera con brasas.",
            tags: ["Arrastreros Árticos", "Brasas de Puerto", "Kayaks de Mar"],
            img: "assets/norway.png"
        },
        maldives: {
            name: "Archipiélago de Maldivas",
            desc: "Lujo tropical. Recorre cồn cát de arena blanca, pesca carángidos gigantes y disfruta de un banquete en una isla privada.",
            tags: ["Catamaranes", "Isla Privada", "Flyboards"],
            img: "assets/maldives.png"
        },
        hawaii: {
            name: "Oahu, Hawaï",
            desc: "Navega por el imponente oleaje del Pacífico. Pesca atunes de aleta amarilla (Ahi) y disfruta del banquete luau en la playa.",
            tags: ["Pesca de Altura", "Banquete Luau", "Surf pro"],
            img: "assets/hawaii.png"
        },
        tokyo: {
            name: "Bahía de Tokio, Japón",
            desc: "Fusión de tecnología y tradición antigua. Pesca lubinas en la bahía y deléitate con sushis omakase en barra Michelin.",
            tags: ["Equipos de Precisión", "Sushi Michelin", "Navegación Nocturna"],
            img: "assets/tokyo.png"
        }
    },
    it: {
        amalfi: {
            name: "Costiera Amalfitana, Italia",
            desc: "Naviga sotto scogliere verticali mediterranee. Noleggia scafi Riva, pesca orate e pranza sotto pergolati di limoni.",
            tags: ["Noleggio Riva", "Cena tra i Limoni", "Parasailing"],
            img: "assets/amalfi.png"
        },
        norway: {
            name: "Lofoten, Norvegia",
            desc: "Esperienza di pesca artica estrema sotto l'aurora. Pesca enormi merluzzi, ippoglossi e grigliali in capanni sul fiordo.",
            tags: ["Pescherecci Artici", "Griglia sul Fiordo", "Kayak Marino"],
            img: "assets/norway.png"
        },
        maldives: {
            name: "Arcipelago delle Maldive",
            desc: "Lusso tropicale estremo. Naviga su lingue di sabbia bianca, pesca carangidi giganti e cena su un atollo deserto.",
            tags: ["Catamarani", "Lingua di Sabbia", "Flyboards"],
            img: "assets/maldives.png"
        },
        hawaii: {
            name: "Oahu, Hawaii",
            desc: "Scaica le maestose onde del Pacifico. Cattura tonni pinna gialla (Ahi) e partecipa a un luau tradizionale sulla spiaggia.",
            tags: ["Canne d'Altura", "Luau in Spiaggia", "Scuola Surf"],
            img: "assets/hawaii.png"
        },
        tokyo: {
            name: "Baia di Tokyo, Giappone",
            desc: "Incontro tra tecnologia e tradizioni millenarie. Pesca spigole e gusta omakase al bancone sushi stellato.",
            tags: ["Canne ad alta precisione", "Sushi Stellato", "Crociera sulla Baia"],
            img: "assets/tokyo.png"
        }
    },
    vi: {
        amalfi: {
            name: "Bờ biển Amalfi, Ý",
            desc: "Khám phá những vách đá Địa Trung Hải kỳ vĩ. Thuê du thuyền tốc độ cao Riva, câu cá tráp và dùng bữa dưới tán chanh vàng.",
            tags: ["Thuê tàu Riva", "Tiệc chanh vàng", "Parasailing"],
            img: "assets/amalfi.png"
        },
        norway: {
            name: "Quần đảo Lofoten, Na Uy",
            desc: "Câu cá cực lạnh dưới ánh bình minh bắc cực. Câu cá tuyết khổng lồ và sưởi ấm trong cabin gỗ nướng lò ven vịnh hẹp.",
            tags: ["Tàu Bắc Cực", "Nướng ven vịnh", "Chèo thuyền Kayak"],
            img: "assets/norway.png"
        },
        maldives: {
            name: "Quần đảo Maldives",
            desc: "Thiên đường nghỉ dưỡng nhiệt đới. Ra khơi bằng thuyền buồm Catamaran, câu cá khế và ăn tiệc buffet trên cồn cát riêng tư.",
            tags: ["Thuyền buồm", "Cồn cát riêng", "Flyboards"],
            img: "assets/maldives.png"
        },
        hawaii: {
            name: "Đảo Oahu, Hawaii",
            desc: "Vượt qua những ngọn sóng Thái Bình Dương huyền thoại. Câu cá ngừ vây vàng (Ahi) và dự tiệc nướng Luau truyền thống ven biển.",
            tags: ["Câu cá khơi xa", "Tiệc Luau truyền thống", "Học lướt sóng"],
            img: "assets/hawaii.png"
        },
        tokyo: {
            name: "Vịnh Tokyo, Nhật Bản",
            desc: "Sự kết hợp giữa cổ kính và công nghệ hiện đại. Câu cá vược ven vịnh và thưởng thức ẩm thực sushi Omakase chuẩn sao Michelin.",
            tags: ["Cần câu Pro", "Sushi Michelin", "Du ngoạn Skyline"],
            img: "assets/tokyo.png"
        }
    }
};

let selectedHubKey = null;

// Render Sidebar list cards
function renderLocationsSidebar() {
    const listContainer = document.getElementById('loc-list-cards');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    const lang = localStorage.getItem('rosi-language') || 'en';

    const keys = ["norway", "amalfi", "maldives", "tokyo", "hawaii"];

    keys.forEach(key => {
        const hub = hubsDatabase[lang][key];
        const card = document.createElement('div');
        card.className = `loc-list-card ${selectedHubKey === key ? 'active' : ''}`;
        card.setAttribute('data-key', key);
        
        card.innerHTML = `
            <img src="${hub.img}" alt="${hub.name}" class="loc-card-thumb">
            <div class="loc-card-info">
                <h4>${hub.name.split(',')[0]}</h4>
                <p>${hub.name.split(',')[1] || ''}</p>
            </div>
        `;

        // Click to select
        card.addEventListener('click', () => {
            showLocationBox(key);
            if (window.focusLocationOnGlobe) {
                window.focusLocationOnGlobe(key);
            }
        });

        // Hover triggers smooth globe rotation
        card.addEventListener('mouseenter', () => {
            if (window.focusLocationOnGlobe) {
                window.focusLocationOnGlobe(key);
            }
        });

        listContainer.appendChild(card);
    });
}

// Show box details
function showLocationBox(key) {
    selectedHubKey = key;
    const lang = localStorage.getItem('rosi-language') || 'en';
    const hub = hubsDatabase[lang][key];

    if (!hub) return;

    // Fill UI texts
    document.getElementById('loc-title').textContent = hub.name;
    document.getElementById('loc-desc').textContent = hub.desc;

    // Update tags list
    const tagsContainer = document.querySelector('#location-details .loc-tags');
    tagsContainer.innerHTML = '';
    hub.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'loc-tag';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });

    // Update Button Text
    const actionBtn = document.querySelector('#location-details .loc-action button');
    if (lang === 'vi') {
        actionBtn.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon> Đặt lịch tại ${hub.name.split(',')[0]}`;
    } else if (lang === 'de') {
        actionBtn.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon> Hub ${hub.name.split(',')[0]} buchen`;
    } else if (lang === 'fr') {
        actionBtn.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon> Réserver Hub ${hub.name.split(',')[0]}`;
    } else if (lang === 'es') {
        actionBtn.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon> Reservar en ${hub.name.split(',')[0]}`;
    } else if (lang === 'it') {
        actionBtn.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon> Prenota Hub ${hub.name.split(',')[0]}`;
    } else {
        actionBtn.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon> Book ${hub.name.split(',')[0]} Hub`;
    }

    // Toggle active class on sidebar cards
    document.querySelectorAll('.loc-list-card').forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('data-key') === key) {
            card.classList.add('active');
        }
    });

    // Show details box panel
    document.getElementById('location-details').classList.add('active');
}

// Close box details
function hideLocationBox() {
    document.getElementById('location-details').classList.remove('active');
    document.querySelectorAll('.loc-list-card').forEach(card => card.classList.remove('active'));
    selectedHubKey = null;
}

// Connect Location Box "Book" button to booking.js
function startBookingCurrentLocation() {
    if (!selectedHubKey) return;
    hideLocationBox();
    
    // Open the booking drawer and set location option
    openBooking(null, selectedHubKey);
}

// Language Change monitor (update details if active)
document.addEventListener('languageChanged', (e) => {
    renderLocationsSidebar();
    if (selectedHubKey) {
        showLocationBox(selectedHubKey);
    }
});

// Run loader
document.addEventListener('DOMContentLoaded', () => {
    renderLocationsSidebar();
});
