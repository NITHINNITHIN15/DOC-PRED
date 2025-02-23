import React, { useState } from 'react';
import {auth} from './Firebase';
import { toast } from 'react-toastify';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import SignInGoogle from './SignInGoogle';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import Navbar from '../Navbar';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const dispatch = useDispatch();

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
       console.log("User Logged in Successfully !!")
       toast.success("User Logged in Successfully !!" ,{
        position:"top-center",
        autoClose: 1000,
        onClose: () => navigate("/user/home"),
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
    <Navbar />
    <div className="card-container">
      
      <div className="card">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button className='butbut' type="submit">Login</button>
          
        </form>
        <br />
        <p>Don't have an account? <a href="/user/signuppage  ">Sign up</a></p>
        <SignInGoogle/>
      </div>
    </div>
    </>
  );
};

export default LoginCard;
