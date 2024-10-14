import cilantro from '../images/cilantro.jpg'

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Position the image off-screen on the left */}
          <div className="relative">
            <img
              alt="Product screenshot"
              src={cilantro}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:relative lg:left-[-350px]" 
              // Use negative left margins to push it off-screen
            />
          </div>

          {/* The text content remains on the right side */}
          <div className="lg:pl-16 lg:pt-4">
            <div className="lg:max-w-lg ">
              <h2 className="text-base font-semibold leading-7 text-red-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our History</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Moroccan Dadas are traditional female cooks, revered for their mastery of Moroccan cuisine, which blends Arab, Berber, Andalusian, and French influences. These women, often trained in royal or wealthy households, pass down generations of culinary knowledge, preparing iconic dishes such as tagines, couscous, and pastilla. Using time-honored techniques, they create meals rich in spices like cumin, saffron, and cinnamon, along with fresh herbs, dried fruits, and preserved lemons. The Dada's cooking is a reflection of Moroccan hospitality and culture, rooted in intricate flavors and the art of slow, thoughtful preparation.
              </p>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
