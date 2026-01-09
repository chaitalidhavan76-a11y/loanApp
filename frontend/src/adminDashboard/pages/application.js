import { useEffect, useState } from "react";
import axios from "axios";

const Applications = () => {
  const [search, setSearch] = useState("");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      const res = await axios.get(
        "http://localhost:5000/api/admin/All-Home-Application",
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      setApplications(res.data.data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      app.loanType?.toLowerCase().includes(search.toLowerCase()) ||
      app.status?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-app-wrapper">
      <div className="admin-app-header">
        <h2>Loan Applications</h2>
        <p>Manage and review all loan applications</p>
      </div>

      <div className="admin-app-search">
        <input
          type="text"
          placeholder="Search by name, loan type or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
            {loading ? (
              <tr>
                <td colSpan="4" className="no-data">
                  Loading applications...
                </td>
              </tr>
            ) : filteredApplications.length > 0 ? (
              filteredApplications.map((app) => (
                <tr key={app._id}>
                  <td>{app.fullName}</td>
                  <td>{app.loanType.toUpperCase()}</td>
                  <td
                    className={`app-status ${app.status
                      .toLowerCase()
                      .replace(" ", "")}`}
                  >
                    {app.status}
                  </td>
                  <td>₹{app.loanAmount.toLocaleString("en-IN")}</td>
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
