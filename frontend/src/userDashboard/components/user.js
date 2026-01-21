import { useEffect, useState } from "react";
import { FiCreditCard, FiTrendingUp, FiClock } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { getDashboardData } from "../../servicesApi/api.js";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    activeLoans: 0,
    totalLoanAmount: 0,
    emiThisMonth: 0,
    creditScore: 0,
  });
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getDashboardData();
        console.log("responses",res)
        if (res.success) {
          setStats(res.data.stats);
          setLoans(res.data.loans);
        }
      } catch (err) {
        console.error("Dashboard fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><FiCreditCard /></div>
          <div>
            <p className="stat-label">Active Loans</p>
            <h3>{stats.activeLoans}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green"><FiTrendingUp /></div>
          <div>
            <p className="stat-label">Total Loan Amount</p>
            <h3>₹ {stats.totalLoanAmount.toLocaleString()}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange"><FiClock /></div>
          <div>
            <p className="stat-label">EMI This Month</p>
            <h3>₹ {stats.emiThisMonth.toLocaleString()}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple"><FaRupeeSign /></div>
          <div>
            <p className="stat-label">Credit Score</p>
            <h3>{stats.creditScore}</h3>
          </div>
        </div>
      </div>

      <div className="usercard">
        <h3 className="usercard-title">My Loans</h3>

        <table className="loan-table">
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.loanType}</td>
                <td>{loan.lender}</td>
                <td><span className={`status ${loan.status}`}>{loan.status}</span></td>
                <td>{loan.emi ? `₹ ${loan.emi}` : "—"}</td>
                <td>{loan.tenure || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardHome;
