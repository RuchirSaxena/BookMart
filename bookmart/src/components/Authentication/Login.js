import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {TextField} from "@mui/material";
import "./Login.css";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let string = JSON.stringify(userCredential);
        let jsonUser = JSON.parse(string);
        console.log(jsonUser);
        setSuccessMsg(
          "Logged in Successfully, you will be redirected to home page"
        );
        setEmail("");
        setPassword("");
        setErrorMsg("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          setErrorMsg("Please Fill all required fields");
        }
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          setErrorMsg("Email not found");
        }
        if (error.message == "Firebase: Error (auth/wrong-password).") {
          setErrorMsg("Wrong Password");
        }
      });
  };
  return (
    <div className="login">
      <div className="login-ui">
       
      </div>
      <div className="login-container">
        <form className="login-form">
          <p>Login Account</p>

          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
            </>
          )}
          {errorMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
            </>
          )}

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
        
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type="email"
            placeholder="Enter Your Mail"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          {/* <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}

          <button onClick={handleLogin}>Log In</button>
          <div>
            <span>Don't Have an account?</span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
