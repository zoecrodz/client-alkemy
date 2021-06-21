import React from 'react';
import Home from "./Home"
import EditPost from "../components/EditPost"
import Navbar from "../components/Navbar"
import style from "../styles/app.module.css"
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/edit/:id" render={({ match }) => (
                  <EditPost postId={match.params.id} />
                  )}/>
      </Switch>
    </div>
  );
};

export default App;
