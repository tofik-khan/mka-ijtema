import React from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import SportsHero from "../components/SportsHero.js";
import SportsFAQs from "../components/SportsFAQs.js";

import Footer from "../components/Footer.js";

export default function Sports() {
  return (
    <>
      <Header
        data={{
          title: "Sports - Ijtema 2022",
          description: "MKA National Ijtema 2022 Sports Competitions",
        }}
      />
      <Nav />
      <main className="mainContent">
        <SportsHero />
        <SportsFAQs />
      </main>
      <Footer />
    </>
  );
}
