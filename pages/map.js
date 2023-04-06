/* global document */
import React, { useState } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { geojsonNW, layerDataNW } from "../data/geoJSON/northwest.js";
import { geojsonSW, layerDataSW } from "../data/geoJSON/southwest.js";
import { geojsonGulf, layerDataGulf } from "../data/geoJSON/gulf.js";
import { geojsonSE, layerDataSE } from "../data/geoJSON/southeast.js";

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
  },
  {
    id: "Gulf",
    title: "Gulf Regional Ijtema",
    date: "May 20 - 21",
    location: "Bait-ul-Ikram - Dallas, TX",
  },
  {
    id: "SouthEast",
    title: "Southeast Regional Ijtema",
    date: "May 19 - 21",
    location: "Bait-ul-Ata - Atlanta, GA",
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
          interactiveLayerIds={["NorthWest", "SouthWest", "Gulf", "SouthEast"]}
          onClick={(event) => {
            updateShowModal(true);
            updateModalContent(
              regionalIjtemaInfo.filter(
                (region) => region.id === event.features[0].layer.id
              )[0]
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
          </Modal.Footer>
        </Modal>
      </main>
      <Footer />
    </>
  );
}
