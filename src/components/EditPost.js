import React, { useEffect, useState } from "react";
import style from "../styles/editpost.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost, editPost } from "../state/post/actions";

const EditPost = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.single);
  const [editTitle, setEditTitle] = useState(false) 
  const [editBody, setEditBody] = useState(false) 
  const [edited, setEdited] = useState({})

  useEffect(() => {
    dispatch(getPost(postId))
  }, []);

  const handleChange = (e) => {
      e.preventDefault()
      setEdited({...edited, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        edited,
        id: postId
    }
    dispatch(editPost(data))
    .then(res => {
        if(res.payload.id) {
            setEditTitle(false)
            setEditBody(false)
        }
    })
}

  return (
    <>
      {post.id ? (
        <div className={style.container}>
          <h1>Edit Post</h1>
          <div>
              <form onSubmit={handleSubmit} className={style.info}>
            <span>Id: {post.id}</span>
            <span onClick={(e) => {
                setEdited({})
                e.preventDefault()
                setEditTitle(!editTitle)
            }}>Title: {post.title}</span>
            {editTitle && (
                <>
                <input onChange={handleChange} className={style.input}required name="title" placeholder="new title..."></input>
                <input value="Edit" className={style.submit} type="submit"></input>
                </>
            )}
            <span onClick={(e) => {
                setEdited({})
                e.preventDefault()
                setEditBody(!editBody)
            }}>Content: {post.body}</span>
            {editBody && (
                <>
                <textarea onChange={handleChange} required name="body" placeholder="new body..."></textarea>
                <input value="Edit" className={style.submit}type="submit"></input>
                </>
            )}
              </form>
          </div>
        </div>
      ) : (
          <>
          <h1 style={{padding: '100px'}}>Error 404 not found</h1>
          </>
      )}
    </>
  );
};

export default EditPost;
