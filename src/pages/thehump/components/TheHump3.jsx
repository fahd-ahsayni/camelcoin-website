import { Button, Typography } from "@/material";
import Link from "next/link";

export default function TheHump3() {
  return (
    <div>
      <div className="text-center">
        <Typography
          variant="h2"
          color="brown"
          textGradient
          className="mb-4 capitalize"
        >
          The Use of NFT in the Camelcoin Project
        </Typography>
        <Typography
          variant="lead"
          className="max-w-5xl mx-auto my-4 leading-relaxed text-blue-gray-500 dark:text-blue-gray-200"
        >
          Camelcoin utilizes non-fungible tokens (NFTs) to promote ethical,
          sustainable practices in the camel industry through a global
          blockchain platform
        </Typography>
      </div>
    </div>
  );
}
