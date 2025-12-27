import React from "react";
import hdfc from "../../assets/images/bank1.png"
import axis from "../../assets/images/bank3.png"
import icici from "../../assets/images/bank2.png"
import sbi from "../../assets/images/bank4.png"
import kotak from "../../assets/images/bank5.png"
import yes from "../../assets/images/bank6.png"






const loanData = [
    {
        bank: "HDFC Bank",
        logo: hdfc,
        rate: "8.5%",
        emi: "₹10,289",
        apr: "9.2%",
        fee: "₹2,500",
        amount: "₹500,000",
        tenure: "60 months",
        best: true,
    },
    {
        bank: "ICICI Bank",
        logo: icici,
        rate: "8.75%",
        emi: "₹10,412",
        apr: "9.5%",
        fee: "₹3,000",
        amount: "₹500,000",
        tenure: "60 months",
    },
    {
        bank: "SBI",
        logo: sbi,
        rate: "8.4%",
        emi: "₹10,234",
        apr: "8.1%",
        fee: "₹2,000",
        amount: "₹500,000",
        tenure: "60 months",
    },
    {
        bank: "Axis Bank",
        logo: axis,
        rate: "9%",
        emi: "₹10,537",
        apr: "9.8%",
        fee: "₹3,500",
        amount: "₹500,000",
        tenure: "60 months",
    },
    {
        bank: "Kotak Mahindra",
        logo: kotak,
        rate: "8.9%",
        emi: "₹10,491",
        apr: "9.7%",
        fee: "₹3,200",
        amount: "₹500,000",
        tenure: "60 months",
    },
    {
        bank: "YES Bank",
        logo: yes,
        rate: "9.25%",
        emi: "₹10,662",
        apr: "10.1%",
        fee: "₹4,000",
        amount: "₹500,000",
        tenure: "60 months",
    },
];


const BestOffers = () => {
    return (
        <div className="loanOffers">
            <h1>Your Personalized Loan Offers</h1>
            <p>We found 6 loan offers matching your profile</p>


            <div className="offers">
                <div className="cards">
                    {loanData.map((item, index) => (
                        <div className={`card ${item.best ? "best" : ""}`} key={index}>
                            {item.best && <span className="badge">Best Offer</span>}
                            <div className="bankRow">
                                <img src={item.logo} alt={item.bank} />
                                <div>
                                    <h3>{item.bank}</h3>
                                    <p className="type">Personal Loan</p>
                                </div>
                            </div>


                            <div className="info-row">
                                <div>
                                    <p className="label">Interest Rate</p>
                                    <h4>{item.rate}</h4>
                                </div>
                                <div>
                                    <p className="label">Monthly EMI</p>
                                    <h4>{item.emi}</h4>
                                </div>
                            </div>

                            <ul className="details">
                                <li><strong>APR:</strong> {item.apr}</li>
                                <li><strong>Processing Fee:</strong> {item.fee}</li>
                                <li><strong>Loan Amount:</strong> {item.amount}</li>
                                <li><strong>Tenure:</strong> {item.tenure}</li>
                            </ul>

                            <button className="apply-btn">Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestOffers;
