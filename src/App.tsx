import React, { useEffect } from "react";
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

import bg from "./static/bg.jpg";

const App = () => {

  useEffect(() => {
    let getStore = localStorage.getItem('_vmgio');
    let theme = getStore ? JSON.parse(getStore) : { theme: 'light' }
    document.body.classList.add(theme.theme);
  });
  
  return (
    <div className="container">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact-me" element={<Contact />} /> */}
        </Routes>
      </HashRouter>
      <div className="container-bg" style={{
      backgroundImage: `url(${bg})`,
      width: '100%',
      height: '100%',
    }}></div>
    </div>
  );
} 

ReactDOM.render(<App />, document.getElementById("app"));
