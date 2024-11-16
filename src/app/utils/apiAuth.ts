import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../config";
import { ApplyJop, password, userUpdateData } from "./types/types";

import { answerType } from "../type";

const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = Cookies.get("access_token");
  token && (config.headers["Authorization"] = `Bearer ${token}`);

  return config;
});

export const getLogoutAPI = () => api.get("logout");

export const getMyLearningAPI = (currentPage:number) => api.get(`my-learnings?page=${currentPage}`);
export const getStartLessonAPI = (lessonId:string|undefined) => api.get(`start-lesson/${lessonId}`);


export const getsurveyAPI = () => api.get("survey");
export const myLearningIdAPI = (id: string | undefined) =>
  api.get(`my-learnings/${id}`);

export const getStudentProfileAPI = () => api.get("profile");
export const UpdateProfileAPI = (data: userUpdateData) =>
  api.post("profile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const ApplyJopAPI = (data: ApplyJop) =>
  api.post("submit-applications", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const SubscribePackageAPI = (id: number | undefined) =>
  api.get(`subscribe/package/${id}`);
export const changePasswordAPI = (data: password) =>
  api.post("change-password", data);

export const postSurveyAPI = (data: { answers: answerType[] }) =>
  api.post("submit-survey", data);
