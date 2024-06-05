import React from 'react';
import { useState, useRef } from 'react';
import "./SignUp.css";
import SignInPage from "./SignInPage";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import Layout from '../components/Layout';

const Register = () => {
  const [email,SetEmail] = useState("");
  const [name,SetName] = useState("");
  const [password,SetPassword] = useState("");
  const [phone,SetPhone] = useState("");
  const [address,SetAddress] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const SignInHandler = () => {
    setSignIn(true);
  }


  const SubmitHandler = async (event) => {
    event.preventDefault();
    setloading(true);
    console.log(name);
    try {
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,phone,address,password}),
      });

      if (response.ok) {
        toast.success("Account created successfully");
        navigate('/login');
      } else {
        toast.error("Failure");
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
    setloading(false);
    SetName("");
    SetPassword("");
    SetPhone("");
    SetEmail("");
    SetAddress(""); 
  };

  return (
    <div>
      {signIn ? (
        <SignInPage />
      ) : (
        <Layout title={'Register'}>
          <form onSubmit={SubmitHandler}>
          <div className="login_box flex justify-center items-center border rounded-xl">
            <div className="text-center p-5">
              <h1 className="text-4xl font-bold pt-1 pb-3">Sign Up</h1>
              <input
                type="text"
                placeholder="Enter your Name"
                className="mt-4 p-2 h-8"
                value={name}
                required
                onChange={(e)=> SetName(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="mt-4 p-2 h-8"
                value={email}
                required
                onChange={(e)=> SetEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="mt-6 p-2 h-8"
                value={password}
                required
                onChange={(e)=> SetPassword(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Enter your Phone"
                className="mt-6 p-2 h-8"
                value={phone}
                onChange={(e)=> SetPhone(e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Enter your Address"
                className="mt-6 p-2 h-8"
                value={address}
                required
                onChange={(e)=> SetAddress(e.target.value)}
              />
              <br />
              <button
                className={`login_button mt-8 h-8 font-bold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >Sign Up
              </button>
              <p className="mt-3">
                Have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer "
                  onClick={SignInHandler}
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
          </form>
          </Layout>
      )}

    </div>
  );
};

export default Register;
