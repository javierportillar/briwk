# Savia Col.

Proyecto estático de e-commerce para una actividad universitaria, basado en la propuesta de negocio del PDF `E bussines - E commerce.pdf` y preparado para publicarse en GitHub Pages.

## Qué incluye

- Home y comunicación de marca alineados con la propuesta de Savia Col. Despensa Saludable S.A.S.
- Catálogo filtrable con búsqueda.
- Ficha dinámica de producto por `slug`.
- Páginas de envíos, privacidad y términos.
- Página de propuesta de negocio en [pages/informe-academico.html](pages/informe-academico.html).
- Dataset ficticio en [docs/dataset-ficticio-marzo-2026.csv](docs/dataset-ficticio-marzo-2026.csv).
- Flujo listo para publicar en GitHub Pages.

## Estructura

```text
pag_web/
├── index.html
├── .nojekyll
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
├── docs/
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

### Opción recomendada: Deploy desde rama

Este proyecto es HTML, CSS y JavaScript estático. No necesita pipeline de build, así que la forma más simple y estable de publicarlo es directamente desde la rama `main`.

#### Pasos

1. Sube esta carpeta completa al repositorio.
2. Ve a `Settings` → `Pages`.
3. En `Build and deployment`, selecciona:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
4. Guarda.
5. Espera 1 o 2 minutos.

La URL pública tendrá este formato:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

En este caso, si tu repo sigue siendo `briwk`, la dirección esperada es:

```text
https://javierportillar.github.io/briwk/
```

### Si habías activado GitHub Actions

Si ves errores del workflow al estilo `Get Pages site failed`, no es un error del sitio: significa que el repositorio no tenía Pages habilitado para Actions. Como este proyecto no necesita build, es mejor usar `Deploy from a branch` y no depender de ese workflow.

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
