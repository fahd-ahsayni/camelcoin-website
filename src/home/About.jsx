import Image from "next/image";
import { Button, Typography } from "@/material";
import myImage from "./assets/about.png";

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full mb-8 flex items-center justify-center">
          <Typography
            variant="h2"
            color="brown"
            textGradient
          >
            About Us
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="House"
                src={myImage}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[0.5s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-50 dark:bg-blue-gray-900">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 dark:bg-blue-gray-900 lg:bg-gray-50" />
            <div className="p-8 sm:p-16 lg:p-24">
              <Typography color="brown" textGradient variant="h3">
                A Fulfilled Ecosystem
              </Typography>
              <h2 className="text-2xl font-bold sm:text-3xl dark:text-gray-50 text-blue-gray-900">
                From projects to your house in a fairtrade way
              </h2>
              <p className="mt-4 text-blue-gray-900 font-medium dark:text-gray-300">
                A cryptocurrency based in the Sahara, near the largest
                livestocks and wild animals.
              </p>
              <p className="mt-4 text-blue-gray-800 dark:text-blue-gray-200">
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
                <a
                  href="https://drive.google.com/file/d/10Z7uqe5OKnL6x0WjQ_mAeMOWTOvup6j-/view?usp=share_link"
                  target="blank"
                >
                  <Button color="brown" variant="gradient" className="w-full">
                    Project Whitepaper
                  </Button>
                </a>

                <a
                  href="https://drive.google.com/file/d/18H4Ojo3y54gbL7ehp1EiBB9mtYBQ-FfU/view?usp=share_link"
                  target="blank"
                >
                  <Button color="brown" variant="gradient" className="w-full">
                    Blockchain Whitepaper
                  </Button>
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-start mt-4 md:mt-3 space-x-0 md:space-y-0 space-y-4 md:space-x-6">
                <a
                  href="https://drive.google.com/file/d/1c4xhP0_hx_tzwb4vQWhmlsJu9zEN4U9E/view?usp=share_link"
                  target="blank"
                >
                  <Button color="brown" variant="gradient" className="w-full">
                    Project Greenpaper
                  </Button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1k-wLcAjORlStUm0z6CnUPPSHuie47Y4O/view?usp=share_link"
                  target="blank"
                >
                  <Button color="brown" variant="gradient" className="w-full">
                    Camelcoin Pitch Deck
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
