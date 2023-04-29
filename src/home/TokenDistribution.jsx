import { Typography } from "@/material";

const data = [
  {
    name: "Name",
    description: "CamelCoin (CML)",
  },
  {
    name: "Smartcontract :",
    description: "0910961aa7c9bc105fe3ed3b9fae2df4fa3e5838c22c143f92726545",
  },
  {
    name: "Cardanoscan",
    description: "view on cardanoscan.io",
    href: "https://cardanoscan.io/token/0910961aa7c9bc105fe3ed3b9fae2df4fa3e5838c22c143f9272654543616d656c636f696e?address=addr1qx4ucra629anu8nw2842q7079eepeq022jjdp987g804g66r59au7x6ehyatgy0yu5fa8dtlkwqwefxstfe46n27kqsshg3smg",
  },
  {
    name: "Supply Minted",
    description: "40 000 000",
  },
  {
    name: "Max Total Supply",
    description: "170 000 000",
  },
  {
    name: "Purchase Method",
    description: "USDT",
  },
  {
    name: "Soft Cap 5M $",
    description: "Hard Cap 75M $",
  },
  {
    name: "KYC (Know Your Customer)",
    description: "YES",
  },
  {
    name: "Whitelist",
    description: "YES",
  },
  {
    name: "Min/Max Personal Cap",
    description: "125$ / 100K $ (anti whale system)",
  },
  {
    name: "Lock Security",
    description: "YES (anti dump system)",
  },
];
export default function TokenDistribution() {
  return (
    <div className="px-8 my-32 max-w-7xl mx-auto">
      <div className="px-4 sm:px-0">
        <Typography
          variant="h2"
          textGradient
          color="brown"
          className="leading-7"
        >
          Token Distribution
        </Typography>
        <p className="mt-1 text-sm leading-6 text-blue-gray-500 dark:text-blue-gray-200">
          Here are some of the mains informations concernig the camelcoin token
          on Cardano blockchain before {"it's"} switch to th CameLink
          blockchain. Most of those main functions will stay after that. There
          is a 170 Million token limited supply and half of the {"ICO's"} unsold
          supply will be burned and no more token will be edited. Anti whale and
          security lock system are made to avoid a massive sell and a dump after
          listing while waiting for the deployment of our own global ecosystem.
          A bonus system will be unlock after listing so all holders will be
          rewarded at the switch to CameLink.
        </p>
      </div>
      <div className="mt-6 border-t border-blue-gray-100 dark:border-blue-gray-800">
        <dl className="divide-y divide-blue-gray-100 dark:divide-blue-gray-800">
          {data.map(({ name, description, href }, key) => (
            <div
              key={key}
              className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            >
              <dt className="text-sm font-medium leading-6 text-blue-gray-900 dark:text-blue-gray-50">
                {name}
              </dt>
              {href ? (
                <a
                  href={href}
                  className="mt-1 text-sm leading-6 text-blue-600 dark:text-blue-400 sm:col-span-2 sm:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {description}
                </a>
              ) : (
                <dd className="mt-1 text-sm leading-6 text-blue-gray-700 dark:text-blue-gray-200 sm:col-span-2 sm:mt-0">
                  {description}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
