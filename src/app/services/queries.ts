/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import {
  getAboutAPI,
  getCareersAPI,
  getFQsAPI,
  getCategoriesQueryAPI,
  getHomeAPI,
  getSettingAPI,
  getTermsAPI,
  instructorsAPI,
  getIntroAPI,
  getPrivaciesAPI,

  getCareerAPI,
  getCountriesAPI,
  getPageAPI,
  MealsAPI,
} from "../utils/api";
import {
  getLogoutAPI,
  getStudentProfileAPI,
} from "../utils/apiAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { changeLoading } from "../slices/settingSlice";
import { removeUser } from "../slices/userSlice";


export function MealsQuery(id: string|undefined) {
  return useQuery({
    queryKey: ["meals", id],
    queryFn: async () => await MealsAPI(id),
    refetchOnMount: false,
  });
}

export function settingQuery() {
  return useQuery({
    queryKey: ["setting"],
    queryFn: async () => await getSettingAPI(),
    refetchOnMount: false,
    retry: 1,
  });
}

export function AboutUsQuery() {
  return useQuery({
    queryKey: ["About"],
    queryFn: async () => await getAboutAPI(),
  });
}
export function TermsQuery() {
  return useQuery({
    queryKey: ["Terms"],
    queryFn: async () => await getTermsAPI(),
  });
}
export function careerQuery(id:string|undefined) {
  return useQuery({
    queryKey: ["Terms"],
    queryFn: async () => await getCareerAPI(id),
  });
}

export function pageQuery(id:string|undefined) {
  return useQuery({
    queryKey: ["page"],
    queryFn: async () => await getPageAPI(id),
  });
}


export function IntroQuery() {
  return useQuery({
    queryKey: ["FQs"],
    queryFn: async () => await getIntroAPI(),
  });
}
export function FQsQuery() {
  return useQuery({
    queryKey: ["FQs"],
    queryFn: async () => await getFQsAPI(),
  });
}
export function CareerQuery() {
  return useQuery({
    queryKey: ["career"],
    queryFn: async () => await getCareersAPI(),
  });
}

export function categoriesQuery() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategoriesQueryAPI(),
    refetchOnMount: false,
    retry: 1,
  });
}


export function homeQuery() {
  return useQuery({
    queryKey: ["home"],
    queryFn: async () => await getHomeAPI(),
    refetchOnMount: false,
  });
}


export function authUserQuery() {
  return useQuery({
    queryKey: ["UserAuth"],
    queryFn: async () => await getStudentProfileAPI(),

    refetchOnWindowFocus: false,
    enabled: false,
  });
}

export function logoutQuery() {
  const dispatch = useDispatch<AppDispatch>();
  return useQuery({
    queryKey: ["logout"],
    queryFn: async () => {
      dispatch(changeLoading(true));
      const l = await getLogoutAPI();
      await dispatch(removeUser());
      dispatch(changeLoading(false));
      return l;
    },
    enabled: false,
  });
}





export function privaciesQuery() {
  return useQuery({
    queryKey: ["privacies"],
    queryFn: async () => await getPrivaciesAPI(),
  });
}


export function AllInstructorQuery() {
  return useQuery({
    queryKey: ["AllInstructor"],
    queryFn: async () => await instructorsAPI(),
  });
}





export function getCountriesQuery() {
  return useQuery({
    queryKey: ["MyLearningId"],
    queryFn: async () => await getCountriesAPI(),
 

  });
}
