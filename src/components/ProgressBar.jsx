import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Progress = styled.div`
  position: relative;
  float: left;
  min-width: 0%;
  height: 100%;
  background: #2cb67d;
  border-radius: 25px;
`;
const Bar = styled.div`
  margin: 5px auto;
  padding: 0;
  width: 75%;
  height: 12px;
  overflow: hidden;
  background: #fff;
  border-radius: 25px;
`;

const ProgressBar = ({ percent }) => {
  const [load, setLoad] = useState(0);
  useEffect(() => {
    setLoad(percent);
  }, [percent]);

  return (
    <>
      <Bar id="bar">
        <Progress id="progress" style={{width:`${load}%`}} />
      </Bar>
    </>
  );
};

export default ProgressBar;
