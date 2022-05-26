import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function Forfaits() {
  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Forfaits</title>
        <meta name="description" content="Naitre ensemble / Forfaits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <h1
          style={{ color: "#906c61" }}
          className="pb-4 lg:pb-0 text-center text-4xl font font-extrabold tracking-tight sm:text-4xl lg:text-left"
        >
          Forfaits
        </h1>
      </div>
    </div>
  );
}
