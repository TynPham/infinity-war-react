import React from "react";
import "./Listcast.scss";
import { listCast } from "../../data/datas";

function ListCast({ indexActiveCast }) {
  return (
    <ul className="listcast">
      {listCast.map((item, index) => (
        <li
          key={index}
          className={`listcast__item ${
            index === indexActiveCast ? "active" : ""
          }`}
        >
          <div className="cast__bar"></div>
          <img src={item.img} alt="imgs" />
          <div className="title">{item.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default ListCast;
