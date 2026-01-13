import React from "react";
import ServicePage from "./ServicePages.js";
import studentImg from "../../assets/images/student.jpg"; 

export default function StudentLoan() {
  return (
    <ServicePage
      title="Student Loan"
      description="Affordable education loans for studying in India or abroad—cover tuition, travel, books, and more."
      interest="8.90% onwards"
      image={studentImg}
      applyLink="/studentApply"
      eligibility={[
        "Indian citizen",
        "Confirmed admission to an institute",
        "Co-applicant required",
        "Good academic record",
      ]}
      documents={[
        "Aadhaar / PAN",
        "Admission Letter",
        "10th & 12th Marksheet",
        "Co-applicant Income Proof",
        "Bank Statement",
      ]}
      benefits={[
        "Low interest rates",
        "Flexible tenure up to 15 years",
        "Covers all education expenses",
        "Tax benefits under Section 80E",
      ]}
    />
  );
}
