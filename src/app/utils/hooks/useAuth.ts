import { useDispatch } from "react-redux";
import { authUserQuery, logoutQuery } from "../../services/queries";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import {
  useChangePasswordMutation,
  useConfirmSignupCodeMutation,
  useLoginMutation,
  useSignupMutation,
  useSocialLoginMutation,
  useUpdateUserMutation,
} from "../../services/mutation";

import { useNavigate } from "react-router-dom";
import { changePopup, setUser, updateUser } from "../../slices/UserSlice";

export const useLogin = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { mutate, isSuccess, data, isPending, isError, error, status } =
    useLoginMutation();
  const ErrorCheck = error?.response?.status === 422;

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data.data.data));
      console.log("dataasdasdasdasdasd", data);
    }
    if (isError) {
      console.log("error", error);
      if (error?.response?.data?.status === 0) {
        navigator("/signUp/confirm-Code");
      }
    }
  }, [isSuccess, isError]);

  return {
    mutate,
    isSuccess,
    isPending,
    isError,
    error,
    status,
    data,
    ErrorCheck,
  };
};
export const useSocialLogin = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { mutate, isSuccess, data, isPending, isError, error, status } =
  useSocialLoginMutation();
  const ErrorCheck = error?.response?.status === 422;

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data.data.data));
      // console.log("dataasdasdasdasdasd", );
      dispatch(changePopup(false));
      navigator("/");
    }
    if (isError) {
      console.log("error", error);
      if (error?.response?.data?.status === 0) {
        navigator("/signUp/confirm-Code");
      }
    }
  }, [isSuccess, isError]);

  return {
    mutate,
    isSuccess,
    isPending,
    isError,
    error,
    status,
    data,
    ErrorCheck,
  };
};
export const useSignUp = () => {
  const navigator = useNavigate();
  const { mutate, isPending, isSuccess, error, isError } = useSignupMutation();

  const ErrorCheck = error?.response?.status === 422;

  useEffect(() => {
    if (isSuccess) navigator("/signUp/confirm-Code");
  }, [isSuccess]);
  return { mutate, isSuccess, isPending, isError, error, ErrorCheck };
};

export const useConfirmSignupCode = () => {
  const navigator = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  const { mutate, data, isPending, isSuccess, error, isError } =
    useConfirmSignupCodeMutation();
  const ErrorCheck = error?.response?.status === 422;

  useEffect(() => {
    if (isSuccess) navigator("/login");
  }, [isSuccess, data]);

  return { mutate, isSuccess, isPending, isError, error, ErrorCheck };
};
export const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, refetch } = authUserQuery();
  console.log(data?.data.data);

  useEffect(() => {
    if (isSuccess) dispatch(updateUser(data.data.data));
  }, [data, isSuccess]);

  return { data, isSuccess, isLoading, isError, refetch };
};

export const useUpdatedUser = () => {
  const { isSuccess, data, mutate, isError, isPending, error } =
    useUpdateUserMutation();
  // const {refetch,isLoading} = useProfile();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (data) {
      
      dispatch(updateUser(data.data.data))
    }
  }, [data, isSuccess]);

  return { data, isSuccess, isError, error, isPending, mutate };
};
export const useLogout = () => {
  const { isSuccess, isLoading, refetch } = logoutQuery();
  return { isSuccess, isLoading, refetch };
};

export const useChangePassword = () => {
  const { isSuccess, data, mutate, isError, isPending, error } =
    useChangePasswordMutation();
  return { data, isSuccess, isError, isPending, mutate, error };
};
