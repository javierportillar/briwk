const STORAGE_KEYS = {
  language: "savia-col-language",
  cartItems: "savia-col-cart-items",
};

const FREE_SHIPPING_THRESHOLD = 160000;
const WHATSAPP_NUMBER = "573108179620";

const CATEGORY_META = {
  all: {
    labelEs: "Todos",
    labelEn: "All",
  },
  granolas: {
    labelEs: "Granolas",
    labelEn: "Granolas",
  },
  pancakes: {
    labelEs: "Pancakes & Waffles",
    labelEn: "Pancakes & Waffles",
  },
  spreads: {
    labelEs: "Cremas",
    labelEn: "Spreads",
  },
  pantry: {
    labelEs: "Despensa",
    labelEn: "Pantry",
  },
  bundles: {
    labelEs: "Combos",
    labelEn: "Bundles",
  },
};

const TONE_META = {
  rose: {
    bg: "#F9E4DF",
    bgSoft: "#FFF4F2",
    accent: "#D47772",
    deep: "#7B3B47",
    leaf: "#8EAF92",
  },
  gold: {
    bg: "#F5E5B9",
    bgSoft: "#FFF8E6",
    accent: "#D0A144",
    deep: "#765420",
    leaf: "#93A96E",
  },
  leaf: {
    bg: "#DDE9D8",
    bgSoft: "#F6FBF4",
    accent: "#5F8A62",
    deep: "#284A35",
    leaf: "#9AC29A",
  },
  cocoa: {
    bg: "#E4D4C8",
    bgSoft: "#FBF5F0",
    accent: "#8B5A3C",
    deep: "#4A2D21",
    leaf: "#A4B28F",
  },
  berry: {
    bg: "#E9D4DF",
    bgSoft: "#FCF4F8",
    accent: "#B35F84",
    deep: "#64314A",
    leaf: "#9DB4A0",
  },
};

const PRODUCT_SEED = [
  {
    slug: "short-sweet-bundle",
    category: "bundles",
    tone: "rose",
    familyEs: "Combo para la semana",
    familyEn: "Week-ready bundle",
    name: "Ritual de Manana",
    lineEs: "Dos favoritos XL",
    lineEn: "Two XL favorites",
    descriptionEs:
      "Una combinacion pensada para dejar desayunos y onces resueltos con un solo pedido.",
    descriptionEn:
      "A combination designed to cover breakfasts and snack breaks with a single order.",
    size: "2 formatos XL",
    price: 112000,
    oldPrice: 135743,
    tagsEs: ["Ahorro especial", "Ideal para compartir", "Listo para la semana"],
    tagsEn: ["Special savings", "Great to share", "Week-ready"],
    useEs: "Perfecto para hogares que prefieren organizar la semana desde el domingo.",
    useEn: "Perfect for households that like to organize the week ahead.",
    flavorEs: "Selección dulce y tostada",
    flavorEn: "Sweet and toasted selection",
    baseEs: "Granola y mezcla de preparacion rapida",
    baseEn: "Granola and quick-prep mix",
  },
  {
    slug: "soft-chaos-bundle",
    category: "bundles",
    tone: "gold",
    familyEs: "Combo de texturas",
    familyEn: "Texture-focused bundle",
    name: "Duo de Crunch",
    lineEs: "Granola regular + XL",
    lineEn: "Regular granola + XL",
    descriptionEs:
      "Dos tamanos para alternar entre porciones personales y un formato grande para toda la casa.",
    descriptionEn:
      "Two sizes to alternate between personal portions and a larger format for the whole home.",
    size: "1 granola + 1 granola XL",
    price: 106000,
    oldPrice: 125764,
    tagsEs: ["Surtido variado", "Buen regalo", "Favorito para desayuno"],
    tagsEn: ["Variety pack", "Great gift", "Breakfast favorite"],
    useEs: "Ideal si quieres probar dos formatos y mantener un mismo perfil de sabor.",
    useEn: "Ideal if you want to try two formats while keeping the same flavor profile.",
    flavorEs: "Crujiente, tostado y amable",
    flavorEn: "Crunchy, toasted and comforting",
    baseEs: "Granola artesanal sin gluten",
    baseEn: "Craft gluten-free granola",
  },
  {
    slug: "back-to-routine",
    category: "bundles",
    tone: "leaf",
    familyEs: "Combo completo",
    familyEn: "Complete bundle",
    name: "Regreso en Calma",
    lineEs: "Granola, crema y mezcla",
    lineEn: "Granola, spread and mix",
    descriptionEs:
      "Un combo para surtir la alacena con desayuno, snack y opciones para compartir en casa.",
    descriptionEn:
      "A bundle to stock the pantry with breakfast, snacks and easy options to share at home.",
    size: "Combo familiar",
    price: 196000,
    oldPrice: 276320,
    tagsEs: ["Mas completo", "Compra grande", "Hecho para surtirse"],
    tagsEn: ["Most complete", "Larger order", "Made for restocking"],
    useEs: "Pensado para quien quiere varias categorias en un solo pedido.",
    useEn: "Designed for shoppers who want several categories in one order.",
    flavorEs: "Seleccion variada para todos los dias",
    flavorEn: "Varied selection for everyday routines",
    baseEs: "Despensa saludable en un solo combo",
    baseEn: "Healthy pantry in one bundle",
  },
  {
    slug: "granola-pistacho",
    category: "granolas",
    tone: "leaf",
    familyEs: "Granola sin gluten",
    familyEn: "Gluten-free granola",
    name: "Pistacho Dorado",
    lineEs: "Tostado artesanal",
    lineEn: "Artisan toasted blend",
    descriptionEs:
      "Crujiente, suave y facil de combinar con yogur, fruta fresca o bowls de la manana.",
    descriptionEn:
      "Crunchy, smooth and easy to pair with yogurt, fresh fruit or breakfast bowls.",
    size: "Regular",
    price: 44950,
    tagsEs: ["Pistacho", "Snack o topping", "Favorita de la casa"],
    tagsEn: ["Pistachio", "Snack or topping", "House favorite"],
    useEs: "Queda bien con yogur natural, fruta picada y mantequilla de frutos secos.",
    useEn: "Pairs well with plain yogurt, sliced fruit and nut butter.",
    flavorEs: "Pistacho con notas de galleta",
    flavorEn: "Pistachio with cookie notes",
    baseEs: "Granola tostada lista para servir",
    baseEn: "Toasted granola ready to serve",
  },
  {
    slug: "granola-chip-cookie-xl",
    category: "granolas",
    tone: "cocoa",
    familyEs: "Granola sin gluten",
    familyEn: "Gluten-free granola",
    name: "Choco Crunch XL",
    lineEs: "Formato familiar",
    lineEn: "Family-size format",
    descriptionEs:
      "Una granola amplia para quienes desayunan a diario y prefieren comprar en volumen.",
    descriptionEn:
      "A larger granola for daily breakfasts and households that prefer buying in volume.",
    size: "XL / 710 g",
    price: 80834,
    tagsEs: ["Formato XL", "Cacao", "Rinde mas"],
    tagsEn: ["XL size", "Cocoa", "Goes further"],
    useEs: "Ideal para bowls grandes, loncheras y desayunos de toda la semana.",
    useEn: "Ideal for big bowls, lunchboxes and breakfasts throughout the week.",
    flavorEs: "Cacao tostado con chips",
    flavorEn: "Toasted cocoa with chips",
    baseEs: "Granola crocante de porcion grande",
    baseEn: "Crisp granola in a large format",
  },
  {
    slug: "granola-fudge-cake-xl",
    category: "granolas",
    tone: "berry",
    familyEs: "Granola sin gluten",
    familyEn: "Gluten-free granola",
    name: "Cacao Fudge XL",
    lineEs: "Perfil intenso",
    lineEn: "Deeper flavor profile",
    descriptionEs:
      "Para quienes disfrutan un desayuno mas goloso sin salir de una rutina practica.",
    descriptionEn:
      "For shoppers who enjoy a richer breakfast while keeping an easy daily routine.",
    size: "XL / 710 g",
    price: 80834,
    tagsEs: ["Intensa", "XL", "Para bowls"],
    tagsEn: ["Richer flavor", "XL", "For bowls"],
    useEs: "Funciona muy bien sobre yogur griego, fruta roja o helado casero.",
    useEn: "Works beautifully over Greek yogurt, berries or homemade ice cream.",
    flavorEs: "Cacao profundo y crocante",
    flavorEn: "Deep cocoa crunch",
    baseEs: "Granola horneada de formato amplio",
    baseEn: "Baked granola in a larger format",
  },
  {
    slug: "spread-pistachio-xl",
    category: "spreads",
    tone: "leaf",
    familyEs: "Crema para untar",
    familyEn: "Spreadable cream",
    name: "Crema de Pistacho",
    lineEs: "Textura suave",
    lineEn: "Silky texture",
    descriptionEs:
      "Una crema cremosa y aromatica para tostadas, fruta, pancakes y postres sencillos.",
    descriptionEn:
      "A creamy, aromatic spread for toast, fruit, pancakes and simple desserts.",
    size: "XL",
    price: 64000,
    tagsEs: ["Pistacho", "Cremosa", "Para compartir"],
    tagsEn: ["Pistachio", "Creamy", "Great to share"],
    useEs: "Pruebala con pan tostado, wafles, banana o como relleno rapido.",
    useEn: "Try it with toast, waffles, banana or as a quick filling.",
    flavorEs: "Pistacho suave y tostado",
    flavorEn: "Smooth toasted pistachio",
    baseEs: "Crema untable de frutos secos",
    baseEn: "Nut-based spread",
  },
  {
    slug: "spread-chocolate-cremoso-xl",
    category: "spreads",
    tone: "cocoa",
    familyEs: "Crema para untar",
    familyEn: "Spreadable cream",
    name: "Cacao y Avellana",
    lineEs: "Favorita para tostadas",
    lineEn: "Toast favorite",
    descriptionEs:
      "Sabor familiar, textura cremosa y un formato generoso para tener siempre a mano.",
    descriptionEn:
      "Familiar flavor, creamy texture and a generous format to keep close every day.",
    size: "XL",
    price: 52400,
    tagsEs: ["Cacao", "Avellana", "Muy versatil"],
    tagsEn: ["Cocoa", "Hazelnut", "Highly versatile"],
    useEs: "Combina bien con tostadas, galletas, fruta y mezclas para brunch.",
    useEn: "Pairs well with toast, crackers, fruit and brunch mixes.",
    flavorEs: "Chocolate suave con avellana",
    flavorEn: "Smooth chocolate with hazelnut",
    baseEs: "Crema untable de textura sedosa",
    baseEn: "Silky spread",
  },
  {
    slug: "spread-banana-shake",
    category: "spreads",
    tone: "gold",
    familyEs: "Crema para untar",
    familyEn: "Spreadable cream",
    name: "Mani con Banano",
    lineEs: "Dulce y suave",
    lineEn: "Sweet and smooth",
    descriptionEs:
      "Una opcion amable para medias mananas, smoothies, loncheras y tostadas tibias.",
    descriptionEn:
      "A gentle option for mid-mornings, smoothies, lunchboxes and warm toast.",
    size: "Regular",
    price: 48590,
    tagsEs: ["Mani", "Banano", "Snack facil"],
    tagsEn: ["Peanut", "Banana", "Easy snack"],
    useEs: "Ideal para fruta, smoothies y tostadas con canela o granola por encima.",
    useEn: "Ideal with fruit, smoothies and toast finished with cinnamon or granola.",
    flavorEs: "Mani tostado con banano",
    flavorEn: "Toasted peanut with banana",
    baseEs: "Crema untable con frutos secos",
    baseEn: "Nut spread",
  },
  {
    slug: "pancake-vainilla-xl",
    category: "pancakes",
    tone: "gold",
    familyEs: "Mezcla para pancakes",
    familyEn: "Pancake mix",
    name: "Vainilla Avena XL",
    lineEs: "Formato grande",
    lineEn: "Larger format",
    descriptionEs:
      "Una mezcla pensada para desayunos de varios dias, brunch en casa y tandas grandes.",
    descriptionEn:
      "A mix designed for several breakfast moments, home brunch and bigger batches.",
    size: "XL / 907 g",
    price: 84522,
    tagsEs: ["Avena", "Formato XL", "Brunch en casa"],
    tagsEn: ["Oat-based", "XL size", "Home brunch"],
    useEs: "Sirve para pancakes, waffles y recetas dulces con fruta o miel.",
    useEn: "Works for pancakes, waffles and sweet recipes with fruit or honey.",
    flavorEs: "Vainilla suave",
    flavorEn: "Soft vanilla",
    baseEs: "Mezcla a base de avena",
    baseEn: "Oat-based mix",
  },
  {
    slug: "pancake-chips-almendra",
    category: "pancakes",
    tone: "berry",
    familyEs: "Mezcla para pancakes",
    familyEn: "Pancake mix",
    name: "Chips de Chocolate",
    lineEs: "Base de almendra",
    lineEn: "Almond-based",
    descriptionEs:
      "Una mezcla para dias especiales, brunch largo o desayunos con antojo de chocolate.",
    descriptionEn:
      "A mix for special mornings, long brunches or chocolate-leaning breakfasts.",
    size: "285 g",
    price: 41690,
    tagsEs: ["Almendra", "Chocolate", "Para brunch"],
    tagsEn: ["Almond-based", "Chocolate", "Brunch-ready"],
    useEs: "Ideal con fruta fresca, crema de cacao y cafe recien hecho.",
    useEn: "Ideal with fresh fruit, chocolate spread and freshly brewed coffee.",
    flavorEs: "Chocolate suave",
    flavorEn: "Soft chocolate",
    baseEs: "Mezcla a base de almendra",
    baseEn: "Almond-based mix",
  },
  {
    slug: "pancake-brownie",
    category: "pancakes",
    tone: "cocoa",
    familyEs: "Mezcla para pancakes",
    familyEn: "Pancake mix",
    name: "Brownie Avena",
    lineEs: "Perfil de cacao",
    lineEn: "Cocoa profile",
    descriptionEs:
      "Textura suave y sabor intenso para recetas de fin de semana o meriendas tibias.",
    descriptionEn:
      "Soft texture and a richer flavor for weekend recipes or warm afternoon treats.",
    size: "300 g",
    price: 32890,
    tagsEs: ["Avena", "Brownie", "Para merendar"],
    tagsEn: ["Oat-based", "Brownie", "Snack-friendly"],
    useEs: "Acompanalo con banano, yogur natural o una cucharada de crema de mani.",
    useEn: "Enjoy it with banana, plain yogurt or a spoonful of peanut spread.",
    flavorEs: "Cacao tipo brownie",
    flavorEn: "Brownie-style cocoa",
    baseEs: "Mezcla a base de avena",
    baseEn: "Oat-based mix",
  },
  {
    slug: "avena-hojuelas-xl",
    category: "pantry",
    tone: "leaf",
    familyEs: "Basico de despensa",
    familyEn: "Pantry staple",
    name: "Avena en Hojuelas XL",
    lineEs: "Rinde mas",
    lineEn: "Larger yield",
    descriptionEs:
      "Un basico para desayunos, horneados y preparaciones simples de todos los dias.",
    descriptionEn:
      "A pantry staple for breakfasts, baking and everyday simple preparations.",
    size: "2000 g",
    price: 56430,
    tagsEs: ["2 kg", "Sin gluten", "Para cocinar"],
    tagsEn: ["2 kg", "Gluten-free", "For cooking"],
    useEs: "Util para avena caliente, galletas, pancakes y granola casera.",
    useEn: "Useful for warm oats, cookies, pancakes and homemade granola.",
    flavorEs: "Base neutra y versatil",
    flavorEn: "Neutral, versatile base",
    baseEs: "Avena en hojuelas gruesas",
    baseEn: "Rolled oats",
  },
  {
    slug: "harina-avena",
    category: "pantry",
    tone: "gold",
    familyEs: "Basico de despensa",
    familyEn: "Pantry staple",
    name: "Harina de Avena",
    lineEs: "Para hornear",
    lineEn: "Made for baking",
    descriptionEs:
      "Practica para muffins, pancakes, galletas y mezclas caseras de uso diario.",
    descriptionEn:
      "Practical for muffins, pancakes, cookies and everyday homemade mixes.",
    size: "1000 g",
    price: 31350,
    tagsEs: ["1 kg", "Para reposteria", "Textura fina"],
    tagsEn: ["1 kg", "For baking", "Fine texture"],
    useEs: "Funciona bien en panes suaves, pancakes y masas con fruta o miel.",
    useEn: "Works well in soft breads, pancakes and doughs with fruit or honey.",
    flavorEs: "Avena suave",
    flavorEn: "Gentle oat flavor",
    baseEs: "Harina fina de avena",
    baseEn: "Fine oat flour",
  },
  {
    slug: "harina-almendra",
    category: "pantry",
    tone: "rose",
    familyEs: "Basico de despensa",
    familyEn: "Pantry staple",
    name: "Harina de Almendra",
    lineEs: "Textura ligera",
    lineEn: "Lighter texture",
    descriptionEs:
      "Una opcion practica para horneados suaves, recetas bajas en harina tradicional y mezclas propias.",
    descriptionEn:
      "A practical option for soft baking, lower-flour recipes and custom blends.",
    size: "250 g",
    price: 34650,
    tagsEs: ["Almendra", "Para hornear", "Formato practico"],
    tagsEn: ["Almond", "For baking", "Handy format"],
    useEs: "Ideal para waffles, galletas suaves y masas con especias o vainilla.",
    useEn: "Ideal for waffles, soft cookies and doughs with spices or vanilla.",
    flavorEs: "Almendra suave",
    flavorEn: "Soft almond flavor",
    baseEs: "Harina fina de almendra",
    baseEn: "Fine almond flour",
  },
];

function siteRoot() {
  const root = (document.body.dataset.root || ".").replace(/\/$/, "");
  return root || ".";
}

function fromRoot(path) {
  const root = siteRoot();
  return root === "." ? path : `${root}/${path}`;
}

function currentLanguage() {
  return localStorage.getItem(STORAGE_KEYS.language) || document.body.dataset.language || "es";
}

function bilingualText(es, en) {
  return `<span class="lang-es">${es}</span><span class="lang-en">${en}</span>`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function discountPercent(oldPrice, price) {
  if (!oldPrice || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function productHref(product) {
  return `${fromRoot("pages/producto.html")}?slug=${encodeURIComponent(product.slug)}`;
}

function pageForNavigation(page) {
  return page === "producto" ? "catalogo" : page;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeSvg(value) {
  return escapeHtml(value);
}

function splitLabel(text, maxWordsPerLine = 2) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];

  while (words.length) {
    lines.push(words.splice(0, maxWordsPerLine).join(" "));
  }

  return lines.slice(0, 2);
}

function svgDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function productPalette(product) {
  return TONE_META[product.tone] || TONE_META.leaf;
}

function bundleArtwork(palette) {
  return `
    <ellipse cx="320" cy="500" rx="160" ry="26" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(160 190)">
      <rect x="0" y="58" width="120" height="210" rx="28" fill="#fff8f5" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="28" y="36" width="64" height="50" rx="18" fill="${palette.bg}" />
      <rect x="148" y="0" width="150" height="270" rx="32" fill="white" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="184" y="34" width="78" height="58" rx="20" fill="${palette.bg}" />
      <rect x="322" y="76" width="110" height="190" rx="26" fill="#fff6f0" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="346" y="110" width="62" height="46" rx="16" fill="${palette.bg}" />
      <path d="M148 132 C212 112 232 112 298 132" fill="none" stroke="${palette.accent}" stroke-width="10" stroke-linecap="round" />
      <path d="M20 170 C54 154 70 154 102 170" fill="none" stroke="${palette.accent}" stroke-width="8" stroke-linecap="round" />
      <path d="M336 182 C364 166 382 166 416 182" fill="none" stroke="${palette.accent}" stroke-width="8" stroke-linecap="round" />
    </g>
  `;
}

function granolaArtwork(palette) {
  return `
    <ellipse cx="320" cy="514" rx="164" ry="24" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(170 158)">
      <path d="M70 0 H230 L260 230 Q150 286 40 230 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.10" />
      <path d="M70 0 H230 L214 54 H86 Z" fill="${palette.bg}" />
      <rect x="92" y="76" width="116" height="78" rx="26" fill="${palette.bgSoft}" />
      <path d="M0 260 Q150 352 300 260 L270 330 H30 Z" fill="${palette.accent}" opacity="0.90" />
      <path d="M28 260 Q150 320 272 260" fill="none" stroke="white" stroke-opacity="0.45" stroke-width="8" />
      <circle cx="92" cy="244" r="16" fill="${palette.gold || palette.bg}" />
      <circle cx="132" cy="226" r="12" fill="${palette.leaf}" opacity="0.8" />
      <circle cx="164" cy="242" r="14" fill="${palette.accent}" opacity="0.7" />
      <circle cx="204" cy="228" r="12" fill="${palette.deep}" opacity="0.18" />
      <circle cx="226" cy="248" r="10" fill="${palette.leaf}" opacity="0.7" />
    </g>
  `;
}

function spreadArtwork(palette) {
  return `
    <ellipse cx="320" cy="516" rx="156" ry="22" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(176 178)">
      <rect x="88" y="0" width="192" height="54" rx="20" fill="${palette.deep}" opacity="0.86" />
      <rect x="48" y="50" width="272" height="230" rx="52" fill="white" stroke="${palette.deep}" stroke-opacity="0.10" />
      <rect x="86" y="94" width="196" height="104" rx="30" fill="${palette.bg}" />
      <rect x="66" y="304" width="140" height="18" rx="9" fill="${palette.deep}" opacity="0.10" />
      <path d="M254 278 C320 250 356 250 404 290" fill="none" stroke="${palette.accent}" stroke-width="16" stroke-linecap="round" />
      <path d="M362 256 C390 236 420 244 432 268" fill="none" stroke="${palette.deep}" stroke-width="10" stroke-linecap="round" opacity="0.30" />
    </g>
  `;
}

function pancakeArtwork(palette) {
  return `
    <ellipse cx="320" cy="516" rx="166" ry="22" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(146 176)">
      <path d="M0 22 Q0 0 22 0 H164 Q188 0 188 24 V246 Q188 270 164 270 H24 Q0 270 0 246 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.10" />
      <rect x="28" y="52" width="132" height="82" rx="24" fill="${palette.bg}" />
      <g transform="translate(236 82)">
        <ellipse cx="98" cy="142" rx="112" ry="26" fill="${palette.deep}" opacity="0.08" />
        <ellipse cx="98" cy="126" rx="108" ry="26" fill="#F0C97A" />
        <ellipse cx="98" cy="102" rx="102" ry="24" fill="#F6D48C" />
        <ellipse cx="98" cy="78" rx="96" ry="23" fill="#F8DFA4" />
        <path d="M82 28 C104 40 118 50 128 72" fill="none" stroke="${palette.accent}" stroke-width="14" stroke-linecap="round" />
      </g>
    </g>
  `;
}

function pantryArtwork(palette) {
  return `
    <ellipse cx="320" cy="518" rx="156" ry="22" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(164 166)">
      <path d="M78 0 H246 L270 268 Q162 316 54 268 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.10" />
      <path d="M90 0 H234 L220 58 H104 Z" fill="${palette.bg}" />
      <rect x="104" y="86" width="116" height="90" rx="28" fill="${palette.bgSoft}" />
      <path d="M298 256 Q364 310 430 256 L408 314 H320 Z" fill="${palette.accent}" opacity="0.88" />
      <circle cx="340" cy="236" r="14" fill="${palette.bg}" />
      <circle cx="372" cy="222" r="12" fill="${palette.leaf}" opacity="0.75" />
      <circle cx="398" cy="238" r="10" fill="${palette.deep}" opacity="0.14" />
    </g>
  `;
}

function createProductImage(product) {
  const palette = productPalette(product);
  const lines = splitLabel(product.name);
  const categoryLabel = escapeSvg(CATEGORY_META[product.category].labelEs);
  const lineOne = escapeSvg(lines[0] || product.name);
  const lineTwo = escapeSvg(lines[1] || product.lineEs);

  const artwork =
    product.category === "bundles"
      ? bundleArtwork(palette)
      : product.category === "granolas"
        ? granolaArtwork(palette)
        : product.category === "spreads"
          ? spreadArtwork(palette)
          : product.category === "pancakes"
            ? pancakeArtwork(palette)
            : pantryArtwork(palette);

  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="${escapeSvg(product.name)}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.bgSoft}" />
          <stop offset="100%" stop-color="${palette.bg}" />
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${palette.accent}" />
          <stop offset="100%" stop-color="${palette.leaf}" />
        </linearGradient>
      </defs>
      <rect width="640" height="640" rx="42" fill="url(#bg)" />
      <circle cx="104" cy="102" r="52" fill="${palette.accent}" opacity="0.10" />
      <circle cx="534" cy="94" r="70" fill="${palette.leaf}" opacity="0.12" />
      <circle cx="550" cy="516" r="86" fill="${palette.accent}" opacity="0.08" />
      <rect x="56" y="54" width="528" height="66" rx="22" fill="white" fill-opacity="0.70" />
      <rect x="56" y="474" width="528" height="120" rx="30" fill="white" fill-opacity="0.82" />
      <rect x="76" y="74" width="164" height="26" rx="13" fill="url(#ribbon)" />
      <text x="86" y="91" fill="${palette.deep}" font-family="Space Grotesk, Arial, sans-serif" font-size="22" font-weight="700">${categoryLabel}</text>
      ${artwork}
      <text x="86" y="532" fill="${palette.deep}" font-family="Space Grotesk, Arial, sans-serif" font-size="42" font-weight="700">${lineOne}</text>
      <text x="86" y="572" fill="${palette.deep}" font-family="Space Grotesk, Arial, sans-serif" font-size="30" font-weight="500" opacity="0.78">${lineTwo}</text>
    </svg>
  `);
}

const PRODUCTS = PRODUCT_SEED.map((product) => ({
  ...product,
  image: createProductImage(product),
}));

const PRODUCT_MAP = new Map(PRODUCTS.map((product) => [product.slug, product]));

function currentCart() {
  const fallback = {};
  const raw = localStorage.getItem(STORAGE_KEYS.cartItems);
  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(raw);
    return Object.entries(parsed).reduce((accumulator, [slug, quantity]) => {
      const normalized = Math.max(0, Math.round(Number(quantity) || 0));
      if (normalized > 0 && PRODUCT_MAP.has(slug)) {
        accumulator[slug] = normalized;
      }
      return accumulator;
    }, {});
  } catch {
    return fallback;
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.cartItems, JSON.stringify(cart));
}

function cartEntries(cart = currentCart()) {
  return Object.entries(cart)
    .map(([slug, quantity]) => {
      const product = PRODUCT_MAP.get(slug);
      if (!product || quantity < 1) return null;
      return { product, quantity };
    })
    .filter(Boolean);
}

function cartCount(cart = currentCart()) {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function cartSubtotal(entries = cartEntries()) {
  return entries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
}

function setCartQuantity(slug, quantity) {
  const cart = currentCart();
  const normalized = Math.max(0, Math.round(quantity || 0));

  if (normalized === 0) {
    delete cart[slug];
  } else {
    cart[slug] = normalized;
  }

  saveCart(cart);
  syncCartUI();
}

function addToCart(slug, quantity = 1) {
  const product = PRODUCT_MAP.get(slug);
  if (!product) return;

  const cart = currentCart();
  cart[slug] = (cart[slug] || 0) + quantity;
  saveCart(cart);
  syncCartUI();

  const lang = currentLanguage();
  showToast(
    lang === "es"
      ? `${product.name} se agrego al carrito.`
      : `${product.name} was added to your cart.`,
  );
}

function cartWhatsappLink(entries, lang) {
  const lines = entries.map(
    (entry) =>
      `- ${entry.product.name} x${entry.quantity} (${formatCurrency(entry.product.price * entry.quantity)})`,
  );

  const header = lang === "es" ? "Hola, quiero pedir:" : "Hi, I would like to order:";
  const footer =
    lang === "es"
      ? `Subtotal estimado: ${formatCurrency(cartSubtotal(entries))}`
      : `Estimated subtotal: ${formatCurrency(cartSubtotal(entries))}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent([header, ...lines, "", footer].join("\n"))}`;
}

function injectShell() {
  const body = document.body;
  const page = pageForNavigation(body.dataset.page || "home");
  const headerTarget = document.querySelector("#site-header");
  const footerTarget = document.querySelector("#site-footer");
  const homeHref = fromRoot("index.html");
  const catalogHref = fromRoot("pages/catalogo.html");
  const reportHref = fromRoot("pages/informe-academico.html");
  const shippingHref = fromRoot("pages/envios-y-devoluciones.html");
  const privacyHref = fromRoot("pages/politica-privacidad.html");
  const termsHref = fromRoot("pages/terminos-condiciones.html");

  if (headerTarget) {
    headerTarget.innerHTML = `
      <a class="skip-link" href="#contenido-principal">
        ${bilingualText("Saltar al contenido", "Skip to content")}
      </a>
      <header class="site-header">
        <div class="container topbar">
          <div>${bilingualText(
            "<strong>Curaduria confiable</strong> con seleccion saludable e informacion clara.",
            "<strong>Trusted curation</strong> with a healthy selection and clear information.",
          )}</div>
          <div>${bilingualText(
            "Compra rapida desde cualquier dispositivo y atencion directa por WhatsApp.",
            "Fast shopping from any device with direct WhatsApp support.",
          )}</div>
        </div>
        <div class="container nav-row">
          <a class="brand" href="${homeHref}" aria-label="Savia Col.">
            <span class="brand-mark" aria-hidden="true">S</span>
            <span class="brand-copy">
              <span class="brand-name">Savia Col.</span>
              <span class="brand-tag">
                ${bilingualText(
                  "Despensa Saludable S.A.S.",
                  "Healthy Pantry S.A.S.",
                )}
              </span>
            </span>
          </a>

          <nav class="nav-menu" id="main-nav" data-open="false">
            <a class="nav-link ${page === "home" ? "is-active" : ""}" href="${homeHref}">
              ${bilingualText("Inicio", "Home")}
            </a>
            <a class="nav-link ${page === "catalogo" ? "is-active" : ""}" href="${catalogHref}">
              ${bilingualText("Catalogo", "Catalog")}
            </a>
            <a class="nav-link ${page === "informe" ? "is-active" : ""}" href="${reportHref}">
              ${bilingualText("Propuesta", "Proposal")}
            </a>
            <a class="nav-link ${page === "envios" ? "is-active" : ""}" href="${shippingHref}">
              ${bilingualText("Envios", "Shipping")}
            </a>
            <a class="nav-link ${page === "privacidad" ? "is-active" : ""}" href="${privacyHref}">
              ${bilingualText("Privacidad", "Privacy")}
            </a>
            <a class="nav-link ${page === "terminos" ? "is-active" : ""}" href="${termsHref}">
              ${bilingualText("Terminos", "Terms")}
            </a>
          </nav>

          <div class="nav-tools">
            <div class="lang-switch" aria-label="Selector de idioma">
              <button type="button" data-lang-trigger="es">ES</button>
              <button type="button" data-lang-trigger="en">EN</button>
            </div>
            <button class="cart-pill" type="button" data-open-cart aria-label="Abrir carrito">
              ${bilingualText("Carrito", "Cart")}
              <span class="cart-count" data-cart-count>0</span>
            </button>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
              ${bilingualText("Menu", "Menu")}
            </button>
          </div>
        </div>
      </header>

      <div class="cart-overlay" data-cart-overlay></div>

      <aside class="cart-drawer" data-cart-drawer aria-hidden="true">
        <div class="cart-drawer-head">
          <div>
            <p class="kicker">${bilingualText("Tu pedido", "Your order")}</p>
            <h2>${bilingualText("Resumen del carrito", "Cart summary")}</h2>
          </div>
          <button class="cart-close" type="button" data-close-cart aria-label="Cerrar carrito">×</button>
        </div>

        <div class="cart-drawer-body">
          <div class="cart-empty" data-cart-empty>
            <p>${bilingualText(
              "Todavia no agregas productos. Explora el catalogo y arma tu pedido.",
              "You have not added products yet. Browse the catalog and build your order.",
            )}</p>
          </div>
          <div class="cart-items" data-cart-items></div>
        </div>

        <div class="cart-drawer-foot">
          <div class="cart-progress">
            <div class="cart-progress-track">
              <span data-cart-progress-fill></span>
            </div>
            <p class="muted" data-cart-progress-text></p>
          </div>

          <div class="cart-summary-row">
            <span>${bilingualText("Subtotal", "Subtotal")}</span>
            <strong data-cart-subtotal>${formatCurrency(0)}</strong>
          </div>

          <div class="cart-actions">
            <a
              class="btn btn-primary"
              data-cart-checkout
              href="${catalogHref}"
              target="_blank"
              rel="noreferrer"
            >
              ${bilingualText("Explorar catalogo", "Browse catalog")}
            </a>
            <button class="btn btn-secondary" type="button" data-cart-clear>
              ${bilingualText("Vaciar carrito", "Clear cart")}
            </button>
          </div>
        </div>
      </aside>
    `;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <section class="footer-brand">
            <div class="footer-mark">S</div>
            <div>
              <strong class="brand-name">Savia Col.</strong>
              <p class="muted">
                ${bilingualText(
                  "Curaduria confiable, conveniencia digital y educacion nutricional para alimentarte mejor sin complicarte la vida.",
                  "Trusted curation, digital convenience and nutrition education to help you eat better without complicating your life.",
                )}
              </p>
            </div>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Colecciones", "Collections")}</strong>
            <a href="${fromRoot("pages/catalogo.html?category=granolas")}">${bilingualText("Granolas", "Granolas")}</a>
            <a href="${fromRoot("pages/catalogo.html?category=pancakes")}">${bilingualText("Pancakes y waffles", "Pancakes and waffles")}</a>
            <a href="${fromRoot("pages/catalogo.html?category=spreads")}">${bilingualText("Cremas", "Spreads")}</a>
            <a href="${fromRoot("pages/catalogo.html?category=pantry")}">${bilingualText("Despensa", "Pantry")}</a>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Ayuda", "Help")}</strong>
            <a href="${reportHref}">${bilingualText("Propuesta de negocio", "Business proposal")}</a>
            <a href="${shippingHref}">${bilingualText("Envios y devoluciones", "Shipping and returns")}</a>
            <a href="${privacyHref}">${bilingualText("Politica de privacidad", "Privacy policy")}</a>
            <a href="${termsHref}">${bilingualText("Terminos y condiciones", "Terms and conditions")}</a>
          </section>

          <section class="footer-notes">
            <strong>${bilingualText("Contacto", "Contact")}</strong>
            <span>hola@saviacol.co</span>
            <span>+57 310 817 9620</span>
            <span>${bilingualText("Pasto, Colombia", "Pasto, Colombia")}</span>
            <span>${bilingualText("Pagos: tarjeta, PSE, Mercado Pago y transferencia", "Payments: cards, PSE, Mercado Pago and transfer")}</span>
          </section>
        </div>

        <div class="container footer-legal">
          <span>${bilingualText("Precios expresados en COP y sujetos a disponibilidad.", "Prices shown in COP and subject to availability.")}</span>
          <span>${bilingualText("Atencion de lunes a sabado por WhatsApp y correo.", "Support available Monday to Saturday via WhatsApp and email.")}</span>
        </div>
      </footer>
    `;
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.dataset.language = lang;

  document.querySelectorAll(".lang-es").forEach((node) => {
    node.classList.toggle("lang-hidden", lang !== "es");
  });

  document.querySelectorAll(".lang-en").forEach((node) => {
    node.classList.toggle("lang-hidden", lang !== "en");
  });

  document.querySelectorAll("[data-lang-trigger]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langTrigger === lang));
  });

  document.querySelectorAll("[data-placeholder-es]").forEach((node) => {
    node.setAttribute("placeholder", lang === "es" ? node.dataset.placeholderEs : node.dataset.placeholderEn);
  });

  if (document.body.dataset.titleEs && document.body.dataset.titleEn) {
    document.title = lang === "es" ? document.body.dataset.titleEs : document.body.dataset.titleEn;
  }

  const description = document.querySelector('meta[name="description"]');
  if (description && document.body.dataset.descEs && document.body.dataset.descEn) {
    description.setAttribute("content", lang === "es" ? document.body.dataset.descEs : document.body.dataset.descEn);
  }
}

function bindLanguage() {
  const lang = currentLanguage();
  applyLanguage(lang);

  document.querySelectorAll("[data-lang-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.langTrigger;
      localStorage.setItem(STORAGE_KEYS.language, nextLang);
      applyLanguage(nextLang);
      syncCartUI();
    });
  });
}

function ensureToast() {
  if (document.querySelector(".toast")) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
}

function showToast(message) {
  ensureToast();
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function openCart() {
  document.body.classList.add("cart-open");
  const drawer = document.querySelector("[data-cart-drawer]");
  if (drawer) drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  const drawer = document.querySelector("[data-cart-drawer]");
  if (drawer) drawer.setAttribute("aria-hidden", "true");
}

function syncCartUI() {
  const lang = currentLanguage();
  const cart = currentCart();
  const entries = cartEntries(cart);
  const totalItems = cartCount(cart);
  const subtotal = cartSubtotal(entries);
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const progress = subtotal === 0 ? 0 : Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(totalItems);
  });

  const itemsHost = document.querySelector("[data-cart-items]");
  if (itemsHost) {
    itemsHost.innerHTML = entries
      .map(
        (entry) => `
          <article class="cart-item">
            <div class="cart-item-media">
              <img src="${entry.product.image}" alt="${escapeHtml(entry.product.name)}" loading="lazy" />
            </div>
            <div class="cart-item-copy">
              <strong>${escapeHtml(entry.product.name)}</strong>
              <span>${bilingualText(entry.product.lineEs, entry.product.lineEn)}</span>
              <span>${formatCurrency(entry.product.price)}</span>
            </div>
            <div class="cart-item-side">
              <div class="cart-stepper">
                <button type="button" data-cart-qty="-1" data-slug="${entry.product.slug}" aria-label="Restar">-</button>
                <span>${entry.quantity}</span>
                <button type="button" data-cart-qty="1" data-slug="${entry.product.slug}" aria-label="Sumar">+</button>
              </div>
              <strong>${formatCurrency(entry.product.price * entry.quantity)}</strong>
              <button class="cart-remove" type="button" data-remove-cart-item data-slug="${entry.product.slug}">
                ${bilingualText("Quitar", "Remove")}
              </button>
            </div>
          </article>
        `,
      )
      .join("");
  }

  const emptyState = document.querySelector("[data-cart-empty]");
  if (emptyState) {
    emptyState.classList.toggle("is-visible", entries.length === 0);
  }

  const subtotalNode = document.querySelector("[data-cart-subtotal]");
  if (subtotalNode) {
    subtotalNode.textContent = formatCurrency(subtotal);
  }

  const progressFill = document.querySelector("[data-cart-progress-fill]");
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }

  const progressText = document.querySelector("[data-cart-progress-text]");
  if (progressText) {
    progressText.innerHTML =
      subtotal >= FREE_SHIPPING_THRESHOLD
        ? bilingualText(
            "Tu pedido ya tiene envio gratis.",
            "Your order already qualifies for free shipping.",
          )
        : bilingualText(
            `Te faltan ${formatCurrency(remaining)} para obtener envio gratis.`,
            `Add ${formatCurrency(remaining)} more to unlock free shipping.`,
          );
  }

  const checkoutLink = document.querySelector("[data-cart-checkout]");
  if (checkoutLink) {
    if (entries.length === 0) {
      checkoutLink.href = fromRoot("pages/catalogo.html");
      checkoutLink.innerHTML = bilingualText("Explorar catalogo", "Browse catalog");
    } else {
      checkoutLink.href = cartWhatsappLink(entries, lang);
      checkoutLink.innerHTML = bilingualText("Pedir por WhatsApp", "Order on WhatsApp");
    }
  }
}

function bindCart() {
  syncCartUI();

  document.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-to-cart");
    if (addButton) {
      event.preventDefault();
      addToCart(addButton.dataset.slug);
      return;
    }

    if (event.target.closest("[data-open-cart]")) {
      event.preventDefault();
      openCart();
      return;
    }

    if (event.target.closest("[data-close-cart]") || event.target.closest("[data-cart-overlay]")) {
      event.preventDefault();
      closeCart();
      return;
    }

    const quantityButton = event.target.closest("[data-cart-qty]");
    if (quantityButton) {
      event.preventDefault();
      const slug = quantityButton.dataset.slug;
      const delta = Number(quantityButton.dataset.cartQty || 0);
      const cart = currentCart();
      setCartQuantity(slug, (cart[slug] || 0) + delta);
      return;
    }

    const removeButton = event.target.closest("[data-remove-cart-item]");
    if (removeButton) {
      event.preventDefault();
      setCartQuantity(removeButton.dataset.slug, 0);
      return;
    }

    if (event.target.closest("[data-cart-clear]")) {
      event.preventDefault();
      saveCart({});
      syncCartUI();
      return;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("cart-open")) {
      closeCart();
    }
  });
}

function bindNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.dataset.open === "true";
    menu.dataset.open = String(!open);
    toggle.setAttribute("aria-expanded", String(!open));
  });
}

function productCardTemplate(product) {
  const discount = discountPercent(product.oldPrice, product.price);
  const searchTokens = [
    product.name,
    product.lineEs,
    product.lineEn,
    product.descriptionEs,
    product.descriptionEn,
    product.category,
    product.familyEs,
    product.familyEn,
    product.flavorEs,
    product.flavorEn,
    product.baseEs,
    product.baseEn,
    product.tagsEs.join(" "),
    product.tagsEn.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return `
    <article class="product-card catalog-card tone-${product.tone}" data-category="${product.category}" data-search="${escapeHtml(searchTokens)}">
      <div class="product-media">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" />
        <span class="product-badge">${bilingualText(product.familyEs, product.familyEn)}</span>
        ${discount ? `<span class="sale-pill">-${discount}%</span>` : ""}
      </div>
      <div class="product-copy">
        <p class="product-line">${bilingualText(product.lineEs, product.lineEn)}</p>
        <h3>${escapeHtml(product.name)}</h3>
        <p class="muted">${bilingualText(product.descriptionEs, product.descriptionEn)}</p>
        <div class="tag-row">
          ${product.tagsEs
            .map((tag, index) => `<span class="tag">${bilingualText(tag, product.tagsEn[index])}</span>`)
            .join("")}
        </div>
        <div class="product-footer">
          <div class="price-stack">
            ${product.oldPrice ? `<span class="price-old">${formatCurrency(product.oldPrice)}</span>` : ""}
            <strong class="price">${formatCurrency(product.price)}</strong>
          </div>
          <div class="button-row">
            <a class="btn btn-secondary" href="${productHref(product)}">${bilingualText("Ver detalle", "View details")}</a>
            <button class="btn btn-primary add-to-cart" type="button" data-slug="${product.slug}">
              ${bilingualText("Agregar", "Add")}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const heroTarget = document.querySelector("#home-hero-product");
  const bestsellers = document.querySelector("#home-bestsellers");
  const bundles = document.querySelector("#home-bundles");
  const spotlight = document.querySelector("#home-spotlight");

  if (heroTarget) {
    const featuredHero = PRODUCT_MAP.get("back-to-routine");
    if (featuredHero) {
      heroTarget.innerHTML = `
        <article class="showcase-main">
          <img src="${featuredHero.image}" alt="${escapeHtml(featuredHero.name)}" loading="lazy" />
          <div class="showcase-copy">
            <strong>${escapeHtml(featuredHero.name)}</strong>
            <p class="muted">${bilingualText(featuredHero.descriptionEs, featuredHero.descriptionEn)}</p>
            <div class="button-row">
              <a class="btn btn-primary" href="${productHref(featuredHero)}">${bilingualText("Ver combo", "View bundle")}</a>
              <button class="btn btn-secondary add-to-cart" type="button" data-slug="${featuredHero.slug}">
                ${bilingualText("Agregar al carrito", "Add to cart")}
              </button>
            </div>
          </div>
        </article>
      `;
    }
  }

  if (bestsellers) {
    const featured = ["granola-pistacho", "spread-chocolate-cremoso-xl", "pancake-vainilla-xl", "avena-hojuelas-xl"]
      .map((slug) => PRODUCT_MAP.get(slug))
      .filter(Boolean);
    bestsellers.innerHTML = featured.map((product) => productCardTemplate(product)).join("");
  }

  if (bundles) {
    bundles.innerHTML = PRODUCTS.filter((product) => product.category === "bundles")
      .map((product) => productCardTemplate(product))
      .join("");
  }

  if (spotlight) {
    const spotlightProduct = PRODUCT_MAP.get("spread-chocolate-cremoso-xl");
    if (spotlightProduct) {
      spotlight.innerHTML = `
        <article class="spotlight-panel tone-${spotlightProduct.tone}">
          <div class="spotlight-copy">
            <p class="kicker">${bilingualText("Favorito de la despensa", "Pantry favorite")}</p>
            <h2>${bilingualText(
              "Una crema suave para tostadas, fruta y pancakes.",
              "A silky spread for toast, fruit and pancakes.",
            )}</h2>
            <p class="section-copy">${bilingualText(
              "Cacao y Avellana es de esos productos que resuelven desayuno, media tarde y antojo con el mismo frasco.",
              "Cacao y Avellana is the kind of jar that solves breakfast, snack time and sweet cravings alike.",
            )}</p>
            <div class="stat-strip">
              <div class="stat-card">
                <strong>${formatCurrency(spotlightProduct.price)}</strong>
                <span>${bilingualText("Precio actual", "Current price")}</span>
              </div>
              <div class="stat-card">
                <strong>${bilingualText(spotlightProduct.size, spotlightProduct.size)}</strong>
                <span>${bilingualText("Presentacion", "Format")}</span>
              </div>
              <div class="stat-card">
                <strong>${bilingualText("Muy facil", "Very easy")}</strong>
                <span>${bilingualText("De combinar", "To pair")}</span>
              </div>
            </div>
            <div class="cta-row">
              <a class="btn btn-primary" href="${productHref(spotlightProduct)}">${bilingualText("Ver producto", "View product")}</a>
              <button class="btn btn-secondary add-to-cart" type="button" data-slug="${spotlightProduct.slug}">
                ${bilingualText("Sumar al carrito", "Add to cart")}
              </button>
            </div>
          </div>
          <div class="spotlight-media">
            <img src="${spotlightProduct.image}" alt="${escapeHtml(spotlightProduct.name)}" loading="lazy" />
          </div>
        </article>
      `;
    }
  }
}

function renderCatalog() {
  const grid = document.querySelector("#catalog-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((product) => productCardTemplate(product)).join("");
}

function buildProductInfoCards(product) {
  return [
    {
      titleEs: "Sabor",
      titleEn: "Flavor",
      bodyEs: product.flavorEs,
      bodyEn: product.flavorEn,
    },
    {
      titleEs: "Base",
      titleEn: "Base",
      bodyEs: product.baseEs,
      bodyEn: product.baseEn,
    },
    {
      titleEs: "Ideal para",
      titleEn: "Great for",
      bodyEs: product.useEs,
      bodyEn: product.useEn,
    },
  ];
}

function buildProductExtraCards(product) {
  return [
    {
      titleEs: "Lo que recibes",
      titleEn: "What you get",
      itemsEs: [
        `${product.size}.`,
        `${product.baseEs}.`,
        `${CATEGORY_META[product.category].labelEs}.`,
        `${product.tagsEs[0]}.`,
      ],
      itemsEn: [
        `${product.size}.`,
        `${product.baseEn}.`,
        `${CATEGORY_META[product.category].labelEn}.`,
        `${product.tagsEn[0]}.`,
      ],
    },
    {
      titleEs: "Compra y entrega",
      titleEn: "Buying and delivery",
      itemsEs: [
        `Envio gratis desde ${formatCurrency(FREE_SHIPPING_THRESHOLD)}.`,
        "Pagos por tarjeta, PSE, Mercado Pago o transferencia.",
        "Atencion por WhatsApp para confirmar tu pedido.",
        "Disponibilidad sujeta a inventario.",
      ],
      itemsEn: [
        `Free shipping over ${formatCurrency(FREE_SHIPPING_THRESHOLD)}.`,
        "Payments by card, PSE, Mercado Pago or bank transfer.",
        "WhatsApp support to confirm your order.",
        "Availability is subject to stock.",
      ],
    },
  ];
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "granola-pistacho";
  const product = PRODUCT_MAP.get(slug) || PRODUCTS[0];
  const shell = document.querySelector("#product-shell");
  const benefits = document.querySelector("#product-benefits");
  const extra = document.querySelector("#product-extra");
  const recommendations = document.querySelector("#product-recommendations");

  if (!product || !shell || !benefits || !extra || !recommendations) return;

  document.body.dataset.titleEs = `${product.name} | Savia Col.`;
  document.body.dataset.titleEn = `${product.name} | Savia Col.`;
  document.body.dataset.descEs = `${product.name}, ${product.flavorEs.toLowerCase()} y precio ${formatCurrency(product.price)}.`;
  document.body.dataset.descEn = `${product.name}, ${product.flavorEn.toLowerCase()} and price ${formatCurrency(product.price)}.`;

  const discount = discountPercent(product.oldPrice, product.price);
  shell.innerHTML = `
    <section class="product-shell surface-panel tone-${product.tone}">
      <div class="product-gallery">
        <div class="product-visual">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" />
        </div>
        <div class="product-meta-strip">
          <span class="tag">${bilingualText(product.size, product.size)}</span>
          <span class="tag">${bilingualText(CATEGORY_META[product.category].labelEs, CATEGORY_META[product.category].labelEn)}</span>
          <span class="tag">${bilingualText("Envio nacional", "Nationwide shipping")}</span>
        </div>
      </div>
      <article class="product-summary">
        <p class="kicker">${bilingualText(product.familyEs, product.familyEn)}</p>
        <h1 class="page-title">${escapeHtml(product.name)}</h1>
        <p class="product-line product-line-large">${bilingualText(product.lineEs, product.lineEn)}</p>
        <p class="page-intro">${bilingualText(product.descriptionEs, product.descriptionEn)}</p>

        <div class="tag-row">
          ${product.tagsEs
            .map((tag, index) => `<span class="tag">${bilingualText(tag, product.tagsEn[index])}</span>`)
            .join("")}
        </div>

        <div class="price-cluster">
          <div>
            ${product.oldPrice ? `<span class="price-old">${formatCurrency(product.oldPrice)}</span>` : ""}
            <strong class="price">${formatCurrency(product.price)}</strong>
          </div>
          ${discount ? `<span class="pill-note">${bilingualText(`Ahorra ${discount}%`, `Save ${discount}%`)}</span>` : ""}
        </div>

        <div class="button-row">
          <button class="btn btn-primary add-to-cart" type="button" data-slug="${product.slug}">
            ${bilingualText("Agregar al carrito", "Add to cart")}
          </button>
          <a class="btn btn-secondary" href="${fromRoot("pages/catalogo.html")}">${bilingualText(
            "Volver al catalogo",
            "Back to catalog",
          )}</a>
        </div>

        <ul class="micro-list">
          <li>${bilingualText(`Sabor: ${product.flavorEs}.`, `Flavor: ${product.flavorEn}.`)}</li>
          <li>${bilingualText(`Ideal para: ${product.useEs}`, `Great for: ${product.useEn}`)}</li>
          <li>${bilingualText(
            `Envio gratis desde ${formatCurrency(FREE_SHIPPING_THRESHOLD)}.`,
            `Free shipping over ${formatCurrency(FREE_SHIPPING_THRESHOLD)}.`,
          )}</li>
        </ul>
      </article>
    </section>
  `;

  benefits.innerHTML = buildProductInfoCards(product)
    .map(
      (item) => `
        <article class="feature-card">
          <div class="feature-icon">•</div>
          <h3>${bilingualText(item.titleEs, item.titleEn)}</h3>
          <p class="muted">${bilingualText(item.bodyEs, item.bodyEn)}</p>
        </article>
      `,
    )
    .join("");

  extra.innerHTML = buildProductExtraCards(product)
    .map(
      (card) => `
        <article class="card">
          <p class="kicker">${bilingualText(card.titleEs, card.titleEn)}</p>
          <ul class="list">
            ${card.itemsEs.map((item, index) => `<li>${bilingualText(item, card.itemsEn[index])}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  const related = PRODUCTS.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 3);
  const fallbackRelated = PRODUCTS.filter((item) => item.slug !== product.slug).slice(0, 3);
  recommendations.innerHTML = (related.length ? related : fallbackRelated)
    .map((item) => productCardTemplate(item))
    .join("");
}

function updateCatalogUrl(state) {
  const params = new URLSearchParams(window.location.search);

  if (state.category && state.category !== "all") {
    params.set("category", state.category);
  } else {
    params.delete("category");
  }

  if (state.query) {
    params.set("q", state.query);
  } else {
    params.delete("q");
  }

  const query = params.toString();
  const next = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  history.replaceState({}, "", next);
}

function bindCatalogControls() {
  const input = document.querySelector("[data-search-input]");
  const chips = [...document.querySelectorAll("[data-filter-trigger]")];
  const cards = [...document.querySelectorAll(".catalog-card")];
  const count = document.querySelector("#catalog-count");
  const empty = document.querySelector("#catalog-empty");

  if (!input || !chips.length || !cards.length || !count || !empty) return;

  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category");
  const state = {
    category: CATEGORY_META[initialCategory] ? initialCategory : "all",
    query: params.get("q") || "",
  };

  input.value = state.query;

  function render() {
    let visibleCount = 0;

    cards.forEach((card) => {
      const categoryMatch = state.category === "all" || card.dataset.category === state.category;
      const queryMatch = !state.query || card.dataset.search.includes(state.query.toLowerCase());
      const visible = categoryMatch && queryMatch;
      card.classList.toggle("is-hidden", !visible);
      if (visible) visibleCount += 1;
    });

    chips.forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.filterTrigger === state.category);
    });

    count.innerHTML = bilingualText(
      `${visibleCount} productos encontrados`,
      `${visibleCount} products found`,
    );
    empty.classList.toggle("is-visible", visibleCount === 0);
    updateCatalogUrl(state);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.filterTrigger;
      render();
    });
  });

  input.addEventListener("input", () => {
    state.query = input.value.trim();
    render();
  });

  render();
}

function renderDynamicContent() {
  const page = document.body.dataset.page;

  if (page === "home") renderHome();
  if (page === "catalogo") renderCatalog();
  if (page === "producto") renderProductPage();
}

document.addEventListener("DOMContentLoaded", () => {
  injectShell();
  renderDynamicContent();
  bindNavigation();
  bindLanguage();
  bindCart();
  bindCatalogControls();
});
