import React from "react";
import homeImg from "../../assets/images/home.jpg";
import ServicePage from "./ServicePages.js";


export default function HomeLoan() {
  return (
    <ServicePage
      title="Home Loan"
      description="Get the best home loan options with low interest rates and flexible repayment plans."
      interest="8.50% onwards"
      image={homeImg}
      applyLink="/homeApply"
      eligibility={[
        "Minimum age: 21 years",
        "Indian Resident",
        "Stable income source",
        "Good credit score",
      ]}
      documents={[
        "Aadhaar / PAN",
        "3 Months Salary Slip",
        "6 Months Bank Statement",
        "Address Proof",
        "Property Documents",
      ]}
      benefits={[
        "Lowest interest rates",
        "Flexible repayment up to 30 years",
        "Quick approval process",
        "Minimum documentation",
        "No hidden charges",
      ]}
    />
  );
}
