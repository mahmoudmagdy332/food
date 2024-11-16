import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { packagesQuery } from "../../services/queries";
import { setPackages } from "../../slices/PackageSLice";

export const UsePackages = (ip:string) => {
  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = packagesQuery(ip);

  useEffect(() => {
    if (data) {
      console.log(data.data);

      dispatch(setPackages(data.data.data));
    }
  }, [data]);

  if (isError) {
    console.error("Error fetching courses:", error);
  }

  return { data, isSuccess, isLoading, isError, error };
};
