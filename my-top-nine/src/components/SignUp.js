import React, { useEffect } from './node_modules/react';
import { withFormik, Form, Field } from "./node_modules/formik";
import * as Yup from "./node_modules/yup";
import AxiosWithAuth from "./utils/AxiosWithAuth";

function SignUp() {
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
            email: this.displayName || "",
            name: name || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Email is required"),
        name: Yup.string()
            .name()
            .required("Name is required"),
        password: Yup.string()
          .min(6, "Password must be 6 chararcters or longer")
          .required("Password is required")
      }),
    handleSubmit(values) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      }
    })(SignUp);

export default FormikSignUpForm;