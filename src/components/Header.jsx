import spread from '../images/spread.jpg';
import lamp from '../images/icons8-genie-lamp-150.png';
import {motion} from 'framer-motion'

export default function Header() {
  return (
    <div className="sticky flex isolate overflow-hidden text-center bg-gray-900 lg:py-20 sm:py-20 min-h-screen shadow-2xl">
      <img
        alt=""
        src={spread}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-extra-light"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50 -z-10"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center pt-20">

        
        <motion.div className="mx-auto max-w-2xl lg:mx-0  p-20  flex items-center border-2 shadow-md"
        initial={{ opacity: 0, y: 20 }} // Initial opacity
        animate={{ opacity: 1, y:0 }} // Final opacity
        transition={{ duration: 2 }}> {/* Added flex and items-center */}
          <div className="flex-shrink-0"> {/* Prevents the lamp from shrinking */}
            <img
              alt=""
              src={lamp}
              className=" h-auto w-auto object-center" // Adjust size as needed
            />
          </div>
          <h2 className="lg:text-9xl font-semibold tracking-tight text-white font-arabic hidden sm:block "> {/* Added margin to the left */}
            Oualili
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
