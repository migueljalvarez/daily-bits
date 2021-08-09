import React, {useState} from 'react'
import { DivLogin, Header, Logo, Form, Label, DivLink, Input, ALink } from '../styles/styleLogin';
import ButtonLogin from '../components/ButtonLogin';

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

    return (
        <DivLogin>
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

                <ButtonLogin credencial={data} />
            </Form>

            <DivLink>
                <ALink href="/">¿Olvidaste tu contraseña?</ALink><br /><br />
                <p>¿No tienes una cuenta? <ALink href="/">Registrate</ALink></p>
            </DivLink>

        </DivLogin>
    );

};

export default Login;