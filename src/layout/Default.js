import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { GlobalNav } from "../components/GlobalNav";
import { GlobalFooter } from "../components/GlobalFooter";
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";

function Default() {
  // const [user, setUser] = useState(null);
  // const token = window.sessionStorage.getItem("three-happiness-token");
  // if (token) {
  //   setUser(token);
  // }
  return (
    <div className="layout-default">
      <CssBaseline />
      <header>
        <GlobalNav />
      </header>
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="">
        <header>todos</header>
        <ul>
          <li>이벤트를 $emit 하는건 어떻게하는가? </li>
          <li>다른 컴포넌트에서 state가 변경된걸 어떻게 감지하는가?</li>
          <li>다른 컴포넌트에서 변경된걸 어떻게 감지하는가?</li>
        </ul>
      </div>

      <GlobalFooter />
    </div>
  );
}

export default Default;
