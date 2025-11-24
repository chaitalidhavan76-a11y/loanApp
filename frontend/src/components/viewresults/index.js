import React from "react";


const ResultsPage = () => {
  const offers = [
    {
      id: 1,
      bank: "Capital Bank",
      rating: 4.8,
      apr: "4.99%",
      monthly: "₹12,500",
      total: "₹5,40,000",
      tags: ["No origination fee", "Flexible terms", "Fast approval"],
      logo: "CB"
    },
    {
      id: 2,
      bank: "Premier Finance",
      rating: 4.7,
      apr: "5.25%",
      monthly: "₹12,850",
      total: "₹5,62,000",
      tags: ["Same-day funding", "No prepayment penalty", "24/7 support"],
      logo: "PF",
      recommended: true
    },
    {
      id: 3,
      bank: "Secure Trust Bank",
      rating: 4.6,
      apr: "5.10%",
      monthly: "₹12,650",
      total: "₹5,55,000",
      tags: ["Instant approval", "Low processing fee"],
      logo: "ST"
    },
    {
      id: 4,
      bank: "TrustLine Finance",
      rating: 4.5,
      apr: "5.40%",
      monthly: "₹12,900",
      total: "₹5,68,500",
      tags: ["Easy documentation", "Quick disbursement"],
      logo: "TL"
    }
  ];

  return (
    <div className="results-page">

      {/* HEADER SECTION FIXED */}
      <div className="header">
        <div className="icon">✔</div>
        <h1>Great News!</h1>
        <p>We found {offers.length} personalized loan offers for you</p>
      </div>

      {/* OFFERS */}
      <div className="offers-container">
        {offers.map((o) => (
          <div className={`offer-card ${o.recommended ? "recommended" : ""}`} key={o.id}>

            {/* Bank */}
            <div className="left">
              <div className="logo-circle">{o.logo}</div>
              <div>
                <h3>{o.bank}</h3>
                <span className="rating">⭐ {o.rating}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="middle">
              <div className="stat">
                <label>APR</label>
                <h4>{o.apr}</h4>
              </div>
              <div className="stat">
                <label>Monthly</label>
                <h4>{o.monthly}</h4>
              </div>
              <div className="stat">
                <label>Total</label>
                <h4>{o.total}</h4>
              </div>
            </div>

            {/* Right buttons */}
            <div className="right">
              <button className="apply-btn">Apply Now</button>
              <div className="tags">
                {o.tags.map((t, index) => (
                  <span className="tag" key={index}>{t}</span>
                ))}
              </div>
            </div>

            {/* Recommended Badge */}
            {o.recommended && (
              <div className="recommended-badge">Recommended</div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
