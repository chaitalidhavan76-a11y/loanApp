import { FiCreditCard, FiTrendingUp, FiClock } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <>
      <h2 className="welcome">Welcome back, Soham 👋</h2>

      {/* ===== Summary Cards ===== */}
      <div className="stats-grid">
        <div className="stat-card">
         <div className="stat-icon blue"><FiCreditCard className="imag"/></div> 
          <div>
            <p className="stat-label">Active Loans</p>
            <h3>2</h3>
          </div>
        </div>

        <div className="stat-card">
         <div className="stat-icon green"><FiTrendingUp className="imag"/></div> 
          <div>
            <p className="stat-label">Total Loan Amount</p>
            <h3>₹ 3,50,000</h3>
          </div>
        </div>

        <div className="stat-card">
         <div className="stat-icon orange"><FiClock className="imag"/></div> 
          <div>
            <p className="stat-label">EMI This Month</p>
            <h3>₹ 12,500</h3>
          </div>
        </div>

        <div className="stat-card">
         <div className="stat-icon purple"><FaRupeeSign className="imag"/></div> 
          <div>
            <p className="stat-label">Credit Score</p>
            <h3>742</h3>
          </div>
        </div>
      </div>

      {/* ===== My Loans ===== */}
      <div className="card">
        <h3 className="card-title">My Loans</h3>

        <table className="loan-table">
          <thead>
            <tr>
              <th>Loan Type</th>
              <th>Lender</th>
              <th>Status</th>
              <th>EMI</th>
              <th>Tenure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Loan</td>
              <td>HDFC Bank</td>
              <td><span className="status approved">Approved</span></td>
              <td>₹ 7,500</td>
              <td>36 Months</td>
            </tr>

            <tr>
              <td>Credit Card</td>
              <td>ICICI Bank</td>
              <td><span className="status pending">Pending</span></td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===== Quick Actions ===== */}
      <div className="quick-actions">
        <button className="action-btn primary">Apply New Loan</button>
        <button className="action-btn">Check Eligibility</button>
        <button className="action-btn">EMI Calculator</button>
      </div>
    </>
  );
};

export default DashboardHome;
