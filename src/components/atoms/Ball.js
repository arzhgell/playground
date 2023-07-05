import React, { useEffect, useRef, useState } from "react";

export function Ball() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [drag, setDrag] = useState(false);
  const [speed, setSpeed] = useState(0);

  const getPosition = () => {
    return `left-[${x}px] top-[${y}px]`.toString();
  };

  function getDistance(x1, y1, x2, y2) {
    console.log(x1, y1, x2, y2);
    const y = x2 - x1;
    const x = y2 - y1;

    return Math.sqrt(x * x + y * y);
  }

  const getCursorPosition = (event) => {
    if (event.clientX !== 0 || event.clientY !== 0) {
      setX(event.clientX);
      setY(event.clientY);
    }
  };

  const onDrag = (e) => {
    console.log(e);
    const initCoordinates = { x: e.clientX, y: e.clientY };

    setTimeout(function () {
      const newCoordinates = { x: e.clientX, y: e.clientY };
      const distance = getDistance(
        initCoordinates.x,
        initCoordinates.y,
        newCoordinates.x,
        newCoordinates.y
      );
      setSpeed(distance);
      getCursorPosition(e);
    }, 1000);
  };

  const onDragStart = (e) => {
    setDrag(true);
  };

  const onDragEnd = (e) => {
    setDrag(false);
  };

  useEffect(() => {}, [x, y]);

  return (
    <div
      id="ball"
      draggable="true"
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      className={`absolute h-16 w-16 cursor-pointer rounded-full bg-red-500 ${getPosition()}`}
    />
  );
}
