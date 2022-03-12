import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Naitre ensemble</title>
        <meta name="description" content="Naitre ensemble" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="relative bg-white w-full">
        <div class="w-full ">
          <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1 pl-4">
              <a href="#">
                <span class="sr-only">Naitre ensemble</span>
                <img class="h-8 w-auto" src="/img/logo.png" alt="" />
              </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav class="hidden md:flex space-x-10">
              <div class="relative">
                <button
                  type="button"
                  class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span>Pour les familles</span>
                  <svg
                    class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                {/* <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="#"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Analytics
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Get a better understanding of where your traffic is
                            coming from.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Engagement
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Security
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Your customers&#039; data will be safe and secure.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Integrations
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Connect with third-party tools that you&#039;re
                            already using.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Automations
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Build strategic funnels that will drive your
                            customers to convert
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div class="flow-root">
                        <a
                          href="#"
                          class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span class="ml-3">Watch Demo</span>
                        </a>
                      </div>

                      <div class="flow-root">
                        <a
                          href="#"
                          class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span class="ml-3">Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Pour les structures{" "}
              </a>
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Votre parole{" "}
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Bon cadeau{" "}
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Contact{" "}
              </a>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
          </div>
        </div>
      </div>

      <div class="relative bg-white overflow-hidden">
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div class="sm:max-w-lg">
              <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Bienvenue chez naitre ensemble
              </h1>
              <p class="mt-4 text-xl text-gray-500">
                J'accompagne les femmes et les couples qui veulent vivre une
                grossesse, un accouchement et un post partum entourés d'une
                personne ressource, qui leur apportera douceur et confiance
                durant ce moment de vie totalement bouleversant.
              </p>
            </div>
            <div>
              <div class="mt-10">
                <div
                  aria-hidden="true"
                  class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div class="flex items-center space-x-6 lg:space-x-8">
                      <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div class="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            class="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a href="#" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>


      <h2 className="mt-24 text-4xl text-center font font-extrabold tracking-tight text-gray-900">Mes accompagnements</h2>
      <div className="pt-20 pb-20 grid grid-flow-col gap-16 justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="w-full mx-auto flex justify-center">
          <img
            class="w-32 h-32"
            src="/img/logo.png"
            alt="Sunset in the mountains"
          />
          </div>
          <div class="px-6 py-4 flex flex-col justify-center">
            <div class="font-bold text-xl mb-2 flex justify-center">Mes services périnat'</div>
            <p class="text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="w-full mx-auto flex justify-center">
          <img
            class="w-32 h-32"
            src="/img/logo.png"
            alt="Sunset in the mountains"
          />
          </div>
          <div class="px-6 py-4 flex flex-col justify-center">
            <div class="font-bold text-xl mb-2 flex justify-center">Mes services Doula</div>
            <p class="text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="w-full mx-auto flex justify-center">
          <img
            class="w-32 h-32"
            src="/img/logo.png"
            alt="Sunset in the mountains"
          />
          </div>
          <div class="px-6 py-4 flex flex-col justify-center">
            <div class="font-bold text-xl mb-2 flex justify-center">Service Ohmamacare</div>
            <p class="text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
        </div>
      </div>


      <h3 className="mt-24 text-4xl text-center font font-extrabold tracking-tight text-gray-900">Mon approche</h3>

      <p className="text-gray-700 pb-12 pt-12 text-center">Texte sur ma philosophie, mes valeurs, mon approche</p>


      <footer></footer>
    </div>
  );
}
