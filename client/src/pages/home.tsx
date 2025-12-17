import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { ContactForm } from "@/components/contact";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Services />
      <WhyChoose />
      <Comparison />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}
