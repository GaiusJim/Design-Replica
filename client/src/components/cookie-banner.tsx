import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-12 sm:bottom-0 left-0 right-0 z-[100] p-4 lg:pl-72" // Increased bottom margin significantly on mobile to clear widgets
        >
          <div className="container mx-auto max-w-4xl bg-[#1A2B48] border border-white/10 text-primary-foreground p-4 rounded-lg shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">
              This website uses cookies to ensure you get the best experience.
            </p>
            <div className="flex items-center gap-2">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={acceptCookies}
                className="whitespace-nowrap"
              >
                Accept
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsVisible(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
