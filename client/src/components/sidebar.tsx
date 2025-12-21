import { useState } from "react";
import { Link } from "wouter";
import { FileText, Upload, Instagram, Mail, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "/#services", icon: FileText },
  { label: "Why Choose Me", href: "/#why-choose", icon: FileText },
  { label: "Sample Edit", href: "/#comparison", icon: FileText },
  { label: "Document Upload", href: "/#contact", icon: Upload },
  { label: "Portfolio", href: "/#portfolio", icon: Instagram },
  { label: "Contact Info", href: "/#footer", icon: Mail },
];

export function Sidebar() {
  const [zoom, setZoom] = useState(100);

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom(prev => {
      const newZoom = direction === 'in' ? prev + 10 : prev - 10;
      return Math.max(70, Math.min(130, newZoom));
    });
  };

  return (
    <>
      {/* Horizontal Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-auto bg-background border-b z-50 px-3 py-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="font-serif font-bold text-primary text-sm">Gaiusjimedits</div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 flex-wrap justify-center flex-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleZoom('out')}
              className="h-8 w-8"
              title="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-xs w-8 text-center text-muted-foreground">
              {zoom}%
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleZoom('in')}
              className="h-8 w-8"
              title="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Zoom Container */}
      <div
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'top center',
          marginTop: '3.5rem',
        }}
      >
        {/* Content goes here - apply transform to body */}
      </div>
    </>
  );
}
