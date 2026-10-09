import Link from "next/link";

// Shared shell for /privacy and /terms: plain readable text, same width and gutter as the rest of the site.
export const UPDATED = "October 9, 2026";
export const EMAIL = "sales@dreamitprintfinds.com";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[640px] px-4 pt-8 pb-16">
      <Link href="/" className="text-[13px] text-muted underline decoration-line underline-offset-2 hover:text-text">
        ← Dream It Print Finds
      </Link>
      <h1 className="mt-4 text-[2rem] leading-tight font-extrabold tracking-tight">{title}</h1>
      <p className="mt-1 text-[13px] text-muted">Last updated {UPDATED}</p>
      <div className="mt-6 grid gap-4 text-[15px] leading-relaxed text-text/90 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-4 [&_h2]:text-[17px] [&_h2]:font-bold [&_h2]:text-text [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </main>
  );
}
