import React, { useEffect, useState } from "react";
import { FaFileAlt, FaCheckCircle, FaHourglassHalf, FaMoneyCheck } from "react-icons/fa";
import RecentApplications from "../../components/recentApplications";
import RecentDisbursements from "../../components/recentDisbursements";

export default function Overview() {
  const [applications, setApplications] = useState([]);
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [disbursed, setDisbursed] = useState([]);

  useEffect(() => {
    const dummyApps = [
      { id: "LN-1001", name: "Rohit Sharma", loan: "Personal Loan", amount: 300000, status: "Pending" },
      { id: "LN-1002", name: "Amit Verma", loan: "Business Loan", amount: 800000, status: "Approved" },
      { id: "LN-1003", name: "Priya Desai", loan: "Education Loan", amount: 450000, status: "Disbursed" },
      { id: "LN-1004", name: "Sonal Singh", loan: "Personal Loan", amount: 200000, status: "Pending" },
    ];

    const dummyDisbursements = [
      {
        id: "LN-1003",
        name: "Priya Desai",
        loanType: "Education Loan",
        amount: 450000,
        tenure: 36,
        creditScore: 750,
        income: 65000,
        jobType: "Salaried",
        purpose: "Higher Studies",
        city: "Pune",
        date: "05 Dec 2025",
        commission: "12,500",
        sharedWith: 3,
        interest: 11.2,
        emi: 14890,
        apr: 13.0,
      },
      {
        id: "LN-1005",
        name: "Akshay Patil",
        loanType: "Personal Loan",
        amount: 600000,
        tenure: 48,
        creditScore: 720,
        income: 90000,
        jobType: "Salaried",
        purpose: "Marriage Expenses",
        city: "Mumbai",
        date: "28 Nov 2025",
        commission: "15,800",
        sharedWith: 4,
        interest: 12.5,
        emi: 15890,
        apr: 14.1,
      },
    ];

    setApplications(dummyApps);
    setPending(dummyApps.filter((x) => x.status === "Pending"));
    setApproved(dummyApps.filter((x) => x.status === "Approved"));
    setDisbursed(dummyDisbursements);
  }, []);

  return (
    <div className="overview-page">

      <h2 className="overview-title">Dashboard Overview</h2>
      <p className="overview-subtitle">Quick summary of activity</p>

      <div className="overview-cards">

        <div className="overview-card">
          <div className="icon-box yellow"><FaFileAlt /></div>
          <div>
            <h3>Assigned Leads</h3>
            <p className="number">{applications.length}</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon-box orange"><FaHourglassHalf /></div>
          <div>
            <h3>Pending Review</h3>
            <p className="number">{pending.length}</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon-box green"><FaCheckCircle /></div>
          <div>
            <h3>Approved Loans</h3>
            <p className="number">{approved.length}</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon-box blue"><FaMoneyCheck /></div>
          <div>
            <h3>Disbursed Loans</h3>
            <p className="number">{disbursed.length}</p>
          </div>
        </div>

      </div>

      <div className="section-wrapper">
        <RecentApplications data={applications.slice(-5)} />
      </div>

      <div className="section-wrapper">
        <RecentDisbursements data={disbursed.slice(-5)} />
      </div>

    </div>
  );
}
