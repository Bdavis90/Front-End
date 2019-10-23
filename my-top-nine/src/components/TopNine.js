import React from "./node_modules/react";
import { Form, Field, withFormik } from "./node_modules/formik";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as Yup from "./node_modules/yup";

const TopNine = () => {
  return (
    <Form>
      <Field type="text" name="title" placeholder="Title" />
      <Field type="text" name="description" placeholder="Description" />
      <Field type="text" name="image_url" placeholder="Image" />
      <button type="submit">Submit</button>
    </Form>
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
  handleSubmit(values) {
    console.log(values);
    AxiosWithAuth()
      .post(`/home/add-top-nine`, values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("topNineId", res.data.id);
      })
      .catch(err => console.error(err));
  }
})(TopNine);

export default FormikTopNineForm;
