import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://localhost:9191/",
  });

export default baseUrl;