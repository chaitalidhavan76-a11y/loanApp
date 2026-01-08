import { useState } from "react";

const Applications = () => {
  const [search, setSearch] = useState("");

  const applications = [
    {
      name: "Rahul Sharma",
      loanType: "Personal Loan",
      status: "Pending",
      amount: "₹2,00,000",
    },
    {
      name: "Amit Verma",
      loanType: "Business Loan",
      status: "Approved",
      amount: "₹8,00,000",
    },
    {
      name: "Priya Desai",
      loanType: "Education Loan",
      status: "Disbursed",
      amount: "₹4,50,000",
    },
    {
      name: "Sonal Singh",
      loanType: "Home Loan",
      status: "Rejected",
      amount: "₹25,00,000",
    },
  ];

  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.loanType.toLowerCase().includes(search.toLowerCase()) ||
      app.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-app-wrapper">
      {/* Header */}
      <div className="admin-app-header">
        <h2>Loan Applications</h2>
        <p>Manage and review all loan applications</p>
      </div>

      {/* Search */}
      <div className="admin-app-search">
        <input
          type="text"
          placeholder="Search by name, loan type or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="admin-app-card">
        <table className="admin-app-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Loan Type</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app, index) => (
                <tr key={index}>
                  <td>{app.name}</td>
                  <td>{app.loanType}</td>
                  <td
                    className={`app-status ${app.status
                      .toLowerCase()
                      .replace(" ", "")}`}
                  >
                    {app.status}
                  </td>
                  <td>{app.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
