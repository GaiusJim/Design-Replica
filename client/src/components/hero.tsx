import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Academic Editing Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Hi, I'm Gaiusjimedits
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              An Academic Copyeditor For Graduate Students.
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              I help graduate students present their research with clarity and confidence. From structural coherence to the finest grammatical details.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-background">
                View Portfolio
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto border-8 border-white">
              {/* Placeholder for the user's image */}
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <img 
                  src="https://modern-landing--gaiusjim5.replit.app/assets/picture_1765931800188-cE0QkijY.png" 
                  alt="Gaius Jim"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60";
                  }}
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full -z-10 blur-xl opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full -z-10 blur-xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
