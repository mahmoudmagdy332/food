import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdatedUser } from "../app/utils/hooks/useAuth";
import Loader from "../components/common/Loader";
import {
  changeImage,
  updateUser,
  useUserSliceSelector,
} from "../app/slices/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store"; 

import { useLanguageSelector } from "../app/slices/languageSlice";
import { IFormInput } from "../app/type";

const Profile = () => {
  const {
    mutate,
    isPending,
    isSuccess: updateSuccess,
    error,
    isError: isErrorUpdatedUser,
  } = useUpdatedUser();

  const dispatch = useDispatch<AppDispatch>();
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const {user} = useUserSliceSelector((state) => state.userReducer);
  const { handleSubmit, register, formState, reset } =
    useForm<IFormInput>();
  const { errors } = formState;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);

      if (file) {
        setSelectedFile(file);
        dispatch(changeImage(URL.createObjectURL(file)));
      }
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (updated) => {
    let formData: IFormInput = { ...updated };
    if (selectedFile) {
      formData = { ...formData, image: selectedFile };
      console.log("selectedFileselectedFile", selectedFile);
    }
    console.log("Updated Data:", formData);

    mutate(formData);
    if (updateSuccess) {
      dispatch(updateUser(formData));
    }
  };
  useEffect(() => {
    reset({
      name: user?.name,
      phone: user?.phone,
      email: user?.email,
      age:user?.age,
      gender:user?.gender,
      weight:user?.weight,
      cancer:user?.cancer,
      asthma:user?.asthma,
      heart_disease:user?.heart_disease,
      hypertension:user?.hypertension,
      diabetes:user?.diabetes,
      address:user?.address,
    });
  }, [user]);
  if (isPending) {
    return (
      <div className="h-96 flex justify-center items-center">
        <Loader />
      </div>
    );
  }


  return (
    <div className=" w-11/12 lg:w-3/4 m-auto rounded-xl shadow-lg bg-white flex flex-col lg:flex-row items-center">
        
        <div className="flex flex-col w-full gap-8  px-10 py-5">
          <div className="flex flex-col gap-2">
           
            
            {updateSuccess && <p>{translations.SuccessSign}</p>}
          </div>

          <div className='d-flex  justify-content-center'>
                <input type='file' id="file"
                {...register("image")}
                
                className="hidden"
                onChange={(e) => handleImageChange(e)}
               />
                {typeof user?.image === "string" && user?.image?(
                 <div className='relative'>
                  <img src={user.image} className='profile-image'/>
                
                  <i className="fa-regular fa-circle-xmark xmark-image" onClick={()=>dispatch(changeImage(''))}></i>
                 </div>
                ):(
                  <label  htmlFor='file' className='d-flex position-relative flex-column gap-2 align-items-center profile-image'>
                  <i className="fa-regular fa-user"></i> 
                  <p>أختر صورتك</p>
                  
                 </label>
                )}
                   
                   
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
            {isErrorUpdatedUser && (
        <div className="text-red-500 mt-5">{error?.message}</div>
      )}
      {updateSuccess && (
        <div className="text-green-500 mt-5">Update profile Successfull</div>
      )}
            <button
              type="submit"
              disabled={isPending}
              className="flex justify-center  bg-dark text-white hover:bg-Secondary transition-all duration-400 items-center gap-3 rounded py-3"
            >
              {isPending ? (
                <>
                  {translations.loading}
                </>
              ) : (
                <>
                  {translations.Update}
                
                </>
              )}
            </button>
          </form>
        </div>
      </div>
  );
};

export default Profile;
