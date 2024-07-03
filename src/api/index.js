import axios from "axios";
const instance = axios.create({
  baseURL: "https://mockapi.io",
});


export default instance;
