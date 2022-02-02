
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
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
} from './styles';

const NewPost = ({
  handleChangeTitle,
  handleChangeText,
  handleSubmit,
  handleCancel,
  errorTitle,
  errorText
}) => {
  return (
    <Container>
      <ContainerNewPost>
        <ScrollView style={{ height: '100%' }}>
          <NewPostTitleContainer>
            <NewPostTitle>Novo post</NewPostTitle>
          </NewPostTitleContainer>
          <TitleLabel>Título</TitleLabel>
          
          <InputTitleField onChangeText={handleChangeTitle} />
          <DescriptionLabel>Descrição</DescriptionLabel>
          {/* <ErrorFieldContainer>
            <ErrorField>{errorText}</ErrorField>
          </ErrorFieldContainer> */}
          <InputDescriptionField
            multiline={true}
            numberOfLines={4}
            onChangeText={handleChangeText}
          />
          <ErrorFieldContainer>
            <ErrorField>{errorTitle}</ErrorField>
          </ErrorFieldContainer>
        </ScrollView>
      </ContainerNewPost>
      <ButtonContainer>
        <ButtonCancelField onPress={handleCancel}>
          <ButtonText>Cancelar</ButtonText>
        </ButtonCancelField>
        <ButtonAddField onPress={handleSubmit}>
          <ButtonText>Adicionar</ButtonText>
        </ButtonAddField>
      </ButtonContainer>
    </Container>
  );
};

export default NewPost;
