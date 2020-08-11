import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
const Modal = (props) => {
  const modalRoot = document.getElementById("root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
  });

  useEffect(() => {
    return () => modalRoot.removeChild(el);
  });

  const [open, setOpen] = useState(props.show);
  const handleClose = () => {
    setOpen(!open);
  };

  const KeyDown = (event) => {
    console.log("pressed");

    if (event.keyCode === 27) {
      handleClose();
    }
  };

  var modal = useRef(null);

  const onClickOutside = (event) => {
    if (modal.current && modal.current.contains(event.target)) return;
    handleClose();
  };

  const modalStructure = (
    <div onKeyDown={(e) => KeyDown(e)} onClick={onClickOutside}>
      {open ? (
        <div className="cover" >
          <div className="modal-area" ref={modal}>
            <div className="modal-content">
              {props.modalContent}
              <button className="primary" onClick={handleClose}>
                Close Modal
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <button className="primary" onClick={handleClose}>
        Open Modal
      </button>
    </div>
  );

  return createPortal(modalStructure, document.body);
};

export default Modal;
