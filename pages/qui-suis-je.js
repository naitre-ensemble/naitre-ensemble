import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";

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
          <div className="grid grid-cols-2 gap-4 mt-12 mb-12">
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
                accompagnante périnatale et parentale. J'ai rassemblais mes
                compétences dans un seul et même projet : Naître Ensemble.
              </p>
            </div>
            <div className="flex justify-center items-center">
            <div className="rounded-full relative w-[300px]">
              <img
                src="/img/leslie.jpeg"
                alt=""
                style={{ borderRadius: '50%'}}
                className="border border-gray-100 shadow-sm"
              />
            </div>
            </div>
          </div>
          <ul
            className="pt-6 text-xl font-normal list-disc"
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
              Permettre aux parents de prendre confiance en eux, en leurs Une
              parenthèse autour du bien être sur mesure, rien que pour vous,
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
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            J'aime l'humain profondément, je suis passionnée par la physiologie,
            la Femme et le développement du jeune enfant c'est pourquoi je me
            suis engagée pour l'origine : la naissance ; naissance d'une mère,
            naissance d'un père, naissance d'une famille, naissance d'un enfant,
            en me spécialisant dans le domaine de la périnatalité.
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Le partage, l'écoute active, l'observation et la transmission font
            partie de mon quotidien. J'aime appuyer sur le bouton pause pour
            vous faire vivre des moments hors du temps. J'aime m'arrêter sur les
            choses qui paraissent si simples mais qui sont pourtant
            fondamentales. Les petits "rien" ont tendance à me fasciner...
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Si le gage de qualité peut commencer par les formations, il s'agit
            avant tout pour moi de faire preuve d'une posture humaine et
            authentique à vos côtés tout en réactualisant mes connaissances à
            travers l'expérience et la formation afin de vous offrir un
            accompagnement et une approche au plus proche de vos besoins et des
            connaissances scientifiques actuelles.
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Vous retrouverez mes références liées à mes nombreuses formations en
            périnatalité que j'ai complété par de nombreuses lectures,
            webinaires, vidéos, rencontres, partage de connaissance...
          </p>
        </div>
      </div>
    </div>
  );
}
