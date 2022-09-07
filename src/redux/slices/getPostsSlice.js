import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  countOfCats: 3,
  isLoading: false,
};

export const reducerOfPosts = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
    changeCountOfCatsList: (state, action) => {
      state.countOfCats = action.payload;
    },
    removeItemInArray: (state, action) => {
      state.cats = state.cats.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  getCatsFetch,
  getCatsSuccess,
  getCatsFailure,
  changeCountOfCatsList,
  removeItemInArray,
} = reducerOfPosts.actions;

export default reducerOfPosts.reducer;
