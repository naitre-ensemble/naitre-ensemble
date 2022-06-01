import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Forfaits() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Forfaits</title>
        <meta name="description" content="Naitre ensemble / Forfaits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            Forfaits
          </h1>
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Idéal pour préparer une naissance, à offrir ou à s&apos;offrir les
            forfaits chez Naître Ensemble vous permettent de vous faire plaisir
            tout en bénéficiant d&apos;avantages. Ils nous permettent également de
            créer un lien unique avant, pendant ou après la grossesse.
          </p>

          <div className="grid lg:grid-cols-3 justify-center mt-12">
            <div className="flex justify-center items-center">
              <div className="min-w-[250px] w-[350px]  h-[550px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <div
                  style={{ color: "#bd897d" }}
                  className="font-medium text-xl mt-3 mb-2 flex justify-center"
                >
                  Forfait &quot;naître ensemble&quot;
                </div>
                <p
                  style={{ color: "#aa8073" }}
                  className="mt-3 text-xl p-4 lg:p-0 font-normal text-center"
                >
                  200 euros
                </p>
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="h-48 w-auto cursor-pointer"
                    src="/img/logo-white.png"
                    alt="Naitre ensemble"
                  />
                </div>
                <div className="mb-9 flex flex-col justify-center">
                  <ul
                    className="pl-3 text-md font-normal list-disc"
                    style={{ color: "#aa8073" }}
                  >
                    <li>un massage femme enceinte</li>
                    <li>un bain sensoriel</li>
                    <li>un massage post natal 1h15</li>
                  </ul>
                </div>
                <div className="absolute w-full bottom-6 left-0 flex justify-center">
                  <Link href="/prestations/doula">
                    <button
                      style={{ background: "#bd897d" }}
                      className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Choisir ce forfait
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[250px] w-[350px]  h-[550px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <div
                  style={{ color: "#bd897d" }}
                  className="font-medium text-xl mt-3 mb-2 flex justify-center"
                >
                  Forfait &quot;devenir parents&quot;
                </div>
                <p
                  style={{ color: "#aa8073" }}
                  className="mt-3 text-xl p-4 lg:p-0 font-normal text-center"
                >
                  180 euros
                </p>
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="h-48 w-auto cursor-pointer"
                    src="/img/logo-white.png"
                    alt="Naitre ensemble"
                  />
                </div>
                <div className="mb-9 flex flex-col justify-center">
                  <ul
                    className="pl-3 text-md font-normal list-disc"
                    style={{ color: "#aa8073" }}
                  >
                    <li>un massage femme enceinte</li>
                    <li>un atelier papa/parent coach</li>
                    <li>un atelier de portage</li>
                    <li>un atelier découverte de l&apos;allaitement</li>
                  </ul>
                </div>
                <div className="absolute w-full bottom-6 left-0 flex justify-center">
                  <Link href="/prestations/doula">
                    <button
                      style={{ background: "#bd897d" }}
                      className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Choisir ce forfait
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[250px] w-[350px] h-[550px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <div
                  style={{ color: "#bd897d" }}
                  className="font-medium text-xl mt-3 mb-2 flex justify-center"
                >
                  Forfait &quot;bien naître&quot;
                </div>
                <p
                  style={{ color: "#aa8073" }}
                  className="mt-3 text-xl p-4 lg:p-0 font-normal text-center"
                >
                  160 euros
                </p>
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="h-48 w-auto cursor-pointer"
                    src="/img/logo-white.png"
                    alt="Naitre ensemble"
                  />
                </div>
                <div className="mb-9 flex flex-col justify-center">
                  <ul
                    className="pl-3 text-md font-normal list-disc"
                    style={{ color: "#aa8073" }}
                  >
                    <li>un rituel du bain sensoriel</li>
                    <li>une séance massage bébé</li>
                    <li>un atelier de portage</li>
                  </ul>
                </div>
                <div className="absolute w-full bottom-6 left-0 flex justify-center">
                  <Link href="/prestations/doula">
                    <button
                      style={{ background: "#bd897d" }}
                      className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Choisir ce forfait
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[250px] w-[350px] h-[550px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <div
                  style={{ color: "#bd897d" }}
                  className="font-medium text-xl mt-3 mb-2 flex justify-center"
                >
                  Forfait &quot;détente&quot;
                </div>
                <p
                  style={{ color: "#aa8073" }}
                  className="mt-3 text-xl p-4 lg:p-0 font-normal text-center"
                >
                  150 euros
                </p>
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="h-48 w-auto cursor-pointer"
                    src="/img/logo-white.png"
                    alt="Naitre ensemble"
                  />
                </div>
                <div className="mb-9 flex flex-col justify-center">
                  <ul
                    className="pl-3 text-md font-normal list-disc"
                    style={{ color: "#aa8073" }}
                  >
                    <li>réflexo femme enceinte</li>
                    <li>bain sensoriel</li>
                    <li>réflexo bébé</li>
                  </ul>
                </div>
                <div className="absolute w-full bottom-6 left-0 flex justify-center">
                  <Link href="/prestations/doula">
                    <button
                      style={{ background: "#bd897d" }}
                      className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Choisir ce forfait
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[250px] w-[350px] h-[550px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <div
                  style={{ color: "#bd897d" }}
                  className="font-medium text-xl mt-3 mb-2 flex justify-center"
                >
                  Forfait sur mesure
                </div>
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="h-48 w-auto cursor-pointer"
                    src="/img/logo-white.png"
                    alt="Naitre ensemble"
                  />
                </div>
                <div className="py-6 mb-3 flex flex-col justify-center">
                  <p style={{ color: "#bd897d" }} className="text-justify">
                    - 10% dès 3 prestations réservées
                  </p>
                </div>
                <div className="absolute w-full bottom-6 left-0 flex justify-center">
                  <Link href="/prestations/doula">
                    <button
                      style={{ background: "#bd897d" }}
                      className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Choisir ce forfait
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
