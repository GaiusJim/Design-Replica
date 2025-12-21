import { Link } from "wouter";
import { FileText, Upload, Instagram, Mail } from "lucide-react";

const navItems = [
  { label: "Services", href: "/#services", icon: FileText },
  { label: "Why Choose Me", href: "/#why-choose", icon: FileText },
  { label: "Sample Edit", href: "/#comparison", icon: FileText },
  { label: "Document Upload", href: "/#contact", icon: Upload },
  { label: "Portfolio", href: "/#portfolio", icon: Instagram },
  { label: "Contact Info", href: "/#footer", icon: Mail },
];

export function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 px-4 py-3 overflow-x-auto">
      <div className="flex items-center gap-4 min-w-max">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 font-serif font-bold text-primary text-sm">
          Gaiusjimedits
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 flex-shrink-0">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs px-3 py-1.5 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
