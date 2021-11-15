import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL =
  "https://apurva-college-dashboard.herokuapp.com/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 2000;

export default axiosClient;
