import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { fileUpload } from '../helpers/fileUpload';
import {
    DivAuth,
    Header,
    Button,
    Logo,
    Form,
    Label,
    DivLink,
    Input
} from '../styles/styleAuth';

const Register = () => {

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        image: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register();
    };

    const register = async () => {
        try {
            const url = `http://localhost:5000/api/signup`;
            await axios.post(url, form);

        } catch (error) {
            return error;
        }
    };

    const handlePictureClick = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0];

        fileUpload(file).then(response =>{
            document.getElementById('image').value = response;

            setForm({
                ...form,
                image: response
            });
        }).catch(error =>{
            throw error;
        });
    }

    return (
        <DivAuth>
            <Header>
                <Logo src="../assets/svg/logo.svg" alt="Logo" />
                <h1>Registrate</h1>
            </Header>
            <Form action="" onSubmit={handleSubmit}>
                <Label htmlFor="nombre">
                    Nombre
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingresa tu nombre" />
                </Label>

                <Label htmlFor="apellido">
                    Apellido
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="lastaname"
                        id="lastname"
                        placeholder="Ingresa tu apellido" />
                </Label>

                <Label htmlFor="inputEmail">
                    Correo electrónico
                    <Input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Ingrese su correo electrónico" />
                </Label>

                <Label htmlFor="inputPassword">
                    Contraseña
                    <Input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="inputPassword"
                        placeholder="Ingresa una contraseña" />
                </Label>

                <Label htmlFor="fileSelector">
                    <Input
                        type="file"
                        name="file"
                        id="fileSelector"
                        onChange={handleFileChange} />
                    <button
                    onClick={() => handlePictureClick}>Imagen</button>
                    <input type="text" name="image" id="image" readOnly/>
                </Label>



                <Button type="submit">
                    Registrarme
                </Button>
            </Form>

            <DivLink>
                <p>¿Ya tienes una cuenta? <Link style={{ color: "#26b67d" }} to="/login">Inicia sesión</Link></p>
            </DivLink>

        </DivAuth>
    );

};

export default Register;
