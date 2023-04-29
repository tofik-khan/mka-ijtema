import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function Page({ data }) {
  return (
    <>
      <Header data={{ title: "National Ijtema 2023 | Stats" }} />
      <h1>Page</h1>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let data = {};
  await fetch("/api/typeform-pull")
    .then((response) => response.json())
    .then((response) => (data = response));
  return { props: { data } };
}
