import { ModulePlaceholderView } from "@/components/modules/ModulePlaceholderView";

export default function MembresiaPage() {
  return (
    <ModulePlaceholderView
      number="05"
      name="Membresía e Integración"
      category="Comunidad & Personas"
      description="Registro de miembros, proceso de integración, bautismos, traslados y estado activo en la congregación."
      expectedJson="membresia.json"
      details={[
        "Ficha integral del miembro vinculada al esquema Person",
        "Control de requisitos cumplidos para la membresía plena",
        "Historial de integración, grupos familiares y servicio",
        "Emisión de certificados de membresía oficial",
      ]}
    />
  );
}
