import React from "react";
import heroImg from "../../assets/images/banner.jpg";
import ServicesSection from "../../components/services/index.js";
import StepsSection from "../../components/howItWorks/index.js";
import { MdOutlineCreditScore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import LoanCalculator from "../../components/loanCalculator/index.js";


const Home = () => {
        const navigate = useNavigate();
    
    return (
        <>
            <div className="container">
                <section className="hero">
                    <div className="hero-left">
                        <h1>
                            Quick and Easy Loans for Your 
                            Financial Needs.
                        </h1>

                        <p>
                            Our loan services offer a hassle-free and streamlined borrowing
                            experience, providing you with the funds you need in a timely
                            manner to meet your financial requirements.
                        </p>

                        <Link to='/eligible'><button className="hero-btn">Check Eligibility</button></Link>
                        <button
                            className="credit-score-btn"
                            onClick={() => navigate("/check-credit-score")}
                        >
                            <span className="icon"><MdOutlineCreditScore /></span>
                            Credit Score
                        </button>
                    </div>

                    <div className="hero-right">
                        <img src={heroImg} alt="Loan Illustration" />
                    </div>
                </section>
            </div>

            <ServicesSection />
            <StepsSection />
            <LoanCalculator/>
        </>
    );
};

export default Home;
