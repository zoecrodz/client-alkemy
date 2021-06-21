import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import style from "../styles/home.module.css";
import { getPosts, deletePost } from "../state/post/actions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.posts.all);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(message)).then((res) => {
      if (res.payload) {
        history.go(0);
      }
    });
  };

  return (
    <>
      <div style={{ opacity: message ? 0.3 : 1 }} className={style.container}>
        <NewPost />
        <Posts posts={allPost} setMessage={setMessage} />
      </div>
      {message && (
        <div className={style.message}>
          <h1>Delete this post?</h1>
          <div className={style.buttons}>
            <button onClick={handleDelete}>DELETE</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setMessage(false);
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
