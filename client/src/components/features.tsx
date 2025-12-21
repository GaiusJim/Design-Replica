import { motion } from "framer-motion";
import { Clock, DollarSign, Calendar, RefreshCw, Award, FileCheck, XCircle } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Budget-friendly",
    description: "Competitive pricing designed for graduate students."
  },
  {
    icon: Clock,
    title: "Fast turnaround time",
    description: "Prompt delivery to meet your submission deadlines."
  },
  {
    icon: Calendar,
    title: "Flexible working hours",
    description: "Adaptable scheduling to accommodate your project timeline."
  },
  {
    icon: RefreshCw,
    title: "Revisions included",
    description: "Ensures strict compliance with your university's style guide."
  },
  {
    icon: Award,
    title: "Experienced",
    description: "Specialized in handling long research documents and dissertations."
  },
  {
    icon: FileCheck,
    title: "Proofreading & Formatting",
    description: "Comprehensive service including final polish and layout formatting."
  }
];

const noNos = [
  "Write chapters",
  "Rewrite your work",
  "Do your research",
  "Add content",
  "Paraphrase to bypass plagiarism detectors",
  "Create new arguments"
];

export function WhyChoose() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 md:mb-8">Why Choose My Service?</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-primary flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm h-fit">
            <h3 className="text-xl font-bold text-primary mb-4">Ethical Editing Standards</h3>
            <p className="text-sm text-muted-foreground mb-6">
              I adhere strictly to academic integrity guidelines. I <span className="font-bold text-destructive">do not</span>:
            </p>
            <ul className="space-y-3">
              {noNos.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
