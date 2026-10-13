
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "Rudra Focus Photography | Best Photography studio in Vilathikulam",
  description: "Wedding, candid and timeless photography.Best Photography studio in Vilathikulam, Best Photographer studio in Vilathikulam, Best Photo studio in Vilathikulam",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable}`}
    >
      <body className="font-sans">
        <TopBanner />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
