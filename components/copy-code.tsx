"use client";

import { useState } from "react";

export function CopyCode({ code }: { code: string }) {
  const [label, setLabel] = useState("Copy code");

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setLabel("Copied!");
    } catch {
      // Clipboard can be blocked in in-app browsers; show the code so it can be copied by hand.
      setLabel(code);
    }
    setTimeout(() => setLabel("Copy code"), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="cursor-pointer whitespace-nowrap rounded-[10px] bg-accent px-3.5 py-2.5 font-bold text-bg"
    >
      {label}
    </button>
  );
}
