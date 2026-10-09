import Link from "next/link";
import Image from "next/image";
import { CopyCode } from "@/components/copy-code";
import { Deadline } from "@/components/deadline";
import { go, type LinkSlug } from "@/lib/links";

const CODE = "DREAMITPRINT10";

const tags = [
  "Helmets",
  "Cosplay props",
  "Custom gifts",
  "Halloween",
  "Crowns",
  "Sonic screwdrivers",
  "Wearable prints",
  "US shipping",
];

const buttons: {
  slug: LinkSlug;
  title: string;
  note: string;
  primary?: boolean;
  icon: "shop" | "halloween" | "custom" | "etsy" | "reviews";
}[] = [
  { slug: "shop", title: "Shop Limitless 3D Labs", note: `Use code ${CODE} for 10% off`, primary: true, icon: "shop" },
  { slug: "halloween", title: "Halloween props & helmets", note: "Everything on this page is orderable", icon: "halloween" },
  { slug: "custom", title: "Request a custom print", note: "Describe your idea and get a quote", icon: "custom" },
  { slug: "etsy", title: "Shop on Etsy", note: "Limitless 3D Labs on Etsy", icon: "etsy" },
  { slug: "reviews", title: "Read customer reviews", note: "Public reviews on Etsy", icon: "reviews" },
];

const picks: {
  slug: LinkSlug;
  name: string;
  price: string;
  alt: string;
  src: string;
  badge?: string;
  object?: string;
}[] = [
  {
    slug: "sonic",
    name: "Sonic screwdrivers",
    price: "From $40",
    alt: "3D printed sonic screwdrivers",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6279425787_o6fc.jpg?v=1733431025",
  },
  {
    slug: "crown",
    name: "Baratheon crown",
    price: "$40",
    alt: "3D printed crown on a velvet cushion",
    src: "/picks/crown.jpg",
    object: "object-[center_32%]",
  },
  {
    slug: "hammer",
    name: "Medieval skull hammer",
    price: "$85",
    alt: "3D printed medieval skull hammer on a forge",
    src: "/picks/hammer.jpg",
    badge: "Halloween",
    object: "object-[center_42%]",
  },
  {
    slug: "batcat",
    name: "BatCat helmet (for cats)",
    price: "$20",
    alt: "3D printed bat helmet for cats",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6304414211_ncq1.jpg?v=1733459166",
  },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/dreamitprintfinds", icon: "ig" as const },
  { name: "TikTok", href: "https://www.tiktok.com/@dreamitprintfinds", icon: "tt" as const },
  { name: "Pinterest", href: "https://www.pinterest.com/dreamitprintfinds", icon: "pin" as const },
];

export default function Home() {
  const marquee = [...tags, ...tags];

  return (
    <>
      <main className="relative z-10 mx-auto w-full max-w-[440px] px-4 pt-6 pb-[7.5rem] sm:max-w-[480px] lg:max-w-[920px] lg:px-6 lg:pb-16">
        <div className="lg:mx-auto lg:max-w-[480px]">
        <header className="animate-rise rise-1 text-center">
          <div className="logo-ring mx-auto size-[4.75rem] overflow-hidden rounded-full ring-2 ring-accent/80 lg:size-28">
            <Image
              src="/profile.png"
              alt="Dream It Print Finds logo"
              width={112}
              height={112}
              priority
              className="size-full"
            />
          </div>
          <p className="mt-4 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
            Cosplay · props · custom gifts
          </p>
          <h1 className="mt-1.5 text-[2.05rem] leading-[1.05] font-extrabold tracking-tight lg:text-5xl">
            Dream it.
            <span className="block bg-linear-to-r from-accent via-[#ffc56a] to-accent bg-clip-text text-transparent">
              Print it.
            </span>
          </h1>
          <p className="mx-auto mt-2.5 max-w-[34ch] text-[15px] text-muted text-pretty">
            3D printed helmets, props &amp; gifts from Limitless 3D Labs — 10% off with one tap.
          </p>
        </header>

        <div className="animate-rise rise-2 marquee-mask relative mt-5 overflow-hidden">
          <ul className="animate-marquee flex w-max gap-2 pr-2" aria-hidden="true">
            {marquee.map((tag, i) => (
              <li
                key={`${tag}-${i}`}
                className="shrink-0 rounded-full border border-line bg-card/70 px-3 py-1 text-[12px] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="sr-only">{tags.join(", ")}</span>
        </div>

        <p className="animate-rise rise-2 mt-4 mb-4 text-center text-[13px] text-muted text-pretty">
          Some links on this page are affiliate links. If you buy through them I earn a commission at no extra cost
          to you.
        </p>

        <div className="animate-rise rise-3 mb-3">
          <CopyCode code={CODE} />
        </div>

        <div className="animate-rise rise-3 mb-4">
          <Deadline />
        </div>

        <div className="grid gap-2.5">
          {buttons.map((b) => (
            <a
              key={b.slug}
              href={go(b.slug)}
              className={`group relative block rounded-2xl border p-4 text-center font-bold transition-[transform,background-color,border-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.99] ${
                b.primary
                  ? "btn-shine animate-rise rise-4 border-accent bg-accent text-bg"
                  : "animate-rise rise-5 border-line bg-card/90 text-text hover:border-accent/50"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name={b.icon} className={b.primary ? "text-bg" : "text-accent"} />
                {b.title}
              </span>
              <span className={`mt-0.5 block text-[13px] font-normal ${b.primary ? "text-[#3a2200]" : "text-muted"}`}>
                {b.note}
              </span>
            </a>
          ))}
        </div>
        </div>

        <section className="animate-rise rise-6 mt-8">
          <div className="mb-3 flex items-end justify-between gap-3">
            <h2 className="text-[17px] font-bold">Popular picks</h2>
            <p className="text-[12px] text-muted">Photos © Limitless 3D Labs</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {picks.map((p, i) => (
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
                  priority={i < 2}
                  className={`block aspect-square w-full bg-line object-cover transition-transform duration-500 group-hover:scale-[1.04] ${p.object ?? ""}`}
                />
                <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                {p.badge ? (
                  <span className="absolute top-2 left-2 rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold text-bg">
                    {p.badge}
                  </span>
                ) : null}
                <span className="absolute inset-x-0 bottom-0 px-2.5 pt-6 pb-2.5">
                  {p.name}
                  <b className="block text-accent">{p.price}</b>
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="lg:mx-auto lg:max-w-[480px]">
        <ul className="mt-7 grid grid-cols-3 gap-2 text-center text-[12px] text-muted">
          <li className="rounded-xl border border-line bg-card/60 px-2 py-3">US shipping</li>
          <li className="rounded-xl border border-line bg-card/60 px-2 py-3">Ships in 3–5 days</li>
          <li className="rounded-xl border border-line bg-card/60 px-2 py-3">Always 10% off</li>
        </ul>

        <nav className="mt-7 flex justify-center gap-2" aria-label="Social">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card/70 px-3.5 py-2 text-[13px] text-muted transition-colors hover:border-accent/50 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <SocialIcon name={s.icon} />
              {s.name}
            </a>
          ))}
        </nav>

        <footer className="mt-6 text-center text-xs text-muted text-pretty">
          Independent affiliate of{" "}
          <a href={go("shop")} className="underline decoration-line underline-offset-2 hover:text-text">
            Limitless 3D Labs
          </a>
          , which makes and ships every order. Photos © Limitless 3D Labs. US shipping.{" "}
          · <Link href="/privacy" className="underline decoration-line underline-offset-2 hover:text-text">Privacy</Link> ·{" "}
          <Link href="/terms" className="underline decoration-line underline-offset-2 hover:text-text">Terms</Link>
        </footer>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line/80 bg-bg/85 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden supports-[backdrop-filter]:bg-bg/70">
        <a
          href={go("shop")}
          className="flex min-h-12 items-center justify-center rounded-2xl bg-accent px-4 py-3 text-center font-bold text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Shop now · 10% off with {CODE}
        </a>
      </div>
    </>
  );
}

function Icon({
  name,
  className,
}: {
  name: "shop" | "halloween" | "custom" | "etsy" | "reviews";
  className?: string;
}) {
  const common = `size-4 shrink-0 ${className ?? ""}`;
  if (name === "shop") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8h16l-1.2 11.2A2 2 0 0 1 16.81 21H7.19a2 2 0 0 1-1.99-1.8L4 8Z" />
        <path d="M8 8V7a4 4 0 0 1 8 0v1" />
      </svg>
    );
  }
  if (name === "halloween") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3c2 3 2 5 0 6-2-1-2-3 0-6Z" />
        <path d="M7 10c5-3 10 0 12 4-1 5-5 7-7 7s-6-2-7-7c.5-1.5 1.3-2.8 2-4Z" />
      </svg>
    );
  }
  if (name === "custom") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
      </svg>
    );
  }
  if (name === "etsy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
        <path d="M6.2 6.8c.4-1.7 1.6-2.6 3.5-2.6h8.1v2.1H10.4c-.7 0-1.1.3-1.2.9v2.4h8.4v2.1H9.2v4.6c0 .7.4 1 1.2 1h6.2c1.4 0 2.2-.7 2.6-2.1l2 .5c-.6 2.6-2.2 3.8-4.8 3.8H9.5c-2.2 0-3.6-1.2-3.6-3.6V6.8h.3Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
      <path d="M12 17.3 6.2 21l1.6-6.7L2.5 9.5l6.9-.6L12 2.5l2.6 6.4 6.9.6-5.3 4.8L17.8 21 12 17.3Z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "ig" | "tt" | "pin" }) {
  const common = "size-3.5 shrink-0";
  if (name === "ig") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "tt") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
        <path d="M14 3v11.2a3.2 3.2 0 1 1-3.2-3.2h.2V8.4A6.6 6.6 0 1 0 17.6 15V8.7A7 7 0 0 0 21 9.4V6.2A4.2 4.2 0 0 1 16.8 3H14Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
      <path d="M12.5 3c-3.4 0-6 2.4-6 5.7 0 2 1 3.4 1 3.4s-.3-.9-.3-2.1c0-2.5 1.9-4.4 4.4-4.4 2.1 0 3.2 1.3 3.2 3 0 2.3-1.5 4.2-3.6 4.2-.9 0-1.7-.6-1.5-1.5.2-1 .7-2.1.7-2.8 0-.6-.3-1.2-1.1-1.2-.9 0-1.6.9-1.6 2.2 0 .8.3 1.3.3 1.3L8.5 21l2.6-11.1c.4.8 1.6 1.4 2.8 1.4 3.6 0 6.1-3.3 6.1-7.7C20 5 16.8 3 12.5 3Z" />
    </svg>
  );
}
