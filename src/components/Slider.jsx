import { useState, useEffect } from 'react';
import pic1 from '../images/slider/slider1.jpg';
import pic2 from '../images/slider/slider2.jpg';
import pic3 from '../images/slider/slider3.jpg';
import pic5 from '../images/slider/slider4.jpg';
import pic6 from '../images/slider/slider5.jpg';

const SimpleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [pic1, pic2, pic3, pic5, pic6];

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">
      {/* Increase the height from h-96 to a larger size */}
      <div className="relative h-[40rem]"> 
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fit" 
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          </div>
        ))}
          {/* Text overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-2">
          <h1 className="text-4xl font-bold mb-4 shadow-sm">Our History</h1>
          <p className="text-lg max-w-1xl px-10">
          Moroccan Dadas are traditional female cooks, revered for their mastery of Moroccan cuisine, which blends Arab, Berber, Andalusian, and French influences. These women, often trained in royal or wealthy households, pass down generations of culinary knowledge, preparing iconic dishes such as tagines, couscous, and pastilla. Using time-honored techniques, they create meals rich in spices like cumin, saffron, and cinnamon, along with fresh herbs, dried fruits, and preserved lemons. The Dada's cooking is a reflection of Moroccan hospitality and culture, rooted in intricate flavors and the art of slow, thoughtful preparation.
          </p>
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={goToPreviousSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={goToNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6"></path>
          </svg>
        </span>
      </button>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-red-500' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default SimpleCarousel;
