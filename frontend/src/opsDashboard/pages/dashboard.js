const Dashboard = () => {
  return (
    <div className="page">
      <h2>Dashboard Overview</h2>

      {/* KPI Cards */}
      <div className="grid">
        <div className="card">Total Users <span>1,240</span></div>
        <div className="card">Total Applications <span>510</span></div>
        <div className="card">Approved <span>320</span></div>
        <div className="card">Pending <span>140</span></div>
        <div className="card">Rejected <span>50</span></div>
        <div className="card">Total Disbursed ₹ <span>1.2 Cr</span></div>
      </div>

      {/* OPS workload */}
      <div className="panel">
        <h3>OPS Today’s Work</h3>
        <ul>
          <li>12 applications pending verification</li>
          <li>7 waiting for lender assignment</li>
          <li>5 ready for approval</li>
          <li>3 flagged for document issues</li>
        </ul>
      </div>

      {/* Recent Applications */}
      <div className="panel">
        <h3>Latest Loan Applications</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Loan</th><th>Amount</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Rahul</td><td>Home</td><td>₹5L</td><td>Pending</td></tr>
            <tr><td>Neha</td><td>Personal</td><td>₹2L</td><td>Approved</td></tr>
            <tr><td>Amit</td><td>Car</td><td>₹6L</td><td>Rejected</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
