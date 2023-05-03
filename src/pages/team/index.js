import { Typography } from "@/material";
import Image from "next/image";

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

import person1 from "../assets/team/person1.jpg";
import person2 from "../assets/team/person2.jpg";
import person3 from "../assets/team/person3.png";
import person4 from "../assets/team/person4.jpg";
import person5 from "../assets/team/person5.jpg";
import person6 from "../assets/team/person6.jpg";
import person7 from "../assets/team/person7.jpg";
import person8 from "../assets/team/person8.jpg";
import person9 from "../assets/team/person9.jpg";
import person10 from "../assets/team/person10.jpg";
import person11 from "../assets/team/person11.jpg";
import person12 from "../assets/team/person12.png";
import Head from "next/head";

const teamMembers = [
  {
    name: "Issa Jeremy Victor",
    role: "CEO of CML GLOBAL",
    imageSrc: person1,
    altText: "Issa Jeremy Vector",
  },
  {
    name: "Reda El Bakraouy",
    role: "Design Operations Manager",
    imageSrc: person2,
    altText: "Reda El Bakraouy",
  },
  {
    name: "Lucas Kacem",
    role: "CEO of Digital Unicorn",
    imageSrc: person3,
    altText: "Lucas Kacem",
  },
  {
    name: "Abdul Raziq Kakar",
    role: "Chief Development Officer",
    imageSrc: person4,
    altText: "Abdul Raziq Kakar",
  },
  {
    name: "Bryan Truong",
    role: "CEO of Digital Unicorn",
    imageSrc: person5,
    altText: "Bryan Truong",
  },
  {
    name: "Rayan EL Kalache",
    role: "Commercial Director",
    imageSrc: person6,
    altText: "Rayan EL Kalache",
  },
  {
    name: "Andres Johnsson",
    role: "Blockchain Expert",
    imageSrc: person7,
    altText: "Andres Johnsson",
  },
  {
    name: "Noel Andrade",
    role: "Listing Director",
    imageSrc: person8,
    altText: "Noel Andrade",
  },
  {
    name: "françoise Dureuil",
    role: "Nomads Culture Expert",
    imageSrc: person9,
    altText: "frà Dureuil",
  },
  {
    name: "Ilse Koehler-Rollefson",
    role: "Camels Specialist Ethnoveterinary & Writer",
    imageSrc: person10,
    altText: "Ilse Koehler-Rollefson",
  },
  {
    name: "Dr. Bernar Faye",
    role: "Global Camelid Expert",
    imageSrc: person11,
    altText: "Dr. Bernar Faye",
  },
  {
    name: "Camel STAR",
    role: "Influencer & Desert Expert",
    imageSrc: person12,
    altText: "Camel STAR",
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://camelcoin.io/team" />
        <meta
          property="og:title"
          content=" CamelCoin - Meet our Incredible Team"
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
        <title>
          CamelCoin - Meet our Incredible Team
        </title>
        <meta
          name="description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
      </Head>
      <section className="mt-24 flex items-center justify-center sm:py-16 lg:py-24">
        <div
          className="absolute z-0 opacity-30 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, #f9e071 15.73%, #e6c456 15.74%, #a54b1e 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        />
        <div className="px-4 z-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <Typography
              variant="h2"
              className="leading-tight text-blue-gray-800 dark:text-blue-gray-50 sm:text-4xl lg:text-5xl"
            >
              Meet our Incredible Team
            </Typography>
          </div>
          <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
            {teamMembers.map((member) => (
              <>
                {member.name != "Issa Jeremy Vector" ||
                member.name != "Rayan EL Kalache" ? (
                  <div className="hidden lg:block" />
                ) : null}
                <div key={member.name}>
                  <Image
                    className="object-cover mx-auto rounded-lg w-28 h-28 opacity-0 transition-opacity duration-[2s]"
                    src={member.imageSrc}
                    alt={member.altText}
                    width={260}
                    height={260}
                    onLoadingComplete={(image) =>
                      image.classList.remove("opacity-0")
                    }
                  />
                  <p className="mt-8 font-semibold leading-tight text-blue-gray-900 dark:text-blue-gray-50">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm leading-tight text-blue-gray-600 dark:text-blue-gray-300">
                    {member.role}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
