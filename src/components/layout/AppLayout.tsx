"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloquea el scroll del fondo y permite cerrar con Escape mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen min-h-[100dvh] bg-[#0b1120] text-slate-100 antialiased overflow-x-hidden">
      {/* Fondo oscuro al abrir el menú en móvil/tablet */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar: cajón deslizable en móvil/tablet, fijo en escritorio */}
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Área principal */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setMenuOpen(true)} />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-5 sm:px-6 sm:py-6 lg:p-8 pb-24 lg:pb-8 min-w-0 app-main">
          {children}
        </main>
      </div>

      <BottomNav onMore={() => setMenuOpen(true)} />
    </div>
  );
};
