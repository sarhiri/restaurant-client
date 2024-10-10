
// https://tailwindui.com/components/marketing/sections/feature-sections 

export default function Grid() {
  return (
    <div className="">
      <div className="flex p-15" data-testid="columns">
      {/* First Column */}
      <div className="w-1/2 p-4 relative">
      <div className="text-center">
          <h3 className="text-xl font-semibold" style={{ letterSpacing: "0.01em" }}>
            our restaurant
          </h3>
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <hr className="my-4 border border-gray-300" />

          <a href="tel:+1-212-260-1212" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_f944d2b4f7024cd49be1be455e60f974~mv2.png"
              alt="Call Us"
              className="w-10 h-10"
            />
          </a>

          <a href="#" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_47a642741895415aa3b99cc715d5939f~mv2.png"
              alt="Directions"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-1/2 p-4 bg-rose-300">
        <div className="text-center">
          <h3 className="text-xl font-semibold" style={{ letterSpacing: "0.01em" }}>
            our restaurant
          </h3>
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <hr className="my-4 border border-gray-300" />

          <a href="tel:+1-212-260-1212" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_f944d2b4f7024cd49be1be455e60f974~mv2.png"
              alt="Call Us"
              className="w-10 h-10"
            />
          </a>

          <a href="#" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_47a642741895415aa3b99cc715d5939f~mv2.png"
              alt="Directions"
              className="w-10 h-10"
            />
          </a>
        </div>
        
      </div>
    </div>

    <div className="flex" data-testid="columns">
      {/* First Column */}
      <div className="w-1/2 p-4 relative bg-rose-300">
      <div className="text-center">
          <h3 className="text-xl font-semibold" style={{ letterSpacing: "0.01em" }}>
            our restaurant
          </h3>
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <hr className="my-4 border border-gray-300" />

          <a href="tel:+1-212-260-1212" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_f944d2b4f7024cd49be1be455e60f974~mv2.png"
              alt="Call Us"
              className="w-10 h-10"
            />
          </a>

          <a href="#" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_47a642741895415aa3b99cc715d5939f~mv2.png"
              alt="Directions"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-1/2 p-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold" style={{ letterSpacing: "0.01em" }}>
            our restaurant
          </h3>
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <hr className="my-4 border border-gray-300" />

          <a href="tel:+1-212-260-1212" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_f944d2b4f7024cd49be1be455e60f974~mv2.png"
              alt="Call Us"
              className="w-10 h-10"
            />
          </a>

          <a href="#" className="inline-block mx-2">
            <img
              src="https://static.wixstatic.com/media/8d13be_47a642741895415aa3b99cc715d5939f~mv2.png"
              alt="Directions"
              className="w-10 h-10"
            />
          </a>
        </div>
        
      </div>
    </div>
    </div>
  );
}
