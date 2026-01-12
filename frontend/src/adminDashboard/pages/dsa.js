import { useEffect, useState } from "react";
import {
  fetchSummary,
  fetchPerformance,
  fetchStatus,
  fetchAllDSAs,
  updateDSAStatus,
} from "../../servicesApi/adminApi.js";

const Dsa = () => {
  const [summary, setSummary] = useState({});
  const [performance, setPerformance] = useState([]);
  const [status, setStatus] = useState([]);
  const [dsas, setDsas] = useState([]);

  useEffect(() => {
    fetchSummary().then((res) => setSummary(res.data));
    fetchPerformance().then((res) => setPerformance(res.data));
    fetchStatus().then((res) => setStatus(res.data));
    fetchAllDSAs().then((res) => setDsas(res.data));
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateDSAStatus(id, newStatus);
      // Update local state
      setDsas(dsas.map(dsa => 
        dsa._id === id ? { ...dsa, status: newStatus } : dsa
      ));
      // Refresh performance data as it might change
      fetchPerformance().then((res) => setPerformance(res.data));
      fetchSummary().then((res) => setSummary(res.data));
    } catch (error) {
      console.error("Failed to update DSA status:", error);
      alert("Failed to update DSA status");
    }
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-4 fw-bold">DSA Dashboard</h2>

      {/* KPI CARDS */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Total DSAs</h6>
              <h4>{summary.totalDSAs || 0}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Active DSAs</h6>
              <h4>{summary.activeDSAs || 0}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Applications</h6>
              <h4>{summary.totalApplications || 0}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Total Disbursed</h6>
              <h4 className="text-success">
                ₹{summary.totalDisbursed || 0}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* PERFORMANCE TABLE */}
      <div className="card shadow-sm mb-4">
        <div className="card-header fw-bold">DSA Performance</div>
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>DSA Name</th>
                <th>Applications</th>
                <th>Disbursed Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {performance.length > 0 ? (
                performance.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.totalApplications}</td>
                    <td>₹{item.disbursedAmount}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.status === "active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ALL DSAs TABLE */}
      <div className="card shadow-sm mb-4">
        <div className="card-header fw-bold">All DSAs</div>
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dsas.length > 0 ? (
                dsas.map((dsa) => (
                  <tr key={dsa._id}>
                    <td>{dsa.name}</td>
                    <td>
                      <span
                        className={`badge ${
                          dsa.status === "active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {dsa.status}
                      </span>
                    </td>
                    <td>{new Date(dsa.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        Edit
                      </button>
                      <button 
                        className={`btn btn-sm ${dsa.status === "active" ? "btn-outline-danger" : "btn-outline-success"}`}
                        onClick={() => handleStatusUpdate(dsa._id, dsa.status === "active" ? "inactive" : "active")}
                      >
                        {dsa.status === "active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    No DSAs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* STATUS SUMMARY */}
      <div className="card shadow-sm">
        <div className="card-header fw-bold">Application Status</div>
        <div className="card-body">
          <ul className="list-group">
            {status.map((s, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {s._id}
                <span className="badge bg-primary rounded-pill">
                  {s.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dsa;
