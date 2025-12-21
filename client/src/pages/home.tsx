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
    <div className="min-h-screen bg-background font-sans text-foreground flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col w-full">
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
