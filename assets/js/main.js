const STORAGE_KEYS = {
  language: "savia-col-language",
  cartItems: "savia-col-cart-items",
};

const FREE_SHIPPING_THRESHOLD = 160000;
const RETURN_WINDOW_DAYS = 5;
const WHATSAPP_NUMBER = "573108179620";
const SUPPORT_EMAIL = "hola@saviacol.co";
const SUPPORT_CITY = "Pasto, Colombia";
const GA_MEASUREMENT_ID = "G-40E6XHBPJY";

const CATEGORY_META = {
  all: {
    labelEs: "Todos",
    labelEn: "All",
  },
  flours: {
    labelEs: "Harinas",
    labelEn: "Flours",
    summaryEs: "Bases para hornear, espesar y preparar desayunos.",
    summaryEn: "Core ingredients for baking, mixing and breakfast prep.",
  },
  snacks: {
    labelEs: "Snacks",
    labelEn: "Snacks",
    summaryEs: "Opciones practicas para media manana, lonchera o post-entreno.",
    summaryEn: "Practical options for mid-morning, lunchboxes or post-workout moments.",
  },
  milks: {
    labelEs: "Bebidas vegetales",
    labelEn: "Plant-based drinks",
    summaryEs: "Bebidas listas para cafe, cereal, smoothies y cocina ligera.",
    summaryEn: "Ready-to-use drinks for coffee, cereal, smoothies and light cooking.",
  },
  sweeteners: {
    labelEs: "Endulzantes",
    labelEn: "Sweeteners",
    summaryEs: "Alternativas para endulzar con uso diario en cocina y bebidas.",
    summaryEn: "Alternatives for sweetening drinks and everyday kitchen routines.",
  },
  nuts: {
    labelEs: "Frutos secos",
    labelEn: "Nuts",
    summaryEs: "Mezclas para snack, topping o acompanamiento en bowls y yogur.",
    summaryEn: "Mixes for snacking, toppings or pairing with bowls and yogurt.",
  },
  bundles: {
    labelEs: "Combos",
    labelEn: "Bundles",
    summaryEs: "Packs pensados para surtir la despensa y subir el ticket promedio.",
    summaryEn: "Curated packs designed to restock the pantry and raise average order value.",
  },
};

const TONE_META = {
  sand: {
    bg: "#f2e2c8",
    bgSoft: "#fff7ea",
    accent: "#d4884b",
    deep: "#6f4a28",
    leaf: "#9db38a",
  },
  gold: {
    bg: "#f3e1af",
    bgSoft: "#fff8e5",
    accent: "#cb9d34",
    deep: "#6b531c",
    leaf: "#90a86f",
  },
  leaf: {
    bg: "#d8e5d7",
    bgSoft: "#f5fbf4",
    accent: "#5f8a62",
    deep: "#264636",
    leaf: "#9bc09e",
  },
  berry: {
    bg: "#ead8e2",
    bgSoft: "#fcf5f8",
    accent: "#b8648a",
    deep: "#64334d",
    leaf: "#9bb59e",
  },
  cocoa: {
    bg: "#e4d2c6",
    bgSoft: "#fbf3ee",
    accent: "#8c5c42",
    deep: "#472d21",
    leaf: "#b3b48a",
  },
};

const PRODUCT_SEED = [
  {
    slug: "harina-almendra-premium",
    category: "flours",
    tone: "sand",
    familyEs: "Harinas alternativas",
    familyEn: "Alternative flours",
    name: "Harina de Almendra Premium",
    lineEs: "Ligera para pancakes y reposteria",
    lineEn: "Light flour for pancakes and baking",
    descriptionEs:
      "Harina fina de almendra para waffles, pancakes, galletas y mezclas caseras con textura suave y rendimiento estable.",
    descriptionEn:
      "Fine almond flour for waffles, pancakes, cookies and homemade mixes with a soft texture and stable performance.",
    size: "400 g",
    price: 28900,
    oldPrice: 32900,
    tagsEs: ["Sin gluten", "Textura suave", "Para hornear"],
    tagsEn: ["Gluten-free", "Soft texture", "Baking-ready"],
    ingredientsEs: "Almendra molida 100%.",
    ingredientsEn: "100% ground almonds.",
    benefitEs: "Aporta una textura ligera y un sabor suave para recetas dulces o saladas.",
    benefitEn: "Delivers a light texture and a gentle flavor for sweet or savory recipes.",
    idealEs: "Pancakes, waffles, galletas, muffins y mezclas con menor uso de harina tradicional.",
    idealEn: "Pancakes, waffles, cookies, muffins and mixes that use less traditional flour.",
    careEs: "Mantener cerrado en lugar fresco y seco. Una vez abierto, conservar bien sellado.",
    careEn: "Keep sealed in a cool, dry place. Once opened, store tightly closed.",
    shelfLifeEs: "6 meses",
    shelfLifeEn: "6 months",
    originEs: "Producto seleccionado para venta nacional en Colombia.",
    originEn: "Selected product for nationwide sale in Colombia.",
    transportEs: "Empaque sellado apto para despacho terrestre nacional.",
    transportEn: "Sealed packaging suitable for nationwide ground shipping.",
    warrantyEs: "Cambio por producto incorrecto o empaque comprometido dentro de 5 dias.",
    warrantyEn: "Exchange for wrong item or compromised packaging within 5 days.",
  },
  {
    slug: "harina-avena-integral",
    category: "flours",
    tone: "gold",
    familyEs: "Harinas alternativas",
    familyEn: "Alternative flours",
    name: "Harina de Avena Integral",
    lineEs: "Base diaria para smoothies y horneados",
    lineEn: "Daily base for smoothies and baking",
    descriptionEs:
      "Harina versatil para panqueques, muffins, coladas y mezclas de desayuno con sabor suave y uso frecuente.",
    descriptionEn:
      "Versatile flour for pancakes, muffins, warm drinks and breakfast mixes with a mild flavor for frequent use.",
    size: "1 kg",
    price: 18900,
    oldPrice: 21900,
    tagsEs: ["Uso diario", "1 kg", "Versatil"],
    tagsEn: ["Everyday use", "1 kg", "Versatile"],
    ingredientsEs: "Avena integral molida.",
    ingredientsEn: "Whole oat flour.",
    benefitEs: "Ayuda a resolver varias recetas con una sola referencia de despensa.",
    benefitEn: "Helps solve multiple recipes with one staple pantry reference.",
    idealEs: "Pancakes, galletas, masas suaves, batidos y preparaciones calientes.",
    idealEn: "Pancakes, cookies, soft doughs, smoothies and warm preparations.",
    careEs: "Guardar en lugar seco y protegido de humedad. Cerrar bien despues de cada uso.",
    careEn: "Store in a dry place away from moisture. Reseal after each use.",
    shelfLifeEs: "8 meses",
    shelfLifeEn: "8 months",
    originEs: "Despensa de rotacion alta para consumo cotidiano.",
    originEn: "High-rotation pantry staple for everyday consumption.",
    transportEs: "Formato resistente para surtido y despacho nacional.",
    transportEn: "Durable format for restocking and nationwide dispatch.",
    warrantyEs: "Cambio por envio errado o empaque en mal estado dentro de 5 dias.",
    warrantyEn: "Exchange for shipping errors or damaged packaging within 5 days.",
  },
  {
    slug: "snack-cacao-semillas",
    category: "snacks",
    tone: "berry",
    familyEs: "Snack funcional",
    familyEn: "Functional snack",
    name: "Snack Cacao y Semillas",
    lineEs: "Crujiente para media manana",
    lineEn: "Crunchy snack for mid-morning",
    descriptionEs:
      "Mix listo para llevar con cacao, semillas y granos crocantes pensado para oficina, universidad o post-entreno.",
    descriptionEn:
      "Ready-to-go mix with cocoa, seeds and crunchy grains designed for the office, college or post-workout moments.",
    size: "150 g",
    price: 12900,
    tagsEs: ["Portatil", "Snack rapido", "Crocante"],
    tagsEn: ["Portable", "Quick snack", "Crunchy"],
    ingredientsEs: "Semillas tostadas, avena, cacao y frutos secos.",
    ingredientsEn: "Toasted seeds, oats, cocoa and nuts.",
    benefitEs: "Resuelve antojo y saciedad en una porcion facil de llevar.",
    benefitEn: "Delivers satiety and a sweet snack option in an easy-to-carry portion.",
    idealEs: "Lonchera, escritorio, bolso o acompanamiento de yogur y fruta.",
    idealEn: "Lunchboxes, desks, bags or paired with yogurt and fruit.",
    careEs: "Mantener cerrado y consumir preferiblemente dentro de 10 dias tras abrir.",
    careEn: "Keep sealed and ideally consume within 10 days after opening.",
    shelfLifeEs: "5 meses",
    shelfLifeEn: "5 months",
    originEs: "Seleccion pensada para consumo individual y recompra.",
    originEn: "Assortment designed for individual use and repeat buying.",
    transportEs: "Empaque ligero apto para envio nacional.",
    transportEn: "Light package suitable for nationwide shipping.",
    warrantyEs: "Cambio por empaque roto o referencia equivocada dentro de 5 dias.",
    warrantyEn: "Exchange for broken packaging or wrong item within 5 days.",
  },
  {
    slug: "mix-frutos-secos-andinos",
    category: "nuts",
    tone: "leaf",
    familyEs: "Frutos secos",
    familyEn: "Nuts",
    name: "Mix Frutos Secos Andinos",
    lineEs: "Topping y snack en una bolsa",
    lineEn: "Topping and snack in one pouch",
    descriptionEs:
      "Mezcla de nueces, almendras y semillas para bowls, yogur, oficina o consumo directo entre comidas.",
    descriptionEn:
      "Blend of walnuts, almonds and seeds for bowls, yogurt, office breaks or direct snacking between meals.",
    size: "250 g",
    price: 21900,
    oldPrice: 24900,
    tagsEs: ["Snack o topping", "250 g", "Mix"],
    tagsEn: ["Snack or topping", "250 g", "Blend"],
    ingredientsEs: "Nueces, almendras, semillas de calabaza y semillas de girasol.",
    ingredientsEn: "Walnuts, almonds, pumpkin seeds and sunflower seeds.",
    benefitEs: "Aporta textura, variedad y una opcion practica para complementar comidas.",
    benefitEn: "Adds texture, variety and a practical option to complement meals.",
    idealEs: "Yogur, avena, ensaladas, oficina o pausas entre clases.",
    idealEn: "Yogurt, oats, salads, office breaks or gaps between classes.",
    careEs: "Guardar cerrado y evitar exposicion directa al sol o a calor excesivo.",
    careEn: "Keep sealed and avoid direct sunlight or excessive heat.",
    shelfLifeEs: "7 meses",
    shelfLifeEn: "7 months",
    originEs: "Referencia pensada para consumo individual o familiar pequeno.",
    originEn: "Reference designed for individual or small-family consumption.",
    transportEs: "Bolsa sellada de facil despacho y manejo logistico.",
    transportEn: "Sealed pouch with easy dispatch and logistics handling.",
    warrantyEs: "Cambio por deterioro visible de empaque o error en despacho.",
    warrantyEn: "Exchange for visible packaging deterioration or shipping errors.",
  },
  {
    slug: "bebida-avena-original",
    category: "milks",
    tone: "gold",
    familyEs: "Bebidas vegetales",
    familyEn: "Plant-based drinks",
    name: "Bebida de Avena Original",
    lineEs: "Suave para cafe y cereal",
    lineEn: "Smooth for coffee and cereal",
    descriptionEs:
      "Bebida vegetal lista para cafe, smoothies, cereal o recetas ligeras con un perfil amable para uso diario.",
    descriptionEn:
      "Plant-based drink ready for coffee, smoothies, cereal or light recipes with a friendly profile for daily use.",
    size: "1 L",
    price: 15400,
    tagsEs: ["1 litro", "Uso diario", "Lista para servir"],
    tagsEn: ["1 liter", "Everyday use", "Ready to pour"],
    ingredientsEs: "Base de avena, agua filtrada y formulacion vegetal lista para consumo.",
    ingredientsEn: "Oat base, filtered water and a ready-to-drink plant-based formula.",
    benefitEs: "Hace mas simple resolver desayunos y bebidas sin salir del surtido principal.",
    benefitEn: "Makes it easier to solve breakfasts and drinks without leaving the main assortment.",
    idealEs: "Cafe, cereal, licuados, avena remojada y cocina ligera.",
    idealEn: "Coffee, cereal, shakes, overnight oats and light cooking.",
    careEs: "Antes de abrir puede mantenerse cerrada; despues de abrir, refrigerar y consumir pronto.",
    careEn: "Before opening it can be kept sealed; after opening, refrigerate and consume soon.",
    shelfLifeEs: "9 meses cerrada",
    shelfLifeEn: "9 months unopened",
    originEs: "Formato de alta rotacion para compra recurrente.",
    originEn: "High-rotation format designed for recurring purchases.",
    transportEs: "Caja sellada apta para transporte nacional con cuidado de temperatura ambiente.",
    transportEn: "Sealed carton suitable for nationwide shipping at room temperature.",
    warrantyEs: "Cambio por fuga, golpe severo o producto incorrecto.",
    warrantyEn: "Exchange for leaks, severe impact or wrong item.",
  },
  {
    slug: "bebida-almendra-vainilla",
    category: "milks",
    tone: "leaf",
    familyEs: "Bebidas vegetales",
    familyEn: "Plant-based drinks",
    name: "Bebida de Almendra Vainilla",
    lineEs: "Perfil suave para desayuno",
    lineEn: "Smooth breakfast profile",
    descriptionEs:
      "Bebida vegetal con nota ligera de vainilla para smoothies, cereal, cafe frio o recetas dulces.",
    descriptionEn:
      "Plant-based drink with a light vanilla note for smoothies, cereal, iced coffee or sweet recipes.",
    size: "1 L",
    price: 16900,
    oldPrice: 18900,
    tagsEs: ["Vainilla suave", "Cafe frio", "Smoothies"],
    tagsEn: ["Soft vanilla", "Iced coffee", "Smoothies"],
    ingredientsEs: "Base vegetal de almendra con perfil suave de vainilla.",
    ingredientsEn: "Almond-based plant drink with a soft vanilla profile.",
    benefitEs: "Amplia las opciones de desayuno y postre con una sola referencia.",
    benefitEn: "Expands breakfast and dessert options with a single reference.",
    idealEs: "Cereal, smoothies, cafe frio, avena nocturna y recetas dulces.",
    idealEn: "Cereal, smoothies, iced coffee, overnight oats and sweet recipes.",
    careEs: "Refrigerar despues de abrir y consumir segun indicaciones del empaque.",
    careEn: "Refrigerate after opening and consume according to package guidance.",
    shelfLifeEs: "9 meses cerrada",
    shelfLifeEn: "9 months unopened",
    originEs: "Referencia pensada para elevar el mix de desayuno y bebida.",
    originEn: "Reference designed to upgrade breakfast and beverage routines.",
    transportEs: "Caja sellada con manejo estandar para envio nacional.",
    transportEn: "Sealed carton with standard handling for nationwide shipping.",
    warrantyEs: "Cambio por fuga, golpe fuerte o diferencia con la referencia solicitada.",
    warrantyEn: "Exchange for leakage, strong impact or mismatch with the requested item.",
  },
  {
    slug: "panela-organica-granulada",
    category: "sweeteners",
    tone: "cocoa",
    familyEs: "Endulzantes",
    familyEn: "Sweeteners",
    name: "Panela Organica Granulada",
    lineEs: "Para bebidas y cocina diaria",
    lineEn: "For drinks and everyday cooking",
    descriptionEs:
      "Endulzante tradicional de uso practico para bebidas calientes, reposteria casera y mezclas de cocina.",
    descriptionEn:
      "Traditional sweetener designed for hot drinks, homemade baking and everyday kitchen mixes.",
    size: "500 g",
    price: 11900,
    tagsEs: ["Uso diario", "500 g", "Cocina"],
    tagsEn: ["Everyday use", "500 g", "Kitchen"],
    ingredientsEs: "Panela granulada de origen natural.",
    ingredientsEn: "Naturally sourced granulated panela.",
    benefitEs: "Permite endulzar bebidas y recetas con un formato sencillo de almacenar y dosificar.",
    benefitEn: "Makes it easy to sweeten drinks and recipes with a simple format to store and dose.",
    idealEs: "Cafe, aromatica, avena caliente, galletas y recetas caseras.",
    idealEn: "Coffee, herbal infusions, warm oats, cookies and homemade recipes.",
    careEs: "Mantener seco y bien cerrado para evitar compactacion por humedad.",
    careEn: "Keep dry and tightly sealed to avoid clumping from moisture.",
    shelfLifeEs: "12 meses",
    shelfLifeEn: "12 months",
    originEs: "Endulzante de despensa pensado para recompra frecuente.",
    originEn: "Pantry sweetener designed for recurring purchases.",
    transportEs: "Bolsa sellada apta para envio nacional.",
    transportEn: "Sealed bag suitable for nationwide shipping.",
    warrantyEs: "Cambio por empaque roto o referencia equivocada dentro de 5 dias.",
    warrantyEn: "Exchange for broken packaging or wrong item within 5 days.",
  },
  {
    slug: "endulzante-coco-natural",
    category: "sweeteners",
    tone: "sand",
    familyEs: "Endulzantes",
    familyEn: "Sweeteners",
    name: "Endulzante de Coco Natural",
    lineEs: "Alternativa para recetas y bebidas",
    lineEn: "Alternative for recipes and drinks",
    descriptionEs:
      "Referencia pensada para clientes que buscan variar el surtido de despensa con una opcion practica para bebidas y horneados.",
    descriptionEn:
      "A reference designed for customers who want to diversify their pantry with a practical option for drinks and baking.",
    size: "400 g",
    price: 14900,
    oldPrice: 16900,
    tagsEs: ["Alternativa", "400 g", "Reposteria"],
    tagsEn: ["Alternative", "400 g", "Baking"],
    ingredientsEs: "Endulzante granulado de coco.",
    ingredientsEn: "Granulated coconut sweetener.",
    benefitEs: "Aporta variedad al surtido y facilita upselling dentro de la tienda.",
    benefitEn: "Adds variety to the assortment and supports upselling inside the store.",
    idealEs: "Cafe, pancakes, muffins, granolas y recetas dulces.",
    idealEn: "Coffee, pancakes, muffins, granolas and sweet recipes.",
    careEs: "Conservar en lugar seco y sellar bien despues de cada uso.",
    careEn: "Store in a dry place and reseal after every use.",
    shelfLifeEs: "12 meses",
    shelfLifeEn: "12 months",
    originEs: "Producto de apoyo para cocina dulce y variedad comercial.",
    originEn: "Support product for sweet cooking and commercial variety.",
    transportEs: "Empaque ligero con despacho nacional sencillo.",
    transportEn: "Light package with easy nationwide dispatch.",
    warrantyEs: "Cambio por error de referencia o empaque afectado.",
    warrantyEn: "Exchange for wrong reference or affected packaging.",
  },
  {
    slug: "combo-despensa-esencial",
    category: "bundles",
    tone: "leaf",
    familyEs: "Combo saludable",
    familyEn: "Healthy bundle",
    name: "Combo Despensa Esencial",
    lineEs: "Desayuno, snack y despensa en un pack",
    lineEn: "Breakfast, snack and pantry in one pack",
    descriptionEs:
      "Bundle pensado para iniciar la compra con varias categorias: harina, bebida vegetal, snack y endulzante en un solo pedido.",
    descriptionEn:
      "Bundle designed to start the order with multiple categories: flour, plant-based drink, snack and sweetener in one purchase.",
    size: "4 referencias",
    price: 89900,
    oldPrice: 99900,
    tagsEs: ["Ahorro por pack", "Compra inicial", "Ticket medio"],
    tagsEn: ["Bundle savings", "Starter order", "Average ticket"],
    ingredientsEs: "Seleccion combinada de referencias de harina, bebida vegetal, snack y endulzante.",
    ingredientsEn: "Curated selection of flour, plant drink, snack and sweetener references.",
    benefitEs: "Reduce tiempo de decision y aumenta el valor de cada compra.",
    benefitEn: "Reduces decision time and increases the value of each purchase.",
    idealEs: "Clientes nuevos, surtido mensual o regalos practicos de bienestar.",
    idealEn: "New customers, monthly restocking or practical wellness gifts.",
    careEs: "Revisar y almacenar cada referencia segun su empaque individual al recibir.",
    careEn: "Review and store each reference according to its individual packaging once delivered.",
    shelfLifeEs: "Segun referencia incluida",
    shelfLifeEn: "According to each included reference",
    originEs: "Combo curado para acelerar la conversion inicial del sitio.",
    originEn: "Curated bundle designed to speed up first-site conversion.",
    transportEs: "Pedido consolidado en una sola preparacion con seguimiento nacional.",
    transportEn: "Consolidated order packed in a single shipment with nationwide tracking.",
    warrantyEs: "Cambio por faltantes, error de referencias o dano visible de empaque.",
    warrantyEn: "Exchange for missing items, wrong references or visible packaging damage.",
  },
  {
    slug: "combo-oficina-activa",
    category: "bundles",
    tone: "berry",
    familyEs: "Combo saludable",
    familyEn: "Healthy bundle",
    name: "Combo Oficina Activa",
    lineEs: "Snack, frutos secos y bebida para la semana",
    lineEn: "Snack, nuts and drink for the week",
    descriptionEs:
      "Pack orientado a pausas inteligentes durante la jornada con snacks portatiles, topping de frutos secos y bebida vegetal.",
    descriptionEn:
      "Pack aimed at smarter workday breaks with portable snacks, nut toppings and a plant-based drink.",
    size: "3 referencias",
    price: 67900,
    tagsEs: ["Oficina", "Universidad", "Recompra facil"],
    tagsEn: ["Office", "College", "Easy reorder"],
    ingredientsEs: "Seleccion de snack funcional, mix de frutos secos y bebida vegetal.",
    ingredientsEn: "Selection of functional snack, nut mix and plant-based drink.",
    benefitEs: "Facilita recompra y consumo fuera de casa con una sola decision.",
    benefitEn: "Supports reorders and out-of-home consumption through a single decision.",
    idealEs: "Semana de oficina, clases largas o pausas entre reuniones.",
    idealEn: "Office weeks, long class days or breaks between meetings.",
    careEs: "Conservar cada referencia segun indicacion individual del empaque.",
    careEn: "Store each reference according to its individual packaging instructions.",
    shelfLifeEs: "Segun referencias incluidas",
    shelfLifeEn: "According to the included references",
    originEs: "Combo pensado para elevar recurrencia y recompra.",
    originEn: "Bundle designed to support recurrence and repeat purchase.",
    transportEs: "Consolidado en una sola caja con despacho nacional.",
    transportEn: "Consolidated into one box with nationwide dispatch.",
    warrantyEs: "Cambio por faltante o referencia distinta a la solicitada.",
    warrantyEn: "Exchange for missing items or references different from the requested ones.",
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

function catalogLink(category) {
  const base = fromRoot("pages/catalogo.html");
  if (!category || category === "all") return base;
  return `${base}?category=${encodeURIComponent(category)}`;
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

function gaItem(product, quantity = 1) {
  return {
    item_id: product.slug,
    item_name: product.name,
    item_category: CATEGORY_META[product.category]?.labelEs || product.category,
    price: product.price,
    quantity,
  };
}

function initAnalytics() {
  if (!GA_MEASUREMENT_ID || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_path: window.location.pathname + window.location.search,
  });
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

function trackCartCheckout(entries) {
  const value = cartSubtotal(entries);
  if (!value) return;

  const payload = {
    currency: "COP",
    value,
    items: entries.map((entry) => gaItem(entry.product, entry.quantity)),
  };

  trackEvent("begin_checkout", payload);

  // Academic demo: the storefront closes orders through WhatsApp, so the WhatsApp order request is recorded as the simulated purchase event.
  trackEvent("purchase", {
    ...payload,
    transaction_id: `SAVIA-DEMO-${Date.now()}`,
    shipping: value >= FREE_SHIPPING_THRESHOLD ? 0 : 12000,
  });
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

function flourArtwork(palette) {
  return `
    <ellipse cx="320" cy="510" rx="170" ry="26" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(178 146)">
      <path d="M70 0 H214 L248 264 Q150 322 42 264 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.12" />
      <path d="M78 0 H206 L190 64 H94 Z" fill="${palette.bg}" />
      <rect x="88" y="92" width="108" height="96" rx="28" fill="${palette.bgSoft}" />
      <path d="M44 264 Q150 308 256 264" fill="none" stroke="${palette.accent}" stroke-width="10" stroke-linecap="round" />
      <circle cx="110" cy="238" r="14" fill="${palette.accent}" opacity="0.75" />
      <circle cx="142" cy="224" r="10" fill="${palette.leaf}" opacity="0.88" />
      <circle cx="172" cy="240" r="12" fill="${palette.deep}" opacity="0.16" />
    </g>
  `;
}

function snackArtwork(palette) {
  return `
    <ellipse cx="320" cy="516" rx="162" ry="24" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(150 206)">
      <path d="M0 54 L36 0 H250 L288 54 L250 224 H36 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="46" y="72" width="196" height="72" rx="24" fill="${palette.bg}" />
      <path d="M38 182 H250" stroke="${palette.accent}" stroke-width="12" stroke-linecap="round" opacity="0.85" />
      <rect x="326" y="94" width="114" height="154" rx="28" fill="#fff8f4" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="350" y="126" width="66" height="52" rx="18" fill="${palette.bg}" />
      <circle cx="374" cy="224" r="12" fill="${palette.accent}" opacity="0.8" />
      <circle cx="406" cy="210" r="10" fill="${palette.leaf}" opacity="0.85" />
    </g>
  `;
}

function milkArtwork(palette) {
  return `
    <ellipse cx="320" cy="520" rx="160" ry="22" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(182 142)">
      <path d="M78 0 H196 L238 64 V330 H38 V64 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.12" />
      <path d="M196 0 L238 64 H116 L78 0 Z" fill="${palette.bg}" />
      <rect x="78" y="98" width="118" height="120" rx="28" fill="${palette.bgSoft}" />
      <path d="M66 258 H210" stroke="${palette.accent}" stroke-width="12" stroke-linecap="round" />
      <circle cx="128" cy="274" r="16" fill="${palette.leaf}" opacity="0.82" />
      <circle cx="166" cy="288" r="12" fill="${palette.accent}" opacity="0.75" />
    </g>
  `;
}

function sweetenerArtwork(palette) {
  return `
    <ellipse cx="320" cy="516" rx="158" ry="24" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(176 176)">
      <rect x="94" y="0" width="180" height="54" rx="20" fill="${palette.deep}" opacity="0.88" />
      <rect x="56" y="50" width="256" height="232" rx="52" fill="white" stroke="${palette.deep}" stroke-opacity="0.10" />
      <rect x="90" y="100" width="188" height="106" rx="32" fill="${palette.bg}" />
      <path d="M84 236 H282" stroke="${palette.accent}" stroke-width="12" stroke-linecap="round" opacity="0.78" />
      <circle cx="132" cy="250" r="14" fill="${palette.leaf}" opacity="0.75" />
      <circle cx="170" cy="232" r="10" fill="${palette.accent}" opacity="0.85" />
      <circle cx="200" cy="252" r="12" fill="${palette.deep}" opacity="0.12" />
    </g>
  `;
}

function nutsArtwork(palette) {
  return `
    <ellipse cx="320" cy="520" rx="170" ry="22" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(148 178)">
      <path d="M64 0 H232 L264 230 Q150 286 36 230 Z" fill="white" stroke="${palette.deep}" stroke-opacity="0.12" />
      <path d="M64 0 H232 L214 58 H82 Z" fill="${palette.bg}" />
      <rect x="90" y="88" width="118" height="90" rx="28" fill="${palette.bgSoft}" />
      <g transform="translate(292 150)">
        <ellipse cx="92" cy="110" rx="104" ry="24" fill="${palette.deep}" opacity="0.08" />
        <path d="M0 108 C28 72 70 58 98 58 C126 58 164 72 190 108" fill="#f4d0a4" />
        <circle cx="58" cy="98" r="14" fill="${palette.accent}" opacity="0.82" />
        <circle cx="92" cy="84" r="12" fill="${palette.leaf}" opacity="0.84" />
        <circle cx="126" cy="98" r="14" fill="${palette.deep}" opacity="0.16" />
      </g>
    </g>
  `;
}

function bundleArtwork(palette) {
  return `
    <ellipse cx="320" cy="514" rx="176" ry="24" fill="${palette.deep}" opacity="0.10" />
    <g transform="translate(132 186)">
      <rect x="0" y="76" width="108" height="188" rx="28" fill="#fff7f1" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="26" y="40" width="60" height="56" rx="18" fill="${palette.bg}" />
      <rect x="128" y="16" width="154" height="248" rx="34" fill="white" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="168" y="54" width="76" height="58" rx="20" fill="${palette.bg}" />
      <path d="M152 150 C196 126 222 126 258 150" fill="none" stroke="${palette.accent}" stroke-width="10" stroke-linecap="round" />
      <rect x="308" y="96" width="122" height="168" rx="28" fill="#fff9f6" stroke="${palette.deep}" stroke-opacity="0.12" />
      <rect x="334" y="126" width="66" height="48" rx="16" fill="${palette.bg}" />
      <circle cx="76" cy="244" r="12" fill="${palette.accent}" opacity="0.82" />
      <circle cx="366" cy="226" r="14" fill="${palette.leaf}" opacity="0.88" />
    </g>
  `;
}

function createProductImage(product) {
  const palette = productPalette(product);
  const category = CATEGORY_META[product.category];
  const lines = splitLabel(product.name);
  const artwork =
    product.category === "flours"
      ? flourArtwork(palette)
      : product.category === "snacks"
        ? snackArtwork(palette)
        : product.category === "milks"
          ? milkArtwork(palette)
          : product.category === "sweeteners"
            ? sweetenerArtwork(palette)
            : product.category === "nuts"
              ? nutsArtwork(palette)
              : bundleArtwork(palette);

  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="${escapeHtml(product.name)}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.bgSoft}" />
          <stop offset="100%" stop-color="${palette.bg}" />
        </linearGradient>
        <linearGradient id="band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${palette.accent}" />
          <stop offset="100%" stop-color="${palette.leaf}" />
        </linearGradient>
      </defs>
      <rect width="640" height="640" rx="46" fill="url(#bg)" />
      <circle cx="110" cy="110" r="60" fill="${palette.accent}" opacity="0.12" />
      <circle cx="522" cy="98" r="80" fill="${palette.leaf}" opacity="0.12" />
      <circle cx="544" cy="528" r="94" fill="${palette.accent}" opacity="0.08" />
      <rect x="56" y="52" width="528" height="68" rx="24" fill="white" fill-opacity="0.74" />
      <rect x="56" y="476" width="528" height="116" rx="30" fill="white" fill-opacity="0.84" />
      <rect x="78" y="74" width="190" height="28" rx="14" fill="url(#band)" />
      <text x="90" y="94" fill="${palette.deep}" font-family="Space Grotesk, Arial, sans-serif" font-size="22" font-weight="700">${escapeHtml(category.labelEs)}</text>
      ${artwork}
      <text x="86" y="530" fill="${palette.deep}" font-family="Space Grotesk, Arial, sans-serif" font-size="42" font-weight="700">${escapeHtml(lines[0] || product.name)}</text>
      <text x="86" y="570" fill="${palette.deep}" font-family="Space Grotesk, Arial, sans-serif" font-size="30" font-weight="500" opacity="0.78">${escapeHtml(lines[1] || product.lineEs)}</text>
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
  trackEvent("add_to_cart", {
    currency: "COP",
    value: product.price * quantity,
    items: [gaItem(product, quantity)],
  });

  const lang = currentLanguage();
  showToast(lang === "es" ? `${product.name} se agrego al carrito.` : `${product.name} was added to the cart.`);
}

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function singleProductWhatsappLink(product, lang) {
  const message =
    lang === "es"
      ? `Hola, quiero pedir ${product.name} (${product.size}) por ${formatCurrency(product.price)}.`
      : `Hi, I would like to order ${product.name} (${product.size}) for ${formatCurrency(product.price)}.`;

  return whatsappLink(message);
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

  return whatsappLink([header, ...lines, "", footer].join("\n"));
}

function injectShell() {
  const body = document.body;
  const page = pageForNavigation(body.dataset.page || "home");
  const headerTarget = document.querySelector("#site-header");
  const footerTarget = document.querySelector("#site-footer");
  const homeHref = fromRoot("index.html");
  const catalogHref = fromRoot("pages/catalogo.html");
  const shippingHref = fromRoot("pages/envios-y-devoluciones.html");
  const privacyHref = fromRoot("pages/politica-privacidad.html");
  const termsHref = fromRoot("pages/terminos-condiciones.html");
  const reportHref = fromRoot("pages/informe-academico.html");
  const currentCategory = new URLSearchParams(window.location.search).get("category") || "";

  if (headerTarget) {
    headerTarget.innerHTML = `
      <a class="skip-link" href="#contenido-principal">${bilingualText("Saltar al contenido", "Skip to content")}</a>
      <header class="site-header">
        <div class="container topbar">
          <div>${bilingualText("Envios nacionales de 1 a 4 dias habiles.", "Nationwide shipping within 1 to 4 business days.")}</div>
          <div>${bilingualText("Pagos: Wompi, Mercado Pago, PayU, tarjeta y PSE.", "Payments: Wompi, Mercado Pago, PayU, cards and PSE.")}</div>
        </div>

        <div class="container nav-row">
          <a class="brand" href="${homeHref}" aria-label="Savia Col.">
            <span class="brand-mark" aria-hidden="true">S</span>
            <span class="brand-copy">
              <span class="brand-name">Savia Col.</span>
              <span class="brand-tag">${bilingualText("Despensa Saludable S.A.S.", "Healthy Pantry S.A.S.")}</span>
            </span>
          </a>

          <nav class="nav-menu" id="main-nav" data-open="false">
            <a class="nav-link ${page === "home" ? "is-active" : ""}" href="${homeHref}">
              ${bilingualText("Inicio", "Home")}
            </a>
            <a class="nav-link ${page === "catalogo" && !currentCategory ? "is-active" : ""}" href="${catalogHref}">
              ${bilingualText("Catalogo", "Catalog")}
            </a>
            <a class="nav-link ${page === "catalogo" && currentCategory === "flours" ? "is-active" : ""}" href="${catalogLink("flours")}">
              ${bilingualText("Harinas", "Flours")}
            </a>
            <a class="nav-link ${page === "catalogo" && currentCategory === "snacks" ? "is-active" : ""}" href="${catalogLink("snacks")}">
              ${bilingualText("Snacks", "Snacks")}
            </a>
            <a class="nav-link ${page === "catalogo" && currentCategory === "milks" ? "is-active" : ""}" href="${catalogLink("milks")}">
              ${bilingualText("Bebidas", "Drinks")}
            </a>
            <a class="nav-link ${page === "catalogo" && currentCategory === "sweeteners" ? "is-active" : ""}" href="${catalogLink("sweeteners")}">
              ${bilingualText("Endulzantes", "Sweeteners")}
            </a>
            <a class="nav-link ${page === "catalogo" && currentCategory === "nuts" ? "is-active" : ""}" href="${catalogLink("nuts")}">
              ${bilingualText("Frutos secos", "Nuts")}
            </a>
            <a class="nav-link ${page === "catalogo" && currentCategory === "bundles" ? "is-active" : ""}" href="${catalogLink("bundles")}">
              ${bilingualText("Combos", "Bundles")}
            </a>
            <a class="nav-link ${page === "envios" ? "is-active" : ""}" href="${shippingHref}">
              ${bilingualText("Envios", "Shipping")}
            </a>
            <a class="nav-link ${page === "informe" ? "is-active" : ""}" href="${reportHref}">
              ${bilingualText("Informe", "Report")}
            </a>
          </nav>

          <div class="nav-tools">
            <div class="lang-switch" aria-label="Selector de idioma">
              <button type="button" data-lang-trigger="es" aria-label="Espanol">ES</button>
              <button type="button" data-lang-trigger="en" aria-label="English">EN</button>
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
            <a class="btn btn-primary" data-cart-checkout href="${catalogHref}" target="_blank" rel="noreferrer">
              ${bilingualText("Ir al catalogo", "Go to catalog")}
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
                  "Despensa saludable con una estructura de e-commerce clara: colecciones visibles, fichas utiles, carrito, pagos y politicas accesibles.",
                  "Healthy pantry with a clear e-commerce structure: visible collections, useful product pages, cart, payments and accessible policies.",
                )}
              </p>
            </div>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Comprar", "Shop")}</strong>
            <a href="${catalogHref}">${bilingualText("Catalogo completo", "Full catalog")}</a>
            <a href="${catalogLink("bundles")}">${bilingualText("Combos saludables", "Healthy bundles")}</a>
            <a href="${shippingHref}">${bilingualText("Envios y devoluciones", "Shipping and returns")}</a>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Colecciones", "Collections")}</strong>
            <a href="${catalogLink("flours")}">${bilingualText("Harinas", "Flours")}</a>
            <a href="${catalogLink("snacks")}">${bilingualText("Snacks", "Snacks")}</a>
            <a href="${catalogLink("milks")}">${bilingualText("Bebidas vegetales", "Plant-based drinks")}</a>
            <a href="${catalogLink("sweeteners")}">${bilingualText("Endulzantes", "Sweeteners")}</a>
            <a href="${catalogLink("nuts")}">${bilingualText("Frutos secos", "Nuts")}</a>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Proyecto y legal", "Project and legal")}</strong>
            <a href="${reportHref}">${bilingualText("Documento de soporte", "Support document")}</a>
            <a href="${privacyHref}">${bilingualText("Politica de privacidad", "Privacy policy")}</a>
            <a href="${termsHref}">${bilingualText("Terminos y condiciones", "Terms and conditions")}</a>
          </section>

          <section class="footer-notes">
            <strong>${bilingualText("Contacto", "Contact")}</strong>
            <span>${SUPPORT_EMAIL}</span>
            <span>+57 310 817 9620</span>
            <span>${bilingualText(SUPPORT_CITY, SUPPORT_CITY)}</span>
            <span>${bilingualText("Atencion por WhatsApp para pedidos y seguimiento.", "WhatsApp support for orders and tracking.")}</span>
          </section>
        </div>

        <div class="container footer-legal">
          <span>${bilingualText("Precios expresados en COP y sujetos a inventario.", "Prices shown in COP and subject to stock.")}</span>
          <span>${bilingualText("Proyecto e-commerce bilingue con documentacion de soporte.", "Bilingual e-commerce project with support documentation.")}</span>
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

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && document.body.dataset.titleEs && document.body.dataset.titleEn) {
    ogTitle.setAttribute("content", lang === "es" ? document.body.dataset.titleEs : document.body.dataset.titleEn);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && document.body.dataset.descEs && document.body.dataset.descEn) {
    ogDescription.setAttribute("content", lang === "es" ? document.body.dataset.descEs : document.body.dataset.descEn);
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
        ? bilingualText("Tu pedido ya tiene envio gratis.", "Your order already qualifies for free shipping.")
        : bilingualText(
            `Te faltan ${formatCurrency(remaining)} para obtener envio gratis.`,
            `Add ${formatCurrency(remaining)} more to unlock free shipping.`,
          );
  }

  const checkoutLink = document.querySelector("[data-cart-checkout]");
  if (checkoutLink) {
    if (entries.length === 0) {
      checkoutLink.href = fromRoot("pages/catalogo.html");
      checkoutLink.innerHTML = bilingualText("Ir al catalogo", "Go to catalog");
      checkoutLink.removeAttribute("data-checkout-ready");
    } else {
      checkoutLink.href = cartWhatsappLink(entries, lang);
      checkoutLink.innerHTML = bilingualText("Pedir por WhatsApp", "Order on WhatsApp");
      checkoutLink.setAttribute("data-checkout-ready", "true");
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

    const checkoutLink = event.target.closest("[data-cart-checkout][data-checkout-ready='true']");
    if (checkoutLink) {
      trackCartCheckout(cartEntries());
      return;
    }

    const singleOrderLink = event.target.closest("[data-single-checkout]");
    if (singleOrderLink) {
      const product = PRODUCT_MAP.get(singleOrderLink.dataset.slug);
      if (product) {
        trackEvent("begin_checkout", {
          currency: "COP",
          value: product.price,
          items: [gaItem(product)],
        });
      }
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

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.dataset.open = "false";
      toggle.setAttribute("aria-expanded", "false");
    });
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
    product.ingredientsEs,
    product.ingredientsEn,
    product.benefitEs,
    product.benefitEn,
    product.idealEs,
    product.idealEn,
    product.category,
    product.familyEs,
    product.familyEn,
    CATEGORY_META[product.category].labelEs,
    CATEGORY_META[product.category].labelEn,
    product.tagsEs.join(" "),
    product.tagsEn.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return `
    <article class="product-card tone-${product.tone} catalog-card" data-category="${product.category}" data-search="${escapeHtml(searchTokens)}">
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
            <a class="btn btn-secondary" href="${productHref(product)}">${bilingualText("Ver ficha", "View page")}</a>
            <button class="btn btn-primary add-to-cart" type="button" data-slug="${product.slug}">
              ${bilingualText("Agregar", "Add")}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function collectionCardTemplate(key) {
  const meta = CATEGORY_META[key];
  const count = PRODUCTS.filter((product) => product.category === key).length;

  return `
    <a class="collection-card" href="${catalogLink(key)}">
      <div class="collection-card-copy">
        <p class="kicker">${bilingualText(meta.labelEs, meta.labelEn)}</p>
        <h3>${bilingualText(meta.labelEs, meta.labelEn)}</h3>
        <p class="muted">${bilingualText(meta.summaryEs, meta.summaryEn)}</p>
      </div>
      <div class="collection-card-foot">
        <span class="collection-count">${bilingualText(`${count} productos`, `${count} products`)}</span>
        <span class="collection-link">${bilingualText("Ver coleccion", "View collection")}</span>
      </div>
    </a>
  `;
}

function buildProductSpecs(product) {
  return [
    {
      titleEs: "Ingredientes",
      titleEn: "Ingredients",
      bodyEs: product.ingredientsEs,
      bodyEn: product.ingredientsEn,
    },
    {
      titleEs: "Beneficio",
      titleEn: "Benefit",
      bodyEs: product.benefitEs,
      bodyEn: product.benefitEn,
    },
    {
      titleEs: "Ideal para",
      titleEn: "Ideal for",
      bodyEs: product.idealEs,
      bodyEn: product.idealEn,
    },
    {
      titleEs: "Cuidados",
      titleEn: "Care",
      bodyEs: product.careEs,
      bodyEn: product.careEn,
    },
  ];
}

function buildProductDetails(product) {
  return [
    {
      titleEs: "Especificaciones",
      titleEn: "Specifications",
      itemsEs: [
        `Categoria: ${CATEGORY_META[product.category].labelEs}.`,
        `Presentacion: ${product.size}.`,
        `Vida util: ${product.shelfLifeEs}.`,
        `Origen: ${product.originEs}`,
      ],
      itemsEn: [
        `Category: ${CATEGORY_META[product.category].labelEn}.`,
        `Format: ${product.size}.`,
        `Shelf life: ${product.shelfLifeEn}.`,
        `Origin: ${product.originEn}`,
      ],
    },
    {
      titleEs: "Compra y soporte",
      titleEn: "Buying and support",
      itemsEs: [
        `Transporte: ${product.transportEs}`,
        `Garantia: ${product.warrantyEs}`,
        `Pagos: Wompi, Mercado Pago, PayU, tarjeta, PSE o transferencia.`,
        `Envio gratis desde ${formatCurrency(FREE_SHIPPING_THRESHOLD)} dentro de Colombia.`,
      ],
      itemsEn: [
        `Transport: ${product.transportEn}`,
        `Warranty: ${product.warrantyEn}`,
        "Payments: Wompi, Mercado Pago, PayU, cards, PSE or bank transfer.",
        `Free shipping within Colombia from ${formatCurrency(FREE_SHIPPING_THRESHOLD)}.`,
      ],
    },
  ];
}

function renderHome() {
  const collections = document.querySelector("#home-collections");
  const featured = document.querySelector("#home-featured");
  const routine = document.querySelector("#home-routine");
  const subscription = document.querySelector("#home-subscription");

  if (collections) {
    collections.innerHTML = ["flours", "snacks", "milks", "sweeteners", "nuts", "bundles"]
      .map((key) => collectionCardTemplate(key))
      .join("");
  }

  if (featured) {
    const items = [
      "combo-despensa-esencial",
      "harina-almendra-premium",
      "bebida-almendra-vainilla",
      "mix-frutos-secos-andinos",
    ]
      .map((slug) => PRODUCT_MAP.get(slug))
      .filter(Boolean);

    featured.innerHTML = items.map((product) => productCardTemplate(product)).join("");
  }

  if (routine) {
    const bundle = PRODUCT_MAP.get("combo-oficina-activa");
    if (bundle) {
      routine.innerHTML = `
        <article class="routine-panel surface-panel tone-${bundle.tone}">
          <div class="routine-copy">
            <p class="kicker">${bilingualText("Combo destacado", "Featured bundle")}</p>
            <h2>${bilingualText("Un pack pensado para recompra y rutina semanal.", "A pack designed for repeat purchases and weekly routines.")}</h2>
            <p class="section-copy">${bilingualText(
              "Combo Oficina Activa conecta con la logica de e-commerce: resuelve una necesidad concreta, sube el ticket promedio y facilita compras recurrentes.",
              "Combo Oficina Activa matches the e-commerce logic: it solves a concrete need, raises average order value and supports recurring purchases.",
            )}</p>

            <div class="stat-strip">
              <div class="stat-card">
                <strong>${formatCurrency(bundle.price)}</strong>
                <span>${bilingualText("Precio actual", "Current price")}</span>
              </div>
              <div class="stat-card">
                <strong>${bilingualText(bundle.size, bundle.size)}</strong>
                <span>${bilingualText("Referencias incluidas", "Included references")}</span>
              </div>
              <div class="stat-card">
                <strong>${bilingualText("Recompra", "Reorder")}</strong>
                <span>${bilingualText("facil de repetir", "easy to repeat")}</span>
              </div>
            </div>

            <div class="cta-row">
              <a class="btn btn-primary" href="${productHref(bundle)}">${bilingualText("Ver combo", "View bundle")}</a>
              <button class="btn btn-secondary add-to-cart" type="button" data-slug="${bundle.slug}">
                ${bilingualText("Agregar al carrito", "Add to cart")}
              </button>
            </div>
          </div>

          <div class="routine-media">
            <img src="${bundle.image}" alt="${escapeHtml(bundle.name)}" loading="lazy" />
          </div>
        </article>
      `;
    }
  }

  if (subscription) {
    subscription.innerHTML = `
      <article class="cta-banner surface-panel">
        <div>
          <p class="kicker">${bilingualText("Suscripcion opcional", "Optional subscription")}</p>
          <h2>${bilingualText("Proyeccion de caja mensual para fidelizar y elevar recurrencia.", "Projected monthly box to build loyalty and increase recurrence.")}</h2>
          <p class="section-copy">${bilingualText(
            "La web principal no depende de la suscripcion para funcionar, pero deja visible una siguiente etapa realista del modelo: una caja mensual curada con recompra automatizada.",
            "The main storefront does not depend on subscription to work, but it makes the next realistic business step visible: a curated monthly box with automated reordering.",
          )}</p>
        </div>

        <div class="cta-actions">
          <a class="btn btn-primary" href="${whatsappLink("Hola, quiero conocer la suscripcion mensual de Savia Col.")}" target="_blank" rel="noreferrer">
            ${bilingualText("Quiero conocer la caja mensual", "Tell me about the monthly box")}
          </a>
          <a class="btn btn-secondary" href="${fromRoot("pages/informe-academico.html")}">
            ${bilingualText("Ver documento de soporte", "View support document")}
          </a>
        </div>
      </article>
    `;
  }
}

function renderCatalog() {
  const grid = document.querySelector("#catalog-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((product) => productCardTemplate(product)).join("");
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "combo-despensa-esencial";
  const product = PRODUCT_MAP.get(slug) || PRODUCTS[0];
  const shell = document.querySelector("#product-shell");
  const specs = document.querySelector("#product-specs");
  const details = document.querySelector("#product-details");
  const recommendations = document.querySelector("#product-recommendations");

  if (!product || !shell || !specs || !details || !recommendations) return;

  document.body.dataset.titleEs = `${product.name} | Savia Col.`;
  document.body.dataset.titleEn = `${product.name} | Savia Col.`;
  document.body.dataset.descEs = `${product.name}, ${product.lineEs.toLowerCase()}, ${product.size} y precio ${formatCurrency(product.price)}.`;
  document.body.dataset.descEn = `${product.name}, ${product.lineEn.toLowerCase()}, ${product.size} and price ${formatCurrency(product.price)}.`;

  const discount = discountPercent(product.oldPrice, product.price);
  const lang = currentLanguage();

  shell.innerHTML = `
    <section class="product-shell surface-panel tone-${product.tone}">
      <div class="product-gallery">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${fromRoot("index.html")}">${bilingualText("Inicio", "Home")}</a>
          <span>/</span>
          <a href="${catalogLink(product.category)}">${bilingualText(CATEGORY_META[product.category].labelEs, CATEGORY_META[product.category].labelEn)}</a>
          <span>/</span>
          <span>${escapeHtml(product.name)}</span>
        </nav>

        <div class="product-visual">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" />
        </div>

        <div class="product-meta-strip">
          <span class="tag">${bilingualText(CATEGORY_META[product.category].labelEs, CATEGORY_META[product.category].labelEn)}</span>
          <span class="tag">${bilingualText(product.size, product.size)}</span>
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
          <a class="btn btn-secondary" href="${singleProductWhatsappLink(product, lang)}" target="_blank" rel="noreferrer" data-single-checkout data-slug="${product.slug}">
            ${bilingualText("Pedir por WhatsApp", "Order on WhatsApp")}
          </a>
        </div>

        <ul class="micro-list">
          <li>${bilingualText(product.benefitEs, product.benefitEn)}</li>
          <li>${bilingualText(`Ideal para: ${product.idealEs}`, `Ideal for: ${product.idealEn}`)}</li>
          <li>${bilingualText(`Garantia: ${product.warrantyEs}`, `Warranty: ${product.warrantyEn}`)}</li>
        </ul>
      </article>
    </section>
  `;

  trackEvent("view_item", {
    currency: "COP",
    value: product.price,
    items: [gaItem(product)],
  });

  specs.innerHTML = buildProductSpecs(product)
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

  details.innerHTML = buildProductDetails(product)
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
  const fallback = PRODUCTS.filter((item) => item.slug !== product.slug).slice(0, 3);
  recommendations.innerHTML = (related.length ? related : fallback).map((item) => productCardTemplate(item)).join("");
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

    count.innerHTML = bilingualText(`${visibleCount} productos encontrados`, `${visibleCount} products found`);
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
  initAnalytics();
  injectShell();
  renderDynamicContent();
  bindNavigation();
  bindLanguage();
  bindCart();
  bindCatalogControls();
});
