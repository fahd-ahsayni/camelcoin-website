import { GiCamel, GiProgression, GiCubeforce } from "react-icons/gi";
import { AiOutlineAppstore, AiOutlineFileDone } from "react-icons/ai";
import { IoOptions } from "react-icons/io5";
import { motion } from "framer-motion";
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

const features = [
  {
    name: "CameLink Blockchain",
    description:
      "Our POS blockchain enables swift and cheap transactions, With the Hump app, we track and secure ethical commerce actions, Ensuring fair trade and transparency, our system creates satisfaction.",
    icon: GiCubeforce,
  },
  {
    name: "Volume Strategy",
    description:
      "The Camelcoin project partners will accept CML as payment for 5% to 25% of their turnover on the CamelZone platform. This will increase daily transaction volumes and the utility value of Camelcoin.",
    icon: GiProgression,
  },
  {
    name: "The Hump App",
    description:
      "The Hump is a wallet app for safe storage and staking of Camelcoin and upcoming tokens. It also tracks and scans for producers and buyers on CamelZone.",
    icon: AiOutlineAppstore,
  },
  {
    name: "Staking Options",
    description:
      "The Hump wallet app offers staking options for holding Camelcoin (CML), with monthly rewards based on the amount held. This increases rarity and potential price appreciation of Camelcoin.",
    icon: IoOptions,
  },
  {
    name: "CamelZone Platform",
    description:
      "CameLink will be the first trustlabel blockchain, approving only ethical projects on CamelZone. This diversifies products and users, increasing transaction volumes.",
    icon: GiCamel,
  },
  {
    name: "200 Smartcontract Limited",
    description:
      "CameLink limits smart contract creation and approves only ethical projects to sell on CamelZone. This diversifies products and users, increasing transaction volumes.",
    icon: AiOutlineFileDone,
  },
];

export default function Ico() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://camelcoin.io/team" />
        <meta
          property="og:title"
          content=" CamelCoin - ICO"
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
        <title>CamelCoin - ICO</title>
        <meta
          name="description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
      </Head>
      <section className="bg-blue-gray-50 z-[0] dark:bg-gray-900 flex items-center justify-center overflow-x-hidden">
        <div className="relative mt-22 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-50 sm:text-4xl">
              Reason For The Success Of{" "}
              <sapn className="text-brown-500 dark:text-brown-400">
                Camelcoin
              </sapn>{" "}
              Crypto-Economy
            </p>
            <p className="mx-auto mt-5 max-w-prose text-blue-gray-600 dark:text-gray-300">
              Our economic system relies on supply and demand, Camelcoin{"'"}s
              business model aims to expand its customer base, By managing its
              services and users, the value of Camelcoin elevates.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, key) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: key * 0.5 }}
                    className="pt-6"
                  >
                    <div className="flow-root w-full h-full rounded-lg bg-gray-50 dark:bg-blue-gray-900 px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-brown-600 via-brown-400 to-brown-400 p-3 shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-blue-gray-900 dark:text-white">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-sm text-blue-gray-500 dark:text-blue-gray-100">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
