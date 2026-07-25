import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { analytics, profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
  icons: {
    icon: withBasePath("/favicon.ico"),
    apple: withBasePath("/apple-touch-icon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Script
          data-goatcounter={`https://${analytics.goatcounterCode}.goatcounter.com/count`}
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
