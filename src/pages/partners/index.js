import { Typography } from "@/material";
import Image from "next/image";
import React from "react";

const logos2 = [
  "/TCPP/p1.png",
  "/TCPP/p2.png",
  "/TCPP/p3.png",
  "/TCPP/p5.png",
  "/TCPP/p7.png",
  "/TCPP/p8.png",
  "/TCPP/p9.png",
  "/TCPP/p10.png",
  "/TCPP/p11.png",
  "/TCPP/p12.png",
  "/TCPP/p13.png",
  "/TCPP/p14.png",
  "/TCPP/p15.png",
  "/TCPP/p16.png",
  "/TCPP/p17.png",
];

const logos1 = [
  "/OSP/p1.png",
  "/OSP/p2.png",
  "/OSP/p3.png",
  "/OSP/p4.png",
  "/OSP/p5.png",
  "/OSP/p6.png",
];

export default function Partners() {
  return (
    <div className="py-16 mt-32">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="text-center">
          <Typography
            variant="h2"
            className="leading-tight capitalize text-blue-gray-800 dark:text-blue-gray-50 sm:text-4xl lg:text-5xl"
          >
            Our Strategic Partners
          </Typography>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {logos1.map((src, key) => (
            <div key={key} className="p-4">
              <Image
                src={src}
                className="w-52 rounded-full"
                alt={`camelcoin partner ${1}`}
                width={260}
                height={260}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-40 m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="text-center">
          <Typography
            variant="h2"
            className="leading-tight capitalize text-blue-gray-800 dark:text-blue-gray-50 sm:text-4xl lg:text-5xl"
          >
            The Camelcoin {"project's"} Partners
          </Typography>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {logos2.map((src, key) => (
            <div key={key} className="p-4">
              <Image
                src={src}
                className="w-32 rounded-full"
                alt={`camelcoin partner ${1}`}
                width={260}
                height={260}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
