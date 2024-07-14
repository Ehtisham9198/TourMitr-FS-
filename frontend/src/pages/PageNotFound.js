import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h1 className='Not mt-28'>404</h1>
          <h1 className='text-3xl text-center'>Oops! Page Not Found</h1>
          <Link to='/' className='Go text-center mt-3'>Go Back</Link>
        </div>
    );
  }

export default PageNotFound;
