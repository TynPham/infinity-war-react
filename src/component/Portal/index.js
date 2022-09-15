import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function Portal({ children, containerClass }) {
  const [wrapper, setWrapper] = useState();

  useEffect(() => {
    let container = document.querySelector(`.${containerClass}`);
    if (!container) {
      container = document.createElement(`div`);
      container.className = containerClass;
      document.body.appendChild(container);
    }
    setWrapper(container);

    return () => {
      if (!containerClass) {
        document.body.removeChild(container);
      }
    };
  }, [containerClass]);
  if (!wrapper) return null;
  return ReactDOM.createPortal(children, wrapper);
}

export default Portal;
