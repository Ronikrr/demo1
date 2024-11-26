
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ourservices from './components/services/ourservices';
import Ourwork from './pages/ourwork';
function App() {
  return (
    <>
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Ourservices />} />
          <Route path='/ourwork' element={<Ourwork />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
