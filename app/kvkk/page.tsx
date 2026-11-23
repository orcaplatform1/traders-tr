"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export default function KvkkPage() {
  return (
    <LegalPage
      title="Data Protection Notice"
      updated="September 15, 2026"
      intro="This notice has been prepared pursuant to Article 10 of Law No. 6698 on the Protection of Personal Data ('KVKK') to explain the purpose, manner, and legal basis on which your personal data is processed when you contact us through prizoma.com."
      sections={[
        {
          id: "veri-sorumlusu",
          title: "Identity of the Data Controller",
          content: (
            <p>
              Prizoma GmbH (&quot;Company&quot;) acts as the data controller under KVKK in respect of the personal data you share through the contact form on prizoma.com. For requests regarding our data processing activities, you can reach us through our{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                contact page
              </Link>.
            </p>
          ),
        },
        {
          id: "isleme-amaci",
          title: "Purpose of Processing Personal Data",
          content: (
            <>
              <p>Your personal data is processed solely for the following purposes:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>To evaluate and respond to the request you submitted via the contact form,</li>
                <li>To route your partnership, venture, or press requests to the relevant department,</li>
                <li>To ensure the security of our company and users and prevent misuse,</li>
                <li>To fulfill our legal obligations.</li>
              </ul>
            </>
          ),
        },
        {
          id: "veri-kategorileri",
          title: "Categories of Personal Data Processed",
          content: (
            <>
              <p>
                <strong className="text-foreground">Identity data:</strong> full name.
              </p>
              <p>
                <strong className="text-foreground">Contact data:</strong>{" "}
                email address, company name (if shared).
              </p>
              <p>
                <strong className="text-foreground">Transaction security data:</strong>{" "}
                the timestamp generated at the moment of form submission and standard server log records (IP address, browser information).
              </p>
              <p>
                <strong className="text-foreground">Request content:</strong>{" "}
                your message subject, category (partnership, venture, press, general), and message text.
              </p>
            </>
          ),
        },
        {
          id: "toplama-yontemi",
          title: "Collection Method and Legal Basis",
          content: (
            <>
              <p>
                Your personal data is collected directly from you, electronically, when you fill in and submit the form on the prizoma.com/iletisim page.
              </p>
              <p>
                Processing is primarily based on the legal ground under KVKK Art. 5/2 of &quot;(f) processing being necessary for the legitimate interests pursued by the data controller, provided that this processing shall not violate the fundamental rights and freedoms of the data subject.&quot; Depending on the nature of your request, grounds &quot;(c) processing being necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract&quot; or &quot;(ç) processing being necessary for compliance with a legal obligation&quot; may also apply. In any case, the data we collect to respond to your request is limited to its purpose and proportionate.
              </p>
            </>
          ),
        },
        {
          id: "aktarim",
          title: "Transfer of Personal Data",
          content: (
            <p>
              Your personal data may be shared only with our hosting and database service providers that provide the technical infrastructure for the site (to the extent necessary to deliver the service) and with legally authorized public institutions and organizations, upon request. Your data is not sold or rented to third parties for marketing purposes.
            </p>
          ),
        },
        {
          id: "haklariniz",
          title: "Your Rights Under KVKK",
          content: (
            <>
              <p>Pursuant to Article 11 of KVKK, you may exercise the following rights by applying to us:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>To learn whether your personal data is being processed,</li>
                <li>To request information if it has been processed,</li>
                <li>To learn the purpose of processing and whether it is being used in accordance with its purpose,</li>
                <li>To know the third parties to whom it has been transferred domestically or abroad,</li>
                <li>To request correction if it has been processed incompletely or inaccurately,</li>
                <li>To request deletion or destruction within the framework of the conditions stipulated in KVKK,</li>
                <li>To request that the transactions performed be notified to third parties to whom your data has been transferred,</li>
                <li>To object to a result arising against you through analysis of the processed data exclusively by automated systems,</li>
                <li>To demand compensation for damages in the event of unlawful processing.</li>
              </ul>
            </>
          ),
        },
        {
          id: "basvuru",
          title: "How to Apply",
          content: (
            <p>
              To exercise the rights above, you can submit your request by filling in the form on our{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                contact page
              </Link>{" "}
              under the &quot;General&quot; category, or via the email address stated on the form. Your request must include information that will allow us to verify your identity. Your application will be concluded in the shortest possible time and within the maximum period of 30 days stipulated by KVKK; your request will be answered free of charge, however, if the transaction requires an additional cost, the fee in the tariff determined by the Personal Data Protection Board may be requested.
            </p>
          ),
        },
      ]}
    />
  );
}
