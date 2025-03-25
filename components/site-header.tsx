import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Daikoku</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/spaces" className="transition-colors hover:text-foreground/80">
              スペース
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80">
              料金
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              施設案内
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/login">
              <Button variant="ghost">ログイン</Button>
            </Link>
            <Link href="/register">
              <Button>会員登録</Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}