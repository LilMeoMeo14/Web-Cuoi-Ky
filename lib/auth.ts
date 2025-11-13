// Authentication utilities and types
export interface User {
  user_id: string
  first_name: string
  last_name: string
  nick_name: string
  email: string
  role: "user" | "founder" | "admin"
}

export interface AuthSession {
  user_id: string
  email: string
  nick_name: string
  role: "user" | "founder" | "admin"
  token: string
}

// Mock authentication - in production, use real backend
export const mockUsers: Record<string, { password: string; user: User }> = {
  johndoe: {
    password: "StrongPassword123!",
    user: {
      user_id: "johndoe",
      first_name: "John",
      last_name: "Doe",
      nick_name: "Johnny",
      email: "john.doe@example.com",
      role: "user",
    },
  },
  founder1: {
    password: "FounderPass123!",
    user: {
      user_id: "founder001",
      first_name: "Alice",
      last_name: "Founder",
      nick_name: "AliceF",
      email: "founder@example.com",
      role: "founder",
    },
  },
  admin1: {
    password: "AdminPass123!",
    user: {
      user_id: "admin_001",
      first_name: "Super",
      last_name: "Admin",
      nick_name: "Admin",
      email: "admin@fundhub.com",
      role: "admin",
    },
  },
}

export function generateMockToken(userId: string): string {
  // Mock JWT token
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
  const payload = btoa(JSON.stringify({ user_id: userId, iat: Date.now() }))
  const signature = btoa("mock-signature")
  return `${header}.${payload}.${signature}`
}
