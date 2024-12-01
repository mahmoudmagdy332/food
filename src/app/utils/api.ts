import axios from "axios";

import { baseUrl } from "../config";
import { IFormContuctInput, IFormSuggestionInput, userData } from "../type";

const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const SingleBookAPI = (id: string) =>
  api.post("bookById", null, {
    params: {
      book_id: id,
    },
  });
export const SingleInstructorAPI = (id: string) =>
  api.post("instructorById", { user_id: id });

export const postSignupUserApi = (data: userData) => api.post("signup", data);
export const getSettingAPI = () => api.get("settings");

export const getBlanesAPI = () => api.get("dietplans");


export const MealsAPI = (id:string|undefined) => api.get(`categotry-details/${id}`);
export const MealAPI = (id:string|undefined) => api.get(`meal-details/${id}`);

export const getCategoriesQueryAPI = () => api.get("categories");

export const getHomeAPI = () => api.get("home");

export const getAboutAPI = () => api.get("about-us");
export const getTermsAPI = () => api.get("terms");
export const getCareerAPI = (id:string|undefined) => api.get(`career/${id}`);
export const getPageAPI = (id:string|undefined) => api.get(`page/${id}`);

export const getFQsAPI = () => api.get("questions");
export const getTestimonialsAPI = () => api.get("testimonials");
export const getPrivaciesAPI = () => api.get("privacies");
export const getCountriesAPI = () => api.get("countries");

export const getIntroAPI = () => api.get("intro");
export const courseIdAPI = (id: string | undefined) => api.get(`course/${id}`);

export const getCareersAPI = () => api.get("careers");
export const postLoginUserAPI = (data: userData) => api.post("login", data);






export const CategoryCoursesAPI = (id: string) =>
  api.post("courses/filter/bycaregory", { category_id: id });





export const SearchInstructorAPI = (name: string) =>
  api.post("serach-instructor", { name: name });
export const instructorsAPI = () => api.get("instructors");



export const contactUsAPI = (contuctForm: IFormContuctInput) =>
  api.post("/contact-us", contuctForm);

export const SuggestionAPI = (data: IFormSuggestionInput) =>
  api.post("/suggestions", data);

