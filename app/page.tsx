import Image from "next/image";
import { CopyCode } from "@/components/copy-code";
import { Deadline } from "@/components/deadline";
import { go, type LinkSlug } from "@/lib/links";

const CODE = "DREAMITPRINT10";

const buttons: { slug: LinkSlug; title: string; note: string; primary?: boolean }[] = [
  { slug: "shop", title: "Shop Limitless 3D Labs", note: `Use code ${CODE} for 10% off`, primary: true },
  { slug: "halloween", title: "Halloween props & helmets", note: "Everything on this page is orderable" },
  { slug: "custom", title: "Request a custom print", note: "Describe your idea and get a quote" },
  { slug: "reviews", title: "Read customer reviews", note: "Public reviews on Etsy" },
];

const picks: { slug: LinkSlug; name: string; price: string; alt: string; src: string }[] = [
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
    alt: "3D printed crown",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/Baratheon_Crown_-_Joffrey.jpg?v=1789275039",
  },
  {
    slug: "hammer",
    name: "Medieval skull hammer",
    price: "$85",
    alt: "3D printed medieval skull hammer",
    src: "https://cdn.shopify.com/s/files/1/0915/1378/2561/files/il_fullxfull.6498303028_lh3l.jpg?v=1734045392",
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
  { name: "Instagram", href: "https://www.instagram.com/dreamitprintfinds" },
  { name: "TikTok", href: "https://www.tiktok.com/@dreamitprintfinds" },
  { name: "Pinterest", href: "https://www.pinterest.com/dreamitprintfinds" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[480px] px-4 pt-7 pb-10">
      <header className="text-center">
        <Image
          src="/profile.png"
          alt="Dream It Print Finds logo"
          width={96}
          height={96}
          priority
          className="mx-auto size-24 rounded-full"
        />
        <h1 className="mt-3 mb-1 text-[22px] font-bold">Dream It Print Finds</h1>
        <p className="text-muted">3D printed helmets, props &amp; custom gifts</p>
      </header>

      <p className="mt-3.5 mb-5 text-center text-[13px] text-muted">
        Some links on this page are affiliate links. If you buy through them I earn a commission at no extra cost
        to you.
      </p>

      <div className="mb-3 flex items-center justify-between gap-3 rounded-[14px] border-2 border-dashed border-accent px-4 py-3.5">
        <div>
          <small className="block text-[13px] text-muted">10% off at checkout</small>
          <strong className="text-[22px] tracking-[.04em]">{CODE}</strong>
        </div>
        <CopyCode code={CODE} />
      </div>

      <Deadline />

      {buttons.map((b) => (
        <a
          key={b.slug}
          href={go(b.slug)}
          className={`mb-2.5 block rounded-[14px] border p-4 text-center font-bold ${
            b.primary ? "border-accent bg-accent text-bg" : "border-line bg-card text-text"
          }`}
        >
          {b.title}
          <span className={`block text-[13px] font-normal ${b.primary ? "text-[#3a2200]" : "text-muted"}`}>
            {b.note}
          </span>
        </a>
      ))}

      <h2 className="mt-7 mb-3 text-[17px] font-bold">Popular picks</h2>
      <div className="grid grid-cols-2 gap-2.5">
        {picks.map((p) => (
          <a key={p.slug} href={go(p.slug)} className="overflow-hidden rounded-xl bg-card text-sm text-text">
            <Image
              src={p.src}
              alt={p.alt}
              width={480}
              height={480}
              sizes="(max-width: 480px) 50vw, 230px"
              className="block aspect-square w-full bg-line object-cover"
            />
            <div className="px-2.5 pt-2 pb-2.5">
              {p.name}
              <b className="block text-accent">{p.price}</b>
            </div>
          </a>
        ))}
      </div>

      <nav className="mt-7 flex justify-center gap-[18px]">
        {socials.map((s) => (
          <a key={s.name} href={s.href} className="text-muted underline">
            {s.name}
          </a>
        ))}
      </nav>

      <footer className="mt-[22px] text-center text-xs text-muted">
        Independent affiliate of{" "}
        <a href={go("shop")} className="underline">
          Limitless 3D Labs
        </a>
        , which makes and ships every order. Photos © Limitless 3D Labs. US shipping.
      </footer>
    </main>
  );
}
