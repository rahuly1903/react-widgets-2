import axios from "axios";

const WikiApi = axios.create({
  baseURL: "https://en.wikipedia.org/w",
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
  },
});

export default WikiApi;
