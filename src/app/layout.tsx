import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { notoSansKR } from "@/components/ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: { template: '%s | Dashboard', default: 'GROUPWARE Dashboard'},
    description: "대시보드 ",
    metadataBase: new URL('https://lvelup-dashboard.vercel.app/')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(notoSansKR.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
