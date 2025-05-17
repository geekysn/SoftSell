import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatProvider from "@/components/Chat/ChatProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftSell - Sell Unused Software Licenses with Confidence",
  description: "SoftSell helps you sell your unused software licenses at the best rates with verified buyers and secure transactions.",
  openGraph: {
    title: "SoftSell - Sell Unused Software Licenses with Confidence",
    description: "SoftSell helps you sell your unused software licenses at the best rates with verified buyers and secure transactions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ChatProvider>
          {children}
        </ChatProvider>
      </body>
    </html>
  );
}
