
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'; // Make sure this import is uncommented
import Footer from './Components/Footer';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Testimonial from './Components/Testimonial';
import './App.css';
import BookingPage from './Components/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/testimonial" element={<Testimonial />} /> {/* Ensure this path matches */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
