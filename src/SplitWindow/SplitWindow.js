import React,{useRef,useEffect,useState,createRef} from "react";
import "./SplitWindow.scss";

export default function SplitWindow(props) {
  const topRef = createRef()
  const mainWindow = createRef()

  const [dragPosition,setDragPosition]=useState();

  useEffect(() => {
      if(topRef){
          console.log(topRef.current.clientHeight)
      }
     
  })

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  const onMouseDown=()=>{
      console.log("down")
      
  }
  const onMouseUp=()=>{
      console.log("up")
  }
  const onMouseMove=()=>{
    console.log("move")
}

  return (
    <div class="split-window" ref={mainWindow}>
      <div class="top-window" ref={topRef} >{props.topWindow}</div>
      <div className="separator" onMouseDown={onMouseDown}></div>
      <div class="bottom-window">{props.bottomWindow}</div>
    </div>
  );
}
