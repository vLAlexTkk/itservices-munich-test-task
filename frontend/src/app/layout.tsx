import type { Metadata } from "next";

import "./globals.css";
import { CategoryProvider } from "@/context/CategoryContext";

export const metadata: Metadata = {
  title: "ITServices Munich Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CategoryProvider>
        <body>{children}</body>
      </CategoryProvider>
    </html>
  );
}
