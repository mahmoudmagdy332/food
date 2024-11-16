import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {  myLearningQuery } from "../../services/queries";
import { setMylearnings } from "../../slices/myLearningSlice";

const useMyLearning = ({currentPage}:{currentPage:number}) => {
    const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError ,error,refetch} =myLearningQuery({currentPage:currentPage});

  
  useEffect(() => {
    if (isSuccess) dispatch(setMylearnings(data.data.data.mylearnings));
  }, [data, isSuccess]);

  return { data, isSuccess, isLoading, isError, error,refetch };
}

export default useMyLearning