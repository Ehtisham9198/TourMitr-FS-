import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import Register from './pages/Register'
import Signin from './pages/SignInPage';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/ContactUs';
import About from './pages/Aboutus';
import LocationPage from './pages/LocationPage'
import Rec from './pages/recommend'
// .ide

function App() {
  return (
     <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="login" element={<Signin/>} />
          <Route path="/location/:location" element={<LocationPage />} />
          <Route path="/login" element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/rec' element={<Rec/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </div>
        </div>
  );
}

export default App;
