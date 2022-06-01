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

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            Bon cadeau
          </h1>
          <h2
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            Vous voulez être certain de faire plaisir et d&apos;acheter utile ?
          </h2>
          <h2
            style={{ color: "#bd897d" }}
            className="text-center text-2xl font-light tracking-tight sm:text-3xl mt-6 lg:text-left"
          >
            Et si le bien être était la clé pour vivre une naissance respectée
            et une parentalité éclairée ?
          </h2>
          <p
            style={{ color: "#aa8073" }}
            className="mt-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Vous pouvez choisir un bon cadeau avec la prestation de votre choix
            ou choisir un carte à prix libre pour que la personne à qui vous
            l&apos;offrez choisisse elle même ce qui lui fait plaisir
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            Bon cadeau à offrir clé en main à retirer directement chez Naître
            Ensemble (gratuit) ou envoi (+prix)
          </p>
          <p
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight mb-72"
          >
            Bon cadeau à envoyer version numérique (gratuit) avec un petit mail
            rempli d&apos;amour
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
