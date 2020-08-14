import React, { useRef, useEffect, useState, createRef } from "react";
import "./SplitWindow.scss";

export default function SplitWindow(props) {
  const topRef = createRef();
  const leftRef = createRef();

  const mainWindow = createRef();
  const separatorYPosition = React.useRef(null);
  const separatorXPosition = React.useRef(null);

  const [topHeight, setTopHeight] = useState(null);
  const [leftWidth, setLeftWidth] = useState(null);

  useEffect(() => {
    if (!topHeight && props.orientation === "horizontal") {
      setTopHeight(topRef.current.clientHeight);
      topRef.current.style.flex = "none";
      return;
    }
    if (props.orientation === "horizontal") {
      topRef.current.style.height = `${topHeight}px`;
    }
  }, [topHeight]);

  useEffect(() => {
    if (!leftWidth && props.orientation === "vertical") {
      setLeftWidth(leftRef.current.clientWidth);
      leftRef.current.style.flex = "none";
      return;
    }
    leftRef.current.style.height = `${leftWidth}px`;
  }, [leftWidth]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  const onMouseDown = (e) => {
    props.orientation === "horizontal"
      ? (separatorYPosition.current = e.clientY)
      : (separatorXPosition.current = e.clientX);
  };
  const onMouseUp = (e) => {
    props.orientation === "horizontal"
      ? (separatorYPosition.current = null)
      : (separatorXPosition.current = null);
  };
  const onMouseMove = (e) => {
    if (!separatorYPosition.current || !separatorXPosition.current) {
      return;
    }
    if (props.orientation === "horizontal") {
      const newTopHeight = topHeight + e.clientY - separatorYPosition.current;
      separatorYPosition.current = e.clientY;
      const splitPaneHeight = mainWindow.current
        ? mainWindow.current.clientHeight
        : "";
      setTopHeight(newTopHeight);
    } else {
      const newLeftWidth = leftWidth + e.clientX - separatorXPosition.current;
      separatorXPosition.current = e.clientX;
      const splitPaneWidth = mainWindow.current
        ? mainWindow.current.clientWidth
        : "";
      setTopHeight(newLeftWidth);
    }
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
      <div
        className="top-window"
        ref={props.orientation === "vertical" ? leftRef : topRef}
      >
        {props.topWindow}
      </div>
      <div className="separator" onMouseDown={onMouseDown}></div>
      <div className="bottom-window">{props.bottomWindow}</div>
    </div>
  );
}
