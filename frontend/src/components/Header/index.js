import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import LoginModal from "../auth/login/index.js";
import SignupModal from "../auth/signup/index.js";


const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);

  /* ================= USER SYNC ================= */
  useEffect(() => {
    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(storedUser);
    };

    syncUser();
    window.addEventListener("storage", syncUser);
    window.addEventListener("authChange", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("authChange", syncUser);
    };
  }, []);

  /* ================= CLOSE DROPDOWN ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
    alert("Logged out successfully!");
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="ph-header">
        <div className="ph-container">
          <Link to="/">
            <img src={Logo} alt="logo" className="ph-logo" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="ph-nav">
            <Link to="/">Home</Link>

            <div className="ph-dropdown" ref={dropdownRef}>
              <button
                className="ph-dropbtn"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isOpen && (
                <div className="ph-dropdown-menu">
                  <Link to="/homeLoan" onClick={() => setIsOpen(false)}>
                    Home Loan
                  </Link>
                  <Link to="/personalLoan" onClick={() => setIsOpen(false)}>
                    Personal Loan
                  </Link>
                  <Link to="/autoLoan" onClick={() => setIsOpen(false)}>
                    Auto Loan
                  </Link>
                  <Link to="/studentLoan" onClick={() => setIsOpen(false)}>
                    Student Loan
                  </Link>
                  <Link to="/businessLoan" onClick={() => setIsOpen(false)}>
                    Business Loan
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* HAMBURGER */}
          <div
            className="ph-hamburger"
            onClick={() => setMobileMenu(true)}
          >
            ☰
          </div>

          {/* DESKTOP RIGHT */}
          <div className="ph-right">
            {!user ? (
              <button
                className="ph-login-btn"
                onClick={() => setShowLogin(true)}
              >
                Login / Signup
              </button>
            ) : (
              <>
                <img
                  className="profile-pic"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.username || user.name || "User"
                  )}&background=2563eb&color=fff`}
                  alt="user"
                  onClick={() => navigate("/dashboard")}
                />
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenu(false)}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-header">
              <span>Menu</span>
              <button
                className="close-btn"
                onClick={() => setMobileMenu(false)}
              >
                ✕
              </button>
            </div>

            <nav className="mobile-links">
              <Link to="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>
              <Link to="/personalLoan" onClick={() => setMobileMenu(false)}>
                Personal Loan
              </Link>
              <Link to="/autoLoan" onClick={() => setMobileMenu(false)}>
                Auto Loan
              </Link>
              <Link to="/studentLoan" onClick={() => setMobileMenu(false)}>
                Student Loan
              </Link>
              <Link to="/businessLoan" onClick={() => setMobileMenu(false)}>
                Business Loan
              </Link>
              <Link to="/about" onClick={() => setMobileMenu(false)}>
                About Us
              </Link>
              <Link to="/contact" onClick={() => setMobileMenu(false)}>
                Contact
              </Link>
            </nav>

            <div className="mobile-actions">
              {!user ? (
                <button
                  className="mobile-btn"
                  onClick={() => {
                    setMobileMenu(false);
                    setTimeout(() => setShowLogin(true), 150);
                  }}
                >
                  Login / Signup
                </button>
              ) : (
                <>
                  <button
                    className="mobile-btn"
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenu(false);
                    }}
                  >
                    Dashboard
                  </button>

                  <button
                    className="mobile-btn danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODALS ================= */}
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
