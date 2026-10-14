import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import "@/styles/print.css";
import { AuthProvider } from "@/context/AuthContext";
import { DocumentProvider } from "@/context/DocumentContext";
import { AppLayout } from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: "RENACER CHURCH MAESTRO — Sistema Central",
  description:
    "Sistema Operativo Central de RENACER CHURCH. Plataforma modular para administrar identidad, doctrina, constitución, formación y gobierno.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090f1d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#0b1120] text-slate-100 min-h-screen">
        <AuthProvider>
          <DocumentProvider>
            <AppLayout>{children}</AppLayout>
          </DocumentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
