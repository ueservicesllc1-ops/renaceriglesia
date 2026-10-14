/**
 * REN-DOC-013 — MANUAL OFICIAL DE ADMINISTRACIÓN, FINANZAS Y MAYORDOMÍA DE RENACER
 * Versión: v0.1 | Estado: EN_REDACCION | DecisionState: DEFINIDA | Adoption: NO_ADOPTADA
 * LegalState: REQUIERE_REVISION_LEGAL | Nivel: NIVEL_4_MANUAL_INSTITUCIONAL
 * Categoría: ADMINISTRACION_FINANZAS
 * 
 * BORRADOR — NO ADOPTADO | REQUIERE REVISIÓN LEGAL Y CONTABLE
 */

export interface FinancialArticleDraft {
  number: number;
  title: string;
  content: string[];
  dependencies?: string[];
  crossReferences?: string[];
  keyPrinciples?: string[];
  requiresLegalReview?: boolean;
  requiresAccountingReview?: boolean;
  isPendingDefinition?: boolean;
}

export interface FinancialTitleDraft {
  number: string;
  romanNumeral: string;
  title: string;
  description: string;
  articles: FinancialArticleDraft[];
}

export interface FinancialFormDescriptor {
  code: string;
  title: string;
  purpose: string;
  responsibleRole: string;
  frequency: string;
  retentionCategory: string;
}

export interface FinancesManualDraft {
  documentNumber: string;
  title: string;
  shortTitle: string;
  hierarchyLevel: string;
  category: string;
  subcategory: string;
  version: string;
  documentState: string;
  decisionState: string;
  adoptionState: string;
  legalState: string;
  author: string;
  responsibleArea: string;
  approvalAuthority: string;
  confidentiality: string;
  pithySummary: string;
  preamble: string;
  titles: FinancialTitleDraft[];
  formsCatalog: FinancialFormDescriptor[];
  decisionsUsed: string[];
  pendingDefinitions: string[];
  legalReviewMatters: string[];
}

export const FINANCIAL_FORMS_CATALOG: FinancialFormDescriptor[] = [
  {
    code: "REN-FORM-FIN-001",
    title: "Solicitud de Gasto Institucional",
    purpose: "Formalizar y justificar todo requerimiento de egreso ordinario o extraordinario dentro del presupuesto.",
    responsibleRole: "Líder de Ministerio / Solicitante / Tesorería",
    frequency: "Por evento de requerimiento",
    retentionCategory: "CONTABILIDAD_EGRESOS",
  },
  {
    code: "REN-FORM-FIN-002",
    title: "Autorización de Compra",
    purpose: "Aprobar adquisiciones de suministros, equipos o servicios con base en cotizaciones y partidas presupuestarias.",
    responsibleRole: "Administración / Consejo de Gobierno",
    frequency: "Por orden de compra",
    retentionCategory: "COMPRAS_Y_CONTRATOS",
  },
  {
    code: "REN-FORM-FIN-003",
    title: "Solicitud de Reembolso de Gastos Oficiales",
    purpose: "Tramitar el reintegro de desembolsos personales legítimos realizados por ministros o servidores en nombre de la corporación.",
    responsibleRole: "Beneficiario / Tesorero / Pastor Fundador",
    frequency: "Mensual o por evento justificado",
    retentionCategory: "REEMBOLSOS_Y_COMPROBANTES",
  },
  {
    code: "REN-FORM-FIN-004",
    title: "Registro de Ingreso y Donaciones",
    purpose: "Asentar cronológicamente ingresos por transferencias, aportes directos, eventos formativos o donaciones identificables.",
    responsibleRole: "Tesorería / Secretaría de Finanzas",
    frequency: "Diario / Por transacción",
    retentionCategory: "INGRESOS_Y_DONACIONES",
  },
  {
    code: "REN-FORM-FIN-005",
    title: "Acta Oficial de Conteo de Ofrendas",
    purpose: "Documentar el conteo físico transparente de diezmos y ofrendas en efectivo por dos personas no relacionadas.",
    responsibleRole: "Contadores Designados (2) / Tesorería",
    frequency: "Por cada servicio o reunión de culto",
    retentionCategory: "ACTAS_CONTEO_DEPOSITOS",
  },
  {
    code: "REN-FORM-FIN-006",
    title: "Registro de Depósito Bancario",
    purpose: "Conciliar el efectivo y cheques recibidos en servicios con el comprobante formal de depósito bancario corporativo.",
    responsibleRole: "Tesorero / Custodio de Depósito",
    frequency: "Semanal / Siguiente día hábil tras conteo",
    retentionCategory: "BANCOS_Y_DEPOSITOS",
  },
  {
    code: "REN-FORM-FIN-007",
    title: "Conciliación Financiera y Bancaria Mensual",
    purpose: "Cuadrar mensualmente el libro mayor contable con los estados de cuenta bancarios oficiales de la corporación.",
    responsibleRole: "Tesorero / Administrador / Auditor Interno",
    frequency: "Mensual",
    retentionCategory: "ESTADOS_FINANCIEROS_CONCILIACIONES",
  },
  {
    code: "REN-FORM-FIN-008",
    title: "Registro y Ficha de Activo Fijo",
    purpose: "Inventariar bienes muebles, tecnología, instrumentos, vehículos y equipos con código, ubicación y responsable.",
    responsibleRole: "Encargado de Inventario / Administración",
    frequency: "Por incorporación / Auditoría anual",
    retentionCategory: "ACTIVOS_PATRIMONIO",
  },
  {
    code: "REN-FORM-FIN-009",
    title: "Solicitud y Evaluación de Ayuda Benevolente",
    purpose: "Canalizar solicitudes de asistencia de emergencia a personas y familias necesitadas bajo principios de misericordia y dignidad.",
    responsibleRole: "Comité Pastoral de Benevolencia",
    frequency: "Por solicitud evaluada",
    retentionCategory: "BENEVOLENCIA_CONFIDENCIAL",
  },
  {
    code: "REN-FORM-FIN-010",
    title: "Declaración Anual de Conflicto de Interés Financiero",
    purpose: "Transparentar relaciones comerciales, vínculos familiares y actividades económicas de oficiales y directores.",
    responsibleRole: "Oficiales, Pastores, Directores y Tesorero",
    frequency: "Anual / Al asumir cargo / Por contrato relevante",
    retentionCategory: "GOBIERNO_CONFLICTOS_INTERES",
  },
  {
    code: "REN-FORM-FIN-011",
    title: "Solicitud de Compra y Alta de Activo Mayor",
    purpose: "Evaluar técnica y financieramente adquisiciones de bienes de capital, tecnología audiovisual o vehículos.",
    responsibleRole: "Dirección de Área / Consejo de Gobierno",
    frequency: "Por adquisición de capital",
    retentionCategory: "COMPRAS_CAPITAL",
  },
  {
    code: "REN-FORM-FIN-012",
    title: "Reporte de Incidente Financiero o Sospecha de Fraude",
    purpose: "Canalizar de forma confidencial y segura denuncias sobre irregularidades, faltantes, facturación sospechosa o desvíos.",
    responsibleRole: "Cualquier Servidor / Comité de Ética y Auditoría",
    frequency: "Inmediato ante incidente",
    retentionCategory: "INVESTIGACIONES_ETICA",
  },
  {
    code: "REN-FORM-FIN-013",
    title: "Solicitud y Dictamen de Contrato Corporativo",
    purpose: "Formalizar el análisis financiero, operativo y legal antes de suscribir contratos de servicios, alquiler o mantenimiento.",
    responsibleRole: "Administración / Asesoría Legal Colegiada",
    frequency: "Por cada contrato comercial",
    retentionCategory: "CONTRATOS_CORPORATIVOS",
  },
  {
    code: "REN-FORM-FIN-014",
    title: "Registro y Aceptación de Donación de Bien en Especie",
    purpose: "Documentar la recepción, valuación razonable e incorporación patrimonial de donaciones físicas no monetarias.",
    responsibleRole: "Administrador / Tesorero / Donante",
    frequency: "Por donación en especie recibida",
    retentionCategory: "DONACIONES_ESPECIE",
  },
  {
    code: "REN-FORM-FIN-015",
    title: "Acta y Reporte de Cierre Financiero Anual",
    purpose: "Consolidar el balance de ingresos, egresos, ejecución presupuestaria, inventario y estado patrimonial del ejercicio fiscal.",
    responsibleRole: "Tesorero / Consejo de Gobierno / Pastor Fundador",
    frequency: "Anual (al término del año fiscal)",
    retentionCategory: "CIERRES_FISCALES_HISTORICOS",
  },
];

export const FINANCES_MANUAL_DRAFT: FinancesManualDraft = {
  documentNumber: "REN-DOC-013",
  title: "MANUAL OFICIAL DE ADMINISTRACIÓN, FINANZAS Y MAYORDOMÍA DE RENACER",
  shortTitle: "Manual de Administración y Finanzas",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "ADMINISTRACION_FINANZAS",
  subcategory: "Finanzas, Presupuesto y Mayordomía",
  version: "0.1",
  documentState: "EN_REDACCION",
  decisionState: "DEFINIDA",
  adoptionState: "NO_ADOPTADA",
  legalState: "REQUIERE_REVISION_LEGAL",
  author: "Luis Uchubanda Falconí / Comisión de Finanzas y Administración",
  responsibleArea: "ADMINISTRACION_GENERAL",
  approvalAuthority: "PASTOR_FUNDADOR",
  confidentiality: "INTERNO_CONGREGACION",
  pithySummary: "Reglamento y manual de procedimientos integrales que norman la mayordomía bíblica, diezmos, ofrendas voluntarias, ciclo presupuestario, tesorería corporativa, inventario de activos, compras, compensaciones, fondos restringidos, benevolencia, prevención de fraude y controles internos de RENACER CHURCH, INC.",
  preamble: "En reconocimiento de que la tierra y su plenitud pertenecen a Dios (Salmo 24:1) y que todo servidor es llamado a ser hallado mayordomo fiel y prudente (1 Corintios 4:2), RENACER CHURCH, INC. establece el presente Manual Oficial de Administración, Finanzas y Mayordomía (REN-DOC-013). Este cuerpo normativo convierte los principios teológicos consagrados en la Declaración de Fe (REN-DOC-001) y el marco estatutario de la Constitución y Bylaws (REN-DOC-002 y REN-DOC-003) en procedimientos administrativos transparentes, éticos, rigurosos y ordenados. Ningún recurso recibido o administrado en nombre de la obra pertenece a persona particular alguna, sino a la corporación eclesiástica, consagrado enteramente al avance del Evangelio, la edificación de la Iglesia y el socorro a los necesitados.",
  decisionsUsed: [
    "DEC-DEF-001",
    "DEC-DEF-004",
    "DEC-DEF-007",
    "DEC-DEF-008",
    "DEC-DEF-009",
    "DEC-DEF-011",
    "DEC-DEF-019",
    "DEC-PEND-010",
  ],
  pendingDefinitions: [
    "Umbrales cuantitativos exactos de gastos ordinarios vs extraordinarios [PENDIENTE_DEFINIR]",
    "Límites monetarios de tarjetas de débito/crédito institucionales y asignación de caja chica [PENDIENTE_DEFINIR]",
    "Límites y topes cuantitativos individuales de ayuda benevolente [PENDIENTE_DEFINIR]",
    "Porcentaje y política formal de reserva financiera operativa mínima [PENDIENTE_DEFINIR]",
    "Frecuencia y canales específicos de reportes impresos de mayordomía para la congregación [PENDIENTE_DEFINIR]",
    "Plazos cuantitativos de retención física de comprobantes contables no detallados en REN-DOC-019 [PENDIENTE_DEFINIR]",
    "Requisito y cobertura de Póliza de Fianza / Surety Bond para el Tesorero y custodios [PENDIENTE_DEFINIR]",
    "Número mínimo obligatorio de cotizaciones previas para compras medianas [PENDIENTE_DEFINIR]",
  ],
  legalReviewMatters: [
    "Régimen de exención fiscal federal ante el IRS bajo Section 501(c)(3) del Código de Rentas Internas [REQUIERE_REVISION_LEGAL/CONTABLE]",
    "Políticas de compensación ministerial y Housing Allowance de ministros ordenados conforme a la Sección 107 del IRC [REQUIERE_REVISION_LEGAL/CONTABLE]",
    "Titularidad corporativa de vehículos, registros DMV de New Jersey y coberturas de seguro vehicular [REQUIERE_REVISION_LEGAL]",
    "Régimen y gestión contable de fondos restringidos conforme a estándares FASB/GAAP y leyes de New Jersey [REQUIERE_REVISION_LEGAL/CONTABLE]",
    "Pólizas de seguro de responsabilidad general, daños a propiedad, directores y oficiales (D&O) [REQUIERE_REVISION_LEGAL]",
    "Contratos de arrendamiento, escrituras de propiedad raíz y gravámenes hipotecarios en New Jersey [REQUIERE_REVISION_LEGAL]",
    "Protección de datos personales de donantes y cumplimiento de normativas de privacidad financiera [REQUIERE_REVISION_LEGAL]",
  ],
  titles: [
    {
      number: "1",
      romanNumeral: "I",
      title: "NATURALEZA, OBJETO, ALCANCE Y PERSONALIDAD JURÍDICA PATRIMONIAL",
      description: "Marco fundacional de la administración patrimonial de RENACER CHURCH, INC.",
      articles: [
        {
          number: 1,
          title: "Naturaleza del Manual",
          content: [
            "El presente Manual Oficial de Administración, Finanzas y Mayordomía (REN-DOC-013) constituye la norma reglamentaria de Nivel 4 que rige la captación, custodia, administración, asignación, desembolso, registro contable y rendición de cuentas de todos los recursos económicos y patrimoniales de RENACER CHURCH.",
            "Este Manual no sustituye las disposiciones superiores de la Declaración de Fe (REN-DOC-001), la Constitución (REN-DOC-002) ni los Bylaws (REN-DOC-003), sino que las operativiza en procesos administrativos y de control interno.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-002", "REN-DOC-003"],
        },
        {
          number: 2,
          title: "Objeto y Ámbito de Aplicación",
          content: [
            "El objeto de este instrumento es garantizar una mayordomía bíblica intachable, una gestión financiera eficiente y una absoluta transparencia patrimonial ante Dios, la congregación y las autoridades civiles.",
            "Sus disposiciones son de observancia obligatoria para el Pastor Fundador, pastores asociados, miembros del Consejo de Gobierno, Consejo Ministerial, tesoreros, administradores, directores de ministerios, empleados y servidores voluntarios.",
          ],
        },
        {
          number: 3,
          title: "Personalidad Jurídica y Titularidad Patrimonial Exclusiva",
          content: [
            "Todo fondo económico, cuenta bancaria, donación, diezmo, ofrenda, activo mueble, equipo audiovisual, vehículo, tecnología o bien inmueble recibido, adquirido o mantenido por o para las actividades de la iglesia pertenece con exclusividad a la persona jurídica de RENACER CHURCH, INC. (DEC-DEF-008).",
            "Ningún pastor, ministro, oficial de gobierno, líder ministerial, miembro de la iglesia o donante ostenta derecho de propiedad personal, usufructo privativo o titularidad patrimonial sobre los bienes de la corporación.",
          ],
          dependencies: ["DEC-DEF-008"],
        },
        {
          number: 4,
          title: "Prohibición de Beneficio Privado Indebido",
          content: [
            "Queda terminantemente prohibido que los ingresos, patrimonio neto o recursos de RENACER CHURCH, INC. redunden en beneficio privado (inurement), enriquecimiento ilícito o lucro desmedido de cualquier oficial, ministro, donante o persona particular relacionada (DEC-DEF-011).",
            "Toda utilización indebida de fondos institucionales para fines personales constituirá falta grave de conformidad con el Código de Ética (REN-DOC-011) y dará lugar a las acciones civiles y penales correspondientes.",
          ],
          dependencies: ["DEC-DEF-011", "REN-DOC-011"],
        },
      ],
    },
    {
      number: "2",
      romanNumeral: "II",
      title: "PRINCIPIOS GENERALES DE MAYORDOMÍA, INTEGRIDAD Y TRANSPARENCIA",
      description: "Fundamentos éticos y doctrinales de la gestión de recursos.",
      articles: [
        {
          number: 5,
          title: "Principio de Mayordomía Bíblica Fiel",
          content: [
            "La mayordomía en RENACER se concibe como la administración diligente, sagrada y prudente de los bienes que Dios ha confiado a su Iglesia para el cumplimiento de la Gran Comisión y la edificación comunitaria (1 Corintios 4:2).",
            "Cada servidor que interviene en la administración de recursos financieros responderá ante Dios y ante las autoridades institucionales por la pulcritud y honestidad de sus actos.",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 6,
          title: "Integridad, Honestidad y Veracidad",
          content: [
            "Todos los asientos contables, registros de ingresos, actas de conteo, solicitudes de desembolso y reportes de gestión deben reflejar con absoluta exactitud la verdad material de los hechos.",
            "Se prohíbe cualquier forma de alteración documental, omisión maliciosa, registro paralelo o manipulación contable.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 7,
          title: "Transparencia Administrativa Responsable",
          content: [
            "La administración mantendrá libros y registros abiertos a la supervisión del Consejo de Gobierno y del Pastor Fundador, proveyendo a la congregación reportes periódicos de mayordomía (DEC-DEF-009).",
            "La transparencia congregacional se ejercerá protegiendo la confidencialidad de los datos personales de los donantes y la seguridad bancaria institucional.",
          ],
          dependencies: ["DEC-DEF-009"],
        },
        {
          number: 8,
          title: "Cero Tolerancia a la Coerción y Manipulación",
          content: [
            "La motivación bíblica para dar descansa en la gracia, el amor y la voluntariedad del creyente (2 Corintios 9:7).",
            "Queda prohibida cualquier táctica de manipulación emocional, presión psicológica, mercantilización de la fe, promesas de sanidad a cambio de dinero o intimidación espiritual.",
          ],
        },
      ],
    },
    {
      number: "3",
      romanNumeral: "III",
      title: "ESTRUCTURA DE GOBIERNO, AUTORIDADES Y RESPONSABILIDADES FINANCIERAS",
      description: "Delimitación funcional de competencias y autoridades de supervisión y gestión.",
      articles: [
        {
          number: 9,
          title: "Autoridad del Pastor Fundador en Materias Financieras Extraordinarias",
          content: [
            "El Pastor Fundador ejerce la autoridad final y derecho de veto en las decisiones financieras extraordinarias formalmente reservadas en la Constitución y Bylaws (adquisición o venta de bienes inmuebles, endeudamiento corporativo mayor, gravámenes y cambios estructurales) (DEC-DEF-004).",
            "En el ámbito ordinario, el Pastor Fundador vela por la preservación de la visión espiritual y la coherencia doctrinal de los presupuestos y gastos.",
          ],
          dependencies: ["DEC-DEF-004", "REN-DOC-002", "REN-DOC-003"],
        },
        {
          number: 10,
          title: "Atribuciones Administrativas del Consejo de Gobierno",
          content: [
            "El Consejo de Gobierno actúa como el órgano rector de la administración ordinaria, responsable de revisar y proponer el presupuesto anual, supervisar la ejecución financiera, autorizar compras ordinarias y custodiar el patrimonio corporativo.",
            "El Consejo de Gobierno sesiona periódicamente y revisa los balances y conciliaciones remitidos por la Tesorería.",
          ],
          dependencies: ["REN-DOC-003", "REN-DOC-004"],
        },
        {
          number: 11,
          title: "Deslinde Funcional del Consejo Ministerial",
          content: [
            "El Consejo Ministerial ejerce funciones estrictamente espirituales, doctrinales, pastorales y de comunión fraterna.",
            "El Consejo Ministerial no asume competencias de administración patrimonial, manejo de cuentas bancarias ni firma de contratos comerciales, preservando la especialización de roles.",
          ],
          dependencies: ["REN-DOC-004", "REN-DOC-006"],
        },
        {
          number: 12,
          title: "Responsabilidades de Tesorería y Administración",
          content: [
            "La Tesorería y la Administración General son responsables de la custodia operativa de fondos, emisión de recibos, registro cronológico en el libro mayor, conciliaciones bancarias y preparación de reportes financieros.",
            "El Tesorero no actúa como autoridad soberana de gasto, sino como custodio y ejecutor de las decisiones aprobadas presupuestariamente.",
          ],
        },
      ],
    },
    {
      number: "4",
      romanNumeral: "IV",
      title: "DOCTRINA ADMINISTRATIVA DE DIEZMOS, OFRENDAS, DONACIONES Y LIBRE GENEROSIDAD",
      description: "Normas de enseñanza, recepción y motivación de las contribuciones cristianas.",
      articles: [
        {
          number: 13,
          title: "Diezmos bajo la Gracia",
          content: [
            "La iglesia enseña el diezmo (la décima parte de los ingresos) como una práctica bíblica voluntaria de honra a Dios, fidelidad en la mayordomía y sustento del ministerio eclesiástico (Malaquías 3:10; Mateo 23:23; REN-DOC-001 Art. 15).",
            "El diezmo se presenta como fruto de un corazón agradecido bajo la gracia del Nuevo Pacto, no como un tributo legalista obligatorio bajo coacción.",
          ],
          dependencies: ["REN-DOC-001"],
        },
        {
          number: 14,
          title: "Ofrendas y Liberalidad Voluntaria",
          content: [
            "Las ofrendas son expresiones libres de amor, gratitud y generosidad congregacional destinadas a sostener el culto, la evangelización, la acción social y los proyectos comunitarios.",
            "Cada miembro y asistente contribuye conforme Dios le ha prosperado y según lo haya dispuesto en su corazón, con alegría y sin tristeza (2 Corintios 9:7).",
          ],
        },
        {
          number: 15,
          title: "Prohibición Expresa de Amenazas o Exclusión Económica",
          content: [
            "Se prohíbe categóricamente amenazar a los creyentes con la pérdida de la salvación, maldiciones o sanciones espirituales por causas financieras.",
            "Ninguna persona será excluida de la membresía, de la Santa Cena o del cuidado pastoral por encontrarse en situación de precariedad o incapacidad económica.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-011"],
        },
        {
          number: 16,
          title: "Donaciones Especiales y Prohibición de Endeudamiento Obligado",
          content: [
            "Las donaciones extraordinarias para misiones, construcción o benevolencia deben solicitarse con claridad de propósito y rendición de cuentas.",
            "Queda prohibido inducir o solicitar a los miembros congregacionales que contraigan deudas personales, créditos o hipotecas para realizar donaciones a la iglesia.",
          ],
        },
      ],
    },
    {
      number: "5",
      romanNumeral: "V",
      title: "CLASIFICACIÓN Y NATURALEZA DE LOS INGRESOS INSTITUCIONALES",
      description: "Tipología de recursos recibidos y registro de procedencia legítima.",
      articles: [
        {
          number: 17,
          title: "Categorización General de Ingresos",
          content: [
            "Los ingresos de RENACER CHURCH, INC. se clasifican contablemente en: Diezmos Generales, Ofrendas Ordinarias de Culto, Ofrendas Especiales de Misiones, Donaciones para Proyectos, Ofrendas de Benevolencia, Ingresos por Actividades Formativas y Donaciones en Especie.",
            "Cada ingreso debe identificarse de manera inequívoca en el sistema administrativo.",
          ],
        },
        {
          number: 18,
          title: "Ingresos Operativos Ordinarios",
          content: [
            "Constituyen el flujo financiero regular destinado a sufragar los gastos operativos ordinarios de la corporación (alquiler, suministros, servicios públicos, seguros, mantenimiento y compensaciones aprobadas).",
            "Se consolidan semanalmente mediante los depósitos bancarios de ofrendas y transferencias electrónicas verificadas.",
          ],
        },
        {
          number: 19,
          title: "Ingresos por Actividades y Materiales Formativos",
          content: [
            "Las cuotas de recuperación por concepto de materiales educativos de la Escuela de Discípulos (REN-DOC-007), Escuela de Líderes (REN-DOC-008) o Seminario Bíblico (REN-DOC-009), así como de retiros o conferencias, se destinarán con exclusividad a cubrir los costos operativos de dichos programas.",
            "No se generará lucro mercantil particular con los programas formativos institucionales.",
          ],
          dependencies: ["REN-DOC-007", "REN-DOC-008", "REN-DOC-009"],
        },
        {
          number: 20,
          title: "Registro y Acreditación de Fuentes Legítimas",
          content: [
            "Todo ingreso debe consignar: fecha, monto, moneda, categoría contable, método de recepción (efectivo, cheque, transferencia electrónica) y código de referencia.",
            "La iglesia no aceptará donaciones provenientes de actividades ilícitas o contrarias a la ética cristiana.",
          ],
        },
      ],
    },
    {
      number: "6",
      romanNumeral: "VI",
      title: "PROCEDIMIENTO SEGURO DE RECEPCIÓN, CONTEO Y CUSTODIA DE OFRENDAS",
      description: "Protocolo de doble control para el manejo del efectivo en servicios.",
      articles: [
        {
          number: 21,
          title: "Regla de Conteo por Dos Personas No Relacionadas",
          content: [
            "El conteo físico de las ofrendas y diezmos en efectivo recolectados durante los cultos debe ser realizado obligatoriamente por un mínimo de dos personas adultas designadas que no posean parentesco familiar entre sí ni vínculo conyugal (DEC-DEF-008).",
            "Se prohíbe que una sola persona realice el conteo o permanezca a solas con el dinero en efectivo.",
          ],
          dependencies: ["DEC-DEF-008"],
        },
        {
          number: 22,
          title: "Procedimiento de Traslado, Apertura y Verificación",
          content: [
            "Inmediatamente concluida la recolección en el servicio, los alfolíes o sobres se trasladan de forma visible y directa al recinto seguro de conteo.",
            "Los contadores designados proceden a abrir los sobres, separar billetes por denominación, contar monedas, verificar cheques y contrastar los datos declarados en sobres identificados.",
          ],
        },
        {
          number: 23,
          title: "Acta Oficial de Conteo y Cuadre de Caja",
          content: [
            "El resultado del conteo se registra de forma inmediata en el formulario oficial REN-FORM-FIN-005 (Acta Oficial de Conteo de Ofrendas), detallando el desglose por denominación, total en efectivo, total en cheques y gran total.",
            "El acta debe ser firmada en el acto por ambos contadores y por el Tesorero o supervisor administrativo presente.",
          ],
        },
        {
          number: 24,
          title: "Custodia Segura, Depósito Bancario y Trazabilidad",
          content: [
            "El dinero contado se coloca en una bolsa de seguridad sellada y se deposita en la caja fuerte institucional o se traslada para depósito bancario corporativo.",
            "El depósito en la cuenta corporativa debe realizarse con la mayor prontitud en días hábiles conforme al procedimiento administrativo [REQUIERE_REVISION_LEGAL/CONTABLE].",
          ],
          requiresAccountingReview: true,
        },
      ],
    },
    {
      number: "7",
      romanNumeral: "VII",
      title: "CUENTAS BANCARIAS CORPORATIVAS Y GESTIÓN DE TESORERÍA",
      description: "Normas de apertura, operatividad y reconciliación de cuentas de la corporación.",
      articles: [
        {
          number: 25,
          title: "Titularidad Bancaria Exclusiva",
          content: [
            "Todas las cuentas corrientes, de ahorros, inversiones o plataformas de pago digital deben estar abiertas y registradas a nombre exclusivo de: RENACER CHURCH, INC., utilizando su número de identificación fiscal federal (EIN) otorgado por el IRS (DEC-DEF-008).",
            "Queda terminantemente prohibido aperturar cuentas bancarias a nombre personal de pastores, tesoreros o líderes para canalizar fondos institucionales.",
          ],
          dependencies: ["DEC-DEF-008"],
        },
        {
          number: 26,
          title: "Apertura, Manejo y Firmas Autorizadas",
          content: [
            "La apertura de cuentas y la designación de firmantes autorizados requieren resolución formal del Consejo de Gobierno y ratificación del Pastor Fundador de conformidad con los estatutos.",
            "El esquema de firmas y accesos digitales se organizará garantizando supervisión cruzada y sin concentrar de forma unipersonal el control operativo [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 27,
          title: "Prohibición de Cuentas Personales y Mezcla de Fondos",
          content: [
            "Se prohíbe la co-mezcla (commingling) de fondos personales de cualquier ministro o miembro con los fondos corporativos de RENACER CHURCH, INC.",
            "No se admitirá el depósito de cheques personales en cuentas de la iglesia ni el endoso de cheques institucionales a favor de personas particulares.",
          ],
        },
        {
          number: 28,
          title: "Conciliación Bancaria Mensual Obligatoria",
          content: [
            "Dentro de los primeros diez (10) días hábiles de cada mes, la Tesorería elaborará la conciliación bancaria exhaustiva de todas las cuentas corporativas mediante el formulario REN-FORM-FIN-007.",
            "Toda diferencia, cargo desconocido, cheque no cobrado o inconsistencia debe ser investigada y aclarada de inmediato.",
          ],
        },
      ],
    },
    {
      number: "8",
      romanNumeral: "VIII",
      title: "CICLO PRESUPUESTARIO ANUAL: FORMULACIÓN, APROBACIÓN Y EJECUCIÓN",
      description: "Planeación económica y asignación responsable de recursos para el ejercicio fiscal.",
      articles: [
        {
          number: 29,
          title: "Principios del Presupuesto Anual",
          content: [
            "El Presupuesto Anual es el instrumento rector de planeación financiera que alinea los recursos materiales con la visión ministerial, misionera y educativa de RENACER.",
            "El presupuesto debe basarse en proyecciones de ingresos realistas y prudentes, evitando el déficit operativo planificado.",
          ],
        },
        {
          number: 30,
          title: "Fases del Ciclo Presupuestario",
          content: [
            "El ciclo comprende ocho (8) etapas consecutivas: 1) Preparación de necesidades por ministerios; 2) Consolidación de la propuesta por la Administración; 3) Revisión y análisis en Consejo de Gobierno; 4) Aprobación formal por el Pastor Fundador y Consejo; 5) Ejecución trimestral controlada; 6) Seguimiento y monitoreo mensual; 7) Modificaciones presupuestarias justificadas; y 8) Cierre y evaluación anual.",
          ],
        },
        {
          number: 31,
          title: "Partidas Presupuestarias Mínimas Obligatorias",
          content: [
            "El presupuesto debe contemplar como mínimo: Ministerios y Culto, Educación y Seminario (REN-DOC-007/008/009), Misiones y Evangelismo, Alquiler y Suministros de Sedes, Servicios Públicos, Seguros Corporativos, Tecnología y Comunicaciones, Mantenimiento y Equipamiento, Fondo de Benevolencia, Compensaciones Ministeriales y Gastos Administrativos Generales.",
          ],
        },
        {
          number: 32,
          title: "Monitoreo y Comparativo Presupuesto vs Real",
          content: [
            "Mensualmente la administración emitirá el informe comparativo entre lo presupuestado y lo efectivamente ejecutado.",
            "Cualquier desviación significativa o sobregiro requerirá justificación formal y reasignación de partida autorizada.",
          ],
        },
      ],
    },
    {
      number: "9",
      romanNumeral: "IX",
      title: "POLÍTICAS DE GASTOS INSTITUCIONALES, CLASIFICACIÓN Y AUTORIZACIONES",
      description: "Régimen de egresos y niveles de autorización corporativa.",
      articles: [
        {
          number: 33,
          title: "Principio de Legalidad y Justificación de Gastos",
          content: [
            "Todo desembolso de fondos debe responder a una finalidad estrictamente institucional, ministerial o de benevolencia autorizada.",
            "No se desembolsará ningún fondo que carezca de solicitud formal (REN-FORM-FIN-001) y comprobante fiscal o factura comercial válida.",
          ],
        },
        {
          number: 34,
          title: "Clasificación de Gastos",
          content: [
            "Los egresos se clasifican en: a) Gastos Presupuestados Ordinarios; b) Gastos Extraordinarios No Presupuestados; c) Gastos de Emergencia Operacional; d) Reembolsos Justificados; e) Adquisiciones de Capital; y f) Aportes de Benevolencia.",
          ],
        },
        {
          number: 35,
          title: "Umbrales de Aprobación Ordinaria vs Extraordinaria",
          content: [
            "Los gastos ordinarios comprendidos en el presupuesto anual son autorizados por el Administrador y Tesorero.",
            "Los gastos extraordinarios que excedan los límites ordinarios o impliquen compromisos contractuales relevantes requieren la aprobación del Consejo de Gobierno y ratificación del Pastor Fundador [PENDIENTE_DEFINIR parámetros cuantitativos exactos].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 36,
          title: "Prohibición Absoluta de Gastos Personales",
          content: [
            "Bajo ninguna circunstancia se imputarán a las cuentas de la iglesia gastos de índole personal, familiar, recreativa particular o privada de ningún ministro, empleado o miembro.",
            "El uso indebido de tarjetas o fondos institucionales para fines particulares se considerará apropiación indebida y falta ética de máxima gravedad.",
          ],
          dependencies: ["REN-DOC-011"],
        },
      ],
    },
    {
      number: "10",
      romanNumeral: "X",
      title: "PROCEDIMIENTO DE COMPRAS, ADQUISICIONES Y ASIGNACIÓN DE ACTIVOS",
      description: "Adquisición eficiente y transparente de suministros y equipamiento.",
      articles: [
        {
          number: 37,
          title: "Requerimiento y Solicitud de Compra",
          content: [
            "Toda compra inicia con el formulario REN-FORM-FIN-002 (Autorización de Compra), donde el líder de ministerio justifica la necesidad operativa, describe las especificaciones técnicas y señala la partida presupuestaria asignada.",
          ],
        },
        {
          number: 38,
          title: "Criterio de Cotizaciones y Eficiencia",
          content: [
            "Para compras significativas de suministros, tecnología o servicios profesionales, la administración procurará recabar cotizaciones comparativas a fin de garantizar la mejor relación de calidad y precio [PENDIENTE_DEFINIR número obligatorio de cotizaciones por rango de monto].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 39,
          title: "Proceso de Aprobación y Emisión de Orden",
          content: [
            "Una vez verificada la disponibilidad de fondos y aprobada la solicitud, la Administración emite la orden de compra oficial al proveedor seleccionado.",
          ],
        },
        {
          number: 40,
          title: "Recepción Conforme, Inventario e Incorporación",
          content: [
            "Al recibir el bien o servicio, el área solicitante firma la recepción a satisfacción y remite la factura comercial a Tesorería.",
            "Si el bien califica como activo fijo (equipos audiovisuales, computadoras, instrumentos), se registra de inmediato en la ficha de inventario REN-FORM-FIN-008.",
          ],
        },
      ],
    },
    {
      number: "11",
      romanNumeral: "XI",
      title: "REGISTRO DE PROVEEDORES, CONTRATACIONES Y CONTROL DE PARTES RELACIONADAS",
      description: "Transparencia comercial y prevención de favoritismos.",
      articles: [
        {
          number: 41,
          title: "Padrón Oficial de Proveedores",
          content: [
            "La administración mantendrá un registro actualizado de proveedores habituales que consigne razón social, identificación fiscal, dirección, contacto, referencias comerciales y catálogo de servicios.",
          ],
        },
        {
          number: 42,
          title: "Criterios de Selección e Idoneidad",
          content: [
            "La contratación de proveedores se fundamentará en criterios objetivos de calidad, solvencia técnica, precio de mercado, cumplimiento legal y reputación ética.",
          ],
        },
        {
          number: 43,
          title: "Contratación con Partes Relacionadas y Familiares",
          content: [
            "Toda adquisición de bienes o servicios a empresas pertenecientes a pastores, líderes, oficiales de gobierno o sus familiares consanguíneos o por afinidad debe ser revelada formalmente (REN-FORM-FIN-010).",
            "La contratación con partes relacionadas requiere acreditar que las condiciones y precios son iguales o más ventajosos que los del mercado abierto (arm's length) y exige la abstención del interesado en la votación.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 44,
          title: "Auditoría en Pagos a Terceros",
          content: [
            "Los desembolsos a proveedores se realizarán invariablemente mediante cheque corporativo nominativo o transferencia bancaria electrónica documentada. Se prohíbe el pago en efectivo para contratos o facturas comerciales mayores.",
          ],
        },
      ],
    },
    {
      number: "12",
      romanNumeral: "XII",
      title: "COMPENSACIÓN MINISTERIAL, PASTORAL Y RECONOCIMIENTOS DE SERVICIO",
      description: "Lineamientos de sostén ministerial bíblico, razonable y formalizado.",
      articles: [
        {
          number: 45,
          title: "Naturaleza de la Compensación Ministerial",
          content: [
            "Conforme a las Escrituras, los ministros del Evangelio que dedican su vida a la predicación y enseñanza tienen derecho al sustento digno y razonable por parte de la iglesia (1 Corintios 9:14; 1 Timoteo 5:17-18).",
            "La compensación no constituye un derecho automático abstracto ni un reparto de utilidades mercantiles, sino un estipendio pastoral fijado en función de la misión, dedicación y capacidad económica real de RENACER CHURCH, INC.",
          ],
          dependencies: ["REN-DOC-001", "REN-DOC-010"],
        },
        {
          number: 46,
          title: "Aprobación Formal y Prohibición de Autocompensación Unilateral",
          content: [
            "La remuneración pastoral y ministerial debe ser evaluada y aprobada por el Consejo de Gobierno, en consulta con el Pastor Fundador y comités pertinentes, quedando registrada en acta formal.",
            "Queda prohibido que cualquier ministro o pastor determine unilateralmente su propia remuneración o retire fondos a discreción sin autorización colegiada previa.",
          ],
        },
        {
          number: 47,
          title: "Estándares de Razonabilidad y Cumplimiento Legal",
          content: [
            "La compensación debe ajustarse a parámetros de razonabilidad para entidades eclesiásticas sin fines de lucro, evitando el riesgo de sanciones fiscales o beneficio privado indebido bajo la normativa del IRS [REQUIERE_REVISION_LEGAL/CONTABLE].",
            "La asignación de vivienda ministerial (Ministerial Housing Allowance) se regulará estrictamente conforme a la Sección 107 del Código de Rentas Internas previa resolución formal anual.",
          ],
          requiresLegalReview: true,
          requiresAccountingReview: true,
        },
        {
          number: 48,
          title: "Deslinde de Fondos Personales",
          content: [
            "Los fondos personales de los pastores o ministros no pueden utilizarse como sustituto de la contabilidad de la iglesia, ni los fondos de la iglesia pueden suplir obligaciones personales de los ministros sin registro de compensación formal.",
          ],
        },
      ],
    },
    {
      number: "13",
      romanNumeral: "XIII",
      title: "POLÍTICA Y PROCEDIMIENTO DE REEMBOLSO DE GASTOS OFICIALES",
      description: "Regulación estricta de reintegros por erogaciones de servicio.",
      articles: [
        {
          number: 49,
          title: "Principio de Reembolso por Gastos Institucionales Legítimos",
          content: [
            "La corporación reembolsará únicamente aquellos gastos efectuados por ministros o servidores con sus propios fondos cuando hayan sido realizados por causa justificada de servicio institucional y cuenten con autorización previa o ratificada.",
          ],
        },
        {
          number: 50,
          title: "Requisitos Documentales Obligatorios",
          content: [
            "Para tramitar un reembolso mediante REN-FORM-FIN-003, el solicitante debe presentar facturas o recibos comerciales originales y detallados (no vouchers de tarjeta genéricos), indicando fecha, concepto, monto y propósito ministerial específico.",
          ],
        },
        {
          number: 51,
          title: "Proceso de Verificación y Pago",
          content: [
            "La Tesorería revisa la autenticidad del comprobante, constata que no corresponda a gastos personales y emite el pago de reembolso mediante cheque corporativo o transferencia trazable.",
          ],
        },
        {
          number: 52,
          title: "Prohibición de Doble Reembolso",
          content: [
            "Queda terminantemente prohibido solicitar el reembolso de un gasto que ya fue cubierto mediante tarjeta institucional, caja chica o financiado por terceros. El doble cobro constituye falta ética grave.",
          ],
          dependencies: ["REN-DOC-011"],
        },
      ],
    },
    {
      number: "14",
      romanNumeral: "XIV",
      title: "FONDOS DESIGNADOS, FONDOS RESTRINGIDOS Y PROYECTOS ESPECÍFICOS",
      description: "Tratamiento contable y legal de donaciones con destino específico.",
      articles: [
        {
          number: 53,
          title: "Tipología de Fondos Especiales",
          content: [
            "Se distinguen: a) Fondos Generales (de libre disposición operativa); b) Fondos Designados Internamente (asignados por el Consejo para metas específicas pero reasignables); y c) Fondos Restringidos por Donantes (sujetos a estipulaciones externas de donación).",
          ],
        },
        {
          number: 54,
          title: "Requisitos para el Establecimiento de Restricciones",
          content: [
            "Para que un fondo sea formalmente clasificado como 'Restringido', debe mediar un acuerdo formal de donación o una campaña específica aprobada institucionalmente. Las menciones informales no crean restricciones jurídicas automáticas.",
          ],
        },
        {
          number: 55,
          title: "Intangibilidad y Respeto al Destino Donado",
          content: [
            "Los recursos recibidos para fondos restringidos (misiones, construcción, socorro) no podrán ser desviados ni utilizados para gastos operativos generales sin autorización expresa y cumplimiento de las normas aplicables.",
          ],
        },
        {
          number: 56,
          title: "Régimen Legal y Contable de Restricciones",
          content: [
            "La administración llevará subcuentas contables diferenciadas para cada fondo con restricción temporal o permanente, dando estricto cumplimiento a las normas contables FASB/GAAP para entidades sin fines de lucro [REQUIERE_REVISION_LEGAL/CONTABLE].",
          ],
          requiresAccountingReview: true,
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "15",
      romanNumeral: "XV",
      title: "FONDO DE AYUDA BENEVOLENTE Y ASISTENCIA SOCIAL PASTORAL",
      description: "Ministerio de socorro a necesitados con dignidad, equidad y discreción.",
      articles: [
        {
          number: 57,
          title: "Misión del Fondo de Benevolencia",
          content: [
            "El Fondo de Benevolencia es un recurso de amor cristiano destinado a brindar auxilio temporal y urgente a miembros de la congregación y personas de la comunidad que atraviesan situaciones imprevistas de calamidad, enfermedad o necesidad extrema (Gálatas 6:10).",
          ],
        },
        {
          number: 58,
          title: "Criterios Objetivos de Elegibilidad e Imparcialidad",
          content: [
            "La ayuda se otorgará con base en una evaluación objetiva de necesidad comprobable, sin favoritismos, discriminación ni preferencias arbitrarias.",
            "Toda solicitud se procesará bajo estricta confidencialidad pastoral mediante el formulario REN-FORM-FIN-009.",
          ],
        },
        {
          number: 59,
          title: "Prohibición de Coerción Espiritual o Condicionamiento",
          content: [
            "La ayuda benevolente se brinda por amor y misericordia; queda prohibido condicionar el auxilio a la asistencia obligatoria a cultos, exigencias de diezmar, sumisión a decisiones personales o coacción espiritual.",
          ],
        },
        {
          number: 60,
          title: "Aprobación, Desembolso y Límites",
          content: [
            "Las solicitudes son evaluadas por el Comité Pastoral de Benevolencia. Siempre que sea posible, los pagos se realizarán directamente a proveedores del servicio o bien necesario (arrendador, farmacia, supermercado, utilidad pública) en lugar de entregar efectivo directo [PENDIENTE_DEFINIR límites y topes por caso].",
          ],
          isPendingDefinition: true,
        },
      ],
    },
    {
      number: "16",
      romanNumeral: "XVI",
      title: "PATRIMONIO CORPORATIVO, INVENTARIO Y CONTROL DE ACTIVOS FIJOS",
      description: "Gestión, custodia física y desincorporación de bienes de la corporación.",
      articles: [
        {
          number: 61,
          title: "Categorías del Activo Institucional",
          content: [
            "El activo físico de RENACER CHURCH, INC. comprende: equipos de sonido e iluminación, cámaras y producción audiovisual, instrumentos musicales, mobiliario y silletería, computadoras y servidores, vehículos, herramientas de mantenimiento y bienes raíces.",
          ],
        },
        {
          number: 62,
          title: "Registro Maestro de Inventario Físico",
          content: [
            "La administración mantendrá el Registro Maestro de Activos Fijos (REN-FORM-FIN-008), identificando cada bien con código patrimonial único, descripción técnica, número de serie, fecha de compra, costo de adquisición, ubicación física y servidor custodio responsable.",
          ],
        },
        {
          number: 63,
          title: "Custodia, Mantenimiento y Uso Autorizado",
          content: [
            "Los activos de la iglesia se destinarán exclusivamente al ministerio y actividades oficiales. Queda prohibido el préstamo particular de equipos para eventos privados con fines de lucro sin autorización del Consejo de Gobierno.",
          ],
        },
        {
          number: 64,
          title: "Procedimiento de Baja y Disposición de Bienes",
          content: [
            "La baja de activos por obsolescencia, daño irreparable o desuso requiere dictamen técnico, aprobación del Consejo de Gobierno y registro en acta de cierre financiero.",
          ],
        },
      ],
    },
    {
      number: "17",
      romanNumeral: "XVII",
      title: "VEHÍCULOS CORPORATIVOS: PROPIEDAD, USO MINISTERIAL Y SEGUROS",
      description: "Normas de operación, mantenimiento y responsabilidad vial institucional.",
      articles: [
        {
          number: 65,
          title: "Titularidad Corporativa Exclusiva",
          content: [
            "Todo vehículo automotor utilizado para el transporte ministerial o misionero debe estar matriculado y titulado a nombre exclusivo de RENACER CHURCH, INC. ante la Comisión de Vehículos Motorizados (DMV) de New Jersey [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 66,
          title: "Conductores Autorizados y Uso Ministerial",
          content: [
            "Únicamente podrán conducir vehículos corporativos aquellas personas expresamente autorizadas por la Administración, que cuenten con licencia de conducir válida, récord de manejo limpio y verificación de antecedentes.",
            "Los vehículos se utilizarán con exclusividad para traslados oficiales, actividades juveniles/infantiles autorizadas y misiones.",
          ],
        },
        {
          number: 67,
          title: "Bitácora de Viaje, Mantenimiento y Combustible",
          content: [
            "Cada vehículo contará con una bitácora obligatoria donde se registre kilometraje inicial/final, fecha, conductor, destino, propósito del viaje y comprobantes de combustible.",
          ],
        },
        {
          number: 68,
          title: "Pólizas de Seguro y Protocolo ante Siniestros",
          content: [
            "Todo vehículo institucional debe contar con póliza de seguro automotor comercial completa que cubra responsabilidad civil, daños a terceros y colisión.",
            "En caso de accidente, el conductor debe seguir el protocolo de reporte policial inmediato, auxilio médico y notificación a la aseguradora y administración.",
          ],
        },
      ],
    },
    {
      number: "18",
      romanNumeral: "XVIII",
      title: "BIENES INMUEBLES, ARRENDAMIENTOS Y OPERACIONES EXTRAORDINARIAS",
      description: "Régimen de sedes, contratos locativos y facultades inmobiliarias.",
      articles: [
        {
          number: 69,
          title: "Régimen Patrimonial Inmobiliario",
          content: [
            "Los templos, locales, terrenos o edificaciones adquiridos o arrendados por RENACER se inscribirán a nombre exclusivo de RENACER CHURCH, INC. de conformidad con las leyes de New Jersey y los estatutos corporativos (DEC-DEF-008).",
          ],
          dependencies: ["DEC-DEF-008", "REN-DOC-003"],
        },
        {
          number: 70,
          title: "Contratos de Arrendamiento y Mejoras Locativas",
          content: [
            "La celebración o rescisión de contratos de arrendamiento para locales de culto o sedes ministeriales requiere aprobación del Consejo de Gobierno y revisión jurídica previa.",
            "Las mejoras locativas se coordinarán garantizando licencias municipales de construcción y seguridad pertinentes.",
          ],
        },
        {
          number: 71,
          title: "Operaciones Extraordinarias: Compra, Venta o Gravamen",
          content: [
            "Cualquier decisión relativa a la compraventa de bienes raíces, constitución de hipotecas, servidumbres o gravámenes patrimoniales requiere la aprobación expresa del Pastor Fundador y mayoría calificada del Consejo de Gobierno de conformidad con los Bylaws (REN-DOC-003) [REQUIERE_REVISION_LEGAL].",
          ],
          dependencies: ["REN-DOC-003"],
          requiresLegalReview: true,
        },
        {
          number: 72,
          title: "Seguridad y Pólizas Edilicias",
          content: [
            "Todas las instalaciones deben contar con inspección periódica de seguridad contra incendios, salidas de emergencia señalizadas y póliza de seguro sobre la propiedad y responsabilidad en predios.",
          ],
        },
      ],
    },
    {
      number: "19",
      romanNumeral: "XIX",
      title: "DONACIONES DE BIENES MUEBLES, EQUIPOS Y ESPECIE",
      description: "Procedimiento de evaluación, recepción y registro de aportes no dinerarios.",
      articles: [
        {
          number: 73,
          title: "Procedimiento de Recepción de Bienes en Especie",
          content: [
            "La recepción de donaciones de mobiliario, instrumentos, vehículos o tecnología se canalizará a través de la Administración mediante el formulario REN-FORM-FIN-014.",
          ],
        },
        {
          number: 74,
          title: "Criterios de Utilidad, Evaluación y Aceptación",
          content: [
            "La iglesia evaluará si el bien donado es de utilidad práctica real para el ministerio y si se encuentra en condiciones operativas dignas.",
            "Se rechazarán bienes deteriorados que impliquen costos desproporcionados de reparación o disposición.",
          ],
        },
        {
          number: 75,
          title: "Registro Contable y Carta de Agradecimiento",
          content: [
            "Los bienes aceptados se incorporan al inventario institucional con su valor estimado de mercado razonable y se emite la correspondiente carta formal de recepción al donante (sin tasar valor comercial en el recibo conforme a directrices del IRS).",
          ],
        },
        {
          number: 76,
          title: "Rechazo de Bienes con Cargas o Incompatibles",
          content: [
            "No se aceptarán donaciones condicionadas a exigencias contrarias a la Declaración de Fe o que impongan cargas financieras insostenibles a la corporación.",
          ],
        },
      ],
    },
    {
      number: "20",
      romanNumeral: "XX",
      title: "MANEJO DE CAJA CHICA, EFECTIVO Y TARJETAS DE PAGO INSTITUCIONALES",
      description: "Control de fondos menores y medios de pago corporativos.",
      articles: [
        {
          number: 77,
          title: "Operación de Caja Chica y Gastos Menores",
          content: [
            "Se establece un fondo fijo de Caja Chica destinado exclusivamente a sufragar compras urgentes y gastos operativos menores de monto reducido.",
            "El fondo de caja chica operará bajo la custodia de un único responsable administrativo [PENDIENTE_DEFINIR monto máximo y límite por recibo].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 78,
          title: "Emisión, Custodia y Uso de Tarjetas Corporativas",
          content: [
            "Las tarjetas de débito o crédito corporativas se emitirán a nombre de la institución y se asignarán a oficiales formalmente autorizados para compras presupuestadas de la iglesia [PENDIENTE_DEFINIR límites transaccionales y mensuales].",
          ],
          isPendingDefinition: true,
        },
        {
          number: 79,
          title: "Prohibición de Retiros de Efectivo sin Soporte y Gastos Personales",
          content: [
            "Queda estrictamente prohibido realizar retiros de efectivo mediante cajeros automáticos con tarjetas corporativas salvo autorización de emergencia documentada.",
            "Queda prohibido utilizar la tarjeta corporativa para gastos particulares, aun cuando se pretenda reembolsar posteriormente.",
          ],
        },
        {
          number: 80,
          title: "Rendición de Cuentas y Reposición de Fondos",
          content: [
            "Para reponer el fondo de caja chica o conciliar el extracto de tarjeta, el custodio debe presentar la planilla con todos los comprobantes originales que sumen exactamente el monto erogado.",
          ],
        },
      ],
    },
    {
      number: "21",
      romanNumeral: "XXI",
      title: "CONTRATOS, OBLIGACIONES Y OPERACIONES DE CRÉDITO CORPORATIVO",
      description: "Niveles de suscripción de contratos comerciales y endeudamiento.",
      articles: [
        {
          number: 81,
          title: "Capacidad de Contratación y Niveles de Firma",
          content: [
            "Únicamente los oficiales corporativos formalmente facultados en los Bylaws (Presidente/Pastor Fundador, Tesorero, Secretario) pueden obligar contractualmente a RENACER CHURCH, INC.",
            "Ningún líder de ministerio o pastor asociado podrá suscribir contratos a nombre de la iglesia sin poder formal otorgado.",
          ],
          dependencies: ["REN-DOC-003"],
        },
        {
          number: 82,
          title: "Contratos Ordinarios de Servicios y Suministros",
          content: [
            "Los contratos de servicios regulares (seguridad, limpieza, software, plataformas web, mantenimiento) se tramitan mediante REN-FORM-FIN-013 y son aprobados por la Administración.",
          ],
        },
        {
          number: 83,
          title: "Operaciones de Crédito, Deuda y Préstamos Bancarios",
          content: [
            "La contratación de préstamos bancarios, líneas de crédito o gravámenes sobre el patrimonio requiere resolución solemne del Consejo de Gobierno y aprobación expresa del Pastor Fundador.",
            "La iglesia procurará una gestión libre de endeudamiento desmedido conforme al principio de prudencia cristiana.",
          ],
        },
        {
          number: 84,
          title: "Revisión Jurídica Previa Obligatoria",
          content: [
            "Todo contrato comercial, acuerdo de servicios o instrumento crediticio mayor a celebrarse en el Estado de New Jersey debe ser sometido a dictamen de asesoría jurídica antes de su suscripción [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
      ],
    },
    {
      number: "22",
      romanNumeral: "XXII",
      title: "POLÍTICA DE CONFLICTOS DE INTERÉS FINANCIEROS Y OPERACIONES RELACIONADAS",
      description: "Protocolo de revelación, evaluación y abstención en decisiones económicas.",
      articles: [
        {
          number: 85,
          title: "Definición y Alcance del Conflicto de Interés",
          content: [
            "Existe conflicto de interés cuando un oficial, pastor, directivo o empleado de RENACER tiene un interés económico personal, directo o a través de un familiar cercano, que pudiera influir o verse beneficiado por una decisión de la iglesia.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 86,
          title: "Deber de Declaración Anual y Revelación Oportuna",
          content: [
            "Todos los oficiales de gobierno, pastores y encargados de compras suscribirán anualmente el formulario REN-FORM-FIN-010 (Declaración de Conflicto de Interés Financiero).",
            "Asimismo, deberán revelar en el acto cualquier interés particular previo al tratamiento de una operación específica.",
          ],
        },
        {
          number: 87,
          title: "Deber de Abstención en Deliberaciones y Votos",
          content: [
            "La persona involucrada en un conflicto de interés se retirará de la sala durante la deliberación y se abstendrá obligatoriamente de participar en la votación correspondiente.",
          ],
        },
        {
          number: 88,
          title: "Documentación y Archivo de Actas",
          content: [
            "El acta de la sesión dejará constancia formal de la revelación, la abstención y los fundamentos por los cuales se concluyó que la operación es en el mejor interés de la iglesia.",
          ],
        },
      ],
    },
    {
      number: "23",
      romanNumeral: "XXIII",
      title: "PREVENCIÓN DE FRAUDE, MAL USO DE RECURSOS Y PROTOCOLOS DE DENUNCIA",
      description: "Salvaguarda del patrimonio institucional y canal de denuncias éticas.",
      articles: [
        {
          number: 89,
          title: "Tipificación de Conductas Prohibidas",
          content: [
            "Constituyen faltas graves y causales de destitución inmediata: a) Apropiación indebida de fondos o ofrendas; b) Falsificación o alteración de facturas y recibos; c) Manipulación contable o registros paralelos; d) Desvío de donaciones restringidas; e) Uso particular no autorizado de bienes o tarjetas; f) Sobornos y comisiones ilegales; y g) Sustracción o daño intencional de activos.",
          ],
          dependencies: ["REN-DOC-011"],
        },
        {
          number: 90,
          title: "Canal Interno Seguro de Denuncia (Whistleblower)",
          content: [
            "Cualquier miembro, voluntario o empleado que tenga conocimiento fundamentado de una irregularidad financiera podrá reportarlo de manera confidencial y protegida mediante el formulario REN-FORM-FIN-012.",
            "Se garantiza la prohibición absoluta de represalias contra quien efectúe una denuncia de buena fe.",
          ],
        },
        {
          number: 91,
          title: "Procedimiento de Investigación y Debido Proceso",
          content: [
            "El Comité de Ética y Auditoría llevará adelante la indagación objetiva y reservada de los hechos, escuchando al denunciado y verificando la evidencia documental.",
          ],
        },
        {
          number: 92,
          title: "Acciones Correctivas y Deber de No Ocultamiento",
          content: [
            "En caso de comprobarse fraude o daño patrimonial, se exigirá la restitución integral del recurso y se aplicará la disciplina eclesiástica correspondiente (REN-DOC-005).",
            "Si los hechos revisten caracteres de presunto delito civil o penal, la iglesia no encubrirá los hechos y cooperará con las autoridades competentes.",
          ],
          dependencies: ["REN-DOC-005", "REN-DOC-011"],
        },
      ],
    },
    {
      number: "24",
      romanNumeral: "XXIV",
      title: "TRANSPARENCIA INSTITUCIONAL, RENDICIÓN DE CUENTAS Y PRIVACIDAD",
      description: "Equilibrio entre información congregacional y custodia de datos sensibles.",
      articles: [
        {
          number: 93,
          title: "Niveles de Información Financiera Institucional",
          content: [
            "Se establecen cuatro niveles de acceso a la información: 1) Información Pública (declaración de principios y misión); 2) Información Congregacional (resúmenes anuales de mayordomía y ejecución de metas); 3) Información Administrativa (presupuestos y libros mayores para oficiales); y 4) Información Confidencial Restringida (datos individuales de donantes, salarios ministeriales específicos y registros de benevolencia).",
          ],
        },
        {
          number: 94,
          title: "Protección Absoluta de Datos de Donantes",
          content: [
            "El registro individual de los diezmos y donaciones de cada creyente es estrictamente confidencial. Queda prohibido publicar listas públicas de donantes con montos aportados o divulgar su información financiera.",
            "Los datos de donantes jamás serán vendidos, cedidos ni transferidos a empresas comerciales o terceros.",
          ],
        },
        {
          number: 95,
          title: "Seguridad de Cuentas y Accesos Bancarios",
          content: [
            "Los números de cuenta completos, claves de acceso electrónico bancario, firmas digitales y contraseñas de tesorería constituyen información reservada de máxima seguridad.",
          ],
        },
        {
          number: 96,
          title: "Reportes de Mayordomía a la Congregación",
          content: [
            "Al término de cada ejercicio fiscal, la iglesia presentará a la congregación un informe general de mayordomía que resuma los avances misioneros, la ejecución del presupuesto y el sostenimiento de la obra de Dios.",
          ],
        },
      ],
    },
    {
      number: "25",
      romanNumeral: "XXV",
      title: "CONTABILIDAD GENERAL, LIBRO MAYOR Y CONCILIACIONES PERIÓDICAS",
      description: "Estándares contables y registro cronológico de operaciones.",
      articles: [
        {
          number: 97,
          title: "Estándares Contables Aplicables",
          content: [
            "La contabilidad institucional se llevará conforme a las normas de contabilidad generalmente aceptadas para organizaciones religiosas sin fines de lucro en los Estados Unidos (FASB/GAAP) [REQUIERE_REVISION_LEGAL/CONTABLE].",
          ],
          requiresAccountingReview: true,
        },
        {
          number: 98,
          title: "Registro Cronológico en Libro Mayor",
          content: [
            "Cada transacción de ingreso o egreso se asentará cronológicamente en el Libro Mayor contable, especificando fecha, comprobante, cuenta contable, tercero y centro de costos.",
          ],
        },
        {
          number: 99,
          title: "Control de Cuentas por Pagar y Pasivos Operativos",
          content: [
            "La Tesorería mantendrá el control estricto de las obligaciones pendientes de pago (servicios, seguros, proveedores) a fin de evitar recargos o morosidades que afecten el crédito de la institución.",
          ],
        },
        {
          number: 100,
          title: "Protocolo de Conciliación y Detección de Desviaciones",
          content: [
            "La conciliación mensual cotejará libro mayor, extractos bancarios y actas de conteo, dejando evidencia firmada de cualquier ajuste contable necesario.",
          ],
        },
      ],
    },
    {
      number: "26",
      romanNumeral: "XXVI",
      title: "SISTEMA DE REPORTES FINANCIEROS, CIERRE MENSUAL Y CIERRE ANUAL",
      description: "Generación de estados financieros periódicos y formalización del cierre fiscal.",
      articles: [
        {
          number: 101,
          title: "Estructura del Reporte Mensual Administrativo",
          content: [
            "El Reporte Mensual Administrativo incluirá: Balance de Ingresos por categoría, Balance de Gastos por partida, Estado de Cuentas Bancarias, Detalle de Fondos Restringidos y Conciliación Bancaria consolidada.",
          ],
        },
        {
          number: 102,
          title: "Estados Financieros Periódicos y Comparativo Presupuestal",
          content: [
            "Trimestralmente se emitirá el Estado de Actividades y Situación Financiera para revisión del Consejo de Gobierno y evaluación del desempeño de los ministerios.",
          ],
        },
        {
          number: 103,
          title: "Procedimiento de Cierre Financiero Anual",
          content: [
            "Al finalizar el año fiscal (31 de diciembre), la Tesorería elabora el cierre contable integral mediante REN-FORM-FIN-015, realizando el inventario físico de activos, cuadre de fondos y consolidación del ejercicio.",
          ],
        },
        {
          number: 104,
          title: "Presentación y Archivo al Consejo de Gobierno",
          content: [
            "El balance general de cierre anual se somete a dictamen del Consejo de Gobierno y aprobación solemne del Pastor Fundador, archivándose permanentemente.",
          ],
        },
      ],
    },
    {
      number: "27",
      romanNumeral: "XXVII",
      title: "AUDITORÍA INTERNA, REVISIONES CONTABLES Y CONTROL INTERNO",
      description: "Mecanismos de supervisión, verificación y mejora continua de procesos.",
      articles: [
        {
          number: 105,
          title: "Misión del Control Interno",
          content: [
            "El control interno tiene por finalidad prevenir errores, salvaguardar los activos corporativos, verificar la veracidad de la contabilidad y promover la eficiencia operacional.",
          ],
        },
        {
          number: 106,
          title: "Pruebas de Cumplimiento y Muestreo",
          content: [
            "La Comisión de Auditoría Interna designada por el Consejo efectuará revisiones periódicas por muestreo sobre comprobantes de gasto, actas de conteo, nóminas y conciliaciones bancarias.",
          ],
        },
        {
          number: 107,
          title: "Revisiones Contables y Auditorías Externas Eventuales",
          content: [
            "El Consejo de Gobierno y el Pastor Fundador podrán acordar la contratación de una firma de contadores públicos independientes (CPA) para realizar una compilación, revisión o auditoría externa cuando el volumen financiero o requerimientos institucionales lo aconsejen [REQUIERE_REVISION_LEGAL/CONTABLE].",
          ],
          requiresAccountingReview: true,
        },
        {
          number: 108,
          title: "Informe de Hallazgos y Medidas Correctivas",
          content: [
            "Todo informe de auditoría concluirá con recomendaciones formales y un plan de acción correctivo de obligatorio seguimiento por la Administración.",
          ],
        },
      ],
    },
    {
      number: "28",
      romanNumeral: "XXVIII",
      title: "SEPARACIÓN DE FUNCIONES Y CONTROLES COMPENSATORIOS",
      description: "Segregación de deberes y adaptación proporcional al tamaño institucional.",
      articles: [
        {
          number: 109,
          title: "Matriz de Segregación de Funciones",
          content: [
            "La administración procurará separar funcionalmente las cuatro etapas clave del proceso financiero: 1) Autorización del gasto; 2) Custodia de fondos y valores; 3) Registro contable; y 4) Conciliación y revisión periódica.",
          ],
        },
        {
          number: 110,
          title: "Controles Compensatorios para Congregaciones en Crecimiento",
          content: [
            "Cuando la estructura de personal sea reducida y una misma persona deba asumir más de un rol operativo, se implementarán controles compensatorios obligatorios (doble conteo en actas, revisión mensual obligatoria por un oficial independiente y reporte directo al Pastor Fundador).",
          ],
        },
        {
          number: 111,
          title: "Supervisión Cruzada y Verificaciones Periódicas",
          content: [
            "Ninguna transacción financiera podrá completarse de principio a fin por una sola persona sin una instancia de supervisión cruzada.",
          ],
        },
        {
          number: 112,
          title: "Prohibición de Concentración Absoluta de Facultades",
          content: [
            "Se prohíbe concentrar en una sola persona la capacidad de aprobar gastos, firmar cheques, custodiar efectivo y realizar la conciliación contable.",
          ],
        },
      ],
    },
    {
      number: "29",
      romanNumeral: "XXIX",
      title: "GESTIÓN DE EMERGENCIAS FINANCIERAS Y CONTINGENCIAS PATRIMONIALES",
      description: "Protocolos ante siniestros imprevistos, reparaciones críticas o crisis operacionales.",
      articles: [
        {
          number: 113,
          title: "Definición y Tipos de Emergencias Financieras",
          content: [
            "Se consideran emergencias financieras: daños graves e imprevistos en sedes o templos (roturas de tuberías, fallas de calefacción/electricidad, tormentas), fallas críticas en sistemas de seguridad, pérdidas de acceso a cuentas bancarias o contingencias operacionales urgentes.",
          ],
        },
        {
          number: 114,
          title: "Procedimiento de Respuesta Inmediata y Desembolso Urgente",
          content: [
            "Ante una emergencia comprobada, el Administrador y el Pastor Fundador podrán autorizar desembolsos urgentes indispensables para mitigar el daño o restablecer la seguridad, aun cuando no estén expresamente desglosados en el presupuesto ordinario.",
          ],
        },
        {
          number: 115,
          title: "Documentación, Notificación y Regularización",
          content: [
            "Toda erogación de emergencia debe ser documentada con facturas y fotografías dentro de las 48 horas siguientes, y presentada al Consejo de Gobierno en su siguiente reunión para su regularización presupuestaria.",
          ],
        },
        {
          number: 116,
          title: "Prohibición de Autoridades Extraordinarias Permanentes",
          content: [
            "La facultad de emergencia es de naturaleza estrictamente excepcional y transitoria; no confiere potestades de gasto permanente ni altera el régimen ordinario de gobierno.",
          ],
        },
      ],
    },
    {
      number: "30",
      romanNumeral: "XXX",
      title: "PÓLIZAS DE SEGURO CORPORATIVO, RESPONSABILIDAD Y PROTECCIÓN PATRIMONIAL",
      description: "Coberturas de seguros requeridas para blindar la misión y el patrimonio.",
      articles: [
        {
          number: 117,
          title: "Coberturas de Seguros Institucionales Obligatorias",
          content: [
            "RENACER CHURCH, INC. mantendrá vigentes pólizas de seguro comerciales adecuadas para proteger sus instalaciones, actividades y personas de conformidad con las leyes de New Jersey [REQUIERE_REVISION_LEGAL].",
          ],
          requiresLegalReview: true,
        },
        {
          number: 118,
          title: "Seguro de Responsabilidad Civil General y Ministerial",
          content: [
            "Las coberturas institucionales deben incluir responsabilidad civil general (General Liability), responsabilidad por actos pastorales/consejeros y cobertura contra daños a la propiedad.",
          ],
        },
        {
          number: 119,
          title: "Póliza de Fianza / Surety Bond de Manejo Financiero",
          content: [
            "La contratación de pólizas de fidelidad (Fidelity Bond / Surety Bond) para custodios de fondos y tesoreros permanece sujeta a determinación de necesidad [PENDIENTE_DEFINIR / REQUIERE_REVISION_LEGAL].",
          ],
          isPendingDefinition: true,
          requiresLegalReview: true,
        },
        {
          number: 120,
          title: "Gestión y Registro Anual de Pólizas",
          content: [
            "La administración mantendrá en archivo copias de todas las pólizas vigentes, calendarios de vencimiento y pagos de primas, asegurando la no interrupción de la cobertura.",
          ],
        },
      ],
    },
    {
      number: "31",
      romanNumeral: "XXXI",
      title: "CUMPLIMIENTO TRIBUTARIO, PRIVACIDAD DE DONANTES Y TECNOLOGÍA FINANCIERA",
      description: "Delimitación legal fiscal, emisión de certificados y pasarelas de pago.",
      articles: [
        {
          number: 121,
          title: "Delimitación: No Sustitución de Asesoría Profesional",
          content: [
            "Las directrices del presente manual tienen propósito exclusivamente reglamentario interno y no constituyen asesoramiento legal, contable ni fiscal profesional.",
            "Para cualquier determinación impositiva o laboral, la corporación recurrirá a profesionales licenciados.",
          ],
        },
        {
          number: 122,
          title: "Exenciones Fiscales y Cumplimiento Normativo",
          content: [
            "La corporación operará preservando en todo momento los requisitos para entidades religiosas exentas de impuestos bajo la Sección 501(c)(3) del Código de Rentas Internas de los Estados Unidos y exenciones estatales aplicables en New Jersey [REQUIERE_REVISION_LEGAL/CONTABLE].",
          ],
          requiresLegalReview: true,
          requiresAccountingReview: true,
        },
        {
          number: 123,
          title: "Emisión de Declaraciones Anuales de Contribución para Donantes",
          content: [
            "Antes del 31 de enero de cada año, la iglesia emitirá a solicitud de los donantes identificados su constancia anual formal de contribuciones, cumpliendo con las leyendas obligatorias del IRS relativas a que no se proveyeron bienes ni servicios a cambio de la donación.",
          ],
        },
        {
          number: 124,
          title: "Plataformas Digitales, Pasarelas de Pago y Seguridad Informática",
          content: [
            "Las donaciones recibidas por medios digitales (aplicaciones móviles, sitio web, terminales de pago) se procesarán únicamente mediante pasarelas financieras seguras y certificadas PCI-DSS.",
            "Queda prohibido almacenar números de tarjetas de crédito o credenciales bancarias de miembros en servidores institucionales.",
          ],
        },
      ],
    },
    {
      number: "32",
      romanNumeral: "XXXII",
      title: "ARCHIVO DOCUMENTAL, CATÁLOGO DE FORMULARIOS Y DISPOSICIONES FINALES",
      description: "Conservación de registros financieros, catálogo de formatos y vigencia.",
      articles: [
        {
          number: 125,
          title: "Custodia y Archivo con REN-DOC-019",
          content: [
            "Todos los libros de contabilidad, actas de conteo, estados de cuenta bancarios, facturas y reportes de auditoría se conservarán de forma ordenada y protegida conforme al Reglamento de Archivo y Registros (REN-DOC-019).",
            "Los períodos de conservación física y digital se ajustarán a las directrices legales aplicables [PENDIENTE_DEFINIR plazos específicos].",
          ],
          dependencies: ["REN-DOC-019"],
          isPendingDefinition: true,
        },
        {
          number: 126,
          title: "Catálogo Oficial de Formularios Financieros",
          content: [
            "Se formaliza el catálogo oficial de quince (15) formularios administrativos y financieros: REN-FORM-FIN-001 (Solicitud de Gasto), REN-FORM-FIN-002 (Autorización de Compra), REN-FORM-FIN-003 (Solicitud de Reembolso), REN-FORM-FIN-004 (Registro de Ingreso), REN-FORM-FIN-005 (Acta de Conteo de Ofrendas), REN-FORM-FIN-006 (Registro de Depósito), REN-FORM-FIN-007 (Conciliación Financiera), REN-FORM-FIN-008 (Registro de Activo), REN-FORM-FIN-009 (Solicitud de Ayuda Benevolente), REN-FORM-FIN-010 (Declaración de Conflicto de Interés), REN-FORM-FIN-011 (Solicitud de Compra de Activo), REN-FORM-FIN-012 (Reporte de Incidente Financiero), REN-FORM-FIN-013 (Solicitud de Contrato), REN-FORM-FIN-014 (Registro de Donación de Bien) y REN-FORM-FIN-015 (Cierre Financiero).",
          ],
        },
        {
          number: 127,
          title: "Procedimiento de Revisión, Enmienda y Cláusula de No Adopción",
          content: [
            "El presente Manual Oficial de Administración, Finanzas y Mayordomía (REN-DOC-013) se expide formalmente como BORRADOR NO ADOPTADO (v0.1) en estado EN_REDACCION.",
            "Cualquier modificación futura requerirá dictamen favorable del Consejo de Gobierno y aprobación solemne del Pastor Fundador, debiendo ser sometido previamente a revisión letrada y contable.",
          ],
        },
        {
          number: 128,
          title: "Cláusula de Entrada en Vigencia y Supremacía Estatutaria",
          content: [
            "Una vez adoptado formalmente por los órganos competentes y cumplida la revisión legal correspondiente, este Manual regirá la vida financiera de RENACER CHURCH, INC.",
            "En caso de conflicto o contradicción entre las disposiciones de este Manual y los Bylaws o la Constitución de la corporación, prevalecerán en todo momento estos últimos.",
          ],
          dependencies: ["REN-DOC-002", "REN-DOC-003"],
        },
      ],
    },
  ],
  formsCatalog: FINANCIAL_FORMS_CATALOG,
};

/**
 * Genera el documento Markdown sustancial y completo de REN-DOC-013
 */
export function generateFullFinancesManualMarkdown(): string {
  const d = FINANCES_MANUAL_DRAFT;

  let md = `# ${d.title}\n\n`;
  md += `**Código:** ${d.documentNumber} | **Versión:** ${d.version} | **Nivel:** ${d.hierarchyLevel}\n`;
  md += `**Categoría:** ${d.category} | **Subcategoría:** ${d.subcategory}\n`;
  md += `**DocumentState:** ${d.documentState} | **DecisionState:** ${d.decisionState} | **Adoption:** ${d.adoptionState}\n`;
  md += `**LegalState:** ${d.legalState} | **Área Responsable:** ${d.responsibleArea}\n`;
  md += `**Autor:** ${d.author} | **Autoridad de Aprobación:** ${d.approvalAuthority}\n\n`;
  md += `> [!IMPORTANT]\n`;
  md += `> **BORRADOR — NO ADOPTADO**\n`;
  md += `> **REQUIERE REVISIÓN LEGAL Y CONTABLE**\n`;
  md += `> El presente manual no sustituye asesoramiento legal, tributario o contable profesional y se encuentra en proceso de redacción y revisión institucional.\n\n`;

  md += `## RESUMEN EJECUTIVO\n\n${d.pithySummary}\n\n`;

  md += `## PREÁMBULO DOCTRINAL Y PATRIMONIAL\n\n${d.preamble}\n\n`;

  md += `## PRINCIPIO INSTITUCIONAL FUNDAMENTAL\n\n`;
  md += `Todo dinero, ofrenda, diezmo, activo, cuenta bancaria, propiedad inmobiliaria, vehículo o recurso material recibido o adquirido para las actividades de RENACER pertenece a **RENACER CHURCH, INC.** (persona jurídica corporativa sin fines de lucro en New Jersey). Ningún pastor, ministro, oficial, líder o donante ostenta propiedad personal sobre los bienes de la corporación.\n\n`;

  md += `## ÍNDICE GENERAL DE TÍTULOS\n\n`;
  d.titles.forEach((t) => {
    md += `- **TÍTULO ${t.romanNumeral}:** ${t.title} *(Artículos ${t.articles[0].number} al ${t.articles[t.articles.length - 1].number})*\n`;
  });
  md += `\n---\n\n`;

  // Cuerpo articulado
  d.titles.forEach((t) => {
    md += `## TÍTULO ${t.romanNumeral} — ${t.title}\n\n`;
    md += `*${t.description}*\n\n`;

    t.articles.forEach((art) => {
      md += `### Artículo ${art.number}. ${art.title}\n\n`;
      art.content.forEach((paragraph) => {
        md += `${paragraph}\n\n`;
      });

      if (art.dependencies && art.dependencies.length > 0) {
        md += `*Vínculos y Dependencias:* ${art.dependencies.join(", ")}\n\n`;
      }

      if (art.requiresLegalReview || art.requiresAccountingReview) {
        md += `> [!WARNING]\n> **Nota de Revisión Especial:** Este artículo contiene materias sujetas a dictamen profesional [REQUIERE_REVISION_LEGAL/CONTABLE].\n\n`;
      }

      if (art.isPendingDefinition) {
        md += `> [!NOTE]\n> **Parámetro Pendiente:** Criterio o umbral cuantitativo [PENDIENTE_DEFINIR].\n\n`;
      }
    });

    md += `---\n\n`;
  });

  // Catálogo de Formularios
  md += `## CATÁLOGO DE FORMULARIOS Y DOCUMENTACIÓN FINANCIERA\n\n`;
  md += `Se establece el siguiente padrón oficial de 15 formularios administrativos para la operatividad de REN-DOC-013:\n\n`;
  md += `| Código | Título del Formulario | Propósito Administrativo | Rol Responsable | Frecuencia | Categoría Archivo |\n`;
  md += `|---|---|---|---|---|---|\n`;
  d.formsCatalog.forEach((f) => {
    md += `| **${f.code}** | ${f.title} | ${f.purpose} | ${f.responsibleRole} | ${f.frequency} | \`${f.retentionCategory}\` |\n`;
  });
  md += `\n*(Nota: Los formularios completos serán desarrollados en fases posteriores).* \n\n`;

  // Trazabilidad de Decisiones y Parámetros
  md += `## TRAZABILIDAD Y MATRIZ DE DECISIONES INSTITUCIONALES\n\n`;
  md += `El presente manual se fundamenta estrictamente en decisiones históricas e institucionales reales registradas en RENACER CHURCH MAESTRO:\n\n`;
  d.decisionsUsed.forEach((dec) => {
    md += `- \`${dec}\`: Vinculada en las disposiciones de mayordomía, gobierno, titularidad y salvaguardas.\n`;
  });
  md += `\n`;

  md += `### Parámetros Pendientes de Formalización (PENDIENTE_DEFINIR)\n\n`;
  d.pendingDefinitions.forEach((p) => {
    md += `- ${p}\n`;
  });
  md += `\n`;

  md += `### Materias Sujetas a Dictamen Profesional (REQUIERE_REVISION_LEGAL/CONTABLE)\n\n`;
  d.legalReviewMatters.forEach((l) => {
    md += `- ${l}\n`;
  });
  md += `\n`;

  return md;
}
