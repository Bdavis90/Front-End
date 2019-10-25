import React, { useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../utils/AxiosWithAuth";

function Login() {

    return (
      <div>
        <div>
          <h3>Welcome back to My Top Nine</h3>
        </div>
        <Form>
          <Field type="text" name="email" placeholder="Email"/>
          <Field type="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </Form>
        <div>
          <h4>Don't have an account? <a href="signup">Sign Up</a> Here!</h4>
        </div>
           
      </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password}) {
        return {
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be 6 chararcters or longer")
          .required("Password is required")
      }),
    handleSubmit(values, props) {
        console.log(values);
          AxiosWithAuth()
            .post("/auth/login", values)
            .then(res => {
              console.log(res);
              localStorage.setItem("token", res.data.token);
              this.props.history.push('/home');
            });
      }
    })(Login);

export default FormikLoginForm;
