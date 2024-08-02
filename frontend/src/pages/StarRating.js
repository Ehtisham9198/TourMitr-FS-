import React, { useState, useEffect } from 'react';
import './StarRating.css';
import { useAuth } from '../context/auth';

const StarRating = ({ userId, placeId}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [auth, setAuth] = useAuth();
  const fetchAverageRating = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/rating/${placeId}`);
      if (response.ok) {
        const data = await response.json();
        setAverageRating(data.averageRating);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching average rating:', error.message);
    }
  };

  useEffect(() => {
    fetchAverageRating();
  }, [placeId]);

  const handleClick = async (value) => {
    if (!auth) {
      alert("You must be logged in to submit a rating.");
      return;
    }

    try {
      const response = await fetch(`/api/v1/auth/rating`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId :userId, placeId:placeId, rating: value }),
      });

      if (response.ok) {
        setRating(Number(value));
        fetchAverageRating();
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting rating:', error.message);
    }
  };

  return (
    <div className="star-rating" >
      <p>{(averageRating ?? 0).toFixed(1)}</p>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || averageRating) ? 'on' : 'off'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
