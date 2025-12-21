import { useState } from "react";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { ContactForm } from "@/components/contact";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [zoom, setZoom] = useState(100);

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom(prev => {
      const newZoom = direction === 'in' ? prev + 10 : prev - 10;
      return Math.max(70, Math.min(130, newZoom));
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Horizontal Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-auto bg-background border-b z-50 px-3 py-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="font-serif font-bold text-primary text-sm">Gaiusjimedits</div>
          <nav className="flex items-center gap-1 flex-wrap justify-center flex-1">
            <a href="/#services" className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">Services</a>
            <a href="/#why-choose" className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">Why Choose Me</a>
            <a href="/#comparison" className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">Sample Edit</a>
            <a href="/#contact" className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">Document Upload</a>
            <a href="/#portfolio" className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">Portfolio</a>
            <a href="/#footer" className="text-xs px-2 py-1 rounded text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">Contact Info</a>
          </nav>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button variant="ghost" size="icon" onClick={() => handleZoom('out')} className="h-8 w-8" title="Zoom out">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-xs w-8 text-center text-muted-foreground">{zoom}%</span>
            <Button variant="ghost" size="icon" onClick={() => handleZoom('in')} className="h-8 w-8" title="Zoom in">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content with Zoom */}
      <main 
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'top center',
          marginTop: '3.5rem',
        }}
        className="origin-top overflow-x-hidden"
      >
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="why-choose">
          <WhyChoose />
        </div>
        <div id="comparison">
          <Comparison />
        </div>
        <ContactForm />
        <Portfolio />
        <Footer />
        <CookieBanner />
      </main>
    </div>
  );
}
