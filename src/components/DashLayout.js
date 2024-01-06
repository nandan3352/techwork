import { Outlet, useNavigate } from 'react-router-dom'
import DashHeader from './DashHeader'
import {useEffect } from "react"

const DashLayout = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id === null) {
      navigate("/");
    }
  }, []);
    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
        </>
    )
}
export default DashLayout