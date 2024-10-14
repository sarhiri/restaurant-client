
import biggoog from '../images/google1.png'
import yelp from '../images/yelp.png'
import uber from '../images/uber.png'
import tiles from '../images/tiles.jpg';

const posts = [
  {
    id: 1,
    title: 'This food was amazing!',
    href: '#',
    description:
      'The flavors here are incredible! Every bite transported me to Morocco. The tagine was perfectly cooked, and the spices were spot on. Will definitely be back!',
    author: {
      name: 'Google',
      imageSrc:
        biggoog,
    },
  },
  {
    id: 2,
    title: 'Best Moroccan food EVER!',
    href: '#',
    description:
      'Such an amazing experience! The lamb couscous was so tender and flavorful. You can really taste the care and quality in every dish. Highly recommend!',
    author: {
      name: 'Yelp',
      href: '#',
      imageSrc:
        yelp,
    },
  },
  {
    id: 3,
    title: '5/5 Stars!!!!',
    href: '#',
    description:
      'Authentic Moroccan food at its finest! The staff was friendly, and the atmosphere was warm and inviting. The mint tea and pastries were a perfect finish!',
    author: {
      name: 'Uber Eats',
      href: '#',
      imageSrc:
        uber,
    },
  },
  // More posts...
]

export default function Rating() {
  return (
    <div className="bg-white py-2 pb-20">
      
      <div className="mx-auto max-w-8xl px-20  lg:px-20">
        {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-b bg-white border-gray-200 py-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <article key={post.id} 
            className="flex max-w-xl flex-col items-center justify-between shadow-md border rounded-lg py-10 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">

              <div className="relative mt-8 flex flex-col items-center gap-x-4">
                              <img alt="" src={post.author.imageSrc} className="h-40 w-40 rounded-full " />
                            
                              <div className="text-md leading-6">
                                <p className="font-bold text-gray-900 py-4">
                                    {post.author.name}
                                </p>
                              </div>

                            </div>

              <div className="group relative text-center items-center">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 pb-10 px-10">{post.description}</p>

                <div className="flex justify-center">
                <svg
               fill="#111827" 
               height="100px" 
               width="100px" 
               version="1.1" 
               id="Icons" 
               xmlns="http://www.w3.org/2000/svg" 
               xmlnsXlink="http://www.w3.org/1999/xlink" 
               viewBox="0 0 32 32" 
               xmlSpace="preserve" 
               stroke="#000000"
               >
                <g> 
                  <path d="M23,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1c-1.3,1.3-3,2.1-5,2.1c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9 C28,11.2,25.8,9,23,9z"></path> <path d="M9,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1C8.7,20.2,7,21,5,21c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9 C14,11.2,11.8,9,9,9z"></path> 
                  </g> 
              </svg>
              </div>
              </div>
              
              
              


            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
