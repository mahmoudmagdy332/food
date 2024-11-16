import { useDispatch } from "react-redux";
import { settingQuery } from "../../services/queries";
import { useEffect } from "react";
import { AppDispatch } from "../../store";
import { changeLoading, createSetting } from "../../slices/settingSlice";

const useSetting = () => {
    const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data,error } = settingQuery();
  useEffect(() => {
    if (data) 
      dispatch(createSetting(data.data));
      
  }, [data]);
  useEffect(() => {
    console.log('isLoadingisLoadingisLoading',isLoading)
    dispatch(changeLoading(isLoading));
  }, [isLoading]);

  return { data,error, isLoading };
}

export default useSetting


