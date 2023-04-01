import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHeader from "../components/pageHeader";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import * as rdd from "react-device-detect";

export default function Presentation() {
  const isMobile = rdd.isMobile;

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

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Présentation</title>
        <meta name="description" content="Naitre ensemble / Présentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-24 mb-12">
        <PageHeader
          title="L'accompagnement périnatal et parental"
          items={["Présentation", "Témoignages", "Formations"]}
        />

        <div className="grid grid-cols-2">
          <div className="flex justify-center p-12 flex-col">
            <p>
              Je suis Leslie, Éducatrice de Jeunes Enfants à l&apos;origine. Je
              suis spécialiste de la petite enfance, formée en développement du
              jeune enfant, en périnatalité et en accompagnement à la
              parentalité.
            </p>
            <p className="mt-6">
              J&apos;ai eu la chance de me construire à travers des lieux variés
              (Pôle Ressources Handicap, Centres Sociaux, crèche, Relais
              d&apos;Assistant Maternel, Lieux d&apos;Accueil Enfant Parent,
              domicile...). J&apos;ai ainsi pu accompagner des centaines de
              familles. Chaque rencontre fut unique et m&apos;aura permis de
              grandir humainement et professionnellement.{" "}
            </p>
            <p className="mt-6">
              Mon expertise est tournée vers le maternage proximal et
              l&apos;accompagnement proximal des parents et des enfants. Mes
              sujets de prédilection sont le développement de l&apos;enfant
              l&apos;attachement, les neurosciences, l&apos;observation,
              l&apos;écoute active, la communication non violente, le handicap
              et les besoins particuliers, l&apos;approche sensorielle de
              l&apos;enfant, la diversification menée par l&apos;enfant,
              l&apos;hygiène naturelle infantile, la motricité libre, les soins
              de développement de l&apos;enfant, les pédagogies alternatives,
              ...
            </p>
            <p className="mt-6">
              Les femmes venant à moi depuis toujours et le besoin de préparer
              mon propre enfantement libre m&apos;ont conduit à me former auprès
              d&apos;une sage femme traditionnelle, doula, naturopathe, autrice
              et conférencière pour devenir Doula (accompagnante non médicale à
              la naissance) et ainsi développer mes compétences autour de la
              naissance.
            </p>
            <p className="mt-6">
              Puis j&apos;ai entrepris plus d&apos;une vingtaine de formations
              durant 3 ans pour devenir accompagnante périnatale et parentale et
              enfin devenir Ambassadrice Bien Naître. Une école unique créée par
              Sonia Krief.
            </p>
            <div className="w-full text-center mt-6">
              <Link href="/prendre-rendez-vous">
                <button
                  style={{ background: "#bd897d" }}
                  className="shadow focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center pt-12">
            <img
              className="w-auto h-[300px]"
              src="/img/07.jpeg"
              alt="Avant la naissance"
            />
          </div>
        </div>

        <div className="flex justify-center pb-20 h-[600px]">
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
                au côté d&apos;une femme solaire et d&apos;une douceur
                incroyable.
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

        <div className="pt-12 pb-12" style={{ background: "#bd897d" }}>
          <h2 className="text-center text-white text-xl mb-5">
            Mes formations
          </h2>
          <div className="grid grid-cols-2 p-4">
            <ul className="text-white list-disc ml-4">
              <li>Diplôme d&apos;État d&apos;Éducateur de Jeunes Enfants</li>
              <li>Licence Sciences de l&apos;éducation et de la Formation </li>
              <li>
                Certification de doula (accompagnante à la naissance) - Diane
                Boutin{" "}
              </li>
              <li>Ambassadrice du bain sensoriel - Tania Massouf </li>
              <li>Réflexologie bébé émotionnelle - École du Bien Naître </li>
              <li>Allaitement - École du Bien Naître</li>
              <li>Bébé signes - École du Bien Naître</li>
              <li>
                Bain enveloppé et besoins psycho affectifs du nouveau né - École
                du Bien Naître
              </li>
              <li>Massage post natal - École du Bien Naître</li>
              <li>Rituel rebozo - Yael Flauder </li>
            </ul>
            <ul className="text-white list-disc ml-4">
              <li>Prématurité - École du Bien Naître</li>
              <li>Massage femme enceinte - Graine de Massage</li>
              <li>Massage bébé/enfant - Graine de Massage</li>
              <li>
                Portage physiologique - Centre National de Formation au portage
                des bébés & Graine de massage{" "}
              </li>
              <li>
                Portage et RGO - Portage et Handicap - Perfectionnement en
                portage - Portage à bras - Centre National de Formation au
                portage des bébés{" "}
              </li>
              <li>
                Spécialiste de la transformation du placenta - Julia Amanda
                Doula
              </li>
              <li>Accompagner l&apos;allaitement - Julie toutin </li>
              <li>
                Réflexologie de la femme et Massage fertilité - professionnels
                libéraux{" "}
              </li>
              <li>Rituels de doula - ninidoularoma </li>
              <li>
                MOOC, conférences et sensibilisations dédiées à la périnatalité
                (Michel Odent, Liliana Lammers
              </li>
            </ul>
          </div>
          <div className="w-full text-center mt-6 mb-6">
            <Link href="/prestations">
              <button
                style={{ background: "#bd897d" }}
                className="shadow focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Découvrir mes préstations
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
