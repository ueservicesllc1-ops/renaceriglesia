// ============================================================================
// RENACER CHURCH MAESTRO — FASE 36: EXPEDIENTE TÉCNICO DEL ARTÍCULO 17
// QUÓRUMS, MAYORÍAS Y PODERES CORPORATIVOS (REN-DOC-002)
// ============================================================================

export interface DefinedCouncilParam {
  paramName: string;
  definedRule: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL";
  sourceDecision: string;
  notes: string;
}

export interface PowerMatrixRow {
  matter: string;
  competentBody: string;
  requiredMajority: string;
  requiredQuorum: string;
  authorityLevel: "ESPIRITUAL" | "CORPORATIVO_FIDUCIARIO" | "ASAMBLEARIO" | "FUNDACIONAL";
  status: "DEFINIDO" | "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL";
  legalReviewRequired: boolean;
  source: string;
}

export interface EconomicThresholdOption {
  optionCode: string;
  name: string;
  description: string;
  advantages: string[];
  risks: string[];
  administrativeImpact: string;
  corporateImpact: string;
  legalReviewNeed: string;
  proposalNotice: "PROPUESTA — NO ADOPTADA";
}

export interface NjAttorneyQuestionArt17 {
  questionNumber: number;
  questionText: string;
  consultationReason: string;
  affectedDocument: string;
  riskIfNotDefined: string;
}

export interface Article17CorporatePowersDossier {
  articleNumber: 17;
  documentId: "REN-DOC-002";
  title: "Quórums y Poderes Corporativos del Consejo de Gobierno";
  currentStatus: "PENDIENTE_DEFINIR";
  legalStatus: "REQUIERE_REVISION_LEGAL";
  definedParams: DefinedCouncilParam[];
  openIssuesAnalysis: {
    definition: string;
    whoProposes: string;
    whoEvaluates: string;
    whoApproves: string;
    whenAssemblyIntervenes: string;
    nonDelegableMatters: string[];
    bylawsCoordination: string;
    corporateVsSpiritualSeparation: string;
  };
  powersMatrix: PowerMatrixRow[];
  thresholdOptions: EconomicThresholdOption[];
  attorneyQuestions: NjAttorneyQuestionArt17[];
  proposedDraftText: string;
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
}

export const ARTICLE_17_DOSSIER: Article17CorporatePowersDossier = {
  articleNumber: 17,
  documentId: "REN-DOC-002",
  title: "Quórums y Poderes Corporativos del Consejo de Gobierno",
  currentStatus: "PENDIENTE_DEFINIR",
  legalStatus: "REQUIERE_REVISION_LEGAL",

  // PARTE 1 — INVENTARIO DE LO YA DEFINIDO INSTITUCIONALMENTE
  definedParams: [
    {
      paramName: "Composición del Consejo de Gobierno",
      definedRule: "El Consejo de Gobierno está integrado por tres (3) a cinco (5) miembros activos con al menos 2 años de membresía ininterrumpida.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002, DEC-DEF-004",
      notes: "Estructura consolidada en las Fases 20 y 23A.",
    },
    {
      paramName: "Quórum para Consejo de 3 miembros",
      definedRule: "Quórum obligatorio de dos (2) miembros presentes.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002",
      notes: "Regla matemática inmutable aprobada en DEC-DEF-002.",
    },
    {
      paramName: "Quórum para Consejo de 4 miembros",
      definedRule: "Quórum obligatorio de tres (3) miembros presentes.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002",
      notes: "Garantiza representatividad mayoritaria estricta.",
    },
    {
      paramName: "Quórum para Consejo de 5 miembros",
      definedRule: "Quórum obligatorio de tres (3) miembros presentes.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002",
      notes: "Mayoría absoluta de los 5 integrantes.",
    },
    {
      paramName: "Mayoría Ordinaria",
      definedRule: "Mayoría simple (más del 50% de los votos de los miembros presentes con quórum).",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002",
      notes: "Aplica a resoluciones de administración y marcha ordinaria.",
    },
    {
      paramName: "Mayoría para Materias Extraordinarias",
      definedRule: "Mayoría calificada de dos tercios (2/3) de los miembros del Consejo + visto bueno y consentimiento del Pastor Fundador.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002",
      notes: "Protección soberana sobre actos patrimoniales y fiduciarios mayores.",
    },
    {
      paramName: "Regla de Desempate",
      definedRule: "En caso de empate en cualquier votación, la propuesta se considera rechazada.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002",
      notes: "No existe voto dirimente automático de calidad; el empate desestima la moción.",
    },
    {
      paramName: "Período de Servicio y Mecanismo de Selección",
      definedRule: "Período de dos (2) años renovables. Procedimiento en 3 pasos: Pastor propone -> Consejo evalúa -> Congregación confirma.",
      status: "DEFINIDO",
      sourceDecision: "DEC-DEF-002, DEC-DEF-004",
      notes: "Mecanismo teocrático consolidado.",
    },
  ],

  // PARTE 2 & 3 — IDENTIFICACIÓN DE LO ABIERTO Y SEPARACIÓN DE AUTORIDADES
  openIssuesAnalysis: {
    definition: "Exactos umbrales monetarios cuantitativos ($) para tipificar formalmente un contrato, gasto o endeudamiento como 'extraordinario'.",
    whoProposes: "El Pastor Principal, el Administrador General o el Oficial de Finanzas presenta la propuesta de gasto o contrato.",
    whoEvaluates: "El Consejo de Gobierno en sesión formal con quórum revisa la viabilidad fiduciaria y presupuestaria.",
    whoApproves: "Mayoría simple para ordinarias; mayoría de 2/3 + visto bueno del Pastor Fundador para extraordinarias.",
    whenAssemblyIntervenes: "La Asamblea General de Miembros interviene exclusivamente en: compraventa o enajenación de bienes inmuebles mayores, gravámenes hipotecarios y disolución.",
    nonDelegableMatters: [
      "Alteración o enmienda de la Declaración de Fe (exclusivo Pastor Fundador).",
      "Venta o gravamen de bienes inmuebles corporativos.",
      "Aprobación del Presupuesto Operativo Anual.",
      "Nombramiento o remoción de directores fiduciarios/trustees.",
    ],
    bylawsCoordination: "Los límites cuantitativos específicos y poderes notariales de firma de cheques deben coordinarse detalladamente en REN-DOC-003 (Bylaws).",
    corporateVsSpiritualSeparation: "La autoridad espiritual (doctrina, pastoreo, unción, liturgia) reside en el Pastor Fundador y Consejo Ministerial. La autoridad corporativa/fiduciaria (contratos, cuentas bancarias, inmuebles, reportes al Estado de NJ) reside en el Consejo de Gobierno / Board of Trustees conforme a la ley civil.",
  },

  // PARTE 4 — MATRIZ TÉCNICA DE PODERES INSTITUCIONALES (14 MATERIAS)
  powersMatrix: [
    {
      matter: "1. Decisiones ordinarias de administración operativa",
      competentBody: "Consejo de Gobierno",
      requiredMajority: "Mayoría simple",
      requiredQuorum: "2 (con 3) ó 3 (con 4-5)",
      authorityLevel: "CORPORATIVO_FIDUCIARIO",
      status: "DEFINIDO",
      legalReviewRequired: false,
      source: "DEC-DEF-002",
    },
    {
      matter: "2. Decisiones extraordinarias corporativas generales",
      competentBody: "Consejo de Gobierno + Pastor Fundador",
      requiredMajority: "2/3 del Consejo + Visto Bueno Fundador",
      requiredQuorum: "Quórum reglamentario",
      authorityLevel: "CORPORATIVO_FIDUCIARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-002",
    },
    {
      matter: "3. Contratos de alto valor (Umbral cuantitativo)",
      competentBody: "Consejo de Gobierno + Pastor Fundador",
      requiredMajority: "2/3 del Consejo + Visto Bueno Fundador",
      requiredQuorum: "Quórum reglamentario",
      authorityLevel: "CORPORATIVO_FIDUCIARIO",
      status: "PENDIENTE_DEFINIR",
      legalReviewRequired: true,
      source: "DEC-DEF-002 (Umbral pendiente de fijar)",
    },
    {
      matter: "4. Adquisición de propiedades inmuebles",
      competentBody: "Consejo de Gobierno + Pastor Fundador + Asamblea",
      requiredMajority: "2/3 Consejo + Aprobación Fundador + Mayoría Asamblea",
      requiredQuorum: "Quórum Consejo + Quórum Asamblea (50%)",
      authorityLevel: "ASAMBLEARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-001, DEC-DEF-002",
    },
    {
      matter: "5. Venta o enajenación de bienes inmuebles",
      competentBody: "Consejo de Gobierno + Pastor Fundador + Asamblea",
      requiredMajority: "2/3 Consejo + Consentimiento Fundador + 2/3 Asamblea",
      requiredQuorum: "Quórum Consejo + Quórum Asamblea (50%)",
      authorityLevel: "ASAMBLEARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-001, DEC-DEF-002",
    },
    {
      matter: "6. Gravamen hipotecario de propiedades",
      competentBody: "Consejo de Gobierno + Pastor Fundador + Asamblea",
      requiredMajority: "2/3 Consejo + Consentimiento Fundador + 2/3 Asamblea",
      requiredQuorum: "Quórum Consejo + Quórum Asamblea (50%)",
      authorityLevel: "ASAMBLEARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-002",
    },
    {
      matter: "7. Endeudamiento financiero y préstamos bancarios",
      competentBody: "Consejo de Gobierno + Pastor Fundador",
      requiredMajority: "2/3 del Consejo + Consentimiento Fundador",
      requiredQuorum: "Quórum reglamentario",
      authorityLevel: "CORPORATIVO_FIDUCIARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-002",
    },
    {
      matter: "8. Apertura y cierre de cuentas bancarias institucionales",
      competentBody: "Consejo de Gobierno + Pastor Fundador",
      requiredMajority: "2/3 del Consejo + Visto Bueno Fundador",
      requiredQuorum: "Quórum reglamentario",
      authorityLevel: "CORPORATIVO_FIDUCIARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-002",
    },
    {
      matter: "9. Aprobación del Presupuesto Operativo Anual",
      competentBody: "Consejo de Gobierno",
      requiredMajority: "Mayoría simple del Consejo",
      requiredQuorum: "Quórum reglamentario",
      authorityLevel: "CORPORATIVO_FIDUCIARIO",
      status: "DEFINIDO",
      legalReviewRequired: false,
      source: "DEC-DEF-002",
    },
    {
      matter: "10. Modificación o enmienda de la Declaración de Fe",
      competentBody: "Pastor Fundador exclusivamente",
      requiredMajority: "Potestad exclusiva reservada",
      requiredQuorum: "No aplica",
      authorityLevel: "FUNDACIONAL",
      status: "DEFINIDO",
      legalReviewRequired: false,
      source: "DEC-DEF-001, REN-DOC-001",
    },
    {
      matter: "11. Modificación de la Constitución de RENACER",
      competentBody: "Pastor Fundador + Consejo de Gobierno + Asamblea",
      requiredMajority: "Iniciativa Fundador + 2/3 Consejo + 2/3 Asamblea",
      requiredQuorum: "Quórum Consejo + Quórum Asamblea (50%)",
      authorityLevel: "ASAMBLEARIO",
      status: "PENDIENTE_DEFINIR",
      legalReviewRequired: true,
      source: "DEC-DEF-001, DEC-DEF-002",
    },
    {
      matter: "12. Nombramientos y ordenación ministerial",
      competentBody: "Pastor Fundador + Consejo Ministerial",
      requiredMajority: "Aprobación pastoral tras dictamen ministerial",
      requiredQuorum: "Quórum Ministerial",
      authorityLevel: "ESPIRITUAL",
      status: "DEFINIDO",
      legalReviewRequired: false,
      source: "DEC-DEF-001, DEC-DEF-005",
    },
    {
      matter: "13. Asuntos reservados a la Asamblea Congregacional",
      competentBody: "Asamblea General de Miembros Activos",
      requiredMajority: "Mayoría simple (ordinarias) / 2/3 (extraordinarias)",
      requiredQuorum: "50% de miembros activos con derecho a voto",
      authorityLevel: "ASAMBLEARIO",
      status: "DEFINIDO",
      legalReviewRequired: true,
      source: "DEC-DEF-001, DEC-DEF-002",
    },
    {
      matter: "14. Asuntos reservados exclusivamente al Pastor Fundador",
      competentBody: "Pastor Fundador",
      requiredMajority: "Potestad fundacional vitalicia exclusiva",
      requiredQuorum: "No aplica",
      authorityLevel: "FUNDACIONAL",
      status: "DEFINIDO",
      legalReviewRequired: false,
      source: "DEC-DEF-001, DEC-DEF-002, DEC-PEND-001",
    },
  ],

  // PARTE 5 — ANÁLISIS DE ALTERNATIVAS DE UMBRAL ECONÓMICO (4 OPCIONES)
  thresholdOptions: [
    {
      optionCode: "OPC-17-A",
      name: "Alternativa A: Umbral Porcentual del Presupuesto Operativo Anual",
      description: "Se califica como contrato o gasto extraordinario cualquier obligación financiera individual que supere el 10% (o porcentaje determinado) del Presupuesto Operativo Anual aprobado para el ejercicio fiscal.",
      advantages: [
        "Se ajusta automáticamente a la escala y crecimiento económico de la Iglesia.",
        "Evita obsolescencia por inflación.",
        "Mantiene una proporción financiera sana.",
      ],
      risks: [
        "Requiere que el Presupuesto Anual esté aprobado formalmente al 1 de enero de cada año.",
      ],
      administrativeImpact: "Predecible y directamente vinculada a la ejecución contable.",
      corporateImpact: "Fácil de certificar ante entidades bancarias mediante acta presupuestaria.",
      legalReviewNeed: "Revisar redacción en Bylaws para evitar ambigüedades en presupuestos no aprobados a tiempo.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-17-B",
      name: "Alternativa B: Umbral Fijo en Cantidad Monetaria Determinada",
      description: "Establecer una suma monetaria fija específica (ej. contratos que superen los $10,000 o $25,000 USD) que active el requisito de 2/3 del Consejo y consentimiento del Fundador.",
      advantages: [
        "Absoluta claridad y simplicidad de aplicación inmediata para los oficiales.",
        "No depende de cálculos presupuestarios periódicos.",
      ],
      risks: [
        "Pierde valor real con el paso del tiempo debido a la inflación.",
        "Requiere reformas estatutarias periódicas para actualizar el monto.",
      ],
      administrativeImpact: "Simplicidad operativa en compras y contratos.",
      corporateImpact: "Criterio rígido pero inequívoco.",
      legalReviewNeed: "Verificar si la legislación de NJ impone límites fiduciarios específicos.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-17-C",
      name: "Alternativa C: Sistema Combinado (Porcentaje con Piso y Techo)",
      description: "Fijar un umbral del 10% del presupuesto anual, pero estableciendo un piso mínimo (ej. no menos de $10,000) y un techo máximo (ej. no más de $50,000) para activar la aprobación extraordinaria.",
      advantages: [
        "Combina la flexibilidad del porcentaje con la seguridad de límites absolutos.",
        "Protege en ejercicios presupuestarios atípicos.",
      ],
      risks: [
        "Mayor complejidad en la redacción estatutaria.",
      ],
      administrativeImpact: "Requiere doble verificación contable.",
      corporateImpact: "Excelente blindaje fiduciario ante auditores externos.",
      legalReviewNeed: "Revisar compatibilidad con los estatutos corporativos de NJ.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-17-D",
      name: "Alternativa D: Clasificación Cualitativa por Naturaleza del Acto",
      description: "Clasificar como extraordinario cualquier contrato de arrendamiento superior a 1 año, compra de vehículos, litigios o gravámenes, independientemente del monto monetario.",
      advantages: [
        "Protege compromisos jurídicos a largo plazo independientemente del precio.",
      ],
      risks: [
        "Puede dejar fuera compras puntuales de alto valor económico.",
      ],
      administrativeImpact: "Enfoque legal contractual más que netamente financiero.",
      corporateImpact: "Óptimo para prevenir compromisos plurianuales no autorizados.",
      legalReviewNeed: "Revisión obligatoria por abogado de New Jersey.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 6 — CUESTIONARIO JURÍDICO PARA EL ABOGADO DE NEW JERSEY (13 PREGUNTAS)
  attorneyQuestions: [
    {
      questionNumber: 1,
      questionText: "¿Es legalmente válida bajo N.J.S.A. 15A:6-7 la tabla de quórum escalonada (3->2, 4->3, 5->3) para el Board of Trustees de una corporación religiosa sin fines de lucro en New Jersey?",
      consultationReason: "Confirmar que la regla de quórum interna cumple estrictamente con el Nonprofit Corporation Act de NJ.",
      affectedDocument: "REN-DOC-002 (Art. 17) y REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Impugnación de nulidad de acuerdos de directores por defecto de quórum legal.",
    },
    {
      questionNumber: 2,
      questionText: "¿Cómo debe coordinarse la interacción entre la Constitución eclesiástica y los Bylaws corporativos de NJ para que los acuerdos del Consejo tengan plena validez civil y bancaria?",
      consultationReason: "Evitar dualidades o contradicciones entre la Carta Magna eclesial y los estatutos civiles.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Inaplicabilidad de normas constitucionales ante tribunales o bancos de NJ.",
    },
    {
      questionNumber: 3,
      questionText: "¿Qué poderes y deberes fiduciarios impone la ley de New Jersey a los miembros del Board of Trustees en relación con el cuidado de los fondos y patrimonio de la Iglesia?",
      consultationReason: "Delimitar responsabilidades personales e inmunidades de los consejeros bajo N.J.S.A. 15A:6-14.",
      affectedDocument: "REN-DOC-003 y REN-DOC-004",
      riskIfNotDefined: "Riesgo de responsabilidad fiduciaria personal indebida de los miembros del Consejo.",
    },
    {
      questionNumber: 4,
      questionText: "¿Qué actos corporativos exigen obligatoriamente por ley de New Jersey la autorización de la Asamblea General de Miembros y no pueden ser delegados al Board of Trustees?",
      consultationReason: "Asegurar que la venta de inmuebles o disolución cumpla las formalidades asamblearias de NJ.",
      affectedDocument: "REN-DOC-002 (Art. 17, 36, 48)",
      riskIfNotDefined: "Nulidad absoluta de escrituras públicas de compraventa o hipotecas.",
    },
    {
      questionNumber: 5,
      questionText: "¿Cuáles son los límites legales de delegación de poderes ejecutivos al Administrador General o comités menores?",
      consultationReason: "Garantizar que las facultades sustanciales del Board no sean transferidas indebidamente.",
      affectedDocument: "REN-DOC-003 y REN-DOC-004",
      riskIfNotDefined: "Falta de poder legal vinculante en contratos suscritos por administradores.",
    },
    {
      questionNumber: 6,
      questionText: "¿Es legalmente exigible en los estatutos corporativos de NJ la mayoría calificada de dos tercios (2/3) para contratos extraordinarios?",
      consultationReason: "Validar que la regla de 2/3 acordada en DEC-DEF-002 se traslade fielmente a los Bylaws.",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Cuestionamiento sobre la exigibilidad de la mayoría calificada.",
    },
    {
      questionNumber: 7,
      questionText: "¿Qué requisitos notariales y registrales exige New Jersey para la compra, venta o gravamen de bienes raíces pertenecientes a una Iglesia incorporada?",
      consultationReason: "Cumplimiento de las solemnidades registrales en el Condado de Passaic, NJ.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Rechazo de inscripción en el Registro de la Propiedad (County Clerk).",
    },
    {
      questionNumber: 8,
      questionText: "¿Qué documentación y autorizaciones corporativas exigen las entidades financieras de New Jersey para conceder préstamos o líneas de crédito a corporaciones religiosas?",
      consultationReason: "Facilitar el acceso al crédito bancario institucional sin trabas de personería.",
      affectedDocument: "REN-DOC-003 y REN-DOC-013",
      riskIfNotDefined: "Parálisis en la tramitación de créditos o refinanciamientos bancarios.",
    },
    {
      questionNumber: 9,
      questionText: "¿Qué cláusula de firmas bancarias mancomunadas y poderes de tesorería es aconsejable registrar en los Bylaws de New Jersey?",
      consultationReason: "Prevenir fraudes y asegurar el manejo transparente de fondos.",
      affectedDocument: "REN-DOC-003 y REN-DOC-013",
      riskIfNotDefined: "Disputas con bancos sobre la validez de firmas autorizadas.",
    },
    {
      questionNumber: 10,
      questionText: "¿Cómo blindar en los Bylaws la separación entre la autoridad espiritual del Pastor Fundador y el gobierno corporativo del Board para evitar injerencias judiciales?",
      consultationReason: "Aplicación de la doctrina de abstención eclesiástica de la Primera Enmienda de EE.UU.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Judicialización civil de controversias espirituales o doctrinales.",
    },
    {
      questionNumber: 11,
      questionText: "¿Qué cláusulas de indemnización y protección a directores/trustees deben incorporarse obligatoriamente en los Bylaws de NJ?",
      consultationReason: "Protección patrimonial de los líderes que sirven de buena fe en el Consejo.",
      affectedDocument: "REN-DOC-003",
      riskIfNotDefined: "Desprotección jurídica y patrimonial de los consejeros.",
    },
    {
      questionNumber: 12,
      questionText: "¿Tiene efectos fiscales ante el IRS o el Estado de NJ la fijación de un umbral económico para contratos extraordinarios?",
      consultationReason: "Asegurar que la política de compras cumpla con los estándares de gobernanza de la Sección 501(c)(3).",
      affectedDocument: "REN-DOC-003 y REN-DOC-013",
      riskIfNotDefined: "Observaciones en auditorías fiscales o del IRS Form 990.",
    },
    {
      questionNumber: 13,
      questionText: "¿Cuáles son los requisitos obligatorios de reuniones anuales de Trustees y actas corporativas bajo el N.J.S.A. 15A:5-2?",
      consultationReason: "Mantenimiento al día del libro de actas corporativas de la Iglesia.",
      affectedDocument: "REN-DOC-003 y REN-DOC-004",
      riskIfNotDefined: "Pérdida de la condición de corporación en regla (Good Standing) en NJ.",
    },
  ],

  // PARTE 7 — PROPUESTA DE REDACCIÓN SUGERIDA (NO ADOPTADA)
  proposedDraftText: `ARTÍCULO 17 — QUÓRUMS Y PODERES CORPORATIVOS DEL CONSEJO DE GOBIERNO (PROPUESTA DE REDACCIÓN — NO ADOPTADA)

Sección 17.1. Composición y Período del Consejo de Gobierno.
El Consejo de Gobierno es el cuerpo fiduciario representativo de la Iglesia y estará integrado por un número de entre tres (3) y cinco (5) miembros activos con al menos dos (2) años de membresía ininterrumpida. Sus integrantes ejercerán sus funciones por períodos de dos (2) años renovables, mediante el proceso institucional establecido: proposición por el Pastor Fundador, evaluación del Consejo y confirmación por la Asamblea Congregacional.

Sección 17.2. Tabla Obligatoria de Quórum.
Para la validez de las sesiones y resoluciones del Consejo de Gobierno, se requerirá la presencia física o telemática certificada del siguiente quórum:
a) Consejo compuesto por tres (3) miembros: quórum de dos (2) miembros presentes.
b) Consejo compuesto por cuatro (4) miembros: quórum de tres (3) miembros presentes.
c) Consejo compuesto por cinco (5) miembros: quórum de tres (3) miembros presentes.

Sección 17.3. Régimen de Mayorías y Regla de Empate.
Las decisiones ordinarias de administración y marcha corriente se adoptarán por mayoría simple de los miembros presentes con quórum. En caso de empate en cualquier votación, la propuesta se considerará automáticamente como no aprobada.

Sección 17.4. Materias Extraordinarias y Visto Bueno del Fundador.
Requerirán imperativamente la mayoría calificada de dos tercios (2/3) de los miembros del Consejo de Gobierno y el expreso visto bueno y consentimiento del Pastor Fundador las siguientes materias:
a) Adquisición, gravamen hipotecario o venta de bienes raíces.
b) Contratos o compromisos financieros extraordinarios que superen el umbral presupuestario que se establezca en los Bylaws (REN-DOC-003).
c) Endeudamiento bancario o suscripción de líneas de crédito corporativas.
d) Apertura o cierre de cuentas bancarias y designación de firmantes autorizados.
e) Cualquier transacción fiduciaria no contemplada en el Presupuesto Operativo Anual.

Sección 17.5. Separación Funcional y Cláusula de Revisión Legal.
La autoridad espiritual y doctrinal reside exclusivamente en el Pastor Fundador y el Consejo Ministerial, mientras que el gobierno corporativo y fiduciario se ejerce conforme a las leyes de New Jersey y los Bylaws corporativos (REN-DOC-003). Los umbrales cuantitativos específicos, poderes notariales de firma y procedimientos de ejecución corporativa quedarán sujetos a la revisión y dictamen formal del asesor legal de la corporación en el Estado de New Jersey.`,
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA",
};

export function getArticle17Dossier(): Article17CorporatePowersDossier {
  return ARTICLE_17_DOSSIER;
}
