import { useEffect, useState } from "react";

function SnakePiece(props: PropsType) {
  const [co_ordinates, setCo_ordinates] = useState({ X: 0, Y: 0 });
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  useEffect(() => {
    const MoveHandler = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", MoveHandler);
    return () => {
      window.removeEventListener("mousemove", MoveHandler);
    };
  });
  useEffect(() => {
    setTimeout(() => {
      setCo_ordinates({ X: mouseX, Y: mouseY });
    }, props.delay);
  }, [mouseX, mouseY]);
  return (
    <div
      className="piece"
      style={{
        // backgroundColor: props.color,
        borderColor: props.color,
        // transitionDelay: `${props.delay}ms`,
        transform: `translate(${co_ordinates.X}px,${co_ordinates.Y}px)`,
        zIndex: props.zIndex,
      }}
    ></div>
  );
}

export default SnakePiece;

type PropsType = {
  color: string;
  delay: number;
  zIndex: number;
};
