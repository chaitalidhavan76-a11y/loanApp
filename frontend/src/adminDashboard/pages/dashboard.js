const Dashboard = () => {
    return (
        <div className="admin-dashboard-wrapper">

            {/* Header */}
            <div className="admin-dashboard-header">
                <h2>Admin Dashboard</h2>
                <p>Quick overview of platform activity</p>
            </div>

            {/* Stats Cards */}
            <div className="admin-stats-grid">
                <div className="admin-stat-card users">
                    <p>Total Users</p>
                    <h3>1,245</h3>
                </div>

                <div className="admin-stat-card applications">
                    <p>Applications</p>
                    <h3>520</h3>
                </div>

                <div className="admin-stat-card approved">
                    <p>Approved Loans</p>
                    <h3>312</h3>
                </div>

                <div className="admin-stat-card revenue">
                    <p>Revenue</p>
                    <h3>₹12.4L</h3>
                </div>
            </div>

            {/* Recent Applications */}
            <div className="admin-section-card">
                <h3>Recent Applications</h3>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Loan Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Rohit Sharma</td>
                            <td>Personal Loan</td>
                            <td>₹3,00,000</td>
                            <td className="stat pending">Pending</td>
                        </tr>
                        <tr>
                            <td>Amit Verma</td>
                            <td>Business Loan</td>
                            <td>₹8,00,000</td>
                            <td className="stat approved">Approved</td>
                        </tr>
                        <tr>
                            <td>Priya Desai</td>
                            <td>Education Loan</td>
                            <td>₹4,50,000</td>
                            <td className="stat disbursed">Disbursed</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Recent Users */}
            <div className="admin-section-card">
                <h3>Recent Users</h3>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Contact</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Neha Singh</td>
                            <td>User</td>
                            <td>neha@gmail.com</td>
                            <td>8097035814</td>
                        </tr>
                        <tr>
                            <td>Raj Patel</td>
                            <td>DSA</td>
                            <td>raj@dsa.com</td>
                            <td>8097035814</td>
                        </tr>
                        <tr>
                            <td>HDFC Bank</td>
                            <td>Lender</td>
                            <td>hdfc@bank.com</td>
                            <td>8097035814</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dashboard;
