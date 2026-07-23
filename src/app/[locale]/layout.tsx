import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Modern Widya Tehnical — Infrastruktur & Konstruksi",
  description:
    "PT Modern Widya Tehnical adalah perusahaan konstruksi nasional terpercaya dengan pengalaman lebih dari 40 tahun di bidang infrastruktur, gedung, dan industri.",
  keywords: ["konstruksi", "infrastruktur", "PT Modern Widya Tehnical", "MWT"],
  authors: [{ name: "PT Modern Widya Tehnical" }],
  openGraph: {
    title: "PT Modern Widya Tehnical",
    description:
      "Membangun Indonesia dengan pengalaman dan kepercayaan selama lebih dari 40 tahun.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming locale is supported
  const locales = ["id", "en"];
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
