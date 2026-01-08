import { useState } from "react";

const DSAs = () => {
  const [search, setSearch] = useState("");

  const dsas = [
    {
      name: "Rahul Sharma",
      phone: "9876543210",
      status: "Active",
    },
    {
      name: "Anita Patel",
      phone: "9123456789",
      status: "Pending",
    },
    {
      name: "Rohit Mehta",
      phone: "9988776655",
      status: "Inactive",
    },
    {
      name: "Sneha Iyer",
      phone: "9090909090",
      status: "Active",
    },
  ];

  const filteredDsas = dsas.filter(
    (dsa) =>
      dsa.name.toLowerCase().includes(search.toLowerCase()) ||
      dsa.phone.includes(search) ||
      dsa.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-dsa-wrapper">
      {/* Header */}
      <div className="admin-dsa-header">
        <h2>DSA Management</h2>
        <p>All Direct Selling Agents registered in the system</p>
      </div>

      {/* Search */}
      <div className="admin-dsa-search">
        <input
          type="text"
          placeholder="Search by name, phone or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="admin-dsa-card">
        <table className="admin-dsa-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredDsas.length > 0 ? (
              filteredDsas.map((dsa, index) => (
                <tr key={index}>
                  <td>{dsa.name}</td>
                  <td className="phone">{dsa.phone}</td>
                  <td
                    className={`dsa-status ${dsa.status.toLowerCase()}`}
                  >
                    {dsa.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data">
                  No DSAs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DSAs;
