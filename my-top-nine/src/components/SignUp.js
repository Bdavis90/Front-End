import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import {Link} from 'react-router-dom';

function SignUp(props) {
  console.log(props);
  return (
    <div>
      <div>
        <h3>Welcome to My Top 9, Create your account here!</h3>
      </div>
      <Form>
        <Field type="text" name="email" placeholder="Email" />
        <Field type="text" name="name" placeholder="Name" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </Form>
      <div>
        <h4>Already have an account? Click here to <a href="login">Login</a></h4>
      </div>
    </div>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({ email, name, password }) {
    return {
      email: email || "",
      name: name || "",
      password: password || ""
    };
  },
  
    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Email is required"),
        name: Yup.string()
            .required("Name is required"),
        password: Yup.string()
          .min(6, "Password must be 6 chararcters or longer")
          .required("Password is required")
      }),
    handleSubmit(values, props) {
        console.log(values);
          AxiosWithAuth()
            .post("/auth/register", values)
            .then(res => {
              console.log(res);
            });
      }
    })(SignUp);

export default FormikSignUpForm;
