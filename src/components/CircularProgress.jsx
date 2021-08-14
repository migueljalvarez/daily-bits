import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularProgress = (props) => {
  const { children, percentage } = props;
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div style={{ position: "absolute" }}>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: "#2abd80",
            trailColor: "#DDDDDD",
            rotation: 0.5,
            pathTransitionDuration: 2.5,
          })}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CircularProgress;
