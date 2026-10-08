"use client";

import { useState } from "react";

export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setFallback(false);
    } catch {
      // Clipboard can be blocked in in-app browsers; keep the code selectable.
      setCopied(false);
      setFallback(true);
    }
    setTimeout(() => {
      setCopied(false);
      setFallback(false);
    }, 2200);
  }

  const hint = copied ? "Copied — paste at checkout" : fallback ? "Select the code and copy it" : "Tap to copy";

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy discount code ${code}`}
      className="animate-glow w-full cursor-pointer rounded-2xl border-2 border-dashed border-accent bg-card/80 px-4 py-4 text-left shadow-[0_0_40px_-12px_rgb(255_140_0_/_0.55)] transition-[transform,background-color] duration-200 hover:bg-card active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="flex items-start justify-between gap-3">
        <span>
          <span className="block text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
            10% off at checkout
          </span>
          <span className="mt-1 block font-extrabold text-[26px] leading-none tracking-[0.08em] text-text select-all">
            {code}
          </span>
        </span>
        <span className="shrink-0 rounded-xl bg-accent px-3.5 py-2.5 text-[13px] font-bold text-bg">
          {copied ? "Copied" : "Copy"}
        </span>
      </span>
      <span className="mt-2.5 block text-[13px] text-accent" aria-live="polite">
        {hint}
      </span>
    </button>
  );
}
