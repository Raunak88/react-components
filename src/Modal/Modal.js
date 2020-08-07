import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal(props) {
  const modalRoot = document.getElementById("modal");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
  });

  useEffect(() => {
    return () => modalRoot.removeChild(el);
  });

  const modalStructure = (
    <div className="modal">
      <div
        style={{ height: "100px", width: "200px", background: "white" }}
      >{props.children}</div>
    </div>
  );
  return createPortal(modalStructure, el);
}
 