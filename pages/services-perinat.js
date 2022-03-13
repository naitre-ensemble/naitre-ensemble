import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Contact() {
  const services = [
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
    {
      title: "Rituel bain sensoriel",
      background: "/img/12.jpeg",
      url: "/services-perinat",
    },
  ];

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - services perinat</title>
        <meta name="description" content="Naitre ensemble / contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <h1
          style={{ color: "#906c61" }}
          className="pb-4 lg:pb-0 text-center text-4xl font font-extrabold tracking-tight sm:text-4xl lg:text-left"
        >
          Services perinat
        </h1>

        <div className="pt-20 pb-20 grid lg:grid-cols-6 gap-2 justify-center">
          {services.map((service) => {
            return (
              <Link href={service.url}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-3 cursor-pointer">
                  <div className="w-full mx-auto flex justify-center">
                    <img
                      className="w-full h-auto rounded-lg"
                      src={service.background}
                    />
                  </div>
                  <div className="px-8 py-6 flex flex-col justify-center">
                    <div
                      style={{ color: "#906c61" }}
                      className="font-bold text-xl flex justify-center"
                    >
                      {service.title}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
