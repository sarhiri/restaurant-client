// src/components/Footer.js

function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-gray-500 text-white text-center py-4">
      <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
