import {ClerkProvider} from "@clerk/nextjs";
import type { Metadata } from "next";
import "@/styles/globals.css";
import {primaryFont} from "@/lib/fonts";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
  title: "COOL SAAS",
  description: "COOL SAAS GENERATOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
      <body className={cn(primaryFont.variable, 'antialiased')}>
      {children}
      </body>
      </html>
    </ClerkProvider>
  );
}
