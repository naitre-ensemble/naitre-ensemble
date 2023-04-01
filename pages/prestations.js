import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHeader from "../components/pageHeader";
import Link from "next/link";

export default function Prestations() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Prestations</title>
        <meta name="description" content="Naitre ensemble / Qui suis-je" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-24 lg:pt-24 mb-12">
        <PageHeader
          title="Les prestations"
          items={[
            "Le bien être des femmes",
            "Le bien être des bébés",
            "Accompagnement prénatal",
            "Accompagnement postnatal",
          ]}
        />
        <div className="grid grid-cols-2">
          <div className="h-auto flex">
            <div className="w-full flex justify-center">
              <img
                className="w-full h-auto hover:bg-gray-800 hover:opacity-70"
                src="/img/07.jpeg"
                alt="Avant la naissance"
              />
            </div>
          </div>
          <div className="h-auto flex flex-col p-12 justify-center">
            <h1 className="text-center text-4xl" style={{ color: "#bd897d" }}>
              Le bien être des femmes{" "}
            </h1>
            <p className="text-center mt-6">
              Vous êtes une femme ? Une future mère ? Une femme en désir
              d&apos;enfant ? Déjà maman ? Offrez vous un temps dédié à votre
              bien être avec votre accompagnante périnatale. Je saurais prendre
              soin de vous de la préconception, en passant par la grossesse et
              le post partum.
            </p>
            <div className="w-full text-center mt-6">
              <Link href="/prendre-rendez-vous">
                <button
                  style={{ background: "#dec3b4" }}
                  className=" focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Découvrir maintenant
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="h-auto flex flex-col p-12 justify-center">
            <h1 className="text-center text-4xl" style={{ color: "#bd897d" }}>
              Le bien être des bébés{" "}
            </h1>
            <p className="text-center mt-6">
              Offrir une arrivée plus douce à votre bébé. Lui offrir des
              instants de bien être pour bien naître. Vous accompagner dans
              votre parentalité à travers divers ateliers. Je suis à vos côtés
              durant les 1000 premiers jours de votre enfant.
            </p>
            <div className="w-full text-center mt-6">
              <Link href="/prendre-rendez-vous">
                <button
                  style={{ background: "#dec3b4" }}
                  className=" focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Découvrir maintenant
                </button>
              </Link>
            </div>
          </div>
          <div className="h-auto flex">
            <div className="w-full flex justify-center">
              <img
                className="w-full h-auto hover:bg-gray-800 hover:opacity-70"
                src="/img/v205.jpeg"
                alt="Avant la naissance"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="h-auto flex">
            <div className="w-full flex justify-center">
              <img
                className="w-full h-auto hover:bg-gray-800 hover:opacity-70"
                src="/img/15.png"
                alt="Avant la naissance"
              />
            </div>
          </div>
          <div className="h-auto flex flex-col p-12 justify-center">
            <h1 className="text-center text-4xl" style={{ color: "#bd897d" }}>
              Accompagnement prénatal{" "}
            </h1>
            <p className="text-center mt-6">
              La grossesse est une période totalement bouleversante dans la vie
              d&apos;une femme. Être soutenue, accompagnée et rassurée par une
              personne fixe durant la grossesse est essentiel.
              L&apos;accompagnement prénatal s&apos;adresse aux femmes et aux
              couples du désir d&apos;enfant jusqu&apos;à la naissance.
            </p>
            <div className="w-full text-center mt-6">
              <Link href="/prendre-rendez-vous">
                <button
                  style={{ background: "#dec3b4" }}
                  className=" focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Découvrir maintenant
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="h-auto flex flex-col p-12 justify-center">
            <h1 className="text-center text-4xl" style={{ color: "#bd897d" }}>
              Accompagnement postnatal{" "}
            </h1>
            <p className="text-center mt-6">
              Le post partum, cette période post accouchement est une période
              durant laquelle le soutien émotionnel et logistique est
              primordial. Je serais à vos côtés dans votre quotidien mais aussi
              dans votre aventure de parent dans divers divers domaines tels que
              les soins, l&apos;éveil de bébé, l&apos;éducation...
            </p>
            <div className="w-full text-center mt-6">
              <Link href="/prendre-rendez-vous">
                <button
                  style={{ background: "#dec3b4" }}
                  className=" focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Découvrir maintenant
                </button>
              </Link>
            </div>
          </div>
          <div className="h-auto flex">
            <div className="w-full flex justify-center">
              <img
                className="w-full h-auto hover:bg-gray-800 hover:opacity-70"
                src="/img/10.jpeg"
                alt="Avant la naissance"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
