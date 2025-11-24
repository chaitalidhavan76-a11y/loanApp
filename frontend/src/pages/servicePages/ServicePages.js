import React from "react";

export default function ServicePage({
  title,
  description,
  interest,
  image,
  eligibility = [],
  documents = [],
  benefits = [],
  applyLink = "/apply",
}) {

  console.log("Eligibility prop:", eligibility);
  console.log("Documents prop:", documents);
  console.log("Benefits prop:", benefits);
  return (
    <div className="service-container">

      <div className="service-hero">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p className="interest-rate"><strong>Interest Rate:</strong> {interest}</p>

          <a href={applyLink} className="apply-btn">
            Apply Now
          </a>

        </div>

        <img src={image} alt={title} />
      </div>

      <div className="service-section">
        <h2>Eligibility Criteria</h2>
        <ul>
          {eligibility.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2>Required Documents</h2>
        <ul>
          {documents.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2>Benefits of {title}</h2>
        <ul>
          {benefits.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
