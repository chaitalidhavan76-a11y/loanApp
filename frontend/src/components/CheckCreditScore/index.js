import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckCreditScore = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        paymentHistory: "",
        creditUsage: "",
        creditAge: "",
    });

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

        // clamp score 300–900
        if (score > 900) score = 900;
        if (score < 300) score = 300;

        // send to result page
        navigate("/credit-result", { state: { score } });
    };


    return (
        <div className="credit-page">

            <div className="header-section">
                <h1 className="credit-title">Check Your Credit Score</h1>
                <p className="credit-subtitle">
                    Get an instant estimate in 3 simple questions
                </p>
            </div>


            <div className="score-card">

                {/* Payment History */}
                <div className="field-group">
                    <div className="field-label">
                        <span className="field-icon">💳</span>
                        <div>
                            <h4>Payment History</h4>
                            <p>How well do you pay bills on time?</p>
                        </div>
                    </div>

                    <select
                        name="paymentHistory"
                        value={form.paymentHistory}
                        onChange={handleChange}
                    >
                        <option value="">Select your payment history</option>
                        <option value="excellent">Excellent (95%–100%)</option>
                        <option value="good">Good (85%–94%)</option>
                        <option value="fair">Fair (70%–84%)</option>
                        <option value="poor">Poor (below 70%)</option>
                    </select>
                </div>

                {/* Credit Usage */}
                <div className="field-group">
                    <div className="field-label">
                        <span className="field-icon">📈</span>
                        <div>
                            <h4>Credit Card Usage</h4>
                            <p>What % of your credit limit do you use?</p>
                        </div>
                    </div>

                    <select
                        name="creditUsage"
                        value={form.creditUsage}
                        onChange={handleChange}
                    >
                        <option value="">Select credit usage</option>
                        <option value="low">0% – 20% (Very Good)</option>
                        <option value="medium">20% – 50% (Good)</option>
                        <option value="high">50% – 75% (Fair)</option>
                        <option value="very-high">75%+ (Poor)</option>
                    </select>
                </div>

                {/* Credit Age */}
                <div className="field-group">
                    <div className="field-label">
                        <span className="field-icon">⏳</span>
                        <div>
                            <h4>Credit History Length</h4>
                            <p>How long have you had credit?</p>
                        </div>
                    </div>

                    <select
                        name="creditAge"
                        value={form.creditAge}
                        onChange={handleChange}
                    >
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
        </div>
    );
};

export default CheckCreditScore;
