import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";

import "@wordpress/dataviews/build-style/style.css";

import App from "./App";

domReady(() => {
  const root = createRoot(document.getElementById("my-custom-dataview-app"));
  root.render(<App />);
});
