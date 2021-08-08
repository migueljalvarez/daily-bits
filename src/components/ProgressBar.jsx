import React, { useEffect, useState } from "react";
import { Bar, Progress } from "../styles/styleProgressBar";

const ProgressBar = ({ percent }) => {
  const [load, setLoad] = useState(0);
  useEffect(() => {
    setLoad(percent);
  }, [percent]);

  return (
    <>
      <Bar id="bar">
        <Progress id="progress" style={{ width: `${load}%` }} />
      </Bar>
    </>
  );
};

export default ProgressBar;
