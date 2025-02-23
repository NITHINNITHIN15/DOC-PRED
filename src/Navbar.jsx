import React from "react";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import "./Navbar.css";
import { Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const isPredictionPage = location.pathname === "/";
  const isDiseasesPage = location.pathname === "/user/allDiseases";
  const isLoginPage = location.pathname ==='/user/loginpage';
  const isSignupPage = location.pathname ==='/user/signuppage';

  const isActive = (path) => location.pathname === path;
  const user = useSelector(selectUser)
  const showCreateAccountButton = ["/","/user/allDiseases"].includes(location.pathname)
  const showCreateProfileButton =["/user/home","/user/doctors","/user/hospitals","/user/about","/user/contact","/user/appointmentpage","/user/profile"].includes(location.pathname);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

   const handleLogout=()=>{
          dispatch(logout());
          navigate("/user/loginpage");
        }

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
        {isPredictionPage ? (
          <nav className="nav-links">
            {/* <Link to="/user/allDiseases" className="nav-link">
              AVAILABLE DISEASES
            </a> */}
          </nav>
        ) : isDiseasesPage ? (
          <nav className="nav-links">
            <Link to="/"  className="nav-link">
              PREDICTION
            </Link>
          </nav>
        ) : isLoginPage || isSignupPage ? (
          <nav className="nav-links">
            {/* <Link to="/"  className="nav-link">
              PREDICTION
            </a>
            <Link to="/user/allDiseases" className="nav-link">
              AVAILABLE DISEASES
            </a> */}
          </nav>
          ): (
          <nav className="nav-links">
            <Link to="/user/home" className={`nav-link ${isActive("/user/home") ? "active" : ""}`}>
              HOME
            </Link>
            <Link to="/user/doctors" className={`nav-link ${isActive("/user/doctors") ? "active" : ""}`}>
              ALL DOCTORS
            </Link>
            {/* <Link to="/user/hospitals" className={`nav-link ${isActive("/user/hospitals") ? "active" : ""}`}>
              FIND BY HOSPITAL
            </a> */}
            <Link to="/user/about" className={`nav-link ${isActive("/user/about") ? "active" : ""}`}>
              ABOUT
            </Link>
            <Link to="/user/contact" className={`nav-link ${isActive("/user/contact") ? "active" : ""}`}>
              CONTACT
            </Link>
          </nav>
        )}
        {showCreateAccountButton && (
           <Link to="/user/loginpage" className="btn btn-primary">
           Create account
         </Link>
        )}
        {showCreateProfileButton &&(
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        )}
        
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ mr: 1 }} />
          <Link to={'/user/appointmentpage'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            My Appointment
          </Link>
        </MenuItem>
        <Divider />
        {user?
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>:''
}
      </Menu>
      </div>
    </header>
    </>
  );
}
