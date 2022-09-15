import React, { useState } from "react";
import "./Cast.scss";
import bg from "../../assets/images/captain-bg.jpg";
import poster from "../../assets/images/captain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Portal from "../Portal";
import { listCast, listBgCast } from "../../data/datas";
import parse from "html-react-parser";

function Cast(props) {
  const [indexActiveCast, setIndexActiveCast] = useState(0);

  return (
    <>
      <div className="cast">
        {listBgCast.map((item, index) => (
          <div className="cast__item" key={index}>
            <div
              className="cast__bg"
              style={{
                backgroundImage: `url(${item.bg})`,
              }}
            ></div>
            <div className="cast__poster">
              <img src={item.poster} alt="poster" />
            </div>
            <div className="cast__info">
              <h3 className="name">{item.name}</h3>
              <div className="bar"></div>
              <div className="content">{parse(item.content)}</div>

              <div className="ver-mas">
                <span>ver mas</span>
                <FontAwesomeIcon className="icon1" icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <button className="cast__downbtn">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        ))}
      </div>

      <ul className="cast__listcast">
        <div className="cast__bar"></div>
        {listCast.map((item, index) => (
          <li
            key={index}
            className={`cast-item ${index === indexActiveCast ? "active" : ""}`}
          >
            <img src={item.img} alt="imgs" />
            <div className="title">{item.name}</div>
          </li>
        ))}
      </ul>

      <Portal containerClass={"rightsidebar"}>
        <div className="infomation">
          <button className="active">portada</button>
          <button>historia</button>
          <button>poster</button>
          <button>diseno</button>
        </div>
      </Portal>

      <Portal containerClass={"leftsidebar"}>
        <div className="scroll">
          <button className="up">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button className="txt">scroll</button>
          <button className="down">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </Portal>
    </>
  );
}

export default Cast;
