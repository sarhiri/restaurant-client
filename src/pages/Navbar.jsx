import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="navbar">


      {/* Links in header  */}
      <div>
      <p>
        <Link to="/">Home</Link>
        </p>
        
      <p> 
        <Link to="/menu">Menu</Link>
        </p> 
        
      <p> 
        <Link to="/about">About</Link>
        </p> 
        
      <p> 
        <Link to="/contact">Contact</Link>
        </p> 
        </div>
    </nav>
  );
 }

 export default Navbar; 

