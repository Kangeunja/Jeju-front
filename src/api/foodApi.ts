import axios from "axios";

export const fetchFood = () => {
  return axios.get("/api/history/food").then((res) => res.data);
};
