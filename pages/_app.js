import "../styles/index.css";

import { init } from "@socialgouv/matomo-next";
import { useEffect } from "react";

const MATOMO_URL = "https://analytics.schwarzkopf.center/";
const MATOMO_SITE_ID = 1;

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
  return <Component {...pageProps} />;
}
