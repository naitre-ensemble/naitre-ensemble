import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Concept() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Concept</title>
        <meta name="description" content="Naitre ensemble / Concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full">
        <div
          class="w-full bg-cover bg-center"
          style={{
            height: "22rem",
            opacity: "0.7",
            "background-image": "url('/img/background_concept.png')",
          }}
        >
          <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
              <h1 className="text-center mt-12 text-white text-4xl font-light tracking-tight sm:text-5xl lg:text-left">
                Concept
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:pt-3 p-4 lg:p-6 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Naître ensemble est un service d&apos;accompagnement dédié à la
            périnatalité (de la préconception jusqu&apos;aux premiers mois de
            bébé) et à la parentalité. C’est une ressource pour tous les parents
            et futurs parents qui souhaitent vivre une naissance respectée et
            une parentalité éclairée.
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Créé à partir de mon expérience et de mes formations dans les
            domaines de la petite enfance, de la parentalité et de la
            périnatalité, c’est surtout en allant puiser au plus proche de vos
            besoins en tant que parent que Naître Ensemble a vu le jour.
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Naître Ensemble c’est une professionnelle passionnée qui vous
            accompagne et qui oeuvre pour :
          </p>
          <ul
            className="pt-6 text-xl font-normal list-disc"
            style={{ color: "#aa8073" }}
          >
            <li className="p-2">
              Remettre le bien-être de l&apos;Enfant et son devenir au coeur de
              toutes les préoccupations
            </li>
            <li className="p-2">
              Donner accès aux parents à une personne ressource et à un
              accompagnement des débuts de la parentalité : conception,
              naissance, post partum, premières semaines, premiers mois de bébé.
            </li>
            <li className="p-2">
              Rendre la naissance plus respectueuse pour la maman, le papa/le co
              parent et le bébé en offrant des instants de bien-être, des outils
              physiologiques et une présence bienveillante et enveloppante.{" "}
            </li>
            <li className="p-2">
              Permettre aux parents de prendre confiance en eux, en leurs
              compétences et en leur rôle de parent.{" "}
            </li>
          </ul>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Ensemble nous allons cheminer à travers vos histoires, vos
            expériences, vos émotions, vos ressentis, dans un climat de
            confiance, de bien-être et de bienveillance.{" "}
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Un service sur mesure pour vous.
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-9 mb-12">
            <img
              src="/img/ponctuation-mark-vector.png"
              alt=""
              className="h-8"
            />
            <p
              className="font-extralight text-xl pl-3"
              style={{ color: "#aa8073" }}
            >
              Parce qu&apos;il faut tout un village pour élever un enfant , et
              toute une communauté pour prendre soin d&apos;un parent.
            </p>
          </div>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Naître Ensemble c'est :
          </p>
          <ul
            className="pt-6 pb-12 text-xl font-normal list-disc"
            style={{ color: "#aa8073" }}
          >
            <li className="p-2">
              Un accompagnement de l'avant, du pendant et de l'après naissance,
              sans tabous et avec la plus grande bienveillance.
            </li>
            <li className="p-2">
              Une ressource pour toutes les femmes, les parents et les bébés.
            </li>
            <li className="p-2">
              Une vision du choix libre et conscient pour tous les parents en
              faveur d'une naissance respectée et d'une parentalité éclairée.
            </li>
            <li className="p-2">
              Une parenthèse autour du bien être sur mesure, rien que pour vous,
              pour votre bébé ou en couple à travers différents soins.
            </li>
            <li className="p-2">
              De la transmission auprès des professionnels en structure.
            </li>
            <li className="p-2">
              De l'éthique, du respect, de l'écoute, de la transmission, de la
              création de liens, beaucoup d'amour mais surtout beaucoup de VOUS
              !
            </li>
            <li className="p-2">
              Des savoir être et des savoir faire pour tous, qui que vous soyez.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mb-12">
          <div
            className=" h-[300px] w-[300px] flex justify-center text-justify items-center p-4 rounded-full"
            style={{ background: "#bd897d" }}
          >
            <Link href="/qui-suis-je">
              <p className="text-white text-md lg:text-lg text-center cursor-pointer hover:underline">
                Découvrez qui je suis
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
