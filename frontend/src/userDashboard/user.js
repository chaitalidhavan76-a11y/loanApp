import {
    FaClipboardList,
    FaCheckCircle,
    FaHourglassHalf,
    FaMoneyBillWave,
} from "react-icons/fa";
import UserApplications from "./userApplication";
import "./user.css";
import Sidebar from "./sidebar";

const UserDashboard = () => {
    return (

        <div className="user-layout">
            {/* SIDEBAR */}
            <Sidebar />

            <div className="dashboard">
                {/* HERO SECTION */}
                <div className="dashboard-hero">
                    <div className="hero-left">
                        <h2>Hey 👋</h2>
                        <p>
                            Track, manage and compare your loan applications from multiple
                            lenders — all in one place.
                        </p>
                    </div>

                    <div className="hero-cards">
                        <div className="hero-card">
                            <div className="hero-icon blue">
                                <FaClipboardList />
                            </div>
                            <div>
                                <p>Total Loans</p>
                                <h3>4</h3>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-icon orange">
                                <FaHourglassHalf />
                            </div>
                            <div>
                                <p>In Review</p>
                                <h3>2</h3>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-icon green">
                                <FaCheckCircle />
                            </div>
                            <div>
                                <p>Approved</p>
                                <h3>1</h3>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-icon purple">
                                <FaMoneyBillWave />
                            </div>
                            <div>
                                <p>Disbursed</p>
                                <h3>1</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MY LOANS SECTION */}
                <div className="dashboard-section">
                    <div className="section-header">
                        <h3>My Loans</h3>
                        <button className="primary-btn">Apply New Loan</button>
                    </div>

                    <UserApplications />
                </div>

            </div>

        </div>
    );
};

export default UserDashboard;
