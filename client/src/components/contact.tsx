import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.target as HTMLFormElement;
    const formData = new FormData(myForm);

    fetch("https://formsubmit.co/gaiusjimedits@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch((error) => {
        console.error("Submission error:", error);
        alert("There was an error submitting your form. Please try again.");
      });
  };

  if (submitted) {
    return (
      <section className="py-20 bg-secondary/20" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-xl border text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">Thank you!</h2>
            <p className="text-lg text-muted-foreground">
              I have received your document and will reply shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
            id="contactForm"
            onSubmit={handleSubmit}
            className="space-y-6 overflow-visible"
            encType="multipart/form-data"
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
              <Input id="document" name="document" type="file" required className="cursor-pointer" />
              <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                <p>Max file size 10MB. For larger files, please send to my email: gaiusjimedits@gmail.com.</p>
              </div>
            </div>

            <Button type="submit" className="w-full size-lg text-lg">
              Get My Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
