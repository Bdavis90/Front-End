import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://salty-stream-78442.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;
