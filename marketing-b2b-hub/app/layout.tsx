import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-200 min-h-screen">
        <Navbar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
