import { Sidebar } from "@/components/sidebar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Sidebar />
      <div className="lg:pl-64 pt-16 lg:pt-0">
        <div className="container mx-auto px-4 py-12 md:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Terms of Service for Gaiusjimedits</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 2025</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
              <p>
                These Terms of Service (“Terms”) govern your use of the editing services provided by Gaiusjimedits, operated by Gaiusjim (“I,” “me,” or “the Service”). By sending your document(s) to me via email or Dropbox, you acknowledge that you have read, understood, and agreed to these Terms.
              </p>
              <p className="mt-2">
                I am an independent academic copyeditor who provides editing support for graduate-level academic documents. I do not write, create, or substantially generate academic content, as this violates academic integrity policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. Services Provided</h2>
              <p>I offer the following services:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Basic Copyediting</li>
                <li>Structural Copyediting</li>
                <li>Proofreading + Formatting</li>
              </ul>
              <p className="mt-2">
                These services include corrections to grammar, structure, clarity, coherence, formatting, and academic presentation. They do not include writing, rewriting, generating content, performing research, or contributing to academic work in ways that constitute misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Client Responsibilities</h2>
              <p>By submitting your document, you agree that:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>You have the rights or permission to share the content with me.</li>
                <li>The work you submit is your own and does not violate academic integrity standards.</li>
                <li>You will provide accurate instructions and deadlines.</li>
                <li>You will review the edited document before final submission to your institution.</li>
              </ul>
              <p className="mt-2">I reserve the right to decline work that violates academic ethics.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. File Submission & Delivery Method</h2>
              <p><strong>Submission of Files:</strong> Clients may send documents to me via Email or Dropbox.</p>
              <p className="mt-2"><strong>Return of Edited Files:</strong> The method for returning edited documents (email, Dropbox, or another mutually agreed method) will be decided between me and the client based on the needs of the project.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Revisions</h2>
              <p>
                I offer multiple revisions depending on the scope of the work and the agreement made with you at the start of the project. Revision timelines will be discussed and confirmed based on the project size and submission deadlines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">6. Payments</h2>
              <p>
                Payment terms are flexible and negotiated individually between me and the client. Payment schedules, deposits (if any), and final fees will be confirmed before editing begins. Work may begin once a mutual agreement on payment terms is reached.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">7. Privacy</h2>
              <p>
                Your personal data, files, and email are used solely to provide the services you request. For full details, refer to the <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a> section on my website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">8. Limitations of Liability</h2>
              <p>To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>I am not responsible for the academic evaluation of your work, including grades, acceptance, rejection, or institutional outcomes.</li>
                <li>I make no guarantees that edited documents will meet specific academic or publication requirements, although I adhere to professional editing standards.</li>
              </ul>
              <p className="mt-2">I am not liable for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Loss or corruption of files sent through third-party platforms (e.g., Dropbox).</li>
                <li>Delays caused by incomplete instructions, late client responses, or technical issues beyond my control.</li>
                <li>Any indirect, incidental, or consequential damages.</li>
              </ul>
              <p className="mt-2">Clients are responsible for reviewing the final document before submitting it to any academic institution or publisher.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">9. Intellectual Property</h2>
              <p>
                You retain ownership of all documents and content you submit. I claim no rights over your work. Edited documents are returned solely for your personal and academic use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">10. Communication and Contact</h2>
              <p>
                All communication and project submissions occur via: <a href="mailto:gaiusjimedits@gmail.com" className="font-bold text-primary hover:underline">gaiusjimedits@gmail.com</a>
              </p>
              <p className="mt-2">You may contact me at any time for questions, clarifications, or service requests.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">11. Acceptance of Terms</h2>
              <p>
                By sending your document, communicating with me regarding a project, or engaging my services, you agree to these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
