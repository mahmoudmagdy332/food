import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin } from "../app/utils/hooks/useAuth"; 

import { useLanguageSelector } from "../app/slices/languageSlice"; 
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";


const Login = () => {
  const navigate = useNavigate();

  const [eyes, setEyes] = useState(false);
  const { mutate, isSuccess, isPending, isError, error, ErrorCheck } =useLogin();

  console.log(error);
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );

  interface IFormInput {
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };
 
useEffect(()=>{
  if (isSuccess) {
    navigate('/');
  }
},[isSuccess])


  return (
    <div className="bg-mainHeader py-20">
      <div className="w-11/12 lg:w-3/4 m-auto rounded-xl shadow-xl bg-white flex flex-col lg:flex-row items-center">
        <div className="w-1/2 rounded-2xl relative">
          <img src="/imgs/top-view-cooked-chicken-spiced-up-with-potatoes-dark-surface.jpg" className="rounded-l-xl p-8" />
          <div className="absolute w-full h-full top-0 left-0 flex items-end">
           
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-1/2 px-10 py-20">
          <div className="flex flex-col gap-2">
            <h3 className="text-dark text-2xl font-bold font-Cardo">
              {translations.SignAccount}
            </h3>
            <p className="text-dark text-md">
              {translations.haveNotAccount}
              <Link to="/sign-up" className="ms-2 text-primary">
                {translations.Join}
              </Link>
            </p>
          </div>
          <form
            className="flex flex-col gap-8 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                style={{ backgroundColor: "transparent", outline: "none" }}
                className="w-full border-b border-borderInbut focus:border-dark pb-2 text-dark"
                placeholder={translations.UsernameOrEmail}
              />
              {errors.email && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={eyes ? "text" : "password"}
                  style={{ backgroundColor: "transparent", outline: "none" }}
                  className="w-full border-b border-borderInbut focus:border-dark pb-2 text-dark"
                  placeholder={translations.Password}
                />
                <div className="absolute top-1 end-1">
                  {eyes ? (
                    <div
                      onClick={() => setEyes(false)}
                      className="cursor-pointer text-xl text-dark"
                    >
                      <LiaEyeSolid />
                    </div>
                  ) : (
                    <div
                      onClick={() => setEyes(true)}
                      className="cursor-pointer text-xl text-dark"
                    >
                      <LiaEyeSlashSolid />
                    </div>
                  )}
                </div>
              </div>
              {errors.password && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          
            {isError && (
              <p className="text-red-500">
                {ErrorCheck
                  ? translations.errorMessage
                  : error?.response?.data?.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="flex justify-center bg-dark text-white hover:bg-Secondary transition-all duration-400 items-center gap-3 rounded-sm py-3"
            >
              {isPending ? (
                <>
                  {translations.LoggingIn}
                  
                </>
              ) : (
                <>
                  {translations.Login}
           
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
