import axios from "axios";

export const fetchHouse = () => {
  return axios.get("/api/history/house").then((res) => res.data);
};
