import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// SpaceX uses a custom version of Helvetica Neue or D-DIN
// Roboto is a close alternative available on Google Fonts
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Matthew Arenivas",
  description: "Coded by Matthew Arenivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
