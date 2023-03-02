/* global document */
import React, { useState } from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import {geojsonNW, layerDataNW} from "../data/geoJSON/northwest.js";
import {geojsonSW, layerDataSW} from "../data/geoJSON/southwest.js";
import {geojsonGulf, layerDataGulf} from "../data/geoJSON/gulf.js";


import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Footer from "../components/Footer.js";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidG9maWtraGFuIiwiYSI6ImNsNml4ZHUwYTNlYzYzZXAzeDRxbGZka2IifQ.czUytQDh7VMg5brf4mYuow"; // Set your mapbox token here

const overlayFillOpacity = 0.5;

export default function MapPage() {
  
  const statesJSON = require("../data/geoJSON/states.json");
  const statesData = {
    id: "States",
    type: "line",
    paint: {
      'line-color': '#AAAAAA',
      'line-width': 2
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
          interactiveLayerIds={['NorthWest', 'SouthWest', 'Gulf']}
          onClick={(event) => console.log(event.features[0])}
        >
          <Source id="NorthWest" type="geojson" data={geojsonNW}>
            <Layer 
              {...layerDataNW}
            />
          </Source>

          <Source id="SouthWest" type="geojson" data={geojsonSW}>
            <Layer 
              {...layerDataSW}
            />
          </Source>

          <Source id="Gulf" type="geojson" data={geojsonGulf}>
            <Layer 
              {...layerDataGulf}
            />
          </Source>

          <Source id="States" type="geojson" data={statesJSON}>
            <Layer 
              {...statesData}
            />
          </Source>
        </Map>
        
      </main>
      <Footer />
    </>
  );
}
