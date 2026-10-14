// ============================================================================
// RENACER CHURCH MAESTRO — FASE 42: PAQUETE OFICIAL PARA REVISIÓN LEGAL
// ASESORÍA JURÍDICA EN EL ESTADO DE NEW JERSEY (RENACER CHURCH, INC.)
// ============================================================================

import { getArticle13Dossier } from "./article-13-succession-dossier";
import { getArticle17Dossier } from "./article-17-corporate-powers-dossier";
import { getArticle22Dossier } from "./article-22-voting-rights-dossier";
import { getArticle43Dossier } from "./article-43-amendment-dossier";
import { getArticle46Dossier } from "./article-46-document-precedence-dossier";
import { getArticle47Dossier } from "./article-47-effective-date-dossier";
import { getConsolidatedSixCriticalDossier } from "./constitution-consolidated-six-critical-service";

export interface LegalPackageDocumentIndexItem {
  code: string;
  name: string;
  category: "CORPORATIVO_REGISTRAL" | "DOCTRINAL" | "CONSTITUCIONAL" | "ESTATUTARIO_BYLAWS" | "OPERATIVO_SOP" | "AUDITORIA_EXPEDIENTES";
  purpose: string;
  scope: string;
  status: string;
  relationWithOthers: string;
  legalReviewRequired: boolean;
}

export interface CriticalArticleSummaryForAttorney {
  articleNumber: 13 | 17 | 22 | 43 | 46 | 47;
  matter: string;
  coreIssue: string;
  status: "PENDIENTE_DEFINIR";
  existingProposal: string;
  pendingInstitutionalDecision: string;
  attorneyQuestionsSummary: string[];
  riskToReview: string;
  affectedDocuments: string;
}

export interface ConsolidatedClassifiedQuestion {
  questionId: string;
  categoryCode: "A_CORPORATIVO" | "B_FIDUCIARIO" | "C_GOBERNANZA" | "D_MIEMBROS_VOTO" | "E_SUCESION" | "F_PROPIEDAD" | "G_ENMIENDAS" | "H_PREVALENCIA" | "I_ADOPCION_VIGENCIA";
  categoryName: string;
  questionText: string;
  relatedArticles: number[];
  affectedDocuments: string;
  consultationReason: string;
  riskIfNotDefined: string;
  requiresAttorney: "SÍ";
}

export interface LegalRiskMatrixItem {
  riskId: string;
  riskName: string;
  articleNumber: number;
  document: string;
  description: string;
  impactLevel: "ALTO" | "CRITICO";
  relatedQuestionId: string;
  status: "RIESGO_A_REVISAR";
  priority: "ALTA" | "URGENTE";
}

export interface PotentialDocumentModificationItem {
  documentCode: string;
  documentTitle: string;
  possibleChange: string;
  reason: string;
  relatedArticle: number;
  status: "POSIBLE_MODIFICACION";
  requiresAttorney: "SÍ";
}

export interface AttorneyResponseTemplate {
  reviewDate: "PENDIENTE";
  attorneyName: "PENDIENTE (NO ASIGNADO)";
  lawFirmName: "PENDIENTE (NO ASIGNADO)";
  matterReviewed: string;
  writtenRecommendation: "PENDIENTE DE REVISIÓN LEGAL";
  affectedDocument: string;
  recommendedChangeText: "PENDIENTE DE DICTAMEN";
  priority: "PENDIENTE";
  observations: "ESTRUCTURA PREPARADA PARA REGISTRO DE OPINIÓN LEGAL REAL";
}

export interface LegalReviewFinalPackage {
  title: string;
  organizationLegalName: string;
  location: string;
  founder: string;
  packageStatus: "PAQUETE_PREPARATORIO";
  legalDisclaimer: string;
  documentConstitutionStatus: {
    code: "REN-DOC-002";
    version: "0.1";
    status: "EN_REDACCION";
    adoption: "NO ADOPTADA";
    adoptionDate: "NO DEFINIDA";
    effectiveDate: "NO DEFINIDA";
  };
  executiveSummary: {
    overview: string;
    documentHierarchy: string;
    sixCriticalMattersOverview: string;
    attorneyScopeOfWork: string[];
  };
  documentIndex: LegalPackageDocumentIndexItem[];
  criticalArticlesSummaries: CriticalArticleSummaryForAttorney[];
  classifiedQuestions: ConsolidatedClassifiedQuestion[];
  riskMatrix: LegalRiskMatrixItem[];
  potentialModifications: PotentialDocumentModificationItem[];
  checklist: { itemNumber: number; task: string; completed: false }[];
  responseStructure: AttorneyResponseTemplate[];
}

export const LEGAL_REVIEW_FINAL_PACKAGE: LegalReviewFinalPackage = {
  title: "Paquete Oficial de Revisión Legal — RENACER CHURCH, INC.",
  organizationLegalName: "RENACER CHURCH, INC.",
  location: "Paterson, Passaic County, New Jersey",
  founder: "Luis Uchubanda Falconí",
  packageStatus: "PAQUETE_PREPARATORIO",
  legalDisclaimer: "ESTE DOCUMENTO ES UN PAQUETE DE TRABAJO PREPARATORIO ORGANIZADO POR EL EQUIPO TÉCNICO. NO CONSTITUYE OPINIÓN LEGAL NI DICTAMEN VINCULANTE. NO REPRESENTA ADOPCIÓN DE LA CONSTITUCIÓN.",
  documentConstitutionStatus: {
    code: "REN-DOC-002",
    version: "0.1",
    status: "EN_REDACCION",
    adoption: "NO ADOPTADA",
    adoptionDate: "NO DEFINIDA",
    effectiveDate: "NO DEFINIDA",
  },
  executiveSummary: {
    overview: "RENACER CHURCH, INC. es una entidad eclesiástica sin fines de lucro incorporada bajo las leyes del Estado de New Jersey y organizada para operar bajo la Sección 501(c)(3) del Código de Rentas Internas de los EE.UU. La Iglesia se encuentra preparando la adopción formal de su Carta Magna interna (REN-DOC-002), requiriendo la revisión integral de un abogado certificado en New Jersey.",
    documentHierarchy: "La estructura documental se divide en dos esferas complementarias: la Esfera Espiritual y Doctrinal (Declaración de Fe inmutable y Constitución) y la Esfera Fiduciaria y Corporativa (Certificate of Incorporation ante el Estado de NJ y Bylaws corporativos bajo N.J.S.A. Title 15A & 16).",
    sixCriticalMattersOverview: "Se han identificado seis materias que concentran el riesgo fiduciario y estatutario: Sucesión del Fundador (Art. 13), Quórums y Poderes Corporativos (Art. 17), Derechos de Voto (Art. 22), Procedimiento de Enmienda (Art. 43), Prevalencia Documental (Art. 46) y Fecha de Vigencia Oficial (Art. 47).",
    attorneyScopeOfWork: [
      "1. Revisar los estatutos corporativos civiles (REN-DOC-003 Bylaws) frente a la Constitución interna (REN-DOC-002).",
      "2. Validar la legalidad de la tabla de quórums escalonados (3->2, 4->3, 5->3) y la regla de desempate bajo N.J.S.A. 15A:6-7.",
      "3. Delimitar los derechos de voto de los miembros frente a las facultades fiduciarias indelegables del Board of Trustees.",
      "4. Confirmar el blindaje fiduciario y bancario del pliego sucesorio reservado del Pastor Fundador.",
      "5. Verificar la procedencia y redacción de las cláusulas de arbitraje eclesiástico y protección bajo la doctrina de abstención de la Primera Enmienda.",
      "6. Emitir recomendaciones formales por escrito antes de cualquier acto de adopción oficial.",
    ],
  },

  // PARTE 1 & 3 — MAPA E ÍNDICE DOCUMENTAL
  documentIndex: [
    {
      code: "REN-DOC-000",
      name: "Certificate of Incorporation",
      category: "CORPORATIVO_REGISTRAL",
      purpose: "Nacimiento corporativo público, personería jurídica en NJ, objeto social y cláusula 501(c)(3).",
      scope: "Civil Estatal (New Jersey)",
      status: "VIGENTE_REGISTRADO",
      relationWithOthers: "Estatuto público supremo ante el Estado de NJ.",
      legalReviewRequired: true,
    },
    {
      code: "REN-DOC-001",
      name: "Declaración de Fe (20 Artículos)",
      category: "DOCTRINAL",
      purpose: "Fundamento bíblico inerrante, cuerpo doctrinal inmutable y comunión teológica.",
      scope: "Doctrinal / Espiritual",
      status: "BORRADOR v1.0 (NO ADOPTADA)",
      relationWithOthers: "Primacía absoluta en materia de fe sobre toda otra norma.",
      legalReviewRequired: false,
    },
    {
      code: "REN-DOC-002",
      name: "Constitución de RENACER",
      category: "CONSTITUCIONAL",
      purpose: "Carta Magna eclesial de 48 artículos, gobierno espiritual, membresía y ministerios.",
      scope: "Constitucional Eclesial Interno",
      status: "EN_REDACCION v0.1 (NO ADOPTADA)",
      relationWithOthers: "Norma eclesiástica interna superior a manuales operativos.",
      legalReviewRequired: true,
    },
    {
      code: "REN-DOC-003",
      name: "Bylaws de RENACER CHURCH, INC.",
      category: "ESTATUTARIO_BYLAWS",
      purpose: "Estatutos corporativos civiles bajo N.J.S.A. 15A & 16, directores y facultades bancarias.",
      scope: "Corporativo / Fiduciario Civil",
      status: "PLANIFICADO v0.1 (NO ADOPTADA)",
      relationWithOthers: "Reglamento civil fiduciario subordinado a la ley y coordinado con la Constitución.",
      legalReviewRequired: true,
    },
    {
      code: "REN-DOC-004 a 020",
      name: "Manuales Ministeriales y Reglamentos Departamentales",
      category: "OPERATIVO_SOP",
      purpose: "Procedimientos operativos estándar (SOPs), manuales celulares, finanzas y disciplina.",
      scope: "Operativo / Ministerial",
      status: "PLANIFICADOS / EN_DESARROLLO",
      relationWithOthers: "Subordinados en todo momento a la Constitución y Bylaws.",
      legalReviewRequired: false,
    },
    {
      code: "REG-DEC-107",
      name: "Registro Maestro de 107 Decisiones Institucionales",
      category: "AUDITORIA_EXPEDIENTES",
      purpose: "Memoria histórica institucional inmutable y trazabilidad fundacional.",
      scope: "Histórico / Normativo Interno",
      status: "CONSOLIDADO_PROTEGIDO (107/107 OK)",
      relationWithOthers: "Base de verdad histórica del proyecto Maestro.",
      legalReviewRequired: false,
    },
    {
      code: "EXP-6-CRIT",
      name: "Expedientes de los 6 Artículos Críticos y Revisión Consolidada",
      category: "AUDITORIA_EXPEDIENTES",
      purpose: "Dossiers analíticos exhaustivos de los Artículos 13, 17, 22, 43, 46 y 47 (Fases 35 a 41).",
      scope: "Preparatorio para Revisión Legal",
      status: "COMPLETADOS (NO ADOPTADOS)",
      relationWithOthers: "Fundamento técnico del presente paquete legal.",
      legalReviewRequired: true,
    },
  ],

  // PARTE 4 — RESUMEN DE LOS 6 EXPEDIENTES CRÍTICOS
  criticalArticlesSummaries: [
    {
      articleNumber: 13,
      matter: "Sucesión del Pastor Fundador y Continuidad Institucional",
      coreIssue: "Regulación de eventos de incapacidad médica, transición y vacancia sin comprometer la personería fiduciaria ni la visión pastoral.",
      status: "PENDIENTE_DEFINIR",
      existingProposal: "Pliego reservado en vida suscrito por el Fundador o Comisión Mixta de Emergencia (máx. 180 días) sin facultades de venta de inmuebles (PROPUESTA — NO ADOPTADA).",
      pendingInstitutionalDecision: "Plazo exacto de interinato y porcentaje asambleario de ratificación sucesoria.",
      attorneyQuestionsSummary: [
        "Validez estatutaria del pliego reservado para presidencia de Trustees en NJ.",
        "Formalidades médicas y notariales ante incapacidad permanente.",
        "Protección bancaria contra congelamiento de cuentas ante vacancia.",
      ],
      riskToReview: "Acefalía institucional o disputas sucesorias que deriven en bloqueo de cuentas corrientes.",
      affectedDocuments: "REN-DOC-002 (Art. 13) y REN-DOC-003 (Bylaws)",
    },
    {
      articleNumber: 17,
      matter: "Quórums, Mayorías y Poderes Corporativos del Consejo de Gobierno",
      coreIssue: "Fijación de quórums de directores y delimitación de umbrales económicos para contratos extraordinarios.",
      status: "PENDIENTE_DEFINIR",
      existingProposal: "Tabla de quórum (3->2, 4->3, 5->3), mayoría simple ordinaria, 2/3 para extraordinarias y umbral del 10% del presupuesto anual en Bylaws (PROPUESTA — NO ADOPTADA).",
      pendingInstitutionalDecision: "Criterio cuantitativo exacto del umbral para contratos de alto valor.",
      attorneyQuestionsSummary: [
        "Legalidad de la tabla de quórum escalonada bajo N.J.S.A. 15A:6-7.",
        "Exigibilidad de la mayoría calificada de 2/3 en estatutos corporativos de NJ.",
        "Requisitos registrales para hipotecas y compraventa de inmuebles en Passaic County.",
      ],
      riskToReview: "Nulidad de acuerdos del Board por defectos de quórum o extralimitación de poderes.",
      affectedDocuments: "REN-DOC-002 (Art. 17) y REN-DOC-003 (Bylaws)",
    },
    {
      articleNumber: 22,
      matter: "Derechos Específicos de Voto y Calificación Congregacional",
      coreIssue: "Definición del estatus de Miembro Activo y catálogo taxativo de materias reservadas al voto de la Asamblea.",
      status: "PENDIENTE_DEFINIR",
      existingProposal: "Voto reservado a miembros activos mayores de 18 años, quórum del 50% y voto circunscrito a inmuebles, disolución y enmiendas (PROPUESTA — NO ADOPTADA).",
      pendingInstitutionalDecision: "Regla de segunda convocatoria ante falta de quórum del 50%.",
      attorneyQuestionsSummary: [
        "Calificación de Voting Members bajo N.J.S.A. 15A:5-1.",
        "Validez de exclusión de voto congregacional en presupuesto ordinario.",
        "Derechos de inspección de libros y actas bajo N.J.S.A. 15A:5-24.",
      ],
      riskToReview: "Demandas de miembros disidentes alegando derechos corporativos universales de voto.",
      affectedDocuments: "REN-DOC-002 (Art. 22) y REN-DOC-003",
    },
    {
      articleNumber: 43,
      matter: "Procedimiento de Enmienda y Cláusulas Pétreas",
      coreIssue: "Establecimiento de un sistema escalonado en tres niveles (A/B/C) y blindaje de cláusulas inmutables.",
      status: "PENDIENTE_DEFINIR",
      existingProposal: "Nivel A (Doctrina: Fundador exclusivo) / Nivel B (Estructura: 2/3 Consejo + 2/3 Asamblea + V.B. Fundador) / Nivel C (Reglamentos: Mayoría simple) (PROPUESTA — NO ADOPTADA).",
      pendingInstitutionalDecision: "Mayoría calificada exacta para reformas estructurales de Nivel B.",
      attorneyQuestionsSummary: [
        "Validez de la doble mayoría calificada (2/3 + 2/3) bajo N.J.S.A. 15A:9-1.",
        "Coordinación de enmiendas constitucionales con el Certificate of Incorporation en Trenton.",
        "Plazos formales de notificación previa asamblearia (30 días).",
      ],
      riskToReview: "Invalidez o inoponibilidad de reformas estatutarias frente al Estado de New Jersey.",
      affectedDocuments: "REN-DOC-002 (Art. 43) y Certificate of Incorporation",
    },
    {
      articleNumber: 46,
      matter: "Prevalencia en Conflicto Documental y Jerarquía Normativa",
      coreIssue: "Armonización entre la primacía bíblico-doctrinal interna y la supremacía civil corporativa de New Jersey.",
      status: "PENDIENTE_DEFINIR",
      existingProposal: "Modelo híbrido dual con separación de esferas y protocolo de resolución en 12 pasos (PROPUESTA — NO ADOPTADA).",
      pendingInstitutionalDecision: "Validación formal de la cláusula de prevalencia en los Bylaws.",
      attorneyQuestionsSummary: [
        "Jurisprudencia civil de NJ en resolución de colisiones estatutarias.",
        "Alcance de la doctrina de abstención eclesiástica de la Primera Enmienda.",
        "Cláusula de arbitraje bajo el NJ Alternative Procedure for Dispute Resolution Act.",
      ],
      riskToReview: "Judicialización civil de controversias teológicas o disciplinarias.",
      affectedDocuments: "REN-DOC-001, REN-DOC-002 y REN-DOC-003",
    },
    {
      articleNumber: 47,
      matter: "Fecha de Vigencia Oficial, Adopción y Condiciones Previas",
      coreIssue: "Supeditación de la entrada en vigor al cumplimiento de condiciones previas y al acto solemne ADOPT_OFFICIAL.",
      status: "PENDIENTE_DEFINIR",
      existingProposal: "Entrada en vigor según Decreto de Adopción suscrito exclusivamente por el Pastor Fundador, prohibiendo fechas retroactivas (PROPUESTA — NO ADOPTADA).",
      pendingInstitutionalDecision: "Fijación de la fecha real de adopción tras culminar la revisión legal.",
      attorneyQuestionsSummary: [
        "Solemnidades registrales de entrada en vigor en New Jersey.",
        "Prohibición de retroactividad estatutaria en materias disciplinarias.",
        "Certificaciones requeridas por aseguradoras de títulos inmobiliarios.",
      ],
      riskToReview: "Incertidumbre temporal sobre qué estatuto rige durante la transición.",
      affectedDocuments: "REN-DOC-002 (Art. 47) y Decreto de Adopción",
    },
  ],

  // PARTE 5 — PREGUNTAS JURÍDICAS CONSOLIDADAS (9 CATEGORÍAS A - I)
  classifiedQuestions: [
    {
      questionId: "PREG-CORP-01",
      categoryCode: "A_CORPORATIVO",
      categoryName: "A. Asuntos Corporativos y de Registro",
      questionText: "¿Cómo debe coordinarse la relación jerárquica entre el Certificate of Incorporation registrado en Trenton y los Bylaws corporativos bajo N.J.S.A. 15A:2-8?",
      relatedArticles: [43, 46],
      affectedDocuments: "Certificate of Incorporation y REN-DOC-003",
      consultationReason: "Asegurar que las facultades de directores se alineen con el documento público estatal.",
      riskIfNotDefined: "Inconsistencias registrales ante el Departamento del Tesoro de NJ.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-FID-01",
      categoryCode: "B_FIDUCIARIO",
      categoryName: "B. Deberes Fiduciarios y Quórums de Trustees",
      questionText: "¿Son legalmente vinculantes bajo N.J.S.A. 15A:6-7 la tabla de quórums escalonados (3->2, 4->3, 5->3) y la exigencia de 2/3 para materias extraordinarias del Board of Trustees?",
      relatedArticles: [17],
      affectedDocuments: "REN-DOC-002 (Art. 17) y REN-DOC-003 (Bylaws)",
      consultationReason: "Proteger la validez fiduciaria de las resoluciones de la junta directiva.",
      riskIfNotDefined: "Impugnación de contratos o compras por supuesta falta de quórum legal.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-GOB-01",
      categoryCode: "C_GOBERNANZA",
      categoryName: "C. Gobernanza y Separación de Esferas",
      questionText: "¿Cómo blindar en los Bylaws la separación entre el gobierno fiduciario del Board y la autoridad espiritual vitalicia del Pastor Fundador?",
      relatedArticles: [17, 19, 46],
      affectedDocuments: "REN-DOC-002 y REN-DOC-003",
      consultationReason: "Evitar interferencias de directores civiles en materias pastorales.",
      riskIfNotDefined: "Conflictos de competencia entre el cuerpo pastoral y el fiduciario.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-VOTO-01",
      categoryCode: "D_MIEMBROS_VOTO",
      categoryName: "D. Miembros y Derechos de Voto",
      questionText: "¿Permite el N.J.S.A. 15A:5-1 restringir el derecho a voto de los miembros exclusivamente a un catálogo taxativo (inmuebles, disolución, enmiendas) fijando un quórum del 50%?",
      relatedArticles: [22],
      affectedDocuments: "REN-DOC-002 (Art. 22) y REN-DOC-003",
      consultationReason: "Mantener el orden teocrático y la estabilidad administrativa congregacional.",
      riskIfNotDefined: "Demandas de miembros exigiendo votar contrataciones ordinarias.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-SUC-01",
      categoryCode: "E_SUCESION",
      categoryName: "E. Sucesión y Continuidad Institucional",
      questionText: "¿Qué validez fiduciaria tiene ante entidades bancarias de New Jersey un pliego sucesorio reservado suscrito en vida por el Pastor Fundador para el traspaso de firmas y presidencia?",
      relatedArticles: [13, 17],
      affectedDocuments: "REN-DOC-002 (Art. 13) y Resoluciones Bancarias",
      consultationReason: "Prevenir el bloqueo preventivo de cuentas operativas ante fallecimiento o incapacidad.",
      riskIfNotDefined: "Parálisis económica de la Iglesia durante la transición pastoral.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-PROP-01",
      categoryCode: "F_PROPIEDAD",
      categoryName: "F. Propiedad Inmobiliaria y Contratos",
      questionText: "¿Qué solemnidades registrales y asamblearias exige New Jersey para que una restricción de venta de inmuebles por 2/3 sea plenamente oponible ante el County Clerk?",
      relatedArticles: [17, 22],
      affectedDocuments: "Escrituras públicas y REN-DOC-003",
      consultationReason: "Blindaje patrimonial del templo y bienes raíces en Passaic County, NJ.",
      riskIfNotDefined: "Riesgo de gravamen o enajenación sin autorización asamblearia.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-ENM-01",
      categoryCode: "G_ENMIENDAS",
      categoryName: "G. Procedimiento de Enmienda Constitucional",
      questionText: "¿Es legalmente exigible la fórmula de doble mayoría calificada (2/3 Board + 2/3 Asamblea) para enmendar estatutos bajo N.J.S.A. 15A:9-1?",
      relatedArticles: [43],
      affectedDocuments: "REN-DOC-002 (Art. 43) y Bylaws",
      consultationReason: "Garantizar la estabilidad constitucional y evitar reformas no consensuadas.",
      riskIfNotDefined: "Impugnación de enmiendas por mayorías discrepantes.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-PREV-01",
      categoryCode: "H_PREVALENCIA",
      categoryName: "H. Prevalencia en Conflicto Documental",
      questionText: "¿Hasta qué punto la doctrina de abstención eclesiástica de la Primera Enmienda protege la primacía de la Declaración de Fe frente a disputas en cortes civiles de NJ?",
      relatedArticles: [46],
      affectedDocuments: "REN-DOC-001 y REN-DOC-002",
      consultationReason: "Inmunidad judicial en controversias de fe, ordenación y disciplina.",
      riskIfNotDefined: "Judicialización de asuntos de doctrina bíblica.",
      requiresAttorney: "SÍ",
    },
    {
      questionId: "PREG-VIG-01",
      categoryCode: "I_ADOPCION_VIGENCIA",
      categoryName: "I. Adopción Oficial y Entrada en Vigor",
      questionText: "¿Qué formalidad de decreto o certificado de adopción suscrito por el Pastor Fundador debe archivarse para certificar la vigencia formal ante aseguradoras de títulos y bancos?",
      relatedArticles: [47],
      affectedDocuments: "Decreto de Adopción y REN-DOC-002",
      consultationReason: "Acreditación indubitable de la entrada en vigor de la Carta Magna.",
      riskIfNotDefined: "Incertidumbre temporal sobre la vigencia estatutaria.",
      requiresAttorney: "SÍ",
    },
  ],

  // PARTE 6 — MATRIZ DE RIESGOS A REVISAR POR EL ABOGADO
  riskMatrix: [
    {
      riskId: "RIESGO-REV-01",
      riskName: "Validez de Quórum Escalonado de Trustees",
      articleNumber: 17,
      document: "REN-DOC-003 (Bylaws)",
      description: "Riesgo de que la tabla 3->2, 4->3, 5->3 sea cuestionada bajo el Nonprofit Corporation Act de NJ si no se formula expresamente en los Bylaws.",
      impactLevel: "ALTO",
      relatedQuestionId: "PREG-FID-01",
      status: "RIESGO_A_REVISAR",
      priority: "URGENTE",
    },
    {
      riskId: "RIESGO-REV-02",
      riskName: "Voto Congregacional vs Facultades Fiduciarias del Board",
      articleNumber: 22,
      document: "REN-DOC-002 y REN-DOC-003",
      description: "Riesgo de demandas de miembros que pretendan ejercer control asambleario sobre la ejecución presupuestaria ordinaria.",
      impactLevel: "ALTO",
      relatedQuestionId: "PREG-VOTO-01",
      status: "RIESGO_A_REVISAR",
      priority: "ALTA",
    },
    {
      riskId: "RIESGO-REV-03",
      riskName: "Continuidad Fiduciaria Bancaria ante Sucesión",
      articleNumber: 13,
      document: "REN-DOC-003",
      description: "Riesgo de bloqueo preventivo de cuentas bancarias institucionales si no existe un protocolo notarial reconocido por las entidades financieras.",
      impactLevel: "CRITICO",
      relatedQuestionId: "PREG-SUC-01",
      status: "RIESGO_A_REVISAR",
      priority: "URGENTE",
    },
    {
      riskId: "RIESGO-REV-04",
      riskName: "Armonización Registral con Certificate of Incorporation",
      articleNumber: 43,
      document: "Certificate of Incorporation",
      description: "Riesgo de discrepancia entre las causales de disolución internas y las radicadas originalmente en Trenton.",
      impactLevel: "CRITICO",
      relatedQuestionId: "PREG-CORP-01",
      status: "RIESGO_A_REVISAR",
      priority: "URGENTE",
    },
    {
      riskId: "RIESGO-REV-05",
      riskName: "Cláusula de Arbitraje Eclesiástico Vinculante",
      articleNumber: 46,
      document: "REN-DOC-002 (Art. 42)",
      description: "Riesgo de que miembros demanden en tribunales ordinarios si la renuncia a la jurisdicción civil no cumple los estándares de debido proceso de NJ.",
      impactLevel: "ALTO",
      relatedQuestionId: "PREG-PREV-01",
      status: "RIESGO_A_REVISAR",
      priority: "ALTA",
    },
  ],

  // PARTE 8 — DOCUMENTOS QUE PODRÍAN REQUERIR MODIFICACIONES
  potentialModifications: [
    {
      documentCode: "REN-DOC-003",
      documentTitle: "Bylaws de RENACER CHURCH, INC.",
      possibleChange: "Incorporación formal de la tabla de quórums del Board, umbrales de contratación y cláusula de prevalencia fiduciaria.",
      reason: "Garantizar la plena oponibilidad fiduciaria civil de las normas constitucionales en New Jersey.",
      relatedArticle: 17,
      status: "POSIBLE_MODIFICACION",
      requiresAttorney: "SÍ",
    },
    {
      documentCode: "REN-DOC-000",
      documentTitle: "Certificate of Incorporation",
      possibleChange: "Presentación de Certificate of Amendment en Trenton si se ajustan cláusulas de disolución o gobernanza pública.",
      reason: "Armonización registral obligatoria ante el Departamento del Tesoro de NJ.",
      relatedArticle: 43,
      status: "POSIBLE_MODIFICACION",
      requiresAttorney: "SÍ",
    },
    {
      documentCode: "REN-DOC-002",
      documentTitle: "Constitución de RENACER",
      possibleChange: "Ajuste de redacción en los 6 artículos críticos según el dictamen formal del abogado.",
      reason: "Incorporación de observaciones legales antes de la adopción oficial.",
      relatedArticle: 47,
      status: "POSIBLE_MODIFICACION",
      requiresAttorney: "SÍ",
    },
  ],

  // PARTE 9 — CHECKLIST PARA EL ABOGADO DE NEW JERSEY
  checklist: [
    { itemNumber: 1, task: "Revisar Certificate of Incorporation (REN-DOC-000) radicado en Trenton, NJ.", completed: false },
    { itemNumber: 2, task: "Revisar borrador de Bylaws corporativos (REN-DOC-003).", completed: false },
    { itemNumber: 3, task: "Revisar borrador de la Constitución de RENACER (REN-DOC-002 v0.1).", completed: false },
    { itemNumber: 4, task: "Revisar Declaración de Fe (REN-DOC-001) para confirmar blindaje de Primera Enmienda.", completed: false },
    { itemNumber: 5, task: "Validar tabla de quórum de directores bajo N.J.S.A. 15A:6-7.", completed: false },
    { itemNumber: 6, task: "Validar régimen de mayorías ordinarias y 2/3 extraordinarias del Board.", completed: false },
    { itemNumber: 7, task: "Validar derechos de voto de miembros activos y quórum del 50% bajo N.J.S.A. 15A:5-1.", completed: false },
    { itemNumber: 8, task: "Validar protocolo sucesorio reservado y continuidad de cuentas bancarias.", completed: false },
    { itemNumber: 9, task: "Validar restricciones estatutarias de venta e hipoteca de inmuebles en Passaic County.", completed: false },
    { itemNumber: 10, task: "Validar procedimiento de enmienda escalonado (Niveles A/B/C) y cláusulas protegidas.", completed: false },
    { itemNumber: 11, task: "Validar cláusula de prevalencia documental y armonización fiduciaria.", completed: false },
    { itemNumber: 12, task: "Validar cláusula de arbitraje eclesiástico bajo ley de arbitraje de NJ.", completed: false },
    { itemNumber: 13, task: "Validar cláusula de disolución conforme a exención fiscal IRS 501(c)(3).", completed: false },
    { itemNumber: 14, task: "Validar política de protección infantil y antecedentes bajo ley de NJ.", completed: false },
    { itemNumber: 15, task: "Validar fórmula de entrada en vigor y Decreto Solemne de Adopción.", completed: false },
    { itemNumber: 16, task: "Identificar posibles incompatibilidades normativas y riesgos fiduciarios.", completed: false },
    { itemNumber: 17, task: "Indicar qué documentos civiles requieren enmienda formal o radicación estatal.", completed: false },
    { itemNumber: 18, task: "Proponer ajustes de redacción técnica en los artículos correspondientes.", completed: false },
    { itemNumber: 19, task: "Emitir Memorando de Dictamen Legal formal por escrito firmado por el abogado.", completed: false },
  ],

  // PARTE 10 — ESTRUCTURA PARA REGISTRO DE RESPUESTA DEL ABOGADO
  responseStructure: [
    {
      reviewDate: "PENDIENTE",
      attorneyName: "PENDIENTE (NO ASIGNADO)",
      lawFirmName: "PENDIENTE (NO ASIGNADO)",
      matterReviewed: "Estructura Corporativa y Estatutos de New Jersey",
      writtenRecommendation: "PENDIENTE DE REVISIÓN LEGAL",
      affectedDocument: "REN-DOC-002 y REN-DOC-003",
      recommendedChangeText: "PENDIENTE DE DICTAMEN",
      priority: "PENDIENTE",
      observations: "ESTRUCTURA PREPARADA PARA REGISTRO DE OPINIÓN LEGAL REAL",
    },
  ],
};

export function getLegalReviewFinalPackage(): LegalReviewFinalPackage {
  return LEGAL_REVIEW_FINAL_PACKAGE;
}
