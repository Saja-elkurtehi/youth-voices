import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>Youth Voices is dedicated to empowering young individuals to engage in social activism, share their stories, and connect with like-minded individuals.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/learnact" className="text-white">Learn & Act</Link></li>
              <li><Link to="/stories" className="text-white">Stories</Link></li>
              <li><Link to="/" className="text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>Email: contact@youthvoices.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="socials">
              <a href="#" className="text-white mr-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white mr-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white mr-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Subscribe to our Newsletter</h5>
            <form className="form-inline">
              <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 Youth Voices. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
