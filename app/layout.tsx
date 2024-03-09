import type { Metadata } from "next";
import { Inter, Lato, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/Footer";
import { CartProvider } from "@/lib/context/cart/cart-context";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '700', '800'], variable: '--font-inter' });
const lato = Lato({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-lato' });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '800'], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "George's Electron",
  description: "Electronics at low prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} ${poppins.variable} ${montserrat.variable} max-w-[1440px] mx-auto`}>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
