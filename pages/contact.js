import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - contact</title>
        <meta name="description" content="Naitre ensemble / contact" />
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
              Contact
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
      htmlFor="grid-password"
    >
      E-mail
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="email"
      type="email"
    />
  </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
    <label
      style={{ color: "#bd897d" }}
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      Téléphone
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="email"
      type="text"
    />
  </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
    <label
      style={{ color: "#bd897d" }}
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      Message
    </label>
    <textarea
      className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
      id="message"
    ></textarea>
  </div>
</div>
<div className="md:flex md:items-center">
  <div className="md:w-1/3">
    <button
      style={{ background: "#bd897d" }}
      className="shadow w-[250px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
    >
      Envoyer le message
    </button>
  </div>
  <div className="md:w-2/3"></div>
</div>
</form>
    </div>
  );
}
