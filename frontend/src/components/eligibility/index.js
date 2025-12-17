import { useState } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const CheckEligibility = () => {
  const [data, setData] = useState({
    income: 40000,
    existingEmi: 8000,
    employment: "salaried",
    creditScore: "700"
  });

  const handle = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const getMultiplier = () => {
    if (data.employment === "self") return 15;
    return 20;
  };

  const creditScoreFactor = () => {
    if (data.creditScore === "750+") return 1.1;
    if (data.creditScore === "650") return 0.9;
    return 0.7;
  };

  const calculateEligibility = () => {
    const maxEmiAllowed = data.income * 0.5; 
    const availableEmi = maxEmiAllowed - data.existingEmi;

    if (availableEmi <= 0) return 0;

    const baseAmount = availableEmi * getMultiplier();
    return Math.floor(baseAmount * creditScoreFactor());
  };

  const eligible = calculateEligibility() > 0;

  return (
    <section className="elWrap">
      <h2 className="elTitle">Loan Eligibility Calculator</h2>

      <div className="elRow">
        <div className="elLeft">

          <div className="elField">
            <label>My Monthly Income</label>
            <input
              className="elInput"
              type="number"
              value={data.income}
              onChange={(e) => handle("income", +e.target.value)}
            />
            <input
              className="elRange"
              type="range"
              min="15000"
              max="200000"
              value={data.income}
              onChange={(e) => handle("income", +e.target.value)}
            />
          </div>

          <div className="elField">
            <label>My Existing EMI</label>
            <input
              className="elInput"
              type="number"
              value={data.existingEmi}
              onChange={(e) => handle("existingEmi", +e.target.value)}
            />
            <input
              className="elRange"
              type="range"
              min="0"
              max="80000"
              value={data.existingEmi}
              onChange={(e) => handle("existingEmi", +e.target.value)}
            />
          </div>

          <div className="elField">
            <label>Employment Type</label>
            <select
              className="elInput"
              value={data.employment}
              onChange={(e) => handle("employment", e.target.value)}
            >
              <option value="salaried">Salaried</option>
              <option value="self">Self Employed</option>
            </select>
          </div>

          <div className="elField">
            <label>Credit Score</label>
            <select
              className="elInput"
              value={data.creditScore}
              onChange={(e) => handle("creditScore", e.target.value)}
            >
              <option value="750+">750+</option>
              <option value="700">650 – 750</option>
              <option value="650">Below 650</option>
            </select>
          </div>

        </div>

        {/* RIGHT */}
        <div className="elRight">
          <h3 className="elSubtitle">Final Loan Amount Eligible</h3>

          <p className="elAmount">
            ₹ {calculateEligibility().toLocaleString("en-IN")}
          </p>

          <p className={`elStatus ${eligible ? "ok" : "bad"}`}>
            {eligible
              ? "You meet the eligibility criteria"
              : "Eligibility not met due to high EMI or low credit score"}
          </p>

          <Link to="/loan">
            <button className="elBtn" disabled={!eligible}>
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      <div className="elCriteria">
        <h4>Loan Eligibility Criteria</h4>
        <ul>
          <li><GoDotFill />Minimum income: ₹15,000/month</li>
          <li><GoDotFill />Age: 21 – 60 years</li>
          <li><GoDotFill />Credit score: 650+</li>
          <li><GoDotFill />Existing EMI should be below 50% of income</li>
          <li><GoDotFill />Stable employment required</li>
        </ul>
      </div>
      <section className="eligibility-info">
        <h2>What is Loan Eligibility?</h2>
        <p>
          Loan eligibility refers to the maximum loan amount a customer can get
          based on income, existing financial obligations, and repayment capacity.
        </p>

        <div className="eligibility-grid">
          <div className="eligibility-card">
            <h4>Monthly Income</h4>
            <p>
              Higher income increases loan eligibility. Banks use income to
              calculate your repayment capacity.
            </p>
          </div>

          <div className="eligibility-card">
            <h4>Existing EMIs</h4>
            <p>
              Your current EMIs are deducted from income to ensure you can manage
              new loan repayments comfortably.
            </p>
          </div>

          <div className="eligibility-card">
            <h4>FOIR (Fixed Obligation to Income Ratio)</h4>
            <p>
              Banks usually allow total EMIs up to 50–60% of monthly income to
              avoid over-borrowing.
            </p>
          </div>

          <div className="eligibility-card">
            <h4>Credit Score</h4>
            <p>
              A good credit score improves approval chances and helps get better
              interest rates.
            </p>
          </div>

          <div className="eligibility-card">
            <h4>Employment Type</h4>
            <p>
              Salaried applicants generally receive higher eligibility compared
              to self-employed applicants.
            </p>
          </div>

          <div className="eligibility-card">
            <h4>Loan Tenure</h4>
            <p>
              Longer tenure reduces EMI, increasing overall loan eligibility.
            </p>
          </div>
        </div>

        <div className="eligibility-note">
          <strong>Note:</strong> Eligibility shown is indicative. Final approval
          depends on bank verification and documents.
        </div>
      </section>
    </section>
  );
};

export default CheckEligibility;
