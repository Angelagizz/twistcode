import axios from "axios";

export const getCountry = async () => {
  const url = "https://restcountries.eu/rest/v2/all";
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};