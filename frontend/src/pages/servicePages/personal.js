import React from "react";
import ServicePage from "./ServicePages";
import personalImg from "../../assets/images/personal.jpg";

export default function PersonalLoan() {
  return (
    <ServicePage
      title="Personal Loan"
      description="Get fast and flexible personal loans to cover your financial needs—no collateral required."
      interest="10.50% onwards"
      image={personalImg}
      applyLink="/personalApply"
      eligibility={[
        "Age: 21–58 years",
        "Minimum salary ₹15,000/month",
        "Employed or self-employed",
        "Good credit score",
      ]}
      documents={[
        "Aadhaar / PAN",
        "6 Months Bank Statement",
        "Salary Slip (last 3 months)",
        "Address Proof",
      ]}
      benefits={[
        "Instant approval",
        "No collateral needed",
        "Flexible EMIs",
        "Minimal documentation",
      ]}
    />
  );
}
