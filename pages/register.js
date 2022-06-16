import Head from "next/head";
import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";

export default function Register() {
  return (
    <>
      <Head>
        <title>Registeration - Ijtema 2022</title>
        <meta
          name="description"
          content="Register for MKA USA National Ijtema 2022"
        />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <div className="mt-5">Registration Page</div>
      <Footer />
    </>
  );
}
