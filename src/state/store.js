import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import postReducer from "./post/reducers"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        posts: postReducer
    },
})

export default store;