import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask the Muses AI",
  description: "Ask the Muses of Ancient Greece to improve your writing with AI-powered suggestions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <div className="container mx-auto px-4 py-8">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
