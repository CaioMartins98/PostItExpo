import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
  name: "user",
  text: "",
  title: "",
  id: 0,
  posts: [],
  initialState: {
    name: "",
    text: "",
    title: "",
    id: 0,
    posts: [],
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, name: payload };
    },
    addText(state, { payload }) {
      return { ...state, text: payload };
    },
    addTitle(state, { payload }) {
      return { ...state, title: payload };
    },
    addPost(state, { payload }) {
      return { ...state, posts: payload };
    },
    removePost(state, { payload }) {
      const upPost = state.posts.filter((post) => post.id !== payload);

      return { ...state, posts: upPost };
    },
  },
});

export const { changeUser, addText, addTitle, addPost, removePost } =
  slice.actions;

export const selectUser = (state) => state.user;
export const selectTitle = (state) => state.title;
export const selectText = (state) => state.text;

export default slice.reducer;
