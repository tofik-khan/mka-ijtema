import Head from "next/head";
import Image from "next/image";
import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Ijtema 2022</title>
        <meta name="description" content="MKA National Ijtema 2022" />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className="mainContent">Contacts</main>
      <Footer />
    </>
  );
}
