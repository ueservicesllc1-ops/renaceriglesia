// ============================================================================
// RENACER CHURCH MAESTRO — LIBRO WEB COMPLETO
// "GUÍA DE CREACIÓN LEGAL, INSTITUCIONAL Y ADMINISTRATIVA DE RENACER CHURCH"
// Paterson, Passaic County, New Jersey
// ============================================================================

export interface LegalModel {
  id: string;
  title: string;
  type: string;
  disclaimer: string;
  content: string;
}

export interface ContentSection {
  sectionId: string;
  sectionTitle: string;
  paragraphs: string[];
  callouts?: { type: "IMPORTANT" | "WARNING" | "TIP" | "LEGAL_NOTE"; title: string; text: string }[];
  tables?: { headers: string[]; rows: string[][] };
  checklists?: { id: string; label: string; details?: string }[];
  models?: LegalModel[];
}

export interface BookChapter {
  chapterNumber: number;
  slug: string;
  title: string;
  subtitle: string;
  category: "ESTRUCTURA_LEGAL" | "DOCUMENTOS_FUNDACIONALES" | "FINANZAS_Y_TRIBUTOS" | "GOBIERNO_Y_ADMINISTRACION" | "OPERACIONES_Y_PROTECCION" | "CHECKLIST_Y_RECURSOS";
  readTimeMinutes: number;
  summary: string;
  officialSources: { name: string; url: string; authority: string }[];
  contentSections: ContentSection[];
}

export const BOOK_CHAPTERS: BookChapter[] = [
  // -------------------------------------------------------------------------
  // CAPÍTULO 1
  // -------------------------------------------------------------------------
  {
    chapterNumber: 1,
    slug: "capitulo-1-plan-general",
    title: "Plan Completo para Crear Renacer Church",
    subtitle: "Ruta maestra secuencial en 19 hitos desde la visión hasta la administración operativa",
    category: "ESTRUCTURA_LEGAL",
    readTimeMinutes: 14,
    summary: "Panorama integral y cronológico de los 19 hitos indispensables para establecer legal, eclesial y administrativamente RENACER CHURCH en New Jersey.",
    officialSources: [
      { name: "New Jersey Department of the Treasury — Division of Revenue", url: "https://www.nj.gov/treasury/revenue/", authority: "State of New Jersey" },
      { name: "IRS Tax Guide for Churches and Religious Organizations (Pub 1828)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf", authority: "Internal Revenue Service" },
      { name: "New Jersey Division of Taxation", url: "https://www.nj.gov/treasury/taxation/", authority: "State of New Jersey" },
    ],
    contentSections: [
      {
        sectionId: "c1-s1",
        sectionTitle: "1. Introducción: Doble Dimensión Eclesiástica y Legal",
        paragraphs: [
          "Establecer una iglesia en el Estado de New Jersey requiere articular armónicamente dos dimensiones inseparables: la dimensión espiritual-doctrinal y la dimensión legal-corporativa.",
          "La dimensión espiritual define el llamado divino, la Declaración de Fe, los sacramentos y la autoridad pastoral. La dimensión legal civil confiere a la congregación personería jurídica para ser titular de cuentas bancarias, arrendar o adquirir bienes raíces, recibir ofrendas y donaciones deducibles de impuestos ante el IRS, y proteger fiduciariamente a la comunidad.",
          "El presente plan maestro organiza en 19 pasos secuenciales todo el proceso, asegurando que ningún trámite civil vulnere la autonomía eclesiástica ni descuide los deberes fiduciarios exigidos por las leyes de New Jersey y el Código de Rentas Internas (IRC).",
        ],
        callouts: [
          {
            type: "LEGAL_NOTE",
            title: "PRINCIPIO CONSTITUCIONAL DE AUTONOMÍA",
            text: "Bajo la Primera Enmienda de la Constitución de los Estados Unidos y la Constitución de New Jersey, el Estado no interviene en la doctrina ni en el gobierno eclesiástico interno. Sin embargo, las iglesias deben cumplir con las leyes civiles de incorporación, contratos, zonificación y empleo aplicables.",
          },
        ],
      },
      {
        sectionId: "c1-s2",
        sectionTitle: "2. Los 19 Pasos Cronológicos de Creación y Organización",
        paragraphs: [
          "A continuación se presenta la ruta visual e interactiva que conecta cada etapa del proceso con su capítulo de referencia técnica en este libro:",
        ],
        tables: {
          headers: ["Paso", "Fase de Creación", "Descripción del Trámite / Hito", "Capítulo de Referencia"],
          rows: [
            ["Paso 1", "Definición Eclesial", "Clarificar la identidad bíblica, llamamiento y equipo ministerial fundador.", "Capítulo 16: Gobierno Corporativo y Eclesial"],
            ["Paso 2", "Estructura Legal", "Evaluar y seleccionar entre Title 16 (Religioso) y Title 15A (Nonprofit Corp).", "Capítulo 2: Incorporación en NJ"],
            ["Paso 3", "Paquete de Formación", "Preparar el Certificate of Incorporation con cláusulas de propósito 501(c)(3) y disolución.", "Capítulo 3: Paquete de Formación Legal"],
            ["Paso 4", "Presentar Registro Estatal", "Radicar el certificado ante la NJ Division of Revenue y designar Registered Agent.", "Capítulo 3 y Capítulo 13: Obligaciones Estatales"],
            ["Paso 5", "Obtener EIN", "Tramitar el Employer Identification Number oficial de forma gratuita ante IRS.gov.", "Capítulo 4: EIN del IRS"],
            ["Paso 6", "Gobierno Corporativo", "Celebrar la primera reunión organizativa formal y levantar el Acta de Trustees iniciales.", "Capítulo 5: Estatutos y Modelos"],
            ["Paso 7", "Redactar Bylaws", "Aprobar los Estatutos Corporativos (REN-DOC-003) para normar la administración civil.", "Capítulo 5: Estatutos y Modelos"],
            ["Paso 8", "Constitución Eclesial", "Estructurar la Constitución de Renacer (REN-DOC-002) para el régimen doctrinal y pastoral.", "Capítulo 6: Constitución de Renacer"],
            ["Paso 9", "Declaración de Fe", "Custodiar la Declaración de Fe fundamental (REN-DOC-001).", "Capítulo 7: Declaración de Fe"],
            ["Paso 10", "Cuenta Bancaria", "Abrir la cuenta corriente institucional con resolución corporativa y control dual.", "Capítulo 9: Cuenta Bancaria y Segregación"],
            ["Paso 11", "Sistema Contable", "Implementar contabilidad por fondos, registro de diezmos y cartas de donación.", "Capítulo 10: Dinero y Controles Financieros"],
            ["Paso 12", "Estatus 501(c)(3)", "Evaluar exención automática (IRC 508(c)(1)(A)) o solicitud formal Form 1023 ante el IRS.", "Capítulo 8: Tratamiento 501(c)(3)"],
            ["Paso 13", "Registros Estatales NJ", "Tramitar exención de Sales Tax (Form ST-5) y verificar Charitable Registration.", "Capítulo 13: Obligaciones Estatales NJ"],
            ["Paso 14", "Pólizas de Seguros", "Contratar seguros de responsabilidad civil general, propiedad y abuso/molestias.", "Capítulo 14: Seguros y Riesgos"],
            ["Paso 15", "Local y Zonificación", "Verificar uso religioso, Certificate of Occupancy e inspección de bomberos en Paterson.", "Capítulo 15: Inmueble y Local en Paterson"],
            ["Paso 16", "Protección Infantil", "Aprobar políticas de seguridad infantil, regla de dos adultos y background checks.", "Capítulo 19: Protección de Niños"],
            ["Paso 17", "Padrón de Membresía", "Registrar formalmente a los Miembros Activos con derechos y deberes eclesiales.", "Capítulo 17: Membresía Eclesial"],
            ["Paso 18", "Estructura Ministerial", "Organizar los ministerios de servicio, adoración, misiones y liderazgo.", "Capítulo 18: Ministerios y Liderazgo"],
            ["Paso 19", "Cumplimiento y Archivo", "Establecer la bóveda de archivo y el calendario anual de obligaciones corporativas.", "Capítulo 21 y 22: Registros y Obligaciones"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 2
  // -------------------------------------------------------------------------
  {
    chapterNumber: 2,
    slug: "capitulo-2-incorporacion-en-new-jersey",
    title: "Incorporación en New Jersey: Title 16 vs Title 15A",
    subtitle: "Diferenciación exacta de procedimientos, tarifas oficiales y gobernanza corporativa",
    category: "ESTRUCTURA_LEGAL",
    readTimeMinutes: 16,
    summary: "Análisis comparativo riguroso entre la Ley de Sociedades Religiosas de New Jersey (Title 16) y la Ley de Corporaciones Sin Fines de Lucro (Title 15A), aclarando costos oficiales de radicación y requisitos de presentación anual.",
    officialSources: [
      { name: "New Jersey Statutes Title 16 — Corporations and Associations, Religious", url: "https://lis.njleg.state.nj.us/", authority: "NJ Legislature" },
      { name: "New Jersey Nonprofit Corporation Act (Title 15A)", url: "https://lis.njleg.state.nj.us/", authority: "NJ Legislature" },
      { name: "NJ Division of Revenue Fee Schedule", url: "https://www.nj.gov/treasury/revenue/feeschedule.shtml", authority: "NJ Treasury" },
    ],
    contentSections: [
      {
        sectionId: "c2-s1",
        sectionTitle: "1. Comparativa Técnica de Vías de Incorporación en New Jersey",
        paragraphs: [
          "El Estado de New Jersey ofrece dos caminos legales distintos para incorporar una iglesia, cada uno con su propio marco normativo, tarifas y requisitos de reporte:",
        ],
        tables: {
          headers: ["Criterio / Característica", "Vía A: Title 16 (Sociedad Religiosa)", "Vía B: Title 15A (Nonprofit Corporation)"],
          rows: [
            ["Marco Normativo Principal", "N.J.S.A. Title 16 (Religious Societies)", "N.J.S.A. Title 15A (NJ Nonprofit Corporation Act)"],
            ["Finalidad Legal", "Específicamente diseñado para congregaciones religiosas.", "Marco general para corporaciones caritativas y religiosas."],
            ["Tarifa Estatal de Radicación", "$25.00 (Filing Fee oficial para Title 16)", "$75.00 (Filing Fee oficial de Certificate of Incorporation)"],
            ["Presentación de Annual Report", "No exige reporte anual corporativo estándar.", "Obligatorio anualmente ante NJ Division of Revenue ($33 fee)."],
            ["Órgano de Gobierno Legal", "Board of Trustees (Fideicomisarios) de la sociedad religiosa.", "Board of Trustees / Board of Directors corporativo."],
            ["Reconocimiento Bancario y Civil", "Pleno reconocimiento civil y bancario.", "Ampliamente reconocido por instituciones financieras y aseguradoras."],
            ["Compatibilidad con 501(c)(3)", "Totalmente compatible al incluir cláusulas IRS.", "Totalmente compatible al incluir cláusulas IRS."],
            ["Modificaciones Estatutarias", "Reguladas por los procedimientos de Title 16.", "Procedimiento estándar bajo Title 15A:9."],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 3
  // -------------------------------------------------------------------------
  {
    chapterNumber: 3,
    slug: "capitulo-3-nombre-y-agente-registrado",
    title: "Paquete de Formación Legal de RENACER CHURCH",
    subtitle: "Ruta completa de 16 etapas (A a P): nombre corporativo, certificado, agentes y radicación estatal",
    category: "ESTRUCTURA_LEGAL",
    readTimeMinutes: 18,
    summary: "Guía práctica integral para la formación jurídica de RENACER CHURCH, INC.: verificación de disponibilidad de nombre, designación del Registered Agent en Paterson, cláusulas obligatorias del IRS y radicación oficial.",
    officialSources: [
      { name: "NJ Business Name Availability Portal", url: "https://www.njportal.com/DOR/BusinessNameSearch/", authority: "NJ Division of Revenue" },
      { name: "NJ Division of Revenue Online Business Formation (NJ-REG)", url: "https://www.nj.gov/treasury/revenue/", authority: "State of New Jersey" },
    ],
    contentSections: [
      {
        sectionId: "c3-s1",
        sectionTitle: "1. Las 16 Etapas del Paquete de Formación Legal (A a P)",
        paragraphs: [
          "A continuación se detalla la secuencia obligatoria para conformar válidamente la entidad jurídica:",
        ],
        tables: {
          headers: ["Etapa", "Denominación del Hito", "Detalle del Procedimiento", "Documento Generado"],
          rows: [
            ["A", "Verificación de Nombre", "Comprobar disponibilidad de 'RENACER CHURCH, INC.' en el portal de New Jersey.", "Reporte de disponibilidad"],
            ["B", "Reserva de Nombre (Opcional)", "Reserva opcional por 120 días si se requiere plazo previo a radicar.", "Formulario de reserva ($50)"],
            ["C", "Selección de la Vía Legal", "Confirmar adopción entre Title 16 y Title 15A para el registro.", "Dictamen de incorporación"],
            ["D", "Designación de Agente Registrado", "Nombrar Registered Agent con dirección física permanente en New Jersey.", "Consentimiento del Agente"],
            ["E", "Oficina Registrada", "Fijar el domicilio legal en Paterson, Passaic County, NJ.", "Dirección corporativa"],
            ["F", "Número Inicial de Trustees", "Designar al menos 3 Trustees iniciales según lo exige la ley de NJ.", "Lista de Trustees fundadores"],
            ["G", "Redacción de Propósito 501(c)(3)", "Insertar cláusula exclusiva de propósito religioso del IRC § 501(c)(3).", "Cláusula de objeto social"],
            ["H", "Cláusula de Disolución IRS", "Garantizar transferencia de activos a otra entidad 501(c)(3) al disolver.", "Cláusula de disolución"],
            ["I", "Prohibición de Beneficio Privado", "Cláusula de No Inurement y no intervención en campañas políticas.", "Cláusula de restricciones"],
            ["J", "Declaración de Autonomía", "Garantizar la autoridad eclesiástica y doctrinal en la Constitución de Renacer.", "Cláusula eclesiástica"],
            ["K", "Firma de Incorporadores", "Suscripción formal del Certificate of Incorporation por los fundadores.", "Certificado firmado"],
            ["L", "Radicación Estatal", "Presentación en línea ante la NJ Division of Revenue ($75 para 15A / $25 para 16).", "Recibo oficial de filing"],
            ["M", "Obtención del Certificado Sellado", "Descarga y custodia del Certificate of Incorporation sellado por el Estado.", "Certificado sellado (Charter)"],
            ["N", "Registro Tributario Estatal (NJ-REG)", "Presentar Formulario NJ-REG ante el Department of the Treasury.", "Confirmación de registro estatal"],
            ["O", "Expediente Fundacional Físico", "Crear la carpeta maestra física y digital con sello institucional.", "Expediente corporativo"],
            ["P", "Convocatoria a Reunión Organizativa", "Emitir aviso para la primera sesión de Trustees y adopción de Bylaws.", "Aviso de reunión inicial"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 4
  // -------------------------------------------------------------------------
  {
    chapterNumber: 4,
    slug: "capitulo-4-ein-del-irs",
    title: "Obtención del EIN y Estatus Federal de RENACER",
    subtitle: "Trámite oficial gratuito en línea ante el IRS, Carta CP-575 y designación del Responsible Party",
    category: "ESTRUCTURA_LEGAL",
    readTimeMinutes: 12,
    summary: "Procedimiento paso a paso para tramitar el Employer Identification Number (EIN) oficial ante el IRS sin costo alguno, designando correctamente al Responsible Party e identificando el tipo de organización.",
    officialSources: [
      { name: "IRS Online EIN Application Portal", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online", authority: "IRS" },
      { name: "IRS Form SS-4 Instructions", url: "https://www.irs.gov/forms-pubs/about-form-ss-4", authority: "IRS" },
    ],
    contentSections: [
      {
        sectionId: "c4-s1",
        sectionTitle: "1. Reglas Cruciales del Trámite de EIN para Iglesias",
        paragraphs: [
          "• **El Trámite es 100% Gratuito**: Se realiza directamente en el portal oficial del IRS (IRS.gov). Nunca pague a intermediarios privados.",
          "• **Responsible Party**: Debe ser un oficial real con control sobre los fondos (generalmente el Pastor Presidente), indicando su SSN o ITIN.",
          "• **Tipo de Entidad en el Sistema IRS**: Seleccionar 'Church or Church-Controlled Organization' dentro de la categoría de 'Nonprofit'.",
          "• **Carta CP-575 / Notice 147C**: Es el documento oficial probatorio del EIN que exigirán bancos comerciales, proveedores y aseguradoras.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 5
  // -------------------------------------------------------------------------
  {
    chapterNumber: 5,
    slug: "capitulo-5-estatutos-corporativos",
    title: "Bylaws (Estatutos Corporativos) y Modelos Prácticos",
    subtitle: "Gobernanza civil, deberes fiduciarios, actas iniciales y los primeros 10 modelos prácticos de gobernanza",
    category: "DOCUMENTOS_FUNDACIONALES",
    readTimeMinutes: 22,
    summary: "Estructura de los Bylaws corporativos (REN-DOC-003) para normar la administración civil, y 10 modelos prácticos de gobernanza para la reunión organizativa inicial, actas y resoluciones.",
    officialSources: [
      { name: "NJ Nonprofit Corporation Act — Bylaws (N.J.S.A. 15A:2-10)", url: "https://lis.njleg.state.nj.us/", authority: "NJ Legislature" },
      { name: "RENACER CHURCH Sistema Central de Documentos", url: "/documentos", authority: "RENACER CHURCH, INC." },
    ],
    contentSections: [
      {
        sectionId: "c5-s1",
        sectionTitle: "1. Propósito de los Estatutos Corporativos (REN-DOC-003)",
        paragraphs: [
          "Los Estatutos Corporativos (Bylaws) regulan el funcionamiento civil de la corporación 'RENACER CHURCH, INC.', estableciendo los deberes fiduciarios de los Trustees, la periodicidad de reuniones, los quórums y las atribuciones de los oficiales.",
        ],
      },
      {
        sectionId: "c5-s2",
        sectionTitle: "2. Primeros 10 Modelos Prácticos de Gobernanza",
        paragraphs: [
          "Los siguientes 10 modelos prácticos constituyen el instrumental base para la primera reunión formal de Trustees. Todos los modelos deben ser revisados por un abogado calificado de New Jersey antes de su firma oficial.",
        ],
        models: [
          {
            id: "mod-01",
            title: "MODELO 1: Agenda de la Primera Reunión Organizativa",
            type: "AGENDA / GOBERNANZA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `AGENDA DE LA PRIMERA REUNIÓN ORGANIZATIVA DE LA JUNTA DE FIDEICOMISARIOS
RENACER CHURCH, INC.

Fecha: [Insertar Fecha]
Hora: [Insertar Hora]
Lugar: [Insertar Dirección en Paterson, NJ]

1. Llamado al Orden y Oración Inicial.
2. Verificación de Quórum y Asistencia de Fideicomisarios.
3. Presentación y Recepción del Certificate of Incorporation Sellado.
4. Adopción de los Estatutos Corporativos (Bylaws).
5. Elección y Designación de Oficiales Corporativos.
6. Aprobación de la Apertura de Cuenta Bancaria y Firmas Autorizadas.
7. Autorización para Gestionar EIN y Cumplimiento Tributario.
8. Asuntos Varios y Fijación de la Próxima Sesión Ordinaria.
9. Clausura de la Sesión y Oración Final.`,
          },
          {
            id: "mod-02",
            title: "MODELO 2: Acta de la Primera Reunión Organizativa (Minutes)",
            type: "ACTA / GOBERNANZA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `ACTA DE LA REUNIÓN ORGANIZATIVA DE LA JUNTA DE FIDEICOMISARIOS
DE RENACER CHURCH, INC.

En la ciudad de Paterson, Condado de Passaic, Estado de New Jersey, a las [Hora] del día [Fecha], se reunieron los Fideicomisarios Iniciales de RENACER CHURCH, INC.

FIDEICOMISARIOS PRESENTES:
1. [Nombre del Fideicomisario 1]
2. [Nombre del Fideicomisario 2]
3. [Nombre del Fideicomisario 3]

QUÓRUM:
Habiéndose constatado la presencia del 100% de los Fideicomisarios, se declaró formalmente instalada la sesión.

RESOLUCIONES ADOPTADAS POR UNANIMIDAD:
1. Se dio por recibido formalmente el Certificate of Incorporation radicado ante el Estado de New Jersey.
2. Se aprobaron y adoptaron los Estatutos Corporativos (Bylaws) que regirán a la corporación.
3. Se eligieron como Oficiales a:
   - Presidente: [Nombre]
   - Secretario: [Nombre]
   - Tesorero: [Nombre]
4. Se autorizó al Presidente y Tesorero a abrir la cuenta bancaria de la iglesia en una entidad bancaria asegurada por FDIC.

No habiendo otro asunto que tratar, se levantó la sesión a las [Hora de Cierre].

Firma: ______________________________ [Nombre], Secretario
Visto Bueno: _________________________ [Nombre], Presidente`,
          },
          {
            id: "mod-03",
            title: "MODELO 3: Resolución de Adopción de Estatutos (Bylaws)",
            type: "RESOLUCIÓN / GOBERNANZA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `RESOLUCIÓN CORPORATIVA No. [Año]-01
ADOPCIÓN DE ESTATUTOS CORPORATIVOS (BYLAWS)
RENACER CHURCH, INC.

CONSIDERANDO que la corporación ha sido debidamente incorporada bajo las leyes del Estado de New Jersey;
CONSIDERANDO que es necesario establecer un marco ordenado de gobierno fiduciario y civil;

SE RESUELVE:
Que el documento presentado titulado "Estatutos Corporativos de RENACER CHURCH, INC." queda aprobado y adoptado formalmente como los Bylaws oficiales de la corporación.

Fecha de Adopción: [Fecha]
Voto: Unánime
Secretario: __________________________________ [Firma]`,
          },
          {
            id: "mod-04",
            title: "MODELO 4: Resolución de Apertura de Cuenta Bancaria",
            type: "RESOLUCIÓN / BANCARIA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `RESOLUCIÓN CORPORATIVA No. [Año]-02
AUTORIZACIÓN DE CUENTA BANCARIA Y FIRMAS
RENACER CHURCH, INC.

SE RESUELVE:
1. Que se autoriza la apertura de una cuenta de cheques corriente a nombre de "RENACER CHURCH, INC." en la institución bancaria [Nombre del Banco].
2. Que se designa como firmantes autorizados a:
   - [Nombre y Cargo 1]
   - [Nombre y Cargo 2]
3. Que para todo desembolso que supere la cantidad autorizada se requerirá la firma mancomunada de ambos firmantes.

Fecha: [Fecha]
Certifico: __________________________________ Secretario`,
          },
          {
            id: "mod-05",
            title: "MODELO 5: Resolución de Designación de Oficiales",
            type: "RESOLUCIÓN / OFICIALES",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `RESOLUCIÓN CORPORATIVA No. [Año]-03
ELECCIÓN DE OFICIALES CORPORATIVOS
RENACER CHURCH, INC.

SE RESUELVE elegir y ratificar para el período estatutario correspondiente a los siguientes oficiales:
- Presidente Corporativo: [Nombre Completo]
- Secretario Corporativo: [Nombre Completo]
- Tesorero Corporativo: [Nombre Completo]

Quienes aceptan sus cargos y asumen los deberes fiduciarios inherentes.

Fecha: [Fecha]
Certifico: __________________________________ Secretario`,
          },
          {
            id: "mod-06",
            title: "MODELO 6: Resolución para Solicitar el EIN ante el IRS",
            type: "RESOLUCIÓN / IRS",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `RESOLUCIÓN CORPORATIVA No. [Año]-04
GESTIÓN DEL EIN FEDERAL
RENACER CHURCH, INC.

SE RESUELVE:
Autorizar al Presidente [Nombre Completo] a comparecer ante el Servicio de Rentas Internas (IRS) en calidad de 'Responsible Party' para tramitar el Employer Identification Number (EIN) de RENACER CHURCH, INC.

Fecha: [Fecha]
Secretario: __________________________________ [Firma]`,
          },
          {
            id: "mod-07",
            title: "MODELO 7: Checklist de Documentos Fundacionales",
            type: "CHECKLIST / CONTROL",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `CHECKLIST DE CUSTODIA DE DOCUMENTOS FUNDACIONALES
RENACER CHURCH, INC.

[ ] 1. Certificate of Incorporation con sello oficial de New Jersey.
[ ] 2. Carta oficial de Asignación de EIN del IRS (Notice CP-575).
[ ] 3. Estatutos Corporativos (Bylaws) debidamente certificados.
[ ] 4. Acta de la Primera Sesión Organizativa firmada.
[ ] 5. Registro de Firmas Bancarias y Resolución de Apertura.
[ ] 6. Declaración de Fe fundamental (REN-DOC-001).
[ ] 7. Constitución de Renacer (REN-DOC-002).

Custodio Responsable: Secretario Corporativo
Ubicación: Bóveda Central Fiduciaria`,
          },
          {
            id: "mod-08",
            title: "MODELO 8: Checklist de Conservación Permanente",
            type: "CHECKLIST / ARCHIVO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `TABLA DE RETENCIÓN Y CUSTODIA PERMANENTE DE REGISTROS
RENACER CHURCH, INC.

DOCUMENTOS DE RETENCIÓN DE POR VIDA (PERMANENTE):
- Carta de incorporación estatal, enmiendas y charter.
- Títulos de propiedad inmobiliaria, hipotecas y escrituras.
- Cartas de determinación de exención del IRS y State Tax Exemption.
- Libro oficial de actas de la Junta de Fideicomisarios y Asambleas.
- Registros sacramentales de bautismos, matrimonios y membresía.

DOCUMENTOS DE RETENCIÓN POR 7 AÑOS:
- Libros de contabilidad general, estados financieros y conciliaciones.
- Formularios de nómina W-2, W-4, 1099 y declaraciones trimestrales.
- Comprobantes de depósitos y recibos de donaciones con restricción.

Supervisión: Fideicomisarios y Tesorero`,
          },
          {
            id: "mod-09",
            title: "MODELO 9: Registro Cronológico de Resoluciones (Resolution Log)",
            type: "LOG / CONTROL",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `LIBRO REGISTRO DE RESOLUCIONES CORPORATIVAS
RENACER CHURCH, INC.

| No. Resolución | Fecha de Adopción | Tema / Materia Aprobada | Votación | Estado de Ejecución |
|----------------|-------------------|--------------------------|----------|---------------------|
| RES-[Año]-01   | [Fecha]           | Adopción de Bylaws       | Unánime  | Ejecutado           |
| RES-[Año]-02   | [Fecha]           | Apertura Cuenta Bancaria | Unánime  | Ejecutado           |
| RES-[Año]-03   | [Fecha]           | Elección de Oficiales    | Unánime  | Ejecutado           |

Certificación del Libro: Secretario Corporativo`,
          },
          {
            id: "mod-10",
            title: "MODELO 10: Hoja de Registro de Asistencia y Quórum",
            type: "CONTROL / REUNIONES",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `REGISTRO DE ASISTENCIA Y VERIFICACIÓN DE QUÓRUM
JUNTA DE FIDEICOMISARIOS / ASAMBLEA GENERAL
RENACER CHURCH, INC.

Sesión: [ ] Ordinaria  [ ] Extraordinaria
Fecha: [Fecha] | Hora: [Hora]

LISTA DE PARTICIPANTES:
1. [Nombre]: [ ] Presente  [ ] Ausente con Excusa  [ ] Ausente  Firma: _______________
2. [Nombre]: [ ] Presente  [ ] Ausente con Excusa  [ ] Ausente  Firma: _______________
3. [Nombre]: [ ] Presente  [ ] Ausente con Excusa  [ ] Ausente  Firma: _______________

CERTIFICACIÓN DE QUÓRUM:
Total de miembros con derecho a voto: _____ | Total Presentes: _____
¿Existe Quórum Legal para deliberar y votar? [ ] SÍ  [ ] NO

Secretario de Sesión: _______________________________ [Firma]`,
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 6
  // -------------------------------------------------------------------------
  {
    chapterNumber: 6,
    slug: "capitulo-6-constitucion-eclesial",
    title: "Constitución de Renacer (REN-DOC-002)",
    subtitle: "Régimen eclesiástico, doctrina y trazabilidad de los 6 asuntos críticos del Pastor Fundador",
    category: "DOCUMENTOS_FUNDACIONALES",
    readTimeMinutes: 20,
    summary: "Estructura de la Constitución eclesiástica de RENACER (REN-DOC-002, actualmente en v0.1 EN_REDACCION NO ADOPTADA), detallando la autoridad doctrinal y los 6 asuntos pendientes del Pastor Fundador.",
    officialSources: [
      { name: "RENACER CHURCH Expediente Constitucional", url: "/constitucion", authority: "RENACER CHURCH, INC." },
    ],
    contentSections: [
      {
        sectionId: "c6-s1",
        sectionTitle: "1. Naturaleza y Estado de REN-DOC-002",
        paragraphs: [
          "La Constitución de Renacer (REN-DOC-002) es la norma suprema en el orden espiritual y eclesiástico de la congregación. Su estado actual es **v0.1 • EN_REDACCION • NO ADOPTADA**.",
          "La adopción formal de la Constitución corresponde al discernimiento y decisión del Pastor Fundador, en armonía con las 107 decisiones históricas institucionales.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 7
  // -------------------------------------------------------------------------
  {
    chapterNumber: 7,
    slug: "capitulo-7-declaracion-de-fe",
    title: "Declaración de Fe de RENACER (REN-DOC-001)",
    subtitle: "20 artículos doctrinales bíblicos que fundamentan la enseñanza y los sacramentos",
    category: "DOCUMENTOS_FUNDACIONALES",
    readTimeMinutes: 18,
    summary: "Exposición de los 20 artículos doctrinales de la Declaración de Fe (REN-DOC-001, v1.0 BORRADOR NO ADOPTADA), que sustentan la identidad teológica y sacramental de RENACER CHURCH.",
    officialSources: [
      { name: "RENACER CHURCH Declaración de Fe", url: "/doctrina", authority: "RENACER CHURCH, INC." },
    ],
    contentSections: [
      {
        sectionId: "c7-s1",
        sectionTitle: "1. Cimiento Teológico y Doctrinal",
        paragraphs: [
          "La Declaración de Fe (REN-DOC-001) contiene los 20 pilares teológicos inalterables que rigen la predicación, la enseñanza bíblica y los sacramentos del bautismo y la Santa Cena.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 8
  // -------------------------------------------------------------------------
  {
    chapterNumber: 8,
    slug: "capitulo-8-exencion-501c3-irs",
    title: "Estatus Fiscal Federal 501(c)(3) y Régimen de Iglesias",
    subtitle: "Requisitos sustantivos, excepción para iglesias (IRC 508(c)(1)(A)), Form 1023, UBIT y Form 990",
    category: "FINANZAS_Y_TRIBUTOS",
    readTimeMinutes: 22,
    summary: "Diferenciación rigurosa entre cumplir sustantivamente IRC § 501(c)(3), la excepción para iglesias de solicitar reconocimiento formal (IRC § 508(c)(1)(A)), solicitud voluntaria vía Formulario 1023 con Schedule A ($600 fee) vs Form 1023-EZ ($275 fee), excepción obligatoria de Formulario 990 (IRC § 6033(a)(3)(A)(i)), UBIT (Formulario 990-T) y prohibición absoluta de intervención en campañas políticas.",
    officialSources: [
      { name: "IRS Publication 1828 — Tax Guide for Churches and Religious Organizations", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf", authority: "IRS" },
      { name: "IRS Form 1023 and Instructions", url: "https://www.irs.gov/forms-pubs/about-form-1023", authority: "IRS" },
      { name: "IRC § 508(c)(1)(A) — Special Rules with Respect to Section 501(c)(3) Organizations", url: "https://www.law.cornell.edu/uscode/text/26/508", authority: "US Code" },
    ],
    contentSections: [
      {
        sectionId: "c8-s1",
        sectionTitle: "1. Diferenciación de Conceptos: Cumplimiento Sustantivo vs. Solicitud Voluntaria",
        paragraphs: [
          "Existe una confusión generalizada sobre la exención de impuestos para iglesias en los Estados Unidos. Es imprescindible distinguir formalmente:",
          "A. **Cumplir los Requisitos de IRC § 501(c)(3)**: Es el estándar sustantivo obligatorio. Toda organización debe operar exclusivamente para fines religiosos, sin beneficio privado (*no private inurement*), sin destinar parte sustancial de actividades a cabildeo (*lobbying*) y con prohibición absoluta de intervenir en campañas electorales.",
          "B. **Excepción Estatutaria para Iglesias (IRC § 508(c)(1)(A))**: Las iglesias, sus convenciones o asociaciones de iglesias **NO están obligadas** por ley federal a presentar una solicitud de reconocimiento formal (Formulario 1023) para ser consideradas entidades exentas bajo la Sección 501(c)(3). Gozan de reconocimiento automático por ministerio de ley si cumplen los requisitos sustantivos.",
          "C. **Solicitud Voluntaria de Determinación del IRS**: Aunque no es legalmente obligatoria, una iglesia puede optar por presentar voluntariamente el Formulario 1023 para obtener una *Determination Letter* oficial del IRS, facilitando la relación con donantes institucionales y fundaciones.",
          "D. **Formulario 1023 y Schedule A**: Si RENACER decide solicitar reconocimiento formal como iglesia, debe presentar el **Formulario 1023 ordinario** a través de Pay.gov, completando obligatoriamente el **Schedule A (Churches)** donde se acreditan las características eclesiales del IRS (credo, ordenación sacerdotal, servicios regulares, escuela dominical, etc.). La tarifa oficial (*User Fee*) vigente es de **$600.00**.",
          "E. **Formulario 1023-EZ y sus Limitaciones**: El Formulario 1023-EZ ($275.00 fee) es una versión simplificada pero cuenta con restricciones severas: no incluye Schedule A específico para iglesias y no es la vía idónea cuando se busca acreditar el estatus formal de iglesia ante donantes mayores.",
          "F. **EIN vs. 501(c)(3)**: El EIN es solo un número de identificación fiscal patronal. No otorga por sí mismo exención tributaria ni sustituye el cumplimiento de 501(c)(3).",
        ],
        tables: {
          headers: ["Concepto Fiscal", "¿Obligatorio?", "¿Cuándo Corresponde?", "Fuente Oficial"],
          rows: [
            ["Cumplir IRC § 501(c)(3)", "SÍ (Sustantivo)", "Desde el primer día de operación", "IRC § 501(c)(3) / IRS Pub 1828"],
            ["Presentar Form 1023 (Reconocimiento)", "NO (Excepción Estatutaria)", "Voluntario si se requiere Carta de Determinación", "IRC § 508(c)(1)(A)"],
            ["Schedule A del Form 1023", "CONDICIONAL", "Obligatorio solo si se radica el Form 1023 para iglesias", "IRS Form 1023 Instructions"],
            ["Form 1023-EZ", "NO RECOMENDADO", "Limitado para entidades pequeñas (no apto para Schedule A)", "IRS Form 1023-EZ Instructions"],
            ["Obtener EIN Patronal", "SÍ", "Antes de abrir cuenta bancaria o contratar personal", "IRS Form SS-4"],
            ["Determination Letter Oficial", "CONDICIONAL", "Al completarse con éxito el Formulario 1023 voluntario", "IRS Determination Notice"],
          ],
        },
      },
      {
        sectionId: "c8-s2",
        sectionTitle: "2. Requisitos Sustantivos y Prohibiciones Absolutas del 501(c)(3)",
        paragraphs: [
          "• **No Private Inurement**: Ninguna parte de los ingresos o activos netos de la iglesia puede beneficiar a personas con control interno (pastores, fideicomisarios, fundadores o familiares) mediante salarios desproporcionados, préstamos irregulares o desvío de fondos.",
          "• **Private Benefit**: La organización debe servir al interés público general y espiritual, no a intereses comerciales o particulares.",
          "• **Prohibición Absoluta de Intervención en Campañas Políticas (Enmienda Johnson)**: Las iglesias tienen terminantemente prohibido respaldar, oponerse o hacer donaciones a candidatos a cargos públicos por elección popular. La violación de esta norma acarrea la revocación inmediata del estatus 501(c)(3) e impuestos de penalidad.",
          "• **Lobbying / Cabildeo Limitado**: Las actividades de influencia en legislación están restringidas y no pueden constituir una parte sustancial de las actividades de la iglesia.",
        ],
      },
      {
        sectionId: "c8-s3",
        sectionTitle: "3. ¿RENACER Tiene que Presentar el Formulario 990?",
        paragraphs: [
          "No se debe afirmar simplemente que 'RENACER nunca presenta declaraciones fiscales'. El régimen tributario anual para iglesias distingue formalmente:",
        ],
        tables: {
          headers: ["Declaración / Formulario Fiscal", "Régimen para Iglesias", "Condición de Exigibilidad", "Fuente Oficial"],
          rows: [
            ["Form 990 / 990-EZ / 990-N", "EXCEPCIÓN PARA IGLESIAS", "Exento de pleno derecho por ley federal. No se requiere radicar anualmente.", "IRC § 6033(a)(3)(A)(i)"],
            ["Form 990-T (UBIT)", "CONDICIONAL", "Obligatorio si la iglesia genera $1,000 o más en Ingresos de Negocios No Relacionados.", "IRC § 511-514 / IRS Pub 598"],
            ["Form 941 / 944 (Payroll Taxes)", "GENERAL", "Obligatorio trimestral o anualmente si la iglesia tiene empleados laicos remunerados.", "IRS Publication 15 (Circular E)"],
            ["Form W-2 y W-3", "GENERAL", "Obligatorio para reportar compensaciones a empleados y pastores antes del 31 de enero.", "Social Security Admin / IRS"],
            ["Form 1099-NEC / 1096", "GENERAL", "Obligatorio si se paga $600 o más a contratistas independientes en el año fiscal.", "IRS 1099 Instructions"],
          ],
        },
      },
      {
        sectionId: "c8-s4",
        sectionTitle: "4. Ingresos de Actividades No Relacionadas (UBIT) y Form 990-T",
        paragraphs: [
          "Es fundamental diferenciar entre **'Tener Ingresos'** y **'Generar Obligaciones Fiscales'**:",
          "• **Ingresos Relacionados con la Misión (Exentos)**: Diezmos, ofrendas, donaciones, venta de Biblias a precio de costo, cursos de formación bíblica y cuotas de retiros espirituales.",
          "• **Ingresos de Negocios No Relacionados (UBIT)**: Actividades comerciales habituales no vinculadas a la causa exenta (por ejemplo, operación de una cafetería comercial abierta al público general con personal remunerado, o venta de publicidad comercial en medios de la iglesia).",
          "• **Efecto Legal**: Generar UBIT no cancela automáticamente la exención 501(c)(3), pero obliga a presentar el **Formulario 990-T** y pagar el impuesto corporativo correspondiente sobre la ganancia neta no relacionada que supere los $1,000.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 9
  // -------------------------------------------------------------------------
  {
    chapterNumber: 9,
    slug: "capitulo-9-cuenta-bancaria-y-segregacion",
    title: "Apertura de Cuenta Bancaria y Segregación de Fondos",
    subtitle: "Resolución corporativa bancaria, firmas mancomunadas, segregación de diezmos y tarjetas",
    category: "FINANZAS_Y_TRIBUTOS",
    readTimeMinutes: 14,
    summary: "Requisitos para abrir la cuenta bancaria de RENACER CHURCH: paquete fiduciario, política de cheques con doble firma, tarjetas de débito y contabilidad separada para fondos restringidos.",
    officialSources: [
      { name: "FDIC Bank Deposit Insurance Guidelines", url: "https://www.fdic.gov/", authority: "FDIC" },
    ],
    contentSections: [
      {
        sectionId: "c9-s1",
        sectionTitle: "1. Paquete Requerido para Apertura Bancaria",
        paragraphs: [
          "Para abrir la cuenta bancaria comercial a nombre de 'RENACER CHURCH, INC.' se debe presentar al banco:",
          "1. Certificate of Incorporation sellado por el Estado de New Jersey.\n2. Carta oficial de Asignación de EIN del IRS (Notice CP-575).\n3. Estatutos Corporativos (Bylaws) certificados por el Secretario.\n4. Resolución Corporativa Bancaria (Modelo 4) autorizando a los firmantes.\n5. Documentos de identidad oficiales de los firmantes designados.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 10
  // -------------------------------------------------------------------------
  {
    chapterNumber: 10,
    slug: "capitulo-10-dinero-y-controles-financieros",
    title: "Finanzas, Presupuesto, Controles Internos y Contratos",
    subtitle: "Política financiera integral, presupuesto anual, conflicto de intereses y matriz de contratos y firmas",
    category: "FINANZAS_Y_TRIBUTOS",
    readTimeMinutes: 24,
    summary: "Manual de control financiero: presupuesto anual, umbrales de autorización (marcados como 'POR DEFINIR / REQUIERE ADOPCIÓN FORMAL'), política completa de conflicto de intereses (Modelo 11), autorización de contratos (Modelo 12) y matriz maestra de firmas.",
    officialSources: [
      { name: "IRS Charities and Nonprofits — Financial Internal Controls", url: "https://www.irs.gov/charities-non-profits", authority: "IRS" },
      { name: "Evangelical Council for Financial Accountability (ECFA) Standards", url: "https://www.ecfa.org/Standards.aspx", authority: "ECFA Standards" },
    ],
    contentSections: [
      {
        sectionId: "c10-s1",
        sectionTitle: "1. Matriz de Contratos y Firmas Corporativas",
        paragraphs: [
          "Para salvaguardar la responsabilidad fiduciaria de RENACER CHURCH, ningún acuerdo vinculante puede suscribirse sin cumplir la siguiente cadena de autorización:",
        ],
        tables: {
          headers: ["Tipo de Documento / Contrato", "Quién Prepara", "Quién Revisa", "Quién Autoriza", "Quién Firma", "Dónde se Archiva"],
          rows: [
            ["Arrendamiento Inmobiliario (Lease)", "Comité / Pastor", "Abogado Inmobiliario", "Consejo de Gobierno / Trustees", "Pastor Presidente y Secretario", "Bóveda 7 (Propiedad y Legal)"],
            ["Contratos con Proveedores Mayores", "Tesorero / Administrador", "Asesor Legal / CPA", "Junta de Fideicomisarios", "Presidente Corporativo", "Bóveda 4 (Financiero / Contratos)"],
            ["Acuerdos de Empleo Pastoral / Laico", "Comité de Compensación", "Abogado Laboral / CPA", "Junta de Fideicomisarios", "Oficial Autorizado en Acta", "Bóveda 6 (Personal y Nómina)"],
            ["Pólizas de Seguro Comercial", "Tesorero", "Broker de Seguros", "Fideicomisarios", "Presidente o Tesorero", "Bóveda 7 (Seguros)"],
            ["Préstamos / Financiamiento Bancario", "Tesorero y Pastor", "Abogado Bancario / CPA", "Asamblea General y Fideicomisarios", "Presidente y Tesorero", "Bóveda 1 y Bóveda 4"],
            ["Contratos de Tecnología / Software", "Líder de Medios", "Administrador", "SUJETO A BYLAWS / RESOLUCIÓN CORPORATIVA", "Oficial Designado", "Bóveda 4 (Operaciones)"],
            ["Acuerdos Ministeriales y Misioneros", "Secretario Pastoral", "Pastor Fundador", "SUJETO A BYLAWS / RESOLUCIÓN CORPORATIVA", "Pastor Presidente", "Bóveda 2 (Eclesial)"],
          ],
        },
      },
      {
        sectionId: "c10-s2",
        sectionTitle: "2. Política Institucional de Conflicto de Intereses",
        paragraphs: [
          "• **Definición**: Existe conflicto cuando un fideicomisario, pastor, oficial o empleado tiene un interés financiero o personal directo o indirecto en una transacción que involucre a RENACER CHURCH.",
          "• **Deber de Declaración Inmediata**: Toda persona interesada debe declarar la existencia y naturaleza de su interés financiero antes de que la Junta inicie deliberaciones.",
          "• **Abstención Obligatoria**: La persona interesada debe retirarse de la reunión durante la discusión y no puede votar sobre la transacción.",
          "• **Registro Detallado en Actas**: Las actas de la reunión deben registrar los nombres de las personas que declararon el interés, el análisis de alternativas de mercado y la votación de los miembros no interesados.",
        ],
        models: [
          {
            id: "mod-11",
            title: "MODELO 11: Política y Declaración Anual de Conflicto de Intereses",
            type: "POLÍTICA / GOBERNANZA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `POLÍTICA INSTITUCIONAL SOBRE CONFLICTO DE INTERESES
Y FORMULARIO DE DECLARACIÓN ANUAL
RENACER CHURCH, INC.

ARTÍCULO I — PROPÓSITO:
Proteger el interés fiduciario y el estatus de exención tributaria 501(c)(3) de RENACER CHURCH, INC. cuando la corporación contemple celebrar transacciones o acuerdos que puedan beneficiar a directivos, pastores, oficiales o familiares.

ARTÍCULO II — DEBER DE DECLARAR Y ABSTENCIÓN:
Toda Persona Interesada debe revelar por escrito cualquier conflicto financiero directo o familiar. Deberá ausentarse durante la votación y no ejercerá influencia indebida sobre los miembros votantes.

FORMULARIO DE DECLARACIÓN ANUAL:
Nombre del Declarante: _____________________________________________
Cargo en RENACER CHURCH: [ ] Fideicomisario  [ ] Pastor  [ ] Oficial  [ ] Empleado

DECLARACIÓN:
[ ] NO poseo ningún interés financiero o relación comercial que represente un conflicto de intereses.
[ ] SÍ declaro el siguiente interés financiero o comercial con una entidad que presta servicios a la iglesia:
    Detalle: __________________________________________________________________________

Firma: __________________________________________ Fecha: __________________________`,
          },
          {
            id: "mod-12",
            title: "MODELO 12: Formulario de Autorización de Contrato",
            type: "FORMULARIO / CONTRATOS",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `FORMULARIO DE SOLICITUD Y AUTORIZACIÓN DE CONTRATOS
RENACER CHURCH, INC.

1. DATOS DEL CONTRATO:
Proveedor / Contraparte: ________________________________________________
Objeto del Contrato: ___________________________________________________
Monto Total Comprometido: $________________ [POR DEFINIR SEGÚN PRESUPUESTO]
Vigencia del Contrato: Desde: ______________ Hasta: ______________

2. REVISIÓN Y DICTAMEN:
¿Cuenta con respaldo presupuestario? [ ] SÍ  [ ] NO
¿Requiere revisión legal previa? [ ] SÍ (Completada por: __________________)  [ ] NO
¿Existe algún conflicto de intereses? [ ] NO  [ ] SÍ (Declarado formalmente)

3. APROBACIÓN FORMAL:
Autorizado por Resolución No.: ______________ Fecha de Sesión: ______________
Firmante Designado: ________________________________ Cargo: _________________

Firma de Autorización: ________________________________ Fecha: ______________`,
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 11
  // -------------------------------------------------------------------------
  {
    chapterNumber: 11,
    slug: "capitulo-11-donaciones-deducciones-irs",
    title: "Donaciones, Registro de Donantes y Cumplimiento de Restricciones",
    subtitle: "Cartas de deducción del IRS (Pub 1771), ofrendas restringidas, donaciones no monetarias y Modelo 13",
    category: "FINANZAS_Y_TRIBUTOS",
    readTimeMinutes: 18,
    summary: "Guía completa para la administración y registro contable de donaciones: requisitos de la IRS Pub 1771 para cartas de fin de año, registro clasificado (General, Restringida, No Monetaria, Quid Pro Quo) y Formulario de Donación Restringida (Modelo 13).",
    officialSources: [
      { name: "IRS Publication 1771 — Charitable Contributions: Substantiation and Disclosure", url: "https://www.irs.gov/pub/irs-pdf/p1771.pdf", authority: "IRS" },
      { name: "IRC § 170(f)(8) — Written Acknowledgment Requirement", url: "https://www.law.cornell.edu/uscode/text/26/170", authority: "US Code" },
    ],
    contentSections: [
      {
        sectionId: "c11-s1",
        sectionTitle: "1. Estructura del Registro Maestro de Donaciones",
        paragraphs: [
          "Para cada donación recibida por RENACER CHURCH se debe registrar rigurosamente:",
          "• **Fecha de recepción**, monto exacto y método de pago (cheque, transferencia, efectivo, tarjeta).",
          "• **Identificación del donante** (nombre completo y dirección postal).",
          "• **Categorización del Fondo**: General (operativo sin restricción), Restringido (fondos misioneros, pro-templo o beneficencia designada), No Monetario (bienes muebles o activos sujetos a Formulario 8283) o Quid Pro Quo (cuando el donante recibe un bien o servicio a cambio).",
          "• **Regla de Bienes o Servicios Recibidos**: La constancia debe certificar expresamente: *'No goods or services were provided in exchange for this contribution other than intangible religious benefits'*, o indicar el valor justo de mercado deducible si hubo bienes entregados.",
        ],
        tables: {
          headers: ["Tipo de Donación", "Requisito Legal IRS", "Procedimiento Contable", "Documento Emitido"],
          rows: [
            ["Donación Monetaria General", "Comprobante bancario o carta", "Acreditar en Fondo Operativo General", "Carta Anual de Donaciones IRS Pub 1771"],
            ["Donación Restringida / Designada", "Aceptación fiduciaria formal", "Subcuenta contable de fondos restringidos", "Recibo con leyenda de restricción (Modelo 13)"],
            ["Donaciones Quid Pro Quo ($75+)", "Divulgación escrita obligatoria", "Separar el valor de la donación del bien recibido", "Written Disclosure Statement obligatorio"],
            ["Donación No Monetaria ($500+)", "Descripción sin valor monetario", "Registrar descripción; no tasar el valor monetario", "Acuse formal y Form 8283 firmado si supera $5,000"],
          ],
        },
        models: [
          {
            id: "mod-13",
            title: "MODELO 13: Formulario de Ofrenda o Donación Designada / Restringida",
            type: "FORMULARIO / DONACIONES",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `FORMULARIO DE OFRENDA O DONACIÓN DESIGNADA / RESTRINGIDA
RENACER CHURCH, INC.

1. INFORMACIÓN DEL DONANTE:
Nombre Completo: _______________________________________________________
Dirección: _____________________________________________________________
Teléfono: _________________________ Correo Electrónico: _________________

2. DETALLE DE LA DONACIÓN:
Monto: $_________________ [Insertar Monto Donado]
Método de Pago: [ ] Cheque No. ______  [ ] Transferencia  [ ] Electrónico  [ ] Efectivo

3. FONDO DESTINATARIO RESTRINGIDO:
[ ] Fondo Pro-Templo / Adquisición de Inmueble
[ ] Fondo Misionero y Evangelístico
[ ] Fondo de Asistencia Social y Ayuda Humanitaria
[ ] Otro Fondo Específico Aprobado: ______________________________________

4. CLÁUSULA FIDUCIARIA INSTITUCIONAL:
RENACER CHURCH, INC. administrará estos fondos exclusivamente para el fin designado. En el evento imprevisto de que el proyecto se cumpla en su totalidad o no pueda ejecutarse, la Junta de Fideicomisarios reasignará los fondos a un propósito eclesiástico afín de acuerdo con sus políticas y la ley 501(c)(3).

Firma del Donante: _________________________________ Fecha: ______________
Recibido por: ______________________________________ Fecha: ______________`,
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 12
  // -------------------------------------------------------------------------
  {
    chapterNumber: 12,
    slug: "capitulo-12-impuestos-y-obligaciones-new-jersey",
    title: "Empleados, Pastor, Ministros y Subsidio de Vivienda",
    subtitle: "Tratamiento tributario ministerial (Pub 517), Housing Allowance (IRC 107), checklist de nómina y voluntarios",
    category: "FINANZAS_Y_TRIBUTOS",
    readTimeMinutes: 20,
    summary: "Guía exhaustiva sobre el régimen fiscal de ministros según IRS Pub 517: SECA vs FICA, Formulario 4361, Housing Allowance (IRC § 107), checklist completo de nómina (Antes, Durante y Al Terminar) y política de voluntarios.",
    officialSources: [
      { name: "IRS Publication 517 — Social Security and Other Information for Clergy", url: "https://www.irs.gov/pub/irs-pdf/p517.pdf", authority: "IRS" },
      { name: "IRC Section 107 — Rental Value of Parsonages / Housing Allowance", url: "https://www.law.cornell.edu/uscode/text/26/107", authority: "US Code" },
      { name: "New Jersey Department of Labor and Workforce Development", url: "https://www.nj.gov/labor/", authority: "State of New Jersey" },
    ],
    contentSections: [
      {
        sectionId: "c12-s1",
        sectionTitle: "1. Tratamiento Fiscal de Ministros de Culto (IRS Pub 517)",
        paragraphs: [
          "El tratamiento fiscal de un ministro ordenado, licenciado o comisionado no es uniforme y depende estrictamente de los hechos y tareas desempeñadas:",
          "• **Para el Impuesto sobre la Renta (Income Tax)**: Si el ministro está sujeto al control de la iglesia como empleado bajo el derecho común (*Common-Law Employee*), recibe un Formulario W-2 (Casilla 1). La iglesia no está obligada a retener Income Tax a menos que se firme un acuerdo voluntario de retención mediante Formulario W-4.",
          "• **Para el Seguro Social y Medicare (SECA)**: Los servicios ministeriales están sujetos por ley al impuesto por cuenta propia (SECA) del 15.3%. Las Casillas 3 y 5 del W-2 del ministro se dejan en blanco. El ministro paga SECA en su Formulario 1040 Schedule SE.",
          "• **Exenciones Especiales**: Un ministro puede solicitar exención de SECA mediante el **Formulario 4361** únicamente por oposición religiosa u objeción de conciencia contra el seguro público (no por razones financieras). Las iglesias pueden elegir no pagar FICA mediante el **Formulario 8274** si se oponen por motivos religiosos.",
        ],
      },
      {
        sectionId: "c12-s2",
        sectionTitle: "2. Vivienda del Ministro / Housing Allowance (IRC § 107)",
        paragraphs: [
          "La Sección 107 del IRC permite excluir del ingreso bruto sujeto a Income Tax la porción designada formalmente como 'Subsidio de Vivienda':",
          "1. **Designación Previa en Acta**: Debe aprobarse formalmente por escrito por la Junta de Fideicomisarios **antes** de efectuarse los pagos. Los montos específicos de compensación están catalogados como **POR DEFINIR SEGÚN COMPENSACIÓN Y DOCUMENTACIÓN APLICABLE**.",
          "2. **Límites de Razonabilidad**: Se limita al menor de: el valor justo de mercado de alquiler amoblado más utilidades (*Fair Rental Value*), los gastos reales de vivienda o el monto aprobado.",
          "3. **Vivienda Proporcionada por la Iglesia (Parsonage)**: Si la iglesia proporciona la casa pastoral, el valor locativo está exento de Income Tax, pero debe incluirse en el cálculo de SECA del pastor.",
        ],
      },
      {
        sectionId: "c12-s3",
        sectionTitle: "3. Checklist de Contratación y Nómina (Antes, Durante y Al Terminar)",
        paragraphs: [
          "Para gestionar la nómina de colaboradores laicos y ministeriales con total apego a la ley:",
        ],
        tables: {
          headers: ["Fase de Contratación", "Checklist de Verificación", "Documento / Trámite Requerido"],
          rows: [
            ["ANTES DE CONTRATAR", "[ ] Verificación de EIN y registro patronal\n[ ] Clasificación correcta (Empleado W-2 vs Contratista 1099-NEC)\n[ ] Formulario W-4 firmado\n[ ] Formulario I-9 con documentos de identidad verificados\n[ ] Póliza de Workers' Compensation activa en New Jersey\n[ ] Autorización formal de compensación en acta", "Expediente de contratación y póliza de seguro"],
            ["DURANTE EL EMPLEO", "[ ] Procesamiento periódico de nómina\n[ ] Retenciones de impuestos estatales (NJ-WT) si aplica\n[ ] Depósito puntual de aportes patronales\n[ ] Emisión de talones de pago detallados\n[ ] Registro de horas para personal no exento\n[ ] Emisión anual del Formulario W-2 antes del 31 de enero", "Libro de nóminas y declaraciones trimestrales"],
            ["AL TERMINAR EL EMPLEO", "[ ] Liquidación y pago final según normativas de NJ\n[ ] Emisión del Formulario W-2 al cierre del ejercicio\n[ ] Devolución de llaves, tarjetas y bienes institucionales\n[ ] Revocación de accesos bancarios y digitales\n[ ] Cierre y archivo confidencial del expediente por 7 años", "Finiquito y acta de entrega de bienes"],
          ],
        },
      },
      {
        sectionId: "c12-s4",
        sectionTitle: "4. Política Administrativa de Voluntarios",
        paragraphs: [
          "Los voluntarios prestan servicio ministerial por convicción espiritual sin remuneración económica:",
          "• **No Son Contratistas**: Una persona no puede ser clasificada como contratista 1099 para encubrir una relación laboral o pagarle estipendios irregulares.",
          "• **Reembolsos Justificados**: Solo pueden recibir reembolsos de gastos directos efectuados en nombre de la iglesia contra entrega de comprobantes originales.",
          "• **Código de Conducta y Protección**: Todo voluntario que trabaje con menores debe completar background checks y firmar el acuerdo de confidencialidad institucional.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 13
  // -------------------------------------------------------------------------
  {
    chapterNumber: 13,
    slug: "capitulo-13-charitable-registration-nj",
    title: "Obligaciones Estatales en New Jersey, ST-5 y Registro Benéfico",
    subtitle: "Matriz definitiva de obligaciones estatales, compras exentas con Form ST-5 y Charities Registration",
    category: "FINANZAS_Y_TRIBUTOS",
    readTimeMinutes: 16,
    summary: "Catálogo exhaustivo de obligaciones ante NJ Treasury: matriz de aplicabilidad oficial (SÍ, NO, CONDICIONAL, POR VERIFICAR), procedimiento para compras exentas de Sales Tax (Form ST-5) y exención de registro benéfico bajo N.J.S.A. 45:17A-40.",
    officialSources: [
      { name: "NJ Division of Taxation — Nonprofit Organizations and Sales Tax Exemption", url: "https://www.nj.gov/treasury/taxation/exemptorg.shtml", authority: "NJ Taxation" },
      { name: "NJ Division of Revenue Annual Reports Portal", url: "https://www.nj.gov/treasury/revenue/annualreports.shtml", authority: "NJ Revenue" },
      { name: "NJ Division of Consumer Affairs — Charities Registration Section", url: "https://www.njconsumeraffairs.gov/charities", authority: "NJ Consumer Affairs" },
    ],
    contentSections: [
      {
        sectionId: "c13-s1",
        sectionTitle: "1. Matriz Definitiva de Obligaciones Estatales en New Jersey",
        paragraphs: [
          "Para brindar total claridad a los oficiales de RENACER CHURCH, cada trámite estatal se clasifica formalmente:",
        ],
        tables: {
          headers: ["Obligación Estatal", "¿Aplica?", "¿Cuándo?", "Acción Requerida", "Fuente Oficial"],
          rows: [
            ["Incorporación Corporativa", "SÍ", "Al fundar la iglesia", "Radicar Certificate of Incorporation ($75 para 15A / $25 para 16)", "NJ Division of Revenue"],
            ["Annual Report de New Jersey", "CONDICIONAL", "Anualmente (si es Title 15A)", "Presentar reporte anual en línea con tarifa de $33.00", "NJ Division of Revenue"],
            ["Registro Empresarial (NJ-REG)", "CONDICIONAL", "Si contrata personal o solicita ST-5", "Presentar Formulario NJ-REG en línea", "NJ Division of Revenue"],
            ["Exención de Sales Tax (ST-5)", "CONDICIONAL", "Para compras de la iglesia", "Presentar Formulario REG-1E con documentos constitutivos", "NJ Division of Taxation"],
            ["Corporation Business Tax (CBT)", "NO", "Exento de pleno derecho", "No se requiere presentación para entidades religiosas", "NJ Division of Taxation"],
            ["Retenciones de Nómina (NJ-WT)", "CONDICIONAL", "Si tiene empleados remunerados", "Retener e ingresar impuestos estatales sobre sueldos", "NJ Division of Taxation"],
            ["Workers' Compensation Insurance", "CONDICIONAL", "Si tiene 1 o más empleados", "Contratar póliza obligatoria con aseguradora autorizada", "NJ Compensation Rating Bureau"],
            ["Charitable Registration Section", "NO (Excepción Religiosa)", "Ofrendas ordinarias de culto", "Exento bajo N.J.S.A. 45:17A-40(a); si realiza fundraising masivo externo: REQUIERE CONFIRMACIÓN SEGÚN ACTIVIDADES", "NJ Division of Consumer Affairs"],
            ["Cambio de Registered Agent", "CONDICIONAL", "Dentro de 30 días del cambio", "Presentar formulario de cambio oficial ante la División de Ingresos", "NJ Division of Revenue"],
          ],
        },
      },
      {
        sectionId: "c13-s2",
        sectionTitle: "2. Compras Exentas de Sales Tax (Formulario ST-5)",
        paragraphs: [
          "• **Uso Exclusivo Institucional**: El certificado ST-5 permite a la iglesia adquirir bienes y servicios para su misión sin abonar el 6.625% de Sales Tax en New Jersey.",
          "• **Prohibición de Uso Personal**: Queda terminantemente prohibido utilizar el certificado ST-5 de la iglesia para compras de consumo personal de pastores, miembros o líderes.",
          "• **Documentación de Compras**: Se debe entregar copia firmada del certificado ST-5 al proveedor y conservar la factura a nombre de 'RENACER CHURCH, INC.' abonada con cheque o tarjeta institucional.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 14
  // -------------------------------------------------------------------------
  {
    chapterNumber: 14,
    slug: "capitulo-14-seguros-y-responsabilidad-civil",
    title: "Seguros y Administración de Riesgos",
    subtitle: "Distinción rigurosa: Requisito legal, exigencia contractual del arrendador y recomendación fiduciaria",
    category: "OPERACIONES_Y_PROTECCION",
    readTimeMinutes: 14,
    summary: "Estructura del portafolio de seguros para RENACER CHURCH: delimitación entre mandatos legales, exigencias de contratos de arrendamiento y coberturas recomendadas de administración de riesgos.",
    officialSources: [
      { name: "NJ Department of Banking and Insurance (DOBI)", url: "https://www.nj.gov/dobi/", authority: "State of New Jersey" },
      { name: "Insurance Information Institute — Houses of Worship Coverage", url: "https://www.iii.org/", authority: "III Reference" },
    ],
    contentSections: [
      {
        sectionId: "c14-s1",
        sectionTitle: "1. Categorización de Pólizas según su Nivel de Exigibilidad",
        paragraphs: [
          "Para evitar confusiones, las coberturas de seguro se clasifican en tres niveles claros:",
        ],
        tables: {
          headers: ["Tipo de Cobertura", "Naturaleza de la Exigencia", "Riesgos Protegidos", "Consideraciones Operativas"],
          rows: [
            ["Workers' Compensation (Compensación Laboral)", "REQUISITO LEGAL ESTATAL", "Accidentes o enfermedades laborales de empleados remunerados.", "Obligatorio por ley de New Jersey si hay personal en nómina."],
            ["Commercial General Liability", "EXIGENCIA CONTRACTUAL (Landlord)", "Reclamos de terceros por caídas, lesiones corporales o daños materiales en el local.", "Generalmente exigido por el propietario del inmueble arrendado antes de entregar llaves."],
            ["Commercial Property (Propiedad Comercial)", "RECOMENDACIÓN DE RIESGO", "Pérdida o daño de instrumentos, equipos de sonido, mobiliario e instalaciones por incendio o agua.", "Recomendado para proteger el patrimonio material de la iglesia."],
            ["Sexual Abuse & Molestation Coverage", "RECOMENDACIÓN DE ALTA PRIORIDAD", "Costos de defensa e indemnizaciones por acusaciones de abuso o negligencia.", "Esencial para congregaciones con ministerio infantil y juvenil. Requiere políticas previas."],
            ["Directors & Officers Liability (D&O)", "RECOMENDACIÓN DE GOBERNANZA", "Protección fiduciaria de pastores y directores frente a reclamos por decisiones administrativas.", "Salvaguarda el patrimonio personal de los Fideicomisarios."],
            ["Pastoral Counseling Liability", "RECOMENDACIÓN PROFESIONAL", "Reclamos derivados de consejería pastoral, espiritual o matrimonial.", "Frecuentemente contratado como endoso a la póliza general."],
            ["Commercial Auto Insurance", "CONDICIONAL / REQUISITO LEGAL", "Responsabilidad y daños por vehículos automotores de la iglesia (vans o autobuses).", "Obligatorio por ley vehicular únicamente si la iglesia es propietaria de vehículos."],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 15
  // -------------------------------------------------------------------------
  {
    chapterNumber: 15,
    slug: "capitulo-15-local-zonificacion-y-permisos",
    title: "Inmueble y Local de RENACER en Paterson, NJ",
    subtitle: "Zoning Board, Certificate of Occupancy, inspección de bomberos y checklist de compra/venta",
    category: "OPERACIONES_Y_PROTECCION",
    readTimeMinutes: 18,
    summary: "Normativas municipales para alquilar, comprar, acondicionar o enajenar inmuebles en Paterson: zonificación, Certificate of Occupancy, Bureau of Fire Prevention, Ley RLUIPA y checklists completos de compra y venta.",
    officialSources: [
      { name: "City of Paterson — Community Development / Zoning", url: "https://www.patersonnj.gov/", authority: "City of Paterson" },
      { name: "City of Paterson — Bureau of Fire Prevention", url: "https://www.patersonnj.gov/", authority: "City of Paterson Fire Dept" },
      { name: "U.S. Department of Justice — RLUIPA Guide for Houses of Worship", url: "https://www.justice.gov/crt/religious-land-use-and-institutionalized-persons-act", authority: "DOJ Civil Rights" },
    ],
    contentSections: [
      {
        sectionId: "c15-s1",
        sectionTitle: "1. Checklist Previo al Arriendo o Apertura del Templo",
        paragraphs: [
          "Antes de firmar un contrato vinculante de arrendamiento comercial en Paterson, se debe verificar:",
          "1. **Zonificación (Zoning)**: Confirmar en el Departamento de Desarrollo Comunitario de Paterson si la zona permite uso de asamblea religiosa (Places of Worship / Assembly) por derecho o si requiere Variance.",
          "2. **Protección Federal RLUIPA**: La Ley de Uso Religioso del Suelo (42 U.S.C. § 2000cc) prohíbe normativas de zonificación discriminatorias contra congregaciones religiosas.",
          "3. **Certificate of Occupancy (CO / CCO)**: Tramitar la inspección estructural para certificar la habitabilidad y el uso como lugar de reunión pública.",
          "4. **Inspección de Bomberos (Fire Prevention Bureau)**: Verificación de extintores vigentes, puertas con barras antipánico, iluminación de emergencia y señalización de salida iluminada.",
          "5. **Determinación de Aforo Máximo**: Placard oficial fijando el número máximo de ocupantes.",
          "6. **Accesibilidad ADA**: Rampas y baños adaptados según el Americans with Disabilities Act.",
        ],
      },
      {
        sectionId: "c15-s2",
        sectionTitle: "2. Procedimiento para Compra o Venta de Inmuebles",
        paragraphs: [
          "La adquisición o enajenación de bienes raíces por parte de RENACER CHURCH exige un estricto protocolo de diligencia debida:",
        ],
        tables: {
          headers: ["Etapa Inmobiliaria", "Checklist de Acciones Requeridas", "Responsable / Asesor"],
          rows: [
            ["ANTES DE COMPRAR", "[ ] Autorización formal de la Junta de Fideicomisarios en acta\n[ ] Due Diligence ambiental y estructural del inmueble\n[ ] Búsqueda y seguro de título de propiedad (Title Search)\n[ ] Verificación de zonificación para uso eclesiástico\n[ ] Inspección de bomberos y obtención de Certificate of Occupancy\n[ ] Aprobación de financiamiento bancario si aplica\n[ ] Asesoría de abogado inmobiliario de New Jersey", "Trustees / Abogado / CPA"],
            ["ANTES DE VENDER", "[ ] Autorización formal de la Asamblea General y Fideicomisarios\n[ ] Avalúo comercial profesional para certificar Fair Market Value\n[ ] Revisión de gravámenes o restricciones de título\n[ ] Redacción del contrato de compraventa con asesoría legal\n[ ] Liquidación de costos de cierre y registro notarial\n[ ] Depósito de fondos remanentes en cuenta institucional para fines 501(c)(3)", "Trustees / Abogado / Tesorero"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 16
  // -------------------------------------------------------------------------
  {
    chapterNumber: 16,
    slug: "capitulo-16-gobierno-de-renacer",
    title: "Gobierno Corporativo y Eclesial de RENACER",
    subtitle: "Pastor Fundador, Consejo de Gobierno, Oficiales, Asambleas, Quórums, Actas y Modelos 15, 16 y 17",
    category: "GOBIERNO_Y_ADMINISTRACION",
    readTimeMinutes: 24,
    summary: "Guía operativa completa para el gobierno de RENACER CHURCH: responsabilidades del Pastor Fundador, Consejo de Gobierno y Oficiales, convocatorias, agenda, quórum, votaciones ordinarias y extraordinarias, actas, archivo fiduciario, reuniones congregacionales y Modelos 15, 16 y 17.",
    officialSources: [
      { name: "RENACER CHURCH Registro Histórico de Decisiones", url: "/decisiones", authority: "RENACER CHURCH, INC." },
      { name: "New Jersey Nonprofit Corporation Act (Title 15A:6)", url: "https://lis.njleg.state.nj.us/", authority: "NJ Legislature" },
    ],
    contentSections: [
      {
        sectionId: "c16-s1",
        sectionTitle: "1. Órganos Rectores y Distribución de Autoridad",
        paragraphs: [
          "El modelo de gobierno de RENACER CHURCH articula equilibradamente el liderazgo espiritual pastoral y la administración comunitaria civil basándose estrictamente en las 107 decisiones históricas adoptadas:",
          "• **Pastor Fundador**: Autoridad espiritual y doctrinal principal, con facultades reservadas de discernimiento teológico e iniciativa en materias de fe y adopción constitucional.",
          "• **Consejo de Gobierno / Ancianos**: Órgano colegiado de supervisión fiduciaria, administración de bienes, planificación estratégica y acompañamiento pastoral.",
          "• **Oficiales Corporativos (Presidente, Secretario, Tesorero)**: Responsables de la ejecución administrativa cotidiana, el levantamiento de actas, la custodia del sello corporativo y el manejo de cuentas bancarias.",
          "• **Facultades No Definidas Formalmente**: Toda atribución administrativa o reglamentaria no contemplada explícitamente en las 107 decisiones se encuentra clasificada como REQUIERE ADOPCIÓN FORMAL.",
        ],
        callouts: [
          {
            type: "IMPORTANT",
            title: "PRESERVACIÓN DE LAS 107 DECISIONES FUNDACIONALES",
            text: "Esta guía operativa respeta al 100% las 107 determinaciones institucionales registradas en el Sistema Central. No se han creado facultades unilaterales ficticias ni alterado la supremacía de los acuerdos fundacionales.",
          },
        ],
      },
      {
        sectionId: "c16-s2",
        sectionTitle: "2. Funcionamiento Operativo del Consejo de Gobierno",
        paragraphs: [
          "Para sesionar válidamente, el Consejo de Gobierno sigue el siguiente protocolo procedimental:",
          "1. Convocatoria: Notificada por el Secretario o Presidente con al menos 7 días de anticipación para sesiones ordinarias y 48 horas para sesiones de urgencia.",
          "2. Agenda Previa: Envío del orden del día junto con informes financieros y resoluciones propuestas.",
          "3. Verificación de Quórum: Mayoría absoluta de los miembros activos del Consejo presentes en persona o por videoconferencia autorizada.",
          "4. Deliberación y Conflictos de Interés: Declaración obligatoria y abstención inmediata de cualquier miembro con interés personal o financiero.",
          "5. Votaciones y Resoluciones: Adopción de acuerdos por mayoría de votos; las materias estructurales se sujetan a quórums calificados.",
          "6. Acta y Archivo: Redacción de acta formal firmada por Presidente y Secretario, archivada de por vida en la Bóveda Corporativa.",
        ],
        models: [
          {
            id: "mod-15",
            title: "MODELO 15: Agenda de Reunión del Consejo de Gobierno",
            type: "AGENDA / GOBIERNO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `AGENDA DE SESIÓN ORDINARIA DEL CONSEJO DE GOBIERNO
RENACER CHURCH, INC.

Fecha: [Insertar Fecha]
Hora: [Insertar Hora]
Modalidad: [ ] Presencial en Sede Paterson  [ ] Videoconferencia Oficial

ORDEN DEL DÍA:
1. Devocional, Lectura Bíblica y Oración de Apertura.
2. Llamado a Lista y Verificación de Quórum Reglamentario.
3. Lectura y Aprobación del Acta de la Sesión Anterior.
4. Declaración de Conflictos de Intereses respecto a los Puntos de la Agenda.
5. Informe Pastoral y Estado Espiritual de la Congregación.
6. Informe Financiero del Tesorero (Conciliaciones y Ejecución Presupuestaria).
7. Asuntos en Deliberación y Proyectos de Resolución:
   a) [Tema Administrativo 1 — REQUIERE ADOPCIÓN FORMAL]
   b) [Tema de Operaciones / Local 2]
8. Asuntos Varios de Liderazgo.
9. Oración de Cierre y Conclusión de la Sesión.

Convocado por: _________________________________ Secretario / Presidente`,
          },
          {
            id: "mod-16",
            title: "MODELO 16: Acta de Reunión del Consejo de Gobierno (Minutes)",
            type: "ACTA / GOBIERNO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `ACTA DE SESIÓN DEL CONSEJO DE GOBIERNO
RENACER CHURCH, INC.
Acta No.: [Año]-[Número]

En la ciudad de Paterson, New Jersey, siendo las [Hora] del día [Fecha], se reunió el Consejo de Gobierno de RENACER CHURCH, INC.

ASISTENTES:
- [Nombre Completo], Pastor Presidente
- [Nombre Completo], Secretario
- [Nombre Completo], Tesorero
- [Nombre Completo], Vocal / Anciano

VERIFICACIÓN DE QUÓRUM:
Se certifica la presencia de _____ miembros de un total de _____, cumpliéndose el quórum reglamentario para deliberar y votar válidamente.

DELIBERACIONES Y ACUERDOS ADOPTADOS:
1. Se aprobó por unanimidad el acta de la sesión precedente fechada el [Fecha Anterior].
2. DECLARACIÓN DE CONFLICTOS: Ningún miembro declaró conflictos de interés [o registrar declaración y abstención si existiere].
3. INFORME DE TESORERÍA: El Tesorero presentó el balance del mes con ingresos por $______ y egresos por $______. Aprobado.
4. RESOLUCIÓN ADOPTADA [Número]:
   Se resuelve por mayoría/unanimidad: [Insertar texto detallado del acuerdo].

No habiendo más asuntos que tratar, se levantó la sesión a las [Hora de Cierre].

Firma: __________________________________ Secretario
Visto Bueno: _____________________________ Pastor Presidente`,
          },
        ],
      },
      {
        sectionId: "c16-s3",
        sectionTitle: "3. Reuniones de la Congregación (Asamblea General)",
        paragraphs: [
          "La Asamblea General reúne al cuerpo de Miembros Activos para la rendición de cuentas anual y ratificación de asuntos de alta trascendencia comunitaria:",
          "• **Convocatoria**: Anuncio público en culto y por medios escritos con al menos 14 días de antelación.",
          "• **Padrón de Votantes**: Solo participan con voz y voto los Miembros Activos mayores de edad registrados en el Libro Oficial de Padrón.",
          "• **Quórum y Mayorías**: Quórum ordinario según estatutos; mayoría simple para asuntos regulares y mayoría calificada (dos tercios) para transacciones inmobiliarias mayores o enmiendas constitucionales.",
          "• **Transparencia**: Conteo público de votos y levantamiento de acta circunstanciada archivada en secretaría.",
        ],
        models: [
          {
            id: "mod-17",
            title: "MODELO 17: Acta de Reunión Congregacional (General Assembly)",
            type: "ACTA / ASAMBLEA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `ACTA DE LA ASAMBLEA GENERAL CONGREGACIONAL
RENACER CHURCH, INC.
Asamblea [ ] Ordinaria Anual  [ ] Extraordinaria

Fecha: [Insertar Fecha] | Hora de Inicio: [Hora]
Lugar: [Templo / Salón Principal en Paterson, NJ]

1. INSTALACIÓN Y VERIFICACIÓN:
Preside: Pastor Presidente [Nombre Completo]
Secretaría de Actas: [Nombre Completo]
Total de Miembros Activos Habilitados en Padrón: _____
Total de Miembros Activos Presentes: _____ | ¿Existe Quórum Estatutario? [ ] SÍ  [ ] NO

2. DESARROLLO DE LA AGENDA:
a) Apertura devocional y presentación del informe anual de ministerios.
b) Presentación del Informe Financiero Anual por el Tesorero.
c) Deliberación y votación de los puntos sometidos a la Asamblea:
   - Propuesta: [Describir asunto sometido a votación]
   - Votos a Favor: _____ | Votos en Contra: _____ | Abstenciones: _____
   - Resultado: [ ] APROBADO  [ ] RECHAZADO

3. CLAUSURA:
Siendo las [Hora], se declara formalmente concluida la Asamblea General.

Firma: __________________________________ Secretario
Certifico: _______________________________ Pastor Presidente`,
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 17
  // -------------------------------------------------------------------------
  {
    chapterNumber: 17,
    slug: "capitulo-17-membresia-eclesial",
    title: "Membresía Eclesial, Bautismos, Matrimonios y Credenciales",
    subtitle: "Ciclo de membresía (A a L), padrón eclesial, sacramentos, licencias ministeriales y disciplina",
    category: "GOBIERNO_Y_ADMINISTRACION",
    readTimeMinutes: 26,
    summary: "Procedimiento operativo integral del ciclo de membresía (etapas A a L), distinción taxonómica eclesiástica, requisitos administrativos para bautismos en agua (Modelos 19 y 20), matrimonios (Modelo 21), otorgamiento de credenciales ministeriales (Modelos 22, 23 y 24) y protocolo de disciplina pastoral confidencial.",
    officialSources: [
      { name: "RENACER CHURCH Manual de Membresía", url: "/membresia", authority: "RENACER CHURCH, INC." },
      { name: "State of New Jersey Marriage License Guidelines", url: "https://www.nj.gov/health/vital/registration-vital/marriage_licenses.shtml", authority: "NJ Dept of Health" },
    ],
    contentSections: [
      {
        sectionId: "c17-s1",
        sectionTitle: "1. Ciclo Operativo de Membresía (Etapas A a L)",
        paragraphs: [
          "La integración, permanencia y desvinculación en el cuerpo congregacional se rige por un ciclo transparente en 12 fases:",
          "• **A. Persona Interesada**: Asistente nuevo que manifiesta interés en conocer la iglesia.",
          "• **B. Solicitud de Membresía**: Diligenciamiento formal del formulario oficial (Modelo 18).",
          "• **C. Orientación Eclesiástica**: Participación en el curso de fundamentos bíblicos y vida comunitaria.",
          "• **D. Confirmación de Requisitos**: Verificación pastoral de fe en Jesucristo, bautismo en agua y aceptación de la Declaración de Fe.",
          "• **E. Incorporación Pública**: Bienvenida y oración comunitaria durante un servicio dominical.",
          "• **F. Registro en Padrón**: Asignación de número correlativo en el Libro Oficial de Miembros Activos.",
          "• **G. Participación y Servicio**: Ejercicio de dones espirituales, asistencia regular y sostenimiento voluntario.",
          "• **H. Transferencia**: Emisión de carta de recomendación pastoral hacia otra congregación de sana doctrina.",
          "• **I. Inactividad Pastoral**: Clasificación tras inasistencia prolongada no justificada para seguimiento pastoral.",
          "• **J. Salida Voluntaria**: Notificación formal por escrito del miembro retirándose en paz.",
          "• **K. Fallecimiento**: Cierre respetuoso del expediente con registro de fecha de partida con el Señor.",
          "• **L. Restauración Espiritual**: Proceso de reconciliación y reincorporación activa tras disciplina pastoral.",
        ],
        tables: {
          headers: ["Categoría Eclesiástica", "Definición", "Derechos Eclesiales", "Deberes / Compromisos"],
          rows: [
            ["VISITANTE", "Persona que asiste por primera vez o de forma ocasional.", "Recepción fraternal, consejería básica.", "Respeto a las normas del culto."],
            ["ASISTENTE REGULAR", "Creyente que asiste periódicamente sin membresía formal.", "Participación en cultos y actividades abiertas.", "Testimonio cristiano en la congregación."],
            ["MIEMBRO ACTIVO", "Creyente bautizado registrado formalmente en el Padrón.", "Voz y voto en Asambleas, acceso al servicio.", "Sostenimiento, comunión, fidelidad doctrinal."],
            ["LÍDER DE ÁREA", "Miembro activo probado a cargo de un ministerio de servicio.", "Dirección de equipos, participación en reuniones.", "Ejemplo moral, capacitación continua."],
            ["MINISTRO CON CREDENCIAL", "Servidor ordenado o comisionado con licencia pastoral.", "Administración de sacramentos, representación eclesial.", "Sujeción pastoral y estándares de 1 Tim 3."],
          ],
        },
        models: [
          {
            id: "mod-18",
            title: "MODELO 18: Solicitud de Membresía de RENACER CHURCH",
            type: "FORMULARIO / MEMBRESÍA",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `SOLICITUD OFICIAL DE MEMBRESÍA
RENACER CHURCH, INC.
Paterson, New Jersey

1. DATOS PERSONALES:
Nombre Completo: _______________________________________________________
Fecha de Nacimiento: [DD/MM/AAAA] | Estado Civil: _________________________
Dirección Residencial: _________________________________________________
Ciudad: ________________________ Estado: NJ  Código Postal: ____________
Teléfono Principal: ____________________ Correo: _______________________
Contacto de Emergencia: ________________________ Teléfono: _____________

2. ANTECEDENTES CRISTIANOS:
¿Ha recibido a Jesucristo como su Salvador personal? [ ] SÍ  [ ] NO
¿Ha sido bautizado(a) en agua por inmersión? [ ] SÍ  [ ] NO
Fecha aproximada de Bautismo: ___________ Lugar/Iglesia: __________________
Congregación anterior (si aplica): ________________ Ciudad: ______________
Motivo de traslado: ____________________________________________________

3. DECLARACIÓN DE COMPROMISO Y FE:
Declaro voluntariamente que creo en las Sagradas Escrituras, acepto la Declaración de Fe (REN-DOC-001) de RENACER CHURCH, y me comprometo a vivir en comunión cristiana, servir con mis dones y sujetarme al liderazgo pastoral en amor.

Firma del Solicitante: ______________________________ Fecha: ____________
Visto Bueno Pastoral: _______________________________ Fecha: ____________`,
          },
        ],
      },
      {
        sectionId: "c17-s2",
        sectionTitle: "2. Procedimiento Administrativo para Bautismos en Agua",
        paragraphs: [
          "El bautismo en agua por inmersión es un sacramento fundamental. Su gestión administrativa comprende:",
          "1. Solicitud del candidato y entrevista con el pastor para verificar el testimonio de conversión.",
          "2. Asistencia al curso doctrinal preparatorio de bautismo.",
          "3. Autorización pastoral y fijación de fecha en el calendario eclesiástico.",
          "4. Celebración del bautismo en agua en el nombre del Padre, del Hijo y del Espíritu Santo.",
          "5. Asentamiento en el Libro Sacramental de Bautismos con firmas del ministro y testigos.",
          "6. Emisión del Certificado Oficial de Bautismo y actualización en el Padrón de Miembros.",
        ],
        models: [
          {
            id: "mod-19",
            title: "MODELO 19: Registro de Bautismo Sacramental",
            type: "REGISTRO / SACRAMENTO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `LIBRO OFICIAL DE REGISTRO DE BAUTISMOS EN AGUA
RENACER CHURCH, INC.
Asiento Sacramental No.: BAUT-[Año]-[Número]

Nombre del Bautizado(a): ________________________________________________
Fecha de Nacimiento: ___________________ Domicilio: _____________________
Fecha del Bautismo: ____________________ Hora: __________________________
Lugar de la Ceremonia: _________________________________________________

MINISTRO OFICIANTE:
Nombre del Ministro: ___________________________________________________
Credencial No.: ________________________ Cargo: ________________________

TESTIGOS DE LA CEREMONIA:
1. Nombre: _______________________________ Firma: ______________________
2. Nombre: _______________________________ Firma: ______________________

CERTIFICACIÓN ECLESIAL:
Certifico que en la fecha indicada fue bautizado(a) en agua por inmersión en obediencia al mandato de nuestro Señor Jesucristo.

Firma del Ministro Oficiante: __________________________________________
Sello Pastoral y de Secretaría: [SELLO]`,
          },
          {
            id: "mod-20",
            title: "MODELO 20: Certificado de Bautismo en Agua",
            type: "CERTIFICADO / SACRAMENTO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `CERTIFICADO DE BAUTISMO EN AGUA
RENACER CHURCH, INC.
Paterson, New Jersey

"Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo" (Mateo 28:19)

SE CERTIFICA QUE:
__________________________________________________________________________
ha dado público testimonio de su fe en nuestro Señor y Salvador Jesucristo, habiendo sido bautizado(a) en agua por inmersión el día [Día] de [Mes] del año [Año].

Ministro Oficiante: ___________________________________ [Firma]
Pastor Presidente: ___________________________________ [Firma]
Registro Sacramental Folio: BAUT-[Año]-[Número]`,
          },
        ],
      },
      {
        sectionId: "c17-s3",
        sectionTitle: "3. Procedimiento Administrativo para Matrimonios",
        paragraphs: [
          "La celebración del matrimonio cristiano requiere una estricta separación entre requisitos civiles del Estado de New Jersey y los principios eclesiásticos de RENACER:",
          "• **Requisitos Legales del Estado de New Jersey**: La pareja debe obtener válidamente la Marriage License emitida por el Registro Civil municipal (Vital Statistics) de New Jersey dentro de los plazos legales, presentarla al ministro antes de la ceremonia y firmarla conjuntamente con los dos testigos inmediatamente tras los votos nupciales para su devolución al registrador civil dentro de 5 días hábiles.",
          "• **Requisitos Eclesiales de RENACER**: Ambos contrayentes deben profesar la fe cristiana, completar las sesiones de consejería prematrimonial pastoral y contar con la aprobación del Pastor Oficiante.",
        ],
        models: [
          {
            id: "mod-21",
            title: "MODELO 21: Checklist Administrativo y Pastoral de Matrimonio",
            type: "CHECKLIST / MATRIMONIO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `CHECKLIST ADMINISTRATIVO Y PASTORAL DE MATRIMONIO
RENACER CHURCH, INC.

DATOS DE LOS CONTRAYENTES:
Nombre del Novio: _____________________________ Teléfono: ______________
Nombre de la Novia: ____________________________ Teléfono: ______________
Fecha Prevista de Boda: ________________________ Hora: __________________

CHECKLIST DE DOCUMENTACIÓN CIVIL Y ECLESIAL:
[ ] 1. Solicitud matrimonial presentada con al menos 3 meses de anticipación.
[ ] 2. Entrevista pastoral inicial completada satisfactoriamente.
[ ] 3. Ciclo de consejería prematrimonial concluido (Mínimo 4 sesiones).
[ ] 4. Marriage License oficial de New Jersey verificada (Vigente y sin enmiendas).
[ ] 5. Identificación oficial con fotografía de ambos contrayentes y testigos.
[ ] 6. Acta de compromiso y uso de instalaciones firmada.
[ ] 7. Designación del Ministro Oficiante autorizado.
[ ] 8. Firma inmediata de las 4 copias de la licencia matrimonial tras la boda.
[ ] 9. Remisión de la copia estatal al Registro Civil municipal dentro de 5 días.
[ ] 10. Entrega del Certificado Conmemorativo y archivo de copia en Bóveda 2.

Ministro Responsable: _______________________________ Firma: ____________`,
          },
        ],
      },
      {
        sectionId: "c17-s4",
        sectionTitle: "4. Credenciales Ministeriales y Licencias de Servicio",
        paragraphs: [
          "Las credenciales ministeriales en RENACER CHURCH acreditan la formación, carácter moral y autoridad delegada de siervos de Dios en 10 etapas rigurosas:",
          "1. Postulación del candidato respaldado por su pastor de área.",
          "2. Formación teológica y bíblica formal en el Seminario de la iglesia.",
          "3. Evaluación espiritual, familiar y testimonio ético intachable.",
          "4. Verificación de cumplimiento de requisitos bíblicos de 1 Timoteo 3 y Tito 1.",
          "5. Recomendación unánime del cuerpo pastoral.",
          "6. Aprobación formal por el Pastor Fundador / Consejo de Gobierno.",
          "7. Emisión de la Credencial y Certificado Ministerial con número correlativo.",
          "8. Asentamiento en el Libro Oficial de Registro de Credenciales.",
          "9. Renovación anual sujeta a permanencia en el ministerio y conducta irreprochable.",
          "10. Suspensión o revocación en caso de transgresión ética, o proceso de restauración.",
        ],
        models: [
          {
            id: "mod-22",
            title: "MODELO 22: Solicitud de Credencial Ministerial",
            type: "SOLICITUD / MINISTERIAL",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `SOLICITUD OFICIAL DE CREDENCIAL MINISTERIAL
RENACER CHURCH, INC.

1. INFORMACIÓN DEL CANDIDATO:
Nombre Completo: _______________________________________________________
Dirección: _____________________________________________________________
Teléfono: _________________________ Correo: ____________________________
Fecha de Membresía en RENACER: _______________ Ministerio Actual: ________

2. FORMACIÓN ACADÉMICA Y BÍBLICA:
Estudios en Seminario / Instituto Bíblico: ________________________________
Títulos o Certificados Obtenidos: _______________________________________

3. LLAMADO Y TESTIMONIO MINISTERIAL:
Área de Servicio Ministerial al que es postulado:
[ ] Ministro Ordenado  [ ] Ministro Licenciado  [ ] Obrero / Diácono Comisionado
Descripción breve del llamamiento: ______________________________________

Firma del Candidato: ________________________________ Fecha: ____________
Recomendación Pastoral: _____________________________ Fecha: ____________`,
          },
          {
            id: "mod-23",
            title: "MODELO 23: Libro de Registro de Credenciales Ministeriales",
            type: "REGISTRO / MINISTERIAL",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `LIBRO OFICIAL DE REGISTRO DE CREDENCIALES MINISTERIALES
RENACER CHURCH, INC.

| No. Credencial | Nombre del Ministro | Nivel Ministerial | Fecha Emisión | Vencimiento | Estado | Firma Ministro |
|----------------|---------------------|-------------------|---------------|-------------|--------|----------------|
| CRED-[Año]-01  | [Nombre Completo]   | Ministro Ordenado | [Fecha]       | Anual       | ACTIVA | ______________ |
| CRED-[Año]-02  | [Nombre Completo]   | Licenciado        | [Fecha]       | Anual       | ACTIVA | ______________ |

Certifico la vigencia de este libro: _________________________ Secretario Corporativo`,
          },
          {
            id: "mod-24",
            title: "MODELO 24: Certificado y Credencial Ministerial Oficial",
            type: "CERTIFICADO / CREDENCIAL",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `CREDENCIAL MINISTERIAL OFICIAL
RENACER CHURCH, INC.
Paterson, New Jersey

POR CUANTO:
__________________________________________________________________________
ha demostrado vocación divina, solvencia moral, preparación bíblica y fidelidad a la sana doctrina, la Junta Directiva y Liderazgo Pastoral de RENACER CHURCH le confieren la presente:

CREDENCIAL DE: [ MINISTRO ORDENADO / LICENCIADO ]
con todas las prerrogativas y deberes espirituales para predicar el Evangelio, ministrar los sacramentos y edificar el cuerpo de Cristo.

No. de Registro: CRED-[Año]-[Número] | Fecha de Emisión: [Fecha]
Pastor Presidente: ___________________________________ [Firma]
Secretario Corporativo: ______________________________ [Firma]`,
          },
        ],
      },
      {
        sectionId: "c17-s5",
        sectionTitle: "5. Disciplina Eclesiástica y Restauración Pastoral",
        paragraphs: [
          "El propósito de la disciplina eclesiástica es formativo, restaurador y de protección a la comunidad de fe, fundado en Mateo 18:15-17 y Gálatas 6:1:",
          "1. Recepción y confidencialidad estricta del asunto por el Pastorado.",
          "2. Evaluación preliminar y diálogo pastoral privado con la persona.",
          "3. Medidas temporales preventivas de suspensión de servicio si fuere necesario.",
          "4. Proceso de consejería y discipulado para la sanidad espiritual.",
          "5. Documentación confidencial bajo custodia exclusiva del Pastor Fundador.",
          "6. Acompañamiento fraterno hacia el arrepentimiento y la reconciliación comunitaria.",
          "7. Cierre formal del proceso con acta pastoral de restauración plena.",
        ],
        callouts: [
          {
            type: "WARNING",
            title: "DISTINCIÓN TAJANTE: DISCIPLINA ECLESIAL VS REPORTE LEGAL",
            text: "Queda terminantemente prohibido utilizar los procesos de disciplina eclesiástica o consejería espiritual para ocultar, demorar o entorpecer la obligación legal ineludible de reportar delitos o sospechas de abuso a las autoridades civiles y a la línea 1-877-NJ-ABUSE. El reporte civil prima sobre cualquier proceso interno.",
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 18
  // -------------------------------------------------------------------------
  {
    chapterNumber: 18,
    slug: "capitulo-18-ministerios-y-liderazgo",
    title: "Liderazgo Servidor, Voluntariado y Transiciones",
    subtitle: "Proceso de incorporación de líderes, deberes ministeriales y protocolo formal de desvinculación",
    category: "GOBIERNO_Y_ADMINISTRACION",
    readTimeMinutes: 18,
    summary: "Guía completa para la incorporación de siervos y líderes ministeriales (checklist de 11 pasos) y protocolo estricto de transición y salida de liderazgo (devolución de llaves, activos, revocación de accesos digitales y actas de entrega).",
    officialSources: [
      { name: "RENACER CHURCH Documentación Ministerial", url: "/ministerios", authority: "RENACER CHURCH, INC." },
    ],
    contentSections: [
      {
        sectionId: "c18-s1",
        sectionTitle: "1. Procedimiento de Incorporación de un Nuevo Líder o Voluntario",
        paragraphs: [
          "Para designar a un miembro en funciones de liderazgo o servicio activo en ministerios:",
        ],
        checklists: [
          { id: "lead-1", label: "1. Solicitud formal de servicio ministerial diligenciada.", details: "Registro del deseo de servicio y área ministerial de interés." },
          { id: "lead-2", label: "2. Entrevista pastoral y evaluación de testimonio público.", details: "Comprobación de madurez cristiana y vida familiar ejemplar." },
          { id: "lead-3", label: "3. Verificación de membresía activa en RENACER CHURCH.", details: "Mínimo de permanencia y fidelidad congregacional." },
          { id: "lead-4", label: "4. Verificación de referencias eclesiásticas previas.", details: "Contacto con liderazgo anterior si procede de otra congregación." },
          { id: "lead-5", label: "5. Background Check oficial para ministerios de menores o finanzas.", details: "Revisión obligatoria de antecedentes penales sin excepción." },
          { id: "lead-6", label: "6. Aprobación del taller de capacitación ministerial interna.", details: "Alineamiento con la visión y valores de RENACER." },
          { id: "lead-7", label: "7. Certificación en la Política de Protección de Niños.", details: "Taller sobre regla de dos adultos y reporte de abusos." },
          { id: "lead-8", label: "8. Aprobación formal [REQUIERE ADOPCIÓN FORMAL de autoridad].", details: "Dictamen del Pastor o Consejo de Gobierno según el área." },
          { id: "lead-9", label: "9. Asignación específica de responsabilidades por escrito.", details: "Definición clara de horarios, funciones y equipo de trabajo." },
          { id: "lead-10", label: "10. Registro oficial en la base de datos de liderazgo.", details: "Actualización en el libro de líderes de secretaría." },
          { id: "lead-11", label: "11. Evaluación y acompañamiento pastoral continuo.", details: "Revisión periódica de desempeño servidor y bienestar familiar." },
        ],
      },
      {
        sectionId: "c18-s2",
        sectionTitle: "2. Procedimiento de Transición y Salida de Liderazgo",
        paragraphs: [
          "Cuando un líder cesa en sus funciones por renuncia voluntaria, traslado, término de período o decisión pastoral, se debe ejecutar inmediatamente el siguiente control:",
        ],
        tables: {
          headers: ["Paso de Desvinculación", "Acción Obligatoria", "Responsable de Custodia"],
          rows: [
            ["1. Entrega de Llaves", "Devolución inmediata de llaves físicas, tarjetas y códigos de alarma.", "Tesorero / Operaciones"],
            ["2. Devolución de Equipos", "Entrega de laptops, consolas, micrófonos, instrumentos o herramientas institucionales.", "Administrador de Inventario"],
            ["3. Restitución de Documentos", "Entrega de libros de actas, expedientes de miembros o archivos contables.", "Secretario Corporativo"],
            ["4. Transferencia Digital", "Traspaso de cuentas de correo @renacer, carpetas en la nube y archivos digitales.", "Líder de Sistemas / Pastor"],
            ["5. Revocación de Accesos", "Eliminación inmediata de permisos de administrador en redes sociales y software contable.", "Secretaría / Tecnología"],
            ["6. Cambio de Contraseñas", "Modificación preventiva de contraseñas maestras de sistemas institucionales.", "Equipo de Tecnología"],
            ["7. Actualización de Padrón", "Baja formal en el registro de oficiales o líderes ministeriales.", "Secretaría Eclesial"],
            ["8. Comunicación Fraterna", "Información ordenada y respetuosa a la congregación o equipo ministerial.", "Pastor Presidente"],
            ["9. Acta de Cierre", "Levantamiento de constancia formal de entrega y finiquito administrativo.", "Secretario / Fideicomisarios"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 19
  // -------------------------------------------------------------------------
  {
    chapterNumber: 19,
    slug: "capitulo-19-proteccion-de-ninos-y-vulnerables",
    title: "Protección Infantil, Emergencias y Privacidad",
    subtitle: "Seguridad infantil 'Renacer Kids', gestión de emergencias/911, Modelo 14 y Modelo 25",
    category: "OPERACIONES_Y_PROTECCION",
    readTimeMinutes: 22,
    summary: "Protocolo integral de seguridad y protección: política de protección de menores (DCF 1-877-NJ-ABUSE y regla de dos adultos), checklist de actividades infantiles, protocolo general de emergencias, Reporte Oficial de Incidentes (Modelo 25) y Política de Privacidad de Datos (Modelo 14).",
    officialSources: [
      { name: "NJ Department of Children and Families (DCF) — Child Abuse Hotline", url: "https://www.nj.gov/dcf/reporting/", authority: "State of New Jersey" },
      { name: "NJ State Police Volunteer Background Checks Portal", url: "https://www.njsp.org/criminal-history-records/", authority: "NJ State Police" },
    ],
    contentSections: [
      {
        sectionId: "c19-s1",
        sectionTitle: "1. Jerarquía de Seguridad: Obligación Legal vs. Política Interna",
        paragraphs: [
          "Proteger a los menores en el ministerio infantil ('Renacer Kids') exige una clara delimitación entre normas civiles y políticas de gobierno eclesial:",
        ],
        tables: {
          headers: ["Nivel Normativo", "Materia", "Detalle del Protocolo"],
          rows: [
            ["OBLIGACIÓN LEGAL CIVIL (NJ)", "Reporte Obligatorio de Abuso", "En New Jersey, **toda persona** con causa razonable para sospechar abuso debe reportarlo inmediatamente a la línea 1-877-NJ-ABUSE (N.J.S.A. 9:6-8.10)."],
            ["POLÍTICA INSTITUCIONAL", "Regla de los Dos Adultos", "Prohibido que un adulto permanezca a solas con un menor en espacios cerrados; siempre se requieren dos adultos presentes o visión directa ininterrumpida."],
            ["POLÍTICA INSTITUCIONAL", "Verificación de Antecedentes", "Revisión previa obligatoria de antecedentes criminales (Background Checks) para todo maestro o voluntario con menores."],
            ["POLÍTICA INSTITUCIONAL", "Supervisión de Baños y Transporte", "Los menores deben ser acompañados por dos líderes; en transporte institucional se exige autorización escrita previa."],
            ["POLÍTICA INSTITUCIONAL", "Comunicación Digital y Redes", "Prohibida la comunicación privada uno a uno con menores por redes sociales sin copia a sus padres o tutores."],
            ["BUENA PRÁCTICA", "Preservación de Evidencia", "Protocolo formal de registro escrito de incidentes y custodia confidencial de reportes."],
          ],
        },
      },
      {
        sectionId: "c19-s2",
        sectionTitle: "2. Checklist de Actividades Infantiles (Antes, Durante y Después)",
        paragraphs: [
          "En cada servicio o evento con participación de niños se debe ejecutar:",
          "• **Antes del Servicio**: Verificar que todos los maestros en turno tengan background check vigente; inspeccionar y desinfectar salones y juguetes; habilitar el sistema de check-in con emisión de etiquetas numeradas con código de seguridad.",
          "• **Durante el Servicio**: Control de acceso a pasillos de niños con ujier asignado; dos adultos presentes permanentemente en cada salón; atención de alergias alimentarias registradas; no permitir salida de ningún menor sin acompañamiento de maestro.",
          "• **Después del Servicio**: Devolución del menor **únicamente** a la persona que porte la etiqueta con el código numérico coincidente; recolección de materiales; desinfección y reporte inmediato de cualquier eventualidad.",
        ],
      },
      {
        sectionId: "c19-s3",
        sectionTitle: "3. Protocolo General de Emergencias y Manejo de Crisis",
        paragraphs: [
          "**REGLA DE ORO**: La vida y seguridad física de las personas tiene prioridad absoluta sobre cualquier bien material o liturgia.",
          "Ante cualquier emergencia grave (médica, conato de incendio, acto de violencia, persona desaparecida o amenaza): **CONTACTAR INMEDIATAMENTE AL 911**.",
        ],
        tables: {
          headers: ["Tipo de Emergencia", "Acción Inmediata Requerida", "Protocolo de Evacuación / Respuesta"],
          rows: [
            ["Incendio / Humo", "Activar alarma manual de incendio y llamar al 911.", "Evacuar por salidas de emergencia iluminadas hacia el punto de encuentro exterior."],
            ["Emergencia Médica Grave", "Llamar al 911 inmediatamente y buscar personal de primeros auxilios.", "Mantener a la persona cómoda sin moverla a menos que haya peligro inminente."],
            ["Menor Extraviado / Perdido", "Cerrar y asegurar todas las puertas de salida del edificio.", "Equipo de seguridad busca en salones y baños; verificar identificación de asistentes."],
            ["Acto Violento / Intruso", "Protocolo 'Run, Hide, Fight' y llamado al 911.", "Asegurar y trabar puertas de salones de niños; apagar luces y mantener silencio."],
            ["Corte Eléctrico / Apagón", "Verificar encendido automático de luces de emergencia.", "Ujieres guían con linternas si procede la evacuación ordenada."],
            ["Alerta Meteorológica Severa", "Resguardo en áreas internas sin ventanas del templo.", "Suspender actividades exteriores y monitorear reportes oficiales."],
          ],
        },
        models: [
          {
            id: "mod-25",
            title: "MODELO 25: Reporte de Incidente Institucional",
            type: "REPORTE / SEGURIDAD",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `REPORTE OFICIAL DE INCIDENTE / EVENTUALIDAD
RENACER CHURCH, INC.
Paterson, New Jersey

1. DATOS GENERALES DEL INCIDENTE:
Fecha del Suceso: [DD/MM/AAAA] | Hora Exacta: [Hora]
Lugar Específico: [Templo / Salón Infantil / Baños / Estacionamiento]
Personas Involucradas: __________________________________________________
Condición: [ ] Menor de Edad  [ ] Miembro  [ ] Visitante  [ ] Voluntario

2. DESCRIPCIÓN CIRCUNSTANCIADA DE LOS HECHOS:
(Detallar objetivamente qué ocurrió, sin suposiciones ni juicios personales):
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

3. MEDIDAS Y ACCIONES INMEDIATAS ADOPTADAS:
¿Se prestaron primeros auxilios? [ ] SÍ  [ ] NO | Por quién: ____________
¿Se llamó a servicios de emergencia 911? [ ] SÍ (Hora: _____)  [ ] NO
¿Se notificó a padres o familiares? [ ] SÍ  [ ] NO | Hora: ______________
¿Se notificó a la línea 1-877-NJ-ABUSE (si aplica)? [ ] SÍ  [ ] NO

4. TESTIGOS PRESENCIALES:
1. Nombre: _______________________________ Teléfono: ___________________
2. Nombre: _______________________________ Teléfono: ___________________

Reportado por: _____________________________ Cargo: ____________________
Firma: _____________________________________ Fecha: ____________________
Revisión Pastoral: _________________________ Fecha: ____________________`,
          },
          {
            id: "mod-14",
            title: "MODELO 14: Política de Privacidad y Protección de Información",
            type: "POLÍTICA / PRIVACIDAD",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE INFORMACIÓN
RENACER CHURCH, INC.

1. FINALIDAD Y ALCANCE:
RENACER CHURCH, INC. recopila y administra datos personales de sus miembros, asistentes, donantes y niños exclusivamente para fines pastorales, administrativos y de comunicación eclesiástica interna.

2. INFORMACIÓN PROTEGIDA:
- Nombres, teléfonos, correos electrónicos y domicilios de miembros y familias.
- Registros individuales de diezmos, ofrendas y donaciones monetarias.
- Fichas médicas o de alergias y autorizaciones parentales de menores en 'Renacer Kids'.
- Fotografías y grabaciones de servicios y actividades comunitarias.

3. REGLAS DE CUSTODIA Y ACCESO:
- El acceso a bases de datos está estrictamente restringido al personal autorizado con contraseñas seguras.
- Queda terminantemente prohibido vender, ceder o compartir listas de miembros o donantes con terceros con fines comerciales o políticos.
- Las fotografías de menores no se publicarán en redes sociales oficiales sin la autorización previa por escrito de sus padres o tutores legales.
- Todo miembro tiene derecho a solicitar la actualización o rectificación de sus datos personales en la secretaría de la iglesia.

Fecha de Adopción: [Insertar Fecha]
Certifico: __________________________________ Secretario`,
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 20
  // -------------------------------------------------------------------------
  {
    chapterNumber: 20,
    slug: "capitulo-20-registros-y-archivo-documental",
    title: "Operación Semanal, Edificio, Inventario y Documentos Oficiales",
    subtitle: "Checklists de servicio, conteo dual de ofrendas, llaves, activos fijos y Modelos 26 y 27",
    category: "DOCUMENTOS_FUNDACIONALES",
    readTimeMinutes: 22,
    summary: "Guía completa de operaciones cotidianas: checklist de servicios semanales (antes, durante y después), protocolo de recolección y conteo dual de ofrendas, control de llaves y accesos (Modelo 26), inventario institucional y entrega de equipos (Modelo 27), y manual de apertura y cierre del templo.",
    officialSources: [
      { name: "RENACER CHURCH Sistema Central de Documentos", url: "/documentos", authority: "RENACER CHURCH, INC." },
    ],
    contentSections: [
      {
        sectionId: "c20-s1",
        sectionTitle: "1. Checklist Operativo del Servicio Dominical",
        paragraphs: [
          "Para garantizar la excelencia y el orden en el culto:",
        ],
        tables: {
          headers: ["Fase del Culto", "Área Operativa", "Checklist de Verificación"],
          rows: [
            ["ANTES DEL CULTO", "Instalaciones y Confort", "[ ] Desbloqueo de puertas principales y revisión de iluminación\n[ ] Climatización ajustada (aire acondicionado / calefacción)\n[ ] Baños provistos de jabón, papel y toallas limpias"],
            ["ANTES DEL CULTO", "Sonido y Medios", "[ ] Prueba de micrófonos, cables e instrumentos\n[ ] Encendido de proyectores, pantallas y sistema de streaming\n[ ] Conexión a internet verificada"],
            ["ANTES DEL CULTO", "Ujieres y Niños", "[ ] Ujieres en sus puestos con sobres de diezmos listos\n[ ] Salones infantiles desinfectados y maestros en posición"],
            ["DURANTE EL CULTO", "Seguridad y Orden", "[ ] Recepción fraternal y guía de asistentes\n[ ] Custodia de puertas de acceso y vigilancia perimetral\n[ ] Registro continuo de niños y atención de emergencias"],
            ["DURANTE EL CULTO", "Ofrendas y Alabanza", "[ ] Recolección ordenada de ofrendas con canastillas selladas\n[ ] Monitoreo constante de niveles de audio"],
            ["DESPUÉS DEL CULTO", "Fondos y Seguridad", "[ ] Traslado inmediato de fondos por 2 ujieres a conteo seguro\n[ ] Apagado ordenado de consolas, pantallas y luces\n[ ] Limpieza general y revisión de baños desocupados\n[ ] Cierre total de puertas, ventanas y activación de alarmas"],
          ],
        },
      },
      {
        sectionId: "c20-s2",
        sectionTitle: "2. Manejo de Ofrendas y Seguridad de Fondos",
        paragraphs: [
          "• **Custodia en Pareja**: Las canastillas con ofrendas son recolectadas y trasladadas por dos ujieres hacia el cuarto de conteo.",
          "• **Conteo Dual Obligatorio**: Dos personas no emparentadas cuentan el dinero simultáneamente, desglosando billetes, monedas y cheques.",
          "• **Hoja de Conteo Firmada**: Ambos contadores firman la hoja oficial de conteo de fondos.",
          "• **Separación de Fondos Restringidos**: Los sobres designados para pro-templo o misiones se registran en sus subcuentas correspondientes.",
          "• **Depósito Inmediato**: Los fondos se colocan en bolsa de depósito sellada para su custodia en caja fuerte o depósito bancario nocturno.",
        ],
      },
      {
        sectionId: "c20-s3",
        sectionTitle: "3. Control de Llaves, Tarjetas y Accesos",
        paragraphs: [
          "El acceso a las instalaciones de la iglesia está estrictamente regulado para prevenir pérdidas y salvaguardar la seguridad comunitaria:",
        ],
        models: [
          {
            id: "mod-26",
            title: "MODELO 26: Registro y Asignación de Llaves y Accesos",
            type: "REGISTRO / SEGURIDAD",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `REGISTRO Y ASIGNACIÓN DE LLAVES Y ACCESOS A INSTALACIONES
RENACER CHURCH, INC.

INFORMACIÓN DEL RECEPTOR:
Nombre Completo: _______________________________________________________
Cargo / Función: ________________________________ Teléfono: ____________

DETALLE DEL ACCESO OTORGADO:
[ ] Llave Física No. _____  Área Autorizada: ___________________________
[ ] Tarjeta Electrónica No. _____
[ ] Código de Alarma Personalizado: [Confidencial]
Fecha de Entrega: [DD/MM/AAAA] | Responsable de Entrega: ________________

COMPROMISO DE CUSTODIA:
Me comprometo a custodiar personalmente las llaves/códigos asignados, no hacer copias no autorizadas, no transferirlos a terceros y devolverlos inmediatamente a requerimiento de la iglesia o al cesar en mis funciones.

Firma del Receptor: ________________________________ Fecha: ____________
Firma de Devolución: _______________________________ Fecha: ____________`,
          },
        ],
      },
      {
        sectionId: "c20-s4",
        sectionTitle: "4. Inventario Institucional y Custodia de Equipos",
        paragraphs: [
          "Todo activo fijo adquirido o donado a RENACER CHURCH debe catalogarse en el inventario oficial:",
        ],
        models: [
          {
            id: "mod-27",
            title: "MODELO 27: Formulario de Asignación y Entrega de Equipo",
            type: "FORMULARIO / INVENTARIO",
            disclaimer: "MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE",
            content: `FORMULARIO DE ASIGNACIÓN Y ENTREGA DE EQUIPO INSTITUCIONAL
RENACER CHURCH, INC.

1. DATOS DEL RESPONSABLE:
Nombre: _______________________________________ Cargo: _________________
Ministerio / Área: ____________________________ Teléfono: ______________

2. DESCRIPCIÓN DEL EQUIPO ASIGNADO:
Categoría: [ ] Audio/Sonido  [ ] Computación/TI  [ ] Video/Cámara  [ ] Instrumento  [ ] Mobiliario
Descripción / Marca / Modelo: ___________________________________________
Número de Serie: _______________________________ Estado Físico: [ ] Excelente  [ ] Bueno
Valor Estimado: $_________________ [POR DEFINIR SEGÚN COMPRA]
Ubicación Autorizada: __________________________________________________

3. ACUERDO DE USO Y DEVOLUCIÓN:
El equipo es propiedad exclusiva de RENACER CHURCH, INC. y se destina únicamente a fines del ministerio. El receptor se compromete a cuidarlo y devolverlo al finalizar la asignación.

Firma de Recepción: ________________________________ Fecha: ____________
Firma de Devolución Final: _________________________ Fecha: ____________`,
          },
        ],
      },
      {
        sectionId: "c20-s5",
        sectionTitle: "5. Manual de Apertura y Cierre del Edificio",
        paragraphs: [
          "• **Checklist de Apertura**: Desbloquear puertas; desactivar alarma (si existe); encender luces y climatización; inspeccionar salones y baños; habilitar sistemas de sonido y check-in.",
          "• **Checklist de Cierre**: Apagar sistemas de sonido, proyectores y climatización; asegurar fondos en caja fuerte; verificar que no queden personas en baños ni salones; cerrar todas las ventanas y puertas con cerrojo; activar sistema de alarma (si existe); inspección perimetral final.",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 21
  // -------------------------------------------------------------------------
  {
    chapterNumber: 21,
    slug: "capitulo-21-checklist-completo",
    title: "Eventos Especiales, Comunicaciones Institucionales y Bóveda de Archivo",
    subtitle: "Planificación de conferencias y retiros, protocolos de comunicación oficial y 7 bóvedas de archivo permanente",
    category: "CHECKLIST_Y_RECURSOS",
    readTimeMinutes: 18,
    summary: "Procedimiento para la organización de eventos especiales y retiros, protocolos de comunicación institucional oficial y guía de retención documental en las 7 Bóvedas de Archivo.",
    officialSources: [
      { name: "IRS Recordkeeping Requirements for Tax-Exempt Organizations", url: "https://www.irs.gov/charities-non-profits/churches-religious-organizations", authority: "IRS" },
      { name: "AICPA Not-for-Profit Entity Document Retention Guidelines", url: "https://www.aicpa-cima.com/", authority: "AICPA Reference" },
    ],
    contentSections: [
      {
        sectionId: "c21-s1",
        sectionTitle: "1. Procedimiento para Eventos Especiales y Retiros",
        paragraphs: [
          "Para organizar conferencias, retiros espirituales, campañas o actividades fuera del templo:",
        ],
        checklists: [
          { id: "ev-1", label: "1. Autorización pastoral y aprobación presupuestaria previa.", details: "Aprobación formal del proyecto y cálculo de costos." },
          { id: "ev-2", label: "2. Verificación de seguros y endosos para eventos externos.", details: "Certificado de seguro extendido al local del evento si se requiere." },
          { id: "ev-3", label: "3. Contrato de arrendamiento del recinto revisado.", details: "Términos claros de uso, depósitos y horarios." },
          { id: "ev-4", label: "4. Permisos municipales si se realiza en espacios públicos.", details: "Permisos de sonido o parque de la ciudad correspondiente." },
          { id: "ev-5", label: "5. Asignación de coordinadores de logística, seguridad y cocina.", details: "Equipos de servicio con líderes designados." },
          { id: "ev-6", label: "6. Protocolo de primeros auxilios y transporte autorizado.", details: "Botiquín y permisos parentales para menores." },
          { id: "ev-7", label: "7. Cierre financiero y rendición de cuentas con comprobantes.", details: "Liquidación total de ingresos por inscripciones y gastos." },
        ],
      },
      {
        sectionId: "c21-s2",
        sectionTitle: "2. Protocolo de Comunicación Oficial de Cambios",
        paragraphs: [
          "• **Canales Legítimos**: Anuncios en el púlpito, circulares oficiales por correo electrónico, sitio web institucional y mensajería oficial autorizada.",
          "• **Autorización de Publicaciones**: Solo el Pastor Presidente o el Secretario Corporativo pueden emitir comunicados institucionales en nombre de RENACER CHURCH.",
          "• **Tipos de Avisos**: Modificaciones de horarios, cancelaciones por tormentas invernales, nombramientos de liderazgo y decisiones corporativas.",
        ],
      },
      {
        sectionId: "c21-s3",
        sectionTitle: "3. Guía Maestra de Retención de Documentos en las 7 Bóvedas",
        paragraphs: [
          "Toda iglesia organizada debe mantener su archivo central clasificado rigurosamente:",
        ],
        tables: {
          headers: ["Bóveda Documental", "Documentos Incluidos", "Tiempo Mínimo de Retención", "Tipo de Custodia"],
          rows: [
            ["1. Corporativos Fundacionales", "Certificate of Incorporation sellado, Bylaws, actas de la junta inicial, enmiendas, escrituras.", "PERMANENTE (De por vida)", "Física a prueba de fuego y Bóveda Digital encriptada"],
            ["2. Eclesiales y Doctrinales", "Constitución (REN-DOC-002), Declaración de Fe (REN-DOC-001), libro de actas bautismales y bodas.", "PERMANENTE", "Archivo físico y respaldo digital centralizado"],
            ["3. Asuntos del IRS y Tributarios", "Notice CP-575 (Asignación EIN), Carta de Determinación 501(c)(3), formularios 1023 presentados.", "PERMANENTE", "Física bajo llave y Bóveda Digital"],
            ["4. Registros Financieros", "Libros mayores contables, estados bancarios, conciliaciones, hojas de conteo de ofrendas.", "7 AÑOS mínimo (Estados anuales: Permanente)", "Digital con respaldo en la nube y físico"],
            ["5. Donaciones y Ofrendas", "Comprobantes de donación, recibos de diezmos, duplicados de cartas anuales IRS Pub 1771.", "7 AÑOS", "Software de donaciones y archivo físico"],
            ["6. Personal y Nómina", "Formularios W-2, W-4, 1099-NEC, I-9 (Verificación de Empleo), resoluciones de Housing Allowance.", "7 AÑOS tras terminación laboral (Resoluciones: Permanente)", "Confidencial bajo estricta llave"],
            ["7. Seguros y Propiedad Local", "Pólizas de seguro anuales, certificados de ocupación (CO), permisos de bomberos, contratos de lease.", "PERMANENTE para pólizas; Vigencia + 7 años para contratos", "Física y respaldo digital"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 22
  // -------------------------------------------------------------------------
  {
    chapterNumber: 22,
    slug: "capitulo-22-mantenimiento-y-cumplimiento-continuo",
    title: "Registros, Obligaciones Anuales y Calendario Administrativo",
    subtitle: "Excepción Form 990, cambios corporativos, checklist de cierre anual y calendario mes a mes con evidencia",
    category: "CHECKLIST_Y_RECURSOS",
    readTimeMinutes: 18,
    summary: "Catálogo completo de tareas periódicas: trámite de cambio de dirección o Registered Agent, checklist de cierre anual clasificado y calendario operativo de enero a diciembre con columnas de requisito legal, responsable y evidencia de cumplimiento.",
    officialSources: [
      { name: "IRC § 6033(a)(3)(A)(i) — Mandatory Form 990 Exception for Churches", url: "https://www.law.cornell.edu/uscode/text/26/6033", authority: "US Code" },
      { name: "NJ Division of Revenue Annual Reports Service", url: "https://www.nj.gov/treasury/revenue/annualreports.shtml", authority: "NJ Treasury" },
    ],
    contentSections: [
      {
        sectionId: "c22-s1",
        sectionTitle: "1. Procedimiento ante Cambio de Dirección o Registered Agent",
        paragraphs: [
          "Si la congregación traslada sus oficinas o cambia de Registered Agent:",
          "• **Registered Office vs Worship Location**: La oficina registrada es la dirección física oficial en New Jersey donde se reciben notificaciones legales; el lugar de culto puede ser un local alquilado distinto.",
          "• **Radicación en New Jersey**: Debe presentarse el cambio oficial ante la NJ Division of Revenue mediante el formulario de enmienda o actualización en línea para mantener el estatus de 'Good Standing'.",
          "• **Notificación al IRS y Aseguradora**: Informar la nueva dirección postal al IRS y actualizar las pólizas de seguro comercial.",
        ],
      },
      {
        sectionId: "c22-s2",
        sectionTitle: "2. Checklist de Cierre Anual Fiscal y Corporativo",
        paragraphs: [
          "Al finalizar cada año fiscal, la secretaría y tesorería ejecutan el siguiente control clasificado:",
        ],
        tables: {
          headers: ["Área / Tarea", "Nivel de Obligación", "Procedimiento de Cierre Anual"],
          rows: [
            ["Formulario 990 del IRS", "EXENTO POR LEY", "No requerido para iglesias bajo IRC § 6033(a)(3)(A)(i)."],
            ["Housing Allowance del Pastor", "REQUISITO FISCAL", "Aprobar formalmente en acta la resolución del subsidio antes del 31 de diciembre."],
            ["Cartas de Donación ($250+)", "REQUISITO FISCAL", "Emitir y entregar comprobantes escritos con el texto obligatorio de la Pub 1771."],
            ["Formularios W-2 y 1099-NEC", "REQUISITO FISCAL", "Procesar y enviar al IRS, estado y colaboradores antes del 31 de enero."],
            ["Annual Report de New Jersey", "REQUISITO LEGAL (si es 15A)", "Presentar reporte anual en línea ($33 fee) en el mes aniversario."],
            ["Conciliación Bancaria Final", "POLÍTICA INTERNA", "Cerrar balance anual y conciliar los 12 extractos bancarios del año."],
            ["Revisión Anual de Seguros", "BUENA PRÁCTICA", "Evaluar con el broker límites y valores asegurados de propiedad y responsabilidad."],
          ],
        },
      },
      {
        sectionId: "c22-s3",
        sectionTitle: "3. Calendario Administrativo Anual Mes a Mes",
        paragraphs: [
          "Cronograma de tareas regulares de enero a diciembre con responsable y evidencia documental de cumplimiento:",
        ],
        tables: {
          headers: ["Mes", "Actividad Administrativa / Trámite", "Requisito Legal / Fiscal", "Responsable", "Evidencia de Cumplimiento"],
          rows: [
            ["Enero", "Emisión de W-2, 1099-NEC y cartas anuales de donación.", "Requisito Fiscal IRS", "Tesorero / Contador", "Formularios W-2/1099 y acuses de cartas Pub 1771"],
            ["Febrero", "Declaraciones informativas anuales de nómina a IRS y NJ.", "Requisito Fiscal IRS/NJ", "Contador", "Confirmación electrónica de radicación"],
            ["Marzo", "Reunión ordinaria de Fideicomisarios (cierre Q1).", "Gobernanza Estatutaria", "Junta Directiva", "Acta (Minutes) de la reunión firmada"],
            ["Abril", "Revisión presupuestaria Q1 y conciliaciones bancarias.", "Control Fiduciario", "Tesorero", "Informe financiero trimestral en carpeta"],
            ["Mayo", "Inspección de seguridad en templo y prueba de extintores.", "Seguridad / Bomberos", "Operaciones / Ujieres", "Bitácora de inspección firmada"],
            ["Junio", "Evaluación ministerial y asamblea de liderazgo de medio año.", "Gobernanza Eclesial", "Pastor / Consejo", "Acta de asamblea ministerial"],
            ["Julio", "Revisión y renovación de pólizas de seguro comercial.", "Gestión de Riesgos", "Trustees / Broker", "Certificados y pólizas vigentes"],
            ["Agosto", "Actualización del Libro de Padrón de Miembros Activos.", "Secretaría Eclesial", "Secretario", "Padrón congregacional actualizado"],
            ["Septiembre", "Inicio de la formulación del Presupuesto Anual del año entrante.", "Planificación Fiduciaria", "Tesorero / Pastor", "Borrador de presupuesto de trabajo"],
            ["Octubre", "Reunión de la Junta para revisar el proyecto presupuestario.", "Gobernanza Estatutaria", "Junta Fideicomisarios", "Acta de deliberación presupuestaria"],
            ["Noviembre", "Capacitación anual de protección infantil y background checks.", "Política Institucional", "Director de Niños", "Certificados de capacitación archivados"],
            ["Diciembre", "Aprobación del Presupuesto y Resolución de Housing Allowance.", "Requisito Fiscal / Bylaws", "Junta Fideicomisarios", "Resoluciones anuales firmadas en Bóveda"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 23
  // -------------------------------------------------------------------------
  {
    chapterNumber: 23,
    slug: "capitulo-23-cronologia-real-de-creacion",
    title: "Cronología de Creación y Sistema Integral de Archivo Institucional",
    subtitle: "Ruta de 12 semanas y taxonomía de las 12 categorías de archivo (quién custodia, accesos y respaldo)",
    category: "CHECKLIST_Y_RECURSOS",
    readTimeMinutes: 16,
    summary: "Cronología secuencial de 12 semanas para el establecimiento inicial de la iglesia y matriz integral del sistema de archivo en 12 categorías institucionales con responsables, niveles de acceso y copias de seguridad.",
    officialSources: [
      { name: "New Jersey Business Action Center Roadmap", url: "https://www.nj.gov/state/bac/", authority: "State of New Jersey" },
    ],
    contentSections: [
      {
        sectionId: "c23-s1",
        sectionTitle: "1. Cronograma Secuencial Estimado de Establecimiento",
        paragraphs: [
          "Ruta cronológica probada de 12 semanas desde la visión fundacional hasta la inauguración:",
        ],
        tables: {
          headers: ["Semana", "Fase", "Acciones Clave a Ejecutar", "Hito de Entrega"],
          rows: [
            ["Semana 1-2", "Fase Fundacional y Visión", "Reuniones de oración y visión con el equipo central. Definir nombre oficial ('RENACER CHURCH, INC.') y verificar disponibilidad en el portal de New Jersey.", "Nombre confirmado y equipo inicial alineado."],
            ["Semana 3", "Incorporación Civil", "Redactar y radicar el Certificate of Incorporation ante la NJ Division of Revenue ($75 o $25). Designar Registered Agent en Paterson.", "Certificado de Incorporación sellado por el Estado."],
            ["Semana 4", "Identificación Federal y Organización", "Obtener el EIN en línea en IRS.gov. Celebrar la reunión organizativa formal y levantar el Acta de Trustees inicial.", "Carta CP-575 de EIN y Acta Fundacional firmada."],
            ["Semana 5", "Apertura Bancaria y Estatutos", "Presentar el paquete corporativo en el banco comercial y abrir la cuenta corriente. Aprobar los Bylaws (REN-DOC-003).", "Cuenta bancaria activa con control de doble firma."],
            ["Semana 6-7", "Régimen Fiscal y Exenciones", "Aprobar resoluciones de Housing Allowance. Tramitar exención de Sales Tax (Form ST-5) ante la NJ Division of Taxation.", "Formulario REG-1E presentado y finanzas estructuradas."],
            ["Semana 8", "Seguros y Gestión de Riesgos", "Cotizar y emitir pólizas de Responsabilidad Civil General, Propiedad, Abuso/Molestias y Workers' Comp con un broker calificado.", "Certificados de seguro emitidos a nombre de la iglesia."],
            ["Semana 9", "Local y Permisos en Paterson", "Inspección final del local, verificación de zonificación, prueba de extintores e inspección de bomberos para obtener el Certificate of Occupancy.", "Permiso de ocupación y uso religioso aprobado."],
            ["Semana 10", "Políticas Internas y Protección", "Aprobar la Política de Seguridad Infantil ('Renacer Kids'), tramitar background checks a maestros y configurar el sistema de check-in.", "Equipo de voluntarios capacitado y verificado."],
            ["Semana 11", "Ensayo General y Archivo", "Realizar servicio de ensayo con el equipo de ujieres, sonido y alabanza. Organizar las Bóvedas de Archivo físico y digital.", "Instalaciones y sistemas 100% listos."],
            ["Semana 12", "Servicio Inaugural y Apertura", "Celebración del culto dominical de inauguración y dedicación pastoral de RENACER CHURCH en Paterson, NJ.", "Iglesia formalmente establecida y operando."],
          ],
        },
      },
      {
        sectionId: "c23-s2",
        sectionTitle: "2. Matriz Integral del Sistema de Archivo (12 Categorías)",
        paragraphs: [
          "Estructura práctica de custodia documental clasificada para preservar la memoria institucional y fiduciaria:",
        ],
        tables: {
          headers: ["Categoría de Archivo", "Responsable", "Nivel de Acceso", "Ubicación y Seguridad", "Confidencialidad", "Respaldo"],
          rows: [
            ["1. CORPORATIVO", "Secretario", "Trustees y Pastor", "Bóveda Fiduciaria ignífuga / Nube encriptada", "Público Interno", "Mensual"],
            ["2. FINANCIERO", "Tesorero", "Tesorero / Pastor / CPA", "Carpeta digital protegida / Archivo físico", "Confidencial Fiduciario", "Semanal"],
            ["3. PERSONAL / NÓMINA", "Administrador", "Pastor y Oficial de Nómina", "Archivador con llave / Software nómina", "Estrictamente Confidencial", "Mensual"],
            ["4. MEMBRESÍA", "Secretario", "Pastor y Secretaría", "Libro de Padrón físico / Sistema eclesial", "Confidencial Pastoral", "Trimestral"],
            ["5. SACRAMENTAL", "Pastor / Secretario", "Pastor y Oficiales", "Libros sacramentales foliados", "Registro Permanente", "Anual"],
            ["6. MINISTERIAL", "Pastor Fundador", "Pastor y Consejo", "Expedientes de credenciales", "Confidencial", "Semestral"],
            ["7. DISCIPLINA PASTORAL", "Pastor Fundador", "Pastor Fundador exclusivamente", "Bóveda pastoral bajo sello", "Secreto Pastoral Máximo", "Permanente"],
            ["8. PROTECCIÓN INFANTIL", "Director de Niños", "Pastor y Director de Niños", "Expedientes de voluntarios y DCF", "Alta Confidencialidad", "Anual"],
            ["9. PROPIEDAD / LOCAL", "Fideicomisarios", "Trustees y Asesor Legal", "Carpeta física de títulos y planos", "Fiduciario", "Permanente"],
            ["10. SEGUROS", "Tesorero", "Trustees y Broker", "Archivo de pólizas y reclamos", "Institucional", "Anual"],
            ["11. CONTRATOS", "Secretario", "Trustees y Abogado", "Carpeta de contratos vigentes", "Fiduciario", "Semestral"],
            ["12. TECNOLOGÍA / TI", "Líder de Sistemas", "Administrador de Sistemas", "Gestor de contraseñas institucional", "Seguridad Crítica", "Semanal"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 24
  // -------------------------------------------------------------------------
  {
    chapterNumber: 24,
    slug: "capitulo-24-profesionales-abogado-cpa-seguro",
    title: "Manual de Operación Diaria, Tabla Maestra y Kit de Modelos",
    subtitle: "Directorio operativo integral de RENACER CHURCH, matriz de estado de trámites y Kit de 27 Modelos clasificados",
    category: "CHECKLIST_Y_RECURSOS",
    readTimeMinutes: 24,
    summary: "Consolidación operativa de la vida diaria de RENACER CHURCH: enlaces a los 14 módulos de gestión eclesial, Tabla Maestra con 6 estados fiduciarios (Pendiente, En Proceso, Completado, Condicional, Requiere Profesional, Requiere Adopción Formal) y Directorio Maestro de los 27 Modelos Prácticos clasificados de la A a la K.",
    officialSources: [
      { name: "New Jersey Department of State — Business Checklist", url: "https://www.nj.gov/state/bac/", authority: "State of New Jersey" },
      { name: "IRS Tax-Exempt Starting Directory", url: "https://www.irs.gov/charities-non-profits", authority: "IRS" },
    ],
    contentSections: [
      {
        sectionId: "c24-s1",
        sectionTitle: "1. Tablero Operativo: Operación Diaria de RENACER CHURCH",
        paragraphs: [
          "Directorio rápido de referencia para el funcionamiento cotidiano y fiduciario de la iglesia:",
        ],
        tables: {
          headers: ["Área Operativa", "Procedimiento Principal", "Documento / Modelo de Apoyo", "Capítulo de Consulta"],
          rows: [
            ["Membresía", "Ciclo de 12 etapas (A a L) y padrón de miembros", "Modelo 18: Solicitud de Membresía", "Capítulo 17: Membresía Eclesial"],
            ["Bautismos", "Preparación, ceremonia y certificación sacramental", "Modelos 19 y 20: Registro y Certificado", "Capítulo 17: Membresía Eclesial"],
            ["Matrimonios", "Marriage License de NJ y consejería matrimonial", "Modelo 21: Checklist de Matrimonio", "Capítulo 17: Membresía Eclesial"],
            ["Credenciales", "Formación bíblica, ordenación y licencias", "Modelos 22, 23 y 24: Credenciales", "Capítulo 17: Membresía Eclesial"],
            ["Gobierno", "Reuniones de Consejo y Asambleas Generales", "Modelos 15, 16 y 17: Agendas y Actas", "Capítulo 16: Gobierno de Renacer"],
            ["Finanzas", "Presupuesto, límites y conflicto de intereses", "Modelos 11 y 12: Conflicto y Contratos", "Capítulo 10: Controles Financieros"],
            ["Donaciones", "Ofrendas restringidas y recibos deducibles IRS", "Modelo 13: Donación Restringida", "Capítulo 11: Donaciones e IRS"],
            ["Protección Infantil", "Regla 2 adultos, background checks y 911", "Modelo 14: Privacidad y Modelo 25: Incidentes", "Capítulo 19: Protección y Seguridad"],
            ["Liderazgo", "Incorporación de siervos y protocolo de salida", "Checklists de 11 pasos y desvinculación", "Capítulo 18: Ministerios y Liderazgo"],
            ["Operación Semanal", "Servicio dominical y conteo dual de ofrendas", "Checklist Operativo de 3 fases", "Capítulo 20: Operación Semanal"],
            ["Llaves y Accesos", "Asignación restringida y custodia de llaves", "Modelo 26: Registro de Llaves", "Capítulo 20: Operación Semanal"],
            ["Inventario", "Custodia de activos fijos e instrumentos", "Modelo 27: Entrega de Equipo", "Capítulo 20: Operación Semanal"],
            ["Emergencias", "Protocolos de crisis, evacuación y reporte", "Modelo 25: Reporte de Incidente", "Capítulo 19: Protección y Seguridad"],
            ["Sistema de Archivo", "12 categorías de archivo institucional seguro", "Matriz de las 7 Bóvedas y 12 Categorías", "Capítulo 21 y 23: Archivo y Bóvedas"],
          ],
        },
      },
      {
        sectionId: "c24-s2",
        sectionTitle: "2. Tabla Maestra Final: ¿Qué Debo Hacer para Operar RENACER?",
        paragraphs: [
          "Matriz integral con el estado de cada trámite indispensable para la operación plena de la iglesia:",
        ],
        tables: {
          headers: ["Etapa", "Acción Específica", "¿Obligatorio?", "Responsable", "Documento Generado", "Fuente Oficial", "Estado Fiduciario"],
          rows: [
            ["1. Nombre", "Verificar disponibilidad de 'RENACER CHURCH, INC.'", "SÍ", "Pastor / Incorporador", "Reporte de búsqueda", "NJ Division of Revenue", "COMPLETADO"],
            ["2. Incorporación", "Presentar Certificate of Incorporation en New Jersey", "SÍ", "Incorporador / Abogado", "Certificate sellado", "NJ Title 15A / 16", "COMPLETADO"],
            ["3. Registered Agent", "Designar Agente Registrado con dirección física en NJ", "SÍ", "Fideicomisarios", "Registro corporativo", "NJ Division of Revenue", "COMPLETADO"],
            ["4. Identificación Fiscal", "Tramitar EIN oficial en línea de forma gratuita", "SÍ", "Pastor Presidente", "Notice CP-575 / 147C", "IRS Form SS-4", "COMPLETADO"],
            ["5. Reunión Inicial", "Celebrar Primera Reunión Organizativa de Trustees", "SÍ", "Junta de Fideicomisarios", "Acta (Minutes) firmada", "Bylaws Modelo 2", "COMPLETADO"],
            ["6. Estatutos", "Aprobar Estatutos Corporativos (Bylaws — REN-DOC-003)", "SÍ", "Junta de Fideicomisarios", "Bylaws certificados", "NJ Title 15A:2-10", "PLANIFICADO / BORRADOR"],
            ["7. Oficiales", "Designar formalmente Presidente, Secretario y Tesorero", "SÍ", "Junta de Fideicomisarios", "Resolución Modelo 5", "Bylaws", "COMPLETADO"],
            ["8. Cuenta Bancaria", "Abrir cuenta corriente institucional con doble firma", "SÍ", "Pastor y Tesorero", "Resolución Bancaria Modelo 4", "Banco Asegurado FDIC", "COMPLETADO"],
            ["9. Estatus 501(c)(3)", "Verificar exención automática § 508(c)(1)(A) o radicar 1023", "SÍ (Sustantivo)", "Pastor / CPA", "Estatutos / Form 1023", "IRC § 508(c)(1)(A)", "COMPLETADO (Automático)"],
            ["10. Exención Sales Tax", "Solicitar Certificado de Exención ST-5 ante NJ Taxation", "CONDICIONAL", "Tesorero / CPA", "Certificado Form ST-5", "NJ Division of Taxation", "EN PROCESO"],
            ["11. Seguros", "Emitir pólizas de Workers' Comp, General Liability y Abuso", "SÍ / CONDICIONAL", "Trustees / Broker", "Pólizas de seguro", "NJ DOBI / Aseguradora", "REQUIERE PROFESIONAL"],
            ["12. Local / Paterson", "Zonificación, Certificate of Occupancy e inspección bomberos", "SÍ", "Operaciones / Abogado", "Certificado de Ocupación", "Ciudad de Paterson", "REQUIERE PROFESIONAL"],
            ["13. Protección Infantil", "Implementar regla 2 adultos y background checks a maestros", "SÍ (Política)", "Director de Niños", "Política Modelo 14", "N.J.S.A. 9:6-8.10", "COMPLETADO"],
            ["14. Housing Allowance", "Aprobar resolución anual de subsidio de vivienda pastoral", "CONDICIONAL", "Junta de Fideicomisarios", "Resolución anual", "IRC § 107 / Pub 517", "REQUIERE ADOPCIÓN FORMAL"],
            ["15. Límites de Gastos", "Fijar umbrales cuantitativos de autorización financiera", "POLÍTICA", "Consejo de Gobierno", "Reglamento financiero", "Manual Interno", "REQUIERE ADOPCIÓN FORMAL"],
          ],
        },
      },
      {
        sectionId: "c24-s3",
        sectionTitle: "3. Kit Maestro de Documentos y Modelos (Categorías A a K)",
        paragraphs: [
          "Directorio consolidado de los 27 modelos prácticos disponibles en este libro web. Todos ellos portan el encabezado obligatorio **MODELO / BORRADOR — REQUIERE REVISIÓN LEGAL ANTES DE USARSE**:",
        ],
        tables: {
          headers: ["Categoría", "Modelo / Documento", "Ubicación en el Libro", "Estado Legal"],
          rows: [
            ["A. Formación Corporativa", "Modelo 1: Agenda de Reunión Organizativa", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["A. Formación Corporativa", "Modelo 2: Minutes / Acta de Reunión Organizativa", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["A. Formación Corporativa", "Modelo 6: Resolución para Solicitar EIN", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["B. Gobierno y Oficiales", "Modelo 3: Resolución de Adopción de Bylaws", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["B. Gobierno y Oficiales", "Modelo 5: Resolución de Designación de Oficiales", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["B. Gobierno y Oficiales", "Modelo 15: Agenda de Reunión del Consejo de Gobierno", "Capítulo 16", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["B. Gobierno y Oficiales", "Modelo 16: Acta de Reunión del Consejo de Gobierno", "Capítulo 16", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["B. Gobierno y Oficiales", "Modelo 17: Acta de Reunión Congregacional (Asamblea)", "Capítulo 16", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["C. Finanzas y Bancos", "Modelo 4: Resolución para Apertura de Cuenta Bancaria", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["C. Finanzas y Bancos", "Modelo 12: Formulario de Autorización de Contrato", "Capítulo 10", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["D. Donaciones", "Modelo 13: Formulario de Restricción de Donación", "Capítulo 11", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["E. Conflicto de Intereses", "Modelo 11: Declaración Anual de Conflicto", "Capítulo 10", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["F. Membresía y Sacramentos", "Modelo 18: Solicitud de Membresía", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["F. Membresía y Sacramentos", "Modelo 19: Registro de Bautismo Sacramental", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["F. Membresía y Sacramentos", "Modelo 20: Certificado de Bautismo en Agua", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["F. Membresía y Sacramentos", "Modelo 21: Checklist Administrativo de Matrimonio", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["G. Credenciales Ministeriales", "Modelo 22: Solicitud de Credencial Ministerial", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["G. Credenciales Ministeriales", "Modelo 23: Registro de Credenciales Ministeriales", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["G. Credenciales Ministeriales", "Modelo 24: Certificado / Credencial Ministerial", "Capítulo 17", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["H. Seguridad y Protección", "Modelo 14: Política de Privacidad de Datos", "Capítulo 19", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["H. Seguridad y Protección", "Modelo 25: Reporte Oficial de Incidente", "Capítulo 19", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["I. Operaciones y Activos", "Modelo 26: Registro de Llaves y Accesos", "Capítulo 20", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["I. Operaciones y Activos", "Modelo 27: Entrega y Asignación de Equipo", "Capítulo 20", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["J. Registros y Archivo", "Modelo 7: Checklist de Documentos Fundacionales", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["J. Registros y Archivo", "Modelo 8: Checklist de Conservación Permanente", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["K. Reuniones y Logs", "Modelo 9: Registro de Resoluciones (Resolution Log)", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
            ["K. Reuniones y Logs", "Modelo 10: Registro de Asistencia y Quórum", "Capítulo 5", "MODELO / REQUIERE REVISIÓN LEGAL"],
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CAPÍTULO 25
  // -------------------------------------------------------------------------
  {
    chapterNumber: 25,
    slug: "capitulo-25-fuentes-oficiales-y-biblioteca-de-enlaces",
    title: "Fuentes Oficiales y Biblioteca de Enlaces Gubernamentales",
    subtitle: "Directorio exhaustivo y verificado de portales de New Jersey, IRS Federal y Ciudad de Paterson",
    category: "CHECKLIST_Y_RECURSOS",
    readTimeMinutes: 14,
    summary: "Compilación de enlaces directos y verificados a organismos estatales, federales y municipales para consultar normativas vigentes, descargar formularios oficiales y realizar trámites gubernamentales legítimos.",
    officialSources: [
      { name: "State of New Jersey Official Portal", url: "https://www.nj.gov/", authority: "State of NJ" },
      { name: "Internal Revenue Service Official Portal", url: "https://www.irs.gov/", authority: "Federal Government" },
      { name: "City of Paterson Official Portal", url: "https://www.patersonnj.gov/", authority: "City of Paterson" },
    ],
    contentSections: [
      {
        sectionId: "c25-s1",
        sectionTitle: "1. Directorio Oficial del Estado de New Jersey",
        paragraphs: [
          "Consulte los siguientes portales gubernamentales legítimos del Estado de New Jersey:",
          "• **NJ Department of the Treasury**: https://www.nj.gov/treasury/\n• **NJ Division of Revenue & Enterprise Services (Registro Corporativo y Annual Reports)**: https://www.nj.gov/treasury/revenue/\n• **NJ Division of Taxation (Exenciones, Nonprofits y Sales Tax ST-5)**: https://www.nj.gov/treasury/taxation/\n• **NJ Business Action Center (Guías para inicio de organizaciones)**: https://www.nj.gov/state/bac/\n• **NJ Division of Consumer Affairs (Charities Registration Section)**: https://www.njconsumeraffairs.gov/charities\n• **NJ Department of Children and Families (Línea 1-877-NJ-ABUSE)**: https://www.nj.gov/dcf/\n• **NJ Compensation Rating and Inspection Bureau (Workers' Comp)**: https://www.njcrib.gov/",
        ],
      },
      {
        sectionId: "c25-s2",
        sectionTitle: "2. Directorio Oficial del Gobierno Federal (IRS)",
        paragraphs: [
          "Enlaces directos a recursos tributarios y publicaciones del Internal Revenue Service:",
          "• **Portal de Iglesias y Organizaciones Religiosas**: https://www.irs.gov/charities-non-profits/churches-religious-organizations\n• **IRS Publication 1828 (Tax Guide for Churches & Religious Organizations)**: https://www.irs.gov/pub/irs-pdf/p1828.pdf\n• **IRS Publication 517 (Social Security & Other Information for Clergy)**: https://www.irs.gov/pub/irs-pdf/p517.pdf\n• **IRS Publication 557 (Tax-Exempt Status for Your Organization)**: https://www.irs.gov/pub/irs-pdf/p557.pdf\n• **IRS Publication 1771 (Charitable Contributions Substantiation)**: https://www.irs.gov/pub/irs-pdf/p1771.pdf\n• **Instrucciones del Formulario 1023 y Schedule A**: https://www.irs.gov/forms-pubs/about-form-1023\n• **Instrucciones del Formulario 1023-EZ**: https://www.irs.gov/forms-pubs/about-form-1023-ez\n• **Impuesto sobre Ingresos de Negocios No Relacionados (UBIT / Form 990-T)**: https://www.irs.gov/charities-non-profits/unrelated-business-income-tax\n• **Portal Pay.gov (Radicación electrónica de tarifas del IRS)**: https://www.pay.gov/",
        ],
      },
      {
        sectionId: "c25-s3",
        sectionTitle: "3. Directorio Municipal de la Ciudad de Paterson, NJ",
        paragraphs: [
          "Autoridades locales para inspecciones, usos de suelo y seguridad en Passaic County:",
          "• **Sitio Oficial de la Ciudad de Paterson**: https://www.patersonnj.gov/\n• **Paterson Department of Community Development (Zonificación y Usos de Suelo)**: https://www.patersonnj.gov/\n• **Paterson Bureau of Fire Prevention (Inspección de bomberos y capacidad)**: https://www.patersonnj.gov/\n• **Paterson Division of Construction (Certificate of Occupancy)**: https://www.patersonnj.gov/\n• **Passaic County Clerk (Registros históricos y escrituras)**: https://www.passaiccountynj.org/",
        ],
      },
    ],
  },
];

export function getAllBookChapters(): BookChapter[] {
  return BOOK_CHAPTERS;
}

export function getBookChapterBySlug(slug: string): BookChapter | undefined {
  return BOOK_CHAPTERS.find((c) => c.slug === slug || c.chapterNumber.toString() === slug);
}
