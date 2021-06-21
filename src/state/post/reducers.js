import { createReducer } from "@reduxjs/toolkit";
import { getPosts, getPost } from "./actions"

const initialState = {
  all: [],
  single: {},
  error: undefined
};

const postReducer = createReducer(initialState, {
  [getPosts.fulfilled]: (state, action) => {
    state.all = action.payload;
  },
  [getPost.fulfilled]: (state, action) => {
    state.single = action.payload
  },
  [getPost.rejected]: (state, action) => {
    state.error = action.payload
  }

});

export default postReducer;
