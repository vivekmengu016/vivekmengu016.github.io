import React, { Fragment } from "react";
// import html from '../assets/html.svg';
// import css3 from '../assets/css3.svg';




import { Link } from "react-router-dom";

import Header from '../components/header';
import Profile from '../components/profile';
import Footer from '../components/footer';
import Skills from "../components/skills";
import AboutMe from "../components/aboutme";
import Experience from "../components/expirence";
import Education from "../components/education";
import Languages from "../components/languages";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className="innerwrap">
                <Profile />
                <AboutMe />
                <Skills />
                <Experience />
                <Education />
                <Languages />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;