import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ContactForm from "../components/ContactForm";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="background-wrapper maroon-background transition-from-right">
      <CustomNavbar />
      <div className="container contact-container">
        <div class="contact-title-container">
          <h1>Let's Work Together</h1>
        </div>
        <ContactForm />
        <div className="container contact-links-container">
          <div className="row">
            <div className="col-sm-3 col-6 text-center contact-link-wrapper">
              <a
                href="https://github.com/Mark-Mulligan"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-3x fa-github"></i>
              </a>
            </div>
            <div class="col-sm-3 col-6 text-center contact-link-wrapper">
              <a
                href="https://www.linkedin.com/in/mark-mulligan-90b4671b7/"
                class="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-3x fa-linkedin"></i>
              </a>
            </div>
            <div class="col-sm-3 col-6 col text-center contact-link-wrapper">
              <a
                href="https://www.facebook.com/mark.mulligan.5264"
                class="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-3x fa-facebook-f"></i>
              </a>
            </div>
            <div class="col-sm-3 col-6 text-center contact-link-wrapper">
              <a
                href="mailto:mark.mulligan.jr1@gmail.com"
                class="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-3x fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
