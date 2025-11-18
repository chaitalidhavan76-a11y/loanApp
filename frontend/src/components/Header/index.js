import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

import LoginModal from "../auth/login";
import SignupModal from "../auth/signup";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
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
      <div className="container">
        <header className="header">
          <div className="header-left">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>

          <nav className="header-nav">
            <a href="#home">Home</a>

            <div className="dropdown" ref={dropdownRef}>
              <button className="dropbtn" onClick={toggleDropdown}>
                Services{" "}
                {isOpen ? (
                  <FaChevronUp className="arrow-icon" />
                ) : (
                  <FaChevronDown className="arrow-icon" />
                )}
              </button>

              {isOpen && (
                <div className="dropdown-content">
                  <a onClick={() => setIsOpen(false)}>Home Loan</a>
                  <a onClick={() => setIsOpen(false)}>Personal Loan</a>
                  <a onClick={() => setIsOpen(false)}>Auto Loan</a>
                  <a onClick={() => setIsOpen(false)}>Student Loan</a>
                  <a onClick={() => setIsOpen(false)}>Business Loan</a>
                </div>
              )}
            </div>

            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-right">
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Login / Signup
            </button>
          </div>
        </header>
      </div>

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
