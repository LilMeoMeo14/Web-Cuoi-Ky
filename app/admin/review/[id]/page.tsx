"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function ReviewProjectPage({ params }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [adminNote, setAdminNote] = useState("")

  useEffect(() => {
    const adminSession = localStorage.getItem("admin_session")
    const authSession = localStorage.getItem("auth_session")

    let isAdmin = false
    if (adminSession) {
      isAdmin = true
    } else if (authSession) {
      try {
        const s = JSON.parse(authSession)
        if (s?.role === "admin") isAdmin = true
      } catch (e) {
        // invalid json
      }
    }

    if (!isAdmin) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const project = {
    id: params.id,
    title: "Ứng dụng mới AI",
    founder: "Vũ Thế E",
    email: "vuthee@example.com",
    target: 100000,
    category: "Công nghệ",
    description: "Ứng dụng AI tiên tiến để viết code tự động...",
    shortDescription: "Công cụ AI viết code tự động sử dụng deep learning",
    submittedAt: "2025-11-14",
    image: "/placeholder.svg?key=2zqme",
  }

  const handleApprove = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/admin/dashboard?status=approved")
    } catch (error) {
      console.error("Error approving project:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleReject = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/admin/dashboard?status=rejected")
    } catch (error) {
      console.error("Error rejecting project:", error)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Admin Header */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={20} />
            Quay lại Admin Panel
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Duyệt dự án</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <Card className="p-6 mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">{project.title}</h2>

                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Nhà sáng lập</p>
                    <p className="text-foreground font-semibold">{project.founder}</p>
                    <p className="text-sm text-muted-foreground">{project.email}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Danh mục</p>
                    <p className="text-foreground font-semibold">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Mục tiêu gây quỹ</p>
                    <p className="text-foreground font-semibold">{project.target.toLocaleString("vi-VN")} ₫</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-3">Mô tả</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{project.description}</p>
                </div>
              </Card>
            </div>

            {/* Review Panel */}
            <div>
              <Card className="sticky top-24 p-6">
                <h3 className="font-semibold text-foreground mb-4">Quyết định duyệt</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ghi chú admin (tuỳ chọn)</label>
                    <textarea
                      value={adminNote}
                      onChange={(e) => setAdminNote(e.target.value)}
                      placeholder="Ghi chú về duyệt dự án..."
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>Ghi chú:</strong> Duyệt dự án có nghĩa là nó sẽ xuất hiện công khai trên nền tảng.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button size="lg" className="w-full" onClick={handleApprove} disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? "Đang xử lý..." : "Duyệt dự án"}
                  </Button>
                  <Button size="lg" variant="destructive" className="w-full" onClick={handleReject} disabled={loading}>
                    Từ chối
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
