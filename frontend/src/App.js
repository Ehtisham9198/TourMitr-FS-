import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './pages/Register'
import Signin from './pages/SignInPage';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/ContactUs';
import About from './pages/Aboutus';
import LocationPage from './pages/LocationPage'
import LocationDropdown from './components/LocationSelect';



function App() {
  return (
     <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Register" element={<Register/>} />
          <Route path="login" element={<Signin/>} />
          <Route path="/location/:location" element={<LocationPage />} />
          <Route path="login" element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </div>

        </div>
  );
}

export default App;
