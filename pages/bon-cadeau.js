import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function BonCadeau() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h2
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-10 lg:text-left"
          >
            Et si le bien être était la clé pour vivre une naissance respectée
            et une parentalité éclairée ?
          </h2>
          <h2
            style={{ color: "#aa8073" }}
            className="mt-6 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Chez Naître Ensemble vous êtes certain de faire plaisir et
            d&apos;acheter utile :
          </h2>
          <p
            style={{ color: "#aa8073" }}
            className="mt-6 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Un bon cadeau avec la prestation de votre choix ?
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-6 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            {" "}
            Une carte cadeau à prix libre ?
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Et pour la livraison ?
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight mb-72"
          >
            Bon cadeau papier à retirer au 87 rue d&apos;Arras 59500 Douai
            (gratuit) ou envoi possible (+5euros)
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight mb-72"
          >
            Bon cadeau en version numérique avec un petit mail rempli
            d&apos;amour (gratuit)
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
