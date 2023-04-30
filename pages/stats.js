import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import StatsHero from "../components/StatsHero";
import StatsOverview from "../components/StatsOverview";

export default function Page({ data }) {
  return (
    <>
      <Header data={{ title: "National Ijtema 2023 | Stats" }} />
      {/* Replace these imports with proper partial */}
      <StatsHero />
      <StatsOverview data={data} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let data = {};
  await fetch(`${process.env.API_ROUTE}typeform-pull`)
    .then((response) => response.json())
    .then((response) => (data = response));
  return { props: { data } };
}
