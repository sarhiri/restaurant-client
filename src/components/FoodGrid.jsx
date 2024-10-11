import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import grill from '../images/grill.jpg'
import grill1 from '../images/grill.jpg'
import grill2 from '../images/grill.jpg'
import grill3 from '../images/grill.jpg'
import { Button } from '@headlessui/react';

const images = [
  { src: grill1, text: 'Grill 1' },
  { src: grill2, text: 'Grill 2' },
  { src: grill3, text: 'Grill 3' },
  { src: grill, text: 'Grill 4' },
];

export default function FoodGrid(){
return(
  <>
  <div className="">
        <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 lg:max-w-none md:grid-cols-1 lg:grid-cols-4 m-5 py-20 px-20">
          {images.map((image, index) => (
            <Link key={index} to="/menu" className="relative border overflow-hidden group">
            <img 
              src={image.src} 
              alt={`Food ${index + 1}`} 
              className="w-40 h-50 object-cover transition duration-300 ease-in-out group-hover:blur-sm" 
            />
            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-50 flex justify-center items-center">
              <span className="text-white text-lg font-bold opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                {image.text}
              </span>
            </div>
          </Link>
          ))}
        </div>
        <div>
          <Button />
        </div>
      </div>
  </>
)
}