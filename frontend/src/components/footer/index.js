import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="footer-logo">
            <div className="logo"><img src={Logo}/></div>
          </div>

          <p className="footer-desc">
            Compare loans from 100+ trusted lenders and find the best rates for your needs.
          </p>

          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

  
        <div className="footer-col">
          <h4>Loan Types</h4>
          <ul>
            <li>Home Loans</li>
            <li>Auto Loans</li>
            <li>Personal Loans</li>
            <li>Business Loans</li>
            <li>Student Loans</li>
          </ul>
        </div>

  
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>How It Works</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

    
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Loan Calculator</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      
      <div className="footer-bottom">
        © 2025 LoanHub. All rights reserved.
        Made with love for better financial futures.
      </div>
    </footer>
  );
};

export default Footer;
