import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Tạo tài khoản mới
            </h1>
            <p className="mt-2 text-muted-foreground">
              Bắt đầu hành trình ủng hộ Startup của bạn
            </p>
          </div>

          <Card className="p-8">
            <RegisterForm />
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
