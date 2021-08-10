import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { DivAuth, Header, Button, Logo, Form, Label, DivLink, Input, ALink } from '../styles/styleAuth';

const Register = () => {

    const [data, setData] = useState({
        form: {
            nombre: "",
            apellido:"",
            email: "",
            password: "",
            verificar:""
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
        const {form} = data;

        if(form.verificar === form.password){
        }
        

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
                    <Input type="text" name="nombre" id="nombre" placeholder="Ingresa tu" />
                </Label>
                <Label htmlFor="apellido">
                    Apellido
                    <Input type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido" />
                </Label>
                
                <Label htmlFor="inputEmail">
                    Correo electrónico
                    <Input onChange={handleChange} type="email" name="email" id="inputEmail" placeholder="Ingrese su correo electrónico" />
                </Label>

                <Label htmlFor="inputPassword">
                    Contraseña
                    <Input onChange={handleChange} type="password" name="password" id="inputPassword" placeholder="Ingresa una contraseña" />
                </Label>
                <Label htmlFor="inputPasswordVerific">
                    Verificar contraseña
                    <Input onChange={handleChange} type="password" name="verificar" id="inputPasswordVerific" placeholder="Verificar contraseña" />
                </Label>

                <Button type="submit"
                    onClick={iniciarSesion}>
                    Registrarme
                </Button>
            </Form>

            <DivLink>
                <p>¿Ya tienes una cuenta? <Link style={{color: "#26b67d" }} to="/login">Inicia sesión</Link></p>
            </DivLink>

        </DivAuth>
    );

};

export default Register;
