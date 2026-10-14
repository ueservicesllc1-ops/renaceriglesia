import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function EscuelaDiscipulosPage() {
  return (
    <ModulePlaceholderView
      number="07"
      name="Escuela de Discípulos (9 Meses)"
      category="Formación Académica"
      description="Curriculum formativo de discipulado estructurado para 9 meses de crecimiento doctrinal y vida cristiana."
      expectedJson="escuela-discipulos.json"
      details={[
        "Malla curricular dividida en 9 bloques mensuales",
        "Seguimiento de asistencia, tareas y lecturas bíblicas",
        "Generación de diplomas de culminación de discipulado",
        "Integración directa con los artículos doctrinales adoptados",
      ]}
    />
  );
}
