import { Inter } from "next/font/google";
import HomePage from "@/home/HomePage";
import OurTacticalPartners from "@/home/OurTacticalPartners";
import Chart from "@/home/Charts";
import Footer from "@/home/Footer";
import TokenDistribution from "@/home/TokenDistribution";
import Image from "next/image";
import Background from "./assets/legacy.png";
import About from "@/home/About";

export default function Home() {
  const handleOnLoadComplete = (image) => {
    image.classList.remove("opacity-0");
    image.classList.add("opacity-20");
  };
  return (
    <>
      <section className="overflow-x-hidden scroll-smooth dark:bg-gray-900/90 bg-blue-gray-50/90">
        <Image
          src={Background}
          className="absolute w-full h-full top-0 left-0 right-0 opacity-0 transition-opacity duration-[2s] object-cover"
          alt="background camelcoin"
          onLoadingComplete={(image) => handleOnLoadComplete(image)}
        />
        <HomePage />
        <About />
        <OurTacticalPartners />
        <TokenDistribution />
        <Chart />
        <Footer />
      </section>
    </>
  );
}
