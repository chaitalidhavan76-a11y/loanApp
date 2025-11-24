import React, { useState } from "react";

const HomeLoanApplication = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    employmentStatus: "",
    annualIncome: "",
    loanAmount: "",
    loanTenure: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your home loan application has been submitted successfully!");
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Home Loan Application</h1>
      <p className="loan-subtitle">Fill in your details to proceed with your home loan request</p>

      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="Enter your full name"
            value={form.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="example@mail.com"
            value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter mobile number"
            value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Residential Address</label>
          <input type="text" name="address" placeholder="Enter your address"
            value={form.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Employment Status</label>
          <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-employed</option>
            <option value="business">Business</option>
            <option value="retired">Retired</option>
          </select>
        </div>

        <div className="form-group">
          <label>Annual Income (₹)</label>
          <input type="number" name="annualIncome" placeholder="0"
            value={form.annualIncome} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input type="number" name="loanAmount" placeholder="0"
            value={form.loanAmount} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Preferred Loan Tenure</label>
          <select name="loanTenure" value={form.loanTenure} onChange={handleChange} required>
            <option value="">Select tenure</option>
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20">20 Years</option>
            <option value="25">25 Years</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default HomeLoanApplication;