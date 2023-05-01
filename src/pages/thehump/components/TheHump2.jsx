import { motion } from "framer-motion";
import { BiData } from "react-icons/bi";
import { MdOutlineManageHistory, MdOutlineSecurity } from "react-icons/md";

const features = [
  {
    name: "highly secured",
    description:
      "Totally decentralized, you own your seed phrase and your key. Unbreakable system and the safiest way to keep your assets.",
    icon: MdOutlineSecurity,
  },
  {
    name: "easily manageable",
    description:
      "With a revolutionary ergonomical design, you can manage your assets, your NFTs and your orders with one hand, fast and clear.",
    icon: MdOutlineManageHistory,
  },
  {
    name: "trust label",
    description:
      "With the connexion to ADA market cap app, you can fast check tokens and projects to avoid scams or illegal assets, more protection because safety make happy.",
    icon: BiData,
  },
];

export default function TheHump2() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden sm:px-6 lg:mt-4 mt-52">
      <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: key * 0.5 }}
              className="pt-6"
            >
              <div className="flow-root w-full h-full rounded-lg bg-gray-50 dark:bg-blue-gray-900 dark:bg-primary-dark-light px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-brown-600 via-brown-400 to-brown-300 p-3 shadow-lg">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 capitalize text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-sm text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
