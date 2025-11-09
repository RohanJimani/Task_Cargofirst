import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change this to your backend URL
});

// Attach token automatically to every request
API.interceptors.request.use((req) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
