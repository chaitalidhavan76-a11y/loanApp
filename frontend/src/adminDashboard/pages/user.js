import { useState } from "react";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      name: "Neha Verma",
      email: "neha@gmail.com",
      contact: "9876543210",
      loanType: "Personal Loan",
    },
    {
      name: "Amit Singh",
      email: "amit@gmail.com",
      contact: "9123456780",
      loanType: "Home Loan",
    },
    {
      name: "Rohit Sharma",
      email: "rohit@gmail.com",
      contact: "9988776655",
      loanType: "Business Loan",
    },
    {
      name: "Priya Desai",
      email: "priya@gmail.com",
      contact: "9090909090",
      loanType: "Education Loan",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.loanType.toLowerCase().includes(search.toLowerCase()) ||
      user.contact.includes(search)
  );

  return (
    <div className="admin-users-wrapper">
      {/* Header */}
      <div className="admin-users-header">
        <h2>Users</h2>
        <p>All registered customers</p>
      </div>

      {/* Search */}
      <div className="admin-users-search">
        <input
          type="text"
          placeholder="Search by name, email, contact or loan type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="admin-users-card">
        <table className="admin-users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Loan Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.loanType}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
