import type { Metadata } from "next";
import { EMAIL, LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy — Dream It Print Finds",
  description: "What Dream It Print Finds collects, how it is used, and how to reach us.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        Dream It Print Finds (dreamitprintfinds.com, @dreamitprintfinds) is run by Victor Arellano, an independent affiliate
        partner of Limitless 3D Labs. This page explains what we collect and what we do with it. Short version: very little,
        and we never sell it.
      </p>

      <h2>Visiting this website</h2>
      <ul>
        <li>
          We use Vercel Web Analytics to count page views and button clicks. It does not use cookies and does not identify you
          personally; it records things like the page, referring site, country and device type.
        </li>
        <li>There are no accounts, sign-up forms or advertising trackers on this site.</li>
        <li>
          Shop buttons send you to Limitless 3D Labs (limitless3dlabs.com) or their Etsy shop. Orders, payments and shipping are
          handled by them, under their own privacy policy, not ours.
        </li>
      </ul>

      <h2>Email</h2>
      <p>
        If you email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, we use your name, email address and message only to reply
        and, for business inquiries, to connect you with Limitless 3D Labs for a quote. We keep email correspondence as long as
        it is useful for that conversation and our records. We don&apos;t add you to a mailing list without asking.
      </p>

      <h2>Google account access (our own tools)</h2>
      <p>
        We use a small internal tool connected to Google APIs to manage our own business accounts: it creates and sends email
        drafts from our own Gmail account (scope <code>gmail.compose</code>) and uploads our own marketing images to our own
        Google Drive (scope <code>drive.file</code>). It is used only by us, for our own accounts. It does not access anyone
        else&apos;s Google data.
      </p>
      <p>
        Our use and transfer of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>,
        including the Limited Use requirements. We don&apos;t sell this data, use it for advertising, or use it to train AI or
        machine-learning models, and no person reads it except as needed to run our own email and files.
      </p>

      <h2>Sharing</h2>
      <p>
        We don&apos;t sell or rent personal information. We share it only with Limitless 3D Labs when you ask us to connect you
        with them, with service providers that run this site and our email (Vercel, Google), or when the law requires it.
      </p>

      <h2>Your choices</h2>
      <p>
        Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> to ask what we have about you, or to have your messages deleted. This site
        is not directed at children under 13.
      </p>

      <h2>Changes</h2>
      <p>If this policy changes, we&apos;ll update this page and the date above.</p>
    </LegalPage>
  );
}
