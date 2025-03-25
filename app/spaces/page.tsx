import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Check, Users, Monitor, Coffee, Wifi, Phone, Video, Lock } from "lucide-react";

export default function SpacesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
              alt="Coworking Space"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container relative">
            <div className="flex min-h-[400px] flex-col justify-center py-20">
              <h1 className="max-w-[640px] text-4xl font-bold sm:text-5xl md:text-6xl">
                あなたに最適な
                <br />
                ワークスペース
              </h1>
              <p className="mt-4 max-w-[540px] text-lg text-muted-foreground">
                目的や人数に合わせて選べる多様なスペース。
                快適な環境で、生産性の高い時間をお過ごしください。
              </p>
            </div>
          </div>
        </section>

        {/* Space Types */}
        <section className="container py-16">
          <Tabs defaultValue="open" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="open">オープンスペース</TabsTrigger>
              <TabsTrigger value="booth">ブース席</TabsTrigger>
              <TabsTrigger value="meeting">会議室</TabsTrigger>
              <TabsTrigger value="office">個室オフィス</TabsTrigger>
            </TabsList>

            <TabsContent value="open">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold">オープンスペース</h2>
                  <p className="mt-4 text-muted-foreground">
                    開放的な空間で、フレキシブルに作業できるスペース。
                    Wi-Fi、電源完備で、1時間からご利用いただけます。
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">収容人数</h3>
                        <p className="text-sm text-muted-foreground">1名/席</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Coffee className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">ドリンク</h3>
                        <p className="text-sm text-muted-foreground">無料サービス</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold">料金プラン</h3>
                    <div className="mt-2 space-y-2">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">時間利用</p>
                            <p className="text-sm text-muted-foreground">1時間からご利用可能</p>
                          </div>
                          <p className="text-lg font-bold">¥1,000/時間</p>
                        </div>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">1日利用</p>
                            <p className="text-sm text-muted-foreground">終日利用可能</p>
                          </div>
                          <p className="text-lg font-bold">¥5,000/日</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full sm:w-auto" asChild>
                    <Link href="/booking">予約する</Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                      alt="Open Space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <Wifi className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">高速Wi-Fi</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          1Gbpsの高速インターネット完備
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <Monitor className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">モニター</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          外付けディスプレイ貸出可能
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="booth">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold">ブース席</h2>
                  <p className="mt-4 text-muted-foreground">
                    パーティションで区切られた半個室型のスペース。
                    集中して作業したい方におすすめです。
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">収容人数</h3>
                        <p className="text-sm text-muted-foreground">1-2名/ブース</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Lock className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">セキュリティ</h3>
                        <p className="text-sm text-muted-foreground">施錠可能なブース</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold">料金プラン</h3>
                    <div className="mt-2 space-y-2">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">時間利用</p>
                            <p className="text-sm text-muted-foreground">2時間からご利用可能</p>
                          </div>
                          <p className="text-lg font-bold">¥1,500/時間</p>
                        </div>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">1日利用</p>
                            <p className="text-sm text-muted-foreground">終日利用可能</p>
                          </div>
                          <p className="text-lg font-bold">¥8,000/日</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full sm:w-auto" asChild>
                    <Link href="/booking">予約する</Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80"
                      alt="Booth Space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <Monitor className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">デュアルモニター</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          デュアルディスプレイ標準装備
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <Lock className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">セキュリティ</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          施錠可能な個人スペース
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="meeting">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold">会議室</h2>
                  <p className="mt-4 text-muted-foreground">
                    プロジェクターやTV会議システムを完備した会議室。
                    商談やミーティングに最適な環境です。
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">収容人数</h3>
                        <p className="text-sm text-muted-foreground">小会議室: 4-6名<br />大会議室: 8-12名</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Video className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">設備</h3>
                        <p className="text-sm text-muted-foreground">プロジェクター、TV会議システム完備</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold">料金プラン</h3>
                    <div className="mt-2 space-y-2">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">小会議室</p>
                            <p className="text-sm text-muted-foreground">4-6名用</p>
                          </div>
                          <p className="text-lg font-bold">¥3,000/時間</p>
                        </div>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">大会議室</p>
                            <p className="text-sm text-muted-foreground">8-12名用</p>
                          </div>
                          <p className="text-lg font-bold">¥5,000/時間</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full sm:w-auto" asChild>
                    <Link href="/booking">予約する</Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
                      alt="Meeting Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <Video className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">TV会議</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          高品質なオンライン会議が可能
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <Phone className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">防音設備</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          プライバシーを確保
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="office">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold">個室オフィス</h2>
                  <p className="mt-4 text-muted-foreground">
                    完全個室のプライベートオフィス。
                    チームでの作業や長期利用に最適です。
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">収容人数</h3>
                        <p className="text-sm text-muted-foreground">2-4名</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Lock className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">セキュリティ</h3>
                        <p className="text-sm text-muted-foreground">24時間利用可能、専用キー付き</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold">料金プラン</h3>
                    <div className="mt-2 space-y-2">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">月額契約</p>
                            <p className="text-sm text-muted-foreground">24時間利用可能</p>
                          </div>
                          <p className="text-lg font-bold">¥150,000/月〜</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full sm:w-auto" asChild>
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                      alt="Private Office"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <Lock className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">専用オフィス</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          24時間利用可能な個室
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <Users className="h-8 w-8 text-primary" />
                        <CardTitle className="mt-2">チーム向け</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          2-4名での利用に最適
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}