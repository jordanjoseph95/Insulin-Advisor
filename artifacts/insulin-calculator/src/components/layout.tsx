import { Link, useLocation } from "wouter";
import { Activity, History, Settings } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Calculator", icon: Activity },
    { href: "/history", label: "History", icon: History },
    { href: "/profile", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <header className="sticky top-0 z-10 w-full border-b bg-card/80 backdrop-blur-md">
        <div className="container max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-medium text-primary flex items-center gap-2">
            <Activity className="h-5 w-5" />
            <span>Insulin Dose</span>
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-md mx-auto px-4 py-6 pb-24">
        {children}
      </main>

      <nav className="fixed bottom-0 w-full border-t bg-card/95 backdrop-blur-md pb-safe">
        <div className="container max-w-md mx-auto px-4 h-16 flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = location === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "stroke-2" : "stroke-[1.5]"}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
