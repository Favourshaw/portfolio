import React, { useLayoutEffect, useState } from "react";
import "./styles.css";
import Cursor from "react-cursor-follow";

const colors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee"
];

export default function Cursor() {
  const [i, setI] = useState(0);
  useLayoutEffect(() => {
    setTimeout(() => {
      if (i === colors.length) setI(0);
      else setI(i + 1);
    }, 1000);
  }, [i]);
  return (
    <div className="cursor">
      <Cursor hollow color={colors[i]} duration={0.8} size={45} />
    </div>
  );
}
