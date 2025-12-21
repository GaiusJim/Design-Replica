import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

export function ContactForm() {

  return (
    <section className="py-20 bg-secondary/20" id="contact">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-2xl mx-auto bg-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl border overflow-visible">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">Document Upload</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Ready to submit? Fill out the form below.
            </p>
          </div>

          <form
            id="contactForm"
            action="https://formsubmit.co/gaiusjimedits@gmail.com"
            method="POST"
            target="_blank"
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
