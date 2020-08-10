import React, { useEffect, useState } from "react";
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

  const modalStructure = (
    <>
      {open ? (
        <div className="cover">
          <div className="modal-area">
            <div className="modal-content">
              hi
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
    </>
  );

  return createPortal(modalStructure, document.body);
};

export default Modal;
