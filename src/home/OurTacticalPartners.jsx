import { Typography } from "@/material";
import Image from "next/image";


const logos = [
  {
    src: "/OurTacticalPartners/part1.png",
    alt: "Cardano ADA",
  },
  {
    src: "/OurTacticalPartners/part2.png",
    alt: "XT.COM",
  },
  {
    src: "/OurTacticalPartners/part3.png",
    alt: "BitMart.com",
  },
  {
    src: "/OurTacticalPartners/part4.png",
    alt: "Digital Unicorn",
  },
  {
    src: "/OurTacticalPartners/part5.png",
    alt: "CML Global",
  },
  {
    src: "/OurTacticalPartners/part6.png",
    alt: "Activ Capital",
  },
];

export default function OurTacticalPartners() {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center mx-auto">
        <div className="container relative z-[1] m-auto px-6 md:px-8">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <Typography variant="h2" className="text-blue-gray-700 dark:text-white md:text-2xl">
              Our Tactical Partners
            </Typography>
          </div>
          <div className="m-auto mt-4 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              {logos.map((item, key) => (
                <div
                  key={key}
                  className="group cursor-pointer rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-10 py-2 px-4 hover:bg-opacity-20"
                >
                  <Image
                    src={item.src}
                    className="w-16 contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt={item.alt}
                    width={260}
                    height={260}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
