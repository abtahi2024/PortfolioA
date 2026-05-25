import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navber } from "./components/Navber";
import { Home } from "./page/Home";
import { Skills } from "./page/Skills";
import { Work } from "./page/Work";
import { About } from "./page/About";
import { Connect } from "./page/Connect";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
