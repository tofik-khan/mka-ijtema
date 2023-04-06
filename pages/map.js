/* global document */
import React, { useState } from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";

import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Link from "next/link";

import Footer from "../components/Footer.js";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidG9maWtraGFuIiwiYSI6ImNsNml4amNwYzE2YmIzaXMwNndxYzVrN2oifQ.goXMY3Xp0nRJa2rWSQ4Jxg"; // Set your mapbox token here

const overlayFillOpacity = 0.5;

export default function MapPage() {
  const [showPopupA, setShowPopupA] = useState(false);
  const [showPopupB, setShowPopupB] = useState(false);
  const [showPopupC, setShowPopupC] = useState(false);
  const [showPopupD, setShowPopupD] = useState(false);
  const [showPopupE, setShowPopupE] = useState(false);
  const [showPopupF, setShowPopupF] = useState(false);
  const [showPopupG, setShowPopupG] = useState(false);
  const [showPopupH, setShowPopupH] = useState(false);
  const [showPopupL, setShowPopupL] = useState(false);
  const [showPopupS, setShowPopupS] = useState(false);
  const [showPopupPA, setShowPopupPA] = useState(false);
  const [showPopupPS, setShowPopupPS] = useState(false);
  const [showPopupR, setShowPopupR] = useState(false);
  const [showPopupAD, setShowPopupAD] = useState(false);

  // TENT A
  const geojsonA = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98269583284852, 39.104088921995086],
          [-76.98294460773468, 39.10417347873579],
          [-76.98322422802447, 39.10373924627354],
          [-76.98296405375002, 39.103653908482926],
          [-76.98269583284852, 39.104088921995086],
        ],
      ],
    },
  };

  const layerDataA = {
    id: "Tent-A",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT B
  const geojsonB = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98220700025558, 39.10307449337406],
          [-76.98226869106293, 39.103140058322225],
          [-76.9823008775711, 39.10312548833901],
          [-76.98231026530266, 39.10313381404407],
          [-76.98237866163252, 39.10309530764992],
          [-76.98240011930466, 39.10311612191963],
          [-76.982461810112, 39.10308594122653],
          [-76.98237732052803, 39.102986032633034],
          [-76.98220700025558, 39.10307449337406],
        ],
      ],
    },
  };

  const layerDataB = {
    id: "Tent-B",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT C: Mens Prayer Hall
  const geojsonC = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98213994503021, 39.10310883692593],
          [-76.98222041130066, 39.10306720837605],
          [-76.98206752538681, 39.10288196103088],
          [-76.98198303580284, 39.10291942682535],
          [-76.98202461004257, 39.102967299755996],
          [-76.98200583457947, 39.10298082905658],
          [-76.98207423090935, 39.10306824909008],
          [-76.98209837079048, 39.10305992337728],
          [-76.98213994503021, 39.10310883692593],
        ],
      ],
    },
  };

  const layerDataC = {
    id: "Tent-C",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT D: Mens Prayer Hall
  const geojsonD = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98163971304893, 39.10447423973603],
          [-76.9819226861, 39.104509623298775],
          [-76.98205679655074, 39.104124565925844],
          [-76.98175370693205, 39.10406732748814],
          [-76.98163971304893, 39.10447423973603],
        ],
      ],
    },
  };

  const layerDataD = {
    id: "Tent-D",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT E: Conference Rooms
  const geojsonE = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98247253894806, 39.10309634836355],
          [-76.9827689230442, 39.10294024114702],
          [-76.98266565799713, 39.10281743656039],
          [-76.9823706150055, 39.102969381187],
          [-76.98247253894806, 39.10309634836355],
        ],
      ],
    },
  };

  const layerDataE = {
    id: "Tent-E",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT F: Conference Rooms
  const geojsonF = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98237866163252, 39.10289132748138],
          [-76.98285609483719, 39.10265508440569],
          [-76.98206149041653, 39.10236003962888],
          [-76.98188379406929, 39.102807029382205],
          [-76.9821774959564, 39.102656125125826],
          [-76.98237866163252, 39.10289132748138],
        ],
      ],
    },
  };

  const layerDataF = {
    id: "Tent-F",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT G
  const geojsonG = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98262341320515, 39.10376500369615],
          [-76.98240213096143, 39.103476728167095],
          [-76.98224857449533, 39.10354281309468],
          [-76.9824906438589, 39.103822242379344],
          [-76.98262341320515, 39.10376500369615],
        ],
      ],
    },
  };

  const layerDataG = {
    id: "Tent-G",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT H
  const geojsonH = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.9821647554636, 39.10351627506034],
          [-76.982012540102, 39.10358756348292],
          [-76.98233373463154, 39.10395441152477],
          [-76.98247723281384, 39.10388208277115],
          [-76.9821647554636, 39.10351627506034],
        ],
      ],
    },
  };

  const layerDataH = {
    id: "Tent-H",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT L
  const geojsonL = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98222175240517, 39.10306616766197],
          [-76.98234915733337, 39.10299852121496],
          [-76.98218956589699, 39.10281743656039],
          [-76.98206752538681, 39.10287675744674],
          [-76.98222175240517, 39.10306616766197],
        ],
      ],
    },
  };

  const layerDataL = {
    id: "Tent-L",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT S
  const geojsonS = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98310554027557, 39.10420157756871],
          [-76.98331207036972, 39.10427338564639],
          [-76.98347836732864, 39.10403090300358],
          [-76.98326781392097, 39.10395076907131],
          [-76.98310554027557, 39.10420157756871],
        ],
      ],
    },
  };

  const layerDataS = {
    id: "Tent-S",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT PS
  const geojsonPS = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98332816362381, 39.10428379260809],
          [-76.98354408144951, 39.10436288546686],
          [-76.98370635509491, 39.104127688021116],
          [-76.98349043726921, 39.104040269301414],
          [-76.98332816362381, 39.10428379260809],
        ],
      ],
    },
  };

  const layerDataPS = {
    id: "Tent-PS",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT PA
  const geojsonPA = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98149621486664, 39.102920467541594],
          [-76.98173895478249, 39.10224399875221],
          [-76.9816866517067, 39.102148251876066],
          [-76.9810201227665, 39.1018995175358],
          [-76.98073849081993, 39.10262906639741],
          [-76.98149621486664, 39.102920467541594],
        ],
      ],
    },
  };

  const layerDataPA = {
    id: "Tent-PA",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
    },
  };

  // TENT AD
  const geojsonAD = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-76.98269918560982, 39.10299227692426],
          [-76.98250606656075, 39.10308385979895],
          [-76.98258653283119, 39.10317023899217],
          [-76.9827689230442, 39.1030817783713],
          [-76.98269918560982, 39.10299227692426],
        ],
      ],
    },
  };

  const layerDataAD = {
    id: "Tent-AD",
    type: "fill",
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": overlayFillOpacity,
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
            latitude: 39.1036,
            longitude: -76.9828,
            zoom: 17.65,
          }}
          style={{ width: "100%", height: "80vh" }}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {/* TENT A: Main Jalsa Gah  */}
          <Source id="Tent-A" type="geojson" data={geojsonA}>
            <Layer {...layerDataA} />
          </Source>
          <Marker
            longitude={-76.98294326663016}
            latitude={39.10393099574936}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupA(true);
            }}
          >
            <img src="./map-markers/A.png" />
          </Marker>

          {showPopupA && (
            <Popup
              longitude={-76.98294326663016}
              latitude={39.10393099574936}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupA(false)}
            >
              <br />
              <strong>Tent A</strong>
              <p>Main Ijtema Gah</p>
            </Popup>
          )}

          {/* TENT B: BRM Basement  */}
          <Source id="Tent-B" type="geojson" data={geojsonB}>
            <Layer {...layerDataB} />
          </Source>
          <Marker
            longitude={-76.98233440518379}
            latitude={39.10306200480557}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupB(true);
            }}
          >
            <img src="./map-markers/B.png" />
          </Marker>

          {showPopupB && (
            <Popup
              longitude={-76.98233440518379}
              latitude={39.10306200480557}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupB(false)}
            >
              <br />
              <strong>BRM Basement</strong>
              <ul>
                <li>Atfal Dinning</li>
                <li>Atfal Tarbiyyat Sessions</li>
              </ul>
            </Popup>
          )}

          {/* TENT C: Men Prayer Hall  */}
          <Source id="Tent-C" type="geojson" data={geojsonC}>
            <Layer {...layerDataC} />
          </Source>
          <Marker
            longitude={-76.98209300637245}
            latitude={39.10300580622006}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupC(true);
            }}
          >
            <img src="./map-markers/C.png" />
          </Marker>

          {showPopupC && (
            <Popup
              longitude={-76.98209300637245}
              latitude={39.10300580622006}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupC(false)}
            >
              <br />
              <strong>Men Prayer Hall</strong>
              <ul>
                <li>Prayers</li>
                <li>Taleem &amp; Tarbiyyat</li>
                <li>Atfal Sleeping Area B</li>
              </ul>
            </Popup>
          )}

          {/* TENT D: Dinning  */}
          <Source id="Tent-D" type="geojson" data={geojsonD}>
            <Layer {...layerDataD} />
          </Source>
          <Marker
            longitude={-76.98183551430701}
            latitude={39.10432958322134}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupD(true);
            }}
          >
            <img src="./map-markers/D.png" />
          </Marker>

          {showPopupD && (
            <Popup
              longitude={-76.98183551430701}
              latitude={39.10432958322134}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupD(false)}
            >
              <br />
              <strong>Dinning Tent</strong>
              <ul>
                <li>Food/Meals</li>
              </ul>
            </Popup>
          )}

          {/* TENT E: Conference Rooms  */}
          <Source id="Tent-E" type="geojson" data={geojsonE}>
            <Layer {...layerDataE} />
          </Source>
          <Marker
            longitude={-76.98256105184554}
            latitude={39.102967299755996}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupE(true);
            }}
          >
            <img src="./map-markers/E.png" />
          </Marker>

          {showPopupE && (
            <Popup
              longitude={-76.98256105184554}
              latitude={39.102967299755996}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupE(false)}
            >
              <br />
              <strong>BRM Conference Halls</strong>
            </Popup>
          )}

          {/* TENT F: BRM Field  */}
          <Source id="Tent-F" type="geojson" data={geojsonF}>
            <Layer {...layerDataF} />
          </Source>
          <Marker
            longitude={-76.98231562972069}
            latitude={39.102633229279384}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupF(true);
            }}
          >
            <img src="./map-markers/F.png" />
          </Marker>

          {showPopupF && (
            <Popup
              longitude={-76.98231562972069}
              latitude={39.102633229279384}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupF(false)}
            >
              <br />
              <strong>BRM Field</strong>
              <ul>
                <li>Atfal Fair</li>
              </ul>
            </Popup>
          )}

          {/* TENT G: Welcome Center  */}
          <Source id="Tent-G" type="geojson" data={geojsonG}>
            <Layer {...layerDataG} />
          </Source>
          <Marker
            longitude={-76.98240548372269}
            latitude={39.10360837760729}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupG(true);
            }}
          >
            <img src="./map-markers/G.png" />
          </Marker>

          {showPopupG && (
            <Popup
              longitude={-76.98240548372269}
              latitude={39.10360837760729}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupG(false)}
            >
              <br />
              <strong>Welcome Center</strong>
              <ul>
                <li>Registration</li>
                <li>Ijtema Daftar</li>
                <li>First Aid</li>
                <li>Department Stalls</li>
                <li>Information and Lost &amp; Found</li>
              </ul>
            </Popup>
          )}

          {/* TENT H: MKA HUB  */}
          <Source id="Tent-H" type="geojson" data={geojsonH}>
            <Layer {...layerDataH} />
          </Source>
          <Marker
            longitude={-76.98225393891335}
            latitude={39.10373846574545}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupH(true);
            }}
          >
            <img src="./map-markers/H.png" />
          </Marker>

          {showPopupH && (
            <Popup
              longitude={-76.98225393891335}
              latitude={39.10373846574545}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupH(false)}
            >
              <br />
              <strong>MKA Hub</strong>
              <ul>
                <li>MKA Cafe / Bazaar</li>
                <li>Pool, Table Tennis, Air Hockey...</li>
                <li>Special Khilafat Exhibition</li>
              </ul>
              <div className="justify-content-center text-center">
                <Link href="/mkahub">
                  <Button variant="warning btn">Visit the MKA Hub</Button>
                </Link>
              </div>
            </Popup>
          )}

          {/* TENT L: Lajna Prayer Hall  */}
          <Source id="Tent-L" type="geojson" data={geojsonL}>
            <Layer {...layerDataL} />
          </Source>
          <Marker
            longitude={-76.98221638798714}
            latitude={39.10294336329473}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupL(true);
            }}
          >
            <img src="./map-markers/L.png" />
          </Marker>

          {showPopupL && (
            <Popup
              longitude={-76.98221638798714}
              latitude={39.10294336329473}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupL(false)}
            >
              <br />
              <strong>Lajna Prayer Hall</strong>
              <ul>
                <li>Atfal Sleeping Area</li>
              </ul>
            </Popup>
          )}

          <Marker
            longitude={-76.98192805051804}
            latitude={39.103365892677004}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupR(true);
            }}
          >
            <img src="./map-markers/R.png" />
          </Marker>

          {showPopupR && (
            <Popup
              longitude={-76.98192805051804}
              latitude={39.103365892677004}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupR(false)}
            >
              <br />
              <strong>Roundabout</strong>
              <ul>
                <li>Flag Hoisting</li>
                <li>Opening Dua</li>
              </ul>
            </Popup>
          )}

          {/* TENT S: Sleeping Area  */}
          <Source id="Tent-S" type="geojson" data={geojsonS}>
            <Layer {...layerDataS} />
          </Source>
          <Marker
            longitude={-76.98329731822014}
            latitude={39.10412040313194}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupS(true);
            }}
          >
            <img src="./map-markers/S.png" />
          </Marker>

          {showPopupS && (
            <Popup
              longitude={-76.98329731822014}
              latitude={39.10412040313194}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupS(false)}
            >
              <br />
              <strong>Sleeping Tent</strong>
              <ul>
                <li>Khuddam sleeping area</li>
              </ul>
            </Popup>
          )}

          {/* TENT PS: Personal Sleeping Area  */}
          <Source id="Tent-PS" type="geojson" data={geojsonPS}>
            <Layer {...layerDataPS} />
          </Source>
          <Marker
            longitude={-76.98352262377739}
            latitude={39.104202618266}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupPS(true);
            }}
          >
            <img src="./map-markers/PS.png" />
          </Marker>

          {showPopupPS && (
            <Popup
              longitude={-76.98352262377739}
              latitude={39.104202618266}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupPS(false)}
            >
              <br />
              <strong>Private Sleeping Tents</strong>
              <ul>
                <li>Bring your own personal tents</li>
              </ul>
            </Popup>
          )}

          {/* TENT PA: Parking Area  */}
          <Source id="Tent-PA" type="geojson" data={geojsonPA}>
            <Layer {...layerDataPA} />
          </Source>
          <Marker
            longitude={-76.98131382465363}
            latitude={39.10243341066756}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupPA(true);
            }}
          >
            <img src="./map-markers/PA.png" />
          </Marker>

          {showPopupPA && (
            <Popup
              longitude={-76.98131382465363}
              latitude={39.10243341066756}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupPA(false)}
            >
              <br />
              <strong>OKeefe Parking</strong>
              <ul>
                <li>Personal Car Parking</li>
              </ul>
            </Popup>
          )}

          {/* TENT AD: Atfal Daftar  */}
          <Source id="Tent-AD" type="geojson" data={geojsonAD}>
            <Layer {...layerDataAD} />
          </Source>
          <Marker
            longitude={-76.98263749480247}
            latitude={39.10307657480191}
            className="marker"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopupAD(true);
            }}
          >
            <img src="./map-markers/AD.png" />
          </Marker>

          {showPopupAD && (
            <Popup
              longitude={-76.98263749480247}
              latitude={39.10307657480191}
              anchor="bottom"
              className="map-popup"
              onClose={() => setShowPopupAD(false)}
            >
              <br />
              <strong>Atfal Daftar</strong>
              <ul>
                <li>Information Center</li>
              </ul>
            </Popup>
          )}
        </Map>
        <Container className="py-3">
          <h2>Legend:</h2>
          <Row>
            <Col md={6}>
              <br />
              A - Main Ijtema Gah
              <br />
              AD - Atfal Daftar
              <br />
              B - BRM Basement
              <br />
              C - BRM Mens Prayer Hall
              <br />
              D - Dining Tent
              <br />
              E - BRM Conference Room
              <br />
              F - Field Behind BRM
              <br />
            </Col>
            <Col md={6}>
              G - Welcome Tent
              <br />
              H - MKA HUB
              <br />
              L - Lajna Prayer Hall
              <br />
              R - Roundabout
              <br />
              S - Sleeping Tent
              <br />
              PS - Private Sleeping Tents
              <br />
              PA - OKeefe Parking
              <br />
              (Field Across BRM)
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}