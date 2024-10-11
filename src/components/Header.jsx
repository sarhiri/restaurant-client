import door from '../images/food.jpg'


export default function Header() {
  return (
    <div className="sticky flex isolate overflow-hidden text-center bg-gray-900 py-24 sm:py-32 min-h-screen shadow-2xl">
      <img
        alt=""
        src={door}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 bg-gray-600 opacity-50 -z-10"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
     
    </div>
  )
}
