import lamp from '../images/icons8-genie-lamp-50.png';

function Footer() {
  return (
    <div className="relative shadow-lg">
      {/* Footer content */}
      <footer className="w-full bg-gray-500 text-white text-center py-5 flex flex-col gap-3 ">
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
    </div>
  );
}

export default Footer;
