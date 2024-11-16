import { useMutation } from "@tanstack/react-query";
import {
  CategoryCoursesAPI,
  ConfirmSignupCodeAPI,
  ConfrimCodeAPI,
  confrimPasswordAPI,
  contactUsAPI,
  CourseDetailsAPI,
  CoursesAPI,
  ForgetPasswordAPI,
  postLoginUserAPI,
  postSignupUserApi,
  postSocialLoginUserAPI,
  SearchInstructorAPI,
  SingleBookAPI,
  SingleInstructorAPI,
  SinglePackageAPI,
} from "../utils/api";
import {
  confrimCode,
  confrimPassword,
  filterType,
  forgetPassword,
  IFormContuctInput,
  password,
  socialLogin,
  userData,
} from "../utils/types/types";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

import {
  ApplyJopAPI,
  changePasswordAPI,
  postSurveyAPI,
  UpdateProfileAPI,
} from "../utils/apiAuth";

import { answerType } from "../type";
import { FormValues } from "../../pages/JopApplication";
import { UpdateForm } from "../../components/Account/PersonalInfo";

export interface CustomError {
  message: string;
  status?: number;
}
export const useInstructorSearchMutation = () => {
  return useMutation({
    mutationFn: (name: string) => {
      return SearchInstructorAPI(name);
    },

    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useSingleBookMutation = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return SingleBookAPI(id);
    },

    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export function useSingleInstructorMutation() {
  return useMutation({
    mutationFn: (id: string) => {
      return SingleInstructorAPI(id);
    },

    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
}
export function useSurveyMutation() {
  return useMutation({
    mutationFn: (data: { answers: answerType[] }) => {
      return postSurveyAPI(data);
    },

    onError: (err: AxiosError<CustomError>) => {
      console.error("Login error", err);

      return err;
    },
  });
}

export function useLoginMutation() {
  return useMutation({
    mutationFn: (data: userData) => {
      return postLoginUserAPI(data);
    },

    onError: (err: AxiosError<CustomError>) => {
      console.error("Login error", err);

      return err;
    },
  });
}

export function useSocialLoginMutation() {
  return useMutation({
    mutationFn: (data: socialLogin) => {
      return postSocialLoginUserAPI(data);
    },

    onError: (err: AxiosError<CustomError>) => {
      console.error("Login error", err);

      return err;
    },
  });
}

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (data: userData) => {
      return postSignupUserApi(data);
    },
    onSuccess: ({ data }) => {
      Cookies.set("access_token", data.token, { expires: 1 });
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useConfirmSignupCodeMutation = () => {
  return useMutation({
    mutationFn: (data: confrimCode) => {
      return ConfirmSignupCodeAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: (data: password) => {
      return changePasswordAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (data: UpdateForm) => {
      return UpdateProfileAPI(data);
    },
  });
};

export const useForgetPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: forgetPassword) => {
      return ForgetPasswordAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};
export const useConfrimCodeMutation = () => {
  return useMutation({
    mutationFn: (data: confrimCode) => {
      return ConfrimCodeAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};
export const useConfrimPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: confrimPassword) => {
      return confrimPasswordAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useJopApplicationMutation = () => {
  return useMutation({
    mutationFn: (data: FormValues) => {
      console.log(data);
      return ApplyJopAPI(data);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

// export const useUpdateProfile = () => {
//   return useMutation({
//     mutationFn: (data: UpdateForm) => {
//       return UpdateProfileAPI(data);
//     },
//   });
// };

export const useCategoryCoursesMutation = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return CategoryCoursesAPI(id);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};
export const UsecoursesMutation = () => {
  return useMutation({
    mutationFn: ({
      filter,
      currentPage,
    }: {
      filter: filterType;
      currentPage: number;
    }) => {
      return CoursesAPI(filter, currentPage);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useSinglePackageMutation = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return SinglePackageAPI(id);
    },

    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useSingleCourseMutation = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return CourseDetailsAPI(id);
    },
    onError: (err: AxiosError<CustomError>) => {
      return err;
    },
  });
};

export const useContuctMutation = () => {
  return useMutation({
    mutationFn: (data: IFormContuctInput) => {
      return contactUsAPI(data);
    },
  });
};
