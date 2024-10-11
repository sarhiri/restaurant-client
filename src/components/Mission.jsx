import bread from '../images/bread.jpg'
import tiles from '../images/tiles.jpg';

export default function Mission(){

    return (
      <>
      {/* Tiles beneath the content */}
      {/* <div
        className="relative bottom-0 left-0 right-0 m-10"
        style={{
          backgroundImage: `url(${tiles})`,
          backgroundRepeat: 'repeat-x', // Repeats the image horizontally
          backgroundSize: 'auto 60px', // Ensures the height is 100px
          height: '60px',
          // width: 'auto%', // Takes up the full width of the device
          paddingLeft: '2.5rem', // 10px * 4 (Tailwind's 10 = 2.5rem)
          paddingRight: '2.5rem', // 10px * 4
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', 
        }}
      /> */}
      <div className="big-div flex lg:flex-row sm:flex-col justify-center p-10 gap-4 my-10 border-b shadow-lg ">
        {/* Text container */}
        <div>
        <div className="text-div border p-20 bg-slate-200 h-full w-full">
          <h1 className="text-center p-4 font-semibold text-2xl">Our Mission</h1>
          <p className="text-center text-lg">At Oualili, our mission is to bring the vibrant and authentic flavors of Morocco and North Africa to your table, where every dish is handcrafted with passion and care. We are dedicated to using the finest, freshest ingredients to create homemade meals that celebrate the rich culinary traditions of our culture. Our commitment to quality is reflected in every plate, offering an unforgettable dining experience that honors the art of North African cooking. From our kitchen to your heart, we invite you to savor the warmth, flavors, and hospitality that define Morocco.</p>
          {/* Tiles beneath the content */}
       
        </div>
        
        </div>
        {/* Image container */}
        <div className="img-div ">
        
        <img
        alt=""
        src={bread}
        className="relative inset-0 -z-10 h-full w-full object-cover object-right "
      />
         
        
        </div>
     
      </div>
       {/* Tiles beneath the content */}
       {/* <div
        className="relative bottom-0 left-0 right-0 px-10"
        style={{
          backgroundImage: `url(${tiles})`,
          backgroundRepeat: 'repeat-x', // Repeats the image horizontally
          backgroundSize: 'auto 60px', // Ensures the height is 100px
          height: '60px',
          // width: 'auto%', // Takes up the full width of the device
          paddingLeft: '2.5rem', // 10px * 4 (Tailwind's 10 = 2.5rem)
          paddingRight: '2.5rem', // 10px * 4
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', 
        }}
      /> */}
      </>
    )
}