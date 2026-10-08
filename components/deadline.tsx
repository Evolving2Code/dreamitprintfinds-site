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
  if (!next) return "";
  const days = Math.ceil((Date.parse(next.until) - now) / 86_400_000);
  const left = days <= 1 ? "last day!" : `${days} days left`;
  const heat = days <= 3 ? "hot" : "ok";
  return `${next.label}|${next.date}|${left}|${heat}`;
}

const subscribe = () => () => {};

export function Deadline() {
  // Computed on the client only, so the prerendered page never shows a stale countdown.
  const value = useSyncExternalStore(subscribe, nextDeadline, () => "");
  const [label, date, left, heat] = value.split("|");
  const urgent = heat === "hot";

  return (
    <div
      className={`flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border px-3.5 py-2.5 text-center text-[15px] ${
        urgent ? "border-accent/50 bg-accent/10 text-text" : "border-line bg-card/80 text-text"
      }`}
    >
      <span aria-hidden="true" className={`inline-block size-1.5 shrink-0 rounded-full ${urgent ? "bg-accent" : "bg-muted"}`} />
      {value ? (
        <span>
          {label}: order by <b className="text-accent">{date}</b> (US) · {left}
        </span>
      ) : (
        <span>Made to order · ships in 3–5 days</span>
      )}
    </div>
  );
}
