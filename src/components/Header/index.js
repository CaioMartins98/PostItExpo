import React from "react";
import { Image, View } from "react-native";
import TitleApp from "../../assets/titleApp.png";
import { Container, It, Post, TitleContainer } from "./styles";
import * as Font from "expo-font";

const Header = () => {
  const [loaded] = Font.useFonts({
    "Pacifico-Regular": require("../../assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      {/* <Image source={TitleApp} width={'10px'} height={46}/> */}
      <TitleContainer>
        <Post style={{ fontFamily: "Pacifico-Regular" }}>Post</Post>
        <It style={{ fontFamily: "Pacifico-Regular" }}>It</It>
      </TitleContainer>
    </Container>
  );
};

export default Header;
