import React from 'react'
import { Email, Image, User, ContainerInfo, Title, LogoutBtn } from '../styles/styleProfile'

const Profile = () => {
    return (
        <main>
            <Title>Perfil</Title>
            <ContainerInfo>
                <Image src="https://avatars.githubusercontent.com/u/18540272?v=4" alt="Miguel Alvarez" />
                <User>Miguel Alvarez</User>
                <Email>ing.migueljalvarez@gmai.com</Email>
                <br />
                <LogoutBtn type="button" value="Cerrar sesión" />

            </ContainerInfo>
        </main>
    )
}

export default Profile
