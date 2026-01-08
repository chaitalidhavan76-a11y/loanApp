import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ApplicationModal from "../../components/applicationModal"; 

const loanTypes = [
  "All",
  "Car Loan",
  "Home Loan",
  "Business Loan",
  "Personal Loan",
  "Bike Loan",
  "Credit Card Loan",
  "Gold Loan",
];

const Applications = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const dummyApps = [
      {
        id: "LN-1001", name: "Rohit Sharma", email: "rohit@gmail.com", phone: "9876543210",
        company: "Infosys", jobType: "Salaried", income: 45000,
        amount: 300000, loanType: "Personal Loan", date: "10 Dec 2025",
        status: "Pending", bankName: "HDFC Bank", accountNo: "4567123456", ifsc: "HDFC0001234"
      },
      {
        id: "LN-1002", name: "Amit Verma", email: "amit@gmail.com", phone: "9822334455",
        company: "TCS", jobType: "Salaried", income: 70000,
        amount: 800000, loanType: "Business Loan", date: "09 Dec 2025",
        status: "Approved", bankName: "ICICI Bank", accountNo: "9876321456", ifsc: "ICIC0002211"
      },
      {
        id: "LN-1003", name: "Priya Desai", email: "priya@gmail.com", phone: "9001122334",
        company: "Capgemini", jobType: "Salaried", income: 50000,
        amount: 450000, loanType: "Home Loan", date: "05 Dec 2025",
        status: "Disbursed", bankName: "SBI", accountNo: "8899123445", ifsc: "SBIN0000123"
      },
      {
        id: "LN-1004", name: "Sonal Singh", email: "sonal@gmail.com", phone: "9898989898",
        company: "Amazon", jobType: "Salaried", income: 60000,
        amount: 200000, loanType: "Car Loan", date: "02 Dec 2025",
        status: "Pending", bankName: "Axis Bank", accountNo: "7445523456", ifsc: "UTIB0004567"
      },
      {
        id: "LN-1005", name: "Akshay Patil", email: "akshay@gmail.com", phone: "8800776655",
        company: "Wipro", jobType: "Salaried", income: 55000,
        amount: 600000, loanType: "Credit Card Loan", date: "01 Dec 2025",
        status: "Disbursed", bankName: "Kotak Bank", accountNo: "5566788990", ifsc: "KKBK0001321"
      },
    ];

    setApps(dummyApps);
  }, []);

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.company.toLowerCase().includes(search.toLowerCase());

    const matchesLoanType = filter === "All" || app.loanType === filter;

    return matchesSearch && matchesLoanType;
  });

  return (
    <div className="applications-page">

      <h2 className="page-title">Loan Applications</h2>

      <div className="applications-top">

        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {loanTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </select>

      </div>

      <div className="applications-table-box">
        <table className="applications-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Applicant</th>
              <th>Company</th>
              <th>Loan Amount</th>
              <th>Loan Type</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredApps.map((item, index) => (
              <tr
                key={index}
                className="clickable-row"
                onClick={() => setSelected(item)} 
                style={{ cursor: "pointer" }}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>₹ {item.amount}</td>
                <td>{item.loanType}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {selected && (
        <ApplicationModal
          show={true}
          data={selected}
          onClose={() => setSelected(null)}
        />
      )}

    </div>
  );
};

export default Applications;
