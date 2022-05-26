import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble</title>
        <meta name="description" content="Naitre ensemble" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="relative bg-white overflow-hidden">
        <div className="pt-40 pb-0 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <div className="flex">
                <h1
                  style={{ color: "#bd897d" }}
                  className="pb-4 lg:pb-0 text-center text-4xl font-light tracking-tight sm:text-6xl lg:text-left"
                >
                  Bienvenue chez Naître Ensemble
                </h1>
              </div>
              <div className="lg:hidden text-center flex justify-center">
                <img
                  className="h-auto w-[250px]"
                  src="/img/logo.png"
                  alt="Naitre ensemble"
                />
              </div>
              <p
                style={{ color: "#aa8073" }}
                className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
              >
                J&apos;accompagne les femmes et les couples qui veulent vivre
                une grossesse, un accouchement et un post partum entourés
                d&apos;une personne ressource, qui leur apportera douceur et
                confiance durant ce moment de vie totalement bouleversant.
              </p>

              <div className="flex items-center justify-center mt-9">
                <img
                  src="/img/ponctuation-mark-vector.png"
                  alt=""
                  className="h-8"
                />
                <p
                  className="font-extralight text-xl pl-3"
                  style={{ color: "#aa8073" }}
                >
                  Vivons ensemble une naissance respectée et une parentalité
                  éclairée
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-[350px] lg:-translate-y-[390px] lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="/img/10.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/09.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/06.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/11.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/15.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/07.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/08.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a href="#" className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2
        style={{ color: "#bd897d" }}
        className="mt-24 text-4xl text-center font font-normal tracking-tight text-gray-900"
      >
        Mes accompagnements
      </h2>
      <div className="pt-20 pb-20 grid lg:grid-flow-col gap-16 justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
          <div className="w-full mx-auto flex justify-center">
            <img
              className="w-full h-[225px] rounded-lg"
              src="/img/16.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div
              style={{ color: "#bd897d" }}
              className="font-bold text-lg mb-2 flex justify-center"
            >
              Avant la naissance
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services-perinat">
              <button
                style={{ background: "#bd897d" }}
                className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
          <div className="w-full mx-auto flex justify-center">
            <img
              className="w-full h-[225px] rounded-lg"
              src="/img/13.jpeg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div
              style={{ color: "#bd897d" }}
              className="font-bold text-lg mb-2 flex justify-center"
            >
              Accompagnement de Doula
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services-doula">
              <button
                style={{ background: "#bd897d" }}
                className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
          <div className="w-full mx-auto flex justify-center">
            <img
              className="w-full h-[225px] rounded-lg"
              src="/img/14.jpeg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div
              style={{ color: "#bd897d" }}
              className="font-bold text-lg mb-2 flex justify-center"
            >
              Après la naissance
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services-ohmamacare">
              <button
                style={{ background: "#bd897d" }}
                className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-20 h-[600px]">
        {/* <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/mDBbDCvlL8E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          containerClass="carousel-container"
        >
          <div className="flex flex-col items-center justify-center select-none">
            <h3
              style={{ color: "#bd897d" }}
              className="text-4xl text-center font font-normal tracking-tight text-gray-900"
            >
              Sarah
            </h3>{" "}
            <p className="text-2xl mt-2 font-medium">Douceur</p>
            <p
              style={{ color: "#bd897d" }}
              className="p-10 w-[550px] text-justify font-light text-xl"
            >
              J'ai eu la chance de vivre un massage femme enceinte et de
              rencontrer Leslie. Tout a été parfait du début à la fin. Je
              recommande vivement si vous voulez vivre un moment hors du temps
              au côté d'une femme solaire et d'une douceur incroyable.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center select-none">
            <h3
              style={{ color: "#bd897d" }}
              className="text-4xl text-center font font-normal tracking-tight text-gray-900"
            >
              Sophie
            </h3>{" "}
            <p className="text-2xl mt-2 font-medium">Confiance</p>
            <p
              style={{ color: "#bd897d" }}
              className="p-10 w-[550px] text-justify font-light text-xl"
            >
              Je n'était pas prête à devenir maman. Leslie a su m'accompagner
              tout au long de ma grossesse. Elle a été d'un soutien sans faille
              alors quer j'étais seule tout en me laissant faire mes propres
              choix.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center select-none">
            <h3
              style={{ color: "#bd897d" }}
              className="text-4xl text-center font font-normal tracking-tight text-gray-900"
            >
              François
            </h3>{" "}
            <p className="text-2xl mt-2 font-medium">Interessant</p>
            <p
              style={{ color: "#bd897d" }}
              className="p-10 w-[550px] text-justify font-light text-xl"
            >
              N'ayant pas pu créer de lien avec mon bébé durant la grossesse,
              c'est grace au bain sensoriel que j'ai pu regarder mon bébé pour
              la première fois et le découvrir. Je me suis à cet instant senti
              papa pour la toute première fois.
            </p>
          </div>
        </Carousel>
      </div>

      <footer
        style={{ background: "#bd897d" }}
        className="text-center text-white border-t border-t-gray-200"
      >
        <div className="pt-9">
          <div className="flex w-full justify-center mb-9">
            <a
              href="https://www.facebook.com/naitreensemble"
              target="_blank"
              rel="noreferrer"
              className="mr-9 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="svg-inline--fa fa-facebook-f w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/naitreensemble/?hl=fr"
              target="_blank"
              rel="noreferrer"
              className="mr-9 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/leslie-r-753257126/"
              target="_blank"
              rel="noreferrer"
              className="mr-9 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="svg-inline--fa fa-linkedin-in w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center text-white p-4">© Naitre ensemble</div>
      </footer>
    </div>
  );
}
