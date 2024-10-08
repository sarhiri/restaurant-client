import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from '../src/pages/Navbar'
import Home from '../src/pages/Home'
import Menu from '../src/pages/Menu'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Footer from '../src/components/footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
