import background from '../images/moroccan.webp';
import Tiles from '../components/TileRow'

export default function Example() {
  return (
    <div className="relative flex isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Blurred background image */}
      <img
        alt=""
        src={background}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-sm"
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 -z-10"></div>
      

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">About</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      {/* <div className="relative bottom-0 w-full">
      <Tiles />
      </div> */}
    </div>
  );
}
