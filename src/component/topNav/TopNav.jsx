import React from "react";
import "./Topnav.scss";
import { topNavbar } from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { memo } from "react";

function TopNav(props) {
  const location = useLocation();

  return (
    <div className="topnav">
      <ul className="topnav__nav">
        {topNavbar.map((item, index) => (
          <Link to={item.path} key={index}>
            <li
              className={`topnav__nav-item ${
                item.path === location.pathname ? "active" : ""
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default memo(TopNav);
