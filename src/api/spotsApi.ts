import axios from "axios";

export const fetchSpots = () => {
  return axios.get("/api/spots").then((res) => res.data);
};

export const fetchSpotById = (id: any) => {
  return axios.get(`/api/spots/${id}`).then((res) => res.data);
};
