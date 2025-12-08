import React from "react";

const RecentQueries = ({ data }) => {
  return (
    <div className="recent-box">
      <h3 className="recent-title">Recent Queries</h3>

      <table className="recent-table">
        <thead>
          <tr>
            <th>Query ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td className="truncate">{item.message}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentQueries;
