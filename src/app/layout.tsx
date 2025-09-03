import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserContextProvider from "@/provider/currentUserProvider";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy Me Coffee",
  description: "Buy Me Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <UserContextProvider>{children}</UserContextProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              className: "w-[700px]",
            }}
          />
        </NuqsAdapter>
      </body>
    </html>
  );
}
