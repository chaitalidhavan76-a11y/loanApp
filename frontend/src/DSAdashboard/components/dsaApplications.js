
const Applications = () => {
  const applications = [
    {
      name: "Rahul Sharma",
      loanType: "Personal Loan",
      amount: "₹5,00,000",
      status: "Approved",
    },
    {
      name: "Anita Verma",
      loanType: "Home Loan",
      amount: "₹35,00,000",
      status: "Pending",
    },
    {
      name: "Amit Patel",
      loanType: "Business Loan",
      amount: "₹12,00,000",
      status: "Rejected",
    },
    {
      name: "Sneha Iyer",
      loanType: "Auto Loan",
      amount: "₹8,50,000",
      status: "Approved",
    },
  ];

  return (
    <div className="applications-page">
      {/* Header */}
      <div className="applications-header">
        <h2>Applications</h2>
        <p>View and manage all loan applications</p>
      </div>

      {/* Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Loan Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.name}</td>
                <td>{app.loanType}</td>
                <td>{app.amount}</td>
                <td
                  className={
                    app.status === "Approved"
                      ? "approved"
                      : app.status === "Pending"
                      ? "pending"
                      : "rejected"
                  }
                >
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
