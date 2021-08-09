import React from 'react'
import { Button } from '../styles/styleLogin'


export default function ButtonLogin({credencial}) {

    const {form} = credencial;

    const iniciarSesion = (e) =>{
        
    }

    return (
        <Button type="submit"
        onClick={iniciarSesion}>
            Iniciar sesión
        </Button>
    )
}
