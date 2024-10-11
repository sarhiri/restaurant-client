import background from '../images/moroccan.webp';
import tiles from '../images/tiles.jpg';

export default function Example() {
  return (
    <div className="relative flex flex-col isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Blurred background image */}
      <img
        alt=""
        src={background}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-sm"
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 -z-10"></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="lg:text-9xl font-bold font-arabic tracking-tight text-white sm:text-9xl text-center">About</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
            {/* Your text here */}
          </p>
        </div>
      </div>

      {/* Tiles beneath the content */}
      {/* <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          backgroundImage: `url(${tiles})`,
          backgroundRepeat: 'repeat-x', // Repeats the image horizontally
          backgroundSize: 'auto 50px', // Ensures the height is 100px
          height: '50px',
          width: '100%', // Takes up the full width of the device
        }}
      /> */}
    </div>
  );
}
