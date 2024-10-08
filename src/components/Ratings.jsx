const posts = [
  {
    id: 1,
    title: 'This food was amazing!',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    author: {
      name: 'Google',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Best Moroccan food EVER!',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    author: {
      name: 'Yelp',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: '5/5 Stars!!!!',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    author: {
      name: 'Michelin',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Rating() {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-8xl px-20 lg:px-20">
        {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-center justify-between">

              <div className="relative mt-8 flex flex-col items-center gap-x-4">
                              <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                            
                              <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    {post.author.name}
                                </p>
                              </div>

                            </div>

              <div className="group relative text-center">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>


              


            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
