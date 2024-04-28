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
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable}`}>
        <ThemeProvider>
          <div className="h-dvh bg-white dark:bg-zinc-950">
            <Header className="m-auto max-w-4xl px-6" />
            <main className="m-auto max-w-4xl px-6 pt-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
