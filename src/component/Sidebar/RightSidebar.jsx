import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidebar.scss";
import { memo } from "react";

function RightSidebar(props) {
  return (
    <div className="rightsidebar">
      <div className="rightsidebar__menu">
        <FontAwesomeIcon className="rightsidebar__menu-icon" icon={faBars} />
      </div>

      <div className="rightsidebar__esp">ESP</div>
    </div>
  );
}

export default memo(RightSidebar);
