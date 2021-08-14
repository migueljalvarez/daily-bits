import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  DivAuth,
  Header,
  Logo,
  Form,
  Label,
  DivLink,
  Input,
  Separator,
  InputSubmit,
  ButtonGoogle,
  DivForm
} from "../styles/styleAuth";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Notification from "./Notification";

const Login = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notify, setNotify] = useState({});
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    setShowNotification(!showNotification);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login()
      .then((data) => {
        dispatch({
          type: "login",
          payload: {
            token: data.accessToken,
            user: data.user,
          },
        });
        history.push("/home");
      })
      .catch((error) => {
        setNotify({
          title: "Usuario o contraseña incorrectos",
          type: "failed",
          buttom: "Continuar",
        });
        setShowNotification(!showNotification);
      });
  };
  const login = async () => {
    const url = `https://daily-bits-fake-api.herokuapp.com/login`;
    const { data } = await axios.post(url, credentials);
    return data;
  };

  return (
    <DivAuth>
      <Header>
        <Logo src="../assets/svg/logo.svg" alt="Logo" />
        <h1>Iniciar sesión</h1>
      </Header>


      <DivForm>
        <ButtonGoogle>
          <img src="../assets/svg/google.svg" alt="google" />
          Continuar con Google</ButtonGoogle>
        <Separator />

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

          <InputSubmit type="submit" value="Inicias sesión" />
        </Form>
      </DivForm>

      <DivLink>
        <Link to="/auth/login" style={{ color: "var(--color-green)"}}>
          ¿Olvidaste tu contraseña?
        </Link>
        <br />
        <br />
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/auth/register" style={{ color: "var(--color-green)" }}>
            Registrate
          </Link>
        </p>
      </DivLink>
      <Notification
        notification={notify}
        isVisible={showNotification}
        handleContinue={() => handleContinue()}
      />
    </DivAuth>
  );
};

export default Login;
