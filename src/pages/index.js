import { Inter } from "next/font/google";
import HomePage from "@/home/HomePage";
import OurTacticalPartners from "@/home/OurTacticalPartners";
import Chart from "@/home/Charts";
import Footer from "@/home/Footer";
import TokenDistribution from "@/home/TokenDistribution";


export default function Home() {
  return (
    <>
      <section className="homepage-container overflow-x-hidden">
        <div className="dark:bg-gray-900/90 bg-blue-gray-50/90">
          <HomePage />
          <OurTacticalPartners />
          <TokenDistribution />
          <Chart />
          <Footer />
        </div>
      </section>
    </>
  );
}
