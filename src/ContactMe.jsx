import React from "react";
import "./ContactMe.css";
import { Typography } from "@mui/material";
import arrowright from "../public/gohere.jpg";
import {
  FaTelegramPlane,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="contact-me-section" id="contact_me">
      <div className="contact-overlay">
        <h2>Let's Connect</h2>
        <div className="downicons">
          <p> Reach out to me through any of these channels</p>
          <img></img>
        </div>

        <p className="contact-subtitle"></p>

        <div className="contact-grid">
          <a
            href="https://t.me/haben_etsay1223"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaTelegramPlane className="contact-icon" />
            <h3>Telegram</h3>
            <p>haben etsay</p>
          </a>

          <a href="mailto:etsayhaben@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>etsayhaben@gmail.com</p>
          </a>

          <a
            href="https://web.facebook.com/haben.etsay.7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaFacebook className="contact-icon" />
            <h3>Facebook</h3>
          </a>

          <a href="tel:+251933232230" className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+251 933 23 22 30</p>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <Typography variant="body2" align="center" className="footer-text">
          © {new Date().getFullYear()} Haben Etsay Weldeslase. All rights
          reserved.
        </Typography>
      </div>
    </section>
  );
};

export default ContactMe;
