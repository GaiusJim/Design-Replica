import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioImages = [
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20251216-134355_1765889926197_1765947051214-B0jfmvVc.jpg",
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20251216-135624_1765891109236_1765947051214-Be3lCJHS.jpg",
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20251216-140332_1765891220534_1765947051216-CSnJhN9a.jpg",
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20251216-140440_1765891259820_1765947051216-BuO4pWfH.jpg"
];

export function Portfolio() {
  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Portfolio Highlights</h2>
            <p className="text-muted-foreground">Recent work and content</p>
          </div>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://www.instagram.com/gaiusjimedits?igsh=bXNldGY1YmJkOGdm" target="_blank" rel="noopener noreferrer">
              View Full Portfolio <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioImages.map((src, index) => (
            <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img 
                src={src} 
                alt={`Portfolio Item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/400x600/png?text=Portfolio+${index+1}`;
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
