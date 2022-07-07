import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../../components/data-after";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [current, setCurrent] = useState();

  useEffect(() => {
    if (id) {
      const foundElement = data.find((el) => el.url === id);
      setCurrent(foundElement);
    }
  }, [id]);

  return (
    <div className="relative">
      <Head>
        <title>Naitre ensemble - Prestation {current?.title}</title>
        <meta
          name="description"
          content={`Naitre ensemble / Prestation / ${current?.title}`}
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
            "background-image": `url('/img/prestations_apres_naissance/${current?.image}')`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-center mt-12 text-white text-4xl font-light tracking-tight sm:text-5xl lg:text-left">
                {current?.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static relative">
          <div
            style={{ color: "#aa8073" }}
            className="text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight mt-6"
          >
            {current?.prestations.map((prestation, index) => {
              return (
                <span
                  key={index}
                  style={{ background: "rgb(189, 137, 125)" }}
                  className=" text-white font-medium rounded p-2 mr-2"
                >
                  {prestation}
                </span>
              );
            })}
          </div>

          <div className="pb-12 pt-12">
            <h2
              style={{ color: "#bd897d" }}
              className="text-center text-4xl font-light tracking-tight sm:text-3xl lg:text-left mb-12"
            >
              Le soin{" "}
            </h2>

            {current?.content.map((paragraph, index) => {
              return (
                <p
                  key={`paragraph_${index}`}
                  style={{ color: "#aa8073" }}
                  className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {current?.infos.length > 0 ? (
            <>
              <h3
                style={{ color: "#bd897d" }}
                className="text-center text-4xl font-light tracking-tight sm:text-3xl lg:text-left"
              >
                Informations pratiques{" "}
              </h3>
              <div
                style={{ color: "#aa8073" }}
                className="mt-4 mb-12 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
              >
                <ul className="pt-6 text-xl font-normal list-disc">
                  {current?.infos.map((info, index) => {
                    return <li key={index}>{info}</li>;
                  })}
                </ul>
              </div>
            </>
          ) : null}

          <div
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            <h4
              style={{ color: "#bd897d" }}
              className="text-center text-4xl font-light tracking-tight sm:text-3xl lg:text-left"
            >
              Durée{" "}
            </h4>
            <p className="pt-6 block">{current?.duration}</p>
          </div>

          <div
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            <h5
              style={{ color: "#bd897d" }}
              className="text-center text-4xl font-light tracking-tight sm:text-3xl lg:text-left"
            >
              Tarif{" "}
            </h5>
            <p className="pt-6 block">{current?.price}</p>
          </div>

          <div className="text-center mx-auto flex items-center justify-center mb-12">
            <Link href={`/prise-rendez-vous?prestation=${current?.id}`}>
              <button
                style={{ background: "#bd897d" }}
                className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Réserver maintenant
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
