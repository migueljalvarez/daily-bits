import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {
    DivAuth,
    Header,
    InputSubmit,
    Logo,
    Form,
    Label,
    DivLink,
    Input,
    DivFile,
    InputFile,
    TextFile,
    DivForm
} from '../styles/styleAuth';
import Notification from "./Notification";

const Register = () => {
    const history = useHistory();
    const [form, handleChange, handleFileChange, handleClickFile, reset] = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        imageUrl: ""
    });

    const{name, lastname, email, password, imageUrl} = form;

    const [showNotification, setShowNotification] = useState(false);
    const [notify, setNotify] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        register();
    };

    const register = async () => {
        try {
            const url = 'https://daily-bits-fake-api.herokuapp.com/signup';
            const resultado = await axios.post(url, form);

            if (resultado.status === 201) {
                history.push("/auth/login");
            }

        } catch (error) {

            setNotify({
                title: "Ha ocurrido un error. Intentalo de nuevo",
                type: "failed",
                buttom: "Continuar",
            });
            setShowNotification(!showNotification);

        }
    };

    const handleContinue = () => {
        setShowNotification(!showNotification);
    };

    return (
        <DivAuth>
            <Header>
                <Logo src="../assets/svg/logo.svg" alt="Logo" />
                <h1>Registrate</h1>
            </Header>
            <DivForm>
            <Form action="" onSubmit={handleSubmit}>
                <Label htmlFor="nombre">
                    Nombre
                    <Input
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingresa tu nombre" />
                </Label>

                <Label htmlFor="apellido">
                    Apellido
                    <Input
                        value={lastname}
                        onChange={handleChange}
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Ingresa tu apellido" />
                </Label>

                <DivFile>
                    <input
                        type="file"
                        name={imageUrl}
                        id="fileSelector"
                        onChange={handleFileChange}
                        style = {{display: 'none'}}
                    />
                    <InputFile onClick={ handleClickFile} type="button" value="Imagen de Perfil" />
                    <TextFile type="text" name="image" id="image" readOnly />
                </DivFile>

                <Label htmlFor="inputEmail">
                    Correo electrónico
                    <Input
                        value={email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Ingrese su correo electrónico" />
                </Label>

                <Label htmlFor="inputPassword">
                    Contraseña
                    <Input
                        value={password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="inputPassword"
                        placeholder="Ingresa una contraseña" />
                </Label>





                <InputSubmit type="submit" value="Registrarme" />
            </Form>
            </DivForm>
            <DivLink>
                <p>¿Ya tienes una cuenta? <Link style={{ color: "#26b67d" }} to="/auth/login">Inicia sesión</Link></p>
            </DivLink>

            <Notification
                notification={notify}
                isVisible={showNotification}
                handleContinue={() => handleContinue()}
            />

        </DivAuth>
    );

};

export default Register;
