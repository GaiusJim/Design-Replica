import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Gaiusjimedits</h3>
            <p className="text-primary-foreground/80 max-w-sm">
              Helping graduate students present their research with clarity and confidence. Professional academic editing services you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <a href="mailto:gaiusjimedits@gmail.com" className="hover:text-white transition-colors">
                  gaiusjimedits@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>+234 912 147 8352</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>Port Harcourt, Nigeria</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Gaiusjimedits. All rights reserved.</p>
          <p>Designed with Replit</p>
        </div>
      </div>
    </footer>
  );
}
