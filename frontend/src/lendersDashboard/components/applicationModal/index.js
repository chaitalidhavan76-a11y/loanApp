import React from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const ApplicationModal = ({ show, data, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="modalbox offer-modal">

        <div className="modalheader">
          <h2>Application Details</h2>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="offer-card">

          <div className="offer-top">
            <div>
              <h3 className="offer-name">{data.name}</h3>
              <p className="offer-sub">
                {data.loan} • ₹{data.amount?.toLocaleString()} 
              </p>
              <p className="offer-small">
                Income: ₹{data.income || "--"}/mo • {data.jobType || "Salaried"}
              </p>
            </div>

            <div className={`status-badge status-${data.status?.toLowerCase()}`}>
              <FaCheckCircle /> {data.status}
            </div>
          </div>

          <div className="offer-details">
            <div className="detail-box">
              <p className="label">Phone</p>
              <p className="value">{data.phone || "N/A"}</p>
            </div>

            <div className="detail-box">
              <p className="label">Email</p>
              <p className="value">{data.email || "N/A"}</p>
            </div>

            <div className="detail-box">
              <p className="label">Applied On</p>
              <p className="value">{data.date || "--"}</p>
            </div>

            <div className="detail-box highlight">
              <p className="label">Credit Score</p>
              <p className="value">{data.creditScore || 780}</p>
            </div>
          </div>

          <div className="alert-box">
            This application has been shared with other lenders. Faster verification increases conversion chances.
          </div>

          <div className="offer-bottom">
            <div className="offer-data">
              <p className="label">Estimated EMI</p>
              <p className="value">₹ {data.estimatedEMI || "—"}</p>
            </div>

            <div className="offer-data">
              <p className="label">Interest Range</p>
              <p className="value">{data.interestRange || "10–18%"} </p>
            </div>

            <div className="offer-data">
              <p className="label">APR</p>
              <p className="value">{data.apr || "—"} </p>
            </div>
          </div>
        </div>

        <div className="modalfooter">
          <button className="btn btn-green">Approve</button>
          <button className="btn btn-red">Reject</button>
          <button className="btn btn-yellow">Request Docs</button>
        </div>

      </div>
    </div>
  );
};

export default ApplicationModal;
