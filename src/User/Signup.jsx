import React, { useState } from "react";
import { auth, db } from "./Firebase";
import "./SignupPage.css";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import Navbar from "../Navbar";

const SignupCard = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: username,
          email: user.email,
        });
      }
      console.log("User Registered in Successfully !!");
      toast.success("User Registered Successfully !!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="card-container">
      <div className="card">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        
        <br />
        <p>
          Already have an account? <a href="/user/loginpage">Login</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignupCard;
