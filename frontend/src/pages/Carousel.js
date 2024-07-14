import React, { useState, useEffect } from 'react';
import image from '../assets/too.jpeg';
import deras from '../assets/taj.jpg';
import biju from '../assets/temp1.jpg';
const slides = [
  {
    src: image,
    alt: 'Unity in Diversity',
    title: 'Unity in Diversity',
    description: 'Proud Indian Heritage',
  },
  {
    src: deras,
    alt: 'The Taj Mahal',
    title: 'The Taj Mahal',
    description: "India's No 1 tourist Place",
  },
  {
    src: biju,
    alt: 'Biju Patnaik Park',
    title: 'The Rich Culture',
    description: 'India is full of its rich culture',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full rounded-md"
          />
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold">{slide.title}</h2>
            <p className="text-gray-700">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
