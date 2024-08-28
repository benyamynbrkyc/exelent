import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Boilerplate",
  description: "🚀",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
