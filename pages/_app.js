import "../styles/globals.css";
import "../styles/program.css";
import "../styles/map.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
