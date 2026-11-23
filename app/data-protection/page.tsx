"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

const LINK = "text-blue-400 underline underline-offset-4 hover:text-blue-300";

export default function DataProtectionPage() {
  return (
    <LegalPage
      title="Data Protection Notice"
      updated="November 23, 2026"
      intro="This notice explains how Prizoma GmbH processes personal data when you visit prizoma.com or contact us through it, in accordance with the Swiss Federal Act on Data Protection (revFADP / nDSG), which entered into force on 1 September 2023."
      sections={[
        {
          id: "controller",
          title: "Controller",
          content: (
            <p>
              The controller responsible for the processing of personal data described in this notice is Prizoma GmbH, Zug,
              Switzerland. For any question or request regarding data protection, you can reach us through our{" "}
              <Link href="/contact" className={LINK}>
                contact page
              </Link>
              .
            </p>
          ),
        },
        {
          id: "scope",
          title: "Scope and Legal Framework",
          content: (
            <>
              <p>
                This notice applies to the prizoma.com domain and the pages under it. Our processing of personal data is
                governed by the Swiss Federal Act on Data Protection (revFADP) and its implementing ordinance.
              </p>
              <p>
                prizoma.com is not an e-commerce or membership platform; it does not create accounts, accept payments or
                carry out cookie-based ad tracking. The only mechanism on the site that collects personal data you actively
                provide is the contact form.
              </p>
            </>
          ),
        },
        {
          id: "data-we-process",
          title: "Personal Data We Process",
          content: (
            <>
              <p>
                <strong className="font-medium">Contact form:</strong> full name, email address, company name (optional),
                message subject, request category (partnership, venture, press or general) and message content. This data is
                collected only when you fill in and submit the form.
              </p>
              <p>
                <strong className="font-medium">Server logs:</strong> our servers keep standard web server logs for security
                and fault detection (IP address, browser information, request time, page requested). These logs are not used
                to target individuals and are not used for advertising or marketing.
              </p>
              <p>
                <strong className="font-medium">Cookie preferences:</strong> your choice in the cookie banner is stored in
                your browser&apos;s local storage. No third-party analytics or advertising tools are currently in use. Details
                are set out in our{" "}
                <Link href="/cookie-policy" className={LINK}>
                  Cookie Policy
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          id: "purposes",
          title: "Purposes of Processing",
          content: (
            <>
              <p>We process personal data only for the following purposes:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>to review the request you submit via the contact form and respond to you,</li>
                <li>to route partnership, venture or press requests to the appropriate team,</li>
                <li>to keep the site secure and prevent misuse and spam,</li>
                <li>to comply with legal obligations.</li>
              </ul>
              <p>We do not use your data for profiling, automated individual decisions or marketing lists.</p>
            </>
          ),
        },
        {
          id: "disclosure",
          title: "Disclosure of Personal Data",
          content: (
            <>
              <p>We do not sell personal data. Personal data may only be disclosed in the following cases:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  to the infrastructure providers we use to operate the site (server hosting, database), solely to provide
                  the technical service and not for their own purposes,
                </li>
                <li>where we are legally required to do so, or on the order of a court or competent authority,</li>
                <li>where you have given your explicit consent.</li>
              </ul>
            </>
          ),
        },
        {
          id: "retention",
          title: "Retention",
          content: (
            <p>
              We keep contact form data for as long as needed to handle your request and any follow-up correspondence. Once
              your request has been concluded and no legal retention obligation applies, the data is deleted or anonymised.
            </p>
          ),
        },
        {
          id: "security",
          title: "Data Security",
          content: (
            <p>
              prizoma.com serves all traffic over encrypted connections (HTTPS/TLS) and applies standard server-side security
              measures. We protect personal data with appropriate technical and organisational measures and limit access to
              the people who need it to handle your request.
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "Your Rights under the revFADP",
          content: (
            <>
              <p>Under the revFADP, you have the right to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>request information about whether and which personal data about you we process, and access it,</li>
                <li>have inaccurate personal data corrected,</li>
                <li>have your personal data deleted,</li>
                <li>object to the processing of your personal data,</li>
                <li>
                  receive the personal data you have provided to us in a commonly used electronic format, or have it
                  transferred to another controller (data portability).
                </li>
              </ul>
              <p>
                To exercise these rights, please send your request through our{" "}
                <Link href="/contact" className={LINK}>
                  contact page
                </Link>
                . We may ask you to verify your identity before responding.
              </p>
            </>
          ),
        },
        {
          id: "complaint",
          title: "Right to Lodge a Complaint",
          content: (
            <p>
              If you believe that our processing of your personal data does not comply with the revFADP, you have the right to
              lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC / EDÖB).
            </p>
          ),
        },
        {
          id: "eu-visitors",
          title: "Visitors from the European Union",
          content: (
            <p>
              If you visit prizoma.com from the European Union or the European Economic Area, you also have the equivalent
              rights under the General Data Protection Regulation (GDPR), including the rights of access, rectification,
              erasure, restriction of processing, objection and data portability, as well as the right to lodge a complaint
              with the data protection supervisory authority of your country of residence.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes to This Notice",
          content: (
            <p>
              We may update this notice when our services or the legal requirements change. Significant changes will be
              published on this page together with the &quot;last updated&quot; date.
            </p>
          ),
        },
      ]}
    />
  );
}
