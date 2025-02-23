import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch , useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { selectUser ,logout } from "./features/userSlice";
import { Button } from "@mui/material";

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  

  const isActive = (path) => location.pathname === path;
  

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin");
  };

  return (<>
    <header className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://t4.ftcdn.net/jpg/04/75/28/15/360_F_475281584_SYyvgPEeRwjS08YunQVFCWVLtSY54xox.jpg"
            alt="Logo"
            className="logo"
          />
          <span>MediPredict</span>
        </Link>
        
          <nav className="nav-links">
            <Link to="/admin/AdminDashboard" className={`nav-link ${isActive("/admin/AdminDashboard") ? "active" : ""}`}>
              DASHBOARD
            </Link>
            <Link to="/admin/AdminAppointment" className={`nav-link ${isActive("/admin/AdminAppointment") ? "active" : ""}`}>
              APPOINTMENTS
            </Link>
            <Link to="/admin/AdminAddDoc" className={`nav-link ${isActive("/admin/AdminAddDoc") ? "active" : ""}`}>
              ADD DOCTORS
            </Link>
            <Link to="/admin/AdminDocList" className={`nav-link ${isActive("/admin/AdminDocList") ? "active" : ""}`}>
              DOCTOR LIST
            </Link>

            {user ? <Button onClick={handleLogout} variant="contained" color='primary' className="btn btn-primary">Logout</Button> : ""}
          </nav>
        
      </div>
    </header>
    </>
  );
}
