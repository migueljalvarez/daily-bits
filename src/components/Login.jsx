import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  DivAuth,
  Header,
  Logo,
  Button,
  Form,
  Label,
  DivLink,
  Input,
} from "../styles/styleAuth";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const { dispatch } = React.useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login()
      .then((data) => {
        dispatch({
          type: "login",
          payload: {
            token: data.accessToken,
          },
        });
        setIsLogged(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const login = async () => {
    try {
      const url = `http://localhost:5000/api/login`;
      const { data } = await axios.post(url, credentials);
      return data;
    } catch (error) {
      return error;
    }
  };

  return (
    <DivAuth>
      <Header>
        <Logo src="../assets/svg/logo.svg" alt="Logo" />
        <h1>Iniciar sesión</h1>
      </Header>
      <Form action="" onSubmit={handleSubmit}>
        <Label htmlFor="inputEmail">
          Correo electrónico
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            id="inputEmail"
            placeholder="Ingrese su correo electrónico"
          />
        </Label>

        <Label htmlFor="inputPassword">
          Contraseña
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            id="inputPassword"
            placeholder="Ingrese su contraseña"
          />
        </Label>

        <Button type="submit">Iniciar sesión</Button>
      </Form>

      <DivLink>
        <Link to="" style={{ color: "#26b67d" }}>
          ¿Olvidaste tu contraseña?
        </Link>
        <br />
        <br />
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/register" style={{ color: "#26b67d" }}>
            Registrate
          </Link>
        </p>
      </DivLink>
    </DivAuth>
  );
};

export default Login;
