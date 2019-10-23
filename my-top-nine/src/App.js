import React, { useEffect } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import FormikSignUpForm from "./components/SignUp";

function App(props) {
  console.log(props);

  // useEffect(() => {
  //   AxiosWithAuth()
  //     .post("/auth/login", {
  //       email: "abc123@abc.com",
  //       password: "abc123"
  //     })
  //     .then(res => {
  //       console.log(res);
  //       localStorage.setItem("token", res.data.token);
  //     });
  // }, []);

  return (
    <div className="App">
      <Navigation />
      <PrivateRoute path="/home" component={Home} />
      <FormikSignUpForm />
    </div>
  );
}

export default App;
