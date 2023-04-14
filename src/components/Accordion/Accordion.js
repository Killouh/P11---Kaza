import { useState, useRef } from "react";
import Chevron from "./Chevron.js";
import "./Accordion.css";

export default function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState(props.location ? "accordionlocation_icon" : "accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? (props.location ? "accordionlocation_icon" : "accordion__icon") : (props.location ? "accordionlocation_icon rotate" : "accordion__icon rotate")
    );
  }

  const rootClass = props.location ? "accordionlocation_section" : "accordion__section";
  const titleClass = props.location ? "accordionlocation_title" : "accordion__title";
  const icon = props.location ? <Chevron className={`${setRotate}`} width={10} fill={"white"} /> : <Chevron className={`${setRotate}`} width={10} fill={"white"} />;
  const textClass = props.location ? "accordionlocation_text" : "accordion__text";

  return (
    <div className={rootClass}>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className={titleClass}>{props.title}</p>
        {icon}
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={props.location ? "accordionlocation_content" : "accordion__content"}
      >
        <div className={textClass}>{props.content}</div>
      </div>
    </div>
  );
}