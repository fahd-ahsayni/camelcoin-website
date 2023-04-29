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
    <section className="bg-brown-600 py-12 2xl:py-24 overflow-hidden">
    <div className="px-4 mx-auto bg-brown-600 max-w-7xl sm:px-6 lg:px-8">
      <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Use mobile app for better performance
            </h2>
            <p className="mt-4 text-base text-gray-50">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
              <a href="#" title="" className="flex" role="button">
                <img
                  className="w-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                  alt=""
                />
              </a>
              <a href="#" title="" className="flex" role="button">
                <img
                  className="w-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="relative px-12">
            <svg
              className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-brown-500 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px] md:block hidden"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            <Image
              className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
              src="/images/TheHumpApp.png"
              alt="The Hump App"
              width={260}
              height={260}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}
