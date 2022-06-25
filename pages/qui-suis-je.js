import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mb-5">
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
                className="mt-4 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
              >
                Dans la vie, je suis Éducatrice de Jeunes Enfants, spécialiste
                de la petite enfance, formée en développement du jeune enfant,
                en périnatalité et en accompagnement à la parentalité. Mon
                identité professionnelle s&apos;est construite à travers des
                lieux variés (Pôle Ressources Handicap, Centres Sociaux, EAJE,
                RAM...). J&apos;ai ainsi pu faire la rencontre de nombreux
                enfants et de nombreux parents. Chaque rencontre fut unique et
                m&apos;aura permis de grandir humainement et
                professionnellement. J&apos;ai eu la chance de mener divers
                projets, recherches et ainsi avoir des sujets de prédilection
                comme l&apos;attachement, les neurosciences, l&apos;observation,
                l&apos;écoute active, la communication non violente, le handicap
                et les besoins particuliers, l&apos;approche sensorielle de
                l&apos;enfant, la diversification menée par l&apos;enfant,
                l&apos;hygiène naturelle infantile, la motricité libre, les
                soins de développement l&apos;enfant, les pédagogies
                alternatives, ...)
              </p>
              <p
                style={{ color: "#aa8073" }}
                className="mt-4 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
              >
                Je me suis formée auprès d&apos;une sage femme traditionnelle,
                doula, naturopathe, autrice et conférencière pour devenir Doula
                (accompagnante non médicale à la naissance).
              </p>

              <p
                style={{ color: "#aa8073" }}
                className="mt-4 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
              >
                Puis j&apos;ai entrepris de multiples formations pour devenir
                accompagnante périnatale et parentale. J&apos;ai ainsi pu
                rassembler toutes mes compétences dans un seul et même projet :
                Naître Ensemble. Un projet de vie me permettant d&apos;être moi
                même et d&apos;accompagner sans conditions et avec passion.
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
            className="text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
          >
            Avant d&apos;être professionnelle, je suis avant tout une personne
            qui aime l&apos;humain profondément. Je suis passionnée par la
            physiologie, la Femme et le développement du jeune enfant c&apos;est
            pourquoi je me suis engagée pour l&apos;origine : la naissance ;
            naissance d&apos;une mère, naissance d&apos;un père, naissance
            d&apos;une famille, naissance d&apos;un enfant, en me spécialisant
            dans le domaine de la périnatalité.
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
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
            className="mt-4 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
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
            className="mt-4 text-xl p-4 text-justify lg:text-justify lg:p-0 font-extralight"
          >
            Vous retrouverez mes références liées à mes formations en
            périnatalité que j&apos;ai complété par de nombreuses lectures,
            webinaires, vidéos, rencontres, partage de connaissance...
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h2
            style={{ color: "#bd897d" }}
            className="text-center mt-12 text-4xl font-light tracking-tight sm:text-4xl lg:text-left"
          >
            Mes formations
          </h2>

          <div className="grid lg:grid-cols-3 justify-center mt-12">
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Diplôme d'État d'Éducatrice de Jeunes Enfants{" "}
                </h3>
                <p style={{ color: "#bd897d" }} className="text-justify">
                  (expertise du développement du jeune enfant, de la
                  périnatalité et de l'accompagnement à la parentalité, approche
                  réflexive pluridisciplinaire, attachement, neurosciences,
                  observation, écoute active, CNV, handicap et besoins
                  particuliers, approche sensorielle de l'enfant, DME, HNI,
                  motricité libre, soins de l'enfant, pédagogies alternatives,
                  ...)
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Ambassadrice du rituel bain sensoriel®️ avec Tania Massouf
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Praticienne en massage "bien naître" de la femme enceinte avec
                  Graine de massage
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Certifiée en massage "bien-naître" pour bébé par Graine de
                  massage
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Certifiée en portage physiologique en écharpe et portage du
                  monde par Graine de massage
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Perfectionnement au portage des bébés par le Centre National
                  de Formation au Portage des Bébés
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Formation portage dans les bras par le Centre National de
                  Formation au Portage des Bébés
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Formation portage et reflux gastro-œsophagien par le Centre
                  National de Formation au Portage des Bébés
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Formation portage et handicap par le Centre National de
                  Formation au Portage des Bébés
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Transmission du soin rituel Rebozo par Yael Flauder
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Massage post natal par Yael Flauder
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Rituels de doula - Ninidoularoma
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Formation : accompagner l'allaitement par Julie Toutin
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Transformation du placenta par Julie Amanda Doula
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Massage fertilité
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Réflexologie " détente" de la femme enceinte
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Réflexologie bébé émotionnelle®️ par l'École du Bien Naître
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Formation de Doula (accompagnante non médicale à la naissance
                  avec Diane Boutin
                </h3>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  MOOC
                </h3>
                <div className="mx-auto">
                  <ul
                    className="text-md font-normal list-disc p-4"
                    style={{ color: "#aa8073" }}
                  >
                    <li>Allaitement pour tous</li>
                    <li>
                      Protection et rééducation périnéale au cours de la vie des
                      femmes
                    </li>
                    <li>
                      La prévention des risques environnementaux chez la femme
                      enceinte et l’enfant
                    </li>
                    <li>Accouchement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="min-w-[300px] w-[350px] h-[390px] rounded overflow-hidden shadow-lg p-6 relative mb-12 flex items-center">
                <h3
                  style={{ color: "#bd897d" }}
                  className="pb-6 text-center text-xl"
                >
                  Sensibilisations et conférences diverses autour de la
                  périnatalité (Michel Odent, Liliana Lammers...)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
