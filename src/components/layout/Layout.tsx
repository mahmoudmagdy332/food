import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import { useDispatch } from "react-redux";
import { changeLanguage, useLanguageSelector } from "../../app/slices/languageSlice";
import { useEffect } from "react";
import useSetting from "../../app/utils/hooks/useSetting";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import Loader from "../common/Loader";
import Cookies from "js-cookie";
import { useProfile } from "../../app/utils/hooks/useAuth";
const Layout = () => {
  const { lang } = useLanguageSelector((state) => state.languageReducer);
  const { loading } = useSettingSliceSelector((state) => state.settingReducer);
  const { error } = useSetting();
  const dispatch = useDispatch();
  const { refetch } = useProfile();
  useEffect(() => {
    const language = localStorage.getItem("lang");

    if (Cookies.get("access_token")) {
      refetch();
    }
    if (language) {
      dispatch(changeLanguage(language));
    }
  }, []);
  useEffect(() => {
    if (lang === "ar") document.documentElement.dir = "rtl";
    else document.documentElement.dir = "ltr";
  }, [lang]);
  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  return (
    <div>
        <SideBar />
    
        <div className=" ms-20">
             <Outlet />
        </div>
    </div>
  )
}

export default Layout