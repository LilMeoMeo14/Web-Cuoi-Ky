import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Zap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              Về TreFund
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nền tảng gây quỹ cộng đồng hàng đầu dành cho các Startup đổi mới
              tại Việt Nam
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Sứ mệnh của chúng tôi
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TreFund được thành lập với mục đích kết nối các nhà sáng lập
                  tài ba với những nhà đầu tư đam mê sáng tạo. Chúng tôi tin
                  rằng mỗi ý tưởng tuyệt vời xứng đáng được hỗ trợ.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Từ nông nghiệp công nghệ đến điện ảnh sáng tạo, chúng tôi hỗ
                  trợ các dự án có tiềm năng thay đổi cuộc sống hàng triệu
                  người.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    156
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dự án thành công
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">
                    2.3K
                  </div>
                  <p className="text-sm text-muted-foreground">Nhà đầu tư</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    ₫5.2B
                  </div>
                  <p className="text-sm text-muted-foreground">Vốn gây được</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    78%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tỷ lệ thành công
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Giá trị cốt lõi
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Heart,
                  title: "Cộng đồng",
                  desc: "Chúng tôi tin vào sức mạnh của cộng đồng trong việc hỗ trợ những ý tưởng tuyệt vời",
                },
                {
                  icon: Zap,
                  title: "Đổi mới",
                  desc: "Chúng tôi khuyến khích các giải pháp sáng tạo cho những vấn đề thực tế",
                },
                {
                  icon: Users,
                  title: "Minh bạch",
                  desc: "Tính trung thực và minh bạch là nền tảng của tất cả các hoạt động của chúng tôi",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-8 text-center hover:shadow-lg transition"
                >
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bạn đã sẵn sàng chưa?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Khám phá các dự án đầy tiềm năng hoặc tạo dự án của riêng bạn
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/explore">Khám phá dự án</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">Bắt đầu dự án</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
