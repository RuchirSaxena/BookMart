import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./SignUp.css";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialCartValue = 0;
        console.log(user);

        addDoc(collection(db, "users"), {
          userName: userName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          cart: initialCartValue,
          uid: user.uid,
        })
          .then(() => {
            setSuccessMsg("New User Added Successfully");
            setUserName("");
            setPhoneNumber("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/login");
            }, 4000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          setErrorMsg("Please Fill all required fields");
        }
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setErrorMsg("User already exists");
        }
      });
  };

  return (
    <div>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p>Create Account</p>

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
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Your Mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="password"
            placeholder="Enter Your Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <div>
            <span>Already Have an account?</span>
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
