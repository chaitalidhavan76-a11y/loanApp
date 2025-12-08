import { useState, useEffect } from "react";

const loanConfigs = {
    home: { maxAmount: 20000000 },
    personal: { maxAmount: 3000000 },
    auto: { maxAmount: 1500000 },
    student: { maxAmount: 1000000 },
    business: { maxAmount: 5000000 },
};

const LoanCalculator = () => {
    const [loanType, setLoanType] = useState("personal");
    const [loanAmount, setLoanAmount] = useState(150000);
    const [interestRate, setInterestRate] = useState(12);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [interestAmt, setInterestAmt] = useState(0);

    useEffect(() => {
        calculate();
    }, [loanAmount, interestRate, tenure, loanType]);

    const calculate = () => {
        let P = Number(loanAmount);
        let R = Number(interestRate) / 12 / 100;
        let N = Number(tenure);

        let emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        let total = emiVal * N;
        let interest = total - P;

        setEmi(Math.round(emiVal));
        setTotalAmount(Math.round(total));
        setInterestAmt(Math.round(interest));
    };

    const format = (x) => x.toLocaleString("en-IN");

    return (
        <div className="Calcy">
            <div className="loan-wrapper">
                <div className="heading">
                    <h2>Calculate Your Monthly EMI Instantly</h2>
                    <h5>Adjust loan amount, interest rate, and tenure to find the perfect repayment plan.</h5>
                </div>

                <div className="loan-tabs">
                    {Object.keys(loanConfigs).map((t) => (
                        <button
                            key={t}
                            className={loanType === t ? "loan-tab active" : "loan-tab"}
                            onClick={() => {
                                setLoanType(t);
                                setLoanAmount(loanConfigs[t].maxAmount / 10);
                            }}
                        >
                            {t.charAt(0).toUpperCase() + t.slice(1)} Loan
                        </button>
                    ))}
                </div>

                <div className="loan-container">
                    <div className="loan-left">

                        <div className="field">
                            <label>Loan Amount</label>

                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />

                            <input
                                type="range"
                                min="50000"
                                max={loanConfigs[loanType].maxAmount}
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />

                            <div className="range-labels">
                                <span>₹ 50,000</span>
                                <span>₹ {format(loanConfigs[loanType].maxAmount)}</span>
                            </div>
                        </div>

                        <div className="field">
                            <label>Interest Rate</label>
                            <input
                                type="number"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                            <input
                                type="range"
                                min="6"
                                max="24"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                            <div className="range-labels">
                                <span>6% PA</span>
                                <span>24% PA</span>
                            </div>
                        </div>

                        <div className="field">
                            <label>Loan Tenure</label>
                            <input
                                type="number"
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                            />
                            <input
                                type="range"
                                min="6"
                                max="72"
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                            />
                            <div className="range-labels">
                                <span>6 months</span>
                                <span>72 months</span>
                            </div>
                        </div>
                    </div>

                    <div className="loan-right">
                        <div className="emi-box">
                            <p>Your Monthly EMI will be</p>
                            <h1>₹ {format(emi)}</h1>
                        </div>

                        <div className="result-list">
                            <p>Amount Payable <span>₹ {format(totalAmount)}</span></p>
                            <p>Interest Amount <span>₹ {format(interestAmt)}</span></p>
                            <p>Principal Amount <span>₹ {format(Number(loanAmount))}</span></p>
                        </div>

                        <button className="apply-btn">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanCalculator;
