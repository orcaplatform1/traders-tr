"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 15, 2026"
      intro="This policy explains what information we collect when you interact with us through prizoma.com, why and how we use it, who we share it with, and your rights. At Prizoma GmbH, we only collect information we genuinely need, and we always limit it to a specific, clear purpose."
      sections={[
        {
          id: "veri-sorumlusu",
          title: "Data Controller",
          content: (
            <p>
              Under this policy, your personal data is processed by Prizoma GmbH as the data controller. For all questions and requests regarding this policy, you can reach us through our{" "}
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                contact page
              </Link>.
            </p>
          ),
        },
        {
          id: "kapsam",
          title: "Scope",
          content: (
            <>
              <p>
                This policy applies only to the prizoma.com domain and pages under it. Wolf Club, KriptoBeyan, and Zesta Art&amp;Design are independent brands; they apply their own privacy policies on their respective platforms. For those pages, we recommend referring to the privacy text on that brand&apos;s own site.
              </p>
              <p>
                prizoma.com is not an e-commerce or membership platform; it does not create accounts, accept payments, or conduct cookie-based ad tracking. The only mechanism that collects personal data on the site is the contact form.
              </p>
            </>
          ),
        },
        {
          id: "topladigimiz-bilgiler",
          title: "Information We Collect",
          content: (
            <>
              <p>
                <strong className="text-foreground">Information you share via the contact form:</strong>{" "}
                full name, email address, company name (optional), message subject, your request category (partnership, venture, press, or general), and message content. This information is collected only when you fill in and submit the form, at your own initiative.
              </p>
              <p>
                <strong className="text-foreground">Technical data collected automatically:</strong>{" "}
                our servers maintain standard web server logs for security and fault detection purposes (IP address, browser information, request time, page requested). These records are not processed to directly target individuals and are not used for advertising or marketing purposes.
              </p>
              <p>
                No third-party analytics or ad tracking tools (e.g., Google Analytics, Meta Pixel) are currently in use on the site. If this changes, this page and the{" "}
                <Link href="/cookie-policy" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  Cookie Policy
                </Link>{" "}
                will be updated and announced.
              </p>
            </>
          ),
        },
        {
          id: "kullanim-amaci",
          title: "How We Use Your Information",
          content: (
            <>
              <p>We use the information we collect only for the following purposes:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>To evaluate the request you submitted via the contact form and get back to you,</li>
                <li>To route partnership, venture, or press requests to the appropriate team,</li>
                <li>To ensure the security of the site and prevent misuse and spam,</li>
                <li>To fulfill a legal obligation (such as providing information to authorized authorities when required).</li>
              </ul>
              <p>
                We do not use your information to create profiles, make automated decisions, or build marketing lists.
              </p>
            </>
          ),
        },
        {
          id: "paylasim",
          title: "Information Sharing",
          content: (
            <>
              <p>
                We do not sell your personal data. Your data may be shared in limited circumstances only in the following situations:
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>
                  Infrastructure providers we use to operate the site (server hosting, database) — only to provide the technical service, without using the data on their own behalf,
                </li>
                <li>In case of a legal obligation, court order, or official authority request,</li>
                <li>In another situation where we have obtained your explicit consent.</li>
              </ul>
            </>
          ),
        },
        {
          id: "saklama-suresi",
          title: "Data Retention Period",
          content: (
            <p>
              We retain the information you provide via the contact form for a reasonable period to conclude your request and maintain any follow-up correspondence. Once your request is concluded and there is no legal retention obligation, your data is deleted or anonymized. You can request deletion at any time by{" "}
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                contacting us
              </Link>.
            </p>
          ),
        },
        {
          id: "guvenlik",
          title: "Data Security",
          content: (
            <>
              <p>
                prizoma.com serves all traffic over encrypted connections (HTTPS/TLS). Standard security measures are applied on the server side, including content security policy (CSP), headers blocking clickjacking, and MIME type validation.
              </p>
              <p>
                No system is one hundred percent risk-free; however, we protect your data with reasonable technical and administrative measures and limit access to only those who need to process this information.
              </p>
            </>
          ),
        },
        {
          id: "haklariniz",
          title: "Your Rights",
          content: (
            <p>
              You can find the full list of your rights regarding your personal data under the Swiss Federal Act on Data Protection (revFADP) on our{" "}
              <Link href="/data-protection" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                Data Protection Notice
              </Link>{" "}
              page. In summary, you have the right to learn whether your data is being processed, request information, request correction or deletion, and object to processing.
            </p>
          ),
        },
        {
          id: "cocuklarin-gizliligi",
          title: "Children's Privacy",
          content: (
            <p>
              prizoma.com does not provide services aimed at individuals under 18 years of age and does not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will delete it within a reasonable period.
            </p>
          ),
        },
        {
          id: "degisiklikler",
          title: "Policy Changes",
          content: (
            <p>
              We may update this policy in response to changes in our services or legal requirements. Significant changes will be published on this page along with the &quot;last updated&quot; date.
            </p>
          ),
        },
        {
          id: "iletisim",
          title: "Contact Us",
          content: (
            <p>
              For questions or requests regarding this policy, you can reach us by filling in the form on our{" "}
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                contact page
              </Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
