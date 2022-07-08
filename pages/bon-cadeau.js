import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useState, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import Router from "next/router";

export default function BonCadeau() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const prestationRef = useRef();
  const destinataireRef = useRef();
  const delapartRef = useRef();
  const livraisonRef = useRef();

  const sendReservation = async () => {
    const data = {
      firstname: firstnameRef.current?.value,
      lastname: lastnameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      prestation: prestationRef?.current?.value,
      destinataire: destinataireRef?.current?.value,
      delapart: delapartRef?.current?.value,
      livraison: livraisonRef?.current?.value
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://naitre-ensemble.herokuapp.com/cadeau",
        data
      );
      if (response.status === 200) {
        Router.push("/bon-cadeau-success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Bon cadeau</title>
        <meta name="description" content="Naitre ensemble / Bon cadeau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full">
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "22rem",
            opacity: "0.75",
            "background-image": `url('/img/10.jpeg')`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-center mt-12 text-white text-4xl font-light tracking-tight sm:text-5xl lg:text-left">
                Bon cadeau
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative pl-12 mt-2">
            <h2
              style={{ color: "#bd897d" }}
              className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-10 lg:text-left"
            >
              Chez Naître Ensemble vous êtes certain de faire plaisir et
              d&apos;acheter utile.
            </h2>
            <ul
              style={{ color: "#aa8073" }}
              className="pt-6 p-4 text-lf font-normal list-disc"
            >
              <li>Un bon cadeau avec la prestation de votre choix</li>
            </ul>
            <p
              style={{ color: "#aa8073" }}
              className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
            >
              Et pour la livraison :
            </p>
            <ul
              style={{ color: "#aa8073" }}
              className="pt-6 p-4 text-lf font-normal list-disc"
            >
              <li>
                Bon cadeau papier à retirer au 87 rue d&apos;Arras 59500 Douai
                (gratuit)
              </li>
              <li>Bon cadeau papier avec envoi postal (+5euros)</li>
              <li>Bon cadeau en version numérique (gratuit)</li>
            </ul>
            <div className="flex justify-center item-center mb-24 mt-12">
              <img src="/img/bon-cadeau01.jpeg" alt="" className="w-1/2" />
            </div>
          </div>

          <form className="w-full max-w-lg mx-auto pt-12 p-4 pb-12">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Nom
                </label>
                <input
                  ref={firstnameRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Prénom
                </label>
                <input
                  ref={lastnameRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  E-mail
                </label>
                <input
                  ref={emailRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  Téléphone
                </label>
                <input
                  ref={phoneRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-phone"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  Destinataire
                </label>
                <input
                  ref={destinataireRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-phone"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  De la part de
                </label>
                <input
                  ref={delapartRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-phone"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-theme"
                >
                  Choisir une prestation
                </label>
                <select
                  ref={prestationRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-theme"
                  type="text"
                >
                  <option></option>
                  <option value="Massage fertilité">Massage fertilité</option>
                  <option value="Massage femme enceinte">
                    Massage femme enceinte
                  </option>
                  <option value="Reflexologie femme enceinte">
                    Reflexologie femme enceinte
                  </option>
                  <option value="Atelier de portage">Atelier de portage</option>
                  <option value="Rendez-vous allaitement">
                    Rendez-vous allaitement
                  </option>
                  <option value="Atelier papa coach">Atelier papa coach</option>
                  <option value="Fête de la future mère">
                    Fête de la future mère
                  </option>
                  <option value="Accompagnement Doula">
                    Accompagnement Doula
                  </option>
                  <option value="Rituel bain sensoriel">
                    Rituel bain sensoriel
                  </option>
                  <option value="Massage post natal">Massage post natal</option>
                  <option value="Soin rituel Rebozo">Soin rituel Rebozo</option>
                  <option value="Massage bébé">Massage bébé</option>
                  <option value="Aide à domicile post-partum">
                    Aide à domicile post-partum
                  </option>
                  <option value="Service Doula dodo">Service Doula dodo</option>
                  <option value="Forfait au choix">Forfait au choix</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  style={{ color: "#bd897d" }}
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-theme"
                >
                  Choix de livraison
                </label>
                <select
                  ref={livraisonRef}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-theme"
                  type="text"
                >
                  <option></option>
                  <option value="Bon cadeau papier à retirer">
                    Bon cadeau papier à retirer au cabinet
                  </option>
                  <option value="Bon cadeau papier avec envoi postal">
                    Bon cadeau papier avec envoi postal
                  </option>
                  <option value="Bon cadeau en version numérique  ">
                    Bon cadeau en version numérique
                  </option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  style={{ background: "#bd897d" }}
                  className="shadow w-[250px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => sendReservation()}
                >
                  Envoyer la demande
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
