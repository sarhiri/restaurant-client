import tiles from '../images/tile2.jpg';



export default function Hours(){
  return(
    <>
    
    <div className=" m-10 mx-20 flex flex-col p-20 ">
      <div className='border shadow-lg sm:p-20 s:m-10'>
          <h2 className="text-center font-semibold pt-10 text-red-600">ABOUT</h2>
          <p className=" pb-5 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Hours </p>
        <div className=" pb-10  text-center">
          Monday - Thursday, 12pm - 9pm <br/>
          Friday - Saturday, 12pm - 11pm <br/>
          Sunday, Closed

        </div>
        </div>
    </div>
    
    </>
  )
}