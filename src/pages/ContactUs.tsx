import { SubmitHandler, useForm } from "react-hook-form";
import { useContuctMutation } from "../app/services/mutation";
import { useLanguageSelector } from "../app/slices/languageSlice";
import { IFormContuctInput } from "../app/type";

const ContactUs = () => {
  const {
    mutate,
    isPending,
    error,
    isError,
    isSuccess
  } = useContuctMutation();
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const { handleSubmit, formState, register, reset } =
  useForm<IFormContuctInput>();

const { errors } = formState;

const onSubmit: SubmitHandler<IFormContuctInput> = (data) => {
  mutate(data, {
    onSuccess: () => {
      reset({ name: "", title: "",phone:"", email: "", message: "" });
    },
  });
};
  return (
    <div className="bg-mainHeader py-20">
     
    <div className=" w-11/12 lg:w-3/4 m-auto rounded-xl shadow-lg bg-white flex flex-col lg:flex-row items-center">
      
      <div className="flex flex-col w-full gap-8  px-10 py-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-dark text-2xl font-bold font-Cardo">
            {translations.contact}
          </h3>
        
          {isSuccess && <p className="text-green-500">{translations.success}</p>}
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
              {...register("title", {
                required: "Title is required",
                maxLength: {
                  value: 20,
                  message: "Name cannot exceed 20 characters",
                },
              })}
              className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
              placeholder={translations.Title}
            />
            {errors.title && (
              <p role="alert" className="text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register("message", {
                required: "message is required",
                maxLength: {
                  value: 200,
                  message: "Name cannot exceed 200 characters",
                },
              })}
              className="w-full border-b border-gray-300 focus:border-dark pb-2 text-dark bg-transparent outline-none transition-colors duration-300"
              placeholder={translations.Message}
            />
            {errors.message && (
              <p role="alert" className="text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

  {isError && (
            <div className="text-red-500 mt-5">{error?.message}</div>
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
                {translations.Submit}
              
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ContactUs