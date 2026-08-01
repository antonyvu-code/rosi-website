// ROSI — Flagship Application Script, Multi-Language Map & Page Transitions

// 1. Translations dictionary for 6 languages (EN, DE, FR, ES, IT, VI)
const translations = {
    en: {
        "nav.home": "Home",
        "nav.locations": "Locations",
        "nav.experiences": "Experiences",
        "nav.shop": "Gear Shop",
        "nav.concierge": "Concierge",
        "nav.about": "About",
        "nav.booknow": "Book Now",
        "nav.activities": "Activities",
        "nav.diving": "Diving",
        "pillars.title": "Six Ocean Pillars",
        "pillars.subtitle": "One brand for the whole ocean lifestyle — from the first cast to the last dive.",
        "pillar.new": "NEW",
        "pillar.explore": "Explore",
        "pillar.boats.name": "Boats & Fishing",
        "pillar.boats.desc": "Charter our fleet with licensed captains and pro guides to the best fishing grounds.",
        "pillar.dine.name": "Catch & Dine",
        "pillar.dine.desc": "Sell it, self-cook it, or let our chefs plate your catch — straight from sea to table.",
        "pillar.diving.name": "Scuba Diving",
        "pillar.diving.desc": "Guided reef & wreck dives, PADI courses and freediving for every level.",
        "pillar.gear.name": "Gear Shop",
        "pillar.gear.desc": "Premium rods, reels and lures tuned for each coastline.",
        "pillar.souvenirs.name": "Souvenirs",
        "pillar.souvenirs.desc": "Limited-edition keepsakes unique to every Rosi hub.",
        "pillar.water.name": "Water Fun",
        "pillar.water.desc": "Surf, parasailing, flyboard and family water sports.",
        "booking.opt.diving": "Scuba Diving & Freediving",
        "diving.tag": "NEW · DIVE PILLAR",
        "diving.title": "Dive Into the Blue",
        "diving.desc": "Beyond the surface lies the other half of the Rosi journey. Glide over living coral gardens, explore historic wrecks, and meet the ocean face to face — guided by PADI-certified dive masters at every global hub.",
        "diving.f1.title": "PADI Courses",
        "diving.f1.desc": "From Discover Scuba to Divemaster certification.",
        "diving.f2.title": "Reef & Wreck Dives",
        "diving.f2.desc": "Guided day & night dives at every coastline.",
        "diving.f3.title": "Freediving",
        "diving.f3.desc": "Breath-hold coaching for the purists.",
        "diving.f4.title": "Safety First",
        "diving.f4.desc": "Premium gear, dive computers & insured operators.",
        "diving.cta1": "Book a Dive",
        "diving.cta2": "All Activities",
        "diving.depth": "Reefs · Wrecks · 5–40m",
        "diving.stat": "Dive Sites Worldwide",
        "hero.tagline": "GLOBAL OCEAN EXPERIENCE BRAND",
        "hero.title1": "From the sea",
        "hero.title2": "to your table",
        "hero.desc": "Embark on the ultimate ocean journey. Charter a boat, catch your own prize, and dine in our signature kitchens worldwide. Your ocean. Your way.",
        "hero.cta1": "Explore Hubs",
        "hero.cta2": "How It Works",
        "stats.locations": "Global Hubs",
        "stats.boats": "Charter Boats",
        "stats.catch": "Catches Prepared",
        "locations.title": "Our Global Coastlines",
        "locations.subtitle": "Rotate the 3D marine globe and select a hotspot to check active hubs, current captains, and dining calendars.",
        "globe.helper": "<ion-icon name='move-outline'></ion-icon> Drag to spin the Globe",
        "loc.tag.boats": "Boats",
        "loc.tag.dine": "Dine",
        "loc.tag.water": "Water Fun",
        "loc.slots.active": "Real-time availability: 4 Boats open today",
        "loc.action.book": "Book This Hub",
        "experiences.title": "Catch & Dine Story",
        "experiences.subtitle": "A seamless ocean-to-table journey. Learn how the Rosi circle of seafood comes together.",
        "story.v1": "1. Choose Your Vessel",
        "story.v2": "2. Reeling the Prize",
        "story.v3": "3. Feast From the Sea",
        "story.step1.title": "Choose Your Vessel & Guide",
        "story.step1.desc": "Select from our premium fleet, ranging from nimble speedboats for coastal sports to massive offshore trawlers equipped with pro guides and high-tech radar tracking.",
        "story.step1.b1": "Fully licensed captains",
        "story.step1.b2": "Premium sonar & fish-finding radar",
        "story.step1.b3": "Beverages & safety gear included",
        "story.step2.title": "Hook & Fight the Ocean Giants",
        "story.step2.desc": "Head to deep-water trenches or calm reefs. Under our guides' expert instruction, hook majestic tuna, cod, or mahi-mahi. Play the interactive mini-game on the left to feel the tension!",
        "story.step2.b1": "Professional rods & customized lures",
        "story.step2.b2": "Instruction for all skill levels",
        "story.step2.b3": "100% catch-guarantee packages available",
        "story.step3.title": "Your Catch, Your Cuisine",
        "story.step3.desc": "Once docked, choose how to celebrate your victory. Choose to sell your catch back to the kitchen to offset your tour, use our self-cooking bays with custom recipes, or have our Michelin-starred chefs curate a bespoke five-course feast.",
        "story.mode1.name": "Trade-In",
        "story.mode1.desc": "Sell to Rosi Kitchen for credits.",
        "story.mode2.name": "Do It Yourself",
        "story.mode2.desc": "Use our open seaside grills.",
        "story.mode3.name": "Chef's Gourmet",
        "story.mode3.desc": "Perfectly prepared sashimi & grills.",
        "story.reel.help": "Click button to reel in!",
        "story.opt.sell": "Sell",
        "story.opt.cook": "Self Cook",
        "story.opt.chef": "Chef Prepare",
        "shop.title": "Rosi Ocean Gear",
        "shop.subtitle": "Equip yourself with premium gear tailored for each global coastline, or purchase limited-edition local souvenirs.",
        "gf.title": "Rosi Smart Gear Finder",
        "gf.desc": "Answer three simple questions to find the ideal gear setup for your upcoming sea adventure.",
        "gf.q1": "Where are you planning to fish?",
        "gf.q2": "What is your main target category?",
        "gf.q3": "What is your marine fishing experience?",
        "gf.results.title": "Your Recommended Marine Package",
        "gf.prev": "Back",
        "gf.next": "Next Question",
        "dest.norway": "Lofoten, Norway (Cold Deep Sea)",
        "dest.maldives": "Maldives (Tropical Reefs)",
        "dest.amalfi": "Amalfi, Italy (Deep Mediterranean)",
        "target.giant": "Apex Monsters (Tuna, Cod)",
        "target.medium": "Reef Game (Trevally, Snapper)",
        "target.light": "Light Coastal (Squid, Seabass)",
        "skill.beginner": "Beginner (First-timer)",
        "skill.intermediate": "Intermediate (Hooked)",
        "skill.expert": "Expert (Sea Captain)",
        "shop.filter.all": "All Gear",
        "shop.filter.rods": "Rods & Reels",
        "shop.filter.lures": "Pro Lures",
        "shop.filter.souvenirs": "Souvenirs",
        "concierge.tag": "VIP SEA CONCIERGE",
        "concierge.title": "Bespoke Yacht Journeys",
        "concierge.desc": "Our flagship private desk caters to voyagers seeking ultimate seclusion. From superyacht provisioning, custom helipads, underwater submersibles, to Michelin chef partnerships, we tailor all coordinates to your desire.",
        "concierge.c1.title": "Superyacht Access",
        "concierge.c1.desc": "Charter multi-deck megayachts with helipads.",
        "concierge.c2.title": "Private Dining",
        "concierge.c2.desc": "Bespoke menus by localized Michelin chefs.",
        "concierge.form.title": "Initiate VIP Briefing",
        "concierge.lbl.req": "Bespoke Requirements",
        "concierge.submit": "Submit VIP Briefing",
        "about.tag": "OUR STORY",
        "about.title": "Deep Ocean Lifestyle",
        "about.desc1": "Rosi is not just a charter company or a tackle shop. We are a global community that lives for the swell, the thrill of the pull, and the taste of the fresh catch.",
        "about.desc2": "Founded by marine conservationists and professional yachtsmen, Rosi partners with local fishing communities at 15 hubs worldwide to promote sustainable ocean recreation.",
        "about.b1.title": "100% Sustainable",
        "about.b1.desc": "We adhere strictly to local seasonal limits.",
        "about.b2.title": "Michelin Chefs",
        "about.b2.desc": "World-class experts preparing your marine trophy.",
        "about.img1.title": "The Open Seas",
        "about.img1.desc": "85 fleets operating globally.",
        "about.img2.title": "Seaside Kitchens",
        "about.img2.desc": "Freshness redefined.",
        "footer.desc": "Global Ocean Experience & Sea-to-Table Lifestyle Brand. Since 2024.",
        "footer.links": "Quick Links",
        "footer.hubs": "Global Hubs",
        "footer.newsletter": "Join The Sea Log",
        "footer.news.desc": "Receive seasonal fishing forecasts and recipe releases.",
        "cart.title": "Your Gear Cart",
        "cart.empty": "Your cart is empty. Explore our Gear Shop or run the Gear Finder!",
        "cart.subtotal": "Subtotal",
        "cart.checkout": "Checkout Shop Order",
        "cart.add": "Add to Cart",
        "booking.title": "Ocean Booking Desk",
        "booking.lbl.hub": "Target Coastline Hub",
        "booking.lbl.pillar": "Select Marine Pillar",
        "booking.opt.boat": "Boats & Fishing Charter",
        "booking.opt.dine": "Catch & Dine Experience",
        "booking.opt.water": "Water Fun & Sports Package",
        "booking.lbl.date": "Voyage Date",
        "booking.lbl.guests": "Voyagers Count",
        "booking.lbl.name": "Full Name",
        "booking.est.price": "Estimated Total",
        "booking.confirm": "Confirm Booking Reservation",
        "booking.ok.title": "Voyage Scheduled!",
        "booking.ok.desc": "Your ocean reservation code has been logged. Look out for the captain's briefing email.",
        "booking.ok.close": "Back to Site",
        "account.title": "My Catches & Loyalty",
        "loyalty.points": "Loyalty Points:",
        "catches.log.title": "Log A Sea Catch",
        "catches.lbl.species": "Fish Species",
        "catches.lbl.weight": "Weight (kg)",
        "catches.btn.log": "Log Catch (+50 pts)",
        "catches.feed.title": "My Caught Log",
        "prod3d.helper": "<ion-icon name='move-outline'></ion-icon> Drag left/right to rotate product 360°",
        "ar.status": "AR Active: Anchoring Souvenir"
    },
    de: {
        "nav.home": "Startseite",
        "nav.locations": "Standorte",
        "nav.experiences": "Erlebnisse",
        "nav.shop": "Ausrüstung",
        "nav.concierge": "Concierge",
        "nav.about": "Über uns",
        "nav.booknow": "Buchen",
        "hero.tagline": "GLOBALE OZEAN-ERLEBNISMARKE",
        "hero.title1": "Vom Ozean direkt",
        "hero.title2": "auf Ihren Teller",
        "hero.desc": "Begeben Sie sich auf die ultimative Ozean-Reise. Mieten Sie ein Boot, fangen Sie Ihren Fisch und speisen Sie in unseren Küchen weltweit. Ihr Ozean. Ihr Abenteuer.",
        "hero.cta1": "Häfen erkunden",
        "hero.cta2": "Ablauf ansehen",
        "stats.locations": "Globale Stützpunkte",
        "stats.boats": "Charterboote",
        "stats.catch": "Zubereitete Fänge",
        "locations.title": "Unsere globalen Küsten",
        "locations.subtitle": "Drehen Sie den 3D-Globus und wählen Sie einen Hafen, um Verfügbarkeiten und Tischreservierungen zu prüfen.",
        "globe.helper": "<ion-icon name='move-outline'></ion-icon> Ziehen zum Drehen",
        "loc.tag.boats": "Boote",
        "loc.tag.dine": "Dine",
        "loc.tag.water": "Wassersport",
        "loc.slots.active": "Verfügbarkeit: 4 Boote heute frei",
        "loc.action.book": "Diesen Hafen buchen",
        "experiences.title": "Fang & Menü Story",
        "experiences.subtitle": "Ein nahtloser Übergang vom Meer zum Tisch. Erfahren Sie, wie sich der Rosi-Fischereikreislauf schließt.",
        "story.v1": "1. Boot wählen",
        "story.v2": "2. Den Fang einholen",
        "story.v3": "3. Festmahl genießen",
        "story.step1.title": "Wählen Sie Boot & Guide",
        "story.step1.desc": "Wählen Sie aus unserer Premium-Flotte: von wendigen Schnellbooten bis hin zu Hochseeschiffen mit professionellen Guides und modernster Fischradar-Technik.",
        "story.step1.b1": "Zertifizierte Kapitäne",
        "story.step1.b2": "Premium-Sonar & Fischradar",
        "story.step1.b3": "Getränke & Sicherheitsausrüstung inkl.",
        "story.step2.title": "Kampf mit den Giganten",
        "story.step2.desc": "Fahren Sie zu Tiefseegräben oder Riffen. Unter Anleitung unserer Guides haken Sie Thunfisch, Dorsch oder Mahi-Mahi. Nutzen Sie das Minispiel links, um den Zug zu spüren!",
        "story.step2.b1": "Profi-Ruten & Spezial-Köder",
        "story.step2.b2": "Anleitung für alle Könnerstufen",
        "story.step2.b3": "100% Fanggarantie-Pakete buchbar",
        "story.step3.title": "Ihr Fang, Ihr Gericht",
        "story.step3.desc": "Entscheiden Sie nach dem Anlegen. Verkaufen Sie den Fang an die Küche für Credits, grillen Sie ihn selbst an den Küstengrills oder lassen Sie sich von unseren Sterneköchen ein 5-Gänge-Menü zubereiten.",
        "story.mode1.name": "Rückverkauf",
        "story.mode1.desc": "Verkauf an Rosi für Guthaben.",
        "story.mode2.name": "Selbst kochen",
        "story.mode2.desc": "Nutzung unserer Strandgrills.",
        "story.mode3.name": "Gourmetchef",
        "story.mode3.desc": "Perfekt zubereitetes Sashimi & Grill.",
        "story.reel.help": "Klicken zum Einholen!",
        "story.opt.sell": "Verkauf",
        "story.opt.cook": "Selbst kochen",
        "story.opt.chef": "Chefkoch bereitet zu",
        "shop.title": "Rosi Meeres-Shop",
        "shop.subtitle": "Rüsten Sie sich mit Premium-Ausrüstung für jeden Standort aus oder kaufen Sie limitierte Souvenirs.",
        "gf.title": "Rosi Ausrüstungsfinder",
        "gf.desc": "Beantworten Sie 3 Fragen, um die perfekte Ausrüstung für Ihr Ozean-Abenteuer zu ermitteln.",
        "gf.q1": "Wo möchten Sie fischen?",
        "gf.q2": "Was ist Ihr Hauptzielfisch?",
        "gf.q3": "Welche Erfahrung bringen Sie mit?",
        "gf.results.title": "Ihre empfohlene Ausrüstung",
        "gf.prev": "Zurück",
        "gf.next": "Nächste Frage",
        "dest.norway": "Lofoten, Norwegen (Kaltes Meer)",
        "dest.maldives": "Malediven (Tropische Riffe)",
        "dest.amalfi": "Amalfi, Italien (Tiefes Mittelmeer)",
        "target.giant": "Giganten (Thunfisch, Dorsch)",
        "target.medium": "Rifffische (Makrelen, Schnapper)",
        "target.light": "Küstennah (Tintenfisch, Barsch)",
        "skill.beginner": "Anfänger (Erstes Mal)",
        "skill.intermediate": "Fortgeschritten (Begeistert)",
        "skill.expert": "Experte (Seebär)",
        "shop.filter.all": "Alle Produkte",
        "shop.filter.rods": "Ruten & Rollen",
        "shop.filter.lures": "Profi-Köder",
        "shop.filter.souvenirs": "Souvenirs",
        "concierge.tag": "VIP CONCIERGE DESK",
        "concierge.title": "Maßgeschneiderte Yachtreisen",
        "concierge.desc": "Unser privater Service für anspruchsvolle Reisende. Wir organisieren Megayachten, Privatköche, U-Boot-Tiefseetauchen und Hubschrauber-Transfers ganz nach Ihren Wünschen.",
        "concierge.c1.title": "Luxusyachten",
        "concierge.c1.desc": "Exklusive Charterboote mit Helipad.",
        "concierge.c2.title": "Privatkoch an Bord",
        "concierge.c2.desc": "Michelin-Niveau direkt auf dem Meer.",
        "concierge.form.title": "VIP-Anfrage senden",
        "concierge.lbl.req": "Spezielle Anforderungen",
        "concierge.submit": "VIP Briefing starten",
        "about.tag": "UNSERE STORY",
        "about.title": "Ozean als Lebensstil",
        "about.desc1": "Rosi ist nicht nur ein Charterbetrieb oder Köderladen. Wir sind eine globale Gemeinschaft, die für den Swell, den Drill und frischen Fisch lebt.",
        "about.desc2": "Gegründet von Umweltschützern und Yachtprofis arbeiten wir an 15 Standorten nachhaltig mit lokalen Fischern zusammen.",
        "about.b1.title": "100% Nachhaltig",
        "about.b1.desc": "Wir achten strikt auf lokale Schonzeiten.",
        "about.b2.title": "Sterne-Küchen",
        "about.b2.desc": "Erfahrene Küchenchefs veredeln Ihren Fang.",
        "about.img1.title": "Die offene See",
        "about.img1.desc": "85 Schiffe weltweit aktiv.",
        "about.img2.title": "Küstenküchen",
        "about.img2.desc": "Frische neu definiert.",
        "footer.desc": "Global Ocean Experience & Sea-to-Table Lifestyle Brand. Seit 2024.",
        "footer.links": "Links",
        "footer.hubs": "Stützpunkte",
        "footer.newsletter": "Logbuch abonnieren",
        "footer.news.desc": "Erhalten Sie Angelprognosen und Rezepte direkt in Ihr Postfach.",
        "cart.title": "Ihr Warenkorb",
        "cart.empty": "Ihr Warenkorb ist leer. Nutzen Sie den Ausrüstungsfinder!",
        "cart.subtotal": "Zwischensumme",
        "cart.checkout": "Bestellung abschließen",
        "cart.add": "In den Warenkorb",
        "booking.title": "Buchungscounter",
        "booking.lbl.hub": "Küsten-Stützpunkt",
        "booking.lbl.pillar": "Gewünschtes Erlebnis",
        "booking.opt.boat": "Charterboot & Angeln",
        "booking.opt.dine": "Fang & Dine Menü",
        "booking.opt.water": "Wassersport-Paket",
        "booking.lbl.date": "Reisedatum",
        "booking.lbl.guests": "Personenanzahl",
        "booking.lbl.name": "Vollständiger Name",
        "booking.est.price": "Geschätzter Preis",
        "booking.confirm": "Buchung anfragen",
        "booking.ok.title": "Fahrt geplant!",
        "booking.ok.desc": "Ihre Reservierungsnummer wurde erfasst. Sie erhalten in Kürze das Briefing per E-Mail.",
        "booking.ok.close": "Zurück zur Seite",
        "account.title": "Meine Fänge & Status",
        "loyalty.points": "Loyalitätspunkte:",
        "catches.log.title": "Fang eintragen",
        "catches.lbl.species": "Fischart",
        "catches.lbl.weight": "Gewicht (kg)",
        "catches.btn.log": "Fang loggen (+50 Pkt)",
        "catches.feed.title": "Mein Fangbuch",
        "prod3d.helper": "<ion-icon name='move-outline'></ion-icon> Ziehen zum Drehen (360°)",
        "ar.status": "AR Aktiv: Souvenir platziert"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.locations": "Destinations",
        "nav.experiences": "Expériences",
        "nav.shop": "Boutique",
        "nav.concierge": "Concierge",
        "nav.about": "À Propos",
        "nav.booknow": "Réserver",
        "hero.tagline": "MARQUE MONDIALE D'EXPÉRIENCE EN MER",
        "hero.title1": "De la mer",
        "hero.title2": "à votre table",
        "hero.desc": "Embarquez pour le voyage ultime. Louez un bateau, attrapez votre propre poisson et savourez-le dans nos cuisines signature. Votre océan. Votre aventure.",
        "hero.cta1": "Explorer les Hubs",
        "hero.cta2": "Comment ça marche",
        "stats.locations": "Hubs Mondiaux",
        "stats.boats": "Bateaux en charter",
        "stats.catch": "Prises Préparées",
        "locations.title": "Nos Côtes Globales",
        "locations.subtitle": "Faites pivoter le globe 3D et sélectionnez un hotspot pour réserver vos bateaux ou tables.",
        "globe.helper": "<ion-icon name='move-outline'></ion-icon> Glisser pour faire pivoter",
        "loc.tag.boats": "Bateaux",
        "loc.tag.dine": "Dîner",
        "loc.tag.water": "Sports Nautiques",
        "loc.slots.active": "Disponibilité: 4 bateaux libres aujourd'hui",
        "loc.action.book": "Réserver ce Hub",
        "experiences.title": "L'Histoire Catch & Dine",
        "experiences.subtitle": "Un voyage fluide de la mer à votre assiette. Découvrez le cycle de pêche durable de Rosi.",
        "story.v1": "1. Choisissez Votre Bateau",
        "story.v2": "2. Remonter la Prise",
        "story.v3": "3. Festin de la Mer",
        "story.step1.title": "Choisissez Votre Bateau & Guide",
        "story.step1.desc": "Sélectionnez parmi notre flotte premium, des bateaux rapides pour les sports côtiers aux chalutiers équipés de radars de pointe.",
        "story.step1.b1": "Capitaines certifiés",
        "story.step1.b2": "Sonar premium & radars de pêche",
        "story.step1.b3": "Boissons & équipements inclus",
        "story.step2.title": "Combattez les Géants de l'Océan",
        "story.step2.desc": "Rejoignez les fosses profondes. Sous les conseils de nos guides, attrapez thons et cabillauds. Jouez au mini-jeu interactif à gauche !",
        "story.step2.b1": "Cannes pro & leurres personnalisés",
        "story.step2.b2": "Instructions pour tous niveaux",
        "story.step2.b3": "Formules avec garantie de prise",
        "story.step3.title": "Votre Prise, Votre Cuisine",
        "story.step3.desc": "De retour au port, choisissez : vendez votre poisson à la cuisine, utilisez nos barbecues en libre-service, ou laissez nos chefs étoilés le préparer.",
        "story.mode1.name": "Vente Directe",
        "story.mode1.desc": "Vendez votre prise pour des crédits.",
        "story.mode2.name": "Cuisine Libre",
        "story.mode2.desc": "Grillez vous-même sur la plage.",
        "story.mode3.name": "Chef Gourmet",
        "story.mode3.desc": "Sashimis & grillades gastronomiques.",
        "story.reel.help": "Cliquez pour remonter !",
        "story.opt.sell": "Vendre",
        "story.opt.cook": "Cuisiner Soi-même",
        "story.opt.chef": "Préparé par le Chef",
        "shop.title": "Boutique Marine Rosi",
        "shop.subtitle": "Équipez-vous avec le matériel adapté à chaque destination ou achetez nos souvenirs locaux.",
        "gf.title": "Le Sélecteur de Matériel Smart",
        "gf.desc": "Répondez à 3 questions rapides pour trouver la canne et les leurres parfaits pour votre voyage.",
        "gf.q1": "Où prévoyez-vous de pêcher ?",
        "gf.q2": "Quelle est votre cible principale ?",
        "gf.q3": "Quel est votre niveau d'expérience ?",
        "gf.results.title": "Votre Pack Recommandé",
        "gf.prev": "Retour",
        "gf.next": "Suivant",
        "dest.norway": "Lofoten, Norvège (Mer Froide)",
        "dest.maldives": "Maldives (Récifs Tropicaux)",
        "dest.amalfi": "Amalfi, Italie (Méditerranée)",
        "target.giant": "Géants (Thon, Cabillaud)",
        "target.medium": "Récifs (Carangue, Vivaneau)",
        "target.light": "Côtier Léger (Seiche, Bar)",
        "skill.beginner": "Débutant (Première fois)",
        "skill.intermediate": "Intermédiaire (Passionné)",
        "skill.expert": "Expert (Vieux Loup de Mer)",
        "shop.filter.all": "Tous les produits",
        "shop.filter.rods": "Cannes & Moulinets",
        "shop.filter.lures": "Leurres Pro",
        "shop.filter.souvenirs": "Souvenirs",
        "concierge.tag": "SERVICE CLIENTÈLE VIP",
        "concierge.title": "Voyages en Yacht Sur-Mesure",
        "concierge.desc": "Notre bureau privé pour les voyageurs exigeants. Nous configurons des superyachts, des chefs à bord, de la plongée en sous-marin et des vols privés.",
        "concierge.c1.title": "Superyachts",
        "concierge.c1.desc": "Charters exclusifs avec hélisurfaces.",
        "concierge.c2.title": "Gastronomie à Bord",
        "concierge.c2.desc": "Cuisine étoilée préparée en mer.",
        "concierge.form.title": "Demande de Briefing VIP",
        "concierge.lbl.req": "Besoins Spécifiques",
        "concierge.submit": "Envoyer la Demande VIP",
        "about.tag": "NOTRE HISTOIRE",
        "about.title": "Style de vie Océanique",
        "about.desc1": "Rosi n'est pas qu'une compagnie de charter. Nous sommes une communauté mondiale vivant pour la houle, la touche et les poissons frais.",
        "about.desc2": "Fondé par des océanographes et skippers, nous travaillons en partenariat avec les pêcheurs locaux sur 15 hubs durables.",
        "about.b1.title": "100% Durable",
        "about.b1.desc": "Respect strict des saisons et des quotas.",
        "about.b2.title": "Chefs Étoilés",
        "about.b2.desc": "Des experts pour cuisiner vos trophées.",
        "about.img1.title": "Le Large",
        "about.img1.desc": "85 navires actifs dans le monde.",
        "about.img2.title": "Cuisines de Plage",
        "about.img2.desc": "La fraîcheur redéfinie.",
        "footer.desc": "Global Ocean Experience & Sea-to-Table Lifestyle Brand. Depuis 2024.",
        "footer.links": "Liens Rapides",
        "footer.hubs": "Destinations",
        "footer.newsletter": "Rejoindre le Journal de Bord",
        "footer.news.desc": "Recevez nos prévisions de pêche saisonnières et recettes de chefs.",
        "cart.title": "Votre Panier",
        "cart.empty": "Votre panier est vide. Utilisez notre questionnaire de matériel !",
        "cart.subtotal": "Sous-total",
        "cart.checkout": "Valider la commande",
        "cart.add": "Ajouter au Panier",
        "booking.title": "Comptoir de Réservation",
        "booking.lbl.hub": "Destination Hub",
        "booking.lbl.pillar": "Type d'Expérience",
        "booking.opt.boat": "Charter & Pêche",
        "booking.opt.dine": "Repas Catch & Dine",
        "booking.opt.water": "Sports Nautiques",
        "booking.lbl.date": "Date du Voyage",
        "booking.lbl.guests": "Nombre de Voyageurs",
        "booking.lbl.name": "Nom Complet",
        "booking.est.price": "Prix Estimé",
        "booking.confirm": "Confirmer la Réservation",
        "booking.ok.title": "Voyage Planifié !",
        "booking.ok.desc": "Votre code de réservation a été enregistré. Un email de briefing vous sera envoyé.",
        "booking.ok.close": "Retour au site",
        "account.title": "Mes Prises & Statut",
        "loyalty.points": "Points de Fidélité :",
        "catches.log.title": "Enregistrer une Prise",
        "catches.lbl.species": "Espèce de Poisson",
        "catches.lbl.weight": "Poids (kg)",
        "catches.btn.log": "Enregistrer (+50 pts)",
        "catches.feed.title": "Mon Journal de Pêche",
        "prod3d.helper": "<ion-icon name='move-outline'></ion-icon> Glisser pour pivoter (360°)",
        "ar.status": "AR Actif: Souvenir ancré"
    },
    es: {
        "nav.home": "Inicio",
        "nav.locations": "Destinos",
        "nav.experiences": "Experiencias",
        "nav.shop": "Tienda",
        "nav.concierge": "Conserje",
        "nav.about": "Nosotros",
        "nav.booknow": "Reservar",
        "hero.tagline": "MARCA GLOBAL DE EXPERIENCIA EN EL MAR",
        "hero.title1": "Del océano",
        "hero.title2": "a tu mesa",
        "hero.desc": "Embárcate en el viaje marino definitivo. Alquila un barco, pesca tu propia presa y cena en nuestras exclusivas cocinas costeras. Tu océano. Tu aventura.",
        "hero.cta1": "Explorar Hubs",
        "hero.cta2": "Cómo Funciona",
        "stats.locations": "Hubs Globales",
        "stats.boats": "Barcos de Charter",
        "stats.catch": "Presas Preparadas",
        "locations.title": "Nuestras Costas Globales",
        "locations.subtitle": "Gira el globo 3D y selecciona un punto de encuentro para ver disponibilidad de barcos y mesas.",
        "globe.helper": "<ion-icon name='move-outline'></ion-icon> Arrastra para girar el Globo",
        "loc.tag.boats": "Barcos",
        "loc.tag.dine": "Cena",
        "loc.tag.water": "Deportes Acuáticos",
        "loc.slots.active": "Disponibilidad: 4 barcos libres hoy",
        "loc.action.book": "Reservar este Hub",
        "experiences.title": "Historia de Pesca y Cena",
        "experiences.subtitle": "Un viaje fluido del océano al plato. Conoce el ciclo de pesca sostenible de Rosi.",
        "story.v1": "1. Elige tu Barco",
        "story.v2": "2. Recuperar la Presa",
        "story.v3": "3. Banquete del Mar",
        "story.step1.title": "Elige tu Barco y Guía",
        "story.step1.desc": "Selecciona entre nuestra flota premium, desde lanchas rápidas deportivas hasta grandes barcos de arrastre con sónar y radares.",
        "story.step1.b1": "Capitanes autorizados",
        "story.step1.b2": "Sónar premium y radar de pesca",
        "story.step1.b3": "Bebidas y chalecos incluidos",
        "story.step2.title": "Lucha contra los Gigantes del Mar",
        "story.step2.desc": "Navega hacia zonas profundas. Bajo la tutela de nuestros guías, pesca atunes o bacalaos. ¡Prueba el minijuego a la izquierda!",
        "story.step2.b1": "Cañas pro y señuelos a medida",
        "story.step2.b2": "Instrucción para todos los niveles",
        "story.step2.b3": "Garantía de pesca disponible",
        "story.step3.title": "Tu Pesca, tu Cocina",
        "story.step3.desc": "Al regresar, elige: vende tu pesca a la cocina, cocínala tú mismo en las parrillas libres, o deja que nuestros chefs galardonados la preparen.",
        "story.mode1.name": "Venta Directa",
        "story.mode1.desc": "Vende tu presa para acumular crédito.",
        "story.mode2.name": "Cocina Libre",
        "story.mode2.desc": "Cocina tú mismo en la playa.",
        "story.mode3.name": "Chef Gourmet",
        "story.mode3.desc": "Sashimi y parrilladas gourmet.",
        "story.reel.help": "¡Haz clic para recoger sedal!",
        "story.opt.sell": "Vender",
        "story.opt.cook": "Cocinar uno mismo",
        "story.opt.chef": "Preparado por Chef",
        "shop.title": "Tienda Náutica Rosi",
        "shop.subtitle": "Equípate con accesorios diseñados para cada costa o adquiere recuerdos exclusivos de cada hub.",
        "gf.title": "Buscador Inteligente de Equipos",
        "gf.desc": "Responde 3 preguntas rápidas para determinar la caña y señuelos ideales para tu viaje.",
        "gf.q1": "¿Dónde planeas ir a pescar?",
        "gf.q2": "¿Cuál es tu especie objetivo?",
        "gf.q3": "¿Cuál es tu nivel de experiencia?",
        "gf.results.title": "Tu Paquete Recomendado",
        "gf.prev": "Volver",
        "gf.next": "Siguiente",
        "dest.norway": "Lofoten, Noruega (Mar Frío)",
        "dest.maldives": "Maldivas (Arrecifes Tropicales)",
        "dest.amalfi": "Amalfi, Italia (Mar Mediterráneo)",
        "target.giant": "Gigantes (Atún, Bacalao)",
        "target.medium": "Arrecifes (Trevally, Pargo)",
        "target.light": "Costero Ligero (Sepia, Lubina)",
        "skill.beginner": "Principiante (Primera vez)",
        "skill.intermediate": "Intermedio (Aficionado)",
        "skill.expert": "Experto (Lobo de Mar)",
        "shop.filter.all": "Todos los productos",
        "shop.filter.rods": "Cañas y Carretes",
        "shop.filter.lures": "Señuelos Pro",
        "shop.filter.souvenirs": "Souvenirs",
        "concierge.tag": "SERVICIO VIP DE CONCIERGE",
        "concierge.title": "Viajes en Yate Personalizados",
        "concierge.desc": "Nuestra oficina privada para viajeros exclusivos. Diseñamos viajes en superyates, chefs privados, excursiones en submarino y vuelos.",
        "concierge.c1.title": "Superyates",
        "concierge.c1.desc": "Charters exclusivos con helipuertos.",
        "concierge.c2.title": "Menús Exclusivos",
        "concierge.c2.desc": "Comida de autor preparada a bordo.",
        "concierge.form.title": "Solicitud de Briefing VIP",
        "concierge.lbl.req": "Requisitos Particulares",
        "concierge.submit": "Iniciar Solicitud VIP",
        "about.tag": "NUESTRA HISTORIA",
        "about.title": "Vida en el Océano",
        "about.desc1": "Rosi no es solo alquiler de barcos o venta de señuelos. Somos una comunidad mundial que vive por y para el mar y el pescado fresco.",
        "about.desc2": "Fundada por biólogos marinos y marineros profesionales, colaboramos de forma sostenible con pescadores en 15 hubs.",
        "about.b1.title": "100% Sostenible",
        "about.b1.desc": "Respeto riguroso por las vedas locales.",
        "about.b2.title": "Chefs de Prestigio",
        "about.b2.desc": "Expertos culinarios preparan tus presas.",
        "about.img1.title": "Mar Abierto",
        "about.img1.desc": "85 embarcaciones activas en el mundo.",
        "about.img2.title": "Cocinas de Playa",
        "about.img2.desc": "Frescura redefinida.",
        "footer.desc": "Global Ocean Experience & Sea-to-Table Lifestyle Brand. Desde 2024.",
        "footer.links": "Enlaces Rápidos",
        "footer.hubs": "Destinos",
        "footer.newsletter": "Diario de Navegación",
        "footer.news.desc": "Recibe pronósticos de pesca y recetas de chefs locales.",
        "cart.title": "Tu Carrito",
        "cart.empty": "El carrito está vacío. ¡Usa nuestro buscador de equipos!",
        "cart.subtotal": "Subtotal",
        "cart.checkout": "Finalizar Compra",
        "cart.add": "Añadir al Carrito",
        "booking.title": "Mesa de Reservas",
        "booking.lbl.hub": "Destino Hub",
        "booking.lbl.pillar": "Tipo de Experiencia",
        "booking.opt.boat": "Charter y Pesca",
        "booking.opt.dine": "Pesca y Cena",
        "booking.opt.water": "Deportes Acuáticos",
        "booking.lbl.date": "Fecha del Viaje",
        "booking.lbl.guests": "Número de Viajeros",
        "booking.lbl.name": "Nombre Completo",
        "booking.est.price": "Precio Estimado",
        "booking.confirm": "Confirmar Reserva",
        "booking.ok.title": "¡Viaje Programado!",
        "booking.ok.desc": "Tu código de reserva ha sido registrado. Te enviaremos un email con el briefing.",
        "booking.ok.close": "Volver al sitio",
        "account.title": "Mis Capturas y Estado",
        "loyalty.points": "Puntos de Fidelidad:",
        "catches.log.title": "Registrar Captura",
        "catches.lbl.species": "Especie de Pescado",
        "catches.lbl.weight": "Peso (kg)",
        "catches.btn.log": "Registrar (+50 pts)",
        "catches.feed.title": "Mi Bitácora de Pesca",
        "prod3d.helper": "<ion-icon name='move-outline'></ion-icon> Arrastra para girar (360°)",
        "ar.status": "AR Activo: Souvenir colocado"
    },
    it: {
        "nav.home": "Home",
        "nav.locations": "Destinazioni",
        "nav.experiences": "Esperienze",
        "nav.shop": "Negozio",
        "nav.concierge": "Concierge",
        "nav.about": "Chi Siamo",
        "nav.booknow": "Prenota",
        "hero.tagline": "MARCHIO GLOBALE DI ESPERIENZE IN MARE",
        "hero.title1": "Dal mare",
        "hero.title2": "alla tua tavola",
        "hero.desc": "Intraprendi il viaggio marino definitivo. Noleggia una barca, pesca la tua preda e cenaci nelle nostre esclusive cucine costiere. Il tuo oceano. La tua avventura.",
        "hero.cta1": "Esplora gli Hub",
        "hero.cta2": "Come Funziona",
        "stats.locations": "Hub Globali",
        "stats.boats": "Barche in Charter",
        "stats.catch": "Prede Preparate",
        "locations.title": "Le Nostre Coste Globali",
        "locations.subtitle": "Ruota il globo 3D e seleziona un hotspot per verificare la disponibilità di barche e tavoli.",
        "globe.helper": "<ion-icon name='move-outline'></ion-icon> Trascina per ruotare il Globo",
        "loc.tag.boats": "Barche",
        "loc.tag.dine": "Cena",
        "loc.tag.water": "Sport Acquatici",
        "loc.slots.active": "Disponibilità: 4 barche libere oggi",
        "loc.action.book": "Prenota in questo Hub",
        "experiences.title": "Storia di Pesca e Cena",
        "experiences.subtitle": "Un viaggio fluido dal mare alla tavola. Scopri il ciclo di pesca sostenibile di Rosi.",
        "story.v1": "1. Scegli la tua Barca",
        "story.v2": "2. Recupera la Preda",
        "story.v3": "3. Banchetto del Mare",
        "story.step1.title": "Scegli la tua Barca e Guida",
        "story.step1.desc": "Seleziona dalla nostra flotta premium, da motoscafi sportivi a pescherecci d'altura equipaggiati con radar e sonar.",
        "story.step1.b1": "Capitani autorizzati",
        "story.step1.b2": "Sonar premium e radar da pesca",
        "story.step1.b3": "Bevande e dotazioni incluse",
        "story.step2.title": "Combatti con i Giganti del Mare",
        "story.step2.desc": "Naviga verso le fosse d'altura. Sotto la guida dei nostri esperti, pesca tonni o merluzzi. Prova il minigioco a sinistra !",
        "story.step2.b1": "Canne pro e esche su misura",
        "story.step2.b2": "Istruzioni per ogni livello",
        "story.step2.b3": "Garanzia di cattura disponibile",
        "story.step3.title": "La tua Pesca, la tua Cucina",
        "story.step3.desc": "Al rientro, scegli: vendi la tua pesca alla cucina, cucinala tu stesso sulle griglie in spiaggia, o lascia fare ai nostri chef stellati.",
        "story.mode1.name": "Vendita Diretta",
        "story.mode1.desc": "Vendi la tua preda per ricevere crediti.",
        "story.mode2.name": "Cucina Libera",
        "story.mode2.desc": "Cucina tu stesso sulle spiagge.",
        "story.mode3.name": "Chef Gourmet",
        "story.mode3.desc": "Sashimi e grigliate d'autore.",
        "story.reel.help": "Clicca per recuperare la lenza !",
        "story.opt.sell": "Vendi",
        "story.opt.cook": "Cucina da Solo",
        "story.opt.chef": "Preparato dallo Chef",
        "shop.title": "Negozio Nautico Rosi",
        "shop.subtitle": "Equipaggiati con accessori ideati per ciascuna costa o acquista souvenir esclusivi di ogni hub.",
        "gf.title": "Configuratore di Attrezzatura Smart",
        "gf.desc": "Rispondi a 3 rapide domande per trovare la canna e le esche perfette per il tuo viaggio.",
        "gf.q1": "Dove hai intenzione di pescare ?",
        "gf.q2": "Qual è la tua preda obiettivo ?",
        "gf.q3": "Qual è la tua esperienza di pesca ?",
        "gf.results.title": "Il tuo Pacchetto Consigliato",
        "gf.prev": "Indietro",
        "gf.next": "Avanti",
        "dest.norway": "Lofoten, Norvegia (Mare Freddo)",
        "dest.maldives": "Maldive (Barriere Tropicali)",
        "dest.amalfi": "Amalfi, Italia (Mar Mediterraneo)",
        "target.giant": "Giganti (Tonno, Merluzzo)",
        "target.medium": "Barriere (Trevally, Dentice)",
        "target.light": "Costiero Leggero (Seppie, Spigola)",
        "skill.beginner": "Principiante (Prima volta)",
        "skill.intermediate": "Intermedio (Appassionato)",
        "skill.expert": "Esperto (Lupo di Mare)",
        "shop.filter.all": "Tutti i prodotti",
        "shop.filter.rods": "Canne e Mulinelli",
        "shop.filter.lures": "Esche Pro",
        "shop.filter.souvenirs": "Souvenirs",
        "concierge.tag": "SERVIZIO ESCLUSIVO CONCIERGE",
        "concierge.title": "Viaggi in Yacht Personalizzati",
        "concierge.desc": "Il nostro servizio privato per viaggiatori esclusivi. Organizziamo superyacht, chef a bordo, escursioni in sottomarino e voli privati.",
        "concierge.c1.title": "Superyachts",
        "concierge.c1.desc": "Charter esclusivi con eliporti a bordo.",
        "concierge.c2.title": "Ristorazione Privata",
        "concierge.c2.desc": "Alta cucina preparata in mare.",
        "concierge.form.title": "Richiedi Briefing VIP",
        "concierge.lbl.req": "Requisiti Particolari",
        "concierge.submit": "Invia Richiesta VIP",
        "about.tag": "LA NOSTRA STORIA",
        "about.title": "Stile di Vita Oceanico",
        "about.desc1": "Rosi non è solo noleggio barche o vendita esche. Siamo una comunità globale che vive per il mare, il brivido della cattura e il pesce fresco.",
        "about.desc2": "Fondata da biologi marini e marinai professionisti, collaboriamo in modo sostenibile con i pescatori locali in 15 hub.",
        "about.b1.title": "100% Sostenibile",
        "about.b1.desc": "Rispetto rigoroso dei regolamenti locali.",
        "about.b2.title": "Chef Stellati",
        "about.b2.desc": "Chef stellati cucinano le tue prede.",
        "about.img1.title": "Mare Aperto",
        "about.img1.desc": "85 imbarcazioni attive nel mondo.",
        "about.img2.title": "Cucine di Spiaggia",
        "about.img2.desc": "La freschezza ridefinita.",
        "footer.desc": "Global Ocean Experience & Sea-to-Table Lifestyle Brand. Dal 2024.",
        "footer.links": "Collegamenti Rapidi",
        "footer.hubs": "Destinazioni",
        "footer.newsletter": "Diario di Bordo",
        "footer.news.desc": "Ricevi le previsioni di pesca e le ricette degli chef locali.",
        "cart.title": "Il tuo Carrello",
        "cart.empty": "Il carrello è vuoto. Usa il configuratore di attrezzatura !",
        "cart.subtotal": "Subtotale",
        "cart.checkout": "Procedi all'ordine",
        "cart.add": "Aggiungi al Carrello",
        "booking.title": "Desk Prenotazioni",
        "booking.lbl.hub": "Destinazione Hub",
        "booking.lbl.pillar": "Tipo di Esperienza",
        "booking.opt.boat": "Charter e Pesca",
        "booking.opt.dine": "Pesca e Cena",
        "booking.opt.water": "Sport Acquatici",
        "booking.lbl.date": "Data del Viaggio",
        "booking.lbl.guests": "Numero di Viaggiatori",
        "booking.lbl.name": "Nome Completo",
        "booking.est.price": "Prezzo Stimato",
        "booking.confirm": "Conferma Prenotazione",
        "booking.ok.title": "Viaggio Programmato !",
        "booking.ok.desc": "Il tuo codice di prenotazione è stato registrato. Ti invieremo un email col briefing.",
        "booking.ok.close": "Torna al sito",
        "account.title": "Le Mie Catture e Stato",
        "loyalty.points": "Punti Fedeltà:",
        "catches.log.title": "Registra una Cattura",
        "catches.lbl.species": "Specie di Pesce",
        "catches.lbl.weight": "Peso (kg)",
        "catches.btn.log": "Registra (+50 pt)",
        "catches.feed.title": "Il Mio Registro di Pesca",
        "prod3d.helper": "<ion-icon name='move-outline'></ion-icon> Trascina per ruotare (360°)",
        "ar.status": "AR Attivo: Souvenir ancorato"
    },
    vi: {
        "nav.home": "Trang chủ",
        "nav.locations": "Địa điểm",
        "nav.experiences": "Trải nghiệm",
        "nav.shop": "Cửa hàng",
        "nav.concierge": "Concierge",
        "nav.about": "Về Rosi",
        "nav.booknow": "Đặt lịch",
        "nav.activities": "Hoạt động",
        "nav.diving": "Lặn biển",
        "pillars.title": "Sáu Trụ Cột Đại Dương",
        "pillars.subtitle": "Một thương hiệu cho trọn vẹn phong cách sống biển — từ cú quăng cần đầu tiên đến cú lặn cuối ngày.",
        "pillar.new": "MỚI",
        "pillar.explore": "Khám phá",
        "pillar.boats.name": "Thuyền & Câu cá",
        "pillar.boats.desc": "Thuê đội thuyền cùng thuyền trưởng có giấy phép và hướng dẫn viên đến những ngư trường đẹp nhất.",
        "pillar.dine.name": "Câu & Thưởng thức",
        "pillar.dine.desc": "Bán lại, tự nấu, hoặc để đầu bếp Rosi chế biến chiến lợi phẩm của bạn — từ biển đến bàn ăn.",
        "pillar.diving.name": "Lặn biển",
        "pillar.diving.desc": "Lặn ngắm rạn san hô & xác tàu có hướng dẫn, khóa PADI và lặn tự do cho mọi trình độ.",
        "pillar.gear.name": "Cửa hàng đồ câu",
        "pillar.gear.desc": "Cần, máy câu và mồi cao cấp phù hợp từng bờ biển.",
        "pillar.souvenirs.name": "Đồ lưu niệm",
        "pillar.souvenirs.desc": "Quà lưu niệm phiên bản giới hạn riêng cho từng điểm đến Rosi.",
        "pillar.water.name": "Vui chơi nước",
        "pillar.water.desc": "Lướt sóng, dù bay, flyboard và thể thao nước cho cả gia đình.",
        "booking.opt.diving": "Lặn biển & Lặn tự do",
        "diving.tag": "MỚI · TRỤ CỘT LẶN BIỂN",
        "diving.title": "Đắm Mình Vào Lòng Biển",
        "diving.desc": "Bên dưới mặt nước là nửa còn lại của hành trình Rosi. Lướt qua những khu vườn san hô sống động, khám phá xác tàu lịch sử và đối diện đại dương — cùng các huấn luyện viên lặn được chứng nhận PADI tại mọi điểm đến.",
        "diving.f1.title": "Khóa học PADI",
        "diving.f1.desc": "Từ Discover Scuba đến chứng chỉ Divemaster.",
        "diving.f2.title": "Lặn rạn & xác tàu",
        "diving.f2.desc": "Lặn ngày & đêm có hướng dẫn tại mọi bờ biển.",
        "diving.f3.title": "Lặn tự do",
        "diving.f3.desc": "Huấn luyện nín thở cho người đam mê thuần túy.",
        "diving.f4.title": "An toàn là trên hết",
        "diving.f4.desc": "Thiết bị cao cấp, máy lặn & đơn vị vận hành có bảo hiểm.",
        "diving.cta1": "Đặt buổi lặn",
        "diving.cta2": "Tất cả hoạt động",
        "diving.depth": "Rạn · Xác tàu · 5–40m",
        "diving.stat": "Điểm lặn trên toàn cầu",
        "hero.tagline": "THƯƠNG HIỆU TRẢI NGHIỆM BIỂN TOÀN CẦU",
        "hero.title1": "Từ khơi xa",
        "hero.title2": "đến bàn ăn",
        "hero.desc": "Bắt đầu hành trình đại dương hoàn hảo. Thuê thuyền ra khơi, tự tay câu cá và thưởng thức thành phẩm tại bàn ăn do chính đầu bếp Rosi chế biến. Đại dương của bạn, theo cách của bạn.",
        "hero.cta1": "Khám phá Hub",
        "hero.cta2": "Cách hoạt động",
        "stats.locations": "Bờ biển toàn cầu",
        "stats.boats": "Thuyền cho thuê",
        "stats.catch": "Chuyến ra khơi thành công",
        "locations.title": "Điểm đến của chúng tôi",
        "locations.subtitle": "Xoay quả địa cầu hàng hải 3D và click chọn một địa điểm để kiểm tra tàu trống và lịch đặt bàn ẩm thực thực tế.",
        "globe.helper": "<ion-icon name='move-outline'></ion-icon> Kéo chuột để xoay Địa Cầu",
        "loc.tag.boats": "Thuyền",
        "loc.tag.dine": "Ẩm thực",
        "loc.tag.water": "Thể thao nước",
        "loc.slots.active": "Tình trạng đặt lịch: Còn trống 4 thuyền hôm nay",
        "loc.action.book": "Đặt lịch tại Hub này",
        "experiences.title": "Hành trình ẩm thực biển",
        "experiences.subtitle": "Hành trình khép kín từ biển cả đến bàn ăn. Khám phá cách trải nghiệm Rosi kết nối trọn vẹn cảm xúc.",
        "story.v1": "1. Chọn tàu ra khơi",
        "story.v2": "2. Chinh phục cá lớn",
        "story.v3": "3. Đại tiệc hải sản tươi",
        "story.step1.title": "Chọn Thuyền & Người Hướng Dẫn",
        "story.step1.desc": "Lựa chọn từ đội tàu cao cấp của chúng tôi, từ thuyền cao tốc linh hoạt cho hoạt động ven bờ đến tàu đánh cá khơi xa trang bị radar tầm soát hiện đại.",
        "story.step1.b1": "Thuyền trưởng được cấp phép chuyên nghiệp",
        "story.step1.b2": "Hệ thống định vị & dò cá hiện đại",
        "story.step1.b3": "Đã bao gồm đồ uống & thiết bị an toàn",
        "story.step2.title": "Chiến đấu với quái vật đại dương",
        "story.step2.desc": "Tiến đến vùng biển sâu hoặc rạn san hô tĩnh lặng. Với sự hướng dẫn của chuyên gia, câu những chú cá ngừ, cá thu lớn. Thử trò chơi kéo dây bên trái nhé!",
        "story.step2.b1": "Cần câu chuyên dụng & mồi câu thiết kế riêng",
        "story.step2.b2": "Hướng dẫn cho mọi cấp độ kỹ năng",
        "story.step2.b3": "Có các gói cam kết trải nghiệm câu thành công",
        "story.step3.title": "Thành phẩm của bạn, ẩm thực của bạn",
        "story.step3.desc": "Sau khi cập cảng, chọn cách tận hưởng chiến lợi phẩm. Bạn có thể bán lại cho nhà hàng nhận credit, tự nướng tại quầy nướng ven biển hoặc để đầu bếp chuẩn bị đại tiệc sashimi.",
        "story.mode1.name": "Bán lại cá",
        "story.mode1.desc": "Bán lại cho bếp Rosi lấy điểm tích lũy.",
        "story.mode2.name": "Tự chế biến",
        "story.mode2.desc": "Sử dụng quầy bếp nướng ven biển.",
        "story.mode3.name": "Đầu bếp nấu",
        "story.mode3.desc": "Đại tiệc sashimi & đồ nướng cao cấp.",
        "story.reel.help": "Click liên tục nút tròn để kéo cá!",
        "story.opt.sell": "Bán lại",
        "story.opt.cook": "Tự nấu",
        "story.opt.chef": "Đầu bếp nấu",
        "shop.title": "Đồ dùng đi biển Rosi",
        "shop.subtitle": "Trang bị cần câu, mồi câu phù hợp cho từng bờ biển hoặc mua đồ lưu niệm mang tính biểu tượng của mỗi hub.",
        "gf.title": "Bộ gợi ý đồ câu thông minh",
        "gf.desc": "Trả lời 3 câu hỏi nhanh để tìm ra bộ trang bị lý tưởng nhất cho chuyến đi biển sắp tới của bạn.",
        "gf.q1": "Bạn dự kiến đi câu ở vùng biển nào?",
        "gf.q2": "Loại cá mục tiêu của bạn là gì?",
        "gf.q3": "Trình độ câu cá đại dương của bạn?",
        "gf.results.title": "Gói trang bị khuyên dùng cho bạn",
        "gf.prev": "Quay lại",
        "gf.next": "Câu hỏi tiếp",
        "dest.norway": "Quần đảo Lofoten, Na Uy (Biển lạnh sâu)",
        "dest.maldives": "Quần đảo Maldives (Rạn san hô nhiệt đới)",
        "dest.amalfi": "Bờ biển Amalfi, Ý (Địa Trung Hải xanh sâu)",
        "target.giant": "Quái vật khơi xa (Cá ngừ, cá tuyết lớn)",
        "target.medium": "Cá rạn san hô (Cá khế, cá hồng)",
        "target.light": "Gần bờ nhẹ nhàng (Mực, cá chẽm)",
        "skill.beginner": "Mới bắt đầu (Trải nghiệm lần đầu)",
        "skill.intermediate": "Trung cấp (Đã quen tay)",
        "skill.expert": "Chuyên gia (Thuyền trưởng lão luyện)",
        "shop.filter.all": "Tất cả đồ câu",
        "shop.filter.rods": "Cần & Máy câu",
        "shop.filter.lures": "Mồi giả chuyên nghiệp",
        "shop.filter.souvenirs": "Quà lưu niệm",
        "concierge.tag": "DỊCH VỤ THUYỀN VIÊN VIP",
        "concierge.title": "Hành Trình Du Thuyền Riêng",
        "concierge.desc": "Bàn dịch vụ VIP của chúng tôi đáp ứng những du khách tìm kiếm sự biệt lập tối thượng. Từ du thuyền lớn nhiều tầng có bãi đỗ trực thăng, tàu ngầm khám phá, đến đầu bếp riêng chuẩn sao quốc tế.",
        "concierge.c1.title": "Thuê Trọn Du Thuyền",
        "concierge.c1.desc": "Thuê các dòng siêu du thuyền cao cấp có bãi trực thăng.",
        "concierge.c2.title": "Đầu Bếp Phục Vụ Riêng",
        "concierge.c2.desc": "Thưởng thức ẩm thực cao cấp chế biến trực tiếp giữa khơi.",
        "concierge.form.title": "Yêu Cầu Tư Vấn VIP",
        "concierge.lbl.req": "Yêu Cầu Riêng Cho Chuyến Đi",
        "concierge.submit": "Gửi Yêu Cầu Tư Vấn VIP",
        "about.tag": "CÂU CHUYỆN CỦA CHÚNG TÔI",
        "about.title": "Phong cách sống đại dương",
        "about.desc1": "Rosi không đơn thuần là dịch vụ thuê tàu hay tiệm đồ câu. Chúng tôi là một cộng đồng toàn cầu đam mê những con sóng, cú ghì kéo của cá lớn và hương vị cá tươi rói trên đĩa.",
        "about.desc2": "Được sáng lập bởi các nhà bảo tồn biển và chuyên gia du thuyền, Rosi hợp tác với ngư dân bản địa ở 15 hub toàn cầu để phát triển du lịch biển bền vững.",
        "about.b1.title": "100% Bền Vững",
        "about.b1.desc": "Tuân thủ nghiêm ngặt mùa đánh bắt và hạn ngạch địa phương.",
        "about.b2.title": "Đầu bếp Michelin",
        "about.b2.desc": "Những chuyên gia hàng đầu trực tiếp xử lý chiến lợi phẩm của bạn.",
        "about.img1.title": "Khơi xa vẫy gọi",
        "about.img1.desc": "85 đội tàu hoạt động toàn cầu.",
        "about.img2.title": "Gian bếp ven biển",
        "about.img2.desc": "Định nghĩa lại độ tươi ngon tinh khiết.",
        "footer.desc": "Thương hiệu Trải nghiệm Đại dương & Phong cách sống từ Biển đến Bàn ăn toàn cầu. Từ 2024.",
        "footer.links": "Liên kết nhanh",
        "footer.hubs": "Chi nhánh toàn cầu",
        "footer.newsletter": "Nhật ký Biển khơi",
        "footer.news.desc": "Đăng ký nhận dự báo cá theo mùa và các công thức hải sản mới nhất.",
        "cart.title": "Giỏ hàng của bạn",
        "cart.empty": "Giỏ hàng trống. Hãy dạo quanh Shop hoặc sử dụng Bộ Gợi Ý Đồ Câu!",
        "cart.subtotal": "Tổng phụ",
        "cart.checkout": "Thanh toán đơn hàng",
        "cart.add": "Thêm vào Giỏ hàng",
        "booking.title": "Bàn Đặt Lịch Hành Trình",
        "booking.lbl.hub": "Lựa chọn Hub điểm đến",
        "booking.lbl.pillar": "Chọn nhóm dịch vụ biển",
        "booking.opt.boat": "Thuê thuyền & Hướng dẫn câu",
        "booking.opt.dine": "Trải nghiệm Catch & Dine",
        "booking.opt.water": "Combo thể thao nước & giải trí",
        "booking.lbl.date": "Ngày khởi hành",
        "booking.lbl.guests": "Số lượng thành viên",
        "booking.lbl.name": "Họ và tên",
        "booking.est.price": "Giá tạm tính",
        "booking.confirm": "Xác nhận yêu cầu đặt lịch",
        "booking.ok.title": "Đã ghi nhận đặt lịch!",
        "booking.ok.desc": "Mã đặt chỗ của bạn đã được ghi nhận. Thuyền trưởng sẽ sớm gửi email phổ biến lịch trình.",
        "booking.ok.close": "Quay lại trang web",
        "account.title": "Nhật ký câu cá & Tích điểm",
        "loyalty.points": "Điểm Tích Lũy:",
        "catches.log.title": "Ghi Nhận Cá Câu Được",
        "catches.lbl.species": "Loài Cá",
        "catches.lbl.weight": "Trọng lượng (kg)",
        "catches.btn.log": "Log Catch (+50 điểm)",
        "catches.feed.title": "Sổ Nhật Ký Câu Cá",
        "prod3d.helper": "<ion-icon name='move-outline'></ion-icon> Kéo ngang để xoay 3D (360 độ)",
        "ar.status": "Trạng thái AR: Đang ghim Souvenir"
    }
};

// Current application state
let currentLang = 'en';

// Set language translation helper
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // Save to local storage
    localStorage.setItem('rosi-language', lang);

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update the dropdown's current-language label
    const codeEl = document.getElementById('lang-current-code');
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    // Translate DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element is select option or placeholder
            if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                el.setAttribute('placeholder', translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Fire event for other scripts to re-translate dynamic components
    const event = new CustomEvent('languageChanged', { detail: { lang } });
    document.dispatchEvent(event);
}

// Global page diving curtain transition controller
function triggerPageTransition(targetSelector) {
    const curtain = document.getElementById('page-curtain');
    if (!curtain) return;

    curtain.classList.add('active');
    
    setTimeout(() => {
        // Scroll to target element
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({ behavior: 'auto' });
        }
        
        curtain.classList.remove('active');
    }, 600);
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Initialization
    const savedLang = localStorage.getItem('rosi-language') || 'en';
    setLanguage(savedLang);

    // Language dropdown: open/close + select
    const langSelector = document.getElementById('lang-selector');
    const langCurrentBtn = document.getElementById('lang-current-btn');
    if (langSelector && langCurrentBtn) {
        const closeLang = () => {
            langSelector.classList.remove('open');
            langCurrentBtn.setAttribute('aria-expanded', 'false');
        };
        langCurrentBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const willOpen = !langSelector.classList.contains('open');
            langSelector.classList.toggle('open', willOpen);
            langCurrentBtn.setAttribute('aria-expanded', String(willOpen));
        });
        // Close on outside click or Escape
        document.addEventListener('click', (e) => {
            if (!langSelector.contains(e.target)) closeLang();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLang();
        });
        // Selecting a language applies it and closes the menu
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setLanguage(btn.getAttribute('data-lang'));
                closeLang();
            });
        });
    }

    // Header: solidify + shrink on scroll
    const headerEl = document.querySelector('.header');
    if (headerEl) {
        const onScrollHeader = () => {
            headerEl.classList.toggle('scrolled', window.pageYOffset > 60);
        };
        window.addEventListener('scroll', onScrollHeader, { passive: true });
        onScrollHeader();
    }

    // Intercept navigation links for smooth diving transition
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Toggle active menu states
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Trigger transition
                triggerPageTransition(href);
            }
        });
    });

    // Remove loading state from body
    document.body.classList.remove('loading');

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const iconName = mobileMenu.classList.contains('active') ? 'close-outline' : 'menu-outline';
            mobileToggle.querySelector('ion-icon').setAttribute('name', iconName);
        });

        // Close mobile menu on link clicks
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileToggle.querySelector('ion-icon').setAttribute('name', 'menu-outline');
            });
        });
    }

    // 3. Navigation Scroll Monitor (Update active link based on scroll position)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 4. Smooth Counter Stats
    const statsNumbers = document.querySelectorAll('.stat-num');
    const options = { threshold: 0.5, rootMargin: "0px" };

    const statObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseInt(target.getAttribute('data-count'), 10);
                const suffix = target.getAttribute('data-suffix') || '';
                animateValue(target, 0, endVal, 2000, suffix);
                observer.unobserve(target);
            }
        });
    }, options);

    statsNumbers.forEach(num => statObserver.observe(num));
});

// Helper for stat counter animation
function animateValue(obj, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Concierge VIP form submit
function submitVIPRequest(e) {
    e.preventDefault();
    const name = document.getElementById('vip-name').value;
    const email = document.getElementById('vip-email').value;
    const req = document.getElementById('vip-requirements').value;

    const lang = localStorage.getItem('rosi-language') || 'en';
    let msg = `Captain ${name}, your private yacht briefing coordinates have been locked. Our VIP concierge desk will reach out to ${email} shortly.`;
    if (lang === 'vi') {
        msg = `Thuyền trưởng ${name}, yêu cầu du thuyền riêng biệt của bạn đã được ghi nhận. Văn phòng tư vấn VIP sẽ liên hệ đến ${email} trong thời gian sớm nhất.`;
    } else if (lang === 'de') {
        msg = `Kapitän ${name}, Ihr privates Yacht-Briefing wurde erfasst. Unser VIP-Desk wird Sie in Kürze unter ${email} kontaktieren.`;
    }

    alert(msg);
    document.getElementById('concierge-vip-form').reset();
}
