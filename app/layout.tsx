import { Metadata } from "next";

import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | FinSincify Dashboard",
    default: "FinSincify Dashboard",
  },
  description:
    "Web-based system for integrated management of financial transactions: creating a dashboard for managing accounts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
