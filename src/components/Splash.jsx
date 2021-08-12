import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Splash = () => {
  const history = useHistory();
  

  const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-purple);
    height: 100vh;
    width: 100%;
  `

useEffect(() => {
  const timeout = setTimeout(() => {
    history.push('/home');
  }, 5000);
}, []);

  return (
    <DivImage className="SplashScreen">
      <img src='../assets/svg/splashScreen.svg' className="Splash-logo" alt="logo" />
    </DivImage>
  );

}

export default Splash;
