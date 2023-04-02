import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as rdd from "react-device-detect";

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
  const isMobile = rdd.isMobile;

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble</title>
        <meta
          name="description"
          content="Accompagnement pour femmes & couples pendant grossesse, accouchement & post-partum. Profitez d'une personne ressource chez Naitre ensemble pour vivre ces moments avec sérénité."
        />
      </Head>

      <Navbar />

      <div className="relative bg-white overflow-hidden">
        <div className="pt-40 pb-0 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <div className="flex">
                <h1
                  style={{ color: "#bd897d" }}
                  className="text-center text-4xl font-light tracking-tight sm:text-6xl lg:text-left"
                >
                  Bienvenue chez Naître Ensemble
                </h1>
              </div>
              <div className="lg:hidden text-center flex justify-center">
                <img
                  className="h-auto w-[300px]"
                  src="/img/logo-mobile-with-text.png"
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
                  alt="Ponctuation mark"
                  className="h-8 pl-4 lg:pl-0"
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
                            alt="Femme qui embrasse son bébé"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/09.jpeg"
                            alt="Main qui touche le pied d'un bébé"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/06.jpeg"
                            alt="Couple qui tient une photo d'écographie"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/11.jpeg"
                            alt="Femme qui allaite son bébé"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/15.png"
                            alt="Femme enceinte avec une main qui touche son ventre"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/07.jpeg"
                            alt="Femme enceinte vue de dos"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="/img/08.jpeg"
                            alt="Père qui dors avec son bébé"
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
        id="accompagnements"
        style={{ color: "#bd897d" }}
        className="mt-24 text-4xl text-center font-normal tracking-tight text-gray-900"
      >
        Mes accompagnements
      </h2>
      <div className="pt-20 pb-20 grid lg:grid-flow-col gap-16 justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
          <div className="w-full mx-auto flex justify-center">
            <img
              className="w-full rounded-lg"
              src="/img/16.png"
              alt="Avant la naissance"
            />
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div
              style={{ color: "#bd897d" }}
              className="font-normal text-lg mb-2 flex justify-center"
            >
              Avant la naissance
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/prestations/avant_naissance">
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
              className="w-full rounded-lg"
              src="/img/doula.png"
              alt="Accompagnement de doula"
            />
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div
              style={{ color: "#bd897d" }}
              className="font-normal text-lg mb-2 flex justify-center"
            >
              Accompagnement de Doula
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/accompagnement-doula">
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
              className="w-full rounded-lg"
              src="/img/naissance.png"
              alt="Après la naissance"
            />
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div
              style={{ color: "#bd897d" }}
              className="font-normal text-lg mb-2 flex justify-center"
            >
              Après la naissance
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/prestations/apres_naissance">
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
          showDots={isMobile ? false : true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          dotListClass="custom-dot-list-style"
          containerClass="carousel-container"
        >
          <div className="flex flex-col items-center justify-center select-none">
            <h3
              style={{ color: "#bd897d" }}
              className="text-lg text-center font font-normal tracking-tight text-gray-900"
            >
              Massage femme enceinte
            </h3>{" "}
            <p
              className="text-3xl lg:text-5xl mt-2 font-medium pt-3 uppercase"
              style={{ color: "#bd897d" }}
            >
              Douceur
            </p>
            <p
              style={{ color: "#bd897d" }}
              className="p-10 w-[300px] lg:w-[850px] text-justify font-light text-lg"
            >
              J&apos;ai eu la chance de vivre un massage femme enceinte et de
              rencontrer Leslie. Tout a été parfait du début à la fin. Je
              recommande vivement si vous voulez vivre un moment hors du temps
              au côté d&apos;une femme solaire et d&apos;une douceur incroyable.
            </p>
            <p
              style={{ color: "#bd897d" }}
              className="text-2xl text-center font font-normal tracking-tight text-gray-900"
            >
              Sarah
            </p>{" "}
          </div>
          <div className="flex flex-col items-center justify-center select-none">
            <h3
              style={{ color: "#bd897d" }}
              className="text-lg text-center font font-normal tracking-tight text-gray-900"
            >
              Accompagnement de Doula
            </h3>{" "}
            <p
              className="text-3xl lg:text-5xl mt-2 font-medium pt-3 uppercase"
              style={{ color: "#bd897d" }}
            >
              Confiance
            </p>
            <p
              style={{ color: "#bd897d" }}
              className="p-10 w-[300px] lg:w-[850px]  text-justify font-light text-xl"
            >
              Je n&apos;était pas prête à devenir maman. Leslie a su
              m&apos;accompagner tout au long de ma grossesse. Elle a été
              d&apos;un soutien sans faille alors que j&apos;étais seule, tout
              en me laissant faire mes propres choix.
            </p>
            <h3
              style={{ color: "#bd897d" }}
              className="text-2xl text-center font font-normal tracking-tight text-gray-900"
            >
              Sophie
            </h3>{" "}
          </div>
          <div className="flex flex-col items-center justify-center select-none">
            <h3
              style={{ color: "#bd897d" }}
              className="text-lg text-center font font-normal tracking-tight text-gray-900"
            >
              Rituel du bain sensoriel®️
            </h3>{" "}
            <p
              className="text-3xl lg:text-5xl mt-2 font-medium pt-3 uppercase"
              style={{ color: "#bd897d" }}
            >
              Extraordinaire
            </p>
            <p
              style={{ color: "#bd897d" }}
              className="p-10 w-[300px] lg:w-[850px] text-justify font-light text-xl"
            >
              N&apos;ayant pas pu créer de lien avec mon bébé durant la
              grossesse, c&apos;est grâce au bain sensoriel que j&apos;ai pu
              découvrir mon bébé et apprendre à lui donner un bain tout en
              douceur. Je me suis à cet instant senti papa pour la toute
              première fois.
            </p>
            <h3
              style={{ color: "#bd897d" }}
              className="text-2xl text-center font font-normal tracking-tight text-gray-900"
            >
              François
            </h3>{" "}
          </div>
        </Carousel>
      </div>

      {/* <div
        className="h-auto lg:h-[300px] pt-10 flex flex-col items-center"
        style={{ background: "#cda69e" }}
      >
        <h4 className="text-center">
          <span className="text-lg lg:text-2xl mb-1 block text-center italic font-normal text-gray-600">
            Abonnez vous à
          </span>
          <span className="text-2xl lg:text-4xl block text-center font-normal tracking-tight text-gray-600">
            LA NEWSLETTER Naître Ensemble
          </span>
          <span className="mt-2 text-lg lg:text-2xl block text-center font-normal tracking-tight text-gray-600">
            pour recevoir des offres exclusives, des nouveautés et des astuces
          </span>
        </h4>
        <div className="mt-10 mb-6 flex">
          <input
            className="appearance-none h-12 block w-[200px] lg:w-[500px] bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="email"
            autoComplete="email"
            required
            placeholder="leslie@gmail.com"
          />
          <button
            style={{ background: "#bd897d" }}
            className="shadow h-12 ml-1 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded"
            type="button"
          >
            S&apos;abonner
          </button>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
