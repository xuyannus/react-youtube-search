import axios from "axios";

const CREDENTIAL = "AIzaSyBgPShuR8Z1bhVJK9gyjS4Dk--Yey1-UkE";

const axiosApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: CREDENTIAL,
  },
});

export default axiosApi;
