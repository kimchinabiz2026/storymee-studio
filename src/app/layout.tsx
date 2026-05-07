import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STORYMEE — Animation Studio & IP Creator",
  description: "Where stories become worlds. Animation Studio & IP Creator based in Vietnam. storymee@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
