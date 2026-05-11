import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tushar Bhandarkar — AI Practitioner",
  description:
    "Building AI solutions — one tool, one workflow, one automation at a time. Portfolio of Tushar Bhandarkar, AI practitioner.",
  keywords: ["AI", "automation", "portfolio", "Tushar Bhandarkar", "machine learning", "prompt engineering"],
  authors: [{ name: "Tushar Bhandarkar" }],
  openGraph: {
    type: "website",
    title: "Tushar Bhandarkar — AI Practitioner",
    description:
      "Building AI solutions — one tool, one workflow, one automation at a time.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Bhandarkar — AI Practitioner",
    description: "Building AI solutions — one tool, one workflow, one automation at a time.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushar Bhandarkar",
  jobTitle: "AI Practitioner",
  description: "Building AI solutions — one tool, one workflow, one automation at a time.",
  email: "tsbhandarkar@gmail.com",
  url: "https://tusharbhandarkar.dev",
  sameAs: ["https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/"],
  knowsAbout: ["Artificial Intelligence", "Prompt Engineering", "Workflow Automation", "AI Tool Development", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#0D1A0F] text-[#F0EBE0]"
        style={{ fontFamily: "var(--font-body, Lato, sans-serif)" }}
      >
        {children}
      </body>
    </html>
  );
}
