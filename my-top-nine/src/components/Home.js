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
  console.log("topNine", topNine);

  useEffect(() => {
    AxiosWithAuth()
      .get(`/home`)
      .then(res => {
        console.log(res.data);
        setHome(res.data);
        setTopNine(res.data.topNine);
        return res.data.topNine.length > 9 ? "" : setTopNine(res.data.topNine);
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

  const handleChange = e => {
    setTopNineEdit({ ...topNineEdit, [e.target.name]: e.target.value });
  };

  const saveEdit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/home/${topNineEdit.id}/edit-top-nine`, topNineEdit)
      .then(res => {
        setEditing(false);
        e.target.reset();
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  const curDate = new Date().toDateString();
  console.log(curDate);
  console.log(topNine);

  return (
    <div className="home">
      <div className="user">
        <h2>Welcome {home.name}</h2>
        <p>{curDate}</p>
      </div>
      <FormikTopNineForm />
      <div className="topNineList">
        {topNine.map(topNine => (
          <div className="topNine">
            <h2>{topNine.title}</h2>
            <p>{topNine.description}</p>
            <img src={topNine.image_url} />
            <div>
              <button onClick={() => deleteTopNine(topNine)}>Delete</button>
              <button onClick={() => editTopNine(topNine)}>Edit</button>
            </div>
          </div>
        ))}
        {editing && (
          <form onSubmit={saveEdit} className="editForm">
            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={topNineEdit.title}
            />
            <input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={topNineEdit.description}
            />
            <input
              name="image_url"
              placeholder="image_url"
              onChange={handleChange}
              value={topNineEdit.image_url}
            />
            <div>
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
