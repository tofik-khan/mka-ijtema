import Head from "next/head";
import Image from "next/image";
import React from "react";

import Nav from "../components/Nav.js";
import Hero from "../components/Hero.js";
import InfoContainer from "../components/InfoContainer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ijtema 2022</title>
        <meta name="description" content="MKA National Ijtema 2022" />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className="mainContent">
        <Hero />
        <InfoContainer />
      </main>
    </div>
  );
}
