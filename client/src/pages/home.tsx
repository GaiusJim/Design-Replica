import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { ContactForm } from "@/components/contact";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { CookieBanner } from "@/components/cookie-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 lg:pl-64 flex flex-col pt-16 lg:pt-0 max-w-full overflow-x-hidden">
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
