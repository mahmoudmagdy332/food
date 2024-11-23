import { useState } from "react"
import { Link } from "react-router-dom";
import LanguageMenu from "./LanguageMenu";
import Cookies from "js-cookie";
import { useLogout } from "../../app/utils/hooks/useAuth";
const SideBar = () => {
  const [hover,setHover]=useState(false);
  const { refetch } = useLogout();
  const handleLogout = async () => {
    await refetch();
  };
  return (
    <div className={`side-nav-menu min-vh-100 position-fixed d-flex bottom-0 
    ${hover?'start-0':'-start-40'} transition-all ease-linear`}>
    <div  className={`nav-tab  flex-column d-flex
     justify-content-between min-vh-100 p-4   `}>
      <div className="links">
        <ul className="list-unstyled overflow-hidden">
{/* 
            <li className="py-2 position-relative cursor-pointer" >
              <Link to='/search'>
                Search
              </Link>
              
              </li> */}
            <li className="py-2 position-relative cursor-pointer" >
              <Link to='/'>
                Categories
              </Link>
            </li>
            {/* <li className="py-2 position-relative cursor-pointer" >
            <Link to='/area'>
              Area
              </Link>
              </li> */}
            {/* <li className="py-2 position-relative cursor-pointer" >
              <Link to='/ingredients'>
               Ingredients
              </Link>
              
              </li> */}
            <li className="py-2 position-relative cursor-pointer" >
              <Link to='/contact'>
                Contact Us
              </Link>
              </li>
              {!Cookies.get("access_token")?(
                <>
                  <li className="py-2 position-relative cursor-pointer" >
              <Link to='/login'>
                Login
              </Link>
              </li>
              <li className="py-2 position-relative cursor-pointer" >
              <Link to='/sign-up'>
                Sign Up
              </Link>
              </li>
                </>
              ):(
               <>
                   <li className="py-2 position-relative cursor-pointer" >
                  <Link to='/profile'>
                      Profile
                  </Link>
              </li>
               <li className="py-2 position-relative cursor-pointer" >
                  <button onClick={handleLogout}>
                      Logout
                  </button>
                 </li>
               </>
             
              )}
              
        </ul>
      </div>
          <LanguageMenu/>
      <div className="nav-footer">
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-globe"></i>
          </div>

          <div className="footer">
            <p>hanan elzftawy <br/>Reserved.</p>
          </div>
      </div>

    </div>

    <div className="nav-header d-flex flex-column justify-content-between py-4 text-center px-2 bg-white text-black">
      <img src="imgs/logo.png" className="logo"/>
      <i onClick={()=>setHover(!hover)} className="fa-solid fa-align-justify fa-2x open-close-icon"></i>
      <div>
        <i className="fa-solid fa-globe d-block"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>

</div>
  )
}

export default SideBar