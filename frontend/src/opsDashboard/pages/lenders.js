const Lenders = () => {
  return (
    <div className="page">
      <h2>Lenders</h2>

      <table>
        <thead>
          <tr>
            <th>Lender</th>
            <th>Applications</th>
            <th>Approved</th>
            <th>Disbursed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HDFC</td>
            <td>120</td>
            <td>90</td>
            <td>₹50L</td>
          </tr>
          <tr>
            <td>ICICI</td>
            <td>80</td>
            <td>55</td>
            <td>₹32L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Lenders;
