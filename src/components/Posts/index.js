import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../redux/userSlice";
import {
  Container,
  ContainerPostDate,
  ContainerPostText,
  ContainerPostUser,
  Divider,
  HeaderPost,
  IconContainer,
  InformationContainer,
  Post,
  PostContainer,
  PostDate,
  PostText,
  PostTitle,
  PostTitleContainer,
  PostUser,
} from "./styles";

//.trim().split(' ', 1)
const Posts = ({ postData }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  

  return (
    <Container>
      <PostContainer>
        <Post>
          <HeaderPost>
          <ScrollView>
            <PostTitleContainer>
              <PostTitle>{postData.titlePost}</PostTitle>
            </PostTitleContainer>
            </ScrollView>
            <IconContainer>
              <AntDesign
                onPress={() => {
                  handleRemove(postData.id);
                }}
                name="close"
                size={25} 
                color="#fff"
              />
            </IconContainer>
          </HeaderPost>
          <Divider/>
          <ContainerPostText>
            <ScrollView>
              <PostText>{postData.textPost}</PostText>
            </ScrollView>
          </ContainerPostText>
          <Divider />
          <InformationContainer>
            <ContainerPostDate>
              <AntDesign name="calendar" size={24} color="#fff" />
              <PostDate>{postData.datePost}</PostDate>
            </ContainerPostDate>
            <ContainerPostUser>
              <PostUser>{postData.namePost.split(' ', 1)}</PostUser>
              <AntDesign name="user" size={24} color="#fff" />
            </ContainerPostUser>
          </InformationContainer>
        </Post>
      </PostContainer>
    </Container>
  );
};

export default Posts;
