import { useDispatch } from "react-redux";
import { AboutUsQuery } from "../../services/queries";
import { useEffect } from "react";
import { setAboutUs } from "../../slices/AboutusSlice";

export const UseAbout = () => {
  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = AboutUsQuery();
  useEffect(() => {
    if (data) {
      console.log(data?.data);

      dispatch(setAboutUs(data.data));
    }
  }, [data]);

  if (isError) {
    console.error("Error fetching About:", error);
  }

  return { data, isSuccess, isLoading, isError, error };
};
