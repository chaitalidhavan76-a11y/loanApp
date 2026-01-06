import { useState } from "react";

const Lenders = () => {
  const [search, setSearch] = useState("");

  const lenders = [
    {
      name: "HDFC Bank",
      loanType: "Home Loan",
      status: "Active",
    },
    {
      name: "Bajaj Finserv",
      loanType: "Personal Loan",
      status: "Active",
    },
    {
      name: "ICICI Bank",
      loanType: "Business Loan",
      status: "Inactive",
    },
    {
      name: "Axis Bank",
      loanType: "Education Loan",
      status: "Active",
    },
  ];

  const filteredLenders = lenders.filter(
    (lender) =>
      lender.name.toLowerCase().includes(search.toLowerCase()) ||
      lender.loanType.toLowerCase().includes(search.toLowerCase()) ||
      lender.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-lenders-wrapper">
      {/* Header */}
      <div className="admin-lenders-header">
        <h2>Lenders</h2>
        <p>Partnered banks and NBFCs</p>
      </div>

      {/* Search */}
      <div className="admin-lenders-search">
        <input
          type="text"
          placeholder="Search by lender name, loan type or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="admin-lenders-card">
        <table className="admin-lenders-table">
          <thead>
            <tr>
              <th>Lender Name</th>
              <th>Loan Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredLenders.length > 0 ? (
              filteredLenders.map((lender, index) => (
                <tr key={index}>
                  <td>{lender.name}</td>
                  <td>{lender.loanType}</td>
                  <td
                    className={`lender-status ${lender.status.toLowerCase()}`}
                  >
                    {lender.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data">
                  No lenders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lenders;
