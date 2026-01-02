import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

import LoginModal from "../auth/login";
import SignupModal from "../auth/signup";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(storedUser);
      console.log("user Stored variable as ", storedUser);
    };

    syncUser(); // initial load
    window.addEventListener("authChange", syncUser);

    return () => window.removeEventListener("authChange", syncUser);
  }, []);

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

  const handleProfile = () => {
    navigate("/me");
  };

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
                  <Link to="/homeLoan" className="dropdown-item">
                    Home Loan
                  </Link>
                  <Link to="/personalLoan" className="dropdown-item">
                    Personal Loan
                  </Link>
                  <Link to="/autoLoan" className="dropdown-item">
                    Auto Loan
                  </Link>
                  <Link to="/studentLoan" className="dropdown-item">
                    Student Loan
                  </Link>
                  <Link to="/businessLoan" className="dropdown-item">
                    Business Loan
                  </Link>
                </div>
              )}
            </div>

            <a href="/About">About Us</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="ph-right">
            {!user ? (
              <button
                className="ph-login-btn"
                onClick={() => setShowSignup(true)}
              >
                Signup
              </button>
            ) : (
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.username
                )}&background=2563eb&color=fff`}
                alt="User Avatar"
                title={user.username}
                className="profile-pic"
                onClick={handleProfile}
              />
            )}
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
