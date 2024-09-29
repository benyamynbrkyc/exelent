import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { type Metadata } from "next";
import { Nav } from "./nav";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "EXElent d.o.o | Scalable ERP & Custom Development Solutions",
  description:
    "Providing scalable and reliable ERP solutions for businesses of all sizes, with custom software designed for stability and growth.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bs" }];
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
