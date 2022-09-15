import React, { useEffect, useState } from "react";
import "./Inicio.scss";
import Portal from "../Portal";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { listNumber, mainData } from "../../data/datas";
import InicioItem from "../inicio-item/InicioItem";

function Main(props) {
  const [indexActive, setIndexActive] = useState(0);
  const handleIndexActive = (result) => {
    window.scrollTo({
      top: result * window.innerHeight,
      behavior: "smooth",
    });
    setIndexActive(result);
  };
  const handleScrollTop = (result) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIndexActive(0);
  };
  const handleScrollNext = (result) => {
    window.scrollTo({
      top: result * window.innerHeight,
      behavior: "smooth",
    });
    setIndexActive(result);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="main">
      {mainData.map((item, index) => (
        <div className="main-item" key={index}>
          <InicioItem
            item={item}
            index={index}
            handleScrollTop={handleScrollTop}
            handleScrollNext={handleScrollNext}
          />
        </div>
      ))}

      <Portal containerClass={"leftsidebar"}>
        <div className="leftsidebar__compartir">COMPARTIR</div>
        <button className="leftsidebar__button leftsidebar__button-left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="leftsidebar__button leftsidebar__button-right"
          style={{
            backgroundColor: `${
              indexActive % 2 === 0 ? "red" : "rgb(73, 73, 226)"
            }`,
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Portal>

      <Portal containerClass={"rightsidebar"}>
        <div className="rightsidebar__vermas">VER MAS</div>
        <div className="rightsidebar__number">
          {listNumber.map((item, index) => (
            <span
              key={index}
              onClick={() => handleIndexActive(item.number)}
              className={`rightsidebar__number-item ${
                index === indexActive ? "active" : ""
              }`}
            >
              {item.display}
            </span>
          ))}
        </div>
      </Portal>
    </div>
  );
}

export default Main;
