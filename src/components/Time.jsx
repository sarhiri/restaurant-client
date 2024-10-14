import background from '../images/cilantro.jpg'

export default function Example() {
  

  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center">
        <div className="border">
        <h2 className="text-center font-semibold pt-10 text-red-600">ABOUT</h2>
          <p className=" pb-5 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Hours </p>
        <div className=" pb-10  text-center">
          Monday - Thursday, 12pm - 9pm <br/>
          Friday - Saturday, 12pm - 11pm <br/>
          Sunday, Closed

        </div>
        <div>
          <p>Something goes ere</p>
          <img
        alt=""
        src={background}
        className=" -z-10 h-full w-full object-cover object-right md:object-center blur-extra-light"
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 -z-10"></div>
        </div>
        </div>
      </div>
    </div>
  )
}
