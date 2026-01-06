import "../dsa.css";
import { FaFileAlt, FaCheckCircle, FaClock, FaRupeeSign } from "react-icons/fa";

const DsaDashboard = () => {
  return (
    <div className="dsa-container">
      
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Welcome back, Chaitali 👋</h2>
        <p>DSA Partner Dashboard</p>
      </div>

      {/* STATS CARDS */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaFileAlt className="icon blue" />
          <div>
            <h4>Total Applications</h4>
            <h2>128</h2>
          </div>
        </div>

        <div className="stat-card">
          <FaCheckCircle className="icon green" />
          <div>
            <h4>Approved Loans</h4>
            <h2>76</h2>
          </div>
        </div>

        <div className="stat-card">
          <FaClock className="icon orange" />
          <div>
            <h4>Pending</h4>
            <h2>34</h2>
          </div>
        </div>

        <div className="stat-card">
          <FaRupeeSign className="icon purple" />
          <div>
            <h4>Total Commission</h4>
            <h2>₹1,25,000</h2>
          </div>
        </div>
      </div>

      {/* APPLICATIONS TABLE */}
      <div className="table-card">
        <h3>Recent Applications</h3>

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
            <tr>
              <td>Rahul Sharma</td>
              <td>Personal Loan</td>
              <td>₹5,00,000</td>
              <td className="approved">Approved</td>
            </tr>

            <tr>
              <td>Anita Verma</td>
              <td>Home Loan</td>
              <td>₹35,00,000</td>
              <td className="pending">Pending</td>
            </tr>

            <tr>
              <td>Amit Patel</td>
              <td>Business Loan</td>
              <td>₹12,00,000</td>
              <td className="rejected">Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DsaDashboard;
