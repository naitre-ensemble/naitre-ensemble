import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Navbar() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState();

  return (
    <div
      className="fixed top-0 w-full"
      style={{ background: "#bd897d", zIndex: 999999999 }}
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
                    <span className="mr-9">Concept</span>
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
          <nav className="hidden lg:flex w-full">
            <div className="relative flex justify-between w-full">
              <Link href="/concept">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Concept</span>
                </div>
              </Link>
              <Link href="/qui-suis-je">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Qui suis-je</span>
                </div>
              </Link>
              <div className="w-auto text-left -m-3 p-3">
                <Menu as="div" className="relative inline-block">
                  <div>
                    <Menu.Button className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline flex justify-center items-center">
                      Prestations
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item
                        >
                          {({ active }) => (
                            <div>
                            {active ? setCurrentMenu("before") : setCurrentMenu(null)}
                              <button
                                style={{ color: "#906c61" }}
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                              >
                                Avant la naissance
                                <ChevronDownIcon
                                  className="ml-2 -mr-1 h-5 w-5 text-gray-300"
                                  aria-hidden="true"
                                />
                              </button>
                              {currentMenu === "before" ? (
                                <div className="absolute -right-72 top-0 w-72 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <ul className="cursor-pointer">
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={` group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                      <Link href="/prestations/avant_naissance/massage-fertilite">
                                        Massage fertilité
                                      </Link>
                                    </li>
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={`group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                      <Link href="/prestations/avant_naissance/massage-femme-enceinte">
                                        Massage femme enceinte
                                      </Link>
                                    </li>
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={` group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                       <Link href="/prestations/avant_naissance/réflexologie-femme-enceinte">
                                        Réflexologie femme enceinte
                                      </Link>
                                    </li>
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={` group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                       <Link href="/prestations/avant_naissance/decouverte-portage-physiologique">
                                        Découverte du portage
                                      </Link>
                                    </li>
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={` group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                       <Link href="/prestations/avant_naissance/decouverte-allaitement">
                                        Découverte de l&apos;allaitement
                                      </Link>
                                    </li>
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={` group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                       <Link href="/prestations/avant_naissance/parent-coach">
                                        Atelier parent coach
                                      </Link>
                                    </li>
                                    <li
                                      style={{ color: "#906c61" }}
                                      className={` group flex w-full items-center rounded-md px-3 py-4 text-sm hover:bg-gray-100`}
                                    >
                                       <Link href="/prestations/avant_naissance/fete-future-mere">
                                        Fête de la future mère
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              ) : null}
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              style={{ color: "#906c61" }}
                              className={`${
                                active ? "bg-gray-100" : ""
                              } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                            >
                              Acommpagnement de Doula
                              <ChevronDownIcon
                                className="ml-2 -mr-1 h-5 w-5 text-gray-300"
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              style={{ color: "#906c61" }}
                              className={`${
                                active ? "bg-gray-100" : ""
                              } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                            >
                              Après la naissance
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <Link href="/forfaits">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Forfaits</span>
                </div>
              </Link>
              <Link href="/structure">
                <div className="-m-3 p-3 text-lg font-normal text-white cursor-pointer select-none hover:underline">
                  <span className="mr-9">Structure</span>
                </div>
              </Link>
              <Link href="/bon-cadeau">
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
