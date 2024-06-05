import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/auth'; 
import LocationDropdown from './LocationSelect';

const Header = () => {
  const [auth, setAuth] = useAuth();

  const LOGOUT = () => {
    localStorage.removeItem('auth');
    setAuth({ user: null, token: "" }); 
  }

  return (
    <div className='navbar flex justify-between items-center py-4 px-9'>
      <div className='brand'>
        <Link to='/' className='text-xl font-bold'>LOGO</Link>
        {auth.user && <LocationDropdown/>}
      </div>
      <div className='links'>
        <NavLink to='/' className='me-3'>Home</NavLink>
        {!auth.user && <NavLink to='/Register' className='me-3'>Register</NavLink>}
        {!auth.user && <NavLink to='/login' className='me-3'>Login</NavLink>}
        {auth.user && <NavLink to='/login' onClick={LOGOUT} className='me-3'>Logout</NavLink>}

      </div>
    </div>
  );
}

export default Header;
