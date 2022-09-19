import React, { useRef } from "react";
import "./Trailer.scss";

function Trailer(props) {
  const iframeRef = useRef(null);
  return (
    <div
      className="video"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="video_title"></div>
      <iframe
        src={`https://www.youtube.com/embed/QwievZ1Tx-8`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
}

export default Trailer;
