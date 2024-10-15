import Slider from '../components/Slider'

export default function Example() {
  return (
    <section className="relative isolate  bg-gradient-to-b from-white via-gray-700 to-gray-900 px-10 lg:py-24 sm:py-32 ">
      <div className="mx-auto max-w-2xl lg:max-w-6xl">
{/*       
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 ">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
        </figure> */}
        
        <Slider />
      </div>
    </section>
  )
}
