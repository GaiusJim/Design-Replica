import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, ChevronDown, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const DROPBOX_LINK = "https://www.dropbox.com/request/AL0zPELJMiQAWQL5HJ6x";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const FAQS = [
  {
    question: "How do I know which service is right for me?",
    answer: "If you’re unsure, submit your document for a quote. After reviewing it, I’ll recommend the most suitable editing option based on your needs."
  },
  {
    question: "Is using an editor allowed by universities?",
    answer: "Yes — most institutions allow editing for clarity, grammar, and formatting. I follow strict academic integrity standards and do not write, add content, or change authorship."
  },
  {
    question: "Do you edit theses, dissertations, and journal articles?",
    answer: "Yes. I work with graduate-level academic documents, including theses, dissertations, research papers, and journal manuscripts."
  },
  {
    question: "Do you guarantee acceptance or publication?",
    answer: "No editor can ethically guarantee acceptance. However, professional editing improves clarity, structure, and presentation — which strengthens your submission."
  },
  {
    question: "How long does editing take?",
    answer: "Turnaround time depends on the length and level of editing required. You’ll receive a full quote and delivery timeline within 24 hours of submission."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-primary/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground">{question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const fileInput = (e.currentTarget.elements.namedItem("document") as HTMLInputElement);
    const files = fileInput?.files;

    if (files && files.length > 0 && files[0].size > MAX_FILE_SIZE) {
      fileInput.value = ""; 
      window.open(DROPBOX_LINK, "_blank");
    }
    else if (!files || files.length === 0) {
      window.open(DROPBOX_LINK, "_blank");
    }
  };

  return (
    <section className="py-20 bg-secondary/20" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-xl border overflow-visible">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Document Upload</h2>
            <p className="text-muted-foreground">
              Ready to submit? Fill out the form below.
            </p>
          </div>

          <form
            ref={formRef}
            id="contactForm"
            action="https://formsubmit.co/gaiusjimedits@gmail.com"
            method="POST"
            className="space-y-6 overflow-visible"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required placeholder="Dr. John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" required placeholder="john@university.edu" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Required</Label>
              <Select name="service" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-card border border-input shadow-lg">
                  <SelectItem value="Structural Edit">Structural Edit</SelectItem>
                  <SelectItem value="Basic Copyedit">Basic Copyedit</SelectItem>
                  <SelectItem value="Proofreading + Formatting">Proofreading + Formatting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Word count, deadline, specific concerns..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="document">Upload Document</Label>
              <Input id="document" name="document" type="file" className="cursor-pointer" />
              <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                <p className="font-bold">Max file size 5MB. For larger files, you'll be redirected to Dropbox after submitting the form.</p>
              </div>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <Button type="submit" className="w-full size-lg text-lg">
              Get My Quote
            </Button>

            <div className="pt-4 pb-2 text-xs italic text-muted-foreground text-center">
              To understand how your data and information are used, check my <Link href="/privacy-policy" className="font-bold text-foreground hover:underline">privacy policy</Link>
            </div>

            <div className="pt-2">
              <h3 className="font-semibold text-foreground mb-3">What You'll Receive</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2-page sample edit
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  A full quote in under 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Work begins immediately after confirmation
                </li>
              </ul>
            </div>
          </form>

          {/* FAQ Section */}
          <div className="mt-16 pt-8 border-t border-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Have Questions Before Submitting?</h3>
              <p className="text-muted-foreground text-sm">
                Here are answers to the most common questions from graduate students.
              </p>
            </div>

            <div className="space-y-1">
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </div>

            <div className="mt-8 pt-6 text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-sm text-muted-foreground border border-primary/10">
                <span>
                  Still have questions? Click the chat icon to message me directly or view the <Link href="/faq" className="text-primary font-semibold hover:underline">full FAQ page</Link>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
