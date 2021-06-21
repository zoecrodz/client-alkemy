import React from "react";
import style from "../styles/navbar.module.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className={style.container}>
      <img style={{cursor: 'pointer'}} onClick={(e) => {
        e.preventDefault()
        history.push("/")
      }} src={process.env.PUBLIC_URL + "/logo.jpg"} />
    </div>
  );
};

export default Navbar;
