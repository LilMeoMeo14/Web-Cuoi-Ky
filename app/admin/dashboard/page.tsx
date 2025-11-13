"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/layout/footer"
import { LogOut, BarChart3, Users, FileCheck, AlertCircle, TrendingUp, DollarSign, Briefcase } from "lucide-react"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const adminSession = localStorage.getItem("admin_session")
    const authSession = localStorage.getItem("auth_session")
    
    // Check if user is authenticated as admin (either via admin_session or auth_session with admin role)
    let isAdmin = false
    if (adminSession) {
      isAdmin = true
    } else if (authSession) {
      try {
        const session = JSON.parse(authSession)
        if (session.role === "admin") {
          isAdmin = true
        }
      } catch (e) {
        // Invalid session JSON
      }
    }
    
    if (!isAdmin) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_session")
    localStorage.removeItem("auth_session")
    router.push("/")
  }

  if (!isAuthenticated) {
    return null
  }

  const stats = [
    {
      label: "Tổng dự án",
      value: 156,
      icon: Briefcase,
      color: "text-primary",
    },
    {
      label: "Người dùng",
      value: 2340,
      icon: Users,
      color: "text-secondary",
    },
    {
      label: "Tổng vốn gây được",
      value: "₫ 5.2B",
      icon: DollarSign,
      color: "text-accent",
    },
    {
      label: "Tỷ lệ thành công",
      value: "78%",
      icon: TrendingUp,
      color: "text-primary",
    },
  ]

  const pendingProjects = [
    {
      id: 1,
      title: "Ứng dụng mới AI",
      founder: "Vũ Thế E",
      target: 100000,
      category: "Công nghệ",
      submittedAt: "2025-11-14",
    },
    {
      id: 2,
      title: "Phim tài liệu văn hóa",
      founder: "Trần Thị B",
      target: 25000,
      category: "Điện ảnh",
      submittedAt: "2025-11-13",
    },
  ]

  const reports = [
    {
      id: 1,
      projectId: 102,
      projectTitle: "Phim ngắn Nghệ thuật Bóng",
      reason: "Dự án này có vẻ là lừa đảo. Video demo bị đánh cắp",
      type: "Scam/Fraud",
      reportedAt: "2025-11-12",
      status: "REVIEWING",
    },
    {
      id: 2,
      projectId: 45,
      projectTitle: "Hệ thống bảo mật mới",
      reason: "Sản phẩm đã có bên khác làm giống hệt",
      type: "Copyright",
      reportedAt: "2025-11-11",
      status: "REVIEWING",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Admin Header */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition"
            >
              <LogOut size={18} />
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-4 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 opacity-20 ${stat.color}`} />
                </div>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="projects" className="border-b border-border">
            <TabsList className="w-full justify-start rounded-none">
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FileCheck size={18} />
                Duyệt dự án ({pendingProjects.length})
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <AlertCircle size={18} />
                Báo cáo ({reports.length})
              </TabsTrigger>
              <TabsTrigger value="users">Quản lý người dùng</TabsTrigger>
              <TabsTrigger value="transactions">Giao dịch</TabsTrigger>
            </TabsList>

            {/* Project Review Tab */}
            <TabsContent value="projects" className="mt-8">
              <div className="space-y-4">
                {pendingProjects.map((project) => (
                  <Card key={project.id} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Nhà sáng lập: {project.founder}</p>
                        <p className="text-sm text-muted-foreground">
                          Danh mục: {project.category} | Mục tiêu: {project.target.toLocaleString("vi-VN")} ₫
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Gửi lúc: {new Date(project.submittedAt).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <Button variant="outline" size="sm">
                        Xem chi tiết
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/admin/review/${project.id}`}>Duyệt</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="mt-8">
              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">{report.projectTitle}</h3>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              report.type === "Scam/Fraud"
                                ? "bg-destructive/10 text-destructive"
                                : "bg-secondary/10 text-secondary"
                            }`}
                          >
                            {report.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Lý do: {report.reason}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Báo cáo lúc: {new Date(report.reportedAt).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <Button variant="outline" size="sm">
                        Bỏ qua
                      </Button>
                      <Button variant="destructive" size="sm">
                        Vô hiệu hóa dự án
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="mt-8">
              <Card className="p-12 text-center">
                <Users size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">Tính năng quản lý người dùng sẽ sớm khả dụng</p>
              </Card>
            </TabsContent>

            {/* Transactions Tab */}
            <TabsContent value="transactions" className="mt-8">
              <Card className="p-12 text-center">
                <DollarSign size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">Tính năng theo dõi giao dịch sẽ sớm khả dụng</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
