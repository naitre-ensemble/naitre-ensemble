import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import React, { useRef } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Router from "next/router";

export default function DemandeDevis() {
  const router = useRouter();
  const themeRef = useRef();
  const structureNameRef = useRef(); 
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const sendReservation = async () => {
    const data = {
      firstname: firstnameRef.current?.value,
      lastname: lastnameRef.current?.value,
      structureName: structureNameRef?.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      theme: themeRef.current?.value                                           
    };

    try {
      const response = await axios.post(
        "https://naitre-ensemble.herokuapp.com/devis",
        data
      );
      if (response.status === 200) {
        Router.push("/demande-devis-success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - demande de devis</title>
        <meta name="description" content="Naitre ensemble / demande de devis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full">
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "22rem",
            opacity: "0.75",
            "background-image": `url('/img/naissance.png')`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-center mt-12 text-white text-4xl font-light tracking-tight sm:text-5xl lg:text-left">
                Demande de devis
              </h1>
            </div>
          </div>
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
              htmlFor="grid-structure"
            >
              Nom de la structure
            </label>
            <input
              ref={structureNameRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-structure"
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
              htmlFor="grid-theme"
            >
              Choisir un thème
            </label>
            <select
              ref={themeRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-theme"
              type="text"
            >
              <option></option>
              <option value="Sensibilisation à l&apos;allaitement maternel">Sensibilisation à l&apos;allaitement maternel</option>
              <option value="Sensibilisation au massage bébé">Sensibilisation au massage bébé</option>
              <option value="Sensibilisation au portage">Sensibilisation au portage</option>
              <option value="Sensibilisation au bien-être en équipe">Sensibilisation au bien-être en équipe</option>
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
  );
}
