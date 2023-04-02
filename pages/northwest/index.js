import React from "react";

import Header from "../../components/Header.js";
import Nav from "../../components/Nav.js";
import Footer from "../../components/Footer.js";

export default function Page() {
  return (
    <>
      <Header
        data={{
          title: "Northwest Regional Ijtema 2023",
          description: "Northwest Regional Ijtema 2023 info center",
        }}
      />
      <Nav />

      <Footer />
    </>
  );
}
