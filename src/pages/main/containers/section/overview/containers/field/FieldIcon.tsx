import React, { Fragment, useEffect, useState } from "react";

import { PLAYERS_DATA } from "@/constants/field";
import { getBoundedValue, getRandomPoint } from "@/utils/number";

const FieldIcon = () => {
  const [position, setPosition] = useState(PLAYERS_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((current) =>
        current.map((position) => {
          const player = PLAYERS_DATA.find((item) => item.id === position.id);

          if (!player) return position;

          const offset = getRandomPoint(player.range);

          return {
            ...position,
            x: getBoundedValue(player.x + offset.x, 10, 410),
            y: getBoundedValue(player.y + offset.y, 10, 290),
          };
        }),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="420"
      height="300"
      viewBox="-12 -12 444 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="0"
        width="420"
        height="300"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <line
        x1="210"
        y1="0"
        x2="210"
        y2="300"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <circle cx="210" cy="150" r="40" stroke="#5C5C5C" strokeWidth="2" />
      <circle cx="210" cy="150" r="3" fill="#5C5C5C" />
      <rect
        x="0"
        y="75"
        width="70"
        height="150"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <rect
        x="0"
        y="110"
        width="22"
        height="80"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <rect
        x="350"
        y="75"
        width="70"
        height="150"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <rect
        x="398"
        y="110"
        width="22"
        height="80"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <path
        d="M70 120 A30 30 0 0 1 70 180"
        stroke="#5C5C5C"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M350 120 A30 30 0 0 0 350 180"
        stroke="#5C5C5C"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="-8"
        y="118"
        width="8"
        height="64"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <line x1="-8" y1="118" x2="0" y2="118" stroke="#5C5C5C" />
      <line x1="-8" y1="182" x2="0" y2="182" stroke="#5C5C5C" />
      <line x1="-8" y1="118" x2="-8" y2="182" stroke="#5C5C5C" />
      <rect
        x="420"
        y="118"
        width="8"
        height="64"
        stroke="#5C5C5C"
        strokeWidth="2"
      />
      <line x1="420" y1="118" x2="428" y2="118" stroke="#5C5C5C" />
      <line x1="420" y1="182" x2="428" y2="182" stroke="#5C5C5C" />
      <line x1="428" y1="118" x2="428" y2="182" stroke="#5C5C5C" />
      {position.map((position) => (
        <Fragment key={position.id}>
          <circle
            cx={position.x}
            cy={position.y}
            r={10}
            fill="#32AA60"
            style={{
              transition: "cx 1500ms ease-in-out, cy 1500ms ease-in-out",
            }}
          />
          <circle
            cx={position.x}
            cy={position.y}
            r={8}
            fill="#7CFF4E"
            style={{
              transition: "cx 1500ms ease-in-out, cy 1500ms ease-in-out",
            }}
          />
        </Fragment>
      ))}
    </svg>
  );
};

export default FieldIcon;
