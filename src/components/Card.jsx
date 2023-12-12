import React, { useState } from "react";

export function Card({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log('clicked')
    setIsClicked(!isClicked);
  }

  return (
    <div className={`card ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
      {children}
    </div>
  );
}
