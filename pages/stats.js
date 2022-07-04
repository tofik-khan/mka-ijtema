import Head from "next/head";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav.js";

import {
  TYPE_INDEX,
  NAME_INDEX,
  ALL_COUNT_INDEX,
  ALL_TARGET_INDEX,
  REGION_NAME,
  ATFAL_COUNT,
  ATFAL_TARGET,
  KHUDDAM_COUNT,
  KHUDDAM_TARGET,
  ANSAR_COUNT,
} from "../components/const.js";

import StatsHero from "../components/StatsHero.js";
import StatsOverview from "../components/StatsOverview.js";
import StatsTopPerformers from "../components/StatsTopPerformers.js";
import StatsOverviewPlaceholder from "../components/StatsOverviewPlaceholder.js";
import StatsRegional from "../components/StatsRegional.js";
import StatsTotal from "../components/StatsTotal.js";

import Footer from "../components/Footer.js";

export default function Stats() {
  const [formData, updateFormData] = useState([]);
  const [isLoaded, updateLoaded] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const url = "/api/sheets";

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        updateFormData(sanitizeFormData(response));
        updateLoaded(true);
      });
  }, []);

  if (isLoaded) {
    const topPerformers = getTopMajalis(formData);
    return (
      <>
        <Head>
          <title>Stats - Ijtema 2022</title>
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
        <main className="mainContent">
          <StatsHero />
          <StatsOverview data={formData} />
          <StatsTopPerformers data={topPerformers} />
          <StatsRegional data={formData} />
          <StatsTotal data={formData} />
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Stats - Ijtema 2022</title>
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
        <main className="mainContent">
          <StatsHero />
          <StatsOverviewPlaceholder />
        </main>
        <Footer />
      </>
    );
  }
}
function sanitizeFormData(response) {
  //{totals: {all: "123", khuddam: "12", atfal: "5"}, regions: [], majalis: []}
  let rtnObject = { totals: {}, regions: [], majalis: [], update: "" };

  response.map((row) => {
    switch (row[TYPE_INDEX]) {
      case "Total":
        rtnObject.totals = {
          all: row[ALL_COUNT_INDEX],
          allTarget: row[ALL_TARGET_INDEX],
          atfalCount: row[ATFAL_COUNT],
          atfalTarget: row[ATFAL_TARGET],
          khuddamCount: row[KHUDDAM_COUNT],
          khuddamTarget: row[KHUDDAM_TARGET],
          ansarCount: row[ANSAR_COUNT],
        };
        break;
      case "Majlis":
        rtnObject.majalis.push({
          name: row[NAME_INDEX],
          all: row[ALL_COUNT_INDEX],
          allTarget: row[ALL_TARGET_INDEX],
          region: row[REGION_NAME],
          atfalCount: row[ATFAL_COUNT],
          atfalTarget: row[ATFAL_TARGET],
          khuddamCount: row[KHUDDAM_COUNT],
          khuddamTarget: row[KHUDDAM_TARGET],
        });
        break;
      case "Region":
        rtnObject.regions.push({
          name: row[NAME_INDEX],
          all: row[ALL_COUNT_INDEX],
          allTarget: row[ALL_TARGET_INDEX],
          atfalCount: row[ATFAL_COUNT],
          atfalTarget: row[ATFAL_TARGET],
          khuddamCount: row[KHUDDAM_COUNT],
          khuddamTarget: row[KHUDDAM_TARGET],
        });
        break;
      case "Update":
        rtnObject.update = row[1];
        break;
      default:
    }
  });
  return rtnObject;
}

function getTopMajalis(formData) {
  return formData.majalis
    .map((majlis) => {
      return [
        majlis.name,
        (parseInt(majlis.all.replace(",", "")) /
          parseInt(majlis.allTarget.replace(",", ""))) *
          100,
        majlis.atfalCount,
        majlis.khuddamCount,
      ];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });
}
