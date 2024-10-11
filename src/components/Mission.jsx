import bread from '../images/bread.jpg'

export default function Mission(){

    return (
      <>
      <div className="big-div flex lg:flex-row sm:flex-col justify-center py-10 px-10 gap-4 my-10 ">
        {/* Text container */}
        <div className="text-div border p-10">
          <h1 className="text-center p-4">Our Mission</h1>
          <p className="text-center">At Oualili, our mission is to bring the vibrant and authentic flavors of Morocco and North Africa to your table, where every dish is handcrafted with passion and care. We are dedicated to using the finest, freshest ingredients to create homemade meals that celebrate the rich culinary traditions of our culture. Our commitment to quality is reflected in every plate, offering an unforgettable dining experience that honors the art of North African cooking. From our kitchen to your heart, we invite you to savor the warmth, flavors, and hospitality that define Morocco.</p>
        </div>
        {/* Image container */}
        <div className="img-div ">
        
        <img
        alt=""
        src={bread}
        className="relative inset-0 -z-10  object-right "
      />
         
        
        </div>

      </div>
      </>
    )
}