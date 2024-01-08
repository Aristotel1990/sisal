import axios from "axios";

// ----------------------------------------------------------------------
const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(error?.response?.data?.error || "Something went wrong!")
);

export default axiosInstance;
