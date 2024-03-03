import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basic from "./component/Basic/Basic";
import Aggregator from "./Aggregator/Aggregator";
import AboutPage from "./page/aboutPage/aboutPage";
import Contact from "./page/Contact/Contact";
import SocialMedia from "./page/SocialMedia/SocialMedia";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Aggregator" element={<Aggregator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
