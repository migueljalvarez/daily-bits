import React from "react";
import Routers from "../routers/Routers";
import GlobalStyle from "../styles/styleGlobals";
// import "../css/styles.css";

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      {/* <h1>
        Comienza a crear tus components y dejalos por separados, luego hacemos
        la integracion
      </h1>
      <p>
        Por ahora dejare un sistema de enrutamiento para mostrar cada componente
      </p> */}
      <Routers />
    </div>
  );
};

export default App;
