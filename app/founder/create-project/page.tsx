"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProtectedLayout } from "@/components/auth/protected-layout";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function CreateProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Công nghệ",
    shortDescription: "",
    description: "",
    targetAmount: 50000,
    deadline: "",
    videoUrl: "",
  });

  const categories = [
    "Nông nghiệp",
    "Điện ảnh",
    "Y tế",
    "Công nghệ",
    "Giáo dục",
    "Khác",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "targetAmount" ? Number(value) : value,
    }));
  };

  const validateStep = () => {
    if (step === 1) {
      return formData.title && formData.category && formData.shortDescription;
    }
    if (step === 2) {
      return (
        formData.description && formData.targetAmount > 0 && formData.deadline
      );
    }
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Mock project creation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, send to backend API
      // const response = await fetch('/api/projects', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });

      router.push("/founder/dashboard?status=created");
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedLayout>
      <div className="flex flex-col min-h-screen">
        <DashboardHeader />

        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <Link
              href="/founder/dashboard"
              className="flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft size={20} />
              Quay lại
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">
                Tạo dự án mới
              </h1>
              <p className="mt-2 text-muted-foreground">Bước {step} của 2</p>
            </div>

            <Card className="p-8">
              {step === 1 ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    Thông tin cơ bản
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tên dự án *
                    </label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Ví dụ: Hệ thống tưới tiêu thông minh"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Danh mục *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mô tả ngắn *
                    </label>
                    <textarea
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleChange}
                      placeholder="Mô tả dự án trong 1-2 câu (tối đa 160 ký tự)"
                      maxLength={160}
                      rows={3}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      {formData.shortDescription.length}/160
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-transparent"
                      asChild
                    >
                      <Link href="/founder/dashboard">Hủy</Link>
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={() => validateStep() && setStep(2)}
                    >
                      Tiếp theo
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    Chi tiết dự án
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mô tả chi tiết *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Mô tả chi tiết về dự án, đội ngũ, mục tiêu và lý do kêu gọi vốn..."
                      rows={6}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mục tiêu gây quỹ (₫) *
                      </label>
                      <Input
                        name="targetAmount"
                        type="number"
                        min="1000"
                        value={formData.targetAmount}
                        onChange={handleChange}
                        placeholder="50000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Hạn chót *
                      </label>
                      <Input
                        name="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      URL Video YouTube (tuỳ chọn)
                    </label>
                    <Input
                      name="videoUrl"
                      value={formData.videoUrl}
                      onChange={handleChange}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-transparent"
                      onClick={() => setStep(1)}
                    >
                      Quay lại
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={handleSubmit}
                      disabled={!validateStep() || loading}
                    >
                      {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {loading ? "Đang tạo..." : "Tạo dự án"}
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Info Box */}
            <Card className="mt-8 p-6 bg-secondary/5">
              <h3 className="font-semibold text-foreground mb-2">Lưu ý:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Dự án của bạn sẽ được gửi để duyệt trong 5-7 ngày</li>
                <li>✓ Bạn có thể chỉnh sửa dự án trước khi được duyệt</li>
                <li>✓ Mỗi người dùng được tạo tối đa 2 dự án</li>
                <li>✓ Vui lòng cung cấp thông tin chính xác và đầy đủ</li>
              </ul>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedLayout>
  );
}
