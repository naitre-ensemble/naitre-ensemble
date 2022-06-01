import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AccompagnementDoula() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Accompagnement Doula</title>
        <meta
          name="description"
          content="Naitre ensemble / Accompagnement Doula"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            Accompagnement de doula
          </h1>
          <h2
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            Une doula c&apos;est quoi ?
          </h2>
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            C&apos;est une femme qui accompagne et soutient une autre femme durant
            des passages de vie. Pour simplifier mon approche et mes compétences
            je suis une doula qui accompagne la future mère et son entourage
            pendant la grossesse, l’accouchement et le postpartum, et cela
            uniquement en complément du suivi médical choisi par les parents
            (hôpital, clinique, sage-femme libérale…). J&apos;accompagne sans
            discrimination liée aux origines, à la religion ou à la préférence
            sexuelle des parents. Je n’ai pas de fonction médicale et je
            soutiens le travail des sages-femmes.
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
            En tant que doula, je vous propose un accompagnement sur mesure en
            fonction de vos besoins peu importe ce que vous envisagez pour la
            naissance de votre enfant (naturelle, péridurale, césarienne). Un
            accompagnement de l&apos;avant, du pendant et de l&apos;après.
          </p>

          <h3
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            Ma couleur de doula :
          </h3>

          <ul
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl text-justify lg:text-left m-0 font-extralight"
          >
            <li className="p-0 pb-4">
              Je suis Leslie, Femme, EJE, Doula formée par Diane Boutin ; une
              sage femme traditionnelle, doula et naturopathe au Canada.
            </li>
            <li className="p-0 pb-4">
              Je suis au service des Femmes, des mères, des familles et des
              bébés depuis toujours. Aussi loin que je me souvienne, les femmes
              sont toujours venues à moi assez naturellement pour partager,
              trouver du réconfort, se sentir soutenues.
            </li>
            <li className="p-0 pb-4">
              Je suis un soutien, une accompagnante, une sœur, une amie, une
              aide physique, une ressource, un temps/un espace dédié au bien
              être, un lien de confiance durable et fixe, je suis à ma place et
              je respecte vos choix tout en vous informant.
            </li>
            <li className="p-0 pb-4">
              Je suis aux côtés des femmes durant cette période de l&apos;avant, du
              pendant et de l&apos;après naissance.
            </li>
            <li className="p-0 pb-4">
              Ma couleur c&apos;est entre autre : l&apos;écoute active, la puissance de la
              rencontre, la grossesse et la naissance, le post partum, le bien
              être, le bain sensoriel®, l&apos;allaitement, le portage, le handicap
              de l&apos;enfant, les massages, le rebozo, snoezelen, doula dodo (garde
              de nuit nourrisson)...
            </li>
            <li className="p-0 pb-4">
              Je pense que "Pour materner, il faut être maternée" et je suis
              convaincue de la force et de la puissance des Femmes, du corps de
              la femme et de ses ressources. J&apos;accompagne les femmes au
              quotidien à (re)découvrir qu&apos;elles ont tout en elles pour donner
              naissance à leur enfant.
            </li>
          </ul>
          <h4
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            À quoi mon accompagnement peut ressembler ?
          </h4>
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Tout en gardant à l&apos;esprit que je m&apos;adapte à vous et que nous créons
            ensemble un accompagnement sur mesure, je vous propose entre autre
            (liste non exhaustive) :
          </p>

          <h5
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            En période prénatale :
          </h5>

          <ul
            className="pt-6 text-xl font-normal list-disc"
            style={{ color: "#aa8073" }}
          >
            <li className="p-2">
              De l&apos;accompagnement à la naissance non médical (on parle histoire
              de vie, grossesse, accouchement, droits, possibilités,
              éventualités, libre choix)
            </li>
            <li className="p-2">Un espace d&apos;écoute et de soutien émotionnel</li>
            <li className="p-2">
              De l&apos;accompagnement à la préparation d&apos;un projet de naissance et
              d&apos;un plan post natal
            </li>
            <li className="p-2">
              Du bien être pour la femme et le couple : massage prénatal,
              réflexologie détente, bercements au rebozo, séances snoezelen
              (ambiance relaxante et visualisations)...
            </li>
            <li className="p-2">
              De l&apos;information sur des sujets liés à la femme, la grossesse,
              l&apos;accouchement, le post partum
            </li>
            <li className="p-2">
              De l&apos;accompagnement à la préparation de l&apos;arrivée de bébé
              (puériculture, pédagogie, aménagement de l&apos;espace, développement
              du jeune enfant...) et du soutien dans vos choix parentaux (en
              proposant notamment des ateliers découverte du portage, de
              l&apos;allaitement,..)
            </li>
            <li className="p-2">
              Je propose également la fête de la future mère de façon non
              holistique.
            </li>
          </ul>

          <h6
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            Durant l&apos;accouchement :
          </h6>

          <ul
            className="pt-6 text-xl font-normal list-disc mb-6"
            style={{ color: "#aa8073" }}
          >
            <li className="p-2">
              Je me déplace à domicile (avec présence d&apos;une sage femme
              obligatoirement) et/ou à l&apos;hôpital si vous souhaitez ma présence
              pour soutenir l&apos;espace, favoriser votre bien être, veiller sur
              votre projet et vos droits, être un relai pour vous et votre
              partenaire, croire en vous, gérer la logistique...
            </li>
          </ul>

          <h8
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            En période post natale :
          </h8>

          <ul
            className="pt-6 text-xl font-normal list-disc"
            style={{ color: "#aa8073" }}
          >
            <li className="p-2">
              De l&apos;écoute et un espace de dépôt des vécus, des ressentis
            </li>
            <li className="p-2">Du soutien émotionnel et physique</li>
            <li className="p-2">
              Du bien être : resserage du bassin, soin rituel rebozo, massage
              post natal, soutien à l&apos;allaitement, portage, massage bébé, bain
              sensoriel®️...
            </li>
            <li className="p-2">
              De l&apos;accompagnement aux premiers soins de bébé
            </li>
            <li className="p-2">
              Une aide à domicile post partum (cuisine - ménage - courses...)
            </li>
            <li className="p-2">
              Le service doula dodo (garde de nuit pour nourrisson et parents
              épuisés)
            </li>
            <li className="p-2">
              De l&apos;accompagnement et du soutien à la parentalité (notamment
              grâce à mes compétences en tant qu&apos;éducatrice de jeunes enfants).
            </li>
          </ul>

          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            La posture professionnelle de Naître Ensemble est une pratique "amie
            des Sages-Femmes".
          </p>

          <p
            style={{ color: "#aa8073" }}
            className="mt-3 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight mb-12"
          >
            Naître Ensemble ne propose pas de préparation psychoprophylactique à
            l&apos;accouchement.
          </p>
        </div>

        <div className="grid grid-cols-4 justify-center mt-24 mb-24">
          <div className="flex justify-center items-center">
            <div
              className=" h-[300px] w-[300px] flex justify-center text-justify items-center p-4 rounded-full"
              style={{ background: "#bd897d" }}
            >
              <p className="text-white text-md lg:text-lg text-center">
                Tarif à la séance : 60 euros 1H30-2H
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className=" h-[300px] w-[300px] flex justify-center text-justify items-center p-4 rounded-full"
              style={{ background: "#bd897d" }}
            >
              <p className="text-white text-md lg:text-lg text-center">
                Présence à l&apos;accouchement + astreinte* 250 euros *dès la 37ème
                semaine
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className=" h-[300px] w-[300px] flex justify-center text-justify items-center p-4 rounded-full"
              style={{ background: "#bd897d" }}
            >
              <p className="text-white text-md lg:text-lg text-center">
                Forfait sur devis <br /> Paiement échelonné possible
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className=" h-[300px] w-[300px] flex justify-center text-justify items-center p-4 rounded-full"
              style={{ background: "#bd897d" }}
            >
              <p className="text-white text-md lg:text-lg text-center">
                Transformation du placenta sur devis
              </p>
            </div>
          </div>
        </div>

        <p
          style={{ color: "#aa8073" }}
          className="mt-4 text-xl p-4 text-justify lg:text-center lg:p-0 font-extralight mb-24"
        >
          Première rencontre offerte à DOUAI ou à domicile frais de déplacement
          à régler au delà de 10km
        </p>
      </div>

      <Footer />
    </div>
  );
}
