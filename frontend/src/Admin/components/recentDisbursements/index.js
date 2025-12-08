import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function RecentDisbursements({ data }) {
  return (
    <div className="offer-list-box">
      {data.length === 0 ? (
        <p className="no-data">No disbursements yet</p>
      ) : (
        data.map((item, index) => (
          <div className="offer-card" key={index}>

            <div className="offer-top">
              <div>
                <h3 className="offer-name">{item.name}</h3>
                <p className="offer-sub">
                  {item.loanType} • ₹{item.amount.toLocaleString()} • {item.tenure} months
                </p>
                <p className="offer-small">
                  Credit Score: <span className="credit-green">{item.creditScore}</span> 
                  &nbsp; Income: ₹{item.income}/mo &nbsp; {item.jobType}
                </p>
              </div>

              <div className="status-badge">
                <FaCheckCircle /> Offer Created
              </div>
            </div>

            <div className="offer-details">
              <div className="detail-box">
                <p className="label">Purpose</p>
                <p className="value">{item.purpose}</p>
              </div>

              <div className="detail-box">
                <p className="label">City</p>
                <p className="value">{item.city}</p>
              </div>

              <div className="detail-box">
                <p className="label">Applied On</p>
                <p className="value">{item.date}</p>
              </div>

              <div className="detail-box highlight">
                <p className="label">Potential Commission</p>
                <p className="value">₹{item.commission}</p>
              </div>
            </div>

            <div className="alert-box">
              This lead was also shared with {item.sharedWith} other lender(s).  
              Act fast to win this customer with a competitive offer!
            </div>

            <div className="offer-bottom">
              <div className="offer-data">
                <p className="label">Interest Rate</p>
                <p className="value">{item.interest}%</p>
              </div>

              <div className="offer-data">
                <p className="label">EMI</p>
                <p className="value">₹{item.emi.toLocaleString()}</p>
              </div>

              <div className="offer-data">
                <p className="label">APR</p>
                <p className="value">{item.apr}%</p>
              </div>
            </div>

          </div>
        ))
      )}
    </div>
  );
}
