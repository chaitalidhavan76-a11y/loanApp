import { useState } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const CheckEligibility = () => {
  const [data, setData] = useState({
    income: 40000,
    existingEmi: 8000,
    employment: "salaried",
    creditScore: "700",
  });

  const handle = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const getMultiplier = () => (data.employment === "self" ? 15 : 20);

  const creditScoreFactor = () => {
    if (data.creditScore === "750+") return 1.1;
    if (data.creditScore === "650") return 0.9;
    return 0.7;
  };

  const calculateEligibility = () => {
    const maxEmiAllowed = data.income * 0.5;
    const availableEmi = maxEmiAllowed - data.existingEmi;
    if (availableEmi <= 0) return 0;
    return Math.floor(availableEmi * getMultiplier() * creditScoreFactor());
  };

  const eligibleAmount = calculateEligibility();
  const eligible = eligibleAmount > 0;

  return (
    <section className="elWrap">
      <div className="elHeader">
        <h1>Check Your Loan Eligibility</h1>
        <p>Instant calculation · No impact on credit score</p>
      </div>

      <div className="elRow">
        <div className="elLeft card">
          <h3>Your Details</h3>

          <div className="elField">
            <label>Monthly Income (₹)</label>
            <input
              type="number"
              className="elInput"
              value={data.income}
              onChange={(e) => handle("income", +e.target.value)}
            />
            <input
              type="range"
              min="15000"
              max="200000"
              value={data.income}
              onChange={(e) => handle("income", +e.target.value)}
            />
          </div>

          <div className="elField">
            <label>Existing EMIs (₹)</label>
            <input
              type="number"
              className="elInput"
              value={data.existingEmi}
              onChange={(e) => handle("existingEmi", +e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="80000"
              value={data.existingEmi}
              onChange={(e) => handle("existingEmi", +e.target.value)}
            />
          </div>

          <div className="elField">
            <label>Employment Type</label>
            <div className="selectWrap">
              <select
                className="elInput"
                value={data.employment}
                onChange={(e) => handle("employment", e.target.value)}
              >
                <option value="salaried">Salaried</option>
                <option value="self">Self Employed</option>
              </select>
            </div>
          </div>

          <div className="elField">
            <label>Credit Score</label>
            <div className="selectWrap">
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
        </div>

        {/* RIGHT */}
        <div className="elRight card">
          <h3>Eligible Loan Amount</h3>

          <div className={`elAmountBox ${eligible ? "ok" : "bad"}`}>
            ₹ {eligibleAmount.toLocaleString("en-IN")}
          </div>

          <p className={`elStatus ${eligible ? "ok" : "bad"}`}>
            {eligible
              ? "You are eligible for a personal loan"
              : "Eligibility not met based on your inputs"}
          </p>

          <Link to="/Offers">
            <button className="elBtn" disabled={!eligible}>
              View Best Offers
            </button>
          </Link>

          <p className="elNote">
            * Final approval depends on bank verification
          </p>
        </div>
      </div>

      <div className="elCriteria">
        <h4>Eligibility Criteria</h4>
        <ul>
          <li><GoDotFill /> Income above ₹15,000/month</li>
          <li><GoDotFill /> Age between 21 – 60 years</li>
          <li><GoDotFill /> Credit score 650+</li>
          <li><GoDotFill /> EMIs below 50% of income</li>
        </ul>
      </div>
      <section className="eligibility-info">
        <h2>How Loan Eligibility is Calculated</h2>
        <div className="eligibility-grid">
          <div className="eligibility-card">
            <h4>Income</h4>
            <p>Higher income increases your repayment capacity.</p>
          </div> <div className="eligibility-card">
            <h4>Existing EMIs</h4> <p>Lower EMIs help qualify for higher loans.</p>
          </div>
          <div className="eligibility-card">
            <h4>Credit Score</h4>
            <p>Good score unlocks better interest rates.</p>
          </div> <div className="eligibility-card">
            <h4>Employment</h4>
            <p>Salaried users usually get higher eligibility.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CheckEligibility;
