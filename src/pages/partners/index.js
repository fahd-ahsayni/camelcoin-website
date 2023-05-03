import { Typography } from "@/material";
import Image from "next/image";
import React from "react";

import tcpp1 from "../assets/TCPP/p1.png";
import tcpp2 from "../assets/TCPP/p2.png";
import tcpp3 from "../assets/TCPP/p3.png";
import tcpp5 from "../assets/TCPP/p5.png";
import tcpp7 from "../assets/TCPP/p7.png";
import tcpp8 from "../assets/TCPP/p8.png";
import tcpp9 from "../assets/TCPP/p9.png";
import tcpp10 from "../assets/TCPP/p10.png";
import tcpp11 from "../assets/TCPP/p11.png";
import tcpp12 from "../assets/TCPP/p12.png";
import tcpp13 from "../assets/TCPP/p13.png";
import tcpp14 from "../assets/TCPP/p14.png";
import tcpp15 from "../assets/TCPP/p15.png";
import tcpp16 from "../assets/TCPP/p16.png";
import tcpp17 from "../assets/TCPP/p17.png";
import Head from "next/head";


const SEO_KEYWORDS = [
  "CamelCoin",
  "Cryptocurrency",
  "Blockchain",
  "Token Distribution",
  "Digital Asset",
  "Decentralized",
  "Crypto Investment",
  "Tactical Partners",
  "Crypto Charts",
  "Project CamelCoin",
];

const logoTcpp = [
  tcpp1,
  tcpp2,
  tcpp3,
  tcpp5,
  tcpp7,
  tcpp8,
  tcpp9,
  tcpp10,
  tcpp11,
  tcpp12,
  tcpp13,
  tcpp14,
  tcpp15,
  tcpp16,
  tcpp17,
];

const LogoOsp = [
  "https://ik.imagekit.io/binwwyjjg/partners/P6.png?updatedAt=1682947256736",
  "https://ik.imagekit.io/binwwyjjg/partners/P4.png?updatedAt=1682947256719",
  "https://ik.imagekit.io/binwwyjjg/partners/P5.png?updatedAt=1682947256711",
  "https://ik.imagekit.io/binwwyjjg/partners/P2.png?updatedAt=1682947256698",
  "https://ik.imagekit.io/binwwyjjg/partners/p1.png?updatedAt=1682947256697",
  "https://ik.imagekit.io/binwwyjjg/partners/P3.png?updatedAt=1682947256707",
];

export default function Partners() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://camelcoin.io/partners" />
        <meta
          property="og:title"
          content=" CamelCoin - The Camelcoin project's Partners"
        />
        <meta
          property="og:description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="CML Global" />
        <link rel="icon" href="/favicon.ico" />
        <title>CamelCoin - The Camelcoin {"project's"} Partners</title>
        <meta
          name="description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
      </Head>
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
            {LogoOsp.map((src, key) => (
              <div key={key} className="p-4">
                <Image
                  src={src}
                  className="w-52 rounded-full opacity-0 transition-opacity duration-[2s]"
                  alt={`camelcoin partner ${1}`}
                  width={260}
                  height={260}
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
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
            {logoTcpp.map((src, key) => (
              <div key={key} className="p-4">
                <Image
                  src={src}
                  className="w-32 rounded-full opacity-0 transition-opacity duration-[2s]"
                  alt={`camelcoin partner ${1}`}
                  width={260}
                  height={260}
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
