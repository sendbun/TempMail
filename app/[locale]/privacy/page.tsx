import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {useTranslations} from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('Privacy')
  return (
    <div className="container max-w-4xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{t('Title')}</CardTitle>
          <p className="text-muted-foreground">{t('LastUpdated', {date: 'January 2024'})}</p>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At TempMail, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our temporary email service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Temporary Email Addresses</h3>
                <p>
                  We generate temporary email addresses for your use. These addresses are created randomly and are not 
                  linked to your personal identity unless you choose to provide additional information.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Email Messages</h3>
                <p>
                  We temporarily store emails sent to your temporary email addresses. These messages are automatically 
                  deleted after a specified period (typically 24 hours) and are not permanently stored on our servers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Usage Data</h3>
                <p>
                  We may collect anonymous usage statistics such as the number of emails generated, domains used, 
                  and general service usage patterns. This data does not contain personal information.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Technical Information</h3>
                <p>
                  We may collect technical information including IP addresses, browser type, operating system, 
                  and other standard web analytics data to improve our service and ensure security.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Service Provision</h3>
                <p>
                  We use the collected information to provide our temporary email service, including generating 
                  email addresses, receiving and displaying emails, and managing your email account.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Service Improvement</h3>
                <p>
                  Anonymous usage data helps us improve our service, fix technical issues, and develop new features 
                  to enhance user experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Security</h3>
                <p>
                  We use technical information to detect and prevent abuse, fraud, and security threats to protect 
                  our service and users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Temporary Email Addresses</h3>
                <p>
                  Temporary email addresses are automatically deleted after 24 hours of inactivity or when you 
                  manually delete them.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Email Messages</h3>
                <p>
                  Emails received at temporary addresses are automatically deleted after 24 hours. We do not 
                  permanently store any email content.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Usage Data</h3>
                <p>
                  Anonymous usage statistics may be retained for up to 12 months for service improvement purposes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your data against 
              unauthorized access, alteration, disclosure, or destruction. Our security measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure server infrastructure</li>
              <li>Automatic data deletion policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, hosting, and other operational purposes. These services 
              are bound by their own privacy policies and data protection standards. We do not sell, trade, or 
              otherwise transfer your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Access and Control</h3>
                <p>
                  You have the right to access, modify, or delete your temporary email addresses and associated data 
                  at any time through our service interface.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Data Portability</h3>
                <p>
                  You can export your email data in standard formats for your personal use or transfer to other services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Opt-Out</h3>
                <p>
                  You can opt out of non-essential data collection and analytics while still using our core service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify users of any material changes by posting the updated policy on our website and updating 
              the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium">TempMail Privacy Team</p>
              <p>Email: privacy@tempmail.org</p>
              <p>Website: https://tempmail.org</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Legal Basis</h2>
            <p>
              This Privacy Policy is provided in compliance with applicable data protection laws, including the 
              General Data Protection Regulation (GDPR) and other relevant privacy regulations. Your use of our 
              service constitutes acceptance of this Privacy Policy.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
