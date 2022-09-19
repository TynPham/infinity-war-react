import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CastItem({ item, index, handleScrollNext, setIndex, length }) {
  return (
    <div
      className="main-body"
      style={{
        backgroundImage: `url(${item.bg})`,
      }}
    >
      <div className="main__poster">
        <img src={item.poster} alt="poster" />
      </div>
      <div className="main__info">
        <h3 className="name">{item.name}</h3>
        <div className="bar"></div>

        <div className="ver-mas">
          <span>ver mas</span>
          <FontAwesomeIcon className="icon1" icon={faChevronRight} />
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <button
        className="main-body__downbtn"
        onClick={() => {
          const result = handleScrollNext(index, length);
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

export default CastItem;
