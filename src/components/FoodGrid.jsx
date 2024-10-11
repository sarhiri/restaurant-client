import { Link } from 'react-router-dom'
import appetizer from '../images/app.JPG'
import main from '../images/harira.JPG'
import dessert from '../images/cookie.JPG'
import tea from '../images/tea.JPG'

const products = [
  {
    id: 1,
    href: '/menu',
    imageSrc: appetizer,
    text: 'Appetizers',
   
  },
  {
    id: 2,
    href: '/menu',
    imageSrc: main,
    text: 'Entrees',
    
  },
  {
    id: 3,
    href: '/menu',
    imageSrc: dessert,
    text: 'Dessert',
    
  },
  {
    id: 4,
    href: '/menu',
    imageSrc: tea,
    text: 'Drinks',
    
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
            <Link key={product.id} to={product.href} className="relative border overflow-hidden group"> {/* Wrap each image in Link */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm  lg:aspect-none lg:h-80  ">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                 <div className="relative inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-50 flex justify-center items-center z-20">
                  <span className="text-white text-lg font-bold opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                    {product.text}
                  </span>
                </div>
              </div>
            </Link>

          ))}
        </div>

        
      </div>
      {/* <!-- Using utilities: --> */}
      <div class="flex justify-center items-center mb-20"> 
     <button class="bg-rose-900 hover:bg-rose-200 text-white  py-2 px-4 rounded">
      ORDER NOW
      </button>
</div>
          
    </div>
  )
}
