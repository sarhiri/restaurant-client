// src/components/Footer.js

function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-gray-500 text-white text-center py-4 flex flex-col gap-3">
      <p>OUALILI</p>
      <p>124 CONCH ST | BIKINI BOTTOM</p>
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
    </footer>
  );
}

export default Footer;
