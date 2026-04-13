# Bruma Alta

Proyecto estático de e-commerce creado para una actividad universitaria de la Unidad 2 sobre diseño de portal web, StoryBrand, UX/UI, SEO y finanzas de e-commerce.

## Qué se mejoró frente al brief inicial

- Se corrigió la interpretación del idioma: en las capturas aparece `contenido en dos idiomas`, por eso el sitio quedó bilingüe.
- Se respetó la recomendación de no usar imágenes tomadas de internet: los visuales del sitio son SVG originales creados dentro de `assets/img`.
- Se amplió el alcance comercial real de la consigna: además de productos y precios, el portal incluye especificaciones, métodos de pago, tarifas de envío, cuidados, garantía y políticas visibles.
- Se dejó una carpeta completa de entrega, no solo el sitio: README, informe académico web y dataset ficticio.

## Estructura del proyecto

```text
pag_web/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
│       ├── favicon.svg
│       ├── hero-coffee.svg
│       ├── logo-mark.svg
│       ├── product-cumbre.svg
│       ├── product-neblina.svg
│       └── product-origen.svg
├── docs/
│   ├── capturas/
│   │   └── WhatsApp Image ... .jpeg
│   └── dataset-ficticio-marzo-2026.csv
├── pages/
│   ├── catalogo.html
│   ├── envios-y-devoluciones.html
│   ├── informe-academico.html
│   ├── politica-privacidad.html
│   ├── producto-cumbre-1700.html
│   ├── producto-neblina-drip.html
│   ├── producto-origen-duo.html
│   └── terminos-condiciones.html
└── robots.txt
```

Las capturas originales de la actividad quedaron agrupadas en `docs/capturas/` para no dejar el directorio principal desordenado.

## Qué incluye la entrega

- Portal e-commerce estático listo para GitHub Pages.
- Contenido bilingüe español/inglés en la parte comercial del sitio.
- Al menos 3 productos con imagen, precio, categoría y ficha detallada.
- Métodos de pago, tarifas de envío, cuidados, garantía y políticas legales.
- Informe académico completo en `pages/informe-academico.html`.
- Dataset ficticio mensual en `docs/dataset-ficticio-marzo-2026.csv`.

## Cómo abrirlo localmente

Opción simple con Python:

```bash
cd "/Users/javierportillarosero/Documents/Bri ❤️/Uni/pag_web"
python3 -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido completo de esta carpeta.
3. En GitHub ve a `Settings` → `Pages`.
4. En `Build and deployment`, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda y espera unos segundos.
6. GitHub Pages generará un enlace público para entregar al docente.

## Qué revisar antes de entregar

- Que el enlace de GitHub Pages abra correctamente.
- Que `index.html`, `pages/catalogo.html` y `pages/informe-academico.html` carguen sin errores.
- Que los enlaces del footer funcionen.
- Que el cambio de idioma responda.
- Que el archivo CSV se pueda abrir.
- Que el docente reciba tanto el link del sitio como el soporte académico.

## Nota académica útil

La fecha límite visible en la captura es **lunes 13 de abril de 2026**. Como el entorno de trabajo marca **domingo 12 de abril de 2026**, conviene publicar y revisar el enlace hoy mismo.
# briwk
