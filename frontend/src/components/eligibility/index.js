import { useState } from "react";
import { Link } from "react-router-dom";

const CheckEligibility = () => {
  const [data, setData] = useState({
    income: 40000,
    existingEmi: 8000
  });

  const handle = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const calculate = () => {
    const capacity = data.income * 0.6 - data.existingEmi;
    if (capacity <= 0) return 0;
    return Math.floor(capacity * 24);
  };

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
              onChange={(e) => handle("income", Number(e.target.value))}
            />
            <input
              className="elRange"
              type="range"
              min="15000"
              max="200000"
              value={data.income}
              onChange={(e) => handle("income", Number(e.target.value))}
            />
          </div>

          <div className="elField">
            <label>My Existing EMI</label>
            <input
              className="elInput"
              type="number"
              value={data.existingEmi}
              onChange={(e) => handle("existingEmi", Number(e.target.value))}
            />
            <input
              className="elRange"
              type="range"
              min="0"
              max="80000"
              value={data.existingEmi}
              onChange={(e) => handle("existingEmi", Number(e.target.value))}
            />
          </div>

        </div>

        <div className="elRight">
          <h3 className="elSubtitle">Final Loan Amount Eligible</h3>

          <p className="elAmount">
            ₹ {calculate().toLocaleString("en-IN")}
          </p>

          <Link to='/loan'><button className="elBtn">Apply Now</button></Link>
        </div>

      </div>
    </section>
  );
};

export default CheckEligibility;
