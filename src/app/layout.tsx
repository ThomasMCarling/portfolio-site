import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { Header } from "./header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    template: "%s | Thomas Carling",
    default: "Thomas Carling",
  },
  description: "Software Developer - (React / Node.js / .Net Framework)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`font-sans antialiased ${inter.variable}`}>
        <ThemeProvider>
          <div className="mr-[calc(-1*(100vw-100%))] min-h-dvh">
            <Header className="m-auto max-w-4xl px-6 pt-4" />
            <main className="m-auto max-w-4xl px-9 pt-6 sm:px-6 lg:pt-3.5">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
