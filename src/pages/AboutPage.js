import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import profilePicture from "../images/profile-picture-square-removebg-preview.png";
import resume from '../images/MarkMulligan-Resume.pdf';
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="background-wrapper purple-background transition-from-top">
      <CustomNavbar />
      <div className="container about-container">
        <div className="about-title-container">
          <h1>About Me</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-5 col-12 text-center profile-picture-col">
            <img className="img-fluid" src={profilePicture} alt="" />
          </div>
          <div className="col-lg-7 col-12 about-text-col">
            <p>Hey, I'm Mark and I am a web developer based in Dallas, TX.</p>

            <p>
              I first picked up coding as side hobby when I was working as a
              Band Director. I then began using my new found skills to create
              resources for my students. My hobby soon became my passion, and I
              decided to take the next step by attending the SMU Coding Bootcamp
              to study Full-Stack Web Development.
            </p>

            <p className="last-p">
              After graduating, I plan to purse a career in web development and
              look forward to continuing to improve my skills as a developer.
            </p>

            <a href={resume} target="_blank" rel="noreferrer">
              <button id="resume" className="mt-4 btn btn-outline-light">
                Resume
              </button>
            </a>
            <div className="mt-2">
              <a
                className="email-link"
                href="mailto:mark.mulligan.jr1@gmail.com"
              >
                mark.mulligan.jr1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
