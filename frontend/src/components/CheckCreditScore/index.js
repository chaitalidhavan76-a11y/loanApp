import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckCreditScore = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    paymentHistory: "",
    creditUsage: "",
    creditAge: "",
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (i) => {
    setOpenFAQ(openFAQ === i ? null : i);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    const { paymentHistory, creditUsage, creditAge } = form;

    if (!paymentHistory || !creditUsage || !creditAge) {
      alert("Please complete all fields");
      return;
    }

    const paymentMap = {
      excellent: 250,
      good: 180,
      fair: 120,
      poor: 60,
    };

    const usageMap = {
      low: 200,
      medium: 150,
      high: 80,
      "very-high": 40,
    };

    const ageMap = {
      long: 140,
      medium: 100,
      short: 60,
      new: 20,
    };

    let score =
      300 +
      paymentMap[paymentHistory] +
      usageMap[creditUsage] +
      ageMap[creditAge];

    if (score > 900) score = 900;
    if (score < 300) score = 300;

    navigate("/credit-result", { state: { score } });
  };

  const faqList = [
    {
      q: "1. What is a credit score?",
      a: "A credit score is a three-digit number that represents your creditworthiness. It is calculated from your credit history, repayment behavior, and loan utilization.",
    },
    {
      q: "2. What is a good credit score?",
      a: "A score above 750 is considered excellent, increasing your chances of loan approval with lower interest rates.",
    },
    {
      q: "3. How can I improve my credit score?",
      a: "Pay bills on time, reduce credit card usage, avoid multiple loan applications, and maintain a low credit utilization ratio.",
    },
    {
      q: "4. Does checking my score reduce it?",
      a: "No. Checking your own credit score is a soft inquiry and does not affect your score.",
    },
    {
      q: "5. How often should I check my credit score?",
      a: "It's recommended to check your score at least once a month to stay on top of any changes or inaccuracies.",
    },
  ];

  return (
    <div className="credit-page">
      <div className="header-section">
        <h1 className="credit-title">Check Your Credit Score</h1>
        <p className="credit-subtitle">Get an instant estimate in 3 simple questions</p>
      </div>

      <div className="score-card">
        <div className="field-group">
          <div className="field-label">
            <span className="field-icon">💳</span>
            <div>
              <h4>Payment History</h4>
              <p>How well do you pay bills on time?</p>
            </div>
          </div>

          <select name="paymentHistory" value={form.paymentHistory} onChange={handleChange}>
            <option value="">Select your payment history</option>
            <option value="excellent">Excellent (95%–100%)</option>
            <option value="good">Good (85%–94%)</option>
            <option value="fair">Fair (70%–84%)</option>
            <option value="poor">Poor (below 70%)</option>
          </select>
        </div>

        <div className="field-group">
          <div className="field-label">
            <span className="field-icon">📈</span>
            <div>
              <h4>Credit Card Usage</h4>
              <p>What % of your credit limit do you use?</p>
            </div>
          </div>

          <select name="creditUsage" value={form.creditUsage} onChange={handleChange}>
            <option value="">Select credit usage</option>
            <option value="low">0% – 20% (Very Good)</option>
            <option value="medium">20% – 50% (Good)</option>
            <option value="high">50% – 75% (Fair)</option>
            <option value="very-high">75%+ (Poor)</option>
          </select>
        </div>

        <div className="field-group">
          <div className="field-label">
            <span className="field-icon">⏳</span>
            <div>
              <h4>Credit History Length</h4>
              <p>How long have you had credit?</p>
            </div>
          </div>

          <select name="creditAge" value={form.creditAge} onChange={handleChange}>
            <option value="">Select credit age</option>
            <option value="long">8+ years</option>
            <option value="medium">4–7 years</option>
            <option value="short">1–3 years</option>
            <option value="new">Less than 1 year</option>
          </select>
        </div>

        <button className="calculate-btn" onClick={calculateScore}>
          Calculate My Score
        </button>
      </div>

      <div className="credit-info">
        <h2>Everything You Need To Know About Your Credit Score!</h2>

        <p>
          Your credit score is a crucial factor that can open doors to various financial opportunities and help you secure the loan amount you desire.
          It is a three-digit numerical expression that represents a summary of your credit history.
        </p>

        <p>
          The credit score is derived from the information in your credit report, which includes details of your borrowing history, repayment behaviour,
          and credit utilization. The credit score scale typically ranges from 300 to 900, with a higher score indicating better creditworthiness and
          a lower risk for lenders.
        </p>

        <h3>Importance Of Credit Score</h3>

        <p>
          Lenders and financial institutions use your credit score as a key factor in assessing your creditworthiness when you apply for loans, credit cards,
          or other forms of credit. A good credit score can significantly increase your chances of qualifying for loans and enjoying lower interest rates.
        </p>

        <p>
          You can check your credit score for free. It provides a quick and easy way to obtain your credit score evaluation report.
        </p>

        <p>
          By taking control of your credit score, you can open doors to better financial opportunities.
        </p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {faqList.map((item, i) => (
          <div className="faq-item" key={i}>
            <button className="faq-question" onClick={() => toggleFAQ(i)}>
              {item.q}
            </button>

            <div
              className="faq-answer"
              style={{ maxHeight: openFAQ === i ? "300px" : "0px" }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckCreditScore;
