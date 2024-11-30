import { useMutation } from "@tanstack/react-query";
import {
  contactUsAPI,
  postLoginUserAPI,
  postSignupUserApi,
  SearchInstructorAPI,
  SingleBookAPI,
  SingleInstructorAPI,
  SuggestionAPI,
} from "../utils/api";
import {


  
  IFormContuctInput,
  IFormInput,
  IFormSuggestionInput,
  orderData,
  password,
  userData,
} from '../type'
import { AxiosError } from "axios";
import Cookies from "js-cookie";

import {
  changePasswordAPI,
  OrderAPI,
  UpdateProfileAPI,
} from "../utils/apiAuth";


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

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (data: IFormInput) => {
      return UpdateProfileAPI(data);
    },
  });
};

export const useOrderMutation = () => {
  return useMutation({
    mutationFn: (data: orderData) => {
      return OrderAPI(data);
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
















export const useContuctMutation = () => {
  return useMutation({
    mutationFn: (data: IFormContuctInput) => {
      return contactUsAPI(data);
    },
  });
};
export const useSuggestionMutation = () => {
  return useMutation({
    mutationFn: (data: IFormSuggestionInput) => {
      return SuggestionAPI(data);
    },
  });
};

