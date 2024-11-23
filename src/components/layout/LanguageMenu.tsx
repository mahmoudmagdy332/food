import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguage, useLanguageSelector } from "../../app/slices/languageSlice";




const LanguageMenu = () => {
  const { lang } = useLanguageSelector((state) => state.languageReducer);
  const dispatch = useDispatch();
  const change = (lang: string) => {
    dispatch(changeLanguage(lang));
    
    window.location.reload();
  };
 

  return (
    <>
      <React.Fragment>
      
    
       
            {lang === "en" ? (
              <div
                onClick={() => change("ar")}
                className={`${lang !== "en" && "hidden"} cursor-pointer`}
              >
                عربى
              </div>
            ) : (
              <div
                onClick={() => change("en")}
                className={`${lang === "en" && "hidden"} cursor-pointer`}
              >
                English
              </div>
            )}
       
     
      </React.Fragment>
      <div></div>
      {/* <div className="dropdownLang">
    <div  className="dropdown-divLang z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-32 ">
        <ul className="flex flex-col py-2 text-sm text-gray-700">
          <li className={`${lang==='en'&&'hidden'}`}>
            <button   className={`flex justify-end w-full px-4 py-2 hover:bg-gray-100 `}>English</button>
          </li>
          <li className={`${lang!=='en'&&'hidden'}`}>
          <button  onClick={()=>change('ar')} className={`flex justify-end w-full px-4 py-2 hover:bg-gray-100 `}>عربى</button>
          </li>
        </ul>
      </div>
   </div> */}
    </>
  );
};

export default LanguageMenu;
