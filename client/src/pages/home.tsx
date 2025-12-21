import { useState } from "react";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { ContactForm } from "@/components/contact";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Main Content with Zoom */}
      <main 
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'top center',
          paddingBottom: '6rem',
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

      {/* Horizontal Sidebar at Bottom */}
      <Sidebar zoom={zoom} onZoomChange={setZoom} />
    </div>
  );
}
