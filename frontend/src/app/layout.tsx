import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Desenvolvido por Ariel Santos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable}`}
    >
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          <Header />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}