import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "../styles/newpost.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { createPost } from "../state/post/actions";

const NewPost = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(false);
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post)).then((res) => {
      if (res.payload.title) setForm(!form);
    });
  };

  return (
    <div className={style.container}>
      <h1
        onClick={(e) => {
          e.preventDefault();
          setForm(!form);
        }}
      >
        New Post <AiOutlinePlus />
      </h1>
      {form && (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            required
            type="text"
            name="title"
            placeholder="Title"
          ></input>
          <textarea
            onChange={handleChange}
            required
            name="content"
            placeholder="Content"
          ></textarea>
          <input className={style.submit} type="submit" value="Create"></input>
        </form>
      )}
    </div>
  );
};

export default NewPost;
