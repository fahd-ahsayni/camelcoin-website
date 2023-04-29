import { Typography } from "@/material";

export default function StatsHeader() {
  return (
    <>
      <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-lg px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-blue-gray-500">
              Minted Supply
            </dt>
            <Typography
              variant="h1"
              color="brown"
              textGradient
              className="text-4xl font-extrabold md:text-5xl"
            >
              40.0M
            </Typography>
          </div>
          <div className="flex flex-col rounded-lg px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-blue-gray-500">
              Circulating supply
            </dt>
            <Typography
              variant="h1"
              color="brown"
              textGradient
              className="text-4xl font-extrabold md:text-5xl"
            >
              5.0M
            </Typography>
          </div>
        </dl>
      </div>
    </>
  );
}
