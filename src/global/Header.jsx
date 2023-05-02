import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { BiMoon, BiSun } from "react-icons/bi";
import { Typography } from "@/material";
import { GiCamelHead } from "react-icons/gi";
import {
  HiCubeTransparent,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { AiOutlineTeam } from "react-icons/ai";
import { TbSteam } from "react-icons/tb";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";

const products = [
  {
    name: "Team",
    description: "Meet the CamelCoin team behind the project",
    href: "/team",
    icon: AiOutlineTeam,
  },
  {
    name: "Partners",
    description: "Our trusted partners in the CamelCoin ecosystem.",
    href: "/partners",
    icon: TbSteam,
  },
  {
    name: "ICO",
    description:
      "Join the CamelCoin ICO and be a part of the future of secure and decentralized digital transactions",
    href: "/ico",
    icon: SquaresPlusIcon,
  },
];

const callsToAction = [
  {
    name: "Contact us",
    href: "/contact",
    icon: IoMailOutline,
  },
  { name: "Call us", href: "tel:+212808657569", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [darkMode, setDarkMode] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    const initializeDarkMode = () => {
      const storedDarkMode = localStorage.getItem("darkMode");
      const isDarkModePreferred = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialDarkMode =
        storedDarkMode || (isDarkModePreferred ? "dark" : "light");
      setDarkMode(initialDarkMode);
    };

    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    initializeDarkMode();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (darkMode === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {!mobileMenuOpen && (
          <div className="flex lg:flex-1">
            <Link href="/">
              <Typography
                variant="h5"
                className="dark:text-blue-gray-50 space-x-2 flex items-center justify-center text-blue-gray-900"
              >
                <Image
                  src="/logo.png"
                  width={40}
                  height={40}
                  alt="camelcoin logo"
                  className="w-5 h-5"
                />
                <span>Camelcoin</span>
              </Typography>
            </Link>
          </div>
        )}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen && (
              <Bars3Icon
                className="h-6 w-6 text-gray-900 dark:text-gray-50"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex space-x-2 items-center gap-x-1 text-sm font-semibold leading-6 dark:text-blue-gray-50 text-blue-gray-900">
              <HiOutlineSquare3Stack3D className="w-5 h-5" />
              <span>Pages</span>
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-blue-gray-900 dark:text-blue-gray-50"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-black shadow-lg ring-1 ring-blue-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-gray-50 dark:hover:bg-blue-gray-900"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blue-gray-50 dark:bg-blue-gray-700 group-hover:bg-white dark:group-hover:bg-black">
                        <item.icon
                          className="h-6 w-6 text-blue-gray-600 dark:text-gray-400 group-hover:text-brown-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-blue-gray-900 dark:text-gray-50"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-blue-gray-600 dark:text-blue-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-blue-gray-900/5 bg-blue-gray-50 dark:bg-blue-gray-900">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-blue-gray-900 dark:text-blue-gray-50 hover:bg-blue-gray-100 dark:hover:bg-blue-gray-800"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-blue-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/thehump"
            className="text-sm space-x-2 flex items-center justify-center font-semibold leading-6 text-blue-gray-900 dark:text-blue-gray-50"
          >
            <HiOutlineDevicePhoneMobile className="w-5 h-5" />
            <span>Hump App</span>
          </Link>
          <a
            href="https://cmlglobal.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm space-x-2 flex items-center justify-center font-semibold leading-6 text-blue-gray-900 dark:text-blue-gray-50"
          >
            <HiCubeTransparent className="w-5 h-5" />
            <span>CML Global</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm space-x-2 flex items-center justify-center font-semibold leading-6 text-blue-gray-900 dark:text-blue-gray-50"
          >
            <GiCamelHead className="w-5 h-5" />
            <span>Cameleader (coming soon)</span>
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {darkMode === "light" ? (
            <BiMoon
              onClick={toggleDarkMode}
              className="w-8 h-8 cursor-pointer text-blue-gray-900 hover:bg-blue-blue-gray-50 dark:hover:bg-blue-gray-50/20 p-1.5 rounded-full"
            />
          ) : (
            <BiSun
              onClick={toggleDarkMode}
              className="w-8 h-8 cursor-pointer text-blue-gray-50 hover:bg-blue-blue-gray-50 dark:hover:bg-blue-gray-50/20 p-1.5 rounded-full"
            />
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Contact</span>
              {mobileMenuOpen && (
                <Link href="/"  onClick={() => setMobileMenuOpen(false)}>
                  <Typography
                    variant="h5"
                    className="dark:text-blue-gray-50 space-x-2 flex items-center justify-center text-blue-gray-900"
                  >
                    <Image
                      src="/logo.png"
                      width={40}
                      height={40}
                      alt="camelcoin logo"
                      className="w-5 h-5"
                    />
                    <span>Camelcoin</span>
                  </Typography>
                </Link>
              )}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-blue-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {mobileMenuOpen && (
                <XMarkIcon
                  className="h-6 w-6 text-blue-gray-900 dark:text-blue-gray-50"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-blue-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center dark:text-gray-50 text-blue-gray-900 justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-blue-gray-50 dark:hover:bg-gray-800">
                        Pages
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Link
                            onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            className="block"
                            href={item.href}
                          >
                            <Disclosure.Button className="rounded-lg py-2 pl-6 pr-20 text-sm font-semibold leading-7 text-blue-gray-900 dark:text-blue-gray-200 dark:hover:text-blue-gray-50 dark:hover:bg-gray-800 hover:bg-blue-gray-50">
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/thehump"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-gray-900 dark:hover:bg-gray-800 dark:text-blue-gray-50 hover:bg-blue-gray-50"
                >
                  Hump App
                </Link>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cmlglobal.tech/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-gray-900 dark:hover:bg-gray-800 dark:text-blue-gray-50 hover:bg-blue-gray-50"
                >
                  CML Global
                </a>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-gray-900 dark:hover:bg-gray-800 dark:text-blue-gray-50 hover:bg-blue-gray-50"
                >
                  Cameleader (coming soon)
                </a>
              </div>
              <div className="">
                {darkMode === "light" ? (
                  <div
                    onClick={toggleDarkMode}
                    className="flex items-center py-2 mt-2 hover:bg-blue-gray-50 cursor-pointer rounded-lg"
                  >
                    <BiMoon className="w-8 h-8 cursor-pointer text-blue-gray-800 p-1.5 rounded-full" />
                    <span className="text-blue-gray-800 font-semibold">
                      Dark Mode ?
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={toggleDarkMode}
                    className="flex items-center py-2 mt-2 hover:bg-gray-800 cursor-pointer rounded-lg"
                  >
                    <BiSun className="w-8 h-8 cursor-pointer text-blue-gray-50 p-1.5 rounded-full" />
                    <span className="text-blue-gray-50 font-semibold">
                      Light Mode ?
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
