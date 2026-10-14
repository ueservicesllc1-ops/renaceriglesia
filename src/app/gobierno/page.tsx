import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function GobiernoPage() {
  return (
    <ModulePlaceholderView
      number="04"
      name="Gobierno y Discipulado"
      category="Gobierno Eclesial"
      description="Estructura de autoridad espiritual, Consejo de Gobierno, Consejo Ministerial y orden eclesial."
      expectedJson="gobierno.json"
      details={[
        "Organigrama institucional dinámico",
        "Jerarquía de decisiones y toma de actas",
        "Líneas de rendición de cuentas ministerial y discipular",
        "Trazabilidad de actas aprobadas",
      ]}
    />
  );
}
