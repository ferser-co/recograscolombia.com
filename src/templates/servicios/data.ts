import type { BrandConfig, CtaItem, NavItem, SocialLink } from '../_shared/types';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface PillarItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiciosData {
  brand: BrandConfig;
  nav: NavItem[];
  navCta?: CtaItem;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CtaItem;
    secondaryCta?: CtaItem;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    pillars: PillarItem[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    mission: { icon: string; title: string; text: string };
    vision: { icon: string; title: string; text: string };
    values: ValueItem[];
  };
  certification: {
    eyebrow: string;
    title: string;
    subtitle: string;
    benefits: BenefitItem[];
  };
  authorization: {
    eyebrow: string;
    title: string;
    text: string;
    facts: string[];
    pdfLabel: string;
    pdfUrl: string;
    verifyLabel: string;
    verifyUrl: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: CtaItem;
  };
  contact: {
    title: string;
    subtitle: string;
    phone?: string;
    email: string;
    whatsapp: string;
    whatsappLink: string;
    address: string;
    coverage: string;
    mapUrl: string;
    mapEmbedUrl: string;
    geo: { lat: number; lng: number };
    hours?: string;
  };
  footer: {
    description: string;
    socials: SocialLink[];
    copyright: string;
  };
}

// ── Fuente única del WhatsApp ───────────────────────────────────────────────
// TODO: reemplazar por el número real del cliente antes del despliegue.
const WHATSAPP = '+573505328098';
const WHATSAPP_MSG =
  'Hola Recogras, quiero solicitar una recolección de aceite de cocina usado / trampa grasa.';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
  WHATSAPP_MSG,
)}`;

export const data: ServiciosData = {
  brand: {
    name: 'Recogras',
    initial: 'R',
    tagline: 'Recolección certificada de aceite usado y trampa grasa',
  },
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Certificación', href: '#certificacion' },
    { label: 'Por qué reciclar', href: '#reciclaje' },
    { label: 'Nosotros', href: '#filosofia' },
    { label: 'Contacto', href: '#contacto' },
  ],
  navCta: { label: 'Solicitar recolección', href: WHATSAPP_LINK },
  hero: {
    eyebrow: 'Recolección certificada · Cartagena, Colombia',
    title: 'Convertimos un problema ambiental en una solución sostenible',
    subtitle:
      'Recolectamos aceite de cocina usado y trampa grasa de restaurantes, hoteles y establecimientos gastronómicos, con certificado de disposición final que respalda tu gestión ambiental.',
    primaryCta: { label: 'Solicitar recolección', href: WHATSAPP_LINK },
    secondaryCta: { label: 'Conocer servicios', href: '#servicios' },
  },
  services: {
    title: 'Nuestros servicios',
    subtitle: 'Gestión integral de aceites y grasas residuales.',
    items: [
      {
        icon: 'droplet',
        title: 'Recolección de aceite usado',
        description:
          'Recolección certificada de aceite de cocina usado para restaurantes, hoteles y establecimientos gastronómicos.',
      },
      {
        icon: 'waves',
        title: 'Recolección de trampa grasa',
        description:
          'Recolección certificada de trampa grasa (lodo graso) con disposición final adecuada y responsable.',
      },
      {
        icon: 'leaf',
        title: 'Compra de aceites vegetales',
        description:
          'Compramos aceites residuales vegetales extraídos de plantas, semillas o frutos para su aprovechamiento.',
      },
      {
        icon: 'beef',
        title: 'Compra de grasas animales',
        description:
          'Compramos grasas animales residuales para reincorporarlas a nuevos procesos productivos.',
      },
    ],
  },
  about: {
    eyebrow: '¿Por qué reciclar el aceite es importante?',
    title: 'Cada litro de aceite reciclado cuenta',
    paragraphs: [
      'Cuando el aceite usado se desecha en desagües, suelos o cuerpos de agua, genera contaminación, afecta los ecosistemas y ocasiona problemas en los sistemas de alcantarillado.',
      'Por eso promovemos una gestión responsable que protege el medio ambiente y contribuye al desarrollo sostenible de la ciudad. En Recogras ayudamos a restaurantes, hoteles y establecimientos gastronómicos a cumplir con sus responsabilidades ambientales mediante la recolección de aceite usado y la entrega de certificados que respaldan su correcta gestión.',
    ],
    pillars: [
      {
        icon: 'droplets',
        title: 'Protegemos el agua y el suelo',
        description: 'Evitamos que el aceite contamine cuerpos de agua, suelos y alcantarillado.',
      },
      {
        icon: 'leaf',
        title: 'Reducimos el impacto ambiental',
        description: 'Una gestión responsable que protege los ecosistemas de la ciudad.',
      },
      {
        icon: 'recycle',
        title: 'Impulsamos la economía circular',
        description:
          'Transformamos un residuo en un recurso aprovechable, dándole una segunda vida útil.',
      },
      {
        icon: 'badge-check',
        title: 'Respaldamos tu cumplimiento',
        description:
          'Entregamos certificados de disposición final que soportan tu gestión ante la entidad ambiental.',
      },
    ],
  },
  philosophy: {
    eyebrow: 'Quiénes somos',
    title: 'Misión, visión y valores',
    mission: {
      icon: 'target',
      title: 'Nuestra misión',
      text: 'Ser el aliado estratégico en soluciones integrales de recolección y logística de aceites de cocina usados, garantizando excelencia operativa, eficiencia y un compromiso inquebrantable con el cuidado del medio ambiente, generando valor compartido para nuestros clientes y el desarrollo sostenible de nuestra comunidad.',
    },
    vision: {
      icon: 'telescope',
      title: 'Nuestra visión',
      text: 'Consolidarnos para el año 2030 como la empresa líder en la gestión logística de residuos orgánicos en la Costa Caribe, siendo reconocidos por nuestra innovación, calidad de servicio y nuestra contribución directa a la preservación del ecosistema regional.',
    },
    values: [
      {
        icon: 'sprout',
        title: 'Responsabilidad ambiental',
        description:
          'Nuestra razón de ser es transformar residuos en recursos, evitando la contaminación de fuentes hídricas y suelos.',
      },
      {
        icon: 'gauge',
        title: 'Eficiencia logística',
        description:
          'Optimizamos cada trayecto y proceso de recolección para ofrecer puntualidad, seguridad y orden en nuestras entregas y recogidas.',
      },
      {
        icon: 'handshake',
        title: 'Transparencia y confianza',
        description:
          'Construimos relaciones duraderas basadas en la honestidad, el cumplimiento de la normativa y la claridad en nuestros procesos.',
      },
      {
        icon: 'users',
        title: 'Compromiso con el aliado',
        description:
          'Entendemos las necesidades de nuestros clientes y actuamos como un socio que facilita su operación diaria.',
      },
    ],
  },
  certification: {
    eyebrow: 'Certificación electrónica',
    title: 'Certificados de disposición final que respaldan tu gestión',
    subtitle:
      'Recogras brinda a sus clientes certificados de disposición final del aceite de cocina usado y la trampa grasa, con respaldo electrónico verificable.',
    benefits: [
      {
        icon: 'shield-check',
        title: 'Evita la suplantación',
        description: 'Certificación electrónica verificable que impide falsificaciones.',
      },
      {
        icon: 'folder-check',
        title: 'Soporte de todos los certificados',
        description: 'Respaldo de cada recolección documentada a tu nombre.',
      },
      {
        icon: 'database',
        title: 'Almacenamiento seguro',
        description: 'Conservamos tu certificación en nuestra base de datos.',
      },
      {
        icon: 'mail-check',
        title: 'Envío por correo electrónico',
        description: 'Recibes tus certificados directamente en tu correo.',
      },
      {
        icon: 'file-check',
        title: 'Incluida en tu reporte anual',
        description:
          'La recolección se incluye en el reporte anual presentado a la entidad ambiental estatal correspondiente.',
      },
      {
        icon: 'route',
        title: 'Trazabilidad documentada',
        description:
          'Seguimiento de cada recolección, desde el origen hasta su disposición final.',
      },
    ],
  },
  authorization: {
    eyebrow: 'Autorización oficial',
    title: 'Gestor de Aceites de Cocina Usado autorizado por el EPA-Cartagena',
    text: 'Recogras está inscrita ante el Establecimiento Público Ambiental (EPA-Cartagena) como gestor de Aceites de Cocina Usado (ACU) desde el 26 de mayo de 2025, conforme a la Resolución 0316 de 2018. Operamos con los permisos y el respaldo de la autoridad ambiental.',
    facts: [
      'Oficio EPA-OFI-002903-2025',
      'Inscritos desde el 26 de mayo de 2025',
      'Resolución 0316 de 2018',
      'Capacidad autorizada: 10.000 kg/mes',
    ],
    pdfLabel: 'Descargar certificado',
    pdfUrl: '/docs/certificado-epa-recogras.pdf',
    verifyLabel: 'Verificar autenticidad',
    verifyUrl:
      'https://sigob.cartagena.gov.co/SeguimientoCorrespondencia?ID=tF7KjaGPrzZmwF0bt7GhVA==',
  },
  cta: {
    title: '¿Listo para gestionar tus residuos de forma responsable?',
    subtitle:
      'Solicita tu recolección de aceite usado o trampa grasa y recibe tu certificado de disposición final.',
    button: { label: 'Solicitar recolección', href: WHATSAPP_LINK },
  },
  contact: {
    title: 'Hablemos de tu recolección',
    subtitle: 'Escríbenos por WhatsApp o correo y coordinamos tu recolección certificada.',
    email: 'info@recograscolombia.com',
    whatsapp: WHATSAPP,
    whatsappLink: WHATSAPP_LINK,
    address: 'Calle 72 #cr 65, Mamonal, Cartagena de Indias, Bolívar',
    coverage: 'Cartagena y todo el departamento de Bolívar',
    mapUrl: 'https://maps.app.goo.gl/PY1zk3aMonrPtdvGA',
    mapEmbedUrl: 'https://maps.google.com/maps?q=10.3455222,-75.4880443&z=15&hl=es&output=embed',
    geo: { lat: 10.3455222, lng: -75.4880443 },
  },
  footer: {
    description:
      'Recolección certificada de aceite de cocina usado y trampa grasa en Cartagena y el departamento de Bolívar. Ayudamos al medio ambiente y colaboramos con la economía circular.',
    socials: [{ type: 'whatsapp', url: WHATSAPP_LINK }],
    copyright: '© 2026 Recogras. Todos los derechos reservados.',
  },
};
