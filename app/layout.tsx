import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "@/providers/I18nProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  title: "Медцентр УЗД",
  description: "Ультразвукова діагностика — професійно та з турботою про вас",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
        <FloatingCallButton phone="+380674935104"  />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
