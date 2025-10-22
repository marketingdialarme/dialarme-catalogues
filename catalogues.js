// ============================================
// 🏢 DIALARME - CATALOGUES ET CONFIGURATION
// ============================================
// Fichier de configuration des catalogues, produits et tarifs
// À héberger sur GitHub et importer dans le générateur de devis

// ============================================
// ⭐⭐⭐ CATALOGUES - À MODIFIER ICI ⭐⭐⭐
// ============================================

// 📋 LISTE DES COMMERCIAUX
const COMMERCIALS_LIST = [
    "Alikhan Guisseinov",
    "Arnaud Bloch",
    "Benali Kodad",
    "Bryan Debrosse",
    "Cédric Boldron",
    "Emin Comert",
    "Gérald Clausen",
    "Heythem Ziaya",
    "Iyed Baccouche",
    "Matys Goiot",
    "Mohamed Tartik",
    "Nassim Jaza",
    "Nora Sassi",
    "Rodolphe De Vito",
    "Samir Ouhameni",
    "Thilan Curt",
    "Thomas Garcia",
    "Wassim Tahiri"
];

// 🚨 CATALOGUE ALARME - PRODUITS
const CATALOG_ALARM_PRODUCTS = [
    { id: 5, name: "Centrale Jablotron", price: 990.00 },
    { id: 6, name: "Centrale Titane", price: 690.00 },
    { id: 99, name: "Autre", price: 0.00, isCustom: true },
    { id: 3, name: "Badge x 4", priceTitane: 100.00, priceJablotron: 200.00, monthlyTitane: 3, monthlyJablotron: 5 },
    { id: 2, name: "Barrière extérieure 2x12 mètres (radio)", priceTitane: 890.00, priceJablotron: 890.00, monthlyTitane: 22, monthlyJablotron: 22 },
    { id: 1, name: "Bouton panique/Montre d'urgence (radio)", priceTitane: 190.00, priceJablotron: 190.00, monthlyTitane: 5, monthlyJablotron: 5 },
    { id: 7, name: "Clavier (radio)", priceTitane: 390.00, priceJablotron: 390.00, monthlyTitane: 10, monthlyJablotron: 12 },
    { id: 12, name: "Détecteur de bris de verre (radio)", priceTitane: 290.00, priceJablotron: 290.00, monthlyTitane: 7, monthlyJablotron: 7 },
    { id: 11, name: "Détecteur de choc (radio)", priceTitane: 290.00, priceJablotron: 290.00, monthlyTitane: 7, monthlyJablotron: 7 },
    { id: 13, name: "Détecteur de fumée (radio)", priceTitane: 190.00, priceJablotron: 290.00, monthlyTitane: 5, monthlyJablotron: 7 },
    { id: 14, name: "Détecteur de mouvement extérieur (caméra)", priceTitane: 690.00, priceJablotron: 690.00, monthlyTitane: 17, monthlyJablotron: 17 },
    { id: 10, name: "Détecteur d'ouverture (radio)", priceTitane: 190.00, priceJablotron: 240.00, monthlyTitane: 5, monthlyJablotron: 6 },
    { id: 8, name: "Détecteur volumétrique (radio)", priceTitane: 240.00, priceJablotron: 290.00, monthlyTitane: 6, monthlyJablotron: 7 },
    { id: 9, name: "Détecteur volumétrique caméra (radio)", priceTitane: 290.00, priceJablotron: 450.00, monthlyTitane: 7, monthlyJablotron: 11 },
    { id: 22, name: "Lecteur de badge intérieur (filaire/radio)", priceJablotron: 490.00, requiresJablotron: true, monthlyJablotron: 12 },
    { id: 18, name: "Sirène déportée petite (radio)", priceTitane: 390.00, priceJablotron: 390.00, monthlyTitane: 10, monthlyJablotron: 10 },
    { id: 21, name: "Sirène déportée grande (radio)", priceJablotron: 490.00, requiresJablotron: true, monthlyJablotron: 12 },
    { id: 17, name: "Sonde inondation (radio)", priceTitane: 290.00, priceJablotron: 390.00, monthlyTitane: 7, monthlyJablotron: 10 },
    { id: 19, name: "Télécommande (radio)", priceTitane: 190.00, priceJablotron: 240.00, monthlyTitane: 5, monthlyJablotron: 6 }
];

// 📹 CATALOGUE CAMÉRA
const CATALOG_CAMERA_MATERIAL = [
    { id: 99, name: "Autre", price: 0.00, isCustom: true },
    { id: 23, name: "Bullet Mini", price: 390.00, monthly48: 10, monthly36: 13, monthly24: 18 },
    { id: 24, name: "Bullet XL Varifocale Night", price: 640.00, monthly48: 16, monthly36: 21, monthly24: 30 },
    { id: 25, name: "Bullet Zone Alarme", price: 740.00, monthly48: 19, monthly36: 23, monthly24: 34 },
    { id: 26, name: "Bullet Zoom x23", price: 990.00, monthly48: 25, monthly36: 32, monthly24: 46 },
    { id: 27, name: "Caméra de comptage", price: 860.00, monthly48: 22, monthly36: 28, monthly24: 40 },
    { id: 28, name: "Coffret NVR 4P", price: 240.00, monthly48: 6, monthly36: 8, monthly24: 11 },
    { id: 29, name: "Coffret NVR 8P", price: 360.00, monthly48: 9, monthly36: 12, monthly24: 17  },
    { id: 30, name: "Disque dur 4 To", price: 270.00, monthly48: 7, monthly36: 9, monthly24: 13  },
    { id: 31, name: "Dôme Antivandale", price: 390.00, monthly48: 10, monthly36: 13, monthly24: 18 },
    { id: 32, name: "Dôme Mini Antivandale", price: 390.00, monthly48: 10, monthly36: 13, monthly24: 18 },
    { id: 33, name: "Dôme Night", price: 540.00, monthly48: 14, monthly36: 18, monthly24: 25 },
    { id: 34, name: "Dôme Plat Motorisé", price: 390.00, monthly48: 10, monthly36: 13, monthly24: 18 },
    { id: 35, name: "Dôme XL Varifocale", price: 590.00, monthly48: 15, monthly36: 19, monthly24: 28 },
    { id: 36, name: "Dôme Zone Alarme", price: 740.00, monthly48: 19, monthly36: 23, monthly24: 34 },
    { id: 37, name: "HDMI Ext.", price: 190.00, monthly48: 5, monthly36: 7, monthly24: 9  },
    { id: 38, name: "Modem 4G", price: 290.00, monthly48: 8, monthly36: 10, monthly24: 14  },
    { id: 39, name: "Moniteur Vidéo 22\"", price: 190.00, monthly48: 5, monthly36: 7, monthly24: 9  },
    { id: 40, name: "Moniteur Vidéo 28\" 4K", price: 460.00, monthly48: 12, monthly36: 15, monthly24: 22  },
    { id: 41, name: "Moniteur Vidéo 32\"", price: 490.00, monthly48: 13, monthly36: 16, monthly24: 23  },
    { id: 50, name: "NVR 1-4 Caméras (1 mois d'enregistrement)", price: 990.00, monthly48: 25, monthly36: 32, monthly24: 46  },
    { id: 51, name: "NVR 4-8 Caméras (1 mois d'enregistrement)", price: 1390.00, monthly48: 35, monthly36: 45, monthly24: 64 },
    { id: 52, name: "NVR 8-16 Caméras (1 mois d'enregistrement)", price: 1690.00, monthly48: 43, monthly36: 54, monthly24: 78  },
    { id: 42, name: "Onduleur 1000 - 60min", price: 360.00, monthly48: 9, monthly36: 12, monthly24: 17 },
    { id: 43, name: "Onduleur 1500 - 90min", price: 600.00, monthly48: 15, monthly36: 20, monthly24: 28  },
    { id: 44, name: "Onduleur 2200 - 120min", price: 830.00, monthly48: 21, monthly36: 27, monthly24: 39  },
    { id: 45, name: "Onduleur 700 - 30min", price: 240.00, monthly48: 6, monthly36: 8, monthly24: 11  },
    { id: 46, name: "Reo 4G + P.Solaire", price: 490.00, monthly48: 13, monthly36: 16, monthly24: 23 },
    { id: 47, name: "Solar 4G + P.solaire", price: 890.00, monthly48: 22, monthly36: 28, monthly24: 41 },
    { id: 48, name: "Support Mural Articulé", price: 100.00, monthly48: 3, monthly36: 4, monthly24: 5  },
    { id: 49, name: "Switch POE", price: 270.00, monthly48: 7, monthly36: 9, monthly24: 13  }
];

// 💨 CATALOGUE GÉNÉRATEUR DE BROUILLARD
const CATALOG_FOG_MATERIAL = [
    { id: 105, name: "Générateur de brouillard", price: 2990.00 },
    { id: 103, name: "Cartouche supplémentaire HY3", price: 990.00 },
    { id: 107, name: "Clavier", price: 390.00, monthly: 9 },
    { id: 108, name: "Détecteur d'ouverture", price: 190.00, monthly: 5 },
    { id: 106, name: "Détecteur volumétrique", price: 240.00, monthly: 6 },
    { id: 102, name: "Remplissage cartouche", price: 390.00 },
    { id: 100, name: "Support mural articulé", price: 390.00, monthly: 9 },
    { id: 101, name: "Support mural fixe", price: 290.00, monthly: 7 },
    { id: 109, name: "Télécommande", price: 240.00, monthly: 6 },
    { id: 99, name: "Autre", price: 0.00, isCustom: true }
];

// ============================================
// 💰 CONFIGURATION DES PRIX ET TARIFS
// ============================================

// 📊 TAUX DE TVA
const TVA_RATE = 0.081; // 8.1%

// 🔧 INSTALLATION - PRIX COMPTANT (par nombre de demi-journées)
const INSTALLATION_PRICES = {
    1: 690,   // 1/2 journée
    2: 1290,  // 1 jour
    3: 1980,  // 1.5 jours
    4: 2580,  // 2 jours
    5: 3270,  // 2.5 jours
    6: 3870   // 3 jours
};

// 🔧 INSTALLATION - PRIX MENSUELS (par nombre de demi-journées et durée)
const INSTALLATION_MONTHLY_PRICES = {
    1: { 24: 32, 36: 23, 48: 18 },
    2: { 24: 60, 36: 42, 48: 33 },
    3: { 24: 91, 36: 64, 48: 50 },
    4: { 24: 119, 36: 83, 48: 65 },
    5: { 24: 151, 36: 106, 48: 83 },
    6: { 24: 179, 36: 125, 48: 98 }
};

// 🔧 PRIX DE BASE D'UNE DEMI-JOURNÉE
const HALF_DAY_PRICE = 690;
const HALF_DAY_MONTHLY_24 = 32;
const HALF_DAY_MONTHLY_36 = 23;
const HALF_DAY_MONTHLY_48 = 18;
const FULL_DAY_MONTHLY_24 = 60;
const FULL_DAY_MONTHLY_36 = 42;
const FULL_DAY_MONTHLY_48 = 33;

// 🗑️ DÉSINSTALLATION
const UNINSTALL_PRICE = 290.00;

// 📄 FRAIS DE DOSSIER
const ADMIN_FEES = {
    simCard: 50.00,
    processingFee: 190.00
};

// 📹 CAMÉRA - INSTALLATION
const CAMERA_INSTALL_BASE_PRICE = 690.00;

// 📹 CAMÉRA - VISION À DISTANCE
const REMOTE_ACCESS_PRICE = 20.00;

// 💨 GÉNÉRATEUR DE BROUILLARD - INSTALLATION
const FOG_INSTALL_PRICE = 490.00;

// 🔔 TEST CYCLIQUE
const TEST_CYCLIQUE_DEFAULT_PRICE = 0.00;

// 📡 SERVICES DE SURVEILLANCE - MODE VENTE
const SURVEILLANCE_PRICES_SALE = {
    none: 0,
    basic: 490,
    premium: 840,
    video: 990,
    video_premium: 1440
};

// 📡 SERVICES DE SURVEILLANCE - MODE LOCATION
const SURVEILLANCE_PRICES_RENTAL = {
    24: {
        none: 0,
        basic: 23,
        premium: 39,
        video: 46,
        video_premium: 66
    },
    36: {
        none: 0,
        basic: 16,
        premium: 27,
        video: 32,
        video_premium: 46
    },
    48: {
        none: 0,
        basic: 13,
        premium: 21,
        video: 25,
        video_premium: 36
    }
};

// ============================================
// 🌐 CONFIGURATION GOOGLE SHEETS (OPTIONNEL)
// ============================================

// 📤 URL DU GOOGLE SCRIPT POUR EXPORT (à configurer si utilisé)
const GOOGLE_SCRIPT_URL = ""; // Laisser vide si non utilisé
