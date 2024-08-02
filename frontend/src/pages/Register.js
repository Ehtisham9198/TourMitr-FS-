import React from 'react';
import { useState, useRef } from 'react';
import "./SignUp.css";
import SignInPage from "./SignInPage";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import Layout from '../components/Layout';

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [interests, setInterests] = useState([]);
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SignInHandler = () => {
    setSignIn(true);
  };

  const toggleInterest = (category) => {
    setInterests(prevInterests =>
      prevInterests.includes(category)
        ? prevInterests.filter(interest => interest !== category)
        : [...prevInterests, category]
    );
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, contact, address, password, interests }),
      });

      if (response.ok) {
        toast.success("Account created successfully");
        navigate('/login');
      } else {
        toast.error("Failure");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
    setName("");
    setPassword("");
    setPhone("");
    setEmail("");
    setAddress("");
    setInterests([]);
  };

  const categories = [
    "Hiking", "Park", "Historical Place", "Museum", "Beach",
    "Art and Culture", "Wildlife", "Shopping", "Food and Drink",
    "Entertainment", "Nature", "Spiritual", "Water Activities",
    "Cultural Experiences", "Photography Spots"
  ];
  const majorCities = [
    'Agra','Amritser','Bhubaneswar','Lucknow','Hydrabad','Bangluru','Delhi','Jaipur','Kolkata','Mumbai','Other'];
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
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="mt-4 p-2 h-8"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="mt-6 p-2 h-8"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Enter your Phone"
                  className="mt-6 p-2 h-8"
                  value={contact}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <br />
                <select
                  className="mt-6 p-2 h-10"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                >
                  <option value="" disabled>Select your city</option>
                  {majorCities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <br />
                <div className="categories mt-4">
                  <h3 className="text-lg font-semibold mb-2">Your interests:</h3>
                  <div className="categories-container">
                    {categories.map(category => (
                      <button
                        key={category}
                        type="button"
                        className={`category ${interests.includes(category) ? 'selected' : ""}`}
                        onClick={() => toggleInterest(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className={`login_button mt-8 h-8 font-bold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  Sign Up
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
