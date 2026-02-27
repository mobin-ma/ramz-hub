import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Providers from "@/store/Providers";
import AuthGuard from "@/components/auth/AuthGuard";

const iranSans = localFont({
  src: '../fonts/IRANSansWeb_Medium.woff2'
});

export const metadata: Metadata = {
  title: "RamzHub",
  description: "mather layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.className} antialiased bg-background overflow-hidden h-screen flex flex-col font-display`}
      >
        <Providers>
          <AuthGuard>
            {children}
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
