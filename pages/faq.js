import Head from "next/head";
import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import FaqHero from "../components/FaqHero.js";
import FaqBody from "../components/FaqBody.js";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Ijtema 2022</title>
        <meta name="description" content="MKA National Ijtema 2022" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className="mainContent">
        <FaqHero />
        <FaqBody />
      </main>
      <Footer />
    </>
  );
}
