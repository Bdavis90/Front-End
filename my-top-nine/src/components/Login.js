import React, { useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../utils/AxiosWithAuth";

function Login() {

    return (
              <Form>
                <Field type="text" name="email" placeholder="Email"/>
                <Field type="text" name="password" placeholder="Password"/>
                <button>Submit!</button>
              </Form>
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
    handleSubmit(values) {
        console.log(values);
          AxiosWithAuth()
            .post("/auth/login", values)
            .then(res => {
              console.log(res);
              localStorage.setItem("token", res.data.token);
            });
      }
    })(Login);

export default FormikLoginForm;