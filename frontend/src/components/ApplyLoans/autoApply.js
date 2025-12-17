import React, { useState, useEffect } from "react";

const AutoLoanApplication = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "",
    vehiclePrice: "",
    loanAmount: "",
    employmentStatus: "",
    monthlyIncome: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Auto loan application submitted!");
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Auto Loan Application</h1>
      <p className="loan-subtitle">Enter your details to apply for an auto loan</p>

      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullName"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter mobile number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type</label>
          <select
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="scooter">Scooter</option>
          </select>
        </div>

        <div className="form-group">
          <label>Vehicle Price (₹)</label>
          <input
            type="number"
            name="vehiclePrice"
            placeholder="0"
            value={form.vehiclePrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input
            type="number"
            name="loanAmount"
            placeholder="0"
            value={form.loanAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Employment Status</label>
          <select
            name="employmentStatus"
            value={form.employmentStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-Employed</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label>Monthly Income (₹)</label>
          <input
            type="number"
            name="monthlyIncome"
            placeholder="0"
            value={form.monthlyIncome}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default AutoLoanApplication;
