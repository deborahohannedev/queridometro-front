import axios from "axios";

const api = axios.create({
  baseURL: "https://queridometro-backend.onrender.com",
});

export default api;
