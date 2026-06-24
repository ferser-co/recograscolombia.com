# Recogras — recograscolombia.com

Sitio web de **Recogras**: recolección certificada de aceite de cocina usado y
trampa grasa en Cartagena y el departamento de Bolívar. Landing de una sola
página construida con Astro y Tailwind CSS, optimizada para SEO y rendimiento.

## Stack

- [Astro](https://astro.build) 5 (salida estática)
- [Tailwind CSS](https://tailwindcss.com) 4
- Iconos [Lucide](https://lucide.dev) renderizados como SVG en build (cero JS)
- Fuente Inter auto-alojada (subconjunto latino variable)

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve el build
npm run gen:og    # regenera public/og.png
```

## Contenido

Todo el texto, los servicios y los datos de contacto viven en
**`src/templates/servicios/data.ts`**. El número de WhatsApp se controla con una
sola constante (`WHATSAPP`) y alimenta todos los botones "Solicitar recolección".

## Despliegue

Genera un sitio estático en `dist/` que se despliega en el hosting de Hostinger
(plan Premium) subiendo el contenido de `dist/` a `public_html` por SSH/SCP. El
servidor no compila: se sube el build ya generado.

El `public/.htaccess` configura compresión, caché de larga duración para los
assets versionados y cabeceras de seguridad.

## Optimización de rendimiento

- CSS crítico inlineado (sin hojas de estilo que bloqueen el render).
- Fuente local con `preload` + `font-display: swap`.
- Mapa de Google cargado bajo demanda (facade), no en la carga inicial.
- Hero sin animación de entrada para un LCP inmediato.
