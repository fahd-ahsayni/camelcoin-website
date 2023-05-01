import Image from "next/image";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import RotateCoin from "./assets/aaa.gif"

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="md:px-12 px-4 relative lg:px-28">
        <div className="container flex items-center justify-center flex-col m-auto space-y-6 text-blue-gray-600 dark:text-blue-gray-300">
          <Image
            src={RotateCoin}
            width={260}
            height={260}
            alt="Camelcoin"
            className="m-auto w-24"
          />

          <p className="mt-1 text-center max-w-2xl text-sm leading-6 text-blue-gray-500 dark:text-blue-gray-200">
            The administrative information provided through the Website does not
            replace the legal publicity of laws, regulations, plans, general
            provisions and acts that have to be formally published in the
            official journals of public administrations, which constitute the
            only instrument that attests of its authenticity and content. The
            information available on this Website should be understood as a
            guide without legal validity. Crypto products and NFTs are
            unregulated and can be highly risky. There may be no regulatory
            recourse for any loss from such transactions. The relations
            established between CAMELCOIN and the User shall be governed by the
            provisions of the regulations in force regarding the applicable
            legislation and the competent jurisdiction. However, for cases in
            which the regulations provide for the possibility for the parties to
            submit to a jurisdiction, CAMELCOIN and the User, expressly waiving
            any other jurisdiction that may apply to them, submit to the Courts
            and Tribunals of the {"user's"} country.
          </p>

          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <a href="mailto:hello@mail.com" aria-label="send mail">
              <IoCallSharp className="w-6 h-6" />
            </a>
            <a href="tel:+243996660436" aria-label="call">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" title="facebook" target="blank" aria-label="facebook">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" title="facebook" target="blank" aria-label="facebook">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" title="linkedin" target="blank" aria-label="linkedin">
              <AiOutlineWhatsApp className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center">
            <span className="text-sm tracking-wide">
            Copyright © CML Global <span id="year">2023</span> | All right reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
