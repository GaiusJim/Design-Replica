import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, User, FileText, Upload, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Services", href: "/#services", icon: FileText },
  { label: "Why Choose Me", href: "/#why-choose", icon: User },
  { label: "Sample Edit", href: "/#comparison", icon: FileText },
  { label: "Document Upload", href: "/#contact", icon: Upload },
  { label: "Portfolio", href: "https://www.instagram.com/gaiusjimedits?igsh=bXNldGY1YmJkOGdm", icon: Instagram, external: true },
  { label: "Contact Info", href: "/#footer", icon: Mail },
];

export function Sidebar() {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    const Component = item.external ? "a" : "a";
    const props = item.external 
      ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
      : { href: item.href, onClick: () => setIsMobileOpen(false) };

    return (
      <Component
        {...props}
        className={cn(
          "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
          "hover:bg-primary/10 hover:text-primary",
          "text-muted-foreground"
        )}
      >
        <item.icon className="h-5 w-5" />
        {item.label}
      </Component>
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background/80 backdrop-blur-md z-50 flex items-center justify-between px-4">
        <span className="font-serif font-bold text-xl text-primary">Gaius Jim</span>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
            <div className="flex flex-col h-full bg-background border-r">
              <div className="p-6 border-b">
                <h2 className="font-serif font-bold text-2xl text-primary">Gaius Jim</h2>
                <p className="text-sm text-muted-foreground">Academic Copyeditor</p>
              </div>
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                  <NavLink key={item.label} item={item} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 flex-col border-r bg-background z-40">
        <div className="p-6 border-b">
          <Link href="/">
            <a className="block">
              <h2 className="font-serif font-bold text-2xl text-primary">Gaius Jim</h2>
              <p className="text-sm text-muted-foreground">Academic Copyeditor</p>
            </a>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>
        <div className="p-4 border-t text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Gaius Jim
        </div>
      </div>
    </>
  );
}
