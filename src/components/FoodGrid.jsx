import { Link } from 'react-router-dom';
import appetizer from '../images/app.JPG';
import main from '../images/harira.JPG';
import dessert from '../images/cookie.JPG';
import tea from '../images/tea.JPG';

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
    text: 'Desserts',
  },
  {
    id: 4,
    href: '/menu',
    imageSrc: tea,
    text: 'Drinks',
  },
];

export default function Example() {
  return (
    <div className="bg-white border-b mb-10 shadow-lg">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.href}
              className="group relative border overflow-hidden"
            >
              <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm lg:h-80">
                {/* Product image */}
                <img
                  alt={product.text}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-60 flex items-center justify-center backdrop-blur-lg">
                  <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    {product.text}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Order button */}
      <div className="flex justify-center items-center mb-20">
        <button className="bg-rose-900 hover:bg-rose-200 text-white py-2 px-4 rounded">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
