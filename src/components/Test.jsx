import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const Test = () => {
  const history = useHistory();
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setTimeout(() => {
        history.push("/auth/login");
      }, 6000);
    }
    return () => {
      unmounted = true;
    };
  }, []);
  return (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
};

export default Test;
