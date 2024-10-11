import tiles from '../images/tiles.jpg';

function Footer() {
  return (
    <div className="relative shadow-lg">
      {/* Tiles above the footer */}
      {/* <div
        className="relative"
        style={{
          backgroundImage: `url(${tiles})`,
          backgroundRepeat: 'repeat-x', // Repeats the image horizontally
          backgroundSize: 'auto 50px', // Ensures the height is 50px
          height: '50px',
          width: '100%', // Takes up the full width of the device
        }}
      /> */}

      {/* Footer content */}
      <footer className="w-full bg-gray-500 text-white text-center py-5 flex flex-col gap-3 ">
        <p>OUALILI</p>
        <div className="flex flex-row justify-center gap-5 ">
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
