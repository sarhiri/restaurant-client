import bread from '../images/bread.jpg'



export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 border-b shadow-lg p-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">


            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">Our Mission</h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Authentic Flavors, Great Quality </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              At Oualili, our mission is to bring the vibrant and authentic flavors of Morocco and North Africa to your table, where every dish is handcrafted with passion and care. We are dedicated to using the finest, freshest ingredients to create homemade meals that celebrate the rich culinary traditions of our culture. Our commitment to quality is reflected in every plate, offering an unforgettable dining experience that honors the art of North African cooking. From our kitchen to your heart, we invite you to savor the warmth, flavors, and hospitality that define Morocco.
              </p>
              <div className="flex justify-center items-center p-20">
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/menu"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ORDER NOW
              </a>
            </div>
              </div>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={bread}
            width={1332}
            height={342}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
