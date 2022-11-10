import React from "react";
import "./base.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar3 = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logoo">
            <a href="#" className="nav-link"></a>
            <i className="fa-solid fa-angles-left"></i>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/bendaifanas"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              <span className="link-text">Github Repo</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/anas-bendaif-8a4209190/"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span className="link-text">Linkdin Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1PMc9qdxSpq5wD1nUbcsA5L_os0PoXtHM/view?usp=share_link"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-id-card"></i>
              <span className="link-text">Download CV</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar3;
