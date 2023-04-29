import Head from "next/head";
import Navigation from "./Nav";

export default function Header({ data }) {
  return (
    <>
      <Head>
        <title>{data.title ? data.title : "Ijtema 2023"}</title>
        <meta
          name="description"
          content={
            data.description ? data.description : "National Ijtema for MKA USA"
          }
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div style={{ height: "108px" }} />
    </>
  );
}
