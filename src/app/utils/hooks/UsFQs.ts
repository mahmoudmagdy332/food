import { useDispatch } from "react-redux";
import { FQsQuery } from "../../services/queries";
import { useEffect } from "react";
import { setQuestions } from "../../slices/FQsSlice";

export const UseFQs = () => {
  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = FQsQuery();
  useEffect(() => {
    if (data) {
      console.log(data?.data);

      dispatch(setQuestions(data.data));
    }
  }, [data]);

  if (isError) {
    console.error("Error fetching FQs:", error);
  }

  return { data, isSuccess, isLoading, isError, error };
};
