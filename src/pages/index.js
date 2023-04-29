import { Inter } from "next/font/google";
import HomePage from "@/home/HomePage";
import OurTacticalPartners from "@/home/OurTacticalPartners";
import Chart from "@/home/Charts";
import Footer from "@/home/Footer";
import TokenDistribution from "@/home/TokenDistribution";
import Maps from "@/home/Maps";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="homepage-container overflow-x-hidden">
        <main
          className={`flex w-screen min-h-screen flex-col items-center justify-satart -mt-16 bg-blue-gray-50/95 dark:bg-gray-900/80 ${inter.className}`}
        >
          <HomePage />
          <OurTacticalPartners />
          <TokenDistribution />
          <Chart />
          <Maps />
          <Footer />
        </main>
      </section>
    </>
  );
}
