import food from '../images/food2.jpeg';
import food2 from '../images/vibes.jpeg';
import { motion } from 'framer-motion';

export default function Example() {
  return (
    <>
      <div className="relative min-h-screen bg-transparent shadow-2xl">
        <img
          alt=""
          src={food}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-extra-light"
        />
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-0 absolute inset-0">
          {/* Text Box 1 */}
          <div className="bg-white aspect-w-1 aspect-h-1 overflow-hidden rounded-sm flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-3xl">Our Restaurant</h1>
              <h3 className="text-2xl">Hours:</h3>
              <p className="mt-2 py-2">Monday - Thursday, 12:00pm - 9pm</p>
              <p className="py-2">Friday - Saturday, 12:00pm - 11pm</p>
              <p className="py-2">Sunday, Closed</p>
            </div>
          </div>

          {/* Empty box 1 */}
          <div className="bg-transparent aspect-w-1 aspect-h-1 overflow-hidden rounded-sm"></div>

          {/* Empty box 2 */}
          <div className="bg-transparent aspect-w-1 aspect-h-1 overflow-hidden rounded-sm"></div>

          {/* Text Box 2 */}
          <div className="bg-white aspect-w-1 aspect-h-1 overflow-hidden rounded-sm flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-3xl">About Us</h1>
              <p className="mt-2">We serve delicious food with a great vibe.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
