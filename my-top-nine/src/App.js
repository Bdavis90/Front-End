import React from "react";
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
      <Route path="/" component={Navigation} />
      <Route path="/signup" component={FormikSignUpForm} />
      <Route  path="/login" component={FormikLoginForm} />
      <PrivateRoute path="/home" component={Home} />
    </div>
  );
}

export default App;