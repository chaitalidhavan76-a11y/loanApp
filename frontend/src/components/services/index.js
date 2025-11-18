import React, { useState } from "react";


import {
  FaUserAlt,
  FaMoneyCheckAlt,
  FaCar,
  FaHome,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";

const ServicesSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="services">
      <h2>Our Services</h2>

      {/* TOP 3 CARDS */}
      <div className="services-container container">
        <div className="service-card">
          <FaUserAlt className="service-icon" />
          <h3>Personal loan</h3>
          <p>
            Personal loans provide borrowers with flexibility in how they use
            the funds.
          </p>
          <button>Apply now</button>
        </div>

        <div className="service-card">
          <FaMoneyCheckAlt className="service-icon" />
          <h3>Business loan</h3>
          <p>
            Business Loan Services provide financial assistance to businesses
            for various purposes.
          </p>
          <button>Apply now</button>
        </div>

        <div className="service-card">
          <FaCar className="service-icon" />
          <h3>Auto loan</h3>
          <p>
            Auto Loan Services provide financing options for individuals looking
            to purchase a vehicle.
          </p>
          <button>Apply now</button>
        </div>
      </div>

      {/* VIEW MORE BUTTON */}
      {!showMore && (
        <button className="view-more" onClick={() => setShowMore(true)}>
          View more
        </button>
      )}

      {/* BOTTOM 3 CARDS (Appear AFTER the button) */}
      {showMore && (
        <div className="services-container container extra-cards">
          <div className="service-card">
            <FaHome className="service-icon" />
            <h3>Home loan</h3>
            <p>
              Finance your dream home with flexible repayment options and low
              interest.
            </p>
            <button>Apply now</button>
          </div>

          <div className="service-card">
            <FaUniversity className="service-icon" />
            <h3>Education loan</h3>
            <p>
              Covers tuition fees, books, and other educational expenses for
              students.
            </p>
            <button>Apply now</button>
          </div>

          <div className="service-card">
            <FaBriefcase className="service-icon" />
            <h3>Start-up loan</h3>
            <p>
              Funding support for new entrepreneurs and small business owners.
            </p>
            <button>Apply now</button>
          </div>
        </div>
      )}

      {/* VIEW LESS */}
      {showMore && (
        <button className="view-more" onClick={() => setShowMore(false)}>
          View less
        </button>
      )}
    </section>
  );
};

export default ServicesSection;
