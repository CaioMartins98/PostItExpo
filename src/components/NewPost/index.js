import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  ButtonAddField,
  ButtonCancelField,
  ButtonContainer,
  ButtonField,
  ButtonText,
  Container,
  ContainerNewPost,
  ContainerScroll,
  DescriptionLabel,
  ErrorField,
  ErrorFieldContainer,
  InputDescriptionField,
  InputTitleField,
  NewPostTitle,
  NewPostTitleContainer,
  TitleLabel,
} from "./styles";
import * as Font from "expo-font";

const NewPost = ({
  handleChangeTitle,
  handleChangeText,
  handleSubmit,
  handleCancel,
  errorTitle,
  errorText,
}) => {

  const [loaded] = Font.useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <ContainerNewPost>
        <ScrollView style={{ height: "100%" }}>
          <NewPostTitleContainer>
            <NewPostTitle style={{ fontFamily: "Poppins-Regular" }}>Novo post</NewPostTitle>
          </NewPostTitleContainer>
          <TitleLabel style={{ fontFamily: "Poppins-Regular" }}>Título</TitleLabel>

          <InputTitleField onChangeText={handleChangeTitle} />
          <DescriptionLabel style={{ fontFamily: "Poppins-Regular" }}>Descrição</DescriptionLabel>
          {/* <ErrorFieldContainer>
            <ErrorField>{errorText}</ErrorField>
          </ErrorFieldContainer> */}
          <InputDescriptionField
            multiline={true}
            numberOfLines={4}
            onChangeText={handleChangeText}
          />
        </ScrollView>
      </ContainerNewPost>
      <ButtonContainer>
        <ButtonCancelField onPress={handleCancel}>
          <ButtonText style={{ fontFamily: "Poppins-Regular" }}>Cancelar</ButtonText>
        </ButtonCancelField>
        <ButtonAddField onPress={handleSubmit}>
          <ButtonText style={{ fontFamily: "Poppins-Regular" }}>Adicionar</ButtonText>
        </ButtonAddField>
      </ButtonContainer>
      {errorTitle ? (
        <ErrorFieldContainer>
          <ErrorField style={{ fontFamily: "Poppins-Regular" }}>{errorTitle}</ErrorField>
        </ErrorFieldContainer>
      ) : null}
    </Container>
  );
};

export default NewPost;
