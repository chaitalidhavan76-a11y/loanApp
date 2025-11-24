import React from "react";
import ServicePage from "./ServicePages";
import businessImg from "../../assets/images/buisness.jpg"; 

export default function BusinessLoan() {
  return (
    <ServicePage
      title="Business Loan"
      description="Scale your business with instant business loans designed for growth, expansion, and working capital."
      interest="12% onwards"
      image={businessImg}
      applyLink="/businessApply"
      eligibility={[
        "Business running for minimum 1 year",
        "Valid GST number",
        "Minimum turnover ₹12 lakh/year",
        "Age 21–65 years",
      ]}
      documents={[
        "Business Registration",
        "GST Certificate",
        "12 Months Bank Statement",
        "ITR Documents",
        "Aadhaar / PAN",
      ]}
      benefits={[
        "Collateral-free loans",
        "Quick disbursal",
        "Flexible repayment",
        "Suitable for SMEs & startups",
      ]}
    />
  );
}
