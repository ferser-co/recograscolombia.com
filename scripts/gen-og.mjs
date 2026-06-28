// Genera public/og.png (1200×630) con la identidad de Recogras.
// Uso: node scripts/gen-og.mjs

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

const out = path.resolve(here, "../public/og.png");
const logoPath = path.resolve(here, "../public/img/logo-recogras.webp");

// --- Logo: redimensionado y con sus dimensiones reales ---
const LOGO_WIDTH = 540;

const logoSharp = sharp(logoPath).resize({
  width: LOGO_WIDTH,
  fit: "inside",
});

const logo = await logoSharp.toBuffer();
const logoMeta = await sharp(logo).metadata();
const logoW = logoMeta.width;
const logoH = logoMeta.height;

// --- Tarjeta blanca que contiene el logo ---
const PAD = 40; // espacio interno de la tarjeta
const CARD_X = 80;
const CARD_Y = 56;
const CARD_W = logoW + PAD * 2;
const CARD_H = logoH + PAD * 2;

// Posición del logo (centrado dentro de la tarjeta)
const LOGO_LEFT = CARD_X + PAD;
const LOGO_TOP = CARD_Y + PAD;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#176b9e"/>
      <stop offset="1" stop-color="#0e3148"/>
    </linearGradient>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="18" flood-color="#000000" flood-opacity="0.28"/>
    </filter>
  </defs>

  <!-- Fondo -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Motivos decorativos sutiles -->
  <circle cx="1080" cy="120" r="260" fill="#ffffff" opacity="0.045"/>
  <circle cx="1080" cy="120" r="160" fill="#2e9e8c" opacity="0.08"/>

  <!-- Tarjeta blanca para que el logo resalte -->
  <rect
    x="${CARD_X}"
    y="${CARD_Y}"
    width="${CARD_W}"
    height="${CARD_H}"
    rx="24"
    fill="#ffffff"
    filter="url(#cardShadow)"
  />

  <!-- Titular -->
  <text
    x="${CARD_X}"
    y="${CARD_Y + CARD_H + 96}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="62"
    font-weight="800"
    fill="#ffffff"
  >
    Recolección certificada de
  </text>

  <text
    x="${CARD_X}"
    y="${CARD_Y + CARD_H + 166}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="62"
    font-weight="800"
    fill="#ffffff"
  >
    aceite usado y trampa grasa
  </text>

  <rect
    x="${CARD_X}"
    y="${CARD_Y + CARD_H + 192}"
    width="120"
    height="7"
    rx="3.5"
    fill="#e2a832"
  />

  <!-- Subtítulo -->
  <text
    x="${CARD_X}"
    y="${CARD_Y + CARD_H + 256}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="30"
    font-weight="500"
    fill="#d4e8f4"
  >
    Certificado de disposición final · Economía circular
  </text>

  <!-- Pie -->
  <text
    x="${CARD_X}"
    y="582"
    font-family="Arial, Helvetica, sans-serif"
    font-size="28"
    font-weight="700"
    fill="#e2a832"
  >
    recograscolombia.com
  </text>

  <text
    x="${CARD_X + 350}"
    y="582"
    font-family="Arial, Helvetica, sans-serif"
    font-size="28"
    font-weight="500"
    fill="#aed3e9"
  >
    Cartagena de Indias, Colombia
  </text>
</svg>
`;

// Fondo + textos
const background = await sharp(Buffer.from(svg)).png().toBuffer();

// Composición final: tarjeta + logo encima
await sharp(background)
  .composite([
    {
      input: logo,
      left: LOGO_LEFT,
      top: LOGO_TOP,
    },
  ])
  .png()
  .toFile(out);

console.log("og.png generado en", out);
