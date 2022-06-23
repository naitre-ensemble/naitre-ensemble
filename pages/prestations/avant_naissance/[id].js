import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../../components/data";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

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
            "background-image": `url('/img/prestations_avant_naissance/${current?.image}')`,
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            {current?.prestations}
          </div>

          <div
            style={{ color: "#aa8073" }}
            className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
          >
            {current?.duration} - {current?.price}
          </div>

          {current?.infos !== "" ? (
            <div
              style={{ color: "#aa8073" }}
              className="mt-4 text-xl p-4 text-justify lg:text-left lg:p-0 font-extralight"
            >
              {current?.infos}
            </div>
          ) : null}

          <div className="pb-12 pt-12">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
