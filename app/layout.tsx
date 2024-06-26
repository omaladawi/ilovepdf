import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iLovePDF | Online PDF tools for PDF lovers",
  description:
    "iLovePDF is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased w-full overflow-hidden",
            inter.className
          )}
        >
          <main className={"w-full mx-auto"}>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
