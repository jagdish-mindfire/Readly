import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import { getAllPages } from "../../../sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Readly | Blogs",
  description: "A user-friendly platform for sharing and discovering blogs, where writers express their thoughts and readers explore diverse content seamlessly",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getAllPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 px-4">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <Link
            href="/"
            className="bg-gradient-to-r from-red-800 via-blue-500 to-purple-800 bg-clip-text text-transparent text-3xl font-extrabold mb-4 sm:mb-0"
          >
            Home
          </Link>
          <nav className="flex flex-wrap items-center gap-4">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="text-gray-600 hover:text-gray-800 text-lg font-medium transition-colors duration-200"
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
