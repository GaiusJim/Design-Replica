import { motion } from "framer-motion";
import { Check, Edit3, FileText, Layout } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Basic Copyedit",
    price: "From $0.03/word",
    icon: Edit3,
    features: [
      "Grammar & Punctuation",
      "Spelling & Typos",
      "Consistency Checks",
      "Basic Syntax Repair"
    ]
  },
  {
    title: "Structural Edit",
    price: "From $0.07/word",
    icon: Layout,
    features: [
      "All Basic Features",
      "Flow & Transition Checks",
      "Argument Logic Check",
      "Paragraph Structure",
      "Clarity Improvements"
    ]
  },
  {
    title: "Proof + Format",
    price: "From $0.025/word",
    icon: FileText,
    features: [
      "Final Polish Proofread",
      "Citation Formatting (APA, MLA)",
      "Reference List Check",
      "Layout Adjustments"
    ]
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services Offered</h2>
          <p className="text-muted-foreground">
            Comprehensive editing solutions tailored for academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary/80 mt-2">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
