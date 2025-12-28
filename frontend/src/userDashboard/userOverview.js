import {
  FaClipboardList,
  FaHourglassHalf,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const UserOverview = () => {
  return (
    <div className="stats-grid">
      {/* Total Loans */}
      <div className="stat-card">
        <div className="icon-box yellow">
          <FaClipboardList />
        </div>
        <div className="stat-content">
          <p className="stat-title">Total Loans</p>
          <h2>4</h2>
        </div>
      </div>

      {/* In Review */}
      <div className="stat-card">
        <div className="icon-box orange">
          <FaHourglassHalf />
        </div>
        <div className="stat-content">
          <p className="stat-title">In Review</p>
          <h2>2</h2>
        </div>
      </div>

      {/* Approved */}
      <div className="stat-card">
        <div className="icon-box green">
          <FaCheckCircle />
        </div>
        <div className="stat-content">
          <p className="stat-title">Approved</p>
          <h2>1</h2>
        </div>
      </div>

      {/* Disbursed */}
      <div className="stat-card">
        <div className="icon-box blue">
          <FaMoneyBillWave />
        </div>
        <div className="stat-content">
          <p className="stat-title">Disbursed</p>
          <h2>1</h2>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
