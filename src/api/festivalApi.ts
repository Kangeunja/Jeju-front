import axios from "axios";

export const fetchFestivalByMonth = (month: string) => {
  return axios.get(`/api/festivals/${month}`).then((res) => res.data);
};
