import React, { useEffect } from "react";
import { Link, withRouter} from "react-router-dom";

const Example = () => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/questions/html" style={{ color: "#FFF" }}>
            Peguntas HTML
          </Link>
        </li>
        <li>
          <Link to="/questions/js" style={{ color: "#FFF" }}>
            Preguntas JavaScript{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Example;
