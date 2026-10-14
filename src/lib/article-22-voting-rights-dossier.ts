// ============================================================================
// RENACER CHURCH MAESTRO — FASE 37: EXPEDIENTE TÉCNICO DEL ARTÍCULO 22
// DERECHOS ESPECÍFICOS DE VOTO Y CALIFICACIÓN CONGREGACIONAL (REN-DOC-002)
// ============================================================================

export interface DefinedVotingParam {
  paramName: string;
  definedRule: string;
  sourceDecision: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR" | "REQUIERE_REVISION_LEGAL";
  observation: string;
  legalReviewRequired: boolean;
}

export interface ActiveMemberRequirement {
  aspect: string;
  criteria: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR";
  source: string;
}

export interface AssemblyCouncilBoundaryRow {
  matter: string;
  assemblyRole: string;
  councilRole: string;
  founderRole: string;
  voteRequired: "SÍ" | "NO" | "CONSULTIVO";
  requiredMajority: string;
  status: "DEFINIDO" | "PENDIENTE_DEFINIR";
  legalReviewRequired: boolean;
}

export interface ReservedAssemblyMatterItem {
  matter: string;
  category: "YA_DEFINIDA" | "PENDIENTE" | "REQUIERE_REVISION_LEGAL" | "PROPUESTA";
  rule: string;
  sourceOrNote: string;
}

export interface VotingOptionArt22 {
  optionCode: string;
  name: string;
  description: string;
  advantages: string[];
  risks: string[];
  institutionalImpact: string;
  corporateImpact: string;
  legalReviewNeed: string;
  proposalNotice: "PROPUESTA — NO ADOPTADA";
}

export interface NjAttorneyQuestionArt22 {
  questionNumber: number;
  questionText: string;
  consultationReason: string;
  affectedDocument: string;
  riskIfNotDefined: string;
  requiresAttorney: "SÍ";
}

export interface Article22VotingRightsDossier {
  articleNumber: 22;
  documentId: "REN-DOC-002";
  title: "Derechos Específicos de Voto y Calificación Congregacional";
  currentStatus: "PENDIENTE_DEFINIR";
  legalStatus: "REQUIERE_REVISION_LEGAL";
  definedParams: DefinedVotingParam[];
  activeMemberDefinition: ActiveMemberRequirement[];
  boundaryMatrix: AssemblyCouncilBoundaryRow[];
  reservedMatters: ReservedAssemblyMatterItem[];
  votingOptions: VotingOptionArt22[];
  attorneyQuestions: NjAttorneyQuestionArt22[];
  proposedDraftText: string;
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
}

export const ARTICLE_22_DOSSIER: Article22VotingRightsDossier = {
  articleNumber: 22,
  documentId: "REN-DOC-002",
  title: "Derechos Específicos de Voto y Calificación Congregacional",
  currentStatus: "PENDIENTE_DEFINIR",
  legalStatus: "REQUIERE_REVISION_LEGAL",

  // PARTE 1 — INVENTARIO DE LO YA DEFINIDO INSTITUCIONALMENTE
  definedParams: [
    {
      paramName: "Titularidad del Derecho a Voto",
      definedRule: "El derecho a voto en Asambleas corresponde exclusivamente a los Miembros Activos en plena comunión.",
      sourceDecision: "DEC-DEF-001",
      status: "DEFINIDO",
      observation: "Excluye a visitantes, simpatizantes y miembros en formación o inactivos.",
      legalReviewRequired: true,
    },
    {
      paramName: "Edad Mínima para Votar",
      definedRule: "Edad mínima legal obligatoria de dieciocho (18) años cumplidos.",
      sourceDecision: "DEC-DEF-001",
      status: "DEFINIDO",
      observation: "Conforme a la capacidad legal para actos corporativos en New Jersey.",
      legalReviewRequired: true,
    },
    {
      paramName: "Quórum Congregacional Asambleario",
      definedRule: "Quórum obligatorio del cincuenta por ciento (50%) de los Miembros Activos con derecho a voto registrados en el padrón.",
      sourceDecision: "DEC-DEF-001, DEC-DEF-002",
      status: "DEFINIDO",
      observation: "Regla inmutable que garantiza legitimidad en decisiones asamblearias.",
      legalReviewRequired: true,
    },
    {
      paramName: "Mayoría Ordinaria Asamblearia",
      definedRule: "Mayoría simple (más del 50% de los votos válidos emitidos presentes con quórum).",
      sourceDecision: "DEC-DEF-002",
      status: "DEFINIDO",
      observation: "Aplica a informes anuales, aprobación de gestión y elecciones de consejeros.",
      legalReviewRequired: false,
    },
    {
      paramName: "Mayoría Extraordinaria Asamblearia",
      definedRule: "Mayoría calificada de dos tercios (2/3) de los votos válidos emitidos presentes con quórum.",
      sourceDecision: "DEC-DEF-002",
      status: "DEFINIDO",
      observation: "Aplica a compraventa de inmuebles, reformas constitucionales y disolución.",
      legalReviewRequired: true,
    },
  ],

  // PARTE 2 — DEFINICIÓN INSTITUCIONAL DE MIEMBRO ACTIVO
  activeMemberDefinition: [
    {
      aspect: "Ingreso / Admisión",
      criteria: "Fe personal en Jesucristo, bautismo en agua por inmersión, conclusión de la Escuela de Discípulos, adhesión a la Declaración de Fe y recepción formal con aprobación pastoral.",
      status: "DEFINIDO",
      source: "DEC-DEF-001, REN-DOC-005",
    },
    {
      aspect: "Permanencia / Comunión",
      criteria: "Asistencia regular y comprobada a los cultos dominicales y a una Familia de Grupo (célula), vida conforme a la ética bíblica y sostenimiento mediante diezmos y ofrendas.",
      status: "DEFINIDO",
      source: "DEC-DEF-001, DEC-DEF-007",
    },
    {
      aspect: "Participación y Padrón",
      criteria: "Inscripción en el Padrón Oficial de Miembros Activos custodiado por la Secretaría eclesiástica. Padrón cerrado 30 días antes de cada asamblea.",
      status: "DEFINIDO",
      source: "DEC-DEF-001, REN-DOC-005",
    },
    {
      aspect: "Suspensión del Derecho a Voto",
      criteria: "Pérdida temporal del derecho a voto por: ausencia injustificada a cultos/células por más de 6 meses (inactividad) o sujeción a proceso disciplinario bíblico.",
      status: "DEFINIDO",
      source: "DEC-DEF-001, REN-DOC-011",
    },
    {
      aspect: "Restauración del Derecho a Voto",
      criteria: "Culminación satisfactoria del proceso de restauración pastoral y reincorporación activa por un período mínimo de tres (3) meses continuos.",
      status: "DEFINIDO",
      source: "DEC-DEF-001, REN-DOC-011",
    },
    {
      aspect: "Mecanismo de Impugnación de Padrón",
      criteria: "Procedimiento formal para resolver exclusiones u objeciones antes de la asamblea.",
      status: "PENDIENTE_DEFINIR",
      source: "Pendiente de reglamentar en Bylaws",
    },
  ],

  // PARTE 3 — FRONTERA ENTRE ASAMBLEA, CONSEJO Y PASTOR FUNDADOR (MATRIZ DE PODERES)
  boundaryMatrix: [
    {
      matter: "1. Venta o enajenación de bienes inmuebles",
      assemblyRole: "Aprueba con mayoría calificada de 2/3",
      councilRole: "Evalúa y propone por mayoría de 2/3",
      founderRole: "Autoriza y otorga consentimiento expreso",
      voteRequired: "SÍ",
      requiredMajority: "2/3 de Miembros Activos presentes",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
    {
      matter: "2. Adquisición de nuevos bienes inmuebles",
      assemblyRole: "Ratifica en Asamblea con mayoría simple",
      councilRole: "Evalúa, aprueba por 2/3 y formaliza contrato",
      founderRole: "Autoriza la propuesta de adquisición",
      voteRequired: "SÍ",
      requiredMajority: "Mayoría simple de Miembros presentes",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
    {
      matter: "3. Confirmación de miembros del Consejo de Gobierno",
      assemblyRole: "Confirma a los candidatos propuestos",
      councilRole: "Evalúa idoneidad tras propuesta pastoral",
      founderRole: "Propone formalmente a los candidatos",
      voteRequired: "SÍ",
      requiredMajority: "Mayoría simple",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
    {
      matter: "4. Ratificación del Sucesor del Pastor Fundador",
      assemblyRole: "Ratifica formalmente al sucesor ministerial",
      councilRole: "Comisión conjunta (en caso de vacancia imprevista)",
      founderRole: "Designa por escrito en vida",
      voteRequired: "SÍ",
      requiredMajority: "Mayoría según se defina (Simple o 2/3)",
      status: "PENDIENTE_DEFINIR",
      legalReviewRequired: true,
    },
    {
      matter: "5. Reforma de la Constitución de RENACER",
      assemblyRole: "Aprueba con mayoría de 2/3",
      councilRole: "Aprueba con mayoría de 2/3",
      founderRole: "Iniciativa y consentimiento reservado",
      voteRequired: "SÍ",
      requiredMajority: "2/3 de Miembros Activos presentes",
      status: "PENDIENTE_DEFINIR",
      legalReviewRequired: true,
    },
    {
      matter: "6. Disolución de la corporación y destino de bienes",
      assemblyRole: "Aprueba por mayoría de 2/3",
      councilRole: "Dictamina y propone liquidación conforme a 501(c)(3)",
      founderRole: "Consentimiento conforme a la Carta Magna",
      voteRequired: "SÍ",
      requiredMajority: "2/3 de Miembros Activos presentes",
      status: "DEFINIDO",
      legalReviewRequired: true,
    },
    {
      matter: "7. Aprobación del Presupuesto Operativo Anual",
      assemblyRole: "Recibe informe anual de rendición de cuentas",
      councilRole: "Aprueba y fiscaliza el presupuesto",
      founderRole: "Supervisión general",
      voteRequired: "NO",
      requiredMajority: "Facultad exclusiva del Consejo",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
    {
      matter: "8. Modificación de la Declaración de Fe (Doctrina)",
      assemblyRole: "Sujeción de fe y comunión doctrinal",
      councilRole: "Acata y respalda la custodia doctrinal",
      founderRole: "Autoridad e iniciativa exclusiva",
      voteRequired: "NO",
      requiredMajority: "Potestad exclusiva del Pastor Fundador",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
    {
      matter: "9. Nombramientos de pastores y líderes celulares",
      assemblyRole: "Reconocimiento espiritual y honra",
      councilRole: "No interviene en lo ministerial",
      founderRole: "Designación pastoral exclusiva con auxilio ministerial",
      voteRequired: "NO",
      requiredMajority: "Autoridad espiritual ministerial",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
    {
      matter: "10. Contratos ordinarios y gestión de compras",
      assemblyRole: "No interviene",
      councilRole: "Administra y ejecuta conforme al presupuesto",
      founderRole: "Supervisión administrativa",
      voteRequired: "NO",
      requiredMajority: "Facultad del Consejo / Oficiales",
      status: "DEFINIDO",
      legalReviewRequired: false,
    },
  ],

  // PARTE 4 — CATÁLOGO DE MATERIAS RESERVADAS A LA ASAMBLEA
  reservedMatters: [
    {
      matter: "Enajenación, venta o hipoteca de bienes inmuebles",
      category: "YA_DEFINIDA",
      rule: "Exige 2/3 de la Asamblea con quórum del 50% + V.B. Fundador.",
      sourceOrNote: "DEC-DEF-001, DEC-DEF-002",
    },
    {
      matter: "Confirmación bienal de los miembros del Consejo de Gobierno",
      category: "YA_DEFINIDA",
      rule: "Exige mayoría simple de la Asamblea con quórum del 50%.",
      sourceOrNote: "DEC-DEF-002, DEC-DEF-004",
    },
    {
      matter: "Disolución voluntaria de la Iglesia y liquidación patrimonial",
      category: "YA_DEFINIDA",
      rule: "Exige 2/3 de la Asamblea + destino exclusivo a entidad 501(c)(3).",
      sourceOrNote: "DEC-DEF-001, DEC-DEF-002",
    },
    {
      matter: "Ratificación del Sucesor Pastoral (porcentaje exacto)",
      category: "PENDIENTE",
      rule: "Pendiente definir si requiere mayoría simple o mayoría calificada de 2/3.",
      sourceOrNote: "Fase 35 / Pendiente de resolución",
    },
    {
      matter: "Enmiendas a la Constitución de RENACER (Nivel B)",
      category: "PENDIENTE",
      rule: "Pendiente fijar mayorías de doble aprobación (Consejo + Asamblea).",
      sourceOrNote: "Fase 34 / Pendiente de resolución",
    },
    {
      matter: "Validez del derecho de voto de miembros bajo N.J.S.A. 15A:5-1",
      category: "REQUIERE_REVISION_LEGAL",
      rule: "Requiere opinión de abogado de NJ sobre Voting Members estatutarios.",
      sourceOrNote: "Revisión legal de New Jersey obligatoria",
    },
    {
      matter: "Regla de Segunda Convocatoria si no se alcanza el quórum del 50%",
      category: "PROPUESTA",
      rule: "Propuesta de convocatoria posterior con quórum reducido o mantenimiento de quórum fijo.",
      sourceOrNote: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 9 — OPCIONES INSTITUCIONALES EN ESTUDIO
  votingOptions: [
    {
      optionCode: "OPC-22-A",
      name: "Alternativa A: Catálogo Reservado Exclusivo y Taxativo de Voto Asambleario",
      description: "El derecho a voto de la membresía se restringe estrictamente a un catálogo cerrado de materias estructurales (inmuebles, disolución, confirmación de consejeros y ratificación de sucesor), dejando toda la administración fiduciaria al Board/Consejo y el gobierno espiritual al Fundador.",
      advantages: [
        "Blindaje total del orden eclesiástico frente a asambleas conflictivas sobre asuntos menores.",
        "Gobierno teocrático ordenado con agilidad en la gestión fiduciaria.",
        "Plena congruencia con la doctrina pentecostal de liderazgo pastoral.",
      ],
      risks: [
        "Requiere claridad absoluta en los Bylaws para evitar demandas de miembros sobre decisiones presupuestarias.",
      ],
      institutionalImpact: "Paz congregacional y alta eficiencia directiva.",
      corporateImpact: "Estructura corporativa sólida y protegida en New Jersey.",
      legalReviewNeed: "Verificar compatibilidad con el Nonprofit Corporation Act de NJ (N.J.S.A. 15A:5-1).",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
    {
      optionCode: "OPC-22-B",
      name: "Alternativa B: Sistema Asambleario Mixto (Resolutivo en Estructurales y Consultivo en Fiduciarias)",
      description: "La Asamblea vota resolutivamente en las materias reservadas del catálogo, y tiene carácter deliberativo/consultivo en la presentación del balance presupuestario anual.",
      advantages: [
        "Mayor sentido de participación y transparencia informativa en la congregación.",
        "Mantiene el control resolutivo fiduciario en el Consejo.",
      ],
      risks: [
        "Riesgo de que asambleas consultivas deriven en debates operacionales prolongados.",
      ],
      institutionalImpact: "Alta participación comunitaria con delimitación de poderes.",
      corporateImpact: "Requiere reglas de debate asambleario muy precisas en el Reglamento de Asambleas.",
      legalReviewNeed: "Revisión estatutaria por abogado de NJ.",
      proposalNotice: "PROPUESTA — NO ADOPTADA",
    },
  ],

  // PARTE 10 — CUESTIONARIO JURÍDICO PARA EL ABOGADO DE NEW JERSEY (14 PREGUNTAS)
  attorneyQuestions: [
    {
      questionNumber: 1,
      questionText: "¿Cómo califica la ley de New Jersey (N.J.S.A. 15A:5-1) a los miembros de una corporación religiosa sin fines de lucro: son 'Voting Members' estatutarios con derecho pleno o miembros eclesiásticos con derechos limitados por estatutos?",
      consultationReason: "Determinar el alcance de los derechos subjetivos de los miembros frente a demandas en tribunales de NJ.",
      affectedDocument: "REN-DOC-002 (Art. 22) y REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Exposición a demandas de miembros que aleguen derechos de voto corporativos universales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 2,
      questionText: "¿Es legalmente válido en New Jersey exigir requisitos espirituales (fe, bautismo, Escuela de Discípulos, diezmos) para otorgar o suspender el derecho a voto corporativo?",
      consultationReason: "Confirmar que los requisitos de admisión y disciplina no violen normas de orden público de NJ.",
      affectedDocument: "REN-DOC-002 y REN-DOC-005",
      riskIfNotDefined: "Cuestionamiento legal de suspensiones de membresía.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 3,
      questionText: "¿Es plenamente exigible la edad mínima de 18 años para emitir votos en asambleas corporativas religiosas en New Jersey?",
      consultationReason: "Asegurar que los menores bautizados no ejerzan derechos corporativos de voto.",
      affectedDocument: "REN-DOC-002 (Art. 22)",
      riskIfNotDefined: "Impugnación de asambleas donde participen menores de edad.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 4,
      questionText: "¿Permite el N.J.S.A. 15A:5-9 establecer un quórum del 50% de los miembros activos como regla estatutaria inmutable para las Asambleas Generales?",
      consultationReason: "Validar que el quórum del 50% acordado en DEC-DEF-001 sea jurídicamente vinculante en NJ.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Dudas sobre la validez de asambleas celebradas con quórums diferentes.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 5,
      questionText: "¿Cómo debe computarse legalmente la mayoría simple (más del 50%) de votos emitidos en New Jersey en caso de abstenciones o votos en blanco?",
      consultationReason: "Fijar el método exacto de cómputo en los Bylaws.",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Disputas en el escrutinio de votaciones ajustadas.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 6,
      questionText: "¿Es legalmente exigible la mayoría calificada de dos tercios (2/3) de los votos emitidos para actos extraordinarios en una iglesia incorporada de NJ?",
      consultationReason: "Garantizar que la regla de 2/3 tenga pleno respaldo ante notarios y bancos.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Desconocimiento de la regla de 2/3 por entidades crediticias.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 7,
      questionText: "¿Qué actos corporativos clasifica imperativamente la ley de New Jersey como extraordinarios que exijan voto asambleario indelegable?",
      consultationReason: "Armonizar el catálogo eclesiástico con las exigencias del Nonprofit Corporation Act de NJ.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Nulidad de acuerdos de disposición de bienes raíces por falta de voto asambleario.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 8,
      questionText: "¿Qué facultades de gobierno y administración pueden ser reservadas exclusivamente al Board of Trustees sin intervención de la Asamblea bajo N.J.S.A. 15A:6-1?",
      consultationReason: "Blindar las atribuciones del Consejo de Gobierno frente a interferencias asamblearias.",
      affectedDocument: "REN-DOC-002 (Art. 17, 22) y REN-DOC-003",
      riskIfNotDefined: "Incertidumbre en la toma de decisiones fiduciarias diarias.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 9,
      questionText: "¿Cómo debe coordinarse la relación entre la Constitución y los Bylaws para garantizar que no existan discrepancias en el procedimiento asambleario?",
      consultationReason: "Evitar litigios fundados en contradicciones entre ambos documentos.",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      riskIfNotDefined: "Colisión normativa interna.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 10,
      questionText: "¿Es jurídicamente viable restringir el derecho a voto asambleario únicamente a un catálogo taxativo de materias, excluyendo la administración presupuestaria ordinaria?",
      consultationReason: "Proteger el modelo teocrático y la estabilidad administrativa de la Iglesia.",
      affectedDocument: "REN-DOC-002 (Art. 22)",
      riskIfNotDefined: "Riesgo de que miembros exijan votar partidas presupuestarias o contratos menores.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 11,
      questionText: "¿Qué derechos de inspección de libros y registros corporativos tienen los miembros activos bajo N.J.S.A. 15A:5-24?",
      consultationReason: "Fijar el procedimiento formal de rendición de cuentas e informes contables anuales.",
      affectedDocument: "REN-DOC-003 y REN-DOC-013",
      riskIfNotDefined: "Solicitudes intempestivas o abusivas de revisión de registros financieros.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 12,
      questionText: "¿Cómo blindar estatutariamente la autoridad espiritual del Pastor Fundador frente a decisiones o votos asamblearios que intenten desconocer la doctrina bíblica?",
      consultationReason: "Aplicación de la doctrina de abstención judicial en materia eclesiástica de la Primera Enmienda.",
      affectedDocument: "REN-DOC-001 y REN-DOC-002",
      riskIfNotDefined: "Intentos de someter materias de doctrina de fe a votaciones congregacionales.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 13,
      questionText: "¿Qué enmiendas o cláusulas específicas deben incorporarse a los Bylaws (REN-DOC-003) para regular el voto no presencial o telemático bajo la ley de NJ?",
      consultationReason: "Habilitar la participación digital de miembros conforme a las reformas post-pandemia de NJ.",
      affectedDocument: "REN-DOC-003 (Bylaws)",
      riskIfNotDefined: "Invalidez de votos emitidos por vía electrónica o videoconferencia.",
      requiresAttorney: "SÍ",
    },
    {
      questionNumber: 14,
      questionText: "¿Es plenamente compatible la estructura de membresía con derecho a voto con el Certificate of Incorporation registrado en Trenton, NJ?",
      consultationReason: "Verificar que el certificado de nacimiento corporativo no contenga cláusulas contradictorias.",
      affectedDocument: "Certificate of Incorporation y REN-DOC-002",
      riskIfNotDefined: "Incompatibilidad entre el acta fundacional y la Constitución eclesiástica.",
      requiresAttorney: "SÍ",
    },
  ],

  // PARTE 11 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 22
  proposedDraftText: `ARTÍCULO 22 — DERECHOS ESPECÍFICOS DE VOTO Y CALIFICACIÓN CONGREGACIONAL (PROPUESTA DE REDACCIÓN — NO ADOPTADA)

Sección 22.1. Titularidad del Derecho a Voto.
El derecho a voz y voto en las Asambleas Generales de la Iglesia corresponde exclusivamente a los Miembros Activos en plena comunión que hayan cumplido los dieciocho (18) años de edad y figuren inscritos en el Padrón Oficial de Miembros Activos de RENACER CHURCH. Ningún cargo ministerial, pastoral o de consejero conferirá votos múltiples o privilegiados en la Asamblea, rigiendo el principio bíblico de un voto por cada miembro activo.

Sección 22.2. Calificación de Miembro Activo.
Para ejercer el derecho a voto, el creyente deberá reunir y mantener los requisitos constitucionales de membresía activa: profesión pública de fe en Jesucristo, bautismo en agua por inmersión, conclusión de la Escuela de Discípulos, adhesión incondicional a la Declaración de Fe (REN-DOC-001), asistencia regular a los cultos dominicales y a una Familia de Grupo, fidelidad en el sostenimiento de la obra mediante diezmos y ofrendas, y conducta irreprensible no sujeta a disciplina eclesiástica.

Sección 22.3. Quórum y Cómputo Asambleario.
Para la validez de cualquier Asamblea General Ordinaria o Extraordinaria, se requerirá un quórum obligatorio del cincuenta por ciento (50%) de los miembros activos con derecho a voto registrados en el Padrón Oficial cerrado con treinta (30) días de anticipación a la convocatoria. Las decisiones sobre asuntos ordinarios se adoptarán por mayoría simple (más del 50% de los votos válidos emitidos presentes con quórum), y las materias extraordinarias requerirán imperativamente la mayoría calificada de dos tercios (2/3) de los votos válidos emitidos presentes con quórum.

Sección 22.4. Catálogo Reservado de Voto Asambleario.
El ejercicio del derecho a voto congregacional se circunscribe estrictamente al siguiente catálogo reservado de materias institucionales:
a) Confirmación bienal de los integrantes del Consejo de Gobierno propuestos por el Pastor Fundador.
b) Ratificación del sucesor del Pastor Fundador conforme a las formalidades establecidas en el Artículo 13 de esta Constitución.
c) Enajenación, venta o gravamen hipotecario de bienes inmuebles de la corporación.
d) Aprobación de reformas a la presente Constitución, conforme al procedimiento de enmienda aplicable.
e) Disolución voluntaria de la corporación y transferencia de bienes a entidades 501(c)(3) compatibles.

Sección 22.5. Delimitación de Autoridades y Revisión Legal.
La Asamblea General no interviene en la administración presupuestaria corriente, contratación ordinaria ni gobierno fiduciario diario, materias reservadas al Consejo de Gobierno / Board of Trustees, ni en asuntos de doctrina, liturgia o nombramientos ministeriales, reservados a la autoridad espiritual del Pastor Fundador y el Consejo Ministerial. Las formalidades de convocatoria, padrón electoral, impugnaciones y votaciones telemáticas se regirán por los Bylaws corporativos (REN-DOC-003) y estarán sujetas a la revisión formal del asesor legal en el Estado de New Jersey.`,
  proposedDraftNotice: "PROPUESTA DE REDACCIÓN — NO ADOPTADA",
};

export function getArticle22Dossier(): Article22VotingRightsDossier {
  return ARTICLE_22_DOSSIER;
}
