import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the icon

const RecommendationPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [userCity, setUserCity] = useState('');
  const [userInterests, setUserInterests] = useState('');
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('auth'));

    if (user && user.user) {
      setUserInterests(user.user.interests.join(', ')); 
      setUserCity(user.user.address); 
    }
  }, []);  

  const fetchRecommendations = async () => {
    if (hasFetched) return; 

    if (!userInterests || !userCity) {
      console.error('User interests or city are missing');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/recommendations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userInterests,
          userCity
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const textResponse = await response.text();
      console.log('Raw Response:', textResponse);

      const recommendationsList = textResponse
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.replace(/^\d+\.\s*/, '').trim());

      setRecommendations(recommendationsList);
      setHasFetched(true); 
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div>
      <Layout title="Homepage">
        <div className="recommendation-container">
          <h2 className="recommendation-title">Get places according to your interest</h2>
          <button
            onClick={fetchRecommendations}
            className="recommend-button"
          >
            Get Suggestion
          </button>
          <ul className="recommendation-list">
            {recommendations.map((place, index) => (
              <li key={index} className="recommendation-item">
                <FaMapMarkerAlt className="recommendation-icon" />
                <span>{place}</span>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default RecommendationPage;
