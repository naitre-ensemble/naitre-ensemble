import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  return (
    <div className="fixed top-0 w-full" style={{ background: "#bd897d", zIndex: 999999999 }}>
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
              <ul className="bg-white border border-gray-200 w-full text-gray-900">
                <li className="px-6 py-2 w-full rounded-b-lg">
                  <Link href="/contact">
                    <div className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-3">Qui suis-je</span>
                    </div>
                  </Link>
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  <Link href="/services-perinat">
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Mes services périnat
                        </p>
                        <p className="mt-1 text-lg text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  <Link href="/services-doula">
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Mes services Doula
                        </p>
                        <p className="mt-1 text-lg text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  <Link href="/services-ohmamacare">
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Service Ohmamacare
                        </p>
                        <p className="mt-1 text-lg text-gray-500">
                          Your customers&#039; data will be safe and secure.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  <Link href="/ateliers-parents-enfants">
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Ateliers parents enfants
                        </p>
                        <p className="mt-1 text-lg text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="px-6 py-2 w-full rounded-b-lg">
                  <Link href="/sensibilisation-pro">
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Sensibilitations pro
                        </p>
                        <p className="mt-1 text-lg text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="px-6 py-2 w-full rounded-b-lg">
                  <Link href="/contact">
                    <div className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 cursor-pointer">
                      <svg
                        style={{ color: "#995b37" }}
                        className="flex-shrink-0 h-6 w-6"
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-3">Contact</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start pl-4">
            <Link href="/">
              <img
                className="h-20 w-auto cursor-pointer"
                src="/img/logo.png"
                alt="Naitre ensemble"
              />
            </Link>
          </div>
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
          <nav className="w-full">
            <div className="relative flex justify-between w-full pl-12 pr-12">
              <Link href="/qui-suis-je">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Qui suis-je</span>
                </div>
              </Link>
              <Link href="/prestations">
                <div className="-m-3 p-3 text-lg  font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Mes prestations</span>
                </div>
              </Link>
              <Link href="/forfaits">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Forfaits</span>
                </div>
              </Link>
              <Link href="/structure">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Structures</span>
                </div>
              </Link>
              <Link href="/structure">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Bon cadeau</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
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
