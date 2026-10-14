import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function ReportesPage() {
  return (
    <ModulePlaceholderView
      number="19"
      name="Reportes y Estadísticas"
      category="Analítica & Inteligencia"
      description="Generación de métricas de crecimiento, reportes de asistencia escolar, estado del centro legal y cumplimiento administrativo."
      expectedJson="reportes.json"
      details={[
        "Métricas consolidadas por escuela (Discípulos, Líderes y Seminario)",
        "Tableros de cumplimiento de los procesos legales ante New Jersey y el IRS",
        "Exportación de reportes ejecutivos en PDF para el Consejo de Gobierno",
        "Estadísticas de consultas y áreas más consultadas en RENACER IA",
      ]}
    />
  );
}
