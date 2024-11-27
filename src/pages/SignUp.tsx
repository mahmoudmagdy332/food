import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUp } from "../app/utils/hooks/useAuth"; 
import { useLanguageSelector } from "../app/slices/languageSlice"; 
import { useEffect, useState } from "react";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
  age:number;
  gender:string;
  weight:number;
  cancer:boolean;
  asthma:boolean;
  heart_disease:boolean;
  hypertension:boolean;
  diabetes:boolean;
  address:string;
}
const SignUp = () => {
  const [eyes, setEyes] = useState(false);
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );

  const { mutate, isSuccess, isPending, isError, ErrorCheck, error } =
    useSignUp();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };
  const navigate = useNavigate();
  const password = watch("password");
  useEffect(()=>{
    if (isSuccess) {
      navigate('/');
    }
  },[isSuccess])
  return (
    <div className="bg-mainHeader py-20">
      <div className=" w-11/12 lg:w-3/4 m-auto rounded-xl shadow-lg bg-white flex flex-col lg:flex-row items-center">
        
        <div className="flex flex-col w-full gap-8  px-10 py-20">
          <div className="flex flex-col gap-2">
            <h3 className="text-dark text-2xl font-bold font-Cardo">
              {translations.CreateAccount}
            </h3>
            <p className="text-dark text-md">
              {translations.HaveAccount}
              <Link to="/login" className="ms-2 text-primary">
                {translations.Signin}
              </Link>
            </p>
            {isSuccess && <p>{translations.SuccessSign}</p>}
          </div>
          <form
            className="grid lg:grid-cols-2 gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <input
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 20,
                    message: "Name cannot exceed 20 characters",
                  },
                })}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.UserName}
              />
              {errors.name && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.Email}
              />
              {errors.email && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={eyes ? "text" : "password"}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
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
              {errors.password && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("password_confirmation", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type={eyes ? "text" : "password"}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.RepeatPassword}
              />
              {errors.password_confirmation && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>


            <div className="flex flex-col">
              <input
                {...register("phone", {
                  required: "Phone is required",
                  maxLength: {
                    value: 20,
                    message: "Phone cannot exceed 20 characters",
                  },
                })}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.phone}
              />
              {errors.phone && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>  



            <div className="flex flex-col">
              <input
                {...register("address", {
                  required: "Address is required",
      
                })}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.address}
              />
              {errors.address && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>  


            <div className="flex flex-col">
              <input
                 {...register("age", {
                  required: "Age is required",
                  min: { value: 12, message: "You must be at least 12 years old" },
                  max: { value: 99, message: "Age must not exceed 99 years" },
                })}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.age}
              />
              {errors.age && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>  


            <div className="flex flex-col">
            <select id="countries"
            {...register("gender")}
            className=" border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500   block w-full p-2.5 ">
            <option selected>{translations.gender}</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
              
              {errors.gender && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>  

            <div className="flex flex-col">
              <input
                  {...register("weight", {
                    required: "Weight is required",
                    min: { value: 20, message: "Weight must be at least 20 kg" },
                    max: { value: 300, message: "Weight must not exceed 300 kg" },
                  })}
                className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
                placeholder={translations.weight}
              />
              {errors.weight && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>  
            <div className="grid grid-cols-2">
            <div className="flex items-center ">
                <input id="heart_disease" {...register("heart_disease")} type="checkbox" className="w-4 h-4 text-black bg-gray-700 border-gray-300 rounded"/>
                <label htmlFor="heart_disease" className="ms-2 text-sm font-medium text-gray-900 ">{translations.heart_disease}</label>
            </div>
            <div className="flex items-center">
                <input  id="diabetes" 
                {...register("diabetes")}
                type="checkbox"  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded    "/>
                <label htmlFor="diabetes" className="ms-2 text-sm font-medium text-gray-900">{translations.diabetes}</label>
            </div>
            <div className="flex items-center">
                <input  id="hypertension" 
                {...register("hypertension")}
                type="checkbox"  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded    "/>
                <label htmlFor="hypertension" className="ms-2 text-sm font-medium text-gray-900 ">{translations.hypertension}</label>
            </div>
            <div className="flex items-center">
                <input  id="asthma" 
                {...register("asthma")}
                type="checkbox"  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded    "/>
                <label htmlFor="asthma" className="ms-2 text-sm font-medium text-gray-900 ">{translations.asthma}</label>
            </div>
            <div className="flex items-center">
                <input  id="cancer" 
                {...register("cancer")}
                type="checkbox"  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded    "/>
                <label htmlFor="cancer" className="ms-2 text-sm font-medium text-gray-900 ">{translations.cancer}</label>
            </div>
            </div>         
            {isError ? (
              <p className="text-red-500">
                {ErrorCheck && translations.ExistUser}
              </p>
            ) : (
              <p className="text-red-500">{error?.message}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="flex justify-center  bg-dark text-white hover:bg-Secondary transition-all duration-400 items-center gap-3 rounded py-3"
            >
              {isPending ? (
                <>
                  {translations.SigningUp}
                </>
              ) : (
                <>
                  {translations.signup}
                
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
