import React, { useEffect } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import FormikSignUpForm from "./components/SignUp";

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <Navigation />
      <Route path="/signup" component={FormikSignUpForm} />
      <PrivateRoute path="/home" component={Home} />
    </div>
  );
}

export default App;