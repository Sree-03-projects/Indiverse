import React from 'react';

import instaImg1 from "../assets/instagram 1.jpg";
import instaImg2 from "../assets/instagram 2.jpg";
import instaImg3 from "../assets/instagram 3.jpg";
import instaImg4 from "../assets/instagram 4.jpg";
import instaImg5 from "../assets/instagram 5.jpg";
import instaImg6 from "../assets/instagram 6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer__container">
        {/* Contact Info */}
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>📍 123, London Bridge Street, London</p>
          <p>✉️ support@lebaba.com</p>
          <p>📞 (+012) 3456 789</p>
        </div>

        {/* Company Links */}
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Work With Us</a>
          <a href="#">Our Blogs</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Useful Links */}
        <div className="footer__col">
          <h4>USEFUL LINKS</h4>
          <a href="#">Help</a>
          <a href="#">Track Your Order</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Instagram Section */}
        <div className='footer__col'>
          <h4>INSTAGRAM</h4>
          <div className='instagram__grid'>
            <img src={instaImg1} alt="Instagram 1" className="w-full h-auto" />
            <img src={instaImg2} alt="Instagram 2" className="w-full h-auto" />
            <img src={instaImg3} alt="Instagram 3" className="w-full h-auto" />
            <img src={instaImg4} alt="Instagram 4" className="w-full h-auto" />
            <img src={instaImg5} alt="Instagram 5" className="w-full h-auto" />
            <img src={instaImg6} alt="Instagram 6" className="w-full h-auto" />
          </div>
        </div>
      </footer>

      <div className='footer__bar'>
        Copyright © 2025 by Indiverse. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
