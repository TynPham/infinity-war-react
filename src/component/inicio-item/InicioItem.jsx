import React from "react";
import "./InicioItem.scss";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function InicioItem({ item, index, handleScrollNext, setIndex }) {
  return (
    <div
      className="main-body"
      style={{
        backgroundImage: `url(${item.background})`,
      }}
    >
      <div className="main-body__content">
        <p className="main-body__content-title">{parse(item.title)}</p>
        <span className="main-body__content-subtitle">{item.subtitle}</span>
      </div>
      <Link to="/trailer" className="main-body__trailerbtn">
        ver trailer
      </Link>
      <Link to={"/trailer"} className="main-body__trailerbtn2"></Link>
      <button
        className="main-body__downbtn"
        onClick={() => {
          const result = handleScrollNext(index, 4);
          setIndex(result);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default InicioItem;
