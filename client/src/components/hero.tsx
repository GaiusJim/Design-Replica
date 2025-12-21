import { motion } from "framer-motion";
import heroImage from "@assets/picture_1765954980181.png";

export function Hero() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6 md:mb-8 relative"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto bg-muted">
              <img 
                src={heroImage}
                alt="Gaius Jim"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2 sm:space-y-3 md:space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-primary leading-tight">
              Hi, I'm <span className="font-bold">Gaius Jim</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-light px-2">
              An Academic Copyeditor For Graduate Students.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
