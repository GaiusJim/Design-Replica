import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" 
                alt="Gaius Jim"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/png?text=GJ";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary">
              Hi, I'm <span className="font-bold">Gaius Jim</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              An Academic Copyeditor For Graduate Students.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
