import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Chính sách bảo mật</h1>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Thông tin chúng tôi thu thập</h2>
              <p className="text-muted-foreground">
                Chúng tôi thu thập thông tin cá nhân khi bạn đăng ký, tạo dự án hoặc ủng hộ một dự án. Điều này bao gồm
                tên, email, địa chỉ và thông tin thanh toán.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Cách chúng tôi sử dụng thông tin</h2>
              <p className="text-muted-foreground">
                Thông tin của bạn được sử dụng để xử lý giao dịch, gửi cập nhật dự án, cải thiện dịch vụ của chúng tôi
                và tuân thủ các yêu cầu pháp lý.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Bảo mật dữ liệu</h2>
              <p className="text-muted-foreground">
                Chúng tôi sử dụng các biện pháp bảo mật tiên tiến để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái
                phép, thay đổi hoặc tiết lộ.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Quyền của bạn</h2>
              <p className="text-muted-foreground">
                Bạn có quyền truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của bạn bất kỳ lúc nào bằng cách liên hệ với
                chúng tôi.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Liên hệ</h2>
              <p className="text-muted-foreground">
                Nếu bạn có câu hỏi về chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi tại
                privacy@trefund.com
              </p>
            </Card>
          </div>

          <p className="text-sm text-muted-foreground mt-12">Cập nhật lần cuối: Tháng 11 năm 2025</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
