import React, { useEffect } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";

function App(props) {
  console.log(props);
  useEffect(() => {
    AxiosWithAuth()
      .post("/auth/register", {
        name: "Brandon Davis",
        email: "abc123@abc.com",
        password: "abc123"
      })
      .then(res => {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
      });
  }, []);
  useEffect(() => {
    AxiosWithAuth()
      .post("/auth/login", {
        email: "abc123@abc.com",
        password: "abc123"
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Top Nine</h1>
      <PrivateRoute path="/home" component={Home} />
    </div>
  );
}

export default App;
