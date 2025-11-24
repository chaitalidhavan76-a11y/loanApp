import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

import LoginModal from "../auth/login";
import SignupModal from "../auth/signup";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="ph-header">
        <div className="ph-container">

          <div className="ph-left">
            <img src={Logo} alt="logo" className="ph-logo" />
          </div>


          <nav className="ph-nav">
            <a href="/">Home</a>

            <div className="ph-dropdown" ref={dropdownRef}>
              <button className="ph-dropbtn" onClick={toggleDropdown}>
                Services {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isOpen && (
                <div className="ph-dropdown-menu">
                  <Link to='/homePage'><a>Home Loan</a></Link>
                  <a>Personal Loan</a>
                  <a>Auto Loan</a>
                  <a>Student Loan</a>
                  <a>Business Loan</a>
                </div>
              )}
            </div>

            <a href="/About">About Us</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="ph-right">
            <button className="ph-login-btn" onClick={() => setShowLogin(true)}>
              Login / Signup
            </button>
          </div>
        </div>
      </header>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSwitch={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Header;
