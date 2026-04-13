# Savia Col.

Proyecto estático de e-commerce para una actividad universitaria de la Unidad 2, rediseñado con foco en UI comercial, mejor visualización mobile y despliegue simple en GitHub Pages.

## Qué incluye

- Home rediseñado con mejor jerarquía visual.
- Catálogo filtrable con búsqueda.
- Ficha dinámica de producto por `slug`.
- Páginas de envíos, privacidad y términos.
- Informe académico en [pages/informe-academico.html](pages/informe-academico.html).
- Dataset ficticio en [docs/dataset-ficticio-marzo-2026.csv](docs/dataset-ficticio-marzo-2026.csv).
- Flujo listo para publicar en GitHub Pages.

## Estructura

```text
pag_web/
├── index.html
├── 404.html (opcional, no incluido)
├── .nojekyll
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
├── docs/
│   ├── capturas/
│   └── dataset-ficticio-marzo-2026.csv
├── pages/
│   ├── catalogo.html
│   ├── envios-y-devoluciones.html
│   ├── informe-academico.html
│   ├── politica-privacidad.html
│   ├── producto.html
│   ├── producto-cumbre-1700.html
│   ├── producto-neblina-drip.html
│   ├── producto-origen-duo.html
│   └── terminos-condiciones.html
└── robots.txt
```

## Probar localmente

```bash
cd "/Users/javierportillarosero/Documents/Bri ❤️/Uni/pag_web"
python3 -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

## Publicar en GitHub Pages

### Opción recomendada: GitHub Actions

Este proyecto ya incluye el workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), así que no tienes que montar nada adicional.

#### Pasos

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido completo de esta carpeta al repositorio.
3. Asegúrate de que la rama principal se llame `main`.
4. En GitHub ve a `Settings` → `Pages`.
5. En `Build and deployment`, selecciona `Source: GitHub Actions`.
6. Haz un push a `main`.
7. Espera a que termine el workflow `Deploy Static Site to GitHub Pages`.
8. GitHub te publicará una URL con este formato:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

### Opción simple: Deploy desde rama

También puedes publicar sin Actions:

1. Sube esta carpeta a un repositorio.
2. Ve a `Settings` → `Pages`.
3. En `Build and deployment`, selecciona:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
4. Guarda.

La URL pública tendrá el mismo formato:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

## Qué revisar después de publicar

- Que cargue la portada.
- Que abra [pages/catalogo.html](pages/catalogo.html).
- Que funcione [pages/producto.html](pages/producto.html) con query string, por ejemplo:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/pages/producto.html?slug=back-to-routine
```

- Que los cambios de idioma respondan.
- Que el carrito demostrativo sume productos.
- Que el CSV y el PDF abran desde la web.

## Acceder desde otro lugar

Una vez publicado en GitHub Pages, podrás abrirlo desde cualquier dispositivo con internet usando la URL pública del repositorio. No necesitas que tu computador esté encendido porque GitHub aloja el sitio.

## Nota útil

Si luego quieres que la URL quede más limpia, puedes:

- renombrar el repositorio a algo corto, por ejemplo `savia-col`.
- usar un dominio propio más adelante.
