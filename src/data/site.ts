import type {
  BrandConfig,
  CtaItem,
  NavItem,
  SocialLink,
} from "./types";

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
  seo: { description: string };
  nav: NavItem[];
  navCta?: CtaItem;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badge?: string;
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
    subtitle: string;
    steps: { icon: string; title: string; description: string }[];
    cycleNote: string;
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
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
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

const WHATSAPP = "+573168216624";
const WHATSAPP_MSG =
  "Hola Recogras, quiero solicitar una recolección de aceite de cocina usado / trampa grasa.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MSG,
)}`;

export const data: ServiciosData = {
  brand: {
    name: "Recogras",
    initial: "R",
    tagline: "Recolección certificada de aceite usado y trampa grasa",
  },
  seo: {
    description:
      "Recolección certificada de aceite de cocina usado y trampa grasa en Cartagena y Bolívar. Gestor autorizado por el EPA, con certificado de disposición final.",
  },
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Certificación", href: "#certificacion" },
    { label: "Por qué reciclar", href: "#reciclaje" },
    { label: "Nosotros", href: "#filosofia" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  navCta: { label: "Solicitar recolección", href: WHATSAPP_LINK },
  hero: {
    eyebrow: "Recolección certificada · Cartagena, Colombia",
    title: "Convertimos un problema ambiental en una solución sostenible",
    subtitle:
      "Recolectamos aceite de cocina usado y trampa grasa de restaurantes, hoteles y establecimientos gastronómicos, con certificado de disposición final que respalda tu gestión ambiental.",
    badge: "Recolección ágil y eficiente",
    primaryCta: { label: "Solicitar recolección", href: WHATSAPP_LINK },
    secondaryCta: { label: "Conocer servicios", href: "#servicios" },
  },
  services: {
    title: "Nuestros servicios",
    subtitle: "Gestión integral de aceites y grasas residuales.",
    items: [
      {
        icon: "droplet",
        title: "Recolección de aceite usado",
        description:
          "Recolección certificada de aceite de cocina usado para restaurantes, hoteles y establecimientos gastronómicos.",
      },
      {
        icon: "sink",
        title: "Recolección de trampa grasa",
        description:
          "Recolección certificada de trampa grasa (lodo graso) con disposición final adecuada y responsable.",
      },
      {
        icon: "leaf",
        title: "Compra de aceites vegetales",
        description:
          "Compramos aceites residuales vegetales extraídos de plantas, semillas o frutos para su aprovechamiento.",
      },
      {
        icon: "beef",
        title: "Compra de grasas animales",
        description:
          "Compramos grasas animales residuales para reincorporarlas a nuevos procesos productivos.",
      },
    ],
  },
  about: {
    eyebrow: "El proceso del reciclaje",
    title: "Reciclar el aceite es darle una nueva vida",
    subtitle:
      "Recolectamos el aceite usado y lo llevamos a un buen destino para un futuro más sostenible.",
    steps: [
      {
        icon: "utensils",
        title: "Generación",
        description: "El aceite usado se genera en restaurantes y negocios.",
      },
      {
        icon: "truck",
        title: "Recolección",
        description: "Lo recolectamos de forma segura y responsable.",
      },
      {
        icon: "handshake",
        title: "Disposición",
        description: "Lo entregamos a aliados estratégicos que lo aprovechan.",
      },
      {
        icon: "sparkles",
        title: "Nuevos productos",
        description: "Los aliados lo convierten en biodiésel, jabones y más.",
      },
      {
        icon: "sprout",
        title: "Impacto positivo",
        description: "Cuidamos el agua, los suelos y el planeta.",
      },
    ],
    cycleNote: "Un proceso que le da un buen destino al aceite usado.",
  },
  philosophy: {
    eyebrow: "Quiénes somos",
    title: "Misión, visión y valores",
    mission: {
      icon: "target",
      title: "Nuestra misión",
      text: "Ser el aliado estratégico en soluciones integrales de recolección y logística de aceites de cocina usados, garantizando excelencia operativa, eficiencia y un compromiso inquebrantable con el cuidado del medio ambiente, generando valor compartido para nuestros clientes y el desarrollo sostenible de nuestra comunidad.",
    },
    vision: {
      icon: "telescope",
      title: "Nuestra visión",
      text: "Consolidarnos para el año 2030 como la empresa líder en la gestión logística de residuos orgánicos en la Costa Caribe, siendo reconocidos por nuestra innovación, calidad de servicio y nuestra contribución directa a la preservación del ecosistema regional.",
    },
    values: [
      {
        icon: "sprout",
        title: "Responsabilidad ambiental",
        description:
          "Nuestra razón de ser es transformar residuos en recursos, evitando la contaminación de fuentes hídricas y suelos.",
      },
      {
        icon: "gauge",
        title: "Eficiencia logística",
        description:
          "Optimizamos cada trayecto y proceso de recolección para ofrecer puntualidad, seguridad y orden en nuestras entregas y recogidas.",
      },
      {
        icon: "handshake",
        title: "Transparencia y confianza",
        description:
          "Construimos relaciones duraderas basadas en la honestidad, el cumplimiento de la normativa y la claridad en nuestros procesos.",
      },
      {
        icon: "users",
        title: "Compromiso con el aliado",
        description:
          "Entendemos las necesidades de nuestros clientes y actuamos como un socio que facilita su operación diaria.",
      },
    ],
  },
  certification: {
    eyebrow: "Certificación electrónica",
    title: "Certificados de disposición final que respaldan tu gestión",
    subtitle:
      "Recogras brinda a sus clientes certificados de disposición final del aceite de cocina usado y la trampa grasa, con respaldo electrónico verificable.",
    benefits: [
      {
        icon: "shield-check",
        title: "Evita la suplantación",
        description:
          "Certificación electrónica verificable que impide falsificaciones.",
      },
      {
        icon: "folder-check",
        title: "Soporte de todos los certificados",
        description: "Respaldo de cada recolección documentada a tu nombre.",
      },
      {
        icon: "database",
        title: "Almacenamiento seguro",
        description: "Conservamos tu certificación en nuestra base de datos.",
      },
      {
        icon: "mail-check",
        title: "Envío por correo electrónico",
        description: "Recibes tus certificados directamente en tu correo.",
      },
      {
        icon: "file-check",
        title: "Incluida en tu reporte anual",
        description:
          "La recolección se incluye en el reporte anual presentado a la entidad ambiental estatal correspondiente.",
      },
      {
        icon: "route",
        title: "Trazabilidad documentada",
        description:
          "Seguimiento de cada recolección, desde el origen hasta su disposición final.",
      },
    ],
  },
  authorization: {
    eyebrow: "Autorización oficial",
    title: "Gestor de Aceites de Cocina Usado autorizado por el EPA-Cartagena",
    text: "Recogras está inscrita ante el Establecimiento Público Ambiental (EPA-Cartagena) como gestor de Aceites de Cocina Usado (ACU) desde el 26 de mayo de 2025, conforme a la Resolución 0316 de 2018. Operamos con los permisos y el respaldo de la autoridad ambiental.",
    facts: [
      "Oficio EPA-OFI-002903-2025",
      "Inscritos desde el 26 de mayo de 2025",
      "Resolución 0316 de 2018",
      "Capacidad autorizada: 10.000 kg/mes",
    ],
    pdfLabel: "Descargar certificado",
    pdfUrl: "/docs/certificado-epa-recogras.pdf",
    verifyLabel: "Verificar autenticidad",
    verifyUrl:
      "https://sigob.cartagena.gov.co/SeguimientoCorrespondencia?ID=tF7KjaGPrzZmwF0bt7GhVA==",
  },
  cta: {
    title: "¿Listo para gestionar tus residuos de forma responsable?",
    subtitle:
      "Solicita tu recolección de aceite usado o trampa grasa y recibe tu certificado de disposición final.",
    button: { label: "Solicitar recolección", href: WHATSAPP_LINK },
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos tus dudas",
    subtitle:
      "Lo que más nos preguntan sobre el manejo y aprovechamiento del aceite de cocina usado.",
    items: [
      {
        q: "¿Qué utilidad tienen los residuos de aceites usados y grasas?",
        a: "Se usan como materia prima en la fabricación de biodiésel, jabonería, oleoquímica y alimento de animales.",
      },
      {
        q: "¿Cómo darle un buen manejo al aceite usado de cocina?",
        a: "Se debe almacenar sin residuos y sin agua, en un envase apropiado.",
      },
      {
        q: "¿Dónde debo colocar los envases que contengan el aceite usado de cocina?",
        a: "Se recomienda almacenarlos en pimpinas dentro de una canasta, para prevenir que los derrames se salgan, y envasar con precaución con la ayuda de un embudo.",
      },
      {
        q: "¿Cómo certifico a mi personal del restaurante en el manejo del aceite usado de cocina?",
        a: "Nosotros hacemos inducciones sobre el manejo adecuado y lo certificamos.",
      },
    ],
  },
  contact: {
    title: "Hablemos de tu recolección",
    subtitle:
      "Escríbenos por WhatsApp o correo y coordinamos tu recolección certificada.",
    email: "info@recograscolombia.com",
    whatsapp: WHATSAPP,
    whatsappLink: WHATSAPP_LINK,
    address: "Calle 72 #cr 65, Mamonal, Cartagena de Indias, Bolívar",
    coverage: "Cartagena y todo el departamento de Bolívar",
    mapUrl: "https://maps.app.goo.gl/PY1zk3aMonrPtdvGA",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=10.3455222,-75.4880443&z=15&hl=es&output=embed",
    geo: { lat: 10.3455222, lng: -75.4880443 },
    hours: "Atención toda la semana por WhatsApp",
  },
  footer: {
    description:
      "Recolección certificada de aceite de cocina usado y trampa grasa en Cartagena y el departamento de Bolívar. Ayudamos al medio ambiente y colaboramos con la economía circular.",
    socials: [{ type: "whatsapp", url: WHATSAPP_LINK }],
    copyright: "© 2026 Recogras S.A.S. Todos los derechos reservados.",
  },
};
