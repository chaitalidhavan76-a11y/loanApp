import React from "react";
import About from '../../assets/images/Table.png'

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
    
        <div className="about-text">
          <h2>About LoanHub</h2>
          <p>
            LoanHub is a modern and user-friendly loan aggregator platform built
            to simplify the borrowing process for millions of people across India.
            We help users compare different loans, understand eligibility, and
            choose the best financial product without confusion.
          </p>

          <p>
            Our platform offers detailed insights and loan options from multiple
            trusted financial providers — all in one place. Whether you're looking
            for a Home Loan, Business Loan, Auto Loan, Personal Loan, or Student
            Loan, LoanHub provides accurate, updated, and transparent information.
          </p>

          <h3>Our Mission</h3>
          <p>
            To make borrowing simple, transparent, and accessible to every
            individual regardless of their financial background.
          </p>

          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted platform for comparing and applying for
            financial products — empowering users to take control of their
            financial journey.
          </p>
        </div>

 
        <div className="about-image">
          <img src={About} alt="About LoanHub" />
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="why-choose-section">
        <h2>Why Choose LoanHub?</h2>

        <div className="why-grid">
          <div className="why-box">
            <h4>✔ Accurate & Updated Loan Data</h4>
            <p>We compare loan options from verified and trusted financial institutions.</p>
          </div>

          <div className="why-box">
            <h4>✔ Easy & Fast Comparison</h4>
            <p>Compare interest rates, eligibility, and documents in seconds.</p>
          </div>

          <div className="why-box">
            <h4>✔ No Hidden Charges</h4>
            <p>LoanHub is completely transparent with all lenders and partners.</p>
          </div>

          <div className="why-box">
            <h4>✔ Secure & Trusted</h4>
            <p>Your data is protected with bank-level encryption and security.</p>
          </div>
        </div>
      </div>

      {/* HOW LOANHUB WORKS */}
      <div className="how-section">
        <h2>How LoanHub Works</h2>
        <div className="steps-grid">
          <div className="step-box">
            <h3>1. Select Loan Type</h3>
            <p>Choose the loan category that suits your financial need.</p>
          </div>
          <div className="step-box">
            <h3>2. Compare Options</h3>
            <p>Check interest rates, eligibility, and loan terms instantly.</p>
          </div>
          <div className="step-box">
            <h3>3. Apply Easily</h3>
            <p>Submit basic details and get guided assistance for approval.</p>
          </div>
          <div className="step-box">
            <h3>4. Quick Approval</h3>
            <p>Fast-tracked process through verified lenders.</p>
          </div>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="values-section">
        <h2>Our Core Values</h2>

        <ul>
          <li><strong>Integrity:</strong> We provide unbiased and transparent information.</li>
          <li><strong>Accessibility:</strong> Everyone deserves equal access to fair loans.</li>
          <li><strong>Innovation:</strong> Using smart technology to simplify financial decisions.</li>
          <li><strong>Customer-First:</strong> Your needs always come first.</li>
        </ul>
      </div>

    </div>
  );
}
