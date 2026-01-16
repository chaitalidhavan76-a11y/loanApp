const Applications = () => {
  return (
    <div className="page">
      <h2>Loan Applications</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>DSA</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>Home</td>
            <td>₹5,00,000</td>
            <td>Amit DSA</td>
            <td>Pending</td>
            <td>
              <button className="approve">Approve</button>
              <button className="reject">Reject</button>
            </td>
          </tr>

          <tr>
            <td>Neha</td>
            <td>Personal</td>
            <td>₹2,00,000</td>
            <td>Sunita DSA</td>
            <td>Approved</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
