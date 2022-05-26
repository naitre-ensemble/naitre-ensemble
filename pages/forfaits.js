import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            Forfaits
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
