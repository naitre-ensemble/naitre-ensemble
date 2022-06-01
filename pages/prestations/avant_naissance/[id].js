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
        <meta name="description" content={`Naitre ensemble / Prestation / ${current?.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full pt-36 lg:pt-36 p-4 lg:p-6">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h1
            style={{ color: "#bd897d" }}
            className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-left"
          >
            {current?.title}
          </h1>

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
