"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import {
  Calendar as CalendarIcon,
  Check,
  Clock,
  CreditCard,
  Users,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Booking = {
  id: string;
  startTime: string;
  endTime: string;
  status: string;
  totalPrice: number;
  user: {
    name: string;
    email: string;
    profile: {
      phone: string;
    };
  };
  space: {
    name: string;
  };
};

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [status, setStatus] = useState<string>("CONFIRMED");
  const [date, setDate] = useState<Date>(new Date());
  const { toast } = useToast();

  useEffect(() => {
    fetchBookings();
  }, [status, date]);

  const fetchBookings = async () => {
    try {
      const from = new Date(date);
      from.setHours(0, 0, 0, 0);
      const to = new Date(date);
      to.setHours(23, 59, 59, 999);

      const response = await fetch(
        `/api/admin/bookings?status=${status}&from=${from.toISOString()}&to=${to.toISOString()}`
      );
      if (!response.ok) throw new Error("Failed to fetch bookings");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast({
        title: "エラー",
        description: "予約情報の取得に失敗しました。",
        variant: "destructive",
      });
    }
  };

  const updateBookingStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch("/api/admin/bookings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update booking");

      toast({
        title: "更新完了",
        description: "予約状態を更新しました。",
      });

      fetchBookings();
    } catch (error) {
      console.error("Error updating booking:", error);
      toast({
        title: "エラー",
        description: "予約状態の更新に失敗しました。",
        variant: "destructive",
      });
    }
  };

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
  const confirmedBookings = bookings.filter((b) => b.status === "CONFIRMED").length;

  return (
    <main className="flex-1">
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">管理者ダッシュボード</h1>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">本日の予約数</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{confirmedBookings}件</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">売上</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥{totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="予約状態" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CONFIRMED">確定</SelectItem>
                <SelectItem value="PENDING">保留</SelectItem>
                <SelectItem value="CANCELLED">キャンセル</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[200px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: ja }) : <span>日付を選択</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  initialFocus
                  locale={ja}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="rounded-lg border">
            <div className="grid grid-cols-[1fr,2fr,2fr,1fr,1fr] gap-4 p-4 font-medium">
              <div>時間</div>
              <div>スペース</div>
              <div>利用者</div>
              <div>料金</div>
              <div>操作</div>
            </div>
            <div className="divide-y">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="grid grid-cols-[1fr,2fr,2fr,1fr,1fr] gap-4 p-4"
                >
                  <div className="text-sm">
                    {format(new Date(booking.startTime), "HH:mm")} -{" "}
                    {format(new Date(booking.endTime), "HH:mm")}
                  </div>
                  <div>
                    <div className="font-medium">{booking.space.name}</div>
                  </div>
                  <div>
                    <div className="font-medium">{booking.user.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {booking.user.email}
                    </div>
                  </div>
                  <div className="font-medium">
                    ¥{booking.totalPrice.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2">
                    {booking.status === "PENDING" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                          onClick={() => updateBookingStatus(booking.id, "CONFIRMED")}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                          onClick={() => updateBookingStatus(booking.id, "CANCELLED")}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}