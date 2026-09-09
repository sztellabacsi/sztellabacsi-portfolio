const translations = {
    hu: {
        nav_about: "Rólam",
        nav_philosophy: "Filozófia",
        nav_gallery: "Kollekció",
        nav_partners: "Belsőépítészet",
        nav_contact: "Kapcsolat",
        hero_sub: "Exkluzív Képzőművészeti Katalógus",
        hero_title: "Karakteres formák, organikus szimbiózis a terekben.",
        hero_desc: "Válogatott festmények, plasztikák és lámpa-szobrok reprezentatív magáningatlanokhoz és luxus enteriőrökhöz.",
        hero_btn: "Katalógus Megtekintése",
        about_title: "Szakmai Önéletrajz & Kiállítások"
    },
    en: {
        nav_about: "About",
        nav_philosophy: "Philosophy",
        nav_gallery: "Collection",
        nav_partners: "Interior Design",
        nav_contact: "Contact",
        hero_sub: "Exclusive Fine Art Catalogue",
        hero_title: "Distinct forms, organic symbiosis within spaces.",
        hero_desc: "Selected paintings, sculptures, and sculptural lamps for luxury interiors and private residences.",
        hero_btn: "View Catalogue",
        about_title: "Curriculum Vitae & Exhibitions"
    },
    de: {
        nav_about: "Über mich",
        nav_philosophy: "Philosophie",
        nav_gallery: "Kollektion",
        nav_partners: "Innenarchitektur",
        nav_contact: "Kontakt",
        hero_sub: "Exklusiver Kunstkatalog",
        hero_title: "Charakterstarke Formen, organische Symbiose in Räumen.",
        hero_desc: "Ausgewählte Gemälde, Plastiken und Skulpturenleuchten für luxuriöse Innenräume.",
        hero_btn: "Katalog ansehen",
        about_title: "Biografie & Ausstellungen"
    },
    fr: {
        nav_about: "À propos",
        nav_philosophy: "Philosophie",
        nav_gallery: "Collection",
        nav_partners: "Architecture d'intérieur",
        nav_contact: "Contact",
        hero_sub: "Catalogue Exclusif d'Art",
        hero_title: "Formes distinctives, symbiose organique dans les espaces.",
        hero_desc: "Peintures, sculptures et lampes sculpturales pour intérieurs de prestige.",
        hero_btn: "Voir le catalogue",
        about_title: "Biographie & Expositions"
    },
    it: {
        nav_about: "Chi sono",
        nav_philosophy: "Filosofia",
        nav_gallery: "Collezione",
        nav_partners: "Interior Design",
        nav_contact: "Contatto",
        hero_sub: "Catalogo Esclusivo di Belle Arti",
        hero_title: "Forme decise, simbiosiorganica negli spazi.",
        hero_desc: "Dipinti, sculture e lampade scultoree per interni di lusso.",
        hero_btn: "Vedi Catalogo",
        about_title: "Biografia & Mostre"
    },
    es: {
        nav_about: "Sobre mí",
        nav_philosophy: "Filosofía",
        nav_gallery: "Colección",
        nav_partners: "Diseño Interior",
        nav_contact: "Contacto",
        hero_sub: "Catálogo Exclusivo de Bellas Artes",
        hero_title: "Formas singulares, simbiosis orgánica en los espacios.",
        hero_desc: "Pinturas, esculturas y lámparas escultóricas para interiores de lujo.",
        hero_btn: "Ver Catálogo",
        about_title: "Currículum & Exposiciones"
    },
    ar: {
        nav_about: "نبذة عني",
        nav_philosophy: "فلسفة الفن",
        nav_gallery: "المجموعة",
        nav_partners: "التصميم الداخلي",
        nav_contact: "اتصل بنا",
        hero_sub: "كتالوج الفنون التشكيلية الحصري",
        hero_title: "أشكال متميزة وتناغم عضوي في المساحات المعمارية.",
        hero_desc: "لوحات فنية ومنحوتات ومصابيح منحوتة مختارة للمساحات الداخلية الفاخرة.",
        hero_btn: "عرض الكتالوج",
        about_title: "السيرة الذاتية والمعارض"
    },
    ja: {
        nav_about: "作家略歴",
        nav_philosophy: "理念",
        nav_gallery: "作品集",
        nav_partners: "インテリア連携",
        nav_contact: "お問い合わせ",
        hero_sub: "特別ファインアートカタログ",
        hero_title: "空間に呼応する、有機的なフォルムと共生。",
        hero_desc: "洗練されたラグジュアリー空間のための絵画・彫刻・スカルプチャーランプ。",
        hero_btn: "カタログを見る",
        about_title: "経歴・出展履歴"
    },
    ko: {
        nav_about: "작가 소개",
        nav_philosophy: "예술 철학",
        nav_gallery: "작품 컬렉션",
        nav_partners: "인테리어 협업",
        nav_contact: "문의하기",
        hero_sub: "프라이빗 파인 아트 카탈로그",
        hero_title: "공간 속에서 피어나는 유기적 형태와의 조화.",
        hero_desc: "럭셔리 인테리어와 프라이빗 레지던스를 위한 페인팅, 조각, 램프 아트.",
        hero_btn: "카탈로그 보기",
        about_title: "약력 및 전시 이력"
    },
    zh: {
        nav_about: "关于艺术家",
        nav_philosophy: "艺术理念",
        nav_gallery: "作品典藏",
        nav_partners: "室内设计合作",
        nav_contact: "联系我们",
        hero_sub: "独家纯艺术作品集",
        hero_title: "鲜明的形态，与空间共生的有机交融。",
        hero_desc: "专为高端室内空间与私人豪宅精选的绘画、雕塑及雕塑艺术灯具。",
        hero_btn: "浏览画册",
        about_title: "个人履历与展览"
    }
};

// Nyelv váltás és RTL kezelés
function changeLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;
    
    // Arab nyelv esetén jobb-ról balra írás (RTL)
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Szövegek dinamikus cseréje
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const selector = document.getElementById('langSelect');
    if (selector) selector.value = lang;
}

// Oldalbetöltéskor az elmentett vagy alapértelmezett nyelv beállítása
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'hu';
    changeLanguage(savedLang);
});
