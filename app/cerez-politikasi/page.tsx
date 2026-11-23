"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="September 17, 2026"
      intro="We take care to keep prizoma.com as minimal and tracking-free as possible. This page explains what information is stored in your browser while using the site and how you can control it."
      sections={[
        {
          id: "cerez-nedir",
          title: "What Is a Cookie",
          content: (
            <p>
              A cookie is a small text file saved to your browser when you visit a website. Cookies are typically used to remember session information, store preferences, or collect usage statistics.
            </p>
          ),
        },
        {
          id: "kullandiklarimiz",
          title: "Storage Types Used on prizoma.com",
          content: (
            <>
              <p>
                prizoma.com is a corporate site that does not require membership; therefore, we do not use session cookies, cart cookies, or ad tracking cookies. The table below summarizes the only client-side storage type used on the site:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-border text-[11px] uppercase tracking-[0.1em] text-muted">
                      <th className="py-2 pr-4 font-medium">Type</th>
                      <th className="py-2 pr-4 font-medium">Purpose</th>
                      <th className="py-2 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Preference (localStorage)</td>
                      <td className="py-3 pr-4">
                        To remember interface preferences (e.g., language selection) entirely on your device
                      </td>
                      <td className="py-3">Until you delete it, only on your device</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Essential / Analytics / Advertising</td>
                      <td className="py-3 pr-4 text-muted">Not used</td>
                      <td className="py-3 text-muted">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Data stored in localStorage is never sent to us or any third party. On the server side, there is no tracking mechanism other than the essential technical headers (e.g., security headers) required for the site to function.
              </p>
            </>
          ),
        },
        {
          id: "ucuncu-taraf",
          title: "Third-Party Cookies",
          content: (
            <p>
              Third-party analytics or ad tracking tools such as Google Analytics or Meta Pixel are not currently used on prizoma.com. If this changes in the future, this page will be updated and the tools used will be explicitly listed here.
            </p>
          ),
        },
        {
          id: "cerez-onayi-kategoriler",
          title: "Cookie Consent and Categories",
          content: (
            <>
              <p>
                On your first visit to the site, you will see an information banner at the bottom of the screen. From there you can choose &quot;Accept All Cookies&quot;, &quot;Reject&quot;, or use &quot;Manage Preferences&quot; to toggle the three categories below individually. Your choice is remembered only on your device (localStorage) and can be withdrawn at any time.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">
                    Essential Cookies (Always Active):
                  </strong>{" "}
                  Technically required for the Prizoma GmbH corporate homepage to load securely and for partnership and contact forms to work reliably; cannot be disabled by the user.
                </li>
                <li>
                  <strong className="text-foreground">
                    Performance and Analytics Cookies (On/Off):
                  </strong>{" "}
                  Help us improve our corporate platform by analyzing how visitors explore content in the &quot;Insights,&quot; &quot;Our Brands,&quot; and &quot;Ventures&quot; sections.
                </li>
                <li>
                  <strong className="text-foreground">
                    Marketing and Advertising Cookies (On/Off):
                  </strong>{" "}
                  Allow us to optimize corporate notifications regarding launches of new independent brands in our portfolio, ecosystem announcements, and strategic partnership processes according to your interests.
                </li>
              </ul>
              <p>
                The three categories above are currently stored as user preferences; prizoma.com does not use any third-party analytics or advertising tool that operates based on these preferences (see the section above). When this changes, the relevant tool will be activated only according to the category the user has selected.
              </p>
            </>
          ),
        },
        {
          id: "yonetim",
          title: "How to Manage Storage",
          content: (
            <p>
              From your browser settings, you can view and clear local data (including localStorage) stored by sites on your device at any time. This action only resets your interface preferences; it does not affect the core functionality of the site.
            </p>
          ),
        },
        {
          id: "guncellemeler",
          title: "Policy Updates",
          content: (
            <p>
              We may update this policy in response to changes in the technologies used on the site. The current version is always available on this page with the &quot;last updated&quot; date. For our more general privacy practices, see our{" "}
              <Link href="/gizlilik-politikasi" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                Privacy Policy
              </Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
