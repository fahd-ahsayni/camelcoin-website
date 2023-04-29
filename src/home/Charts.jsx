import { Typography } from "@/material";
import ProgressBar from "./components/ProgressBar";
import StatsHeader from "./components/StatsHeader";
import CoinMarketCapWidget from "./components/CoinMarketCapWidget";

const progressData = [
  {
    title: "Projects Funding",
    progress: 50,
    progresBackground: "bg-gradient-to-r from-red-300 to-red-600",
    color: "text-red-500",
  },
  {
    title: "Security Reserve",
    progress: 15,
    progresBackground: "bg-gradient-to-r from-blue-300 to-blue-600",
    color: "text-blue-500",
  },
  {
    title: "Camelink Development",
    progress: 20,
    progresBackground: "bg-gradient-to-r from-lime-300 to-lime-600",
    color: "text-lime-500",
  },
  {
    title: "Team & Partners",
    progress: 7,
    progresBackground: "bg-gradient-to-r from-amber-300 to-amber-600",
    color: "text-amber-500",
  },
  {
    title: "Promotion & Marketing",
    progress: 5,
    progresBackground: "bg-gradient-to-r from-green-300 to-green-600",
    color: "text-green-500",
  },
  {
    title: "Legal Works",
    progress: 3,
    progresBackground: "bg-gradient-to-r from-cyan-300 to-cyan-600",
    color: "text-cyan-500",
  },
];

export default function Chart() {
  return (
    <section className="lg:px-8 px-1 max-w-7xl mx-auto">
      <div className="py-1 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto flex items-center justify-center flex-col max-w-full sm:px-6 lg:px-8">
          <div className="text-center">
            <Typography
              variant="h2"
              className="text-blue-gray-700 dark:text-white md:text-2xl"
            >
              Tokenomics chart
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-xl mx-auto mb-4 mt-2 leading-relaxed text-blue-gray-500 dark:text-blue-gray-300"
            >
              Total supply 170 Million
            </Typography>
          </div>
          <StatsHeader />
          <section className="mt-8">
            <div className="relative lg:min-w-[900px]  xl:min-w-[1250px] px-4 pb-8 pt-5 xl:pt-0 dark:text-gray-300 sm:px-6 lg:px-8">
              <div className="px-5 mt-8">
                <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
                  {progressData.map(
                    ({ title, progress, color, progresBackground }, key) => (
                      <div
                        key={key}
                        className="flex space-y-4 flex-col items-start"
                      >
                        <h5>
                          <span className="text-lg text-blue-gray-700 dark:text-blue-gray-300 mr-4">
                            {title}
                          </span>
                          <span className={`${color} text-lg font-semibold`}>
                            {progress}%
                          </span>
                        </h5>
                        <ProgressBar
                          progress={progress}
                          bg={progresBackground}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CoinMarketCapWidget />
    </section>
  );
}
