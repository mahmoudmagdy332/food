import { useEffect, useState } from "react";
import { useLanguageSelector } from "../../slices/languageSlice";

const useLanguage = () => {
    const [baseUrl,setBaseUrl]=useState('https://shamsacademy-backend.wassalha.net/en/api/');
    const {lang}=useLanguageSelector((state)=>state.languageReducer)
    useEffect(() => {
        setBaseUrl(`https://shamsacademy-backend.wassalha.net/${lang}/api/`)
    }, [lang]);
  
    return  baseUrl;
}

export default useLanguage