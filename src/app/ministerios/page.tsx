import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function MinisteriosPage() {
  return (
    <ModulePlaceholderView
      number="06"
      name="Ministerios"
      category="Servicio Eclesial"
      description="Organización de departamentos ministeriales (Alabanza, Damas, Caballeros, Jóvenes, Niños, Misiones, Ujieres)."
      expectedJson="ministerios.json"
      details={[
        "Ficha por cada ministerio con objetivos y manual operativo",
        "Asignación de directores y líderes responsables",
        "Registro de voluntarios y horarios de servicio",
        "Manuales de procedimiento aprobados por ministerio",
      ]}
    />
  );
}
