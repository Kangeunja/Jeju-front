import axios from "axios";

export const fetchClothing = () => {
  return axios.get("/api/history/clothing").then((res) => res.data);
};
