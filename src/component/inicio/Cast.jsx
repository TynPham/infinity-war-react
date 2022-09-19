import React, { useState, useEffect } from "react";
import "./Inicio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Portal from "../Portal";
import { listBgCast } from "../../data/datas";
import CastItem from "../inicio-item/CastItem";
import {
  handleScrollNext,
  handleScrollPrev,
  handleScroll,
} from "../../utils/util";
import ListCast from "../cast/ListCast";

function Cast(props) {
  const [indexActiveCast, setIndexActiveCast] = useState(0);

  useEffect(() => {
    handleScroll(0);
  }, []);

  return (
    <>
      <div className="main">
        {listBgCast.map((item, index) => (
          <div key={index} className="main-item">
            <CastItem
              item={item}
              index={index}
              handleScrollNext={handleScrollNext}
              setIndex={setIndexActiveCast}
              length={listBgCast.length - 1}
            />
          </div>
        ))}
      </div>

      <ListCast indexActiveCast={indexActiveCast} />

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
          <button
            className="up"
            onClick={() => {
              const result = handleScrollPrev(
                indexActiveCast,
                listBgCast.length - 1
              );
              setIndexActiveCast(result);
            }}
            // style={{
            //   backgroundColor: `${
            //     listCast[indexActiveCast].color ? "red" : "blue"
            //   }`,
            // }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button className="txt">scroll</button>
          <button
            className="down"
            onClick={() => {
              const result = handleScrollNext(
                indexActiveCast,
                listBgCast.length - 1
              );
              setIndexActiveCast(result);
            }}
            // style={{
            //   backgroundColor: `${
            //     listCast[indexActiveCast].color ? "red" : "blue"
            //   }`,
            // }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </Portal>
    </>
  );
}

export default Cast;
