import React, { useState } from "react";
import {auth} from '../User/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./ADLogin.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SecondaryNavbar from "../SecondaryNavbar";
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const toggleLogin = () => {
    setIsAdmin(!isAdmin);
  };

  const handleSubmit =  async(e) => {
      e.preventDefault();
      dispatch(
        login({ 
          email: email,
          password: password,
          loggedIn:true,
         })
      );
      try {
         await signInWithEmailAndPassword(auth,email,password);
         console.log("Admin Logged in Successfully !!")
         toast.success("Admin Logged in Successfully !!" ,{
          position:"top-center",
          autoClose: 1000,
          onClose: () => navigate("/admin/AdminDashboard"),
         })
      } catch (error) {
          console.log(error.message)
          toast.error(error.message ,{
          position:"top-center"
         })
      }
    };
  

  return (
    <>
    <SecondaryNavbar/>
    <div className="login-container">
      <div className="login-box">
        <h2>
          <span className="highlight">{isAdmin ? "Admin" : "Doctor"}</span> Login
        </h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
            
          <button type="submit" className="log-but">Login</button>
        </form>
        <br />
        <p>
          {isAdmin ? "Doctor Login?" : "Admin Login?"}{" "}
          <span className="toggle-link" onClick={toggleLogin}>
            Click here
          </span>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
