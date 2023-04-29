import Image from "next/image";
import { Button } from "@/material";

export default function About() {
  return (
    <section>
      <div className="mx-auto mt-12 max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                height={400}
                width={400}
                alt="House"
                src="/images/about.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-50 dark:bg-blue-gray-900">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 dark:bg-blue-gray-900 lg:bg-gray-50" />
            <div className="p-8 sm:p-16 lg:p-24">
              <h3 className="text-brown-400 text-lg font-semibold tracking-wider">
                A Fulfilled Ecosystem
              </h3>
              <h2 className="text-2xl font-bold sm:text-3xl dark:text-gray-50 text-blue-gray-900">
                From projects to your house in a fairtrade way
              </h2>
              <p className="mt-4 text-blue-gray-700 font-medium dark:text-gray-300">
                A cryptocurrency based in the Sahara, near the largest
                livestocks and wild animals.
              </p>
              <p className="mt-4 text-blue-gray-600 dark:text-blue-gray-200">
                The camelcoin team aims to create and develop a cryptocurrency
                (Camelcoin), design its own information exchange network
                (CameLink blockchain) and facilitate the democratization and
                recognition of brown products in the world. This triple solution
                will collectively help support the economic development of all
                activities around camelids, stimulate innovation in all sectors
                of these activities (food, cosmetics, tourism, textiles, sports,
                etc.) and improve the position of these markets globally as well
                as create new income generating activities in particular areas
                in need. This whole ecosystem will then be open to 200 limited
                similar projects and expand the natural products available in
                the platform to thousands and all needs (oils, honeys, herbs...)
              </p>
              <div className="flex flex-col md:flex-row items-center justify-start space-x-0 md:space-y-0 md:space-x-6 space-y-4 mt-8">
                <Button color="brown" variant="gradient" className="w-full">
                  Project whitepaper
                </Button>
                <Button color="brown" variant="gradient" className="w-full">
                  blockchaine
                </Button>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-start mt-4 md:mt-3 space-x-0 md:space-y-0 space-y-4 md:space-x-6">
                <Button color="brown" variant="gradient" className="w-full">
                  project greenpaper
                </Button>

                <Button color="brown" variant="gradient" className="w-full">
                  camelcoin pitch deck
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
