import React from 'react';
import LottieView from 'lottie-react-native';
import { AnimationContainer, Container, Description } from './styles';
import EmptyAnimation from '../../assets/PostEmpty.json';
import * as Font from "expo-font";

const EmptyPost = () => {

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
          source={require('../../assets/PostEmpty.json')}
          autoPlay
          resizeMode="cover"
          loop
            
        />
      </AnimationContainer>
      <Description style={{ fontFamily: "Poppins-Regular" }}>
        Sua plataforma de posts está vazia!
      </Description>
    </Container>
  );
};

export default EmptyPost;
