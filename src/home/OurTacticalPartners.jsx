import { Typography } from "@/material";
import Image from "next/image";

import Logo1 from "./assets/part1.png";
import Logo2 from "./assets/part2.png";
import Logo3 from "./assets/part3.png";
import Logo4 from "./assets/part4.png";
import Logo5 from "./assets/part5.png";
import Logo6 from "./assets/part6.png";

const logos = [
  {
    src: Logo1,
    alt: "Cardano ADA",
  },
  {
    src: Logo2,
    alt: "XT.COM",
  },
  {
    src: Logo3,
    alt: "BitMart.com",
  },
  {
    src: Logo4,
    alt: "Digital Unicorn",
  },
  {
    src: Logo5,
    alt: "CML Global",
  },
  {
    src: Logo6,
    alt: "Activ Capital",
  },
];

export default function OurTacticalPartners() {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center mx-auto">
        <div className="container relative z-[1] m-auto px-6 md:px-8">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <Typography
              variant="h2"
              color="brown"
              textGradient
            >
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
