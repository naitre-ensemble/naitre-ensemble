import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function ReservationForfaitSuccess() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - réservation forfait</title>
        <meta
          name="description"
          content="Naitre ensemble / réservation forfait"
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
                Réservation forfait
              </h1>
            </div>
          </div>
        </div>

        <div className="text-center w-1/2 mt-12 m-auto bg-green-200 text-green-800 p-6">
          <p className="text-xl">
            Votre demande de réservation vient d'être envoyée.
          </p>
          <p className="text-xl mt-3">Vous serez bientôt contacté !</p>
        </div>

        <div className="text-center mx-auto flex items-center justify-center mt-12 mb-12">
          <Link href={`/`}>
            <button
              style={{ background: "#bd897d" }}
              className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
