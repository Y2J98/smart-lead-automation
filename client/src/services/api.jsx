import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const addLeads = (names) => API.post("/leads/batch", { names });

export const getLeads = (status) =>
  API.get(`/leads${status ? `?status=${status}` : ""}`);
