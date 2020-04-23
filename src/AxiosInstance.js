import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3000",
  baseURL: "https://radiant-sierra-26169.herokuapp.com",
});

instance.defaults.headers.post["Content-Type"] = "application/json";
export default instance;
