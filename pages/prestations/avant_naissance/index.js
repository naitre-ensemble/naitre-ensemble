import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";

export default function Prestations() {
  const dataset = [
    {
      image: "massage_fertilite.jpeg",
      title: "massage fertilité",
      url: "massage-fertilite",
    },
    {
      image: "massage_bien_etre_femme_enceinte.jpeg",
      title: "massage bien-être de la femme enceinte",
      url: "massage-femme-enceinte",
    },
    {
      image: "reflexologie_detente_femme_enceinte.png",
      title: `réflexologie "détente" de la femme enceinte`,
      url: "réflexologie-femme-enceinte",
    },
    {
      image: "portage.png",
      title: "atelier découverte du portage physiologique",
      url: "decouverte-portage-physiologique",
    },
    {
      image: "allaitement.png",
      title: "atelier découverte de l&apos;allaitement",
      url: "decouverte-allaitement",
    },
    {
      image: "papa_coach.jpeg",
      title: "atelier papa/parent coach",
      url: "parent-coach",
    },
    {
      image: "fete_future_mere.jpeg",
      title: "Fête de la future mère",
      url: "fete-future-mere",
    },
  ];

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Prestations</title>
        <meta name="description" content="Naitre ensemble / Prestations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            Prestations
          </h1>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Découvrez l&apos;ensemble de mes prestations qui ont été
            spécialement choisies et conçues pour vous accompagner avant,
            pendant et après la naissance de votre enfant. Chez Naître Ensemble,
            le bien être, l&apos;accompagnement sur mesure et l&apos;écoute sont
            à votre disposition pour vivre une naissance respectée et une
            parentalitée éclairée.
          </p>
          <div className="mt-12 mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {dataset.map(({ image, title, url }, index) => {
              return (
                <Link
                  href={`/prestations/avant_naissance/${url}`}
                  key={`link${index}`}
                >
                  <div className="flex flex-col justify-center items-center text-center cursor-pointer">
                    <img
                      className="inline object-cover w-32 h-32 mr-2 rounded-full"
                      src={`/img/prestations_avant_naissance/${image}`}
                    />
                    <p
                      style={{ color: "#aa8073" }}
                      className="mt-4 text-xl p-4 text-justify lg:text-center lg:p-0 font-extralight"
                    >
                      {title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
