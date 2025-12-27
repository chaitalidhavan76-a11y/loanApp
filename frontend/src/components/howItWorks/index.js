import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import how1 from "../../assets/images/how1.avif"
import how2 from "../../assets/images/how2.jpg"
import how3 from "../../assets/images/how3.avif"





const StepsSection = () => {
  return (
    <section className="steps">
      <div className="container">

        <h2 className="steps-title">
          Get Your Loan in <br />
          <span>3 Easy Steps</span>
        </h2>

        <p className="steps-subtitle">
          Get matched with the perfect loan in minutes, not days
        </p>

        <div className="steps-container">

        
          <div className="step-card">
            <div className="step-icon purple">
              <img src={how1}/>
            </div>

            <h3>Tell Us Your Needs</h3>
            <p>
              Fill out a simple form with your loan requirements and financial
              information.
            </p>
          </div>

    
          <div className="step-card">
            <div className="step-icon blue">
              <img src={how2}/>
            </div>

            <h3>Compare Offers</h3>
            <p>
              Review personalized loan offers from multiple lenders, all in one
              place.
            </p>
          </div>

    
          <div className="step-card">
            <div className="step-icon green">
              <img src={how3}/>
            </div>

            <h3>Choose & Apply</h3>
            <p>
              Select the best offer and complete your application directly with
              the lender.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsSection;
