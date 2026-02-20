import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight, ShieldCheck, CreditCard, Clock, CheckCircle2, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FAQ_DATA = [
  {
    category: "Services & Scope",
    icon: HelpCircle,
    items: [
      {
        question: "What types of documents do you edit?",
        answer: "I edit graduate-level academic documents including theses, dissertations, journal articles, research papers, proposals, and conference manuscripts."
      },
      {
        question: "What is the difference between proofreading and structural editing?",
        answer: "Proofreading focuses on grammar, spelling, punctuation, and surface-level corrections. Structural editing addresses clarity, flow, paragraph organization, argument development, and overall coherence."
      },
      {
        question: "Do you check references and citations?",
        answer: "Yes. I review citation formatting and consistency according to the required style guide. However, I do not verify the accuracy of source content."
      },
      {
        question: "Do you help with formatting (APA, MLA, Chicago, etc.)?",
        answer: "Yes. Formatting services are available for every editing service."
      },
      {
        question: "Do you rewrite or paraphrase content?",
        answer: "No. I refine clarity and expression but do not rewrite sections to change authorship or intellectual contribution."
      },
      {
        question: "Do you provide developmental or content writing support?",
        answer: "I provide structural feedback and clarity improvements, but I do not generate new content or write sections on behalf of clients."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: CreditCard,
    items: [
      {
        question: "How is pricing calculated?",
        answer: "Pricing is based on word count and the level of editing required. A custom quote is provided after reviewing your document."
      },
      {
        question: "Do you offer discounts for long documents?",
        answer: "Longer manuscripts may qualify for adjusted pricing. This is determined during the quoting process."
      },
      {
        question: "Is payment required upfront?",
        answer: "Payment details are shared in your quote. Work begins after confirmation of the agreed terms."
      },
      {
        question: "What payment methods do you accept?",
        answer: "Accepted payment methods are outlined during the invoicing process."
      },
      {
        question: "Do you offer refunds?",
        answer: "If concerns arise, they are addressed promptly. The goal is client satisfaction through transparent communication."
      }
    ]
  },
  {
    category: "Turnaround & Process",
    icon: Clock,
    items: [
      {
        question: "How long does editing take?",
        answer: "Turnaround depends on length and complexity. A delivery timeline is provided within 24 hours of submission."
      },
      {
        question: "Do you offer urgent or express editing?",
        answer: "Urgent deadlines may be accommodated depending on availability."
      },
      {
        question: "How do I submit my document?",
        answer: "Documents can be uploaded directly through the submission form on the website."
      },
      {
        question: "What file format should I use?",
        answer: "Microsoft Word (.doc or .docx) is preferred to allow tracked changes."
      },
      {
        question: "How will I receive the edited document?",
        answer: "You will receive both a tracked-changes version and a clean version ready for submission."
      },
      {
        question: "Can I ask questions after delivery?",
        answer: "Yes. Clarifications regarding edits are welcome."
      }
    ]
  },
  {
    category: "Confidentiality & Ethics",
    icon: ShieldCheck,
    items: [
      {
        question: "Is my work confidential?",
        answer: "Yes. All documents are handled with strict confidentiality."
      },
      {
        question: "Do you sign NDAs?",
        answer: "Non-disclosure agreements can be discussed if required."
      },
      {
        question: "Is using an editor considered plagiarism?",
        answer: "No. Editing for clarity and correctness does not constitute plagiarism when the intellectual content remains yours."
      },
      {
        question: "Will my supervisor know I used an editor?",
        answer: "That depends on your institution’s policies. Many universities permit language editing support."
      },
      {
        question: "Do you write papers for students?",
        answer: "No. I do not write academic papers or contribute original research content."
      }
    ]
  },
  {
    category: "Results & Expectations",
    icon: CheckCircle2,
    items: [
      {
        question: "Do you guarantee acceptance or publication?",
        answer: "I can't guarantee acceptance. However, professional editing improves clarity, structure, and overall presentation."
      },
      {
        question: "How does editing improve my chances of publication?",
        answer: "Clear, well-structured writing allows reviewers and examiners to focus on the quality of your research rather than language issues."
      },
      {
        question: "Do you work with non-native English speakers?",
        answer: "Yes. Many clients are international graduate students seeking to strengthen academic expression."
      },
      {
        question: "What makes your service different?",
        answer: "The service is personalized, academically focused, and tailored specifically for graduate-level research writing."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              Complete FAQ
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Comprehensive answers to help you navigate your academic editing journey.
            </motion.p>
          </div>

          <div className="space-y-12">
            {FAQ_DATA.map((section, sIdx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * sIdx }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
                </div>

                <div className="grid gap-4">
                  {section.items.map((item, iIdx) => {
                    const id = `${sIdx}-${iIdx}`;
                    const isOpen = openIndex === id;

                    return (
                      <Card 
                        key={id}
                        className={`overflow-hidden transition-all duration-200 border-primary/10 ${isOpen ? 'ring-1 ring-primary/20 bg-primary/5' : 'hover:bg-accent/50'}`}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : id)}
                          className="w-full p-5 flex items-center justify-between text-left gap-4"
                        >
                          <span className="font-semibold text-lg">{item.question}</span>
                          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-8 rounded-2xl bg-primary text-primary-foreground text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">
              If you couldn't find the answer you were looking for, I'm here to help. Reach out directly for a personalized response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact" onClick={() => window.location.href='/#contact'}>
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                <button onClick={() => (window as any).tidioChatApi?.open()}>
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat with Me
                </button>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
