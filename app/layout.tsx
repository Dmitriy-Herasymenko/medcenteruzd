import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "@/providers/I18nProvider";

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
    <html lang="uk">
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
