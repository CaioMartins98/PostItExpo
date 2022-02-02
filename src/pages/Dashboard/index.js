import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import EmptyPost from "../../components/EmptyPost";
import { ButtonContainer, ButtonField, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Posts from "../../components/Posts";
import NewPost from "../../components/NewPost";
import dateCurrentFormat from "../../utils/dateCurrentFormat";
import { useDispatch, useSelector } from "react-redux";
import { addPost, addText, addTitle } from "../../redux/userSlice";


const Dashboard = () => {
  const { text, title, name, posts } = useSelector((state) => state.user);

  const date = dateCurrentFormat();
  const [toggleModal, setToggleModal] = useState(false);

  const [descriptionValue, setDescriptionValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  //Organizar lista, tirar sujeira do cod.

  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const text = descriptionValue;
    const title = titleValue;
    dispatch(addTitle(title));
    dispatch(addText(text));

    const newPost = {
      titlePost: title,
      textPost: text,
      datePost: date,
      namePost: name,
      id: posts.length ? posts.length + 1 : 1,
    };

    const updatedPosts = [...posts, newPost];

    if (validate()) {
      const copy = updatedPosts.sort((a, b) => b.id - a.id);
      dispatch(addPost(copy));

      setToggleModal(false);
    }
  };

  const handleCancel = () => {
    setToggleModal(false);
  };

  const handleChangeTitle = (event) => {
    setMessageTitle("");
    setTitleValue(event);
  };

  const handleChangeText = (event) => {
    setMessageText("");
    setDescriptionValue(event);
  };

  const validate = () => {
    const text = descriptionValue;
    const title = titleValue;
    let verify = true;

    if (title === '' || text === '') {
      setMessageTitle('Todos os campos devem ser preenchidos');
       verify = false;
    }
    return verify;
  };

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  // useEffect(() => {
  //   if (posts.length > 0) {
  //     AsyncStorage.setItem('posts', JSON.stringify(posts));
  //   }
  // }, [posts]);

  // useEffect(() => {
  //   const localPosts = AsyncStorage.getItem('posts') || '';
  //   dispatch(addPost(JSON.parse(localPosts)));
  // }, []);

  return (
    <>
      {toggleModal ? (
        <ScrollView>
          <NewPost
            handleChangeText={handleChangeText}
            handleChangeTitle={handleChangeTitle}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            errorTitle={messageTitle}
            errorText={messageText}
          />
        </ScrollView>
      ) : (
        <Container>
          <ScrollView style={{ width: "100%" }}>
            {posts.length ? (
              posts.map((item, index) => {
                return <Posts key={index} postData={item} />;
              })
            ) : (
              <EmptyPost />
            )}
            <View height={80} />
          </ScrollView>

          <ButtonContainer>
            <ButtonField
              onPress={() => {
                handleChangeTitle('');
                handleChangeText('');
                setToggleModal(true);
              }}
            >
              <AntDesign name="plus" size={24} color="#FFF" />
            </ButtonField>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
