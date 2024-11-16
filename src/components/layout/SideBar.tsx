
const SideBar = () => {
  return (
    <div className="side-nav-menu min-vh-100 position-fixed d-flex bottom-0 ">

    <div className="nav-tab d-flex flex-column justify-content-between min-vh-100 p-4">
      <div className="links">
        <ul className="list-unstyled overflow-hidden">
            <li className="py-2 position-relative cursor-pointer" >Search</li>
            <li className="py-2 position-relative cursor-pointer" >Categories</li>
            <li className="py-2 position-relative cursor-pointer" >Area</li>
            <li className="py-2 position-relative cursor-pointer" >Ingriedients</li>
            <li className="py-2 position-relative cursor-pointer" >Contact Us</li>
        </ul>
      </div>

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
      <i className="fa-solid fa-align-justify fa-2x open-close-icon"></i>
      <div>
        <i className="fa-solid fa-globe d-block"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>

</div>
  )
}

export default SideBar