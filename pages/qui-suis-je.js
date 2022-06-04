import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function WhoIam() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Qui suis-je</title>
        <meta name="description" content="Naitre ensemble / Qui suis-je" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6 mb-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            Qui suis-je...
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mb-24">
            <div>
              <p
                style={{ color: "#aa8073" }}
                className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
              >
                Je suis Leslie, femme, fille de, professionnelle de, maman un
                jour je deviendrais.
              </p>
              <p
                style={{ color: "#aa8073" }}
                className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
              >
                Dans la vie, je suis Éducatrice de Jeunes Enfants, Doula et
                accompagnante périnatale et parentale. J&apos;ai rassemblais mes
                compétences dans un seul et même projet : Naître Ensemble.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src="/img/leslie.jpeg"
                  alt=""
                  style={{ borderRadius: "50%" }}
                  className="inline object-cover w-[300px] mr-2 rounded-full"
                />
                <div
                  className="absolute -bottom-12 -right-16 lg:-bottom-12 lg:-right-28 h-[200px] w-[200px] flex justify-center text-justify items-center p-4 rounded-full"
                  style={{ background: "#bd897d" }}
                >
                  {/* <p className="text-white text-center">Membre Doula de France Partenaire Ohmamacare Ambassadrice du
                  bain Sensoriel ®</p> */}
                  <p className="text-white text-md lg:text-lg text-center">
                    Ambassadrice du bain Sensoriel ®
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            J&apos;aime l&apos;humain profondément, je suis passionnée par la
            physiologie, la Femme et le développement du jeune enfant c&apos;est
            pourquoi je me suis engagée pour l&apos;origine : la naissance ;
            naissance d&apos;une mère, naissance d&apos;un père, naissance
            d&apos;une famille, naissance d&apos;un enfant, en me spécialisant
            dans le domaine de la périnatalité.
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Le partage, l&apos;écoute active, l&apos;observation et la
            transmission font partie de mon quotidien. J&apos;aime appuyer sur
            le bouton pause pour vous faire vivre des moments hors du temps.
            J&apos;aime m&apos;arrêter sur les choses qui paraissent si simples
            mais qui sont pourtant fondamentales. Les petits rien ont tendance à
            me fasciner...
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Si le gage de qualité peut commencer par les formations, il
            s&apos;agit avant tout pour moi de faire preuve d&apos;une posture
            humaine et authentique à vos côtés tout en réactualisant mes
            connaissances à travers l&apos;expérience et la formation afin de
            vous offrir un accompagnement et une approche au plus proche de vos
            besoins et des connaissances scientifiques actuelles.
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Vous retrouverez mes références liées à mes formations en
            périnatalité que j&apos;ai complété par de nombreuses lectures,
            webinaires, vidéos, rencontres, partage de connaissance...
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
