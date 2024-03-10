import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Nextjs | Netflix",
  description: "Nextjs | Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black px-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
