"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-2 py-1.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className=" items-center ">
            <div className=" h-18 w-18    ">
              <span className=" ">
                <img src="/logo.png" alt="Logo" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            <Link
              href="/explore"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Khám phá
            </Link>
            <Link
              href="/leaderboard"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Bảng xếp hạng
            </Link>
            <Link
              href="/about"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Về chúng tôi
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden gap-3 md:flex">
            <Button variant="outline" asChild>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Đăng ký</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 md:hidden">
            <Link
              href="/explore"
              className="text-foreground/70 hover:text-foreground"
            >
              Khám phá
            </Link>
            <Link
              href="/leaderboard"
              className="text-foreground/70 hover:text-foreground"
            >
              Bảng xếp hạng
            </Link>
            <Link
              href="/about"
              className="text-foreground/70 hover:text-foreground"
            >
              Về chúng tôi
            </Link>
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                asChild
                className="flex-1 bg-transparent"
              >
                <Link href="/login">Đăng nhập</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/register">Đăng ký</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
