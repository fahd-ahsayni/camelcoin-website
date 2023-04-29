import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@/material";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

function Model() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <div
        onClick={handleOpen}
        className="hidden sm:mb-8 sm:flex sm:justify-center"
      >
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-gray-600 dark:text-blue-gray-200 ring-1 ring-blue-gray-900/10 dark:ring-blue-gray-300/10 hover:ring-blue-gray-900/20 dark:hover:ring-blue-gray-300/20 dark:bg-gray-500/10">
          Chase your dreams.{" "}
          <a
            href="#"
            className="font-semibold text-brown-600 dark:text-brown-400"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Details <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <Dialog
        className="bg-gray-50 dark:bg-blue-gray-900"
        open={open}
        handler={handleOpen}
      >
        <DialogBody className="">
          <div className="flex justify-center p-4 bg-blue-blue-gray-50">
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="embed-responsive-item rounded-md absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/ppajh0EQ38s"
                allowFullScreen=""
                data-gtm-yt-inspected-2340190_699="true"
                id={240632615}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="brown" onClick={handleOpen}>
            <span>close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute lg:block hidden z-0 opacity-30 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, #f9e071 15.73%, #e6c456 15.74%, #a54b1e 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        />
        <div
          className="absolute inset-x-0 -top-72 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-300 to-brown-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="flex items-center justify-center py-8">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-brown-500/50 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-amber-200 after:via-brown-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-brown-700/10 after:dark:from-sky-900 after:dark:via-amber-500/40 before:lg:h-[360px]">
              <motion.img
                src="/images/camelcoin3d.png"
                alt="Camelcoin"
                width={200}
                height={200}
              />
            </div>
          </div>
          <Model />
          <div className="text-center">
            <h1 className="text-4xl capitalize font-bold tracking-tight text-blue-gray-900 dark:text-blue-gray-50 sm:text-6xl">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brown-400 via-brown-600 to-brown-400 animate-gradient drop-shadow-2xl">
                CamelCoin
              </span>{" "}
              project, welcome to Fairtrade Revolution
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-gray-600 dark:text-blue-gray-100">
              Join the decentralized finance revolution with Camelcoin - the
              secure and efficient digital currency that anyone can use with
              ease.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="gradient" color="green">
                Buy Camelcoin on XT.com
              </Button>
              <Button variant="gradient" color="blue">
                Buy Camelcoin now on Cameleader
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-500 to-brown-700 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
