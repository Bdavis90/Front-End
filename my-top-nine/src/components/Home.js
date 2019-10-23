import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import FormikTopNineForm from "./TopNine";

const initialValue = {
  title: "",
  description: "",
  image_url: ""
};

const Home = props => {
  console.log("Home.js props: ", props);
  const [home, setHome] = useState("");
  const [topNine, setTopNine] = useState([]);
  const [editing, setEditing] = useState(false);
  const [topNineEdit, setTopNineEdit] = useState(initialValue);
  console.log("home.js home: ", home);

  useEffect(() => {
    AxiosWithAuth()
      .get(`/home`)
      .then(res => {
        console.log(res.data);
        setHome(res.data);
        setTopNine(res.data.topNine);
        return res.data.topNine.length > 9
          ? null
          : setTopNine(res.data.topNine);
      })
      .catch(err => console.error(err));
  }, []);

  const deleteTopNine = item => {
    console.log(item);
    AxiosWithAuth()
      .delete(`/home/${item.id}/delete-top-nine`, topNine)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  const editTopNine = item => {
    setEditing(true);
    setTopNineEdit(item);
  };
  const saveEdit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/home/${editTopNine.id}/edit-top-nine`, editTopNine)
      .then(res => {
        setEditing(false);
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  const handleChange = e => {
    setTopNineEdit({ ...topNineEdit, [e.target.name]: e.target.value });
  };

  const curDate = new Date().toDateString();
  console.log(curDate);
  console.log(topNine);

  return (
    <>
      <div className="user">
        <h2>{home.name}</h2>
        <p>{curDate}</p>
        <p>Location: NJ</p>
      </div>
      <FormikTopNineForm addTopNine={setTopNine} />
      <div className="topNine">
        {topNine.map(topNine => (
          <div>
            <h2>{topNine.title}</h2>
            <button onClick={() => deleteTopNine(topNine)}>Delete</button>
            <button onClick={() => editTopNine(topNine)}>Edit</button>
          </div>
        ))}
        {editing && (
          <form onSubmit={saveEdit}>
            <label>
              Title
              <input
                name="title"
                onChange={handleChange}
                value={topNineEdit.title}
              />
            </label>
            <label>
              Description
              <input
                name="descriptionj"
                onChange={handleChange}
                value={topNineEdit.description}
              />
            </label>
            <label>
              image_url
              <input
                name="image_url"
                onChange={handleChange}
                value={topNineEdit.image_url}
              />
            </label>
            <div>
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Home;
