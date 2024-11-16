import { useDispatch } from "react-redux";
import { categoriesQuery } from "../../services/queries";
import { useEffect } from "react";
import { AppDispatch } from "../../store";
import { setCategories } from "../../slices/categoriesSlice";

const useCategories = () => {
    const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data,error } = categoriesQuery();
  useEffect(() => {
    if (data) 
      dispatch(setCategories(data.data.categoreis));
  }, [data]);


  return { data,error, isLoading };
}

export default useCategories


