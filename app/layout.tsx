import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const description =
  "3D printed helmets, cosplay props and custom gifts from Limitless 3D Labs. 10% off with code DREAMITPRINT10.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamitprintfinds.com"),
  title: "Dream It Print Finds — 10% off 3D printed props",
  description,
  icons: { icon: "/profile.png", apple: "/profile.png" },
  openGraph: {
    title: "Dream It Print Finds",
    description: "3D printed props & custom gifts. 10% off with code DREAMITPRINT10.",
    url: "/",
    images: "/profile.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${outfit.className}`}>
      <body className="antialiased">
        <div className="atmosphere" aria-hidden="true">
          <div className="glow" />
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="grain" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
