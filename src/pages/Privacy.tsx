import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Personal Information:</strong> We collect information you provide directly, including:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Name, email address, phone number</li>
                    <li>Project details and requirements</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication records and correspondence</li>
                  </ul>
                  <p><strong>Automatically Collected Information:</strong></p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Website usage data and analytics</li>
                    <li>IP address, browser type, and device information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use collected information to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Provide and deliver our web development services</li>
                    <li>Process payments and manage billing</li>
                    <li>Communicate about projects and support</li>
                    <li>Improve our services and website functionality</li>
                    <li>Send relevant updates and marketing communications (with consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We do not sell, trade, or rent your personal information. We may share information with:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in service delivery (hosting, payment processing, analytics)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with merger, acquisition, or sale of assets</li>
                  </ul>
                  <p>All third-party providers are required to maintain appropriate security measures and use information only for specified purposes.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">4. Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure data storage and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                  </ul>
                  <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">5. Cookies and Tracking</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Provide relevant content and advertisements</li>
                  </ul>
                  <p>You can control cookie preferences through your browser settings, though this may affect website functionality.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">6. Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability where applicable</li>
                  </ul>
                  <p>To exercise these rights, contact us at admin@tshiditech.co.za</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain personal information for as long as necessary to provide services and fulfill legal obligations. 
                  Project-related information is typically retained for 7 years for tax and legal purposes. 
                  Marketing information is retained until you opt-out or request deletion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. 
                  We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to children under 18. We do not knowingly collect personal information from children. 
                  If we become aware of such collection, we will take steps to delete the information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">10. Policy Changes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy periodically. Changes will be posted on this page with an updated date. 
                  Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-accent mb-4">11. Contact Us</h2>
                <div className="text-muted-foreground">
                  <p>For questions about this privacy policy:</p>
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

export default Privacy;