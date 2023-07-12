import { useEffect, useState } from "react";
import SnakePiece from "./SnakePiece";
import "./snakecursor.css";

function SnakeCursor() {
  const colors: { r: number; g: number; b: number }[] = [];
  for (let i = 0; i < 140; i++) {
    const initial = { r: 231, g: 97, b: 97 };
    colors.push({
      r: initial.r - i * 1,
      g: initial.g + i * 1,
      b: initial.b + i * 1,
    });
  }
  console.log(colors);

  const snakes = colors.map((item) => `rgb(${item.r},${item.g},${item.b})`);
  return (
    <div className="cursor">
      {snakes.map((snake, index) => {
        return <SnakePiece color={snake} delay={10 * index} zIndex={-index} />;
      })}
    </div>
  );
}

export default SnakeCursor;
