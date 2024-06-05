import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

// Importing images
import image from '../assets/Khandagiri.webp';
import deras from '../assets/deras.jpg';
import biju from '../assets/biju.jpg';
import Dhauli from '../assets/dhauli.jpg';
import Lingraj from '../assets/lingeaj.jpg';
import sana from '../assets/sanaghagara.jpg';

const locationData = {
  bhubaneswar: {
    name: "Bhubaneswar",
    description: "Welcome to the Land of Temples",
    places: [
      { name: "Khandagiri Caves", description: "An ancient cave", image: image },
      { name: "Deras Dam", description: "A dam and picnic spot...", image: deras },
      { name: "Biju Patnaik Park", description: "A popular park...", image: biju },
      { name: "Dhauli Stupa", description: "A popular Stupa...", image: Dhauli },
      { name: "Sanaghagra waterfall", description: "A charming waterfall...", image: sana },
      { name: "Lingraj temple", description: "A popular and ancient temple...", image: Lingraj },
      // Add more places
    ]
  },
  lucknow: {
    name: "Lucknow",
    description: "Lucknow is known for its rich cultural heritage...",
    places: [
        { name: "Khandagiri Caves", description: "An ancient cave", image: image },
        { name: "Deras Dam", description: "A dam and picnic spot...", image: deras },
        { name: "Biju Patnaik Park", description: "A popular park...", image: biju },
    ]
  },
  agra: {
    name: "Agra",
    description: "Agra is famous for the Taj Mahal...",
    places: [
        { name: "Khandagiri Caves", description: "An ancient cave", image: image },
        { name: "Deras Dam", description: "A dam and picnic spot...", image: deras },
        { name: "Biju Patnaik Park", description: "A popular park...", image: biju },
    ]
  }
};

const LocationPage = () => {
  const { location } = useParams();
  const [data, setData] = useState({ name: "", description: "", places: [] });

  useEffect(() => {
    if (locationData[location]) {
      setData(locationData[location]);
    } else {
      setData(null);
    }
  }, [location]);

  if (!data) {
    return <div className="text-center text-red-600 mt-10">Location not found</div>;
  }

  return (
    <Layout title={data.name}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4  text-center">{data.name}</h1>
        <p  className="mb-6 font-bold text-red-700 text-center">{data.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Places to Visit:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.places.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center">
              {place.image && (
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-64 object-cover mb-4 rounded-md" 
                />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LocationPage;
