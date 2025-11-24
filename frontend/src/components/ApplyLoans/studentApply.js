import React, { useState } from "react";

const StudentLoanApplication = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    institute: "",
    loanAmount: "",
    guardianIncome: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student loan application submitted!");
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Student Loan Application</h1>
      <p className="loan-subtitle">Provide your details to apply for an education loan</p>

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
          <label>Course Name</label>
          <input name="course" placeholder="E.g. B.Tech, MBA"
            value={form.course} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Institute / University</label>
          <input name="institute" placeholder="Institute name"
            value={form.institute} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input type="number" name="loanAmount" placeholder="0"
            value={form.loanAmount} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Guardian Annual Income (₹)</label>
          <input type="number" name="guardianIncome" placeholder="0"
            value={form.guardianIncome} onChange={handleChange} required />
        </div>

        <button className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default StudentLoanApplication;
