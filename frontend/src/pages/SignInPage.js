import React, { useState, useRef } from 'react';
import './SignUp.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Layout from '../components/Layout';
import LocationPage from './LocationPage';
import Register from './Register';
import StarRating from './StarRating';

const SignIn = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useAuth();
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);

  const SignUpHandler = () => {
    setSignUp(true);
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput.current.value, password: passwordInput.current.value }),
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success('Successfully Logged In');
        setAuth({
          user: responseData.user,
        });

        // setUserId(responseData.user.email);
        // console.log(responseData.user.email) 
        localStorage.setItem('auth', JSON.stringify(responseData));
        navigate('/');
      } else {
        toast.error('Incorrect details');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div>
      {signUp ? (
        <Register />
      ) : (
    <Layout title={'login'}>
      <div className="login_box flex justify-center items-center border rounded-xl">
        <div className="text-center p-5">
          <h1 className="text-4xl font-bold pt-2 pb-4">Login</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter your email"
              className="mt-4 p-2 h-8"
              ref={emailInput}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="mt-6 p-2 h-8"
              ref={passwordInput}
            />
            <br />
            <button
              type="submit"
              className={`login_button mt-7 h-8 font-bold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              Sign In
            </button>
          </form>
          <p className="mt-3">
            Not have an account?{' '}
            <span className="text-blue-800 cursor-pointer" onClick={SignUpHandler}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </Layout> 
      )
    }
  </div>
  );
}



export default SignIn;
