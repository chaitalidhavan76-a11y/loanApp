import React from "react";

const loanData = [
  {
    bank: "HDFC Bank",
    rate: "8.5%",
    emi: "₹10,289",
    apr: "9.2%",
    fee: "₹2,500",
    amount: "₹500,000",
    tenure: "60 months",
    best: true,
  },
  {
    bank: "ICICI Bank",
    rate: "8.75%",
    emi: "₹10,412",
    apr: "9.5%",
    fee: "₹3,000",
    amount: "₹500,000",
    tenure: "60 months",
  },
  {
    bank: "SBI",
    rate: "8.4%",
    emi: "₹10,234",
    apr: "8.1%",
    fee: "₹2,000",
    amount: "₹500,000",
    tenure: "60 months",
  },
  {
    bank: "Axis Bank",
    rate: "9%",
    emi: "₹10,537",
    apr: "9.8%",
    fee: "₹3,500",
    amount: "₹500,000",
    tenure: "60 months",
  },
  {
    bank: "Kotak Mahindra",
    rate: "8.9%",
    emi: "₹10,491",
    apr: "9.7%",
    fee: "₹3,200",
    amount: "₹500,000",
    tenure: "60 months",
  },
  {
    bank: "YES Bank",
    rate: "9.25%",
    emi: "₹10,662",
    apr: "10.1%",
    fee: "₹4,000",
    amount: "₹500,000",
    tenure: "60 months",
  },
];

const LoanOffers = () => {
  return (
    <div className="loanOffers">
      <h1>Your Personalized Loan Offers</h1>
      <p>We found 6 loan offers matching your profile</p>


      <div className="offers">
        <div className="cards">
          {loanData.map((item, index) => (
            <div className={`card ${item.best ? "best" : ""}`} key={index}>
              {item.best && <span className="badge">Best Offer</span>}
              <h3>{item.bank}</h3>
              <p className="type">Personal Loan</p>

              <div className="info-row">
                <div>
                  <p className="label">Interest Rate</p>
                  <h4>{item.rate}</h4>
                </div>
                <div>
                  <p className="label">Monthly EMI</p>
                  <h4>{item.emi}</h4>
                </div>
              </div>

              <ul className="details">
                <li><strong>APR:</strong> {item.apr}</li>
                <li><strong>Processing Fee:</strong> {item.fee}</li>
                <li><strong>Loan Amount:</strong> {item.amount}</li>
                <li><strong>Tenure:</strong> {item.tenure}</li>
              </ul>

              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanOffers;
