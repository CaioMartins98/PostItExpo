import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  ButtonLogin,
  ButtonText,
  Container,
  ContainerLogin,
  ContainerWelcome,
  Description,
  InputField,
  LabelInput,
  Welcome,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";
import { View } from "react-native";
import { Snackbar } from "react-native-paper";
import * as Font from "expo-font";
const Login = () => {
 
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({
    isVisible: false,
    message: "",
  });

  const [loaded] = Font.useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleChange = (event) => {
    setInputValue(event);
    setError({ isVisible: false });
  };

  const handleSubmit = () => {
    const nameUser = inputValue;
    dispatch(changeUser(nameUser));
    validate();
  };

  const validate = () => {
    const name = inputValue;

    if (name === "") {
      setError({ isVisible: true, message: "Campo de usuário obrigatório!" });
    } else {
      navigation.navigate("Dashboard");
    }
  };
  
  return (
    <Container>
      <ContainerWelcome>
        <Welcome style={{ fontFamily: "Poppins-Regular" }}>Bem-vindo!</Welcome>
        <Description style={{ fontFamily: "Poppins-Regular" }}>
          Insira seu nome para entrar na plataforma !
        </Description>
      </ContainerWelcome>
      <ContainerLogin>
        <LabelInput style={{ fontFamily: "Poppins-Regular" }}>Nome</LabelInput>
        <InputField onChangeText={handleChange} />

        <ButtonLogin onPress={() => handleSubmit()}>
          <ButtonText style={{ fontFamily: "Poppins-Regular" }}>
            Entrar
          </ButtonText>
        </ButtonLogin>
      </ContainerLogin>
      {/* <ErrorFieldContainer> */}
      <Snackbar
        visible={error.isVisible}
        onDismiss={() =>
          setError({
            ...error,
            isVisible: false,
          })
        }
      >
        {error.message}
      </Snackbar>
      {/* </ErrorFieldContainer> */}
    </Container>
  );
};

export default Login;
