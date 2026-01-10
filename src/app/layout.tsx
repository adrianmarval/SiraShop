import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Crowdfast | Store",
    default: "Home - Crowdfast | Store",
  },
  description: "Una tienda virtual de productos",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Crowdfast | Store",
    description: "Una tienda virtual de productos",
    type: "website",
    locale: "es_ES",
    siteName: "Crowdfast | Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crowdfast | Store",
    description: "Una tienda virtual de productos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
