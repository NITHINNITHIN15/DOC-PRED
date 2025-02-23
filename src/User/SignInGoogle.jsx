import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const SignInGoogle = () => {
  const navigate = useNavigate();

  const googleLogin=async()=>{
    try{
      const provider = new GoogleAuthProvider();
      const result= await signInWithPopup(auth, provider);
        localStorage.setItem('token', result.user.accessToken);
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/user/home');
    }
   catch(error){
    console.log('error')
   }
  }

  return (
    <div>
      <p>--Or continue with--</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={googleLogin}
      >

        <img src={require("../Images/google.png")} width={"60%"} alt=""/>
      </div>
    </div>
  );
};

export default SignInGoogle;
