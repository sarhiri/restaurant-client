import lamp from '../images/icons8-genie-lamp-50.png';
import tiles from '../images/tile2.jpg'

function Footer() {
  return (
    <div className="relative shadow-lg">
      <div
        className="relative top-0 left-0 right-0 px-10"
        style={{
          backgroundImage: `url(${tiles})`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 40px',
          height: '40px',
          // paddingLeft: '2.5rem',
          // paddingRight: '2.5rem',
          // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        }}
      />
      {/* Footer content */}
      <footer className="w-full bg-gray-900 text-white text-center py-5 flex flex-col gap-3 ">
        <div className="flex items-center justify-center">
          <div className="flex flex-shrink-0 mr-2"> {/* Added margin to the right for spacing */}
            <img
              alt="Restaurant logo"
              src={lamp}
              className="h-10 w-auto"
            />
          </div>
          <p className='font-arabic text-4xl'>Oualili</p>
        </div>
        <div className="flex flex-row justify-center gap-5">
          <p>HOME</p>
          <p>MENU</p>
          <p>ORDER</p>
          <p>GIFT CARDS</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
          <p>PRESS</p>
        </div>
        <p className="text-xs py-2">Sofia Sarhiri© All rights reserved.</p>
      </footer>
      {/* Tiles beneath the content */}
      
    </div>
  );
}

export default Footer;
