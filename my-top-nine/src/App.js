import React, { useEffect } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import FormikSignUpForm from "./components/SignUp";
import FormikLoginForm from './components/Login';

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <Navigation />
      <Route exact path="/signup" component={FormikSignUpForm} />
      <Route exact path="/login" component={FormikLoginForm} />
      <PrivateRoute path="/home" component={Home} />
    </div>
  );
}

export default App;