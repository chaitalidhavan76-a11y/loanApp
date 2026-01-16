import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

import LoginModal from "../auth/login/index.js";
import SignupModal from "../auth/signup/index.js";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  // Sync user state with localStorage and listen for auth changes
  useEffect(() => {
    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(storedUser);
      console.log("User stored variable:", storedUser);
    };

    syncUser(); // Initial load

    // Listen for storage changes (e.g., login in another tab)
    window.addEventListener("storage", syncUser);
    window.addEventListener("authChange", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("authChange", syncUser);
    };
  }, []);

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

  const handleProfile = () => {
    setIsOpen(false);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Update user state
    setUser(null);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new Event("authChange"));
    
    // Navigate to home
    navigate("/");
    
    alert("Logged out successfully!");
  };

  return (
    <>
      <header className="ph-header">
        <div className="ph-container">
          <div className="ph-left">
            <Link to="/">
              <img src={Logo} alt="logo" className="ph-logo" />
            </Link>
          </div>

          <nav className="ph-nav">
            <Link to="/">Home</Link>

            <div className="ph-dropdown" ref={dropdownRef}>
              <button className="ph-dropbtn" onClick={toggleDropdown}>
                Services {isOpen ? <FaChevronUp className="up"/> : <FaChevronDown className="up" />}
              </button>

              {isOpen && (
                <div className="ph-dropdown-menu">
                  <Link 
                    to="/homeLoan" 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    Home Loan
                  </Link>
                  <Link 
                    to="/personalLoan" 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    Personal Loan
                  </Link>
                  <Link 
                    to="/autoLoan" 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    Auto Loan
                  </Link>
                  <Link 
                    to="/studentLoan" 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Loan
                  </Link>
                  <Link 
                    to="/businessLoan" 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    Business Loan
                  </Link>
                </div>
              )}
            </div>

            <Link to="/About">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="ph-right">
            {!user ? (
              <>
                <button
                  className="ph-login-btn"
                  onClick={() => setShowLogin(true)}
                  style={{ marginRight: "10px" }}
                >
                  Login
                </button>
                <button
                  className="ph-login-btn"
                  onClick={() => setShowSignup(true)}
                >
                  Signup
                </button>
              </>
            ) : (
              <div className="user-menu" style={{ position: "relative" }}>
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.username || user.name || "User"
                  )}&background=2563eb&color=fff`}
                  alt="User Avatar"
                  title={user.username || user.name}
                  className="profile-pic"
                  onClick={handleProfile}
                  style={{ cursor: "pointer" }}
                />
                <button
                  onClick={handleLogout}
                  className="logout-btn"
                  style={{
                    marginLeft: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
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