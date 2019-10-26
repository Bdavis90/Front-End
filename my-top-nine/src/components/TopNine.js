import React from "react";
import { Form, Field, withFormik } from "formik";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as Yup from "yup";

const TopNine = () => {
  return (
    <>
      <Form className="topNineForm">
        <p>Add a Top Nine</p>
        <Field type="text" name="title" placeholder="Title" />
        <Field type="text" name="description" placeholder="Description" />
        <Field type="text" name="image_url" placeholder="Image" />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const FormikTopNineForm = withFormik({
  mapPropsToValues({ title, description, image_url }) {
    return {
      title: title || "",
      description: description || "",
      image_url: image_url || ""
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    image_url: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    console.log(values);
    AxiosWithAuth()
      .post(`/home/add-top-nine`, values)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err));
    resetForm();
  }
})(TopNine);

export default FormikTopNineForm;
