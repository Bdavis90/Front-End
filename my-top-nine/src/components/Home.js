import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

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
      })
      .catch(err => console.error(err));
  }, []);

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
      <div className="topNine">
        {topNine.map(item => (
          <h2>{item.title}</h2>
        ))}
      </div>
    </>
  );
};

export default Home;
