import type { Metadata } from "next";
import "./globals.css";
import { Inter, Sora, JetBrains_Mono, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/components/site/theme-provider";
import { LanguageProvider } from "@/components/site/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "React TS Mastery — Zero to Hero | Interactive React + TypeScript Tutorial",
  description:
    "Master React + TypeScript from zero to hero. 15 chapters, 80+ lessons, live interactive demos, progress tracking — 100% free. Available in English & Persian.",
  keywords: [
    "React",
    "TypeScript",
    "tutorial",
    "learn React",
    "React TypeScript",
    "interactive",
    "free course",
    "Persian",
    "Farsi",
    "آموزش ری‌اکت",
  ],
  authors: [{ name: "amiraliSite" }],
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "React TS Mastery — Zero to Hero",
    description: "Interactive React + TypeScript tutorial. 15 chapters, live demos, free. EN + FA.",
    siteName: "React TS Mastery",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} ${vazirmatn.variable} antialiased bg-background text-foreground lang-en`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
