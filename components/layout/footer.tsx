import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">FundTre</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Nền tảng gây quỹ cho các Startup đổi mới tại Việt Nam
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Khám phá</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/explore" className="hover:text-foreground">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-foreground">
                  Bảng xếp hạng
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-foreground">
                  Danh mục
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Công ty</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-foreground">
                  Cách thức hoạt động
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Pháp lý</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 FundHub. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
