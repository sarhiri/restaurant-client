import spread from '../images/spread.jpg'
import lamp from '../images/lamp.png'

export default function Header() {
  return (
    <div className="sticky flex isolate overflow-hidden text-center bg-gray-900 lg:py-20 sm:py-20 min-h-screen shadow-2xl">
      <img
        alt=""
        src={spread}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-cente blur-extra-light"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50 -z-10"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome</h2> */}
          <h2 className="lg:text-9xl font-bold tracking-tight text-white sm:text-6xl font-arabic">Oualili</h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>

          {/* <div>
          <img
        alt=""
        src={lamp}
        className=" -z-10  object-right "
      />
          </div> */}
          
        </div>
      </div>
    
    </div>
  )
}
