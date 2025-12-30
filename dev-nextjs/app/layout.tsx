

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./legacy.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aureon Printing 元色印页 - Professional Printing Services",
  description: "One-stop shop for Digital, Offset & Large Format Printing. 数码印刷、平版印刷、大型喷绘到后加工一站式完成",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

