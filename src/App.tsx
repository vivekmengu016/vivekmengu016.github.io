import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import Contact from './pages/contact'
import "./normalize.css";
import "./index.scss";
import "./darktheme.scss";


const App = () => (
  <div className="container">
    <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-me" element={<Contact />} />
    </Routes>
  </HashRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
