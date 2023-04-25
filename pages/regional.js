import React, { useState } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { geojsonNW, layerDataNW } from "../data/geoJSON/northwest.js";
import { geojsonSW, layerDataSW } from "../data/geoJSON/southwest.js";
import { geojsonGulf, layerDataGulf } from "../data/geoJSON/gulf.js";
import { geojsonSE, layerDataSE } from "../data/geoJSON/southeast.js";
import { geojsonVA, layerDataVA } from "../data/geoJSON/virginia.js";
import { geojsonMD, layerDataMD } from "../data/geoJSON/muqami.js";
import { geojsonE, layerDataE } from "../data/geoJSON/east.js";
import { geojsonNY, layerDataNY } from "../data/geoJSON/newyork.js";
import { geojsonNE, layerDataNE } from "../data/geoJSON/northeast.js";
import { geojsonGL, layerDataGL } from "../data/geoJSON/greatlakes.js";
import { geojsonMW, layerDataMW } from "../data/geoJSON/midwest.js";

import { Modal, Button } from "react-bootstrap";

import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Footer from "../components/Footer.js";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidG9maWtraGFuIiwiYSI6ImNsNml4ZHUwYTNlYzYzZXAzeDRxbGZka2IifQ.czUytQDh7VMg5brf4mYuow"; // Set your mapbox token here

const regionalIjtemaInfo = [
  {
    id: "NorthWest",
    title: "Northwest Regional Ijtema",
    date: "May 26 - 28",
    location: "Zephyr Point, Lake Tahoe",
    url: "/northwest",
  },
  {
    id: "SouthWest",
    title: "Southwest Regional Ijtema",
    date: "May 19 - 21",
    location:
      "Camp Nawakwa, Big Bear, 4650 Jenks Lake Rd E, Angelus Oaks, CA 92305",
    register: "https://tinyurl.com/swijtema23",
  },
  {
    id: "Gulf",
    title: "Gulf Regional Ijtema",
    date: "May 20 - 21",
    location: "Bait-ul-Ikram - Dallas, TX",
    register: "https://khudd.am/gulfijtema",
  },
  {
    id: "SouthEast",
    title: "Southeast Regional Ijtema",
    date: "May 19 - 21",
    location: "Bait-ul-Ata - Atlanta, GA",
    register: "http://tinyurl.com/mkausa2023",
  },
  {
    id: "Virginia",
    title: "Virginia Regional Ijtema",
    date: "May 20 - 21",
    location: "Mubarak Mosque, NVA",
    register: "https://khudd.am/vaijtema2023",
  },
  {
    id: "Muqami",
    title: "Muqami Regional Ijtema",
    date: "May 20",
    location: "Masjid Bait-ur-Rahman",
  },
  {
    id: "East",
    title: "East Regional Ijtema",
    date: "May 20",
    location: "Baitul Aafiyat, Philadelphia",
  },
  {
    id: "NewYork",
    title: "New York Metro Regional Ijtema",
    date: "May 07",
    location: "Long Island Mosque ",
    register: "https://forms.gle/rj4x4S2jiMbhpxQJ9",
  },
  {
    id: "NorthEast",
    title: "Northeast Regional Ijtema",
    date: "May 06",
    location: "Baitul Nûr - Albany, NY.",
    register: "https://forms.gle/xeWyJtPd2A4KnwV98",
  },
  {
    id: "GreatLakes",
    title: "Great Lakes Regional Ijtema",
    date: "May 05-06",
    location: "Masjid Mahmood - Detroit, MI",
    register: "https://forms.gle/LoLL2YFyyCGJXWBa7",
  },
  {
    id: "MidWest",
    title: "Midwest Regional Ijtema",
    date: "May 19 - 20",
    location: "Baitul Jaamay - Chicago, IL",
    register: "https://forms.gle/tHZZqMWqvNUkt7MQ6",
  },
];

export default function MapPage() {
  const [showModal, updateShowModal] = useState(false);
  const [modalContent, updateModalContent] = useState({});

  const statesJSON = require("../data/geoJSON/states.json");
  const statesData = {
    id: "States",
    type: "line",
    paint: {
      "line-color": "#AAAAAA",
      "line-width": 2,
    },
  };

  return (
    <>
      <Header
        data={{
          title: "Map - Ijtema 2022",
          description: "An interactive map of the Ijtema Gah",
        }}
      />
      <Nav />
      <main className="mainContent">
        <Map
          initialViewState={{
            latitude: 41.8286,
            longitude: -95.7881,
            zoom: 3.87,
          }}
          style={{ width: "100%", height: "80vh" }}
          mapStyle="mapbox://styles/mapbox/light-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          onZoom={(event) => {
            //console.log("lat: " + event.viewState.latitude, "long: " + event.viewState.longitude, "zoom: " + event.viewState.zoom)
            //console.log(event)
          }}
          interactiveLayerIds={[
            "NorthWest",
            "SouthWest",
            "Gulf",
            "SouthEast",
            "Virginia",
            "Muqami",
            "East",
            "NewYork",
            "NorthEast",
            "GreatLakes",
            "MidWest",
          ]}
          onClick={(event) => {
            updateShowModal(true);
            updateModalContent(
              regionalIjtemaInfo.filter(
                (region) => region.id === event.features[0]?.layer.id
              )[0] || {}
            );
          }}
        >
          <Source id="NorthWest" type="geojson" data={geojsonNW}>
            <Layer {...layerDataNW} />
          </Source>

          <Source id="SouthWest" type="geojson" data={geojsonSW}>
            <Layer {...layerDataSW} />
          </Source>

          <Source id="Gulf" type="geojson" data={geojsonGulf}>
            <Layer {...layerDataGulf} />
          </Source>

          <Source id="SouthEast" type="geojson" data={geojsonSE}>
            <Layer {...layerDataSE} />
          </Source>

          <Source id="Virginia" type="geojson" data={geojsonVA}>
            <Layer {...layerDataVA} />
          </Source>

          <Source id="Muqami" type="geojson" data={geojsonMD}>
            <Layer {...layerDataMD} />
          </Source>

          <Source id="East" type="geojson" data={geojsonE}>
            <Layer {...layerDataE} />
          </Source>

          <Source id="NewYork" type="geojson" data={geojsonNY}>
            <Layer {...layerDataNY} />
          </Source>

          <Source id="NorthEast" type="geojson" data={geojsonNE}>
            <Layer {...layerDataNE} />
          </Source>

          <Source id="GreatLakes" type="geojson" data={geojsonGL}>
            <Layer {...layerDataGL} />
          </Source>

          <Source id="MidWest" type="geojson" data={geojsonMW}>
            <Layer {...layerDataMW} />
          </Source>

          <Source id="States" type="geojson" data={statesJSON}>
            <Layer {...statesData} />
          </Source>
        </Map>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => updateShowModal(false)}
          aria-labelledby="regional-ijtema-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="regional-ijtema-modal">
              {modalContent.title || "Regional Ijtema"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Date: </strong>
              {modalContent.date || "No Date"}
            </p>
            <p>
              <strong>Location: </strong>
              {modalContent.location || "No Location"}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => updateShowModal(false)}>
              Close
            </Button>
            {modalContent.url ? (
              <Button variant="primary" href={modalContent.url}>
                Website
              </Button>
            ) : (
              ""
            )}
            {modalContent.register ? (
              <Button variant="outline-primary" href={modalContent.register}>
                Register
              </Button>
            ) : (
              ""
            )}
          </Modal.Footer>
        </Modal>
      </main>
      <Footer />
    </>
  );
}
