import React from "react";
import { AuthConsumer } from "../context/AuthContext";
import {
  Email,
  Image,
  User,
  ContainerInfo,
  Title,
  LogoutBtn,
} from "../styles/styleProfile";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div>
      <AuthConsumer>
        {({ user }) => (
          <main>
            <Title>Perfil</Title>
            <ContainerInfo>
              <Image
                src={user.imageUrl}
                alt="Miguel Alvarez"
              />
              <User>
                {user.name} {user.lastname}
              </User>
              <Email>{user.email}</Email>
              <br />
              <LogoutBtn type="button" value="Cerrar sesión" />
            </ContainerInfo>
          </main>
        )}
      </AuthConsumer>

      <Footer />
    </div>
  );
};

export default Profile;
