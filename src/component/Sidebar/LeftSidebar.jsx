import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { memo } from "react";

function LeftSidebar(props) {
  return (
    <div className="leftsidebar">
      <div className="leftsidebar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="leftsidebar__social">
        <a href="/" className="leftsidebar__social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="/" className="leftsidebar__social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/" className="leftsidebar__social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default memo(LeftSidebar);
