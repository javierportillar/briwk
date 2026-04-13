const STORAGE_KEYS = {
  language: "savia-col-language",
  cartCount: "savia-col-cart-count",
};

const CATEGORY_META = {
  all: {
    labelEs: "Todos",
    labelEn: "All",
  },
  granolas: {
    labelEs: "GranOLAS",
    labelEn: "Granolas",
  },
  pancakes: {
    labelEs: "Pancakes & Waffles",
    labelEn: "Pancakes & Waffles",
  },
  spreads: {
    labelEs: "Esparcibles",
    labelEn: "Spreads",
  },
  pantry: {
    labelEs: "Avena & Harinas",
    labelEn: "Oats & Flours",
  },
  bundles: {
    labelEs: "Combos",
    labelEn: "Bundles",
  },
};

const PRODUCTS = [
  {
    slug: "short-sweet-bundle",
    category: "bundles",
    tone: "rose",
    familyEs: "Combo curado",
    familyEn: "Curated bundle",
    name: "Short & Sweet Bundle",
    lineEs: "Oat Brina Carpenter",
    lineEn: "Oat Brina Carpenter",
    descriptionEs:
      "Dos referencias XL para desayunos con textura, antojo controlado y mejor ticket promedio desde el primer clic.",
    descriptionEn:
      "Two XL references for breakfasts with texture, controlled craving and a stronger average order value from the first click.",
    size: "2 productos XL",
    price: 112000,
    oldPrice: 135743,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2026/02/PN_MissOatBrina_Nube_V3-1024x1024.png",
    tagsEs: ["2 productos XL", "Ahorro visible", "Ideal para regalar"],
    tagsEn: ["2 XL products", "Visible savings", "Great for gifting"],
    useEs: "Desayunos compartidos, regalo y recompra semanal.",
    useEn: "Shared breakfasts, gifting and weekly restocking.",
    flavorEs: "Selección dulce y práctica",
    flavorEn: "Sweet, practical selection",
    baseEs: "Curaduría lista para carrito",
    baseEn: "Cart-ready curation",
  },
  {
    slug: "soft-chaos-bundle",
    category: "bundles",
    tone: "gold",
    familyEs: "Combo favorito",
    familyEn: "Fan-favorite bundle",
    name: "Soft Chaos Bundle",
    lineEs: "Cocoachii",
    lineEn: "Cocoachii",
    descriptionEs:
      "Una mezcla de GranOLA XL y GranOLA regular para usuarios que quieren probar más sin saturar la decisión.",
    descriptionEn:
      "A mix of XL GranOLA and regular GranOLA for shoppers who want more variety without decision overload.",
    size: "1 GranOLA XL + 1 GranOLA",
    price: 106000,
    oldPrice: 125764,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2026/02/PN_Cocoachi_Nube-v4-1024x1024.png",
    tagsEs: ["Bundle mixto", "Mayor valor", "Top de entrada"],
    tagsEn: ["Mixed bundle", "Higher value", "Top entry pick"],
    useEs: "Compra de descubrimiento y primera experiencia con la marca.",
    useEn: "Discovery purchase and first brand experience.",
    flavorEs: "Crujiente con rotación de formatos",
    flavorEn: "Crunchy with mixed formats",
    baseEs: "Selección dulce en dos escalas",
    baseEn: "Sweet selection in two sizes",
  },
  {
    slug: "back-to-routine",
    category: "bundles",
    tone: "leaf",
    familyEs: "Combo premium",
    familyEn: "Premium bundle",
    name: "Back To Routine",
    lineEs: "Elige tus favoritos",
    lineEn: "Pick your favorites",
    descriptionEs:
      "El bundle más completo del catálogo: mezcla, GranOLA, spread y wafflera para una rutina visualmente potente y fácil de vender.",
    descriptionEn:
      "The most complete bundle in the catalog: mix, GranOLA, spread and waffle maker for a visually rich routine that is easy to merchandise.",
    size: "Combo multiproducto",
    price: 196000,
    oldPrice: 276320,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2025/01/PN_BackToRoutine_Nube.gif",
    tagsEs: ["Bundle héroe", "Regalo premium", "Mayor ticket"],
    tagsEn: ["Hero bundle", "Premium gift", "Highest ticket"],
    useEs: "Regalo, onboarding o compra completa de inicio de mes.",
    useEn: "Gifting, onboarding or a complete monthly restock.",
    flavorEs: "Mix total para rutina saludable",
    flavorEn: "Full mix for a healthy routine",
    baseEs: "Colección modular",
    baseEn: "Modular collection",
  },
  {
    slug: "granola-pistacho",
    category: "granolas",
    tone: "leaf",
    familyEs: "Gluten Free GranOLA",
    familyEn: "Gluten Free GranOLA",
    name: "Buttery Pistachio Cookie",
    lineEs: "GranOLA de pistacho",
    lineEn: "Pistachio GranOLA",
    descriptionEs:
      "Sabor redondo, visual limpio y buen contraste para destacar como favorito de anaquel digital.",
    descriptionEn:
      "Rounded flavor, clean visuals and strong contrast to stand out as a digital shelf favorite.",
    size: "Regular",
    price: 44950,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2025/08/PN_Granola_Pistacho_Nube_v1-1024x1024.png",
    tagsEs: ["Gluten free", "Pistacho", "Snack o topping"],
    tagsEn: ["Gluten free", "Pistachio", "Snack or topping"],
    useEs: "Bowls, yogur, media tarde y desayuno rápido.",
    useEn: "Bowls, yogurt, afternoon snack and fast breakfasts.",
    flavorEs: "Buttery Pistachio Cookie",
    flavorEn: "Buttery Pistachio Cookie",
    baseEs: "Crujiente, lista para servir",
    baseEn: "Crunchy, ready to serve",
  },
  {
    slug: "granola-chip-cookie-xl",
    category: "granolas",
    tone: "cocoa",
    familyEs: "Gluten Free GranOLA",
    familyEn: "Gluten Free GranOLA",
    name: "Chocolate Chip Cookie XL",
    lineEs: "GranOLA XL",
    lineEn: "XL GranOLA",
    descriptionEs:
      "Formato ampliado para hogares que compran por volumen y quieren una referencia dominante en la grilla.",
    descriptionEn:
      "Expanded format for households that buy in volume and want a strong shelf presence on the grid.",
    size: "XL / 710 g",
    price: 80834,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2024/07/PN_ChioCookie_Nube_v3-1024x1024.png",
    tagsEs: ["Formato XL", "Chocolate chip", "Compra familiar"],
    tagsEn: ["XL size", "Chocolate chip", "Family size"],
    useEs: "Reposición de despensa y desayunos de alta rotación.",
    useEn: "Pantry restocking and high-rotation breakfasts.",
    flavorEs: "Chocolate Chip Cookie XL",
    flavorEn: "Chocolate Chip Cookie XL",
    baseEs: "Crujiente con alto rendimiento",
    baseEn: "Crunchy with strong yield",
  },
  {
    slug: "granola-fudge-cake-xl",
    category: "granolas",
    tone: "berry",
    familyEs: "Gluten Free GranOLA",
    familyEn: "Gluten Free GranOLA",
    name: "Cocoa Fudge Cake XL",
    lineEs: "GranOLA XL",
    lineEn: "XL GranOLA",
    descriptionEs:
      "Una referencia indulgente que empuja la compra por antojo sin perder el lenguaje saludable del catálogo.",
    descriptionEn:
      "An indulgent reference that drives desire-led shopping without losing the healthy language of the catalog.",
    size: "XL",
    price: 80834,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2026/01/PN_FudgeCake_Nube_v3-1024x1024.png",
    tagsEs: ["Cocoa", "Formato XL", "Antojo premium"],
    tagsEn: ["Cocoa", "XL size", "Premium craving"],
    useEs: "Desayuno indulgente, topping y consumo recurrente.",
    useEn: "Indulgent breakfast, topping and recurring use.",
    flavorEs: "Cocoa Fudge Cake XL",
    flavorEn: "Cocoa Fudge Cake XL",
    baseEs: "Crujiente con perfil profundo",
    baseEn: "Crunchy with a deeper flavor profile",
  },
  {
    slug: "spread-pistachio-xl",
    category: "spreads",
    tone: "leaf",
    familyEs: "Crema a base de Pistachos & Almendras",
    familyEn: "Pistachio & Almond spread",
    name: "Galleta de Pistacho XL",
    lineEs: "Spread premium",
    lineEn: "Premium spread",
    descriptionEs:
      "Untable protagonista para subir percepción de valor con color, textura y sabor más aspiracional.",
    descriptionEn:
      "A hero spread that lifts perceived value through color, texture and a more aspirational flavor profile.",
    size: "XL",
    price: 64000,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2024/08/PN_Pistacho_Nube_v4-1024x1024.png",
    tagsEs: ["Pistacho", "Premium", "Textura cremosa"],
    tagsEn: ["Pistachio", "Premium", "Creamy texture"],
    useEs: "Tostadas, postres simples, bowls y regalo foodie.",
    useEn: "Toast, simple desserts, bowls and foodie gifting.",
    flavorEs: "Galleta de Pistacho XL",
    flavorEn: "Pistachio Cookie XL",
    baseEs: "Untable cremoso",
    baseEn: "Creamy spread",
  },
  {
    slug: "spread-chocolate-cremoso-xl",
    category: "spreads",
    tone: "cocoa",
    familyEs: "Crema a base de Almendras & Avellanas",
    familyEn: "Almond & hazelnut cream",
    name: "Chocolate Cremoso XL",
    lineEs: "Spread clásico",
    lineEn: "Classic spread",
    descriptionEs:
      "El producto puente entre antojo y confianza: reconocible, fácil de explicar y con alta intención de recompra.",
    descriptionEn:
      "The bridge product between desire and trust: recognizable, easy to explain and highly likely to be repurchased.",
    size: "XL",
    price: 52400,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2024/01/PN_Creamy_Nube_V5-1024x1024.png",
    tagsEs: ["Chocolate", "Hazelnut style", "Best seller"],
    tagsEn: ["Chocolate", "Hazelnut style", "Best seller"],
    useEs: "Tostadas, pancakes, lonchera y snack dulce.",
    useEn: "Toast, pancakes, lunchbox and sweet snacking.",
    flavorEs: "Chocolate Cremoso XL",
    flavorEn: "Creamy Chocolate XL",
    baseEs: "Cremoso y muy versátil",
    baseEn: "Creamy and highly versatile",
  },
  {
    slug: "spread-banana-shake",
    category: "spreads",
    tone: "gold",
    familyEs: "Esparcible a base de Maní y Nueces",
    familyEn: "Peanut and nut spread",
    name: "Banana Shake",
    lineEs: "Spread con sabor icónico",
    lineEn: "Signature spread flavor",
    descriptionEs:
      "Una opción más juguetona para ampliar la percepción del catálogo sin perder coherencia con bienestar y snack funcional.",
    descriptionEn:
      "A more playful option to expand the catalog perception without losing coherence with wellness and functional snacking.",
    size: "Regular",
    price: 48590,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2022/11/PN_PB_Nube_V1-1024x1024.png",
    tagsEs: ["Maní", "Snack", "Perfil divertido"],
    tagsEn: ["Peanut", "Snack", "Playful flavor"],
    useEs: "Smoothies, tostadas, fruta y media mañana.",
    useEn: "Smoothies, toast, fruit and mid-morning use.",
    flavorEs: "Banana Shake",
    flavorEn: "Banana Shake",
    baseEs: "Untable con toque dulce",
    baseEn: "Spread with a sweet twist",
  },
  {
    slug: "pancake-vainilla-xl",
    category: "pancakes",
    tone: "gold",
    familyEs: "Mezcla lista para Pancakes & Waffles",
    familyEn: "Ready mix for Pancakes & Waffles",
    name: "Vainilla XL",
    lineEs: "A base de avena",
    lineEn: "Oat-based",
    descriptionEs:
      "Una mezcla grande y familiar para resolver desayuno sin fricción, con mensaje funcional y fácil comparación visual.",
    descriptionEn:
      "A larger family-ready mix that solves breakfast with low friction and a visually easy value message.",
    size: "XL / 907 g",
    price: 84522,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2024/07/PN_Vainilla_Nube_v3-1024x1024.png",
    tagsEs: ["Avena", "XL", "Desayuno rápido"],
    tagsEn: ["Oat-based", "XL", "Fast breakfast"],
    useEs: "Batch cooking, brunch y desayuno recurrente.",
    useEn: "Batch cooking, brunch and recurring breakfasts.",
    flavorEs: "Vainilla XL",
    flavorEn: "Vanilla XL",
    baseEs: "Mezcla lista para preparar",
    baseEn: "Ready-to-make mix",
  },
  {
    slug: "pancake-chips-almendra",
    category: "pancakes",
    tone: "berry",
    familyEs: "Mezcla lista para Pancakes & Waffles",
    familyEn: "Ready mix for Pancakes & Waffles",
    name: "Chips de Chocolate",
    lineEs: "A base de almendra",
    lineEn: "Almond-based",
    descriptionEs:
      "Sabor fácil de vender y fotografiar. Funciona como punto medio entre indulgencia y desayuno práctico.",
    descriptionEn:
      "An easy-to-sell, easy-to-photograph flavor. It works as a midpoint between indulgence and convenience.",
    size: "285 g",
    price: 41690,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2022/06/PN_Chips_Nube_v1-1024x1024.png",
    tagsEs: ["Almendra", "Chocolate chips", "Rinde brunch"],
    tagsEn: ["Almond-based", "Chocolate chips", "Brunch friendly"],
    useEs: "Brunch casero, antojo dulce y desayunos especiales.",
    useEn: "Home brunch, sweet cravings and special breakfasts.",
    flavorEs: "Chips de Chocolate",
    flavorEn: "Chocolate Chips",
    baseEs: "Mezcla de preparación rápida",
    baseEn: "Quick-prep mix",
  },
  {
    slug: "pancake-brownie",
    category: "pancakes",
    tone: "cocoa",
    familyEs: "Mezcla lista para Pancakes & Waffles",
    familyEn: "Ready mix for Pancakes & Waffles",
    name: "Brownie",
    lineEs: "A base de avena",
    lineEn: "Oat-based",
    descriptionEs:
      "Referencia para compradores que buscan sabor intenso pero una preparación directa y rápida de entender.",
    descriptionEn:
      "A reference for shoppers who want deep flavor with a direct, easy-to-understand preparation flow.",
    size: "300 g",
    price: 32890,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2022/06/PN_Brownie_Nube_v1-1-1024x1024.png",
    tagsEs: ["Brownie", "Oat-based", "Desayuno indulgente"],
    tagsEn: ["Brownie", "Oat-based", "Indulgent breakfast"],
    useEs: "Fin de semana, merienda y contenido social atractivo.",
    useEn: "Weekend cooking, snacks and social-ready content.",
    flavorEs: "Brownie",
    flavorEn: "Brownie",
    baseEs: "Mezcla dulce con avena",
    baseEn: "Sweet oat mix",
  },
  {
    slug: "avena-hojuelas-xl",
    category: "pantry",
    tone: "leaf",
    familyEs: "Avena & Harinas",
    familyEn: "Oats & Flours",
    name: "Avena en Hojuelas XL",
    lineEs: "Libre de gluten",
    lineEn: "Gluten free",
    descriptionEs:
      "La base funcional del catálogo: clara, simple y útil para usuarios que quieren pantry staples sin ruido visual.",
    descriptionEn:
      "The functional base of the catalog: clear, simple and useful for shoppers who want pantry staples without visual noise.",
    size: "2000 g",
    price: 56430,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2024/07/PN_AvenaHojuelasXl_Nube_v3-1024x1024.png",
    tagsEs: ["2 kg", "Pantry staple", "Libre de gluten"],
    tagsEn: ["2 kg", "Pantry staple", "Gluten free"],
    useEs: "Avena caliente, horneados y compra de volumen.",
    useEn: "Warm oats, baking and volume buying.",
    flavorEs: "Base neutra de alta rotación",
    flavorEn: "High-rotation neutral base",
    baseEs: "Ingrediente esencial",
    baseEn: "Essential pantry ingredient",
  },
  {
    slug: "harina-avena",
    category: "pantry",
    tone: "gold",
    familyEs: "Avena & Harinas",
    familyEn: "Oats & Flours",
    name: "Harina de Avena",
    lineEs: "Libre de gluten",
    lineEn: "Gluten free",
    descriptionEs:
      "Un producto ancla para cocina casera y usuarios que comparan valor por funcionalidad antes que por sabor.",
    descriptionEn:
      "An anchor product for home cooking and shoppers who compare value by functionality rather than flavor.",
    size: "1000 g",
    price: 31350,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2022/06/PN_Harina_Avena_Nube-1024x1024.png",
    tagsEs: ["1 kg", "Horneados", "Base versátil"],
    tagsEn: ["1 kg", "Baking", "Versatile base"],
    useEs: "Pancakes, repostería simple y recetas funcionales.",
    useEn: "Pancakes, simple baking and functional recipes.",
    flavorEs: "Base neutra para mezclar",
    flavorEn: "Neutral base for mixing",
    baseEs: "Harina de avena funcional",
    baseEn: "Functional oat flour",
  },
  {
    slug: "harina-almendra",
    category: "pantry",
    tone: "rose",
    familyEs: "Avena & Harinas",
    familyEn: "Oats & Flours",
    name: "Harina de Almendra",
    lineEs: "Libre de gluten",
    lineEn: "Gluten free",
    descriptionEs:
      "Sube percepción premium dentro del surtido básico y ayuda a construir una categoría de ingredientes con más margen.",
    descriptionEn:
      "It lifts the premium perception of the staple assortment and helps build a more profitable ingredients category.",
    size: "250 g",
    price: 34650,
    image:
      "https://whynot-bkt.s3.amazonaws.com/wp-content/uploads/2022/06/PN_Harina_Almendra_Nube-1024x1024.png",
    tagsEs: ["Almendra", "Premium pantry", "Sin gluten"],
    tagsEn: ["Almond", "Premium pantry", "Gluten free"],
    useEs: "Horneados, recetas low carb y mezcla con otras harinas.",
    useEn: "Baking, low-carb recipes and flour blending.",
    flavorEs: "Base premium para cocinar",
    flavorEn: "Premium base for cooking",
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
  return localStorage.getItem(STORAGE_KEYS.language) || "es";
}

function currentCartCount() {
  return Number(localStorage.getItem(STORAGE_KEYS.cartCount) || 0);
}

function setCartCount(count) {
  localStorage.setItem(STORAGE_KEYS.cartCount, String(count));
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(count);
  });
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

  if (headerTarget) {
    headerTarget.innerHTML = `
      <a class="skip-link" href="#contenido-principal">
        ${bilingualText("Saltar al contenido", "Skip to content")}
      </a>
      <header class="site-header">
        <div class="container topbar">
          <div>${bilingualText(
            "<strong>Despensa saludable:</strong> surtido claro, bundles visibles y decisión rápida.",
            "<strong>Healthy pantry:</strong> clear assortment, visible bundles and faster decisions.",
          )}</div>
          <div>${bilingualText(
            "Envío gratis desde COP 160.000. Checkout demostrativo con enfoque mobile first.",
            "Free shipping over COP 160,000. Demo checkout with a mobile-first mindset.",
          )}</div>
        </div>
        <div class="container nav-row">
          <a class="brand" href="${homeHref}" aria-label="Savia Col.">
            <span class="brand-mark" aria-hidden="true">S</span>
            <span class="brand-copy">
              <span class="brand-name">Savia Col.</span>
              <span class="brand-tag">
                ${bilingualText(
                  "Despensa saludable con criterio visual",
                  "Healthy pantry with strong visual curation",
                )}
              </span>
            </span>
          </a>

          <nav class="nav-menu" id="main-nav" data-open="false">
            <a class="nav-link ${page === "home" ? "is-active" : ""}" href="${homeHref}">
              ${bilingualText("Inicio", "Home")}
            </a>
            <a class="nav-link ${page === "catalogo" ? "is-active" : ""}" href="${catalogHref}">
              ${bilingualText("Catálogo", "Catalog")}
            </a>
            <a class="nav-link ${page === "envios" ? "is-active" : ""}" href="${shippingHref}">
              ${bilingualText("Envíos", "Shipping")}
            </a>
            <a class="nav-link ${page === "privacidad" ? "is-active" : ""}" href="${privacyHref}">
              ${bilingualText("Privacidad", "Privacy")}
            </a>
            <a class="nav-link ${page === "terminos" ? "is-active" : ""}" href="${termsHref}">
              ${bilingualText("Términos", "Terms")}
            </a>
          </nav>

          <div class="nav-tools">
            <div class="lang-switch" aria-label="Selector de idioma">
              <button type="button" data-lang-trigger="es">ES</button>
              <button type="button" data-lang-trigger="en">EN</button>
            </div>
            <button class="cart-pill" type="button" aria-label="Carrito demostrativo">
              ${bilingualText("Carrito", "Cart")}
              <span class="cart-count" data-cart-count>0</span>
            </button>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
              ${bilingualText("Menú", "Menu")}
            </button>
          </div>
        </div>
      </header>
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
                  "Prototipo académico de e-commerce enfocado en productos naturales, navegación clara y mejor lectura visual en desktop y mobile.",
                  "Academic e-commerce prototype focused on natural products, clear navigation and stronger readability on desktop and mobile.",
                )}
              </p>
            </div>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Colecciones", "Collections")}</strong>
            <a href="${fromRoot("pages/catalogo.html?category=granolas")}">${bilingualText("GranOLAS", "Granolas")}</a>
            <a href="${fromRoot("pages/catalogo.html?category=pancakes")}">${bilingualText(
              "Pancakes & Waffles",
              "Pancakes & Waffles",
            )}</a>
            <a href="${fromRoot("pages/catalogo.html?category=spreads")}">${bilingualText("Esparcibles", "Spreads")}</a>
            <a href="${fromRoot("pages/catalogo.html?category=bundles")}">${bilingualText("Combos", "Bundles")}</a>
          </section>

          <section class="footer-links">
            <strong>${bilingualText("Compra segura", "Safe shopping")}</strong>
            <a href="${shippingHref}">${bilingualText("Envíos y devoluciones", "Shipping and returns")}</a>
            <a href="${privacyHref}">${bilingualText("Política de privacidad", "Privacy policy")}</a>
            <a href="${termsHref}">${bilingualText("Términos y condiciones", "Terms and conditions")}</a>
          </section>

          <section class="footer-notes">
            <strong>${bilingualText("Canales", "Channels")}</strong>
            <span>hola@saviacol.co</span>
            <span>+57 310 817 9620</span>
            <span>${bilingualText("Pasto, Colombia", "Pasto, Colombia")}</span>
            <span>${bilingualText("Pagos: Tarjeta, PSE, Mercado Pago", "Payments: Cards, PSE, Mercado Pago")}</span>
          </section>
        </div>

        <div class="container footer-legal">
          <span>${bilingualText(
            "Surtido tomado del catálogo de referencia suministrado para esta actividad.",
            "Assortment curated from the reference catalog supplied for this assignment.",
          )}</span>
          <span>${bilingualText(
            "Sitio demostrativo sin checkout real ni procesamiento de pagos.",
            "Demonstration site without real checkout or payment processing.",
          )}</span>
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

function bindCart() {
  setCartCount(currentCartCount());

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = currentLanguage();
      const count = currentCartCount() + 1;
      setCartCount(count);
      const product = lang === "es" ? button.dataset.productEs : button.dataset.productEn;
      const message =
        lang === "es"
          ? `${product} se añadió al carrito demostrativo.`
          : `${product} was added to the demo cart.`;
      showToast(message);
    });
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
  ]
    .join(" ")
    .toLowerCase();

  return `
    <article class="product-card catalog-card tone-${product.tone}" data-category="${product.category}" data-search="${searchTokens}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-badge">${bilingualText(product.familyEs, product.familyEn)}</span>
        ${discount ? `<span class="sale-pill">-${discount}%</span>` : ""}
      </div>
      <div class="product-copy">
        <p class="product-line">${bilingualText(product.lineEs, product.lineEn)}</p>
        <h3>${product.name}</h3>
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
            <button
              class="btn btn-primary add-to-cart"
              type="button"
              data-product-es="${product.name}"
              data-product-en="${product.name}"
            >
              ${bilingualText("Añadir", "Add")}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const bestsellers = document.querySelector("#home-bestsellers");
  const bundles = document.querySelector("#home-bundles");
  const spotlight = document.querySelector("#home-spotlight");

  if (bestsellers) {
    const featured = ["granola-pistacho", "spread-chocolate-cremoso-xl", "pancake-vainilla-xl", "avena-hojuelas-xl"]
      .map((slug) => PRODUCTS.find((product) => product.slug === slug))
      .filter(Boolean);
    bestsellers.innerHTML = featured.map((product) => productCardTemplate(product)).join("");
  }

  if (bundles) {
    const curatedBundles = PRODUCTS.filter((product) => product.category === "bundles");
    bundles.innerHTML = curatedBundles.map((product) => productCardTemplate(product)).join("");
  }

  if (spotlight) {
    const heroProduct = PRODUCTS.find((product) => product.slug === "back-to-routine");
    if (heroProduct) {
      spotlight.innerHTML = `
        <article class="spotlight-panel tone-${heroProduct.tone}">
          <div class="spotlight-copy">
            <p class="kicker">${bilingualText("Spotlight comercial", "Commercial spotlight")}</p>
            <h2>${bilingualText("Un bundle héroe para elevar la percepción del catálogo.", "A hero bundle to elevate catalog perception.")}</h2>
            <p class="section-copy">${bilingualText(
              "Back To Routine ordena la navegación: mezcla, spread, GranOLA y accesorio en una sola historia visual. Esto mejora la lectura de valor y hace que la página no dependa solo de productos unitarios.",
              "Back To Routine organizes navigation: mix, spread, GranOLA and accessory in one visual story. That improves value perception and keeps the page from depending only on single-SKU products.",
            )}</p>
            <div class="stat-strip">
              <div class="stat-card">
                <strong>${formatCurrency(heroProduct.price)}</strong>
                <span>${bilingualText("Precio actual", "Current price")}</span>
              </div>
              <div class="stat-card">
                <strong>${formatCurrency(heroProduct.oldPrice || heroProduct.price)}</strong>
                <span>${bilingualText("Antes", "Before")}</span>
              </div>
              <div class="stat-card">
                <strong>${bilingualText("Alta", "High")}</strong>
                <span>${bilingualText("Percepción de regalo", "Gift perception")}</span>
              </div>
            </div>
            <div class="cta-row">
              <a class="btn btn-primary" href="${productHref(heroProduct)}">${bilingualText("Abrir combo", "Open bundle")}</a>
              <a class="btn btn-secondary" href="${fromRoot("pages/catalogo.html?category=bundles")}">${bilingualText(
                "Ver todos los combos",
                "Browse all bundles",
              )}</a>
            </div>
          </div>
          <div class="spotlight-media">
            <img src="${heroProduct.image}" alt="${heroProduct.name}" loading="lazy" />
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
      titleEs: "Familia de compra",
      titleEn: "Shopping family",
      bodyEs: `${product.familyEs}. ${product.lineEs}.`,
      bodyEn: `${product.familyEn}. ${product.lineEn}.`,
    },
    {
      titleEs: "Mejor momento de uso",
      titleEn: "Best use moment",
      bodyEs: product.useEs,
      bodyEn: product.useEn,
    },
    {
      titleEs: "Compra segura",
      titleEn: "Safe shopping",
      bodyEs: "Tarjeta, PSE, Mercado Pago y cambios por empaque reportados dentro de 7 días.",
      bodyEn: "Cards, PSE, Mercado Pago and packaging-related replacements reported within 7 days.",
    },
  ];
}

function buildProductExtraCards(product) {
  return [
    {
      titleEs: "Qué recibes",
      titleEn: "What you get",
      itemsEs: [
        `${product.size}.`,
        `${product.baseEs}.`,
        `${product.flavorEs}.`,
        `Categoría: ${CATEGORY_META[product.category].labelEs}.`,
      ],
      itemsEn: [
        `${product.size}.`,
        `${product.baseEn}.`,
        `${product.flavorEn}.`,
        `Category: ${CATEGORY_META[product.category].labelEn}.`,
      ],
    },
    {
      titleEs: "Antes de comprar",
      titleEn: "Before you buy",
      itemsEs: [
        "Envío gratis desde COP 160.000.",
        "Tarifas nacionales visibles antes del checkout.",
        "La página funciona como demo: carrito ilustrativo y fichas informativas.",
        "Ideal para navegación mobile y decisión rápida.",
      ],
      itemsEn: [
        "Free shipping over COP 160,000.",
        "National shipping rates are visible before checkout.",
        "This page works as a demo: illustrative cart and informative product sheets.",
        "Built for mobile navigation and faster decision-making.",
      ],
    },
  ];
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "granola-pistacho";
  const product = PRODUCTS.find((item) => item.slug === slug) || PRODUCTS[0];
  const shell = document.querySelector("#product-shell");
  const benefits = document.querySelector("#product-benefits");
  const extra = document.querySelector("#product-extra");
  const recommendations = document.querySelector("#product-recommendations");

  if (!product || !shell || !benefits || !extra || !recommendations) return;

  document.body.dataset.titleEs = `${product.name} | Savia Col.`;
  document.body.dataset.titleEn = `${product.name} | Savia Col.`;
  document.body.dataset.descEs = `${product.familyEs}, ${product.flavorEs.toLowerCase()} y precio ${formatCurrency(product.price)}.`;
  document.body.dataset.descEn = `${product.familyEn}, ${product.flavorEn.toLowerCase()} and price ${formatCurrency(product.price)}.`;

  const discount = discountPercent(product.oldPrice, product.price);
  shell.innerHTML = `
    <section class="product-shell surface-panel tone-${product.tone}">
      <div class="product-gallery">
        <div class="product-visual">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-meta-strip">
          <span class="tag">${bilingualText(product.size, product.size)}</span>
          <span class="tag">${bilingualText(CATEGORY_META[product.category].labelEs, CATEGORY_META[product.category].labelEn)}</span>
          <span class="tag">${bilingualText("Mobile friendly", "Mobile friendly")}</span>
        </div>
      </div>
      <article class="product-summary">
        <p class="kicker">${bilingualText("Ficha de producto", "Product detail")}</p>
        <h1 class="page-title">${product.name}</h1>
        <p class="product-line product-line-large">${bilingualText(product.familyEs, product.familyEn)} · ${bilingualText(
          product.lineEs,
          product.lineEn,
        )}</p>
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
          ${discount ? `<span class="pill-note">${bilingualText(`Ahorras ${discount}%`, `You save ${discount}%`)}</span>` : ""}
        </div>

        <div class="button-row">
          <button
            class="btn btn-primary add-to-cart"
            type="button"
            data-product-es="${product.name}"
            data-product-en="${product.name}"
          >
            ${bilingualText("Añadir al carrito", "Add to cart")}
          </button>
          <a class="btn btn-secondary" href="${fromRoot("pages/catalogo.html")}">${bilingualText(
            "Volver al catálogo",
            "Back to catalog",
          )}</a>
        </div>

        <ul class="micro-list">
          <li>${bilingualText(`Sabor: ${product.flavorEs}.`, `Flavor: ${product.flavorEn}.`)}</li>
          <li>${bilingualText(`Base: ${product.baseEs}.`, `Base: ${product.baseEn}.`)}</li>
          <li>${bilingualText(
            "Pagos visibles: tarjeta, PSE y Mercado Pago.",
            "Visible payments: cards, PSE and Mercado Pago.",
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
      `${visibleCount} productos listos para explorar`,
      `${visibleCount} products ready to browse`,
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

function bindReportDownloadNotice() {
  const downloadLinks = document.querySelectorAll("[data-download-note]");
  if (!downloadLinks.length) return;

  downloadLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const lang = currentLanguage();
      showToast(
        lang === "es"
          ? "Se abrirá el dataset ficticio en formato CSV."
          : "The fictional dataset will open in CSV format.",
      );
    });
  });
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
  bindReportDownloadNotice();
});
