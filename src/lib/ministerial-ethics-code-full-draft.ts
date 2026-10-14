/**
 * REN-DOC-011 — CÓDIGO DE ÉTICA MINISTERIAL Y CONDUCTA INSTITUCIONAL DE RENACER
 *
 * DOCUMENTO MAESTRO INSTITUCIONAL
 * Nivel: NIVEL_4_MANUAL_INSTITUCIONAL
 * Categoría: ETICA_Y_CONDUCTA
 * Estado Documental: EN_REDACCION (Borrador institucional — No adoptado)
 * Estado Legal: REQUIERE_REVISION_LEGAL
 * Estado de Decisión: DEFINIDA
 *
 * Este código establece las normas de santidad, integridad, transparencia, salvaguardas
 * de protección a personas vulnerables, límites pastorales, custodia financiera y debido proceso
 * aplicables a todos los ministros, pastores, líderes, docentes y servidores de RENACER.
 */

export interface EthicsArticle {
  number: number;
  title: string;
  content: string;
  decisionRefs: string[];
  requiresLegalReview: boolean;
  isPendingDefinition?: boolean;
}

export interface EthicsTitleSection {
  titleNumber: string;
  titleName: string;
  summary: string;
  articles: EthicsArticle[];
  decisions: string[];
  superiorDocRefs: string[];
  requiresLegalReview: boolean;
}

export interface EthicsFormItem {
  code: string;
  name: string;
  purpose: string;
  frequencyOrTrigger: string;
  custodyDoc: string;
  status: "ESTABLECIDO" | "PROPUESTO" | "PENDIENTE_DEFINIR";
}

export const MINISTERIAL_ETHICS_DRAFT = {
  documentId: "doc-ren-011",
  documentNumber: "REN-DOC-011",
  title: "CÓDIGO DE ÉTICA MINISTERIAL Y CONDUCTA INSTITUCIONAL DE RENACER",
  shortTitle: "Código de Ética y Conducta",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "ETICA_Y_CONDUCTA",
  subcategory: "Ética, Salvaguardas, Integridad y Conducta Ministerial",
  status: "EN_REDACCION",
  adoptionStatus: "NO_ADOPTADA",
  legalStatus: "REQUIERE_REVISION_LEGAL",
  decisionState: "DEFINIDA",
  version: "0.1",
  owner: "Pastor Fundador / Consejo Ministerial",
  author: "Pastor Fundador / Consejo Ministerial",
  responsibleArea: "Consejo Ministerial y Pastoral",
  confidentiality: "INTERNO_CONGREGACION",
  bannerWarning: "BORRADOR — NO ADOPTADO / REQUIERE REVISIÓN LEGAL",
  description:
    "Normativa institucional que consagra los más altos estándares bíblicos, morales, éticos y operativos para ministros, pastores, líderes, docentes y servidores de RENACER CHURCH. Regula la prevención del abuso espiritual, salvaguarda de menores, integridad patrimonial, límites de consejería pastoral, confidencialidad, redes sociales y protocolos restauradores.",
};

export const ETHICS_FORMS_CATALOG: EthicsFormItem[] = [
  {
    code: "REN-FORM-ETH-001",
    name: "Aceptación y Compromiso con el Código Ético Institucional",
    purpose: "Adhesión formal y solemne de ministros, pastores, líderes y servidores al ingresar a funciones oficiales.",
    frequencyOrTrigger: "Al asumir cualquier asignación ministerial o de liderazgo",
    custodyDoc: "REN-DOC-019 (Expediente Ministerial)",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-002",
    name: "Declaración Jurada de Conflicto de Interés y Transparencia",
    purpose: "Registro formal de actividades comerciales, relaciones de parentesco o intereses que puedan colisionar con RENACER.",
    frequencyOrTrigger: "Anual o al surgir una situación de potencial conflicto",
    custodyDoc: "REN-DOC-019 / REN-DOC-003",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-003",
    name: "Reporte Confidencial de Conducta Ética o Preocupación Ministerial",
    purpose: "Canal formal para presentar dudas, irregularidades o faltas éticas observadas bajo principio de buena fe.",
    frequencyOrTrigger: "Por evento o incidente ético reportado",
    custodyDoc: "REN-DOC-019 (Custodia Restringida)",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-004",
    name: "Registro Notarial de Incidente Pastoral o Disciplinario",
    purpose: "Documentación fáctica e imparcial de hechos, testimonios y evidencias preliminares en un caso ético.",
    frequencyOrTrigger: "Apertura de proceso de indagación preliminar",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-005",
    name: "Evaluación Anual de Cumplimiento Ético y Testimonio Ministerial",
    purpose: "Supervisión pastoral periódica del carácter, relaciones familiares, conducta pública y desempeño de líderes.",
    frequencyOrTrigger: "Anual",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-006",
    name: "Plan Pastoral y Terapéutico de Restauración Ministerial",
    purpose: "Estructuración del acompañamiento espiritual, mentoría, rendición de cuentas y etapas de sanidad integral.",
    frequencyOrTrigger: "Al disponerse formalmente un proceso de restauración",
    custodyDoc: "REN-DOC-019 / REN-DOC-005",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-007",
    name: "Acta de Resolución Ética y Decisión Disciplinaria",
    purpose: "Resolución formal emitida por el Pastor Fundador y el Consejo Ministerial tras el debido proceso.",
    frequencyOrTrigger: "Conclusión de procedimiento disciplinario",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-008",
    name: "Declaración de Separación, Renuncia o Finalización de Funciones",
    purpose: "Formalización de la salida ordenada de un ministro o líder, entrega de bienes institucionales y confidencialidad.",
    frequencyOrTrigger: "Término de la asignación ministerial",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-009",
    name: "Constancia de Formación en Salvaguardas y Protección de Menores",
    purpose: "Acreditación de haber cursado y aprobado la capacitación obligatoria en prevención de abusos y reporte de ley.",
    frequencyOrTrigger: "Periódico [PENDIENTE_DEFINIR]",
    custodyDoc: "REN-DOC-016 / REN-DOC-019",
    status: "PROPUESTO",
  },
  {
    code: "REN-FORM-ETH-010",
    name: "Declaración Anual Consolidada de Integridad, Finanzas y Redes Sociales",
    purpose: "Renovación periódica del compromiso ético, veracidad financiera, límites digitales y vida intachable.",
    frequencyOrTrigger: "Anual [PENDIENTE_DEFINIR]",
    custodyDoc: "REN-DOC-019",
    status: "PROPUESTO",
  },
];

export const ETHICS_TITLES_DATA: EthicsTitleSection[] = [
  {
    titleNumber: "TÍTULO I",
    titleName: "NATURALEZA, PROPÓSITO, ALCANCE Y PRINCIPIO DE SERVICIO",
    summary: "Establece la obligatoriedad del código, su alcance a toda función oficial y el principio bíblico del liderazgo siervo.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-006", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-004", "REN-DOC-006"],
    requiresLegalReview: true,
    articles: [
      {
        number: 1,
        title: "Naturaleza Institucional y Obligatoriedad General",
        content:
          "El presente Código de Ética Ministerial y Conducta Institucional (REN-DOC-011) constituye el cuerpo normativo fundamental que rige la conducta moral, espiritual, relacional, financiera, académica y operativa de toda persona que ostente credenciales ministeriales, cargos de gobierno, asignaciones pastorales, liderazgo de área, dirección de Familias de Grupo, docencia en el Seminario Bíblico RENACER o servicio oficial en RENACER CHURCH. Su acatamiento es obligatorio e indelegable desde el momento de asumir cualquier función oficial.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-002"],
        requiresLegalReview: false,
      },
      {
        number: 2,
        title: "Propósito y Principio Rector del Liderazgo Siervo",
        content:
          "El propósito supremo de este Código es honrar a Dios, preservar la santidad y pureza del cuerpo de Cristo, proteger a las personas congregadas —especialmente a menores y personas vulnerables— y garantizar que la autoridad eclesiástica sea ejercida con mansedumbre, humildad y espíritu de servicio según el modelo de Jesucristo (Marcos 10:42-45), erradicando cualquier manifestación de dominio señorial, autoritarismo o manipulación.",
        decisionRefs: ["DEC-DEF-006", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO II",
    titleName: "PRINCIPIOS FUNDAMENTALES DE CONDUCTA CRISTIANA",
    summary: "Consagra los pilares de integridad, veracidad, sobriedad, justicia, equidad y testimonio irreprensible.",
    decisions: ["DEC-DEF-001", "DEC-DEF-010", "DEC-DEF-016"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-005"],
    requiresLegalReview: false,
    articles: [
      {
        number: 3,
        title: "Testimonio Irreprensible y Santidad Personal",
        content:
          "Todo ministro y líder institucional debe procurar activamente una vida de piedad, sobriedad y devoción privada, reflejando a Cristo tanto en público como en lo secreto (1 Timoteo 3:1-7; Tito 1:5-9). El llamamiento ministerial no exime de las normas morales del Evangelio sino que exige un nivel superior de responsabilidad y testimonio ejemplar ante la iglesia y la sociedad.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
      {
        number: 4,
        title: "Veracidad, Transparencia y Honorabilidad",
        content:
          "La conducta ministerial debe fundamentarse en la verdad estricta. Queda absolutamente prohibida la falsedad, la exageración engañosa de resultados o testimonios, el engaño deliberado, la hipocresía y cualquier artificio que busque obtener ventajas personales, espirituales o materiales a expensas de la buena fe del pueblo de Dios.",
        decisionRefs: ["DEC-DEF-010", "DEC-DEF-016"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO III",
    titleName: "INTEGRIDAD ESPIRITUAL Y DOCTRINAL",
    summary: "Norma la fidelidad a las Sagradas Escrituras y a la Declaración de Fe institucional REN-DOC-001.",
    decisions: ["DEC-DEF-001", "DEC-DEF-016"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-009", "REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 5,
        title: "Fidelidad Incondicional a la Palabra de Dios y Doctrina RENACER",
        content:
          "Todo ministro, maestro y predicador está obligado a enseñar, predicar y aconsejar en estricta fidelidad al canon bíblico y a los 20 Artículos Fundamentales consagrados en la Declaración de Fe y Doctrina de RENACER (REN-DOC-001). Queda prohibida la introducción de herejías destructoras, modas doctrinales antibíblicas, doctrinas de prosperidad distorsionada, legalismos opresivos o sincretismos que desvíen a la congregación de la centralidad del Evangelio de Jesucristo.",
        decisionRefs: ["DEC-DEF-001"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO IV",
    titleName: "CARÁCTER PERSONAL, DISCIPLINA Y SALUD INTEGRAL",
    summary: "Regula el equilibrio de vida, la sobriedad emocional, salud física, financiera y el descanso ministerial.",
    decisions: ["DEC-DEF-006", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-006", "REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 6,
        title: "Equilibrio Vital, Descanso y Mayordomía de la Salud",
        content:
          "Los ministros y líderes deben ejercer una mayordomía sabia de su salud física, mental y emocional, respetando los tiempos de descanso y dedicación a sus hogares. La sobrecarga laboral autoimpuesta o el activismo eclesiástico desordenado no justifican el descuido de la salud personal ni de la familia, considerándose la prudencia como fruto esencial del carácter maduro.",
        decisionRefs: ["DEC-DEF-006"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO V",
    titleName: "AUTORIDAD MINISTERIAL, GOBIERNO Y SUS LÍMITES",
    summary: "Delimita la autoridad eclesiástica según los documentos superiores y preserva la soberanía pastoral del Pastor Fundador.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 7,
        title: "Autoridad Espiritual y Marco de Competencias",
        content:
          "La autoridad en RENACER se ejerce en armonía con la arquitectura constitucional vigente. El Pastor Fundador retiene la autoridad espiritual y doctrinal final. El Consejo Ministerial actúa como órgano de deliberación, formación, evaluación y disciplina sin arrogarse potestades doctrinales soberanas. La Junta de Custodios ejerce la administración fiduciaria patrimonial conforme a la ley civil. Ningún ministro o líder puede arrogarse competencias ajenas a las estatuidas formalmente.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-005"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VI",
    titleName: "ABUSO ESPIRITUAL, MANIPULACIÓN Y COACCIÓN PSICOLÓGICA",
    summary: "Tipifica y prohíbe taxativamente el uso indebido del púlpito, la invocación de la voz de Dios para control y la coacción.",
    decisions: ["DEC-DEF-001", "DEC-DEF-006", "DEC-DEF-010", "DEC-DEF-018"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 8,
        title: "Tipificación y Prohibición Categórica del Abuso Espiritual",
        content:
          "Se define como abuso espiritual y queda terminantemente prohibido bajo sanción de revocación ministerial: (a) El uso de la autoridad espiritual o el temor reverente para doblegar la voluntad ajena o intimidar creyentes; (b) La utilización de frases como 'Dios me dijo' o supuestas revelaciones proféticas para forzar decisiones personales, matrimoniales, laborales o económicas ajenas; (c) El aislamiento emocional o social de feligreses respecto a sus familiares o redes de apoyo; (d) La exigencia de sumisión y obediencia ciega hacia líderes humanos; (e) El uso del púlpito para lanzar acusaciones veladas, ataques personales o venganzas privadas; (f) La imposición de culpas espirituales injustificadas y la amenaza de maldiciones divinas por discrepancias institucionales de buena fe.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-006", "DEC-DEF-010", "DEC-DEF-018"],
        requiresLegalReview: true,
      },
      {
        number: 9,
        title: "Prohibición de Represalias contra Denunciantes de Buena Fe",
        content:
          "Ningún líder o ministro tomará represalias, hostigará ni marginalizará a ningún miembro o colaborador que presente una duda, queja o reporte de buena fe sobre anomalías éticas o conductas inapropiadas, garantizándose canales seguros y confidenciales de tramitación.",
        decisionRefs: ["DEC-DEF-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VII",
    titleName: "PROTECCIÓN CONTRA EL ABUSO, MALTRATO Y VIOLENCIA",
    summary: "Cero tolerancia ante violencia física, emocional, psicológica, doméstica y trato humillante.",
    decisions: ["DEC-DEF-010", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-016"],
    requiresLegalReview: true,
    articles: [
      {
        number: 10,
        title: "Tolerancia Cero frente a Violencia y Maltrato",
        content:
          "RENACER mantiene una política de tolerancia cero frente a toda forma de violencia física, verbal, psicológica, violencia doméstica o intimidación perpetrada por ministros, líderes o servidores. Dichas conductas conllevan la separación inmediata del cargo cautelarmente y la remisión correspondiente a las autoridades judiciales civiles cuando tipifiquen delitos conforme a derecho.",
        decisionRefs: ["DEC-DEF-010", "DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO VIII",
    titleName: "PROTECCIÓN DE MENORES Y PERSONAS VULNERABLES",
    summary: "Prioridad absoluta a la seguridad de la niñez, regla de dos adultos, deber legal de reporte e inaplicabilidad del secreto pastoral sobre delitos.",
    decisions: ["DEC-DEF-010", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-016", "REN-DOC-019"],
    requiresLegalReview: true,
    articles: [
      {
        number: 11,
        title: "Prioridad Suprema de la Seguridad Infantil y Regla de Dos Adultos",
        content:
          "La seguridad física, emocional y espiritual de los niños, adolescentes y personas vulnerables prevalece sobre cualquier otra consideración institucional. En todas las actividades con menores regirá de forma inviolable la 'Regla de Dos Adultos Capacitados', quedando prohibido que un menor permanezca a solas en recintos cerrados o privados con un solo líder o ministro.",
        decisionRefs: ["DEC-DEF-019"],
        requiresLegalReview: true,
      },
      {
        number: 12,
        title: "Obligación Legal de Denuncia e Inaplicabilidad del Secreto Pastoral",
        content:
          "Conforme a las leyes de protección de menores aplicables (incluyendo N.J.S.A. 9:6-8.10 y estatutos concordantes de New Jersey [REQUIERE_REVISION_LEGAL]), todo ministro, líder o voluntario que tenga sospecha razonable de abuso, maltrato o negligencia infantil tiene la obligación indeclinable e inmediata de reportarlo a la línea oficial estatal de protección de menores (1-877-NJ-ABUSE) y a las autoridades policiales competentes. Ninguna cláusula de confidencialidad ministerial o secreto eclesiástico puede ser invocada jamás para ocultar, encubrir o demorar la denuncia de delitos contra la niñez o personas vulnerables.",
        decisionRefs: ["DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO IX",
    titleName: "CONDUCTA SEXUAL, PUREZA MORAL Y LÍMITES RELACIONALES",
    summary: "Preserva la ética sexual bíblica, prohíbe el acoso sexual, abuso de poder para fines íntimos y cruce de límites.",
    decisions: ["DEC-DEF-001", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 13,
        title: "Pureza Moral y Fidelidad a la Doctrina Bíblica de la Sexualidad",
        content:
          "En consonancia con REN-DOC-001, se sostiene que la sexualidad es un don divino consagrado exclusivamente para la unión matrimonial entre un hombre y una mujer. Toda conducta que viole este principio (adulterio, fornicación, pornografía, prácticas inmorales o promiscuidad) inhabilita éticamente para el ejercicio del ministerio y liderazgo activo.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
      {
        number: 14,
        title: "Prohibición Absoluta de Acoso Sexual y Explotación de Autoridad",
        content:
          "Se prohíbe terminantemente cualquier manifestación de acoso sexual, tocamientos inapropiados, insinuaciones lascivas, solicitudes de favores sexuales o relaciones de intimidad con personas que se encuentren bajo la tutela, consejería o subordinación eclesial del ministro o líder. La transgresión de esta norma causará revocación ministerial inmediata y eventual acción judicial.",
        decisionRefs: ["DEC-DEF-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO X",
    titleName: "MATRIMONIO, FAMILIA Y RELACIONES PERSONALES",
    summary: "Norma el cuidado conyugal, testimonio familiar del líder y tratamiento pastoral en crisis conyugales.",
    decisions: ["DEC-DEF-001", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-005", "REN-DOC-006"],
    requiresLegalReview: false,
    articles: [
      {
        number: 15,
        title: "Prioridad del Hogar y Testimonio Conyugal",
        content:
          "El ministro casado debe honrar a su cónyuge y gobernar bien su propia casa (1 Timoteo 3:4-5), reconociendo que el primer ministerio asignado por Dios es la familia. El servicio público en la iglesia no puede erigirse sobre la ruina o el abandono intencional de las obligaciones conyugales y parentales.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XI",
    titleName: "INTEGRIDAD FINANCIERA, DIEZMOS, OFRENDAS Y MAYORDOMÍA",
    summary: "Establece que todos los fondos pertenecen a la corporación RENACER CHURCH, INC., prohibiendo apropiación o presiones.",
    decisions: ["DEC-DEF-005", "DEC-DEF-018"],
    superiorDocRefs: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-004"],
    requiresLegalReview: true,
    articles: [
      {
        number: 16,
        title: "Propiedad Institucional y Prohibición de Lucro Privado Indebido",
        content:
          "Todos los diezmos, ofrendas, donaciones, legados y recursos recolectados en nombre del ministerio pertenecen de manera exclusiva y fiduciaria a RENACER CHURCH, INC. Ningún pastor, ministro, líder de grupo o servidor puede desviar, retener, mezclar con cuentas personales o apropiarse indebidamente de dichos fondos. Queda prohibida la coerción financiera, la recaudación no autorizada de dineros y cualquier esquema de simonía o lucro personal a costa de la grey.",
        decisionRefs: ["DEC-DEF-005", "DEC-DEF-018"],
        requiresLegalReview: true,
      },
      {
        number: 17,
        title: "Transparencia y Rendición de Cuentas Contable",
        content:
          "Toda transacción, gasto o reembolso pastoral debe contar con respaldo documental verificable (facturas, recibos formales) y sujetarse a los procedimientos de auditoría y controles aprobados por la Junta de Custodios.",
        decisionRefs: ["DEC-DEF-005", "DEC-DEF-018"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XII",
    titleName: "CONFLICTOS DE INTERÉS Y OPERACIONES CON PARTES RELACIONADAS",
    summary: "Obliga a declarar conflictos personales/comerciales y recusal en votaciones conforme a Bylaws REN-DOC-003.",
    decisions: ["DEC-DEF-005", "DEC-DEF-018"],
    superiorDocRefs: ["REN-DOC-003", "REN-DOC-004"],
    requiresLegalReview: true,
    articles: [
      {
        number: 18,
        title: "Deber de Revelación y Abstención por Conflicto de Interés",
        content:
          "Cualquier ministro, directivo o líder que tenga un interés financiero o personal directo o indirecto (o a través de parientes cercanos) en un contrato, negocio, arrendamiento o decisión que involucre a RENACER, debe revelar de inmediato dicho interés mediante el formulario REN-FORM-ETH-002 y abstenerse de deliberar o votar sobre la materia, asegurando que las contrataciones se realicen a valor justo de mercado y en beneficio exclusivo de la iglesia.",
        decisionRefs: ["DEC-DEF-005", "DEC-DEF-018"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIII",
    titleName: "BIENES, ACTIVOS Y RECURSOS DE RENACER",
    summary: "Regula el uso exclusivo institucional de inmuebles, vehículos, equipos, propiedad intelectual y marcas de la iglesia.",
    decisions: ["DEC-DEF-005", "DEC-DEF-018"],
    superiorDocRefs: ["REN-DOC-002", "REN-DOC-003"],
    requiresLegalReview: true,
    articles: [
      {
        number: 19,
        title: "Cuidado y Destino Exclusivo del Patrimonio Eclesial",
        content:
          "Las instalaciones físicas, vehículos, mobiliario, plataformas audiovisuales, equipos informáticos, marcas registradas, contenidos y propiedad intelectual de RENACER deben utilizarse estrictamente para los fines del ministerio y la misión de la iglesia. Queda prohibido su uso para fines comerciales privados o lucrativos ajenos sin autorización expresa y documentada de la Junta de Custodios.",
        decisionRefs: ["DEC-DEF-005", "DEC-DEF-018"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIV",
    titleName: "REGALOS, BENEFICIOS, HONORARIOS Y COMPENSACIONES",
    summary: "Norma los límites para recibir dádivas, honorarios ministeriales y prohibición de favores a cambio de influencia pastoral.",
    decisions: ["DEC-DEF-005", "DEC-DEF-018"],
    superiorDocRefs: ["REN-DOC-003", "REN-DOC-006"],
    requiresLegalReview: true,
    articles: [
      {
        number: 20,
        title: "Regalos Personales y Prohibición de Cohecho Eclesiástico",
        content:
          "Ningún ministro o líder puede solicitar obsequios, préstamos forzados o beneficios materiales a miembros de la congregación valiéndose de su investidura. Las muestras legítimas de gratitud congregacional voluntaria no deben comprometer la imparcialidad del juicio pastoral ni generar favoritismos indebidos.",
        decisionRefs: ["DEC-DEF-018"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XV",
    titleName: "CONFIDENCIALIDAD, SIGILO PASTORAL Y PROTECCIÓN DE DATOS",
    summary: "Regula el secreto de confesión/consejería y define sus excepciones legales irrenunciables (delitos, riesgo vital, abuso de menores).",
    decisions: ["DEC-DEF-010", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-019"],
    requiresLegalReview: true,
    articles: [
      {
        number: 21,
        title: "Custodia del Sigilo Pastoral y Distinción de Niveles de Datos",
        content:
          "El ministro está éticamente obligado a guardar bajo estricta reserva las confidencias espirituales compartidas en el marco de la consejería pastoral. Asimismo, los expedientes de membresía, disciplina y finanzas deben custodiarse con acceso restringido conforme a REN-DOC-019.",
        decisionRefs: ["DEC-DEF-010"],
        requiresLegalReview: true,
      },
      {
        number: 22,
        title: "Excepciones Legales al Sigilo Ministerial",
        content:
          "El sigilo ministerial cesa de manera obligatoria y da lugar a intervención externa ante: (a) Sospecha o evidencia de abuso, negligencia o explotación sexual de menores de edad o incapaces; (b) Peligro inminente de suicidio, homicidio o daño físico grave a sí mismo o a terceros; (c) Mandato judicial vinculante emitido por tribunal civil competente previa asesoría letrada institucional [REQUIERE_REVISION_LEGAL].",
        decisionRefs: ["DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVI",
    titleName: "CONSEJERÍA PASTORAL, SALUD MENTAL Y LÍMITES PROFESIONALES",
    summary: "Establece que el pastor no sustituye a profesionales de la salud ni letrados; ordena la derivación interdisciplinaria oportuna.",
    decisions: ["DEC-DEF-006", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-009"],
    requiresLegalReview: true,
    articles: [
      {
        number: 23,
        title: "Límites Claros de la Consejería Bíblica y Derivación Obligatoria",
        content:
          "La consejería impartida en RENACER es de naturaleza espiritual y pastoral. El ministro no ejerce la medicina, la psicología clínica, la psiquiatría ni el patrocinio legal. Queda terminantemente prohibido inducir a aconsejados a suspender tratamientos médicos o farmacológicos prescritos por facultativos habilitados. Ante cuadros de trastornos severos, ideación suicida o adicciones complejas, el ministro tiene la obligación ética de recomendar y facilitar la derivación a profesionales competentes de la salud.",
        decisionRefs: ["DEC-DEF-006", "DEC-DEF-010"],
        requiresLegalReview: true,
      },
      {
        number: 24,
        title: "Protocolo de Consejería Individual y Prevención de Riesgos",
        content:
          "Las sesiones de consejería individual deben celebrarse en espacios eclesiales visibles (con ventanas o puertas semiabiertas) en horarios razonables, evitando encuentros a solas en viviendas privadas con personas del sexo opuesto sin la presencia o cercanía de un cónyuge o acompañante de confianza.",
        decisionRefs: ["DEC-DEF-006", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVII",
    titleName: "COMUNICACIÓN PÚBLICA, MEDIOS Y REDES SOCIALES",
    summary: "Norma el uso decoroso de plataformas digitales, prohibición de difamación, prudencia y representación de la iglesia.",
    decisions: ["DEC-DEF-001", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-006"],
    requiresLegalReview: false,
    articles: [
      {
        number: 25,
        title: "Prudencia Digital y Decoroso Comportamiento en Redes Sociales",
        content:
          "Los ministros y líderes deben conducirse en redes sociales con sobriedad, respeto y sabiduría bíblica (Colosenses 4:6). Quedan prohibidas las polémicas destructivas, la difamación, el lenguaje soez, la difusión de noticias falsas, la exhibición de estilos de vida ostentosos o contradictorios con la fe y la divulgación de intimidades de feligreses.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
      {
        number: 26,
        title: "Vocería Oficial y Uso de Marcas Institucionales",
        content:
          "Solo las personas formalmente autorizadas por el Pastor Fundador o la Junta de Custodios pueden emitir declaraciones públicas, comunicados oficiales o posicionamientos en nombre corporativo de RENACER CHURCH.",
        decisionRefs: ["DEC-DEF-001"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XVIII",
    titleName: "USO DE TECNOLOGÍA, SISTEMAS Y PLATAFORMAS DIGITALES",
    summary: "Regula el resguardo de credenciales de acceso, bases de datos y respeto a permisos RBAC en RENACER CHURCH MAESTRO.",
    decisions: ["DEC-DEF-001", "DEC-DEF-005"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-019"],
    requiresLegalReview: true,
    articles: [
      {
        number: 27,
        title: "Seguridad Informática y Respeto a Perfiles de Acceso (RBAC)",
        content:
          "El personal con acceso a la plataforma tecnológica RENACER CHURCH MAESTRO, bases de datos congregacionales y expedientes digitales debe salvaguardar estrictamente sus contraseñas, prohibiéndose la divulgación de credenciales, el acceso no autorizado a registros confidenciales o la alteración arbitraria de historiales institucionales.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-005"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XIX",
    titleName: "CONDUCTA ACADÉMICA, DOCENTE Y ÉTICA DEL SEMINARIO",
    summary: "Norma la probidad en la enseñanza del Seminario y Escuelas: honestidad intelectual, calificación justa y protección de alumnos.",
    decisions: ["DEC-DEF-001", "DEC-DEF-016"],
    superiorDocRefs: ["REN-DOC-007", "REN-DOC-008", "REN-DOC-009"],
    requiresLegalReview: false,
    articles: [
      {
        number: 28,
        title: "Integridad Pedagógica y Evaluación Objetiva",
        content:
          "Los docentes del Seminario Bíblico RENACER, Escuela de Líderes y Escuela de Discípulos deben impartir sus clases con rigor bíblico y preparación excelente. Se prohíbe el plagio académico, la alteración fraudulenta de calificaciones, el favoritismo personal y cualquier forma de explotación académica o laboral de los estudiantes.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-016"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XX",
    titleName: "CONDUCTA EN EL PÚLPITO, PREDICACIÓN Y MINISTERIO PÚBLICO",
    summary: "Prohíbe el púlpito para intereses personales, exige reverencia en la proclamación y orden en los dones carismáticos.",
    decisions: ["DEC-DEF-001", "DEC-DEF-006"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-006", "REN-DOC-009"],
    requiresLegalReview: false,
    articles: [
      {
        number: 29,
        title: "Reverencia en la Proclamación y Prohibición de Desvíos",
        content:
          "El púlpito de RENACER es un lugar sagrado destinado a la exposición fiel de la Palabra de Dios. Queda estrictamente prohibido utilizar el tiempo de predicación para ventilar rencillas privadas, mofarse de personas, denigrar a otras denominaciones cristianas o recaudar dineros con fines particulares no autorizados.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-006"],
        requiresLegalReview: false,
      },
      {
        number: 30,
        title: "Orden Espiritual en el Ejercicio de los Dones",
        content:
          "Los dones del Espíritu Santo deben fluir con decencia y en orden (1 Corintios 14:40). Toda profecía debe estar sujeta a la evaluación de la Palabra y de la autoridad pastoral competente, sin permitir desórdenes que confundan o avergüencen a la congregación.",
        decisionRefs: ["DEC-DEF-001"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXI",
    titleName: "EVANGELISMO, DISCIPULADO Y FAMILIAS DE GRUPO",
    summary: "Prohíbe el autoritarismo o intromisión indebida en la vida íntima de los miembros de las Familias de Grupo.",
    decisions: ["DEC-DEF-006", "DEC-DEF-015"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-006", "REN-DOC-008"],
    requiresLegalReview: false,
    articles: [
      {
        number: 31,
        title: "Pastoreo Cercano sin Intromisión Invasiva",
        content:
          "Los líderes de Familias de Grupo y mentores de discipulado deben cuidar a los discípulos con ternura y guía bíblica. Se prohíbe terminantemente que los líderes interfieran en las decisiones privadas de los miembros relativas a empleo, economía personal, elecciones matrimoniales o vida íntima, bajo el pretexto de cobertura espiritual.",
        decisionRefs: ["DEC-DEF-006", "DEC-DEF-015"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXII",
    titleName: "RELACIONES INTERMINISTERIALES, COLABORACIÓN Y FRATERNIDAD",
    summary: "Fomenta el respeto mutuo entre consiervos, prohíbe la rivalidad, murmura y competencia desleal.",
    decisions: ["DEC-DEF-001", "DEC-DEF-006"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-006", "REN-DOC-010"],
    requiresLegalReview: false,
    articles: [
      {
        number: 32,
        title: "Unidad, Respeto Jerárquico y Fraternidad Ministerial",
        content:
          "Los ministros y líderes deben cultivar relaciones de aprecio, lealtad y cooperación mutua. Queda proscrita la murmuración, la difamación entre consiervos, la captación indebida de líderes para proyectos separatistas y cualquier forma de conspiración que atente contra la paz y armonía del cuerpo ministerial.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-006"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIII",
    titleName: "RÉGIMEN DE DENUNCIAS, INVESTIGACIÓN Y DEBIDO PROCESO",
    summary: "Establece el procedimiento formal de 10 etapas para recepción, indagación y resolución de faltas éticas con derecho a ser oído.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 33,
        title: "Canal Formal de Denuncias y Garantías de Debido Proceso",
        content:
          "Toda imputación de falta ética contra un ministro o líder debe formularse por escrito y fundamentarse en testimonios directos y evidencias conforme al principio bíblico de 1 Timoteo 5:19. El proceso consta de 10 etapas institucionales: (1) Recepción formal; (2) Registro confidencial en REN-FORM-ETH-003/004; (3) Medidas cautelares de protección inmediata cuando existan riesgos graves; (4) Calificación de admisibilidad; (5) Notificación y traslado de cargos al imputado; (6) Derecho a comparecencia, descargo y presentación de pruebas; (7) Instrucción y deliberación del Consejo Ministerial; (8) Dictamen motivado elevado al Pastor Fundador; (9) Resolución eclesiástica resolutoria en REN-FORM-ETH-007; (10) Notificación formal, archivo en REN-DOC-019 y ejecución del plan de disciplina o restauración correspondiente.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXIV",
    titleName: "DISCIPLINA MINISTERIAL, RESTAURACIÓN Y REINTEGRACIÓN",
    summary: "Consagra que el perdón espiritual no confiere restitución automática al liderazgo; protege a las víctimas y norma el proceso restaurador.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-005", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 34,
        title: "Naturaleza Redentora de la Disciplina y No Restitución Automática",
        content:
          "La disciplina eclesiástica persigue la gloria de Dios, la purificación de la iglesia, la protección de inocentes y la salvación y restauración del infractor. El arrepentimiento sincero y el perdón espiritual concedido por la gracia de Dios restauran la comunión de fe, pero NO otorgan derecho a la restitución automática al oficio pastoral o a la posición de liderazgo previamente ejercida. Toda reintegración requiere un tiempo prudencial de sanidad, fruto observable, aprobación del Consejo Ministerial y anuencia expresa del Pastor Fundador.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-010"],
        requiresLegalReview: true,
      },
      {
        number: 35,
        title: "Inviolabilidad de la Seguridad de las Víctimas",
        content:
          "En ningún caso se estructurará un proceso de restauración ministerial que obligue a la víctima de un abuso o maltrato a reconciliarse prematuramente, revictimizarse o quedar bajo la influencia del agresor.",
        decisionRefs: ["DEC-DEF-010", "DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXV",
    titleName: "RENUNCIA, SEPARACIÓN Y FINALIZACIÓN DE FUNCIONES",
    summary: "Norma la entrega de credenciales, bienes y registros ante el cese de una asignación ministerial.",
    decisions: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-018"],
    superiorDocRefs: ["REN-DOC-004", "REN-DOC-010", "REN-DOC-019"],
    requiresLegalReview: true,
    articles: [
      {
        number: 36,
        title: "Proceso Ordenado de Transición y Devolución Patrimonial",
        content:
          "Al cesar en sus funciones por renuncia, revocación o retiro formal, el ministro o líder suscribirá la Declaración de Separación (REN-FORM-ETH-008), entregando de inmediato todas las llaves, expedientes, plataformas digitales, fondos bajo su custodia y bienes pertenecientes a RENACER CHURCH, INC., manteniendo vigente su deber ético de confidencialidad perpetua sobre secretos pastorales conocidos en razón del cargo.",
        decisionRefs: ["DEC-DEF-002", "DEC-DEF-005", "DEC-DEF-018"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVI",
    titleName: "RESPONSABILIDAD INSTITUCIONAL, CIVIL Y SALVAGUARDAS LEGALES",
    summary: "Delimita la responsabilidad eclesiástica frente a la ley civil y ratifica el deber de cooperar con las autoridades judiciales.",
    decisions: ["DEC-DEF-005", "DEC-DEF-019"],
    superiorDocRefs: ["REN-DOC-002", "REN-DOC-003", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 37,
        title: "Cumplimiento de Leyes Civiles y Cooperación con Autoridades",
        content:
          "RENACER CHURCH, INC. y sus ministros se someten al ordenamiento jurídico legítimo del Estado de New Jersey y los Estados Unidos en lo que no contravenga la ley moral de Dios (Romanos 13:1-7). Las directrices internas de este Código no reemplazan ni menoscaban las obligaciones legales de la iglesia frente a tribunales o entidades de orden público.",
        decisionRefs: ["DEC-DEF-005", "DEC-DEF-019"],
        requiresLegalReview: true,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVII",
    titleName: "CATÁLOGO OFICIAL DE FORMULARIOS Y EXPEDIENTES ÉTICOS",
    summary: "Consagra formalmente la serie de 10 formularios institucionales de ética y conducta ministerial (REN-FORM-ETH-001 a 010).",
    decisions: ["DEC-DEF-002", "DEC-DEF-010"],
    superiorDocRefs: ["REN-DOC-010", "REN-DOC-019"],
    requiresLegalReview: false,
    articles: [
      {
        number: 38,
        title: "Serie Oficial de Formularios de Ética y Salvaguardas",
        content:
          "Se establece el catálogo oficial compuesto por 10 instrumentos administrativos de gestión ética: REN-FORM-ETH-001 (Aceptación del Código Ético), REN-FORM-ETH-002 (Declaración de Conflicto de Interés), REN-FORM-ETH-003 (Reporte Confidencial de Conducta Ética), REN-FORM-ETH-004 (Registro de Incidente Notarial), REN-FORM-ETH-005 (Evaluación Anual de Cumplimiento Ético), REN-FORM-ETH-006 (Plan de Restauración), REN-FORM-ETH-007 (Acta de Resolución Disciplinaria), REN-FORM-ETH-008 (Declaración de Separación de Funciones), REN-FORM-ETH-009 (Constancia de Formación en Salvaguardas) y REN-FORM-ETH-010 (Declaración Anual de Integridad y Conflictos).",
        decisionRefs: ["DEC-DEF-002", "DEC-DEF-010"],
        requiresLegalReview: false,
      },
    ],
  },
  {
    titleNumber: "TÍTULO XXVIII",
    titleName: "REVISIÓN PERIÓDICA, ADOPCIÓN FORMAL Y MATERIAS LEGALES",
    summary: "Establece el régimen transitorio de borrador no adoptado y lista las materias reservadas a revisión letrada.",
    decisions: ["DEC-DEF-001", "DEC-DEF-002", "DEC-DEF-005", "DEC-PEND-010"],
    superiorDocRefs: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-010"],
    requiresLegalReview: true,
    articles: [
      {
        number: 39,
        title: "Estado Formal y Procedimiento de Adopción Futura",
        content:
          "El presente Código de Ética Ministerial y Conducta Institucional (REN-DOC-011) se emite formalmente como BORRADOR NO ADOPTADO (v0.1) en estado EN_REDACCION. Para su adopción definitiva requerirá dictamen favorable del Consejo Ministerial, anuencia y ratificación solemne del Pastor Fundador y revisión letrada concluyente de asesores jurídicos colegiados.",
        decisionRefs: ["DEC-DEF-001", "DEC-DEF-002", "DEC-PEND-010"],
        requiresLegalReview: true,
      },
      {
        number: 40,
        title: "Catálogo de Materias Específicas Sujetas a Revisión Letrada",
        content:
          "Quedan explícitamente sujetas a revisión por abogados habilitados en el Estado de New Jersey las siguientes materias: (1) Validez y alcances de las renuncias a fueros judiciales civiles en materia disciplinaria; (2) Cumplimiento de normativas de confidencialidad y privacidad de datos sensibles congregacionales; (3) Protocolos de reporte mandatorio ante sospecha de abuso de menores (N.J.S.A. 9:6-8.10); (4) Deslinde de responsabilidad civil e indemnidad eclesial en consejería pastoral; (5) Aspectos laborales y de compensación ministerial bajo el derecho común y regulaciones impositivas del IRS; (6) Protocolos de manejo de crisis y cooperación con autoridades policiales y judiciales.",
        decisionRefs: ["DEC-DEF-005", "DEC-PEND-010"],
        requiresLegalReview: true,
      },
    ],
  },
];

export const FULL_MINISTERIAL_ETHICS_DRAFT = {
  metadata: MINISTERIAL_ETHICS_DRAFT,
  titles: ETHICS_TITLES_DATA,
  formsCatalog: ETHICS_FORMS_CATALOG,
};

/**
 * Genera el documento Markdown sustancial y completo de REN-DOC-011
 */
export function generateFullMinisterialEthicsMarkdown(): string {
  const meta = MINISTERIAL_ETHICS_DRAFT;
  const sections: string[] = [];

  sections.push(`# ${meta.documentNumber} — ${meta.title}`);
  sections.push(`**Versión:** ${meta.version} | **Nivel:** ${meta.hierarchyLevel} | **Categoría:** ${meta.category} | **Estado:** ${meta.status}`);
  sections.push(`**Adopción:** BORRADOR — NO ADOPTADO | **Estado Legal:** REQUIERE REVISIÓN LEGAL | **Decisión:** ${meta.decisionState}`);
  sections.push(`\n> [!WARNING]\n> **DOCUMENTO INSTITUCIONAL EN ESTADO DE BORRADOR — NO ADOPTADO**\n> Este documento ha sido estructurado conforme a las 107 Decisiones Institucionales Históricas y los documentos superiores de RENACER CHURCH. No confiere validez jurídica definitiva ni constituye reglamento oficialmente adoptado hasta su ratificación formal por el Pastor Fundador y el dictamen letrado colegiado.\n`);

  sections.push(`---`);
  sections.push(`## PREÁMBULO INSTITUCIONAL\n`);
  sections.push(
    `En el Nombre del Padre, del Hijo y del Espíritu Santo, la iglesia RENACER proclama que el llamamiento ministerial es un encargo sagrado, conferido por la gracia soberana de Dios para edificación, consuelo y perfeccionamiento de los santos (Efesios 4:11-13). Quienes asumen responsabilidades pastorales, docentes, de gobierno o servicio están llamados a ser modelos irreprensibles de pureza, veracidad, santidad y amor fraternal (1 Pedro 5:1-4). Este Código de Ética Ministerial y Conducta Institucional (REN-DOC-011) define los principios innegociables que resguardan la dignidad del Evangelio, previenen cualquier abuso espiritual o material, aseguran la protección incondicional de los más vulnerables y honran a Jesucristo en todas las facetas del ministerio eclesial.\n`
  );

  sections.push(`---`);
  sections.push(`## ÍNDICE SISTEMÁTICO DE TÍTULOS NORMATIVOS\n`);

  ETHICS_TITLES_DATA.forEach((t) => {
    sections.push(`- **${t.titleNumber}:** ${t.titleName}`);
  });

  sections.push(`\n---`);

  ETHICS_TITLES_DATA.forEach((t) => {
    sections.push(`\n## ${t.titleNumber} — ${t.titleName}\n`);
    sections.push(`*${t.summary}*\n`);
    sections.push(`**Decisiones de Respaldo:** ${t.decisions.join(", ")} | **Documentos Superiores:** ${t.superiorDocRefs.join(", ")} | **Revisión Legal:** ${t.requiresLegalReview ? "OBLIGATORIA" : "CONFORME"}\n`);

    t.articles.forEach((art) => {
      sections.push(`### Artículo ${art.number}. ${art.title}`);
      sections.push(`${art.content}\n`);
      sections.push(`*Trazabilidad:* Decisiones [${art.decisionRefs.join(", ")}] | *Revisión Letrada:* ${art.requiresLegalReview ? "REQUIERE REVISIÓN LEGAL" : "CONFORME A DOCTRINA"}\n`);
    });
  });

  sections.push(`\n---`);
  sections.push(`## SERIE OFICIAL DE FORMULARIOS INSTITUCIONALES (REN-FORM-ETH)\n`);
  sections.push(`| Código | Nombre del Formulario | Propósito Institucional | Frecuencia / Ocasión | Custodia |`);
  sections.push(`| :--- | :--- | :--- | :--- | :--- |`);
  ETHICS_FORMS_CATALOG.forEach((f) => {
    sections.push(`| **${f.code}** | ${f.name} | ${f.purpose} | ${f.frequencyOrTrigger} | ${f.custodyDoc} |`);
  });

  sections.push(`\n---`);
  sections.push(`## CLÁUSULA DE SALVAGUARDA INSTITUCIONAL Y ADVERTENCIA LEGAL\n`);
  sections.push(
    `1. **No Adopción Prematura:** Este Código de Ética (REN-DOC-011) se mantiene formalmente en estado de BORRADOR NO ADOPTADO.\n` +
    `2. **Límites de Consejería:** Ningún ministro ni consejero de RENACER sustituye a médicos, psicólogos, psiquiatras ni abogados civiles. Ante riesgos de daño físico o patologías clínicas rige el deber de derivación oportuna.\n` +
    `3. **Reporte Mandatorio de Abuso Infantil:** La protección de los menores es absoluta e indeclinable conforme a N.J.S.A. 9:6-8.10. El secreto pastoral no aplica jamás para encubrir abusos a menores o personas vulnerables.\n` +
    `4. **Patrimonio Eclesial:** Todos los fondos y recursos pertenecen a RENACER CHURCH, INC., prohibiéndose el lucro privado indebido o la manipulación de ofrendas.\n` +
    `5. **Revisión Legal:** Cualquier materia procesal o disciplinaria queda sujeta al dictamen de profesionales letrados habilitados en el Estado de New Jersey.\n`
  );

  return sections.join("\n\n");
}
