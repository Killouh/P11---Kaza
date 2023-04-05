import React, { useState, useRef } from "react";
import ChevronLocation from "./ChevronLocation";
import "./AccordionLocation.css";

export default function AccordionLocation(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordionlocation_icon");

  const content = useRef(null);

  function toggleAccordionLocation() {
    let newActive = "";
    let newHeight = "0px";
    let newRotate = "";
  
    if (setActive === "") {
      newActive = "active";
      newHeight = `${content.current.scrollHeight}px`;
      newRotate = "accordionlocation_icon rotate";
    }
  
    setActiveState(newActive);
    setHeightState(newHeight);
    setRotateState(newRotate);

    if (setActive === "active") {
      setActiveState("");
      setHeightState("0px");
      setRotateState("accordionlocation_icon");
    }
  }

  return (
    <div className="accordionlocation_section">
      <button className={`accordionlocation ${setActive}`} onClick={toggleAccordionLocation}>
        <p className="accordionlocation_title">{props.title}</p>
        <ChevronLocation className={`${setRotate}`} width={10} fill={"white"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}`}}
        className="accordionlocation_content"
      >
        <div><div className="accordionlocation_text">{props.content}</div></div>
      </div>
    </div>
  );
}
