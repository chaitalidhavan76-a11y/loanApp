import { useState } from "react";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    { name: "Rahul Sharma", loan: "Home Loan", status: "Approved", amount: "₹5,00,000" },
    { name: "Neha Singh", loan: "Personal Loan", status: "Pending", amount: "₹2,00,000" },
    { name: "Amit Verma", loan: "Car Loan", status: "Rejected", amount: "₹6,00,000" },
  ];

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Users</h2>

      {/* KPI */}
      <div className="grid">
        <div className="card"><h4>Total Users</h4><span>1,240</span></div>
        <div className="card"><h4>Active Loans</h4><span>860</span></div>
        <div className="card"><h4>Pending Verifications</h4><span>140</span></div>
      </div>

      {/* Search & Filter */}
      <div className="panel user-controls">
        <input
          className="search"
          placeholder="Search user..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select>
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* User Table */}
      <div className="panel">
        <h3>User Loan Records</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Loan Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.loan}</td>
                <td>{u.amount}</td>
                <td>
                  <span className={`status ${u.status.toLowerCase()}`}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <button className="approve">View</button>
                  <button className="reject">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
