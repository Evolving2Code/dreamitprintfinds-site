import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const description =
  "3D printed helmets, cosplay props and custom gifts from Limitless 3D Labs. 10% off with code DREAMITPRINT10.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamitprintfinds.com"),
  title: "Dream It Print Finds",
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
  themeColor: "#111114",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
