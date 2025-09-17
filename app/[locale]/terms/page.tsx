import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {useTranslations} from 'next-intl'

export default function TermsPage() {
  const t = useTranslations('Terms')
  return (
    <div className="container max-w-4xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{t('Title')}</CardTitle>
          <p className="text-muted-foreground">{t('LastUpdated', {date: 'January 2024'})}</p>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using TempMail's temporary email service, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              TempMail provides a temporary email service that allows users to generate disposable email addresses 
              for receiving emails. Our service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Generation of temporary email addresses</li>
              <li>Receiving and displaying emails</li>
              <li>Automatic email deletion after specified periods</li>
              <li>Web-based email interface</li>
              <li>Real-time email notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">3.1 Acceptable Use</h3>
                <p>
                  You agree to use our service only for lawful purposes and in accordance with these Terms. You are 
                  responsible for all activities that occur under your use of the service.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">3.2 Prohibited Activities</h3>
                <p>You agree not to use our service to:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Send spam, phishing emails, or other malicious content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for illegal or fraudulent activities</li>
                  <li>Overload or disrupt our servers or networks</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">3.3 Content Responsibility</h3>
                <p>
                  You are solely responsible for the content of emails you receive and any actions you take based on 
                  those emails. We do not monitor, review, or endorse the content of emails received through our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Limitations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">4.1 Temporary Nature</h3>
                <p>
                  Our service is designed for temporary use. Email addresses and messages are automatically deleted 
                  after a specified period (typically 24 hours). We do not guarantee permanent storage of any data.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">4.2 Service Availability</h3>
                <p>
                  We strive to maintain high service availability but do not guarantee uninterrupted access. The service 
                  may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">4.3 Data Loss</h3>
                <p>
                  We are not responsible for any data loss, including emails that may be lost due to automatic deletion, 
                  system failures, or other technical issues. Users should not rely on our service for critical or 
                  permanent data storage.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed by our 
              Privacy Policy, which is incorporated into these Terms by reference. By using our service, you consent 
              to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">6.1 Our Rights</h3>
                <p>
                  The TempMail service, including its design, functionality, and content, is owned by us and protected 
                  by intellectual property laws. You may not copy, modify, distribute, or create derivative works 
                  without our express written consent.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">6.2 Your Content</h3>
                <p>
                  You retain ownership of any content you create or send through our service. However, you grant us 
                  a limited license to process and display your emails as necessary to provide our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">7.1 Service "As Is"</h3>
                <p>
                  Our service is provided "as is" and "as available" without any warranties, express or implied. 
                  We disclaim all warranties, including but not limited to warranties of merchantability, fitness 
                  for a particular purpose, and non-infringement.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">7.2 No Guarantees</h3>
                <p>
                  We do not guarantee that our service will be error-free, secure, or uninterrupted. We do not 
                  guarantee the accuracy, completeness, or usefulness of any information provided through our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TempMail shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, 
              or use, arising out of or relating to your use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless TempMail, its officers, directors, employees, and agents 
              from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from 
              your use of our service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">10.1 Termination by You</h3>
                <p>
                  You may stop using our service at any time. Your temporary email addresses and associated data 
                  will be automatically deleted according to our data retention policies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">10.2 Termination by Us</h3>
                <p>
                  We may terminate or suspend your access to our service immediately, without prior notice, for 
                  any reason, including violation of these Terms or for no reason at all.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">10.3 Effect of Termination</h3>
                <p>
                  Upon termination, your right to use our service will cease immediately, and all data associated 
                  with your account will be deleted in accordance with our data retention policies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
              which TempMail operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or our service shall be resolved through 
              binding arbitration in accordance with the rules of the relevant arbitration association, unless 
              otherwise required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
              limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain 
              in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes 
              by posting the updated Terms on our website and updating the "Last updated" date. Your continued 
              use of our service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium">TempMail Legal Team</p>
              <p>Email: legal@tempmail.org</p>
              <p>Website: https://tempmail.org</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
              TempMail regarding the use of our service and supersede all prior agreements and understandings.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
