export function setUserRole(role: "user" | "admin" | "founder") {
  if (typeof window === "undefined") return;
  localStorage.setItem("userRole", role);
  // dispatch a custom event so we don't rely on StorageEvent constructor
  window.dispatchEvent(new CustomEvent("userRoleChanged", { detail: role }));
}

export function clearUserRole() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("userRole");
  window.dispatchEvent(new CustomEvent("userRoleChanged", { detail: null }));
}
