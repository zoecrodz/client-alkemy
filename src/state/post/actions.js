import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getPosts = createAsyncThunk("GET_ALL_POSTS", () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        return res.data
    })
});

export const createPost = createAsyncThunk("CREATE_NEW_POST", (post) => {
    return axios
    .post("https://jsonplaceholder.typicode.com/posts", post)
    .then((res)=> {
        return res.data
    })
})

export const getPost = createAsyncThunk("GET_SINLGE_POST", (id, {rejectWithValue}) =>{
    return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
        return res.data
    })
    .catch(err => {
        return rejectWithValue(err.response.data)
    })
})

export const editPost = createAsyncThunk("EDIT_POST", (data) => {
    const {id, edited} = data
    return axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, edited)
    .then(res => {
        return res.data
    })
})

export const deletePost = createAsyncThunk("DELETE_POST", (id) => {
    return axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
        return res.data
    })
} )