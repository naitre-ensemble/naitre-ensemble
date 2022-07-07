import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Router from "next/router";

export default function RendezVous() {
  const router = useRouter();
  const [foundPrestation, setFoundPrestation] = useState();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const forfaits = [
    {
      id: 1,
      title: "forfait naître ensemble",
    },
    {
      id: 2,
      title: "forfait devenir parents",
    },
    {
      id: 3,
      title: "forfait bien naître",
    },
    {
      id: 4,
      title: "forfait détente",
    },
    {
      id: 5,
      title: "forfait sororité",
    },
    {
      id: 6,
      title: "forfait sur mesure",
    },
  ];

  useEffect(() => {
    const id = router.query.forfait;
    const foundForfait = forfaits.find((forfait) => forfait.id == id);
    setFoundPrestation(foundForfait);
  }, [router]);

  useEffect(() => {}, [foundPrestation]);

  const sendReservation = async () => {
    const data = {
      firstname: firstnameRef.current?.value,
      lastname: lastnameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      forfait: foundPrestation?.title,
    };
    try {
      const response = await axios.post(
        "https://naitre-ensemble.herokuapp.com/forfait",
        data
      );
      if (response.status === 200) {
        Router.push("/reservation-forfait-success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - prise de rendez-vous</title>
        <meta
          name="description"
          content="Naitre ensemble / prise de rendez-vous"
        />
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
                Demande de forfait
              </h1>
            </div>
          </div>
        </div>
      </div>
      <form className="w-full max-w-lg mx-auto pt-12 p-4 pb-12">
        <div className="mb-12">
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            {foundPrestation?.title}
          </p>
        </div>
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
