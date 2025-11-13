"use client";

import { useEffect } from "react";

export default function RoleClass() {
  useEffect(() => {
    const applyRole = (role: string | null) => {
      const roles = ["default", "user", "admin", "founder"];
      // remove any existing role- classes
      roles.forEach((r) => document.documentElement.classList.remove(`role-${r}`));
      // if a role is provided, apply it; otherwise apply default
      if (role) {
        document.documentElement.classList.add(`role-${role}`);
      } else {
        document.documentElement.classList.add('role-default');
      }
    };

    // Read initial role from localStorage
    const initial = typeof window !== "undefined" ? localStorage.getItem("userRole") : null;
    applyRole(initial);

    // Listen for storage changes (other tabs) and custom events
    const onStorage = (e: StorageEvent) => {
      if (e.key === "userRole") applyRole(e.newValue);
    };
    const onCustom = (e: Event) => {
      const anyE = e as CustomEvent<string | null>;
      // allow null detail to reset to default
      applyRole(anyE?.detail ?? null);
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("userRoleChanged", onCustom as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("userRoleChanged", onCustom as EventListener);
    };
  }, []);

  return null;
}
