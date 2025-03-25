import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Coffee, Monitor, Printer, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
              alt="Office Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container relative">
            <div className="flex min-h-[400px] flex-col justify-center py-20">
              <h1 className="max-w-[640px] text-4xl font-bold sm:text-5xl md:text-6xl">
                柔軟な料金プラン
              </h1>
              <p className="mt-4 max-w-[540px] text-lg text-muted-foreground">
                ビジネスの規模や目的に合わせて、最適なプランをお選びいただけます。
                すべてのプランで基本的な設備とサービスをご利用いただけます。
              </p>
            </div>
          </div>
        </section>

        {/* Monthly Plans */}
        <section className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">月額会員プラン</h2>
            <p className="mt-2 text-muted-foreground">
              定期的にご利用される方におすすめの月額プラン
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>ライトプラン</CardTitle>
                <CardDescription>週に1-2回程度の利用に最適</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">¥15,000</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>月40時間まで利用可能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>基本アメニティ利用可能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>会議室2時間/月無料</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/register">申し込む</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">人気プラン</Badge>
              </div>
              <CardHeader>
                <CardTitle>スタンダードプラン</CardTitle>
                <CardDescription>週3-4回程度の利用に最適</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">¥25,000</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>月80時間まで利用可能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>基本アメニティ利用可能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>会議室5時間/月無料</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>ロッカー無料</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/register">申し込む</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>プレミアムプラン</CardTitle>
                <CardDescription>毎日の利用に最適</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">¥45,000</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>時間無制限で利用可能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>基本アメニティ利用可能</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>会議室10時間/月無料</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>ロッカー無料</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>専用デスク利用可</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/register">申し込む</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Hourly Rates */}
        <section className="border-t bg-muted/40 py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold">時間利用料金</h2>
              <p className="mt-2 text-muted-foreground">
                必要な時に必要な分だけご利用いただける時間料金制
              </p>
            </div>

            <div className="mt-12 rounded-lg border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>スペースタイプ</TableHead>
                    <TableHead>料金（1時間あたり）</TableHead>
                    <TableHead>収容人数</TableHead>
                    <TableHead>特徴</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">オープンスペース</TableCell>
                    <TableCell>¥1,000</TableCell>
                    <TableCell>1名</TableCell>
                    <TableCell>フリーアドレス制、電源完備</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ブース席</TableCell>
                    <TableCell>¥1,500</TableCell>
                    <TableCell>1-2名</TableCell>
                    <TableCell>半個室型、集中作業向け</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">会議室（小）</TableCell>
                    <TableCell>¥3,000</TableCell>
                    <TableCell>4-6名</TableCell>
                    <TableCell>プロジェクター、ホワイトボード完備</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">会議室（大）</TableCell>
                    <TableCell>¥5,000</TableCell>
                    <TableCell>8-12名</TableCell>
                    <TableCell>TV会議システム、防音設備完備</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">基本料金に含まれるサービス</h2>
            <p className="mt-2 text-muted-foreground">
              すべてのプランで利用可能な基本サービス
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6">
              <Coffee className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">ドリンク</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                コーヒー、お茶等の飲み物が無料で楽しめます
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Printer className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">複合機</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                印刷は月20枚まで無料（超過分は実費）
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Monitor className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">モニター</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                外付けディスプレイの無料貸出（予約制）
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">コミュニティ</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                会員限定イベントへの参加権
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}