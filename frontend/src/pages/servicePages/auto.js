import React from "react";
import ServicePage from "./ServicePages";
import autoImg from "../../assets/images/auto.jpg"; 

export default function AutoLoan() {
  return (
    <ServicePage
      title="Auto Loan"
      description="Drive home your dream car or bike with easy auto loans, low EMIs, and quick approvals."
      interest="9.20% onwards"
      image={autoImg}
      applyLink="/autoApply"
      eligibility={[
        "Age 21–60 years",
        "Stable job or business",
        "Valid driving license",
        "Good repayment history",
      ]}
      documents={[
        "Aadhaar / PAN",
        "Address Proof",
        "Bank Statement (6 months)",
        "Income Proof",
        "Vehicle Quotation",
      ]}
      benefits={[
        "Up to 100% on-road funding",
        "Low EMIs",
        "Quick approval",
        "Flexible tenure",
      ]}
    />
  );
}
