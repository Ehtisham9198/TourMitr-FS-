import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/auth'; 


const Header = () => {
  const [auth, setAuth] = useAuth();

  const LOGOUT = () => {
    localStorage.removeItem('auth');
    setAuth({ user: null}); 
  }

    return (
      <div className='navbar flex justify-between items-center py-4 px-9 bg-gray-800 text-white'>
        <div className='brand'>
          <Link to='/' className='text-2xl font-bold logo-text'>TourMitr</Link>
        </div>
        <div className='links'>

          {auth.user && <NavLink to='/rec' className='me-3 nav-link'>Find your place</NavLink>}
          <NavLink to='/' className='me-3 nav-link'>Home</NavLink>
          {!auth.user && <NavLink to='/login' className='me-3 nav-link'>Login</NavLink>}
          {!auth.user && <NavLink to='/register' className='me-3 nav-link'>Register</NavLink>}
          {auth.user && <NavLink to='/login' onClick={LOGOUT} className='me-3 nav-link'>Logout</NavLink>}
        </div>
      </div>
    );
  }

export default Header;
