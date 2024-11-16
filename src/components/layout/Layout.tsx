import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const Layout = () => {
  return (
    <div>
        <SideBar />
        <div className="min-h-screen">
             <Outlet />
        </div>
    </div>
  )
}

export default Layout