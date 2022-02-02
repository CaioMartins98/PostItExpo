import React from 'react';
import LottieView from 'lottie-react-native';
import { AnimationContainer, Container, Description } from './styles';
import EmptyAnimation from '../../assets/EmptyAnimation.json';
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
          source={EmptyAnimation}
          autoPlay
          resizeMode="cover"
          loop
            style={{}}
        />
      </AnimationContainer>
      <Description style={{ fontFamily: "Poppins-Regular" }}>
        Sua plataforma de posts está vazia!
      </Description>
    </Container>
  );
};

export default EmptyPost;
