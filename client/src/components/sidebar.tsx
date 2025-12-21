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

interface SidebarProps {
  zoom: number;
  onZoomChange: (zoom: number) => void;
}

export function Sidebar({ zoom, onZoomChange }: SidebarProps) {
  const handleZoom = (direction: 'in' | 'out') => {
    const newZoom = direction === 'in' ? zoom + 10 : zoom - 10;
    onZoomChange(Math.max(70, Math.min(130, newZoom)));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 px-4 py-3 overflow-x-auto">
      <div className="flex items-center justify-between gap-4 min-w-max">
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

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto border-l pl-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleZoom('out')}
            className="h-7 w-7"
            title="Zoom out"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>
          <span className="text-xs w-10 text-center text-muted-foreground">
            {zoom}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleZoom('in')}
            className="h-7 w-7"
            title="Zoom in"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
