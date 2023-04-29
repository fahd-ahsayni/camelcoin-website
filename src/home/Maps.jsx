import { Button, Typography } from "@/material";
import Link from "next/link";

const Maps = () => {

  return (
    <div className="relative mx-auto my-52 w-full max-w-7xl text-blue-gray-700">
      <div className="grid grid-cols-2">
        {/* :MAP CONTAINER */}
        <div className="order-1 col-span-full lg:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.1717948291557!2d-13.20073478849616!3d27.150884476408077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3773e5bd38d989%3A0x695f25348899adca!2sC.M.L%20Global!5e0!3m2!1sfr!2s!4v1682767568465!5m2!1sfr!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="order-2 col-span-full lg:col-span-1 md:order-3 md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            {/* :CONTACT INFOS CONTAINER */}
            <Typography variant="h2" color="brown" textGradient>
              Contact Details
            </Typography>
            <Typography
              variant="lead"
              textGradient
              className="text-blue-gray-600 dark:text-blue-gray-200"
            >
              Welcome to Sahara, our office is YOUR office.
            </Typography>
            <Typography variant="h2" color="brown" textGradient>
              Find us
            </Typography>
            <Typography
              variant="lead"
              textGradient
              className="text-blue-gray-600 dark:text-blue-gray-200"
            >
              CML Global SARL Mekka avenue, Laayoune, MOROCCO
            </Typography>
            <Link href="/contact">
                <Button variant="gradient" color="brown">Contact us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
