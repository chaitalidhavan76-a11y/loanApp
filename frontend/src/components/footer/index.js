import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-col">
          <div className="footer-logo">
            <div className="ph-left">
              <img src={Logo} className="ph-logo" alt="LoanHub" />
            </div>
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
            <li><Link to="/homeLoan">Home Loans</Link></li>
            <li><Link to="/autoLoan">Auto Loans</Link></li>
            <li><Link to="/personalLoan">Personal Loans</Link></li>
            <li><Link to="/businessLoan">Business Loans</Link></li>
            <li><Link to="/studentLoan">Student Loans</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/calculator">Loan Calculator</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 LoanHub. All rights reserved. Made with love for better financial futures.
      </div>
    </footer>
  );
};

export default Footer;
