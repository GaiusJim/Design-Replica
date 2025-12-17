import { Sidebar } from "@/components/sidebar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Sidebar />
      <div className="lg:pl-64 pt-16 lg:pt-0">
        <div className="container mx-auto px-4 py-12 md:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Privacy & Data Handling Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 2025</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
              <p>
                I am Gaius Jim, an independent academic copyeditor. I respect your privacy and the hard work you put into your research. This policy outlines exactly how I handle your personal information and uploaded documents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. Data Collection</h2>
              <p>
                I collect your name, email address, and manuscript files solely for the purpose of providing my editing services to you. I do not collect unnecessary personal data, and I do not use cookies for third-party tracking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Confidentiality & Intellectual Property</h2>
              <p>
                Your work is 100% your intellectual property. I do not claim any ownership rights over your documents. I strictly adhere to a non-disclosure policy: I never share, sell, publish, or distribute your content to any third parties or public databases.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Data Retention Policy</h2>
              <p>
                To ensure your long-term privacy, I practice strict data hygiene. All client documents and edited files are permanently deleted from my local and cloud storage 30 days after I deliver the final edit to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Security Measures</h2>
              <p>
                I prioritize the security of your research. Your documents are securely collected and stored using Netlify. I utilize Netlify’s encrypted storage to ensure your files remain private and are accessible only to me.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">6. Opt-Out & Third-Party Advertising</h2>
              <p className="mb-4">
                I value your control over your data. You have the right to opt out of data collection and targeted advertising at any time.
              </p>
              <p className="mb-4">
                <strong>Marketing Communications:</strong> You may unsubscribe from our emails by replying "Unsubscribe" or contacting me directly.
              </p>
              <p className="mb-4">
                <strong>Universal Advertising Opt-Out:</strong> I may work with third-party advertising partners (such as Microsoft, Google, or Meta) to show you relevant ads. You can opt out of personalized advertising across all major platforms using these industry-standard tools:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Network Advertising Initiative (NAI): <a href="http://optout.networkadvertising.org" className="text-primary hover:underline">http://optout.networkadvertising.org</a></li>
                <li>Digital Advertising Alliance (DAA): <a href="http://optout.aboutads.info" className="text-primary hover:underline">http://optout.aboutads.info</a></li>
              </ul>
              <p className="mb-2"><strong>Platform-Specific Opt-Outs:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Microsoft: <a href="https://account.microsoft.com/privacy/ad-settings" className="text-primary hover:underline">https://account.microsoft.com/privacy/ad-settings</a></li>
                <li>Google: <a href="https://adssettings.google.com" className="text-primary hover:underline">https://adssettings.google.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">7. Contact Me</h2>
              <p>
                If you have any questions or concerns regarding your data, please contact me directly:
                <br />
                Email: <a href="mailto:gaiusjimedits@gmail.com" className="font-bold text-primary hover:underline">gaiusjimedits@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
