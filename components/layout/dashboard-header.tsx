"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, Bell, User, Settings } from "lucide-react"
import { useState } from "react"
import { clearUserRole } from "@/lib/roleClient"

export function DashboardHeader() {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("auth_session")
    // reset UI theme to default
    clearUserRole()
    router.push("/")
  }

  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm text-primary-foreground">F</span>
            </div>
            <span>FundHub</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/notifications">
                <Bell size={20} />
              </Link>
            </Button>

            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 rounded-full bg-muted p-1.5 hover:bg-muted/80 transition"
              >
                <User size={20} className="text-foreground" />
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-background shadow-lg">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted first:rounded-t-lg"
                  >
                    <User size={16} className="inline mr-2" />
                    Hồ sơ
                  </Link>
                  <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                    <Settings size={16} className="inline mr-2" />
                    Cài đặt
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-muted last:rounded-b-lg"
                  >
                    <LogOut size={16} className="inline mr-2" />
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
