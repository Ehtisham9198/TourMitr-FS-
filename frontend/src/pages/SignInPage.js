import React, { useState, useRef } from 'react';
import './SignUp.css';
import SignUp from "./Register";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Layout from '../components/Layout';
const Signin = () => {

  const EmailInput = useRef();
  const PasswordInput = useRef();
  const [signUp, setSignUp] = useState(false);
  const [isAcc, setisAcc] = useState(true);
  const [incorrectpass, setincorrectpass] = useState(false);
  const [showLoginPage, setshowLoginPage] = useState(true);
  const [UserName, setUserName] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [auth,setAuth]=useAuth();

  const signUpHandler = () => {
    setSignUp(true);
  };

  const submitHandler = async() => {
    setloading(true);
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:EmailInput.current.value,password:PasswordInput.current.value}),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse response body to JSON
        toast.success("Successfully Login");
        setAuth({
          ...auth,
          user: responseData.user,
          token: responseData.token
        });
        localStorage.setItem('auth',JSON.stringify(responseData))
        navigate('/');
      } else {
        toast.error("Incorrect details");
      }
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
    
    EmailInput.current.value = "";
    PasswordInput.current.value = "";
    setloading(false);

  };

  return (
      <>
      {signUp ? (
        <SignUp />
      ) : showLoginPage && ( 
      <Layout title={'login'}>
        <div className="login_box flex justify-center items-center border rounded-xl">
          <div className="text-center p-5">
            <h1 className="text-4xl font-bold pt-2 pb-4">Login</h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="mt-4 p-2 h-8"
              ref={EmailInput}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="mt-6 p-2 h-8"
              ref={PasswordInput}
            />
            <br />
            <button
              className={`login_button mt-7 h-8 font-bold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
              onClick={submitHandler}
            >Sign In
            </button>
            <p className="mt-3">
              Not have an account?{" "}
              <span
                className="text-blue-800 cursor-pointer "
                onClick={signUpHandler}
              >
                Sign up
              </span>
            </p>
            
            {!isAcc && (
              <p className="mt-3.5 text-red-500">
                Account is not found. {" "}Please Sign Up
              </p>
            )}
          </div>
        </div>
        </Layout>
      )}
    
    </>
  );
};

export default Signin;
