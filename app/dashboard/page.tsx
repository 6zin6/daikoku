"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CreditCard, Users } from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setIsLoading(false);
    }
  }, [status, router]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">ダッシュボード</h1>
              <p className="mt-2 text-muted-foreground">
                ようこそ、{session?.user?.name || "ゲスト"}さん
              </p>
            </div>
            <Button asChild>
              <a href="/spaces">スペースを予約</a>
            </Button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">今月の利用時間</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5時間</div>
                <p className="text-xs text-muted-foreground">
                  先月比 +2.5時間
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">次回の予約</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3/25 13:00</div>
                <p className="text-xs text-muted-foreground">
                  会議室A（2時間）
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">利用料金</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥15,000</div>
                <p className="text-xs text-muted-foreground">
                  今月の利用料金
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">会員ステータス</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">スタンダード</div>
                <p className="text-xs text-muted-foreground">
                  月80時間まで利用可能
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>最近の利用履歴</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "2025/3/20",
                      time: "10:00-12:00",
                      space: "オープンスペース",
                      price: "¥2,000",
                    },
                    {
                      date: "2025/3/18",
                      time: "14:00-16:00",
                      space: "会議室B",
                      price: "¥6,000",
                    },
                    {
                      date: "2025/3/15",
                      time: "09:00-11:00",
                      space: "ブース席",
                      price: "¥3,000",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <p className="font-medium">{item.space}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.date} {item.time}
                        </p>
                      </div>
                      <p className="font-medium">{item.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>次回の予約</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "2025/3/25",
                      time: "13:00-15:00",
                      space: "会議室A",
                      price: "¥6,000",
                    },
                    {
                      date: "2025/3/28",
                      time: "10:00-12:00",
                      space: "オープンスペース",
                      price: "¥2,000",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <p className="font-medium">{item.space}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.date} {item.time}
                        </p>
                      </div>
                      <p className="font-medium">{item.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}