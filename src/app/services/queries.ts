/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import {
  allBooksAPI,
  coursesAPI,
  getAboutAPI,
  getCareersAPI,
  getFQsAPI,
  getCategoriesQueryAPI,
  getHomeAPI,
  getSettingAPI,
  getTermsAPI,
  instructorsAPI,
  instructorsAPIPagination,
  PackagesAPIPagination,
  getIntroAPI,
  ArticleCategoryAPI,
  ArticlesByIdAPI,
  getTestimonialsAPI,
  getPrivaciesAPI,
  getPackagesAPI,
  courseIdAPI,
  getCareerAPI,
  getCountriesAPI,
  getPageAPI,
} from "../utils/api";
import {
  getLogoutAPI,
  getMyLearningAPI,
  getStartLessonAPI,
  getStudentProfileAPI,
  getsurveyAPI,
  myLearningIdAPI,
  SubscribePackageAPI,
} from "../utils/apiAuth";
import { CoursesParams } from "../utils/types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { changeLoading } from "../slices/settingSlice";
import { removeUser } from "../slices/UserSlice";

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

export function surveyQuery() {
  return useQuery({
    queryKey: ["survey"],
    queryFn: async () => await getsurveyAPI(),
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
export const UseInstructorsQuery = (currentPage: number) => {
  return useQuery({
    queryKey: ["instructors", currentPage],
    queryFn: async () => await instructorsAPIPagination(currentPage),
    refetchOnMount: false,
  });
};
export const UsePackagesQuery = (currentPage: number) => {
  return useQuery({
    queryKey: ["packages", currentPage],
    queryFn: async () => await PackagesAPIPagination(currentPage),
    refetchOnMount: false,
  });
};
export function homeQuery() {
  return useQuery({
    queryKey: ["home"],
    queryFn: async () => await getHomeAPI(),
    refetchOnMount: false,
  });
}
export function myLearningQuery({currentPage}:{currentPage:number}) {
  return useQuery({
    queryKey: ["my-learning",currentPage],
    queryFn: async () => await getMyLearningAPI(currentPage),
    staleTime: 0,

  });
}
export function startLessonQuery(lessonId:string|undefined) {
  return useQuery({
    queryKey: ["start-lesson",lessonId],
    queryFn: async () => await getStartLessonAPI(lessonId),
  });
}
export function authUserQuery() {
  return useQuery({
    queryKey: ["UserAuth"],
    queryFn: async () => await getStudentProfileAPI(),

    refetchOnWindowFocus: false,
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

export function CoursesQuery({ name, id, currentPage }: CoursesParams) {
  return useQuery({
    queryKey: ["Courses", { name, id, currentPage }],
    queryFn: async () => await coursesAPI({ name, id, currentPage }),
    staleTime: 0,
    refetchOnMount: false,
  });
}
export function ArticleCategoryQuery({ name }: { name: string | undefined }) {
  return useQuery({
    queryKey: ["Article-category", { name }],
    queryFn: async () => await ArticleCategoryAPI({ name }),
  });
}
export function Articles(id: string | undefined) {
  return useQuery({
    queryKey: ["Articles", { id }],
    queryFn: async () => await ArticlesByIdAPI(id),
  });
}

export function TestimonialQuery() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => await getTestimonialsAPI(),
  });
}
export function privaciesQuery() {
  return useQuery({
    queryKey: ["privacies"],
    queryFn: async () => await getPrivaciesAPI(),
  });
}
export function packagesQuery(ip:string) {
  return useQuery({
    queryKey: ["packages"],
    queryFn: async () => await getPackagesAPI(ip),
  });
}
export function SubscribePackageQuery(id: number | undefined) {
  return useQuery({
    queryKey: ["packages-subscription", id],
    queryFn: async () => await SubscribePackageAPI(id),
    enabled: false,
  });
}
export function AllInstructorQuery() {
  return useQuery({
    queryKey: ["AllInstructor"],
    queryFn: async () => await instructorsAPI(),
  });
}

export function UseBooksQuery() {
  return useQuery({
    queryKey: ["BooksPagenation"],
    queryFn: async () => await allBooksAPI(1),
  });
}

export function CourseIdQuery(id: string | undefined) {
  return useQuery({
    queryKey: ["CourseId"],
    queryFn: async () => await courseIdAPI(id),
   
  });
}
export function MyLearningIdQuery(id: string | undefined) {
  return useQuery({
    queryKey: ["MyLearningId",id],
    queryFn: async () => await myLearningIdAPI(id),
 

  });
}

export function getCountriesQuery() {
  return useQuery({
    queryKey: ["MyLearningId"],
    queryFn: async () => await getCountriesAPI(),
 

  });
}
