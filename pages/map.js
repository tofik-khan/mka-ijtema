import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Map from "react-map-gl";

import Footer from "../components/Footer.js";

export default function MapPage() {
  return (
    <>
      <Header
        data={{
          title: "Map - Ijtema 2022",
          description: "...",
        }}
      />
      <Nav />
      <main className="mainContent">
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </main>
      <Footer />
    </>
  );
}
