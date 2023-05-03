import HomePage from "@/home/HomePage";
import OurTacticalPartners from "@/home/OurTacticalPartners";
import Chart from "@/home/Charts";
import Footer from "@/home/Footer";
import TokenDistribution from "@/home/TokenDistribution";
import Image from "next/image";
import Background from "./assets/legacy.png";
import About from "@/home/About";

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
  "The Hump App",
  "The CamelCoin Project Fairtrade Revolution",
  "laayoune",
  "sahara"
];

export default function Home() {
  const handleOnLoadComplete = (image) => {
    image.classList.remove("opacity-0", "dark:opacity-0");
    image.classList.add("opacity-10", "dark:opacity-20");
  };
  return (
    <>
      <Head>
        <link rel="canonical" href="https://camelcoin.io/about" />
        <meta
          property="og:title"
          content=" CamelCoin - Revolutionizing Cryptocurrency and Blockchain Technology"
        />
        <meta
          property="og:description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ik.imagekit.io/binwwyjjg/camelcoin3d__1_.png?updatedAt=1682949343358"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/binwwyjjg/camelcoin3d__1_.png?updatedAt=1682949343358"
        />
        <meta property="og:image:alt" content="CAMELCOIN" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CAMELCOIN" />
        <meta
          name="twitter:description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/binwwyjjg/camelcoin3d__1_.png?updatedAt=1682949343358"
        />
        <meta
          name="twitter:image:alt"
          content="CamelCoin - Revolutionizing Cryptocurrency and Blockchain Technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="CML Global" />
        <link rel="icon" href="/favicon.ico" />
        <title>
          CamelCoin - Revolutionizing Cryptocurrency and Blockchain Technology
        </title>
        <meta
          name="description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
      </Head>
      <section className="dark:bg-gray-900/90 bg-white/90">
        <Image
          src={Background}
          className="absolute w-full h-full top-0 dark:opacity-0 left-0 right-0 opacity-0 transition-opacity duration-[2s] object-cover"
          alt="background camelcoin"
          onLoadingComplete={(image) => handleOnLoadComplete(image)}
        />
        <main className="sr-only">
          <h1>
            CAMELCOIN API, camelcoin crypto web 3.0 metaverse project camels chameau crypto project Sahara alaayoune city marooc
          </h1>
          <h2>
            camelcoin laayoune city alaayoune maroc morocco Sahara cameleader CML Global crypto trading betcoin
          </h2>
          <h2>
            Located in the Sahara, near vast livestock and wildlife populations,{" "}
            <strong>Camelcoin</strong> is a cryptocurrency project with three
            primary goals: develop <b>Camelcoin</b> as a digital currency,
            establish CameLink blockchain for information exchange, and promote
            global acceptance of natural brown products. <mark>This comprehensive
            approach aims to boost economic development surrounding camelids</mark>,
            drive innovation across sectors (food, cosmetics, tourism, textiles,
            sports, etc.), enhance global market positioning, and create
            income-generating opportunities in underprivileged regions. The
            ecosystem will later open to 200 similar projects, expanding the{" "}
            {"platform's"} offerings to include thousands of natural products
            such as oils, honeys, and herbs.
          </h2>
        </main>
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
