import React, { useRef, useEffect, useState, createRef } from "react";
import "./SplitWindow.scss";

export default function SplitWindow(props) {
  const topRef = createRef();
  const mainWindow = createRef();
  const separatorYPosition = React.useRef(null);
  const [topHeight, setTopHeight] = useState(null);

  useEffect(() => {
    if (!topHeight) {
      setTopHeight(topRef.current.clientHeight);
      topRef.current.style.flex = "none";
      return;
    }

    topRef.current.style.height = `${topHeight}px`;
  }, [topHeight]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  const onMouseDown = (e) => {
    console.log("down");
    separatorYPosition.current = e.clientY;
  };
  const onMouseUp = (e) => {
    separatorYPosition.current = null;
    console.log("up");
  };
  const onMouseMove = (e) => {
    if (!separatorYPosition.current) {
      return;
    }
    const newTopHeight = topHeight + e.clientY - separatorYPosition.current;
    separatorYPosition.current = e.clientY;
    const splitPaneHeight = mainWindow.current
      ? mainWindow.current.clientHeight
      : "";
    setTopHeight(newTopHeight);
  };

  return (
    <div
      className={
        props.orientation === "vertical"
          ? "split-window-vertical"
          : "split-window-horizontal"
      }
      ref={mainWindow}
    >
      <div className="top-window" ref={topRef}>
        {props.topWindow}
      </div>
      <div className="separator" onMouseDown={onMouseDown}></div>
      <div className="bottom-window">{props.bottomWindow}</div>
    </div>
  );
}
