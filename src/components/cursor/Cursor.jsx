import React, { useState, useEffect, useRef } from "react";
import style from "./Cursor.module.scss";

function Cursor() {
  const [instantPosition, setInstantPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const smoothCursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleInstantMove = (e) => {
      setInstantPosition({ x: e.clientX, y: e.clientY });
    };

    const handleSmoothMove = (e) => {
      smoothCursorPosition.current = { x: e.clientX, y: e.clientY };
    };

    const smoothMoveInterval = setInterval(() => {
      setSmoothPosition(smoothCursorPosition.current);
    }, 1000 / 15); // 60 FPS

    window.addEventListener("mousemove", handleInstantMove);
    window.addEventListener("mousemove", handleSmoothMove);

    return () => {
      window.removeEventListener("mousemove", handleInstantMove);
      window.removeEventListener("mousemove", handleSmoothMove);
      clearInterval(smoothMoveInterval);
    };
  }, []);

  return (
    <div className={style.cursor}>
      <div
        className={style.dot}
        style={{ left: instantPosition.x, top: instantPosition.y }}
      ></div>
      <div
        className={style.outline}
        style={{ left: smoothPosition.x, top: smoothPosition.y }}
      ></div>
    </div>
  );
}

export default Cursor;
