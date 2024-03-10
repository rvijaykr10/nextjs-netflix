import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Nextjs | Netflix",
  description: "Nextjs | Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <header className="sticky top-0">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
