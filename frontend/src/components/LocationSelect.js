import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationDropdown = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSelection = (event) => {
    setLocation(event.target.value);
    if (event.target.value) {
      navigate(`/location/${event.target.value.toLowerCase()}`);
    }
  };

  return (
    <div className=' justify-center items-center inline-block ml-8'>
      <select 
        value={location} 
        onChange={handleSelection} 
        className="text-black bg-white border border-gray-300 rounded-lg shadow-md px-2 py-1 outline-none focus:ring-2 focus:ring-red-200"
      >
        <option value="">Select a location</option>
        <option value="Agra">Agra</option>
        <option value="Amritsar">Amritsar</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Bhubaneswar">Bhubaneswar</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Mumbai">Mumbai</option>
      </select>
    </div>
  );
};

export default LocationDropdown;
