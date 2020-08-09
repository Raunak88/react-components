import React, { useEffect } from "react";
import{createPortal} from 'react-dom'
const Modal =  React.forwardRef((props, ref) => {
  const modalRoot = document.getElementById("modal");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    ref.current.focus()
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
})


export default Modal;