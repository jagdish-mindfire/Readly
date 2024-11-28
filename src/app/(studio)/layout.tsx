import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Readly | Blogs",
  description: "A user-friendly platform for sharing and discovering blogs, where writers express their thoughts and readers explore diverse content seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
