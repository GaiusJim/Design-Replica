import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

const DROPBOX_LINK = "https://www.dropbox.com/request/AL0zPELJMiQAWQL5HJ6x";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const fileInput = (e.currentTarget.elements.namedItem("document") as HTMLInputElement);
    const files = fileInput?.files;

    // If no file is uploaded or file size exceeds 5MB, also open Dropbox link
    if (!files || files.length === 0 || files[0].size > MAX_FILE_SIZE) {
      window.open(DROPBOX_LINK, "_blank");
    }

    // Form still submits normally to FormSubmit.co
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

            <div className="pt-4 pb-2 text-xs italic text-muted-foreground">
              To understand how your data and information are used, check my <Link href="/privacy-policy" className="font-bold text-foreground hover:underline">privacy policy</Link>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">What You'll Receive</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>2-page sample edit</li>
                <li>A full quote in under 24 hours</li>
                <li>Work begins immediately after confirmation</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
