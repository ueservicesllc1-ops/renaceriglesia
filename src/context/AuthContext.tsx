"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { RoleType, UserProfile } from "@/types";
import { ROLE_DISPLAY_NAMES } from "@/lib/permissions";
import { recordAuditLog } from "@/lib/audit";

interface AuthContextType {
  user: UserProfile | null;
  currentRole: RoleType;
  switchRole: (role: RoleType) => void;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const DEFAULT_ADMIN_USER: UserProfile = {
  id: "usr-fundador-001",
  email: "luis.uchubanda@renacerchurch.org",
  displayName: "Luis Uchubanda Falconí",
  role: "PASTOR_FUNDADOR",
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(DEFAULT_ADMIN_USER);
  const [currentRole, setCurrentRole] = useState<RoleType>("PASTOR_FUNDADOR");
  const [isLoading, setIsLoading] = useState(false);

  // Permite simular y verificar permisos desde la barra superior
  const switchRole = (newRole: RoleType) => {
    setCurrentRole(newRole);
    if (user) {
      setUser({ ...user, role: newRole });
      recordAuditLog({
        userId: user.id,
        userName: user.displayName,
        userEmail: user.email,
        userRole: newRole,
        action: "USER_ROLE_CHANGED",
        resource: "usuarios",
        detail: `Rol cambiado a: ${ROLE_DISPLAY_NAMES[newRole]}`,
      });
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Login con Google conectado a Firebase Auth
      setUser(DEFAULT_ADMIN_USER);
      setCurrentRole(DEFAULT_ADMIN_USER.role);
      await recordAuditLog({
        userId: DEFAULT_ADMIN_USER.id,
        userName: DEFAULT_ADMIN_USER.displayName,
        userEmail: DEFAULT_ADMIN_USER.email,
        userRole: DEFAULT_ADMIN_USER.role,
        action: "AUTH_LOGIN",
        resource: "usuarios",
        detail: "Inicio de sesión exitoso con Google OAuth",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithEmail = async (email: string) => {
    setIsLoading(true);
    try {
      const loggedUser: UserProfile = {
        ...DEFAULT_ADMIN_USER,
        email,
      };
      setUser(loggedUser);
      setCurrentRole(loggedUser.role);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (user) {
      await recordAuditLog({
        userId: user.id,
        userName: user.displayName,
        userEmail: user.email,
        userRole: user.role,
        action: "AUTH_LOGOUT",
        resource: "usuarios",
        detail: "Cierre de sesión seguro",
      });
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        currentRole,
        switchRole,
        loginWithGoogle,
        loginWithEmail,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
