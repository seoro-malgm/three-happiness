import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { GlobalNav } from "../components/GlobalNav";
import { GlobalFooter } from "../components/GlobalFooter";
import { Routes, Route } from "react-router-dom";

// pages
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";

function Default() {
  return (
    <div className="layout-default">
      <CssBaseline />
      <header>
        <GlobalNav />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <GlobalFooter />
    </div>
  );
}

export default Default;
