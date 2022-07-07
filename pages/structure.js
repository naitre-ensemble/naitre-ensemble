import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Structure() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Structure</title>
        <meta name="description" content="Naitre ensemble / Structure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full">
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "22rem",
            opacity: "0.75",
            "background-image": `url('/img/structure.png')`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-center mt-12 text-white text-4xl font-light tracking-tight sm:text-5xl lg:text-left">
                Structure
              </h1>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h2
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-10 lg:text-left"
          >
            Vous êtes une structure et vous avez des projets autour de la
            parentalité et la périnatalité ?
          </h2>
          <h3
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-10 lg:text-left"
          >
            À destination des parents
          </h3>
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Naître Ensemble vous propose diverses interventions en structure à
            destination des familles que vous accompagnez au quotidien sur des
            thématiques liées au bien être ou au développement du jeune enfant.
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Soit sous forme d&apos;ateliers parents/enfants (massage bébé,
            réflexologie, portage)
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Soit sous forme de temps dédiés aux parents uniquement (temps
            d&apos;échanges, temps de sensibilisations, temps pour prendre soin
            de soi, temps en couple...)
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            En fonction de vos objectifs et de vos projets, nous établirons
            ensemble vos besoins et les besoins des familles afin de construire
            des temps sur mesure.
          </p>

          <h4
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-10 lg:text-left"
          >
            Les thèmes disponibles sont
          </h4>

          <ul
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl text-justify lg:text-left m-5 font-extralight list-disc"
          >
            <li className="p-0 pb-4">La motricité libre</li>
            <li className="p-0 pb-4">Le massage bébé</li>
            <li className="p-0 pb-4">La réflexologie bébé émotionnelle ®</li>
            <li className="p-0 pb-4">Le portage physiologique</li>
            <li className="p-0 pb-4">
              Le portage à bras et l&apos;emmaillotage physiologique
            </li>
            <li className="p-0 pb-4">Le portage et le RGO</li>
            <li className="p-0 pb-4">Le portage et le handicap</li>
            <li className="p-0 pb-4">
              Le rituel du bain sensoriel (s&apos;exercer avant la naissance de
              bébé)
            </li>
            <li className="p-0 pb-4">
              L&apos;éveil sensoriel (approche multi sensorielle)
            </li>
            <li className="p-0 pb-4">La découverte de l&apos;allaitement</li>
            <li className="p-0 pb-4">La grossesse</li>
            <li className="p-0 pb-4">L&apos;accouchement</li>
            <li className="p-0 pb-4">Le post partum</li>
          </ul>

          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            D&apos;autres thématiques sont en cours d&apos;élaboration et seront
            disponibles à partir de 2023, cependant dans une démarche de qualité
            naître ensemble reste entièrement à l&apos;écoute de vos besoins et
            de vos demandes pour compléter son offre pour toujours mieux
            répondre aux parents et aux enfants.
          </p>

          <h5
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-10 lg:text-left"
          >
            À destination des professionnels
          </h5>

          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            À partir de son expérience et de ses connaissances dans les domaines
            de la petite enfance et de la périnatalité Naître Ensemble vous
            propose diverses sensibilisations à destination des professionnels
            sur des thématiques liées au bien être ou au développement du jeune
            enfant.
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Parce que se nourrir professionnellement c&apos;est aussi prendre le
            temps de se retrouver, de reprendre son souffle, de s&apos;écouter
            pour être à l&apos;écoute des autres dans sa pratique.
          </p>
        </div>

        <div className="grid grid-cols-3 justify-center mt-24 mb-24">
          <div className="flex justify-center items-center">
            <div className="min-w-[250px] w-[350px] h-[600px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
              <div
                style={{ color: "#bd897d" }}
                className="font-medium text-xl mt-3 mb-2 flex justify-center"
              >
                À partir de juin 2022
              </div>
              <div className="w-full mx-auto flex justify-center">
                <img
                  className="h-48 w-auto cursor-pointer"
                  src="/img/logo-white.png"
                  alt="Naitre ensemble"
                />
              </div>
              <p
                style={{ color: "#aa8073" }}
                className="mt-3 text-md p-4 lg:p-0 font-normal text-center"
              >
                Sensibilisation au massage bien être du bébé : son intérêt et
                ses utilisations en structure.
              </p>
              <div className="absolute w-full bottom-6 left-0 flex justify-center">
                <Link href="/prestations/doula">
                  <button
                    style={{ background: "#bd897d" }}
                    className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="min-w-[250px] w-[350px] h-[600px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
              <div
                style={{ color: "#bd897d" }}
                className="font-medium text-xl mt-3 mb-2 flex justify-center"
              >
                À partir de septembre 2022
              </div>
              <div className="w-full mx-auto flex justify-center">
                <img
                  className="h-48 w-auto cursor-pointer"
                  src="/img/logo-white.png"
                  alt="Naitre ensemble"
                />
              </div>
              <p
                style={{ color: "#aa8073" }}
                className="mt-3 text-md p-4 lg:p-0 font-normal text-center"
              >
                Sensibilisation à l&apos;allaitement maternel : approche
                théorique et accueil bienveillant de l&apos;allaitement en
                structure
              </p>
              <p
                style={{ color: "#aa8073" }}
                className="mt-3 text-md p-4 lg:p-0 font-normal text-center"
              >
                Sensibilisation au portage à bras : intérêt pour le bébé,
                intérêt pour le professionnel
              </p>
              <div className="absolute w-full bottom-6 left-0 flex justify-center">
                <Link href="/prestations/doula">
                  <button
                    style={{ background: "#bd897d" }}
                    className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="min-w-[250px] w-[350px] h-[600px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
              <div
                style={{ color: "#bd897d" }}
                className="font-medium text-xl mt-3 mb-2 flex justify-center"
              >
                À partir de janvier 2023 :
              </div>
              <div className="w-full mx-auto flex justify-center">
                <img
                  className="h-48 w-auto cursor-pointer"
                  src="/img/logo-white.png"
                  alt="Naitre ensemble"
                />
              </div>
              <p
                style={{ color: "#aa8073" }}
                className="mt-3 text-md p-4 lg:p-0 font-normal text-center"
              >
                Sensibilisation au portage en structure : l&apos;intérêt du
                portage en écharpe/porte bébé et des possibilités en structure
              </p>
              <p
                style={{ color: "#aa8073" }}
                className="mt-3 text-md p-4 lg:p-0 font-normal text-center"
              >
                Sensibilisation au bien être en équipe : Le rebozo un temps pour
                créer une cohésion d&apos;équipe (aménagement d&apos;un espace
                bien-être, techniques de bercements et de serrage des points du
                corps)
              </p>
              <div className="absolute w-full bottom-6 left-0 flex justify-center">
                <Link href="/prestations/doula">
                  <button
                    style={{ background: "#bd897d" }}
                    className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
