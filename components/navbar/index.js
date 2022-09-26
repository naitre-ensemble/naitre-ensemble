import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Navbar() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState();

  return (
    <div
      className="fixed top-0 w-full"
      style={{ background: "#ffffff", zIndex: 999999999 }}
    >
      <div className="w-full">
        {displayMobileMenu ? (
          <div className="absolute top-0 z-50 bg-white w-full h-screen">
            <div
              style={{ color: "#906c61" }}
              onClick={() => setDisplayMobileMenu(false)}
              className="absolute right-6 top-6 cursor-pointer text-2xl"
            >
              X
            </div>
            <div className="flex justify-center mt-16">
              <div className="relative flex flex-col justify-between w-full pl-12 pr-12">
                <Link href="/concept">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Présentation</span>
                  </div>
                </Link>
                <Link href="/qui-suis-je">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Qui suis-je</span>
                  </div>
                </Link>
                <Link href="/#accompagnements">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Mes prestations</span>
                  </div>
                </Link>
                <Link href="/forfaits">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Forfaits</span>
                  </div>
                </Link>
                <Link href="/structure">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Structure</span>
                  </div>
                </Link>
                <Link href="/bon-cadeau">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Bon cadeau</span>
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="mb-3 p-3 text-lg font-normal text-gray-500 cursor-pointer select-none">
                    <span className="mr-9">Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
        <div className="flex justify-between items-center md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md mr-6 p-2 inline-flex items-center justify-center text-white focus:outline-none"
              onClick={() => {
                setTimeout(() => {
                  setDisplayMobileMenu(!displayMobileMenu);
                }, 250);
              }}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav
            className="hidden lg:flex w-full items-center"
            onMouseLeave={() => setCurrentMenu(null)}
          >
            <div className="relative flex justify-between w-full items-center">
              <Link href="/concept">
                <div
                  style={{ color: "#bd897d" }}
                  className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline"
                >
                  <span className="mr-9">Présentation</span>
                </div>
              </Link>
              <Link href="/concept">
                <div
                  style={{ color: "#bd897d" }}
                  className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline"
                >
                  <span className="mr-9">Prestations</span>
                </div>
              </Link>
              <Link href="/forfaits">
                <div
                  style={{ color: "#bd897d" }}
                  className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline"
                >
                  <span className="mr-9">Forfaits</span>
                </div>
              </Link>
              <div className="flex justify-start pl-4">
                <Link href="/">
                  <img
                    className="h-20 w-auto cursor-pointer"
                    src="/img/logov2.png"
                    alt="Naitre ensemble"
                  />
                </Link>
              </div>
              <Link href="/structure">
                <div
                  style={{ color: "#bd897d" }}
                  className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline"
                >
                  <span className="mr-9">Structure</span>
                </div>
              </Link>
              <Link href="/bon-cadeau">
                <div
                  style={{ color: "#bd897d" }}
                  className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline"
                >
                  <span className="mr-9">Bon cadeau</span>
                </div>
              </Link>
              <Link href="/contact">
                <div
                  style={{ color: "#bd897d" }}
                  className="-m-3 p-3 text-lg font-normal cursor-pointer select-none hover:underline"
                >
                  <span className="mr-9">Contact</span>
                </div>
              </Link>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
        </div>
      </div>
    </div>
  );
}
