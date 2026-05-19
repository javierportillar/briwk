# Savia Col.

Proyecto estático de e-commerce para una actividad universitaria, basado en la propuesta de negocio del PDF `E bussines - E commerce.pdf` y el documento `E bussiness corte 3.docx`.

## Qué incluye

- Home y comunicación de marca alineados con la propuesta de Savia Col. Despensa Saludable S.A.S.
- Catálogo filtrable con búsqueda.
- Ficha dinámica de producto por `slug`.
- Páginas de envíos, privacidad y términos.
- Página de propuesta de negocio en [pages/informe-academico.html](pages/informe-academico.html).
- Dataset ficticio en [docs/dataset-ficticio-marzo-2026.csv](docs/dataset-ficticio-marzo-2026.csv).
- Documento de soporte actualizado para entregar con la URL Web App.

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
cd "/Users/javierportillarosero/Documents/PROG/briwk"
python3 -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

## Link de entrega

```text
https://briyithestrada-90ab7.web.app/
```

## Qué revisar antes de entregar

- Que cargue la portada.
- Que abra [pages/catalogo.html](pages/catalogo.html).
- Que funcione [pages/producto.html](pages/producto.html) con query string, por ejemplo:

```text
https://briyithestrada-90ab7.web.app/pages/producto.html?slug=combo-despensa-esencial
```

- Que los cambios de idioma respondan.
- Que el carrito demostrativo sume productos.
- Que el CSV y el PDF abran desde la web.
- Que [pages/informe-academico.html](pages/informe-academico.html) muestre la Unidad 3 con semanas 11 a 17.
