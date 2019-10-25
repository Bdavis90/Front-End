import React, { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";
import AxiosWithAuth from "../utils/AxiosWithAuth";

function SignUp() {
  
    return (
              <Form>
                <Field type="text" name="email" placeholder="Email"/>
                <Field type="text" name="name" placeholder="Name"/>
                <Field type="text" name="password" placeholder="Password"/>
                <button>Submit!</button>
              </Form>
    );
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ email, name, password}) {
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
    handleSubmit(values) {
        console.log(values);
          AxiosWithAuth()
            .post("/auth/register", values)
            .then(res => {
              console.log(res);
            });
      }
    })(SignUp);

export default FormikSignUpForm;