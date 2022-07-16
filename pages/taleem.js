import React from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import TaleemHero from "../components/TaleemHero.js";
import TaleemParticipationRules from "../components/TaleemParticipationRules.js";

import Footer from "../components/Footer.js";

export default function Taleem() {
  return (
    <>
      <Header
        data={{
          title: "Taleem - Ijtema 2022",
          description: "MKA National Ijtema 2022 Taleem Competitions",
        }}
      />
      <Nav />
      <main className="mainContent">
        <TaleemHero />
        <TaleemParticipationRules />
      </main>
      <Footer />
    </>
  );
}
