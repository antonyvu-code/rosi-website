// ROSI — Flagship Interactive Animations & Physics Waves Engine

// Localized dining outcome dictionary
const outcomeDatabase = {
    en: {
        sell: { title: "Trade-In (Credits)", desc: "Sell your catch back to the Rosi kitchen to offset charter fees. Credits will be automatically loaded to your Capitano loyalty account." },
        cook: { title: "Self Grill (DIY)", desc: "Utilize our oceanfront open fire grills. We provide marinades, tools, and a local recipe card to cook your prize yourself." },
        chef: { title: "Chef's Gourmet (5-Course)", desc: "Our Michelin-starred chefs handle your trophy. Includes custom sashimi, flame-charred loin, and broth pairings." }
    },
    de: {
        sell: { title: "Rückverkauf", desc: "Verkaufen Sie Ihren Fang für Guthaben zurück. Der Betrag wird direkt Ihrem Capitano-Kundenkonto gutgeschrieben." },
        cook: { title: "Selbst Grillen (DIY)", desc: "Nutzen Sie unsere Strandgrills. Wir stellen Marinaden, Werkzeuge und Rezeptkarten für die Zubereitung bereit." },
        chef: { title: "Gourmetchef (5-Gänge)", desc: "Unsere Sterneköche veredeln Ihren Fang. Enthält Sashimi, gegrilltes Filet und passende Brühen." }
    },
    fr: {
        sell: { title: "Vente Directe", desc: "Vendez votre poisson à la cuisine de Rosi pour obtenir des crédits sur votre compte de fidélité Capitano." },
        cook: { title: "Grillade Libre (DIY)", desc: "Utilisez nos barbecues en bord de mer. Nous fournissons marinades, ustensiles et fiches recettes." },
        chef: { title: "Chef Étoilé (5 Plats)", desc: "Nos chefs étoilés s'occupent de tout: découpes sashimi, filets grillés au feu de bois et bouillons raffinés." }
    },
    es: {
        sell: { title: "Venta Directa", desc: "Vende tu pesca a la cocina de Rosi. El crédito se cargará automáticamente en tu perfil Capitano." },
        cook: { title: "Parrilla Libre (DIY)", desc: "Usa nuestras parrillas frente al mar. Suministramos adobos, utensilios y una guía de recetas locales." },
        chef: { title: "Mesa del Chef (5 Platos)", desc: "Nuestros chefs galardonados preparan tu presa: cortes sashimi, lomo a la brasa y caldos selectos." }
    },
    it: {
        sell: { title: "Vendita Diretta", desc: "Vendi la tua cattura alla cucina di Rosi. Il credito verrà caricato sulla tua tessera fedeltà Capitano." },
        cook: { title: "Griglia in Spiaggia (DIY)", desc: "Usa le nostre griglie in riva al mare. Forniamo marinate, utensili e una scheda ricetta locale." },
        chef: { title: "Tavolo dello Chef (5 Portate)", desc: "I nostri chef stellati curano la tua preda: sashimi d'autore, filetto scottato e brodo abbinato." }
    },
    vi: {
        sell: { title: "Bán lại cá (Tích điểm)", desc: "Bán lại cá câu được cho nhà hàng để trừ vào chi phí thuê thuyền. Tiền sẽ được quy đổi thành điểm thưởng Capitano." },
        cook: { title: "Tự tay nướng (DIY)", desc: "Sử dụng quầy bếp lò nướng ven biển của Rosi. Chúng tôi cung cấp gia vị, nước sốt, dụng cụ và công thức nấu bản địa." },
        chef: { title: "Đầu bếp nấu (Đại tiệc 5 món)", desc: "Đầu bếp chuẩn sao Michelin trực tiếp xử lý: từ cắt lát sashimi tươi ngon đến nướng tảng lo cháy cạnh và súp cá bổ dưỡng." }
    }
};

let activeDiningOutcomeMode = 'chef';

// Global outcome selector
window.selectDiningOutcome = function(mode) {
    activeDiningOutcomeMode = mode;
    
    // Toggle active visually
    document.querySelectorAll('.visual-opt').forEach(opt => {
        opt.classList.remove('active');
        if (opt.classList.contains(`opt-${mode}`)) opt.classList.add('active');
    });

    document.querySelectorAll('.mode-box').forEach(box => {
        box.classList.remove('active');
        if (box.getAttribute('onclick') && box.getAttribute('onclick').includes(mode)) {
            box.classList.add('active');
        }
    });

    // Update texts
    const lang = localStorage.getItem('rosi-language') || 'en';
    const outcome = outcomeDatabase[lang][mode];
    if (outcome) {
        document.getElementById('outcome-title').textContent = outcome.title;
        document.getElementById('outcome-detail').textContent = outcome.desc;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Hero Ocean — now rendered in real-time WebGL by js/hero-waves.js
    //    (a graceful 2D gradient fallback lives inside that file)
    // ==========================================

    // ==========================================
    // 2. Cursor Water Bubble/Ripple Trail
    // ==========================================
    const cursorCanvas = document.getElementById('cursor-canvas');
    if (cursorCanvas) {
        const cCtx = cursorCanvas.getContext('2d');
        let cWidth = cursorCanvas.width = window.innerWidth;
        let cHeight = cursorCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            cWidth = cursorCanvas.width = window.innerWidth;
            cHeight = cursorCanvas.height = window.innerHeight;
        });

        let particles = [];

        class BubbleRipple {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 1;
                this.maxRadius = Math.random() * 25 + 15;
                this.opacity = 0.8;
                this.fadeRate = Math.random() * 0.02 + 0.015;
                this.color = Math.random() > 0.5 ? '31, 168, 160' : '255, 122, 77';
            }

            update() {
                this.radius += (this.maxRadius - this.radius) * 0.08;
                this.opacity -= this.fadeRate;
            }

            draw() {
                cCtx.beginPath();
                cCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                cCtx.strokeStyle = `rgba(${this.color}, ${this.opacity})`;
                cCtx.lineWidth = 1.5;
                cCtx.stroke();
            }
        }

        window.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.18) {
                particles.push(new BubbleRipple(e.clientX, e.clientY));
            }
        });

        function animateCursorTrail() {
            if (!cCtx) return;
            cCtx.clearRect(0, 0, cWidth, cHeight);
            
            particles.forEach((p, idx) => {
                p.update();
                p.draw();
                if (p.opacity <= 0) {
                    particles.splice(idx, 1);
                }
            });

            requestAnimationFrame(animateCursorTrail);
        }

        animateCursorTrail();
    }

    // ==========================================
    // 3. Experiences Card Scroll Observer
    // ==========================================
    const stepCards = document.querySelectorAll('.story-step-card');
    const visualStates = document.querySelectorAll('.visual-state');

    const cardObserverOptions = {
        root: null,
        threshold: 0.45,
        rootMargin: "0px"
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const stepNum = target.getAttribute('data-step');
                
                stepCards.forEach(c => c.classList.remove('active'));
                target.classList.add('active');

                visualStates.forEach(v => v.classList.remove('active'));
                const matchingVisual = document.getElementById(`visual-step${stepNum}`);
                if (matchingVisual) {
                    matchingVisual.classList.add('active');
                }
            }
        });
    }, cardObserverOptions);

    stepCards.forEach(card => cardObserver.observe(card));

    // ==========================================
    // 4. Interactive Fishing Game (Reeling the Prize)
    // ==========================================
    const reelBtn = document.getElementById('reel-action-btn');
    const reelProgress = document.getElementById('reel-progress');
    let reelPercent = 0;
    let autoDecayTimer = null;

    if (reelBtn && reelProgress) {
        
        function startDecay() {
            if (autoDecayTimer) clearInterval(autoDecayTimer);
            autoDecayTimer = setInterval(() => {
                if (reelPercent > 0 && reelPercent < 100) {
                    reelPercent = Math.max(0, reelPercent - 2);
                    updateProgressBar();
                }
            }, 300);
        }

        function updateProgressBar() {
            reelProgress.style.width = `${reelPercent}%`;
            reelProgress.textContent = `${Math.floor(reelPercent)}%`;

            if (reelPercent < 40) {
                reelProgress.style.backgroundColor = 'var(--color-sunset-coral)';
            } else if (reelPercent < 80) {
                reelProgress.style.backgroundColor = 'var(--color-lagoon-teal)';
            } else {
                reelProgress.style.backgroundColor = '#4caf50';
            }
        }

        reelBtn.addEventListener('click', () => {
            if (reelPercent >= 100) return;

            gsap.to(reelBtn.querySelector('ion-icon'), {
                rotation: '+=360',
                duration: 0.3,
                ease: 'power1.out'
            });

            reelPercent = Math.min(100, reelPercent + 8);
            updateProgressBar();

            const fishShadow = document.querySelector('.fish-shadow');
            if (fishShadow) {
                gsap.to(fishShadow, {
                    scale: 1.3,
                    duration: 0.15,
                    yoyo: true,
                    repeat: 1
                });
            }

            if (reelPercent >= 100) {
                clearInterval(autoDecayTimer);
                
                const message = document.querySelector('.reel-instructions');
                if (message) {
                    const currentLang = localStorage.getItem('rosi-language') || 'en';
                    if (translations[currentLang] && translations[currentLang]["story.reel.success"]) {
                        message.innerHTML = `🎣 <strong>${translations[currentLang]["story.reel.success"]}</strong>`;
                    } else {
                        // fallback
                        if (currentLang === 'vi') message.innerHTML = '🎣 <strong>Đã Câu Được Cá!</strong> Chúc mừng thuyền trưởng!';
                        else if (currentLang === 'de') message.innerHTML = '🎣 <strong>Fisch am Haken!</strong> Glückwunsch!';
                        else message.innerHTML = '🎣 <strong>Got a Bite!</strong> Congratulations, Captain!';
                    }
                    message.style.color = '#4caf50';
                }

                // Shake visual panel
                const visualPanel = document.querySelector('.story-visual-panel');
                gsap.to(visualPanel, {
                    x: 10,
                    yoyo: true,
                    repeat: 5,
                    duration: 0.05,
                    onComplete: () => {
                        gsap.set(visualPanel, { x: 0 });
                    }
                });
            } else {
                startDecay();
            }
        });

        startDecay();
    }

    // Bind languageChanged observer to reload step 3 texts
    document.addEventListener('languageChanged', () => {
        selectDiningOutcome(activeDiningOutcomeMode);
    });

    // Run initial step 3 select
    selectDiningOutcome('chef');
});
