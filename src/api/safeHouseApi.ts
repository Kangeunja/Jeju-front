import axios from "axios";

export const fetchSafeHouses = () => {
  return axios.get("/api/safeHouse").then((res) => res.data);
};
