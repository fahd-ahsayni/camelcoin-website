import { Button } from "@/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsApple, BsGooglePlay } from "react-icons/bs";

export default function TheHump1() {
  const [text] = useTypewriter({
    words: ["Order", "Tracking", "NFTs"],
    loop: 0,
  });
  return (
    <div className="px-4 mx-auto mt-12 overflow-hidden bg-gradient-to-tr from-[#cd9c3f] via-[#cd9c3f] to-[#a54b1e] max-w-7xl sm:px-6 lg:px-8 shadow-lg rounded-lg">
      <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 2xl:gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:h-[150px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              <span className="block">One Wallet App For </span>
              <span>
                {text} <Cursor cursorColor="#fff" cursorStyle="_" />
              </span>
            </h2>
            <p className="mt-4 text-base text-blue-gray-50">
              The Hump Wallet App is a versatile tool for ordering and tracking
              products. It offers NFT security for valuables and lets you own
              and sponsor ethical entities like camels, hives, trees, and rare
              animals. This feature helps combat illegal traffic and supports
              ethical practices.
            </p>
            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
              <Button
                variant="gradient"
                color="white"
                className="flex items-center gap-3 text-blue-gray-900"
              >
                <BsGooglePlay className="h-4 w-4" />
                Google Play
              </Button>
              <Button
                variant="gradient"
                color="white"
                className="flex items-center gap-3 text-blue-gray-900"
              >
                <BsApple className="h-4 w-4" />
                App Store
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center w-full px-12">
            <svg
              className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-[#f6cc4d] w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            <motion.div
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="mockup-phone relative -mb-32 lg:-mb-52">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <Image
                      className="rounded-md"
                      src="/images/theHumpApp.png"
                      alt=""
                      width={360}
                      height={360}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
