import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Coffee, Users, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Coworking Space"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          <div className="container relative">
            <div className="flex min-h-[600px] flex-col justify-center py-20">
              <h1 className="max-w-[640px] text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                クリエイティブな空間で、
                <span className="text-primary">新しい可能性</span>
                を。
              </h1>
              <p className="mt-4 max-w-[540px] text-lg text-muted-foreground">
                Daikokuは、あなたのワークスタイルに合わせた最適な環境を提供します。
                快適な空間で、生産性の高い時間をお過ごしください。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/spaces">
                  <Button size="lg" className="h-12 px-8">
                    スペースを見る
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    会員登録
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-8">
              <Wifi className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">高速Wi-Fi</h3>
              <p className="mt-2 text-muted-foreground">
                ストレスのない快適なインターネット環境を完備
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <Coffee className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">無料ドリンク</h3>
              <p className="mt-2 text-muted-foreground">
                コーヒー、お茶などの飲み物が無料で楽しめます
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <Calendar className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">24時間利用可能</h3>
              <p className="mt-2 text-muted-foreground">
                あなたの都合に合わせて、いつでも利用できます
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">コミュニティ</h3>
              <p className="mt-2 text-muted-foreground">
                様々な分野のプロフェッショナルとの出会いの場
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <Clock className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">柔軟な予約</h3>
              <p className="mt-2 text-muted-foreground">
                1時間単位での予約が可能で、急な利用にも対応
              </p>
            </div>
          </div>
        </section>

        {/* Spaces Preview Section */}
        <section className="border-t bg-muted/40 py-20">
          <div className="container">
            <h2 className="text-3xl font-bold">利用可能なスペース</h2>
            <p className="mt-2 text-muted-foreground">
              目的に応じて選べる多彩なワークスペース
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Open Space"
                  width={400}
                  height={300}
                  className="aspect-[4/3] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-semibold text-white">オープンスペース</h3>
                  <p className="mt-2 text-sm text-white/80">¥1,000/時間〜</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Meeting Room"
                  width={400}
                  height={300}
                  className="aspect-[4/3] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-semibold text-white">会議室</h3>
                  <p className="mt-2 text-sm text-white/80">¥3,000/時間〜</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Private Office"
                  width={400}
                  height={300}
                  className="aspect-[4/3] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-semibold text-white">個室オフィス</h3>
                  <p className="mt-2 text-sm text-white/80">¥5,000/時間〜</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}