import React, { Fragment } from "react";
import html from '../assets/html.svg';
import css3 from '../assets/css3.svg';

import nodejs from '../assets/nodejs.svg';
import vscode from '../assets/vscode.svg';
import nginx from '../assets/nginx.svg';
import docker from '../assets/docker.svg';
import linux from '../assets/linux.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import typescript from '../assets/typescript.svg';
import bootstrap from '../assets/bootstrap.svg';
import javascript from '../assets/javascript.svg';
import strapi from '../assets/strapi.svg';
import git from '../assets/git.svg';
import babel from '../assets/babel.svg';
import express from '../assets/express.svg';
import github from '../assets/github.svg';
import grunt from '../assets/grunt.svg';
import handlebars from '../assets/handlebars.svg';
import python from '../assets/python.svg';
import sass from '../assets/sass.svg';
import slack from '../assets/slack.svg';
import vagrant from '../assets/vagrant.svg';
import webpack from '../assets/webpack.svg';
import nextjs from '../assets/nextjs.png';
import contentstack from '../assets/contentstack.png';
import npm from '../assets/npm.svg';


import { Link } from "react-router-dom";

import Header from '../components/header';
import Profile from '../components/profile';
import Footer from '../components/footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className="innerwrap">
                <Profile />
                <div className="exp-section">
                    <div className="subtitle">
                        <h4>About me</h4>
                    </div>
                    <div className="content">
                        <div className="about-me">
                            <p>Experienced in developing ReactJs web applications with modern technologies like Typescript,
                                Redux, Saga, Webpack. Hands-on experience in improving application performance and code
                                optimization. Have built SAAS applications from scratch to production ready and also worked
                                on major Headless CMS.
                            </p>
                            <div className="card-view">
                                <div className="card email">
                                    <strong>Email Id</strong>
                                    <p>
                                        <a href="mailto:vivek.mengu016@gmail.com"><span>vivek.mengu016@gmail.com</span></a>
                                    </p>
                                </div>
                                <div className="card">
                                    <strong>Contact</strong>
                                    <p>
                                        <a href="tel:+91-81699-79459"><span>+91 8169979459</span></a>
                                    </p>
                                </div>
                                <div className="card">
                                    <strong>LinkedIn</strong>
                                    <p>
                                        <a href="https://www.linkedin.com/in/vivekmengu016/" target="_blank"><span>@vivekmengu016</span></a>
                                    </p>
                                </div>
                                <div className="card">
                                    <strong>Twitter</strong>
                                    <p>
                                        <a href="https://twitter.com/VivekMengu" target="_blank"><span>@VivekMengu</span></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="exp-section">
                    <div className="subtitle">
                        <h4>Skills</h4>
                    </div>
                    <div className="content">
                        <ul className="skills-list">
                            <li className="item"><img src={html} /></li>
                            <li className="item"><img src={css3} /></li>
                            <li className="item"><img src={nodejs} /></li>
                            <li className="item"><img src={vscode} /></li>
                            <li className="item"><img src={nginx} /></li>
                            <li className="item"><img src={docker} /></li>
                            <li className="item"><img src={linux} /></li>
                            <li className="item"><img src={react} /></li>
                            <li className="item"><img src={redux} /></li>
                            <li className="item"><img src={typescript} /></li>
                            <li className="item"><img src={bootstrap} /></li>
                            <li className="item"><img src={javascript} /></li>
                            <li className="item"><img src={strapi} /></li>
                            <li className="item"><img src={git} /></li>
                            <li className="item"><img src={babel} /></li>
                            <li className="item"><img src={express} /></li>
                            <li className="item"><img src={github} /></li>
                            <li className="item"><img src={grunt} /></li>
                            <li className="item"><img src={handlebars} /></li>
                            <li className="item"><img src={python} /></li>
                            <li className="item"><img src={sass} /></li>
                            <li className="item"><img src={slack} /></li>
                            <li className="item"><img src={vagrant} /></li>
                            <li className="item"><img src={webpack} /></li>
                            <li className="item"><img src={nextjs} /></li>
                            <li className="item"><img src={contentstack} /></li>
                            <li className="item"><img src={npm} /></li>

                        </ul>
                    </div>
                </div>

                <div className="exp-section">
                    <div className="subtitle">
                        <h4>Experience</h4>
                    </div>
                    <div className="content">
                        <div className="skill-card">
                            <div className="card">
                                <h2>ContentStack</h2>
                                <p>Full Time 3 yrs 6 mos</p>
                                <p> Virar, Maharashtra, India </p>
                                <div className="timeline">
                                    <div className="line">
                                        <h3>Senior Software Engineer ll</h3>
                                        <p>Mar 2022 - Present 5 mos</p>
                                    </div>
                                    <div className="line">
                                        <h3>Application Engineer</h3>
                                        <p>Feb 2019 - Mar 2022 3 yrs 2 mos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <h2>OneDigiLTA </h2>
                                <p>Full Time 6 mos</p>
                                <p> Virar, Maharashtra, India </p>
                                <div className="timeline">
                                    <div className="line">
                                        <h3>Frontend Engineer</h3>
                                        <p>Jun 2018 - Nov 2018 6 mos </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="skill-card">
                            <div className="card">
                                <h2>GoPBN </h2>
                                <p>Full Time 2 yrs 1 mos</p>
                                <p> Virar, Maharashtra, India </p>
                                <div className="timeline">
                                    <div className="line">
                                        <h3> Frontend Developer Lead </h3>
                                        <p> May 2016 - May 2018 · 2 yrs 1 mo </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <h2>WisdmLabs</h2>
                                <p>Full Time 2 yrs 2 mos</p>
                                <p> Thane, Maharashtra, India </p>
                                <div className="timeline">
                                    <div className="line">
                                        <h3>Frontend Developer</h3>
                                        <p>Mar 2015 - Apr 2016 1 yr 2 mos</p>
                                    </div>
                                    <div className="line">
                                        <h3>Frontend Developer Intern</h3>
                                        <p>Mar 2014 - Apr 2015 1 yrs 2 mos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="exp-section">
                    <div className="subtitle">
                        <h4>Education</h4>
                    </div>
                    <div className="content">
                        <div className="education-cards">
                            <div className="item">
                                <h4>Vidyalankar School of Information Technology / BSc.IT </h4>
                                <p>2012 - 2015,  Mumbai</p>
                            </div>
                            <div className="item">
                                <h4>Andhra Education Society Jr College / Computer Science (H.S.C)</h4>
                                <p>2010 - 2012,  Mumbai</p>
                            </div>
                            <div className="item">
                                <h4>Andhra Education Society High School / (S.S.C) </h4>
                                <p>Till 2010 ,  Mumbai</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="exp-section">
                    <div className="subtitle">
                        <h4>Languages Known</h4>
                    </div>
                    <div className="content">
                        <ul className="langiages-list">
                            <li>
                                <div className="radialProgressBar progress-100">
                                    <div className="overlay"> </div>
                                </div>
                                <p>English</p>
                            </li>
                            <li>
                                <div className="radialProgressBar progress-100">
                                    <div className="overlay"> </div>
                                </div>
                                <p>Hindi -<b> हिंदी </b></p>
                            </li>
                            <li>
                                <div className="radialProgressBar progress-60">
                                    <div className="overlay"> </div>
                                </div>
                                <p>Marathi -<b> मराठी </b></p>
                            </li>
                            <li>
                                <div className="radialProgressBar progress-90">
                                    <div className="overlay"> </div>
                                </div>
                                <p>Telugu -<b> తెలుగు </b></p>
                            </li>
                            <li>
                                <div className="radialProgressBar progress-10">
                                    <div className="overlay"> </div>
                                </div>
                                <p>Tamil -<b> தமிழ் </b></p>
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;