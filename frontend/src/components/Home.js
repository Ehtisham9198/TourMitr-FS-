import React from 'react';
import Layout from './Layout';
import LocationDropdown from './LocationSelect';
import Carousel from '../pages/Carousel';

const Home = () => {
  return (
    <div>
      <Layout title="Homepage">
        <div className='flex justify-left mt-6 ml-12'>
          <LocationDropdown className="w-full max-w-xs p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mt-16 mx-4 justify-center">
          <Carousel />
        </div>
      </Layout>
    </div>
  );
};

export default Home;