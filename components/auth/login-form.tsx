"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Lock, Loader2 } from "lucide-react"
import { mockUsers, generateMockToken } from "@/lib/auth"

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Mock login - in production, call your backend API
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Find user by email in mockUsers
      const found = Object.values(mockUsers).find((entry) => entry.user.email === email)

      if (found && found.password === password) {
        const sess = {
          user_id: found.user.user_id,
          email: found.user.email,
          nick_name: found.user.nick_name,
          role: found.user.role,
          token: generateMockToken(found.user.user_id),
        }
        localStorage.setItem("auth_session", JSON.stringify(sess))

        // Redirect depending on role
        if (sess.role === "founder") {
          router.push("/founder/dashboard")
        } else if (sess.role === "user") {
          router.push("/dashboard")
        } else if (sess.role === "admin") {
          router.push("/admin/dashboard")
        } else {
          router.push("/")
        }
      } else {
        setError("Email hoặc mật khẩu không chính xác")
      }
    } catch (err) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="rounded-lg bg-destructive/10 p-4 text-destructive text-sm">{error}</div>}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="block text-sm font-medium text-foreground">
            Mật khẩu
          </label>
          <Link href="/forgot-password" className="text-xs text-primary hover:underline">
            Quên mật khẩu?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </Button>

      {/* Register Link */}
      <p className="text-center text-sm text-muted-foreground">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="text-primary hover:underline font-semibold">
          Đăng ký ngay
        </Link>
      </p>

      {/* Demo Credentials Hint */}
      <Card className="bg-muted/30 p-3 border-none">
        <p className="text-xs text-muted-foreground text-center">Demo users:</p>
        <p className="text-xs text-muted-foreground text-center">User: john.doe@example.com / StrongPassword123!</p>
        <p className="text-xs text-muted-foreground text-center">Founder: founder@example.com / FounderPass123!</p>
        <p className="text-xs text-muted-foreground text-center">Admin: admin@fundhub.com / AdminPass123!</p>
      </Card>
    </form>
  )
}
