import { useDispatch } from "react-redux";
import { CareerQuery } from "../../services/queries";
import { useEffect } from "react";
import { setCareers } from "../../slices/CareersSlice";

export const useCareers = () => {
  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = CareerQuery();
  useEffect(() => {
    if (data) {
      console.log(data?.data.careers);

      dispatch(setCareers(data.data.careers));
    }
  }, [data]);

  if (isError) {
    console.error("Error fetching FQs:", error);
  }

  return { data, isSuccess, isLoading, isError, error };
};
