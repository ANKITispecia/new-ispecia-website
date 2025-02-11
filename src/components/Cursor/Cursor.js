'use client'
import React, { useEffect, useRef } from "react";
import "./Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 15, // Adjusting position
        y: e.clientY - 15,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default Cursor;
