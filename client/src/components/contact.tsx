import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
import { useRef } from "react";

const DROPBOX_LINK = "https://www.dropbox.com/scl/fo/g6e8r4ncnhx85qriooiag/AJxjIQeq51uModEzE8w5WWM?rlkey=87loicummdnfjbw13n3b5g36e&st=abz1i78l&dl=0";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const fileInput = (e.currentTarget.elements.namedItem("document") as HTMLInputElement);
    const files = fileInput?.files;

    // If no file is uploaded or file size exceeds 5MB, redirect to Dropbox
    if (!files || files.length === 0 || files[0].size > MAX_FILE_SIZE) {
      e.preventDefault();
      window.location.href = DROPBOX_LINK;
      return;
    }

    // Otherwise, allow form submission normally
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

            <Button type="submit" className="w-full size-lg text-lg">
              Get My Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
