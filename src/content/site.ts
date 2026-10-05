/**
 * All copy for coopmultiamericas.com. Texts come from the original site, lightly polished.
 */

export const site = {
  name: "Cooperativa Multiactiva Las Américas",
  shortName: "Multiamericas",
  legalName: "Cooperativa Multiactiva de Aporte y Crédito Las Américas — MULTIAMERICAS",
  url: "https://coopmultiamericas.com",
  foundedYear: 1998,
  tagline:
    "Somos una entidad cooperativa de aporte y crédito comprometida en satisfacer con calidad y eficiencia las necesidades de nuestros asociados.",
  description:
    "Cooperativa de aporte y crédito en Bogotá, desde 1998. Aportes con beneficios, crédito de libre inversión, educativo y solidario, seguros y bienestar para el asociado y su familia.",
  phone: "+57 315 365 2532",
  phoneHref: "tel:+573153652532",
  whatsapp: "573153652532",
  emails: {
    service: "servicioalcliente@coopmultiamericas.com",
    legal: "notificacionesjudiciales@coopmultiamericas.com",
  },
  address: { city: "Bogotá", country: "Colombia" },
  nav: [
    { href: "/quienes-somos", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/simulador", label: "Simulador" },
    { href: "/asociarme", label: "Asociarme" },
    { href: "/atencion", label: "Atención" },
  ],
} as const;

/**
 * Colombian monthly minimum wage (SMMLV) used by the simulator and admission fee.
 * 2026: $1.750.905 (Decretos 1469 y 1470 de 2025). Update every January.
 */
export const smmlv = { year: 2026, value: 1_750_905 };

/** Social contribution paid once when joining (COP). */
export const entryContribution = 70_000;

export const hero = {
  badge: "Cooperativa de aporte y crédito",
  title: "Juntos construimos un futuro próspero y solidario.",
  message:
    "¡Gracias por ser parte de nuestra cooperativa! Su compromiso y esfuerzo son el motor que impulsa nuestro crecimiento. Juntos alcanzaremos grandes logros.",
};

export const quickServices = [
  { key: "aporte", title: "Aporte", text: "Ahorra con rendimientos y exento del 4×1000.", href: "/servicios#aportes" },
  { key: "credito", title: "Crédito", text: "Libre inversión, educativo y solidario.", href: "/servicios#creditos" },
  { key: "portal", title: "Portal transaccional", text: "Consulta tus productos en línea.", href: "/atencion" },
  { key: "bienestar", title: "Bienestar social", text: "Educación, recreación y solidaridad.", href: "/asociarme#beneficios" },
  { key: "pagos", title: "Canales de pago", text: "Paga tus aportes y cuotas fácilmente.", href: "/atencion" },
  { key: "negocio", title: "Impulsa tu negocio", text: "Crédito para hacer crecer tus ideas.", href: "/simulador" },
] as const;

export const about = {
  intro:
    "Somos una cooperativa creada en 1998, con más de dos décadas de actividad en el sector cooperativo, aportando a nuestra sociedad colaboración mutua y equitativa para construir, solidariamente, una sociedad más justa.",
  mission:
    "Contribuimos al mejoramiento de la calidad de vida y al bienestar del asociado y su grupo familiar, brindando aporte y crédito con calidad y fundamentando nuestro actuar en los principios y valores cooperativos como parte integral de nuestra cultura organizacional.",
  vision:
    "En 2028 seremos líderes entre las cooperativas de aporte y crédito, reconocidos como una organización eficiente que mejora la calidad de vida del asociado y su grupo familiar, con base en los principios y valores cooperativos.",
  principles: [
    "Adhesión libre, voluntaria, abierta y responsable.",
    "Participación económica de los asociados en justicia y equidad.",
    "Cooperación entre cooperativas.",
    "Gestión democrática, participativa, autogestionaria y emprendedora.",
    "Autonomía, independencia, autodeterminación y autogobierno.",
    "Educación, formación e información de manera permanente, oportuna y progresiva.",
    "Interés por la comunidad.",
  ],
  values: [
    { title: "Servicio", text: "Búsqueda constante de superar las expectativas de nuestros asociados." },
    { title: "Integridad", text: "Actuar con rectitud." },
    { title: "Cumplimiento", text: "Hacer realidad las promesas pactadas." },
    { title: "Respeto", text: "Reconocer, aceptar y valorar las cualidades y derechos de los demás." },
    { title: "Participación", text: "Igualdad para todos y ejercicio democrático de nuestra gestión." },
  ],
};

export const portfolio = {
  intro:
    "Un portafolio diseñado especialmente para ti y tu familia. Muchos asociados ya disfrutan de nuestros productos y servicios, con atención personalizada y un servicio posventa efectivo.",
  contribution: {
    title: "Aporte contractual",
    text: "Deposita durante un período definido una cuantía pactada con la cooperativa y retírala al final del período con sus intereses. Las tasas de rendimiento las aprueba el Consejo de Administración de acuerdo con la tasa promedio del DTF y las del sector financiero, dentro de los parámetros de concentración de riesgo.",
    benefits: [
      "Exento del cuatro por mil (4×1000).",
      "Inembargabilidad de los saldos hasta la cuantía máxima legal autorizada.",
      "Restitución del depósito a los herederos del titular fallecido, sin juicio de sucesión, hasta la cuantía máxima legal.",
      "Participación en actividades de promoción premiadas según el plan de incentivos.",
    ],
  },
  credits: [
    {
      key: "libre",
      title: "Crédito de libre inversión",
      text: "Créditos de consumo para nuestros asociados, estudiados por el Comité de Crédito o el Consejo de Administración según su competencia.",
      amount: "Hasta 60 SMMLV",
      term: "Hasta 60 meses",
      maxSmmlv: 60,
      maxMonths: 60,
    },
    {
      key: "educativo",
      title: "Crédito educativo",
      text: "Para la matrícula del asociado o de su grupo familiar, en condiciones favorables y a costos razonables. Posgrados, especializaciones y doctorados tienen el plazo normal del crédito de consumo.",
      amount: "Hasta el 100% de la matrícula",
      term: "Hasta 6 meses",
      maxSmmlv: 60,
      maxMonths: 6,
    },
    {
      key: "solidario",
      title: "Crédito solidario",
      text: "Para atender una calamidad doméstica: situaciones fortuitas o de fuerza mayor que afecten la vida, la salud o los bienes del asociado o de su familia directa. Requiere estar al día en los aportes sociales.",
      amount: "Hasta 8 SMMLV",
      term: "Hasta 30 meses",
      maxSmmlv: 8,
      maxMonths: 30,
    },
  ],
  educationRequirements: [
    "Llevar como mínimo un año laborando en la empresa, con contrato a término indefinido o por igual plazo que el crédito.",
    "Presentar un codeudor que cumpla las mismas características del solicitante.",
    "Si no tienes el ingreso o el tiempo en la empresa, debes cumplir los requisitos de estudiante no trabajador.",
  ],
  educationDocs: [
    { doc: "Solicitud de afiliación", applicant: true, cosigner: false },
    { doc: "Liquidación de matrícula (fotocopia)", applicant: true, cosigner: false },
    { doc: "Solicitud de crédito diligenciada", applicant: true, cosigner: true },
    { doc: "Documento de identidad (fotocopia)", applicant: true, cosigner: true },
    { doc: "Carta laboral (original)", applicant: true, cosigner: true },
    { doc: "Última colilla de pago", applicant: true, cosigner: true },
  ],
  insurance: [
    "Seguros para vehículo",
    "Seguros de vida",
    "Seguros de salud",
    "Portafolio de inversiones",
    "SOAT",
    "Seguros para el hogar",
    "Planes individuales y grupales",
  ],
};

export const membership = {
  definition:
    "Son asociados de MULTIAMERICAS las personas naturales y jurídicas que firmaron el acta de constitución, o que se adhirieron después, y que permanecen afiliadas y debidamente inscritas en el registro social.",
  natural: [
    "Ser legalmente capaz, o menor de edad con 14 años cumplidos (o menor que se asocie a través de su representante legal).",
    "Comprobar buena conducta y gozar de buen crédito.",
    "Residir en Colombia.",
    "Suscribir y pagar el aporte social de ingreso de $70.000, pagado en su totalidad al ingresar.",
    "Pagar la cuota de admisión que reglamente el Consejo de Administración.",
  ],
  legal: [
    "Ser persona jurídica sin ánimo de lucro o entidad de derecho público que se adhiera a los estatutos.",
    "Suscribir aportes sin superar el 49% del capital social.",
    "Presentar el acta del organismo que aprobó la vinculación.",
    "Acreditar existencia y representación legal.",
  ],
  rights: [
    "Realizar con la cooperativa todas las operaciones propias de su objeto social.",
    "Participar en la administración: elegir, ser elegido y desempeñar cargos sociales.",
    "Asistir a las asambleas y votar: un voto por asociado hábil.",
    "Gozar de los beneficios y prerrogativas de la cooperativa.",
    "Fiscalizar la gestión económica examinando los libros, según lo acuerde el Consejo de Administración.",
    "Presentar proyectos o iniciativas para mejorar la cooperativa.",
    "Presentar quejas ante la Junta de Vigilancia y el organismo gubernamental competente.",
    "Beneficiarse de los programas educativos, recreativos y culturales.",
    "Retirarse voluntariamente mientras la cooperativa no se haya disuelto y no tenga obligaciones pendientes.",
    "Ser informado de la gestión de la cooperativa según los estatutos.",
  ],
  rightsNote:
    "Estos derechos los ejercen los asociados que están al día con sus obligaciones económicas y demás deberes estatutarios y reglamentarios.",
  duties: [
    "Comportarse con espíritu cooperativo y solidario.",
    "Conocer los principios del cooperativismo y los estatutos de la entidad.",
    "Cumplir las obligaciones derivadas del acuerdo cooperativo.",
    "Acatar las decisiones de los organismos de administración y vigilancia.",
    "Utilizar los servicios de la cooperativa.",
    "Asistir a las asambleas generales.",
    "Cumplir a cabalidad las labores que se le confieran.",
    "Pagar los aportes sociales según los estatutos.",
    "Informar oportunamente cambios de domicilio y dirección.",
    "Abstenerse de actos que afecten la estabilidad económica o el prestigio de la cooperativa.",
  ],
  benefits: {
    general: [
      { title: "Seguro de vida “Grupo deudores”", text: "Cubre a los asociados y su grupo familiar y cancela el saldo adeudado a MULTIAMERICAS." },
      { title: "Seguro de vida “Grupo aportes y crédito”", text: "Reconoce hasta dos veces los aportes sociales y demás ahorros del asociado en caso de muerte accidental." },
    ],
    social: [
      { title: "Fondo de educación y capacitación", text: "Formación en cooperativismo, talleres y crecimiento personal y empresarial para asociados, directivos y empleados." },
      { title: "Recreación e integración", text: "Actividades periódicas de esparcimiento e integración del asociado con su núcleo familiar." },
      { title: "Fondo de solidaridad", text: "Auxilios por calamidad doméstica comprobada para el asociado y su grupo familiar." },
    ],
  },
};

export const service = {
  intro:
    "Al comunicarte con un asesor de MULTIAMERICAS recibes asesoría personalizada en línea, con claridad en la información y calidad en la atención. Te evitas desplazarte hasta nuestras instalaciones.",
  topics: [
    "Cómo vincularte como asociado o ahorrador",
    "Asesoría de productos y servicios",
    "Estado de tu solicitud de crédito",
    "Canales de atención y recaudo",
    "Acceso a la agencia virtual y demás servicios",
    "Eventos culturales y recreativos",
    "Quejas, reclamos y opiniones",
  ],
};
