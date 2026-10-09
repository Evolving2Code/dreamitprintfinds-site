import type { Metadata } from "next";
import { go } from "@/lib/links";
import { EMAIL, LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of service — Dream It Print Finds",
  description: "Terms for using dreamitprintfinds.com.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of service">
      <p>
        These terms cover your use of dreamitprintfinds.com, run by Victor Arellano (&quot;we&quot;). By using the site you
        agree to them.
      </p>

      <h2>What this site is</h2>
      <p>
        Dream It Print Finds is an independent affiliate of <a href={go("shop")}>Limitless 3D Labs</a>. We share their products
        and the discount code DREAMITPRINT10, and we earn a commission on some orders placed through our links or code. We are
        not Limitless 3D Labs and don&apos;t sell, make or ship anything ourselves.
      </p>

      <h2>Orders</h2>
      <p>
        Every purchase, custom order and business order is made with Limitless 3D Labs (on their website or Etsy shop) and is
        governed by their terms, prices, shipping and return policies. Questions about an order go to them.
      </p>

      <h2>Prices, dates and codes</h2>
      <p>
        We try to keep prices, order-by dates and discount details accurate, but they can change or end at any time and the
        shop&apos;s checkout is what counts. Holiday order-by dates are estimates, not delivery guarantees.
      </p>

      <h2>Content</h2>
      <p>
        Product photos belong to Limitless 3D Labs. Don&apos;t copy the site&apos;s content for
        commercial use without asking.
      </p>

      <h2>No warranties</h2>
      <p>
        The site is provided &quot;as is&quot;. To the extent the law allows, we aren&apos;t liable for losses from using it or
        from purchases made with third parties.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms; the date above shows the latest version. Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
