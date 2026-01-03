import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          navigate("/admin-login");
          return;
        }

        const res = await axios.get(
          "http://localhost:5000/api/admin/all-users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(res.data.data); // assuming { success, data }
      } catch (err) {
        if (err.response?.status === 403) {
          setError("Access denied. Admins only.");
        } else if (err.response?.status === 401) {
          navigate("/admin-login");
        } else {
          setError("Failed to load users");
        }
      }
    };

    fetchUsers();
  }, [navigate]);

  return (
    <div className="users-page">
      <h1>Our Users</h1>

      {error && <div className="error-text">{error}</div>}

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td data-label="Name">{user.username}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Created At">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
