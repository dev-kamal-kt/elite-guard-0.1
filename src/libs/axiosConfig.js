import axios from "axios";

const api = "https://eliteguardcarcare.com/server";

const axiosConfig = axios.create({
  baseURL: api,
  //withCredentials: true,
});

export default axiosConfig;