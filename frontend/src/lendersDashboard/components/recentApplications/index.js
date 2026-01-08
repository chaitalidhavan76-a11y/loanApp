import React from "react";

const RecentApplications = ({ data }) => {
  return (
    <div className="recent-box">
      <h3 className="recent-title">Recent Applications</h3>

      <table className="recent-table">
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Applicant</th>
            <th>Loan Type</th>
            <th>Loan Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.loan}</td>
              <td>₹ {item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentApplications;
