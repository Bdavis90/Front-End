import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SignUp() {
    return (
              <Form>
                <Field type="text" name="email" placeholder="Email"/>
                <Field type="text" name="username" placeholder="Username"/>
                <Field type="text" name="password" placeholder="Password"/>
                <button>Submit!</button>
              </Form>
    );
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ email, name, password}) {
        return {
            name: this.displayName || "",
            username: username || "",
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