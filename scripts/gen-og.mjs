// Genera public/og.png (1200×630) con la identidad de Recogras.
// Uso: node scripts/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../public/og.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#176b9e"/>
      <stop offset="1" stop-color="#123f5a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Motivos decorativos -->
  <circle cx="1010" cy="150" r="230" fill="#ffffff" opacity="0.05"/>
  <circle cx="1010" cy="150" r="150" fill="#2e9e8c" opacity="0.10"/>

  <!-- Emblema: globo + gota dorada -->
  <g transform="translate(80,70)">
    <rect width="84" height="84" rx="20" fill="#ffffff" opacity="0.10"/>
    <circle cx="34" cy="40" r="22" fill="#2e9e8c"/>
    <ellipse cx="34" cy="40" rx="22" ry="22" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="2"/>
    <path d="M60 28 C70 42, 76 50, 76 60 a16 16 0 0 1 -32 0 C44 50, 50 42, 60 28 Z" fill="#e2a832" stroke="#ffffff" stroke-width="1.5"/>
  </g>
  <text x="184" y="125" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="800" fill="#ffffff">Recogras</text>

  <!-- Titular -->
  <text x="80" y="285" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" fill="#ffffff">Recolección certificada de</text>
  <text x="80" y="360" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" fill="#ffffff">aceite usado y trampa grasa</text>

  <rect x="82" y="392" width="120" height="7" rx="3.5" fill="#e2a832"/>

  <!-- Subtítulo -->
  <text x="80" y="460" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="500" fill="#d4e8f4">Certificado de disposición final · Economía circular</text>

  <!-- Pie -->
  <text x="80" y="560" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#e2a832">recograscolombia.com</text>
  <text x="430" y="560" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="500" fill="#aed3e9">Cartagena de Indias, Colombia</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('og.png generado en', out);
