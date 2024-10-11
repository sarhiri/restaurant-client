// src/components/Footer.js
import Tiles from '../components/TileRow'

function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-gray-500 text-white text-center pt-10 flex flex-col gap-3">
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
      <p className="text-xs py-2">Sofia Sarhiri©  All rights reserved.</p>
      {/* <div className="relative bottom-0 w-full">
      <Tiles />
      </div> */}
    </footer>
  );
}

export default Footer;
