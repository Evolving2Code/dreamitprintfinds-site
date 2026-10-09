import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { go, type LinkSlug } from "@/lib/links";

// B2B page for comic shops, game stores and local businesses. Linked from outreach emails.
const EMAIL = "sales@dreamitprintfinds.com";
const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Shop inquiry: [your store]")}&body=${encodeURIComponent(
  "Hi Victor,\n\nWe're interested in:\n\nStore name:\nCity:\n",
)}`;

export const metadata: Metadata = {
  title: "For shops & businesses — Dream It Print Finds",
  description:
    "Stock 3D printed cosplay helmets, props and collectibles from Limitless 3D Labs, or order custom pieces with partner pricing. Bay Area delivery.",
  alternates: { canonical: "/shops" },
  openGraph: {
    title: "3D printed props & custom pieces for your store",
    description: "Partner pricing on invoice orders. Made to order in the Bay Area by Limitless 3D Labs.",
    url: "/shops",
    images: "/profile.png",
  },
};

const products: { slug: LinkSlug; name: string; price: string; src: string; alt: string }[] = [
  {
    slug: "batcat",
    name: "Wearable helmets",
    price: "Retail from $20",
    alt: "3D printed wearable helmet",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6304414211_ncq1.jpg?v=1733459166",
  },
  {
    slug: "sonic",
    name: "Sonic screwdrivers",
    price: "Retail from $40",
    alt: "3D printed sonic screwdrivers",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6279425787_o6fc.jpg?v=1733431025",
  },
  { slug: "crown", name: "Crowns", price: "Retail from $40", alt: "3D printed crown", src: "/picks/crown.jpg" },
  { slug: "raygun", name: "Ray gun", price: "Retail from $50", alt: "3D printed retro ray gun", src: "/picks/raygun.jpg" },
  { slug: "hammer", name: "Costume weapons", price: "Retail from $85", alt: "3D printed skull hammer", src: "/picks/hammer.jpg" },
  {
    slug: "sword",
    name: "Life-size sword",
    price: "Retail from $60",
    alt: "3D printed life-size pixel sword",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6232961492_a29x.jpg?v=1733511428",
  },
  {
    slug: "bust",
    name: "Custom busts",
    price: "Retail from $55",
    alt: "3D printed custom busts from photos",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6482859031_rnw7.jpg?v=1733431015",
  },
  {
    slug: "tardis",
    name: "Collectibles",
    price: "Retail from $20",
    alt: "3D printed police box collectible",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6408049126_s448.jpg?v=1733431048",
  },
];

const ways = [
  {
    title: "Holiday stock",
    body: "Helmets, sonic screwdrivers, crowns, prop weapons and collectibles for your shelves, invoiced with a partner discount based on order size.",
  },
  {
    title: "Custom requests",
    body: "When a customer asks for a prop or character you don't carry, pass it along or order it for them. Printed from an idea or a photo, with a preview first.",
  },
  {
    title: "A showpiece for the store",
    body: "A life-size prop, a character bust, or a piece with your logo for the counter, window or an in-store event.",
  },
];

const facts = ["Ships in 3–5 days", "Rush available", "Bay Area delivery", "Order by Dec 10 for Christmas"];

export default function Shops() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[440px] px-4 pt-6 pb-16 sm:max-w-[480px] lg:max-w-[920px] lg:px-6">
      <div className="lg:mx-auto lg:max-w-[560px]">
        <header className="animate-rise rise-1 text-center">
          <Link href="/" className="mx-auto block size-14 overflow-hidden rounded-full ring-2 ring-accent/80">
            <Image src="/profile.png" alt="Dream It Print Finds" width={56} height={56} className="size-full" />
          </Link>
          <p className="mt-4 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
            For comic shops &amp; local businesses
          </p>
          <h1 className="mt-1.5 text-[2rem] leading-[1.08] font-extrabold tracking-tight text-balance lg:text-[2.6rem]">
            3D printed props &amp; custom pieces for your store
          </h1>
          <p className="mx-auto mt-3 max-w-[38ch] text-[15px] text-muted text-pretty">
            Made to order in the San Francisco Bay Area by Limitless 3D Labs. Their line: You Dream It. We Print It.
          </p>
        </header>

        <p className="animate-rise rise-2 mt-5 text-center text-[13px] text-muted text-pretty">
          I&apos;m an independent affiliate partner of Limitless 3D Labs and earn a commission on orders I bring in.
          The shop makes, invoices and ships every order.
        </p>

        <div className="animate-rise rise-3 mt-5 grid gap-2.5">
          <a
            href={mailto}
            className="btn-shine block rounded-2xl border border-accent bg-accent p-4 text-center font-bold text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.99]"
          >
            Email for a quote
            <span className="mt-0.5 block text-[13px] font-normal text-[#3a2200]">{EMAIL}</span>
          </a>
          <a
            href="/limitless-3d-labs-sell-sheet.pdf"
            className="block rounded-2xl border border-line bg-card/90 p-4 text-center font-bold text-text hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            One-page sheet (PDF)
            <span className="mt-0.5 block text-[13px] font-normal text-muted">Print it or forward it</span>
          </a>
        </div>
      </div>

      <section className="animate-rise rise-4 mt-9">
        <div className="mb-3 flex items-end justify-between gap-3">
          <h2 className="text-[17px] font-bold">What they make</h2>
          <p className="text-[12px] text-muted">Photos © Limitless 3D Labs</p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {products.map((p) => (
            <a
              key={p.slug}
              href={go(p.slug)}
              className="group relative overflow-hidden rounded-2xl bg-card text-sm text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={480}
                height={480}
                sizes="(max-width: 480px) 50vw, (max-width: 920px) 25vw, 220px"
                className="block aspect-square w-full bg-line object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 px-2.5 pt-6 pb-2.5">
                {p.name}
                <b className="block text-[12px] font-semibold text-accent">{p.price}</b>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-3 text-center text-[13px] text-muted">
          Not limited to the catalog: characters, armor, signs and logo pieces are all custom work.
        </p>
      </section>

      <div className="lg:mx-auto lg:max-w-[560px]">
        <section className="mt-9">
          <h2 className="mb-3 text-[17px] font-bold">Three ways to work together</h2>
          <ol className="grid gap-2.5">
            {ways.map((w, i) => (
              <li key={w.title} className="flex gap-3 rounded-2xl border border-line bg-card/80 p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent font-extrabold text-bg">
                  {i + 1}
                </span>
                <span>
                  <b className="block">{w.title}</b>
                  <span className="mt-0.5 block text-[14px] text-muted text-pretty">{w.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <ul className="mt-7 grid grid-cols-2 gap-2 text-center text-[12px] text-muted">
          {facts.map((f) => (
            <li key={f} className="rounded-xl border border-line bg-card/60 px-2 py-3">
              {f}
            </li>
          ))}
        </ul>

        <a
          href={mailto}
          className="mt-7 flex min-h-12 items-center justify-center rounded-2xl bg-accent px-4 py-3 text-center font-bold text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Get partner pricing · {EMAIL}
        </a>

        <footer className="mt-6 text-center text-xs text-muted text-pretty">
          Independent affiliate of{" "}
          <a href={go("shop")} className="underline decoration-line underline-offset-2 hover:text-text">
            Limitless 3D Labs
          </a>
          , which makes and ships every order. Photos © Limitless 3D Labs. ·{" "}
          <Link href="/" className="underline decoration-line underline-offset-2 hover:text-text">
            Shop with 10% off
          </Link>{" "}
          · <Link href="/privacy" className="underline decoration-line underline-offset-2 hover:text-text">Privacy</Link> ·{" "}
          <Link href="/terms" className="underline decoration-line underline-offset-2 hover:text-text">Terms</Link>
        </footer>
      </div>
    </main>
  );
}
