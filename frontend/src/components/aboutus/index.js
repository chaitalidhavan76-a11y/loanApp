import React from "react";
import aboutImg from "../../assets/images/Table.png"; 

const AboutUs = () => {
  return (
    <section className="about">
      <div className="container about-wrapper">

        
        <div className="about-left">
          <img src={aboutImg} alt="About us illustration" />
        </div>

    
        <div className="about-right">
          <h2>About us</h2>

          <p>
            LoanHub – Your trusted financial partner for loans. <br />
            Quick approvals, competitive rates, and personalized solutions
            crafted to meet your unique needs.  
            We empower you to achieve your financial goals with confidence.  
            Apply online today and experience a fast, simple, and secure borrowing process.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
