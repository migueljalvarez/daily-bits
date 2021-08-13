import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getUserInfo } from "../helpers/userInfo";
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
  let initialState = {
    name: "Jonh",
    lastname: "Snow",
    email: "jsnow@gamesofthrones.com",
    imageUrl: "../assets/svg/avatar.svg",
  };
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    let mount = false;
    if (!mount) {
      getUserInfo().then((data) => setUser(...data));
    }
    return () => {
      mount = true;
    };
  }, []);
  const handleClick = () => {
    dispatch({
      type: "logout",
      payload: {
        user: null, 
        token: null 
      }
    });
  };
  return (
    <div>
      <main>
        <Title>Perfil</Title>
        <ContainerInfo>
          <Image src={user?.imageUrl} alt={user?.name} />
          <User>
            {user?.name} {user?.lastname}
          </User>
          <Email>{user?.email}</Email>
          <br />
          <LogoutBtn
            type="button"
            onClick={handleClick}
            value="Cerrar sesión"
          />
        </ContainerInfo>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
