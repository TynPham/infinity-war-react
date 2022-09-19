import React, { useEffect, useState } from "react";
import "./Inicio.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { listNumber, mainData } from "../../data/datas";
import InicioItem from "../inicio-item/InicioItem";
import { handleScrollNext, handleScroll } from "../../utils/util";
import Portal from "../Portal";

function Inicio(props) {
  const [indexActive, setIndexActive] = useState(0);
  useEffect(() => {
    handleScroll(0);
  }, []);

  return (
    <>
      <div className="main">
        {mainData.map((item, index) => (
          <div className="main-item" key={index}>
            <InicioItem
              item={item}
              index={index}
              handleScrollNext={handleScrollNext}
              setIndex={setIndexActive}
            />
          </div>
        ))}
      </div>
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
              onClick={() => {
                handleScroll(item.number);
                setIndexActive(item.number);
              }}
              className={`rightsidebar__number-item ${
                index === indexActive ? "active" : ""
              }`}
            >
              {item.display}
            </span>
          ))}
        </div>
      </Portal>
    </>
  );
}

export default Inicio;
