import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="services-container container">
        <div className="service-card">
          <FaUserAlt className="service-icon" />
          <h3>Personal loan</h3>
          <p>
            Personal loans provide borrowers with flexibility in how they use
            the funds.
          </p>
          <Link to="/personalApply">
            <button>Apply now</button>
          </Link>
        </div>

        <div className="service-card">
          <FaMoneyCheckAlt className="service-icon" />
          <h3>Business loan</h3>
          <p>
            Business Loan Services provide financial assistance to businesses
            for various purposes.
          </p>
          <Link to="/businessApply">
            <button>Apply now</button>
          </Link>
        </div>

        <div className="service-card">
          <FaCar className="service-icon" />
          <h3>Auto loan</h3>
          <p>
            Auto Loan Services provide financing options for individuals looking
            to purchase a vehicle.
          </p>
          <Link to="/autoApply">
            <button>Apply now</button>
          </Link>
        </div>
      </div>

      {!showMore && (
        <button className="view-more" onClick={() => setShowMore(true)}>
          View more
        </button>
      )}

      {showMore && (
        <div className="services-container container extra-cards">
          <div className="service-card">
            <FaHome className="service-icon" />
            <h3>Home loan</h3>
            <p>
              Finance your dream home with flexible repayment options and low
              interest.
            </p>
            <Link to="/homeApply">
              <button>Apply now</button>
            </Link>
          </div>

          <div className="service-card">
            <FaUniversity className="service-icon" />
            <h3>Education loan</h3>
            <p>
              Covers tuition fees, books, and other educational expenses for
              students.
            </p>
            <Link to="/studentApply">
              <button>Apply now</button>
            </Link>
          </div>

          <div className="service-card">
            <FaBriefcase className="service-icon" />
            <h3>Start-up loan</h3>
            <p>
              Funding support for new entrepreneurs and small business owners.
            </p>
            <Link to="/apply/startup">
              <button>Apply now</button>
            </Link>
          </div>
        </div>
      )}

      {showMore && (
        <button className="view-more" onClick={() => setShowMore(false)}>
          View less
        </button>
      )}
    </section>
  );
};

export default ServicesSection;
