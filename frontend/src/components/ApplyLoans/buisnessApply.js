import React, { useState } from "react";

const BusinessLoanApplication = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    annualTurnover: "",
    loanAmount: "",
    businessType: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Business loan application submitted!");
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Business Loan Application</h1>
      <p className="loan-subtitle">Enter details to apply for a business loan</p>

      <form className="loan-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input name="fullName" placeholder="Enter full name"
            value={form.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="example@mail.com"
            value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter mobile number"
            value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Business Name</label>
          <input name="businessName" placeholder="Your business name"
            value={form.businessName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Business Type</label>
          <select name="businessType" value={form.businessType}
            onChange={handleChange} required>
            <option value="">Select</option>
            <option value="sole">Sole Proprietorship</option>
            <option value="partnership">Partnership</option>
            <option value="pvt">Private Limited</option>
            <option value="public">Public Limited</option>
          </select>
        </div>

        <div className="form-group">
          <label>Annual Turnover (₹)</label>
          <input type="number" name="annualTurnover" placeholder="0"
            value={form.annualTurnover} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input type="number" name="loanAmount" placeholder="0"
            value={form.loanAmount} onChange={handleChange} required />
        </div>

        <button className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default BusinessLoanApplication;
