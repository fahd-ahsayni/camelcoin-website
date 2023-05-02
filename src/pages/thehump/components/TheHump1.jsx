import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TheHumpApp from "../../assets/theHumpApp.png";

export default function TheHump1() {
  const [text] = useTypewriter({
    words: ["CARDANO", "AVALANCHE", "LIVE NFT MINTING"],
    loop: 0,
  });
  return (
    <section className="overflow-hidden py-12 bg-brown-600 rounded-md">
      <div className="px-4 mx-auto bg-brown-600 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div className="z-10">
              <h2 className="text-3xl lg:h-32 h-24 font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              One Wallet App For
              <span className="block">
                {text}
              </span>
              </h2>
              <p className="mt-4 text-base text-gray-50">
                The Hump Wallet App serves as the hub for ordering and tracking
                products, providing access from anywhere at any time. It ensures
                the security of valuables through NFT property certificates.
                Excitingly, the app now offers NFT sponsorship, allowing you to
                own and support ethical entities such as camels from remote
                regions, hives, trees, and even rare animals, helping combat
                illegal trafficking.
              </p>
              <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                <a href="https://apps.apple.com/ma/app/cml-globals-the-hump/id1619884482?l=fr" target="_blank" className="z-10" role="button">
                  <img
                    className="w-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://play.google.com/store/search?q=the+hump&c=apps&hl=fr&gl=US"
                  target="_blank"
                  title=""
                  className="z-10"
                  role="button"
                >
                  <img
                    className="w-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="relative px-12 z-0">
              <svg
                className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 md:-mb-72 text-brown-500 md:w-[600px] md:h-[600px] md:block hidden"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              <Image
                className="relative w-96 mx-auto -mb-60 lg:-mb-64"
                src={TheHumpApp}
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
