import React, { useEffect, useState } from "./node_modules/react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import FormikTopNineForm from "./TopNine";

const Home = props => {
  console.log("Home.js props: ", props);
  const [home, setHome] = useState("");
  const [topNine, setTopNine] = useState([]);
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
      .delete(`/home/${item.id}/delete-top-nine`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
