import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" asChild className="mr-4">
              <a href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using TshidiTech's services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TshidiTech provides web development services including but not limited to:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Website design and development</li>
                  <li>E-commerce solutions</li>
                  <li>Mobile app prototypes and development</li>
                  <li>Chatbot development and AI integration</li>
                  <li>Webflow development</li>
                  <li>SEO optimization services</li>
                  <li>Website hosting and maintenance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">3. Payment Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Payment Schedule:</strong> Full payment is required upfront for all projects. For established clients or projects over R30,000, we may arrange a 50% deposit option subject to approval.</p>
                  <p><strong>Payment Methods:</strong> We accept bank transfers, credit/debit cards, and PayFast payments.</p>
                  <p><strong>Project Initiation:</strong> Work commences only after full payment or approved deposit is received.</p>
                  <p><strong>Late Payments:</strong> Any overdue payments may result in project suspension and additional fees.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">4. Refund Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We generally do not offer refunds once work has commenced. However, refunds may be considered in the following circumstances:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Non-delivery within the agreed timeline without valid justification</li>
                    <li>Major scope changes initiated by TshidiTech</li>
                    <li>Technical impossibility of stated requirements (determined after thorough assessment)</li>
                    <li>Failure to meet agreed specifications due to our oversight</li>
                  </ul>
                  <p>All refund requests are reviewed on a case-by-case basis and must be submitted in writing within 30 days of the issue.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">5. Project Timeline & Revisions</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Timelines:</strong> Project timelines are estimates and may vary based on client responsiveness, content provision, and project complexity.</p>
                  <p><strong>Revision Rounds:</strong> All packages include two structured revision rounds. Additional revisions are billed at R450 per hour.</p>
                  <p><strong>Client Responsibilities:</strong> Timely provision of content, feedback, and approvals is essential for project completion within estimated timelines.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">6. Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Ownership:</strong> Upon full payment, clients own the final delivered work. TshidiTech retains the right to showcase completed projects in our portfolio.</p>
                  <p><strong>Third-Party Assets:</strong> Any third-party assets (fonts, images, plugins) may require separate licensing by the client.</p>
                  <p><strong>Code Ownership:</strong> Custom code developed specifically for your project becomes your property upon full payment.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">7. Hosting & Maintenance</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Included Hosting:</strong> Where specified, one year of hosting is included in the package price.</p>
                  <p><strong>Ongoing Maintenance:</strong> Maintenance retainers are available from R2,000/month for websites and R4,000/month for chatbots.</p>
                  <p><strong>Third-Party Services:</strong> Some services may require ongoing subscriptions (e.g., Webflow, Shopify) which are the client's responsibility.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TshidiTech's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages. 
                  While we strive for excellence, we cannot guarantee specific business outcomes from our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice. Upon termination, client pays for work completed to date. 
                  TshidiTech reserves the right to terminate services for non-payment or breach of terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">10. Contact Information</h2>
                <div className="text-muted-foreground">
                  <p>For questions about these terms:</p>
                  <p><strong>Email:</strong> admin@tshiditech.co.za</p>
                  <p><strong>Phone:</strong> +27 81 661 7013</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;