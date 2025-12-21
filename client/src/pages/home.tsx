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
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Main Content */}
      <main 
        className="origin-top overflow-x-hidden"
        style={{
          paddingBottom: '6rem',
        }}
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
      <Sidebar />
    </div>
  );
}
