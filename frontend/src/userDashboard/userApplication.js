const MyApplications = () => {
  return (
    <div className="applications-card">
      <table className="applications-table">
        <thead>
          <tr>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Lender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home Loan</td>
            <td>₹25,00,000</td>
            <td className="status pending">Pending</td>
            <td>HDFC Bank</td>
          </tr>

          <tr>
            <td>Personal Loan</td>
            <td>₹5,00,000</td>
            <td className="status approved">Approved</td>
            <td>ICICI Bank</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
