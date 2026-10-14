"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, FolderLock, Bot, Menu } from "lucide-react";
import clsx from "clsx";

const ITEMS = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Doctrina", href: "/doctrina", icon: BookOpen },
  { name: "Documentos", href: "/documentos", icon: FolderLock },
  { name: "IA", href: "/ia", icon: Bot },
];

export const BottomNav: React.FC<{ onMore: () => void }> = ({ onMore }) => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal móvil"
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#090f1d]/95 backdrop-blur-md border-t border-slate-800/80 pb-[env(safe-area-inset-bottom)] print:hidden"
    >
      <ul className="grid grid-cols-5 max-w-xl mx-auto">
        {ITEMS.map(({ name, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "flex flex-col items-center justify-center gap-0.5 h-14 text-[10px] font-semibold transition-colors active:scale-95",
                  active ? "text-amber-300" : "text-slate-400 active:text-slate-200"
                )}
              >
                <Icon className={clsx("w-5 h-5", active && "drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]")} />
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={onMore}
            aria-label="Abrir menú completo"
            className="w-full flex flex-col items-center justify-center gap-0.5 h-14 text-[10px] font-semibold text-slate-400 active:text-slate-200 active:scale-95 transition-colors"
          >
            <Menu className="w-5 h-5" />
            <span>Menú</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
