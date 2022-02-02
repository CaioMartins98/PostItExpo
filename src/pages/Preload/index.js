import React, { useEffect, useState } from "react";
import { Button, View, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import { AnimationContainer, Container, DevBy, DevByContainer } from "./styles";
import AnimationPreload from "../../assets/PostAnimation.json";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
  }, []);
  
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <AnimationContainer>
        <LottieView
          source={AnimationPreload}
          resizeMode="contain"
          autoPlay={true}
          loop
        />
      </AnimationContainer>

      <ActivityIndicator color="#F5F5F5" size="small" />
      <DevByContainer>
        <DevBy style={{ fontFamily: "Poppins-Regular" }}>
          Developed by Caio Martins
        </DevBy>
      </DevByContainer>
    </Container>
  );
};

export default Preload;
