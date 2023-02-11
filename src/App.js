import React from 'react';
import './Restaurant.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Booking from './Booking';

const Restaurant = () => {
  return (
    <Router>
    <div className="restaurant">
      <header className="header">
        <h1 className="title">Little Lemon</h1>
        <nav className="navigation">
          <ul className="nav-list">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/Booking">Book</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="menu" id="menu">
          <h2>Our Menu</h2>
          <p>Check out our delicious menu options!</p>
        </section>
        <section className="location" id="location">
          <h2>Find Us</h2>
          <p>We're located at 123 Main Street, Anytown USA</p>
        </section>
        <section className="about" id="about">
          <h2>About Us</h2>
          <p>Little Lemon has been serving up the best food in town for over 10 years!</p>
        </section>
        <section className="book" id="book">
          <h2>Book</h2>
          <Link to="/Booking"><button>Book Now</button></Link>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; Little Lemon 2023</p>
      </footer>
    </div>
    <Route path="/booking" component={Booking} />
    </Router>
  );
};

export default Restaurant;