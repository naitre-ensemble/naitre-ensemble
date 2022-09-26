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
        <meta name="description" content="Naitre ensemble" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="relative bg-white overflow-hidden">
        <div className="pt-20 pb-0 lg:pt-20 lg:pb-48">
          <div className="grid grid-cols-2">
            <div
              className="h-auto flex gap-12 p-12"
              style={{ background: "#dec3b4" }}
            >
              <div className="w-full mx-auto flex justify-center">
                <img
                  className="w-full rounded-full"
                  src="/img/v202.jpeg"
                  alt="Naitre ensemble"
                />
              </div>
              <div className="w-full mx-auto flex justify-center">
                <img
                  className="w-full rounded-full"
                  src="/img/v201.jpeg"
                  alt="Naitre ensemble"
                />
              </div>
            </div>
            <div
              className="h-auto p-4 flex flex-col items-center justify-center"
              style={{ background: "#bd897d" }}
            >
              <h1 className="text-center text-white">
                Accompagnante périnatale{" "}
              </h1>
              <p className="text-center text-white mt-6">
                Certifiée par l'École du bien naître (lien vers site à venir:
                https://www.mespremiersjours.com/)
              </p>
              <p className="text-center text-white mt-6">
                J'accompagne les femmes et les couples qui veulent vivre une
                grossesse, un accouchement et un post partum entourés d'une
                personne ressource, qui leur apportera de la douceur, de la
                confiance et du bien être durant ce moment de vie totalement
                bouleversant.
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
          </div>

          <div className="grid grid-cols-2 mt-12">
            <div className="h-auto p-4 flex flex-col items-center justify-center">
              <h1 className="text-center mt-6">
                Le bien être pour bien naître. Je suis à vos côtés pour vous
                rassurer, vous accompagner, prendre soin de vous et de votre
                bébé. Dè
              </h1>
              <p className="text-center mt-6">
                Je suis Leslie et je vous accompagne sur le chemin du devenir
                parent à travers le bien être de maman, de bébé et du couple.
              </p>
              <div className="flex justify-center mt-3">
                <img
                  className="w-auto h-20"
                  src="/img/v203.png"
                  alt="Naitre ensemble"
                />
              </div>
              <p className="text-center mt-6">
                Éducatrice de jeunes enfants diplômée d'état Ambassadrice de
                l'École du Bien Naître (LIEN
                :https://www.lecoledubiennaitre.com/) Doula signataire de la
                charte des Doulas de France
              </p>
              <div className="w-full text-center mt-6">
                <Link href="/prendre-rendez-vous">
                  <button
                    style={{ background: "#bd897d" }}
                    className="shadow focus:shadow-outline focus:outline-none border-2 text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Découvrir mes présetations
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-auto flex gap-3 p-4">
              <div className="w-full mx-auto flex justify-center">
                <img
                  className="w-auto h-96"
                  src="/img/v204.png"
                  alt="Naitre ensemble"
                />
              </div>
            </div>
          </div>

          <div
            style={{ background: "#bd897d" }}
            className="h-auto grid grid-cols-4 mt-12"
          >
            <Link href="/prestations/avant_naissance">
              <div className="max-w-sm rounded overflow-hidden p-6 cursor-pointer">
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="w-full rounded-lg"
                    src="/img/07.jpeg"
                    alt="Avant la naissance"
                  />
                  <p className="font-normal absolute mt-32 text-white text-lg mb-2 flex justify-center">
                    Avant la naissance
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/prestations/avant_naissance">
              <div className="max-w-sm rounded overflow-hidden p-6 cursor-pointer">
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="w-full rounded-lg"
                    src="/img/v205.jpeg"
                    alt="Avant la naissance"
                  />
                  <p className="font-normal absolute mt-32 text-white text-lg mb-2 flex justify-center">
                    Le bien être des bébés
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/prestations/avant_naissance">
              <div className="max-w-sm rounded overflow-hidden p-6 cursor-pointer">
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="w-full rounded-lg"
                    src="/img/15.png"
                    alt="Avant la naissance"
                  />
                  <p className="font-normal absolute mt-32 text-white text-lg mb-2 flex justify-center">
                    Accompagnement périnatal
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/prestations/avant_naissance">
              <div className="max-w-sm rounded overflow-hidden p-6 cursor-pointer">
                <div className="w-full mx-auto flex justify-center">
                  <img
                    className="w-full rounded-lg"
                    src="/img/10.jpeg"
                    alt="Avant la naissance"
                  />
                  <p className="font-normal absolute mt-32 text-white text-lg mb-2 flex justify-center">
                    Accompagnement postnatal
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-center">
          <img className="w-1/3" src="/img/v201.jpeg" alt="Naitre ensemble" />
        </div>
        <div>
          <h2 className="text-lg" style={{ color: "#bd897d" }}>
            Mon approche
          </h2>

          <p className="mt-6">
            Mon approche et mes valeurs sont avant tout les vôtres. Il est
            essentiel pour moi de respecter et de m'adapter à chaque parent,
            chaque bébé et chaque famille. Ma façon d'être avec les bébés et
            leur famille est tournée vers le maternage proximale (massage, bain
            bébé, allaitement bébé signes, ...LIENS VERS LES PRESTATIONS
            CONCERNÉES). J'accompagne avec douceur, bienveillance et humilité.{" "}
          </p>

          <p className="mt-6">
            Vous êtes les experts de vos enfants et de la naissance, je suis
            votre accompagnante.{" "}
          </p>

          <p className="mt-6">
            Il est primordiale pour moi de vous offrir le meilleur. C'est
            pourquoi je suis diplômée d'état, j'ai expérimenté dans divers lieux
            et auprès de centaines de familles, j'ai réalisé plus d'une
            vingtaine de formations et je suis certifiée Ambassadrice du Bien
            Naître par L'école du bien naître (lien) de Sonia Krief (lien
            :https://www.instagram.com/lebaindesonia/)
          </p>
        </div>
      </div>

      <div className="h-auto mt-12 p-12" style={{ background: "#dec3b4" }}>
        <p className="text-center text-white">
          Parents ? Futurs parents ? En désir d'enfant ? N'attendez plus pour
          vous offrir une accompagnante périnatale et une parenthèse de bien
          être de la grossesse au post partum.
        </p>

        <p className="text-center text-white mt-12">
          CABINET PÉRINATAL - 50 RUE DE LA CLOCHE 59500 DOUAI ACCOMPAGNANTE
          PÉRINATALE NORD - HAUTS DE FRANCE GROSSESSE - NAISSANCE - POST
          ACCOUCHEMENT NOUVEAU NÉ - BÉBÉ - MAMAN - COUPLE DOUAI - LILLE - LENS -
          ARRAS - CAMBRAI - VALENCIENNES
        </p>
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
      <Footer />
    </div>
  );
}
