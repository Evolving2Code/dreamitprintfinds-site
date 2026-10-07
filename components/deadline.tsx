"use client";

import { useSyncExternalStore } from "react";

// Order-by dates from the shop (Oct 6 2026). Shows the next one that hasn't passed.
const deadlines = [
  { until: "2026-10-15T23:59:59-07:00", label: "Halloween", date: "Oct 15" },
  { until: "2026-12-10T23:59:59-08:00", label: "Christmas", date: "Dec 10" },
];

function nextDeadline() {
  const now = Date.now();
  const next = deadlines.find((d) => now <= Date.parse(d.until));
  if (!next) return null;
  const days = Math.ceil((Date.parse(next.until) - now) / 86_400_000);
  return `${next.label}|${next.date}|${days <= 1 ? "last day!" : `${days} days left`}`;
}

const subscribe = () => () => {};

export function Deadline() {
  // Computed on the client only, so the prerendered page never shows a stale countdown.
  const value = useSyncExternalStore(subscribe, nextDeadline, () => null);
  const [label, date, left] = value?.split("|") ?? [];

  return (
    <div className="mb-5 rounded-xl bg-card px-3.5 py-2.5 text-center text-[15px]">
      {value ? (
        <>
          {label}: order by <b className="text-accent">{date}</b> (US) · {left}
        </>
      ) : (
        "Made to order · ships in 3–5 days"
      )}
    </div>
  );
}
