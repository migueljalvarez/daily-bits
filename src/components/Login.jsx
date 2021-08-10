import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { DivAuth, Header, Logo, Button, Form, Label, DivLink, Input } from '../styles/styleAuth';

const Login = () => {

    const [data, setData] = useState({
        form: {
            email: "",
            password: ""
        }}
    )
    
    const handleChange = e =>{
        setData({
            form: {
            ...data.form,
            [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const iniciarSesion = (e) =>{
        
    }

    return (
        <DivAuth>
            <Header>
                <Logo src="../assets/svg/logo.svg" alt="Logo" />
                <h1>Iniciar sesión</h1>
            </Header>
            <Form action="" onSubmit={handleSubmit}>
                <Label htmlFor="inputEmail">
                    Correo electrónico
                    <Input onChange={handleChange} type="email" name="email" id="inputEmail" placeholder="Ingrese su correo electrónico" />
                </Label>

                <Label htmlFor="inputPassword">
                    Contraseña
                    <Input onChange={handleChange} type="password" name="password" id="inputPassword" placeholder="Ingrese su contraseña" />
                </Label>

                <Button type="submit"
                onClick={iniciarSesion}>
                Iniciar sesión
                </Button>
            </Form>

            <DivLink>
                <Link to="" style={{color: "#26b67d" }}>¿Olvidaste tu contraseña?</Link><br /><br />
                <p>¿No tienes una cuenta? <Link to="/register" style={{color: "#26b67d" }}>Registrate</Link></p>
            </DivLink>

        </DivAuth>
    );

};

export default Login;