import React, { useState } from "react";
import style from "../styles/allpost.module.css";
import { useHistory } from "react-router-dom";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Posts = ({ posts, setMessage }) => {
  const history = useHistory();
  const [detail, setDetail] = useState(false);

  return (
    <div className={style.container}>
      {posts &&
        posts.map((post) => (
          <div className={style.child}>
            <div className={style.half}>
              <h2>{post.title}</h2>
              {detail == post.id && (
                <>
                  <span>{post.body}</span>
                  <p>user: {post.userId}</p>
                  <p>post: {post.id}</p>
                </>
              )}
            </div>
            <div className={style.icons}>
              {detail == post.id ? (
                <AiOutlineArrowUp size={20} style={{ cursor: "pointer" }} onClick={(e) => {
                    e.preventDefault()
                    setDetail(false)}}/>
              ) : (
                <AiOutlineArrowDown
                style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setDetail(post.id);
                  }}
                  size={20}
                />
              )}
              <AiFillEdit
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/edit/${post.id}`);
                }}
                style={{ cursor: "pointer" }}
                size={20}
              />
              <AiFillDelete style={{ cursor: "pointer" }} size={20} onClick={(e) => {
                  e.preventDefault();
                  setMessage(post.id)
              }} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
