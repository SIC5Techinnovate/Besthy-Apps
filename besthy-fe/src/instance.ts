import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3002",
  baseURL: "https://besthy-be.vercel.app",
});

export default instance;
