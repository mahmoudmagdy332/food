import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../config";
import {  IFormInput, password,  } from "../type";



const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      location.href = "/login";
    }
    return config;
  },
  (error) => {
    if (error.response?.status === 401) {
      location.href = "/login";
    }
    return Promise.reject(error);
  }
);


export const getLogoutAPI = () => api.get("logout");





export const getStudentProfileAPI = () => api.get("profile");
export const UpdateProfileAPI = (data: IFormInput) =>
  api.post("update-profile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });


export const changePasswordAPI = (data: password) =>
  api.post("change-password", data);

