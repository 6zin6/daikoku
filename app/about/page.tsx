import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Clock, Coffee, Printer, Wifi, Monitor, Phone, MapPin, Train, Car, ParkingMeter as Parking } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
              alt="Daikoku Facility"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container relative">
            <div className="flex min-h-[400px] flex-col justify-center py-20">
              <h1 className="max-w-[640px] text-4xl font-bold sm:text-5xl md:text-6xl">
                施設案内
              </h1>
              <p className="mt-4 max-w-[540px] text-lg text-muted-foreground">
                快適なワークスペースと充実した設備で、
                あなたの働き方をサポートします。
              </p>
            </div>
          </div>
        </section>

        {/* Facility Overview */}
        <section className="container py-16">
          <Tabs defaultValue="about" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="about">施設概要</TabsTrigger>
              <TabsTrigger value="amenities">設備・アメニティ</TabsTrigger>
              <TabsTrigger value="access">アクセス</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold">Daikokuについて</h2>
                  <p className="mt-4 text-muted-foreground">
                    Daikokuは、クリエイティブな仕事のための理想的な環境を提供するコワーキングスペースです。
                    オープンスペースから個室まで、様々なニーズに対応する柔軟なワークスペースを用意しています。
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">営業時間</h3>
                        <p className="text-sm text-muted-foreground">24時間年中無休</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">お問い合わせ</h3>
                        <p className="text-sm text-muted-foreground">03-XXXX-XXXX（平日 9:00-18:00）</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Office Space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-lg border bg-card">
                <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <h3 className="font-semibold">オープンスペース</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      開放的な空間で、フレキシブルに作業できるスペース
                    </p>
                    <p className="mt-2 text-sm font-semibold">¥1,000/時間〜</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">会議室</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      4〜12名様でご利用いただける会議室
                    </p>
                    <p className="mt-2 text-sm font-semibold">¥3,000/時間〜</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">個室オフィス</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      プライバシーを確保した集中作業向けの個室
                    </p>
                    <p className="mt-2 text-sm font-semibold">¥5,000/時間〜</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                  <Wifi className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">高速Wi-Fi</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    1Gbpsの高速インターネット完備。
                    セキュアな環境で快適に作業できます。
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <Coffee className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">ドリンクサービス</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    コーヒー、紅茶、ミネラルウォーターを
                    無料でご利用いただけます。
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <Printer className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">複合機</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    プリント、スキャン、コピーが可能な
                    複合機をご利用いただけます。
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <Monitor className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">モニター貸出</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    外付けディスプレイの貸出サービスを
                    ご用意しています。
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold">その他の設備</h3>
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>会議室設備</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li>プロジェクター</li>
                        <li>ホワイトボード</li>
                        <li>TV会議システム</li>
                        <li>防音設備</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>個室オフィス設備</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li>デスク・チェア</li>
                        <li>収納キャビネット</li>
                        <li>個別空調</li>
                        <li>セキュリティロック</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="access" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">アクセス</h2>
                    <p className="mt-2 text-muted-foreground">
                      便利な立地で、複数の交通手段からアクセス可能です。
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">所在地</h3>
                        <p className="text-sm text-muted-foreground">
                          〒XXX-XXXX
                          <br />
                          東京都千代田区XXX-XXX
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Train className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">電車でお越しの場合</h3>
                        <p className="text-sm text-muted-foreground">
                          東京メトロ銀座線「XXX駅」A2出口より徒歩3分
                          <br />
                          JR山手線「XXX駅」東口より徒歩7分
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Car className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">お車でお越しの場合</h3>
                        <p className="text-sm text-muted-foreground">
                          首都高速X号線「XXX出口」より5分
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Parking className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-semibold">駐車場</h3>
                        <p className="text-sm text-muted-foreground">
                          契約者専用駐車場あり（要事前予約）
                          <br />
                          近隣にコインパーキングあり
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full sm:w-auto">
                    Googleマップで見る
                  </Button>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Building Exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}