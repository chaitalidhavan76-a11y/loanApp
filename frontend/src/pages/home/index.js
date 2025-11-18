import React from "react";
import heroImg from "../../assets/images/banner.png";
import ServicesSection from "../../components/services";
import StepsSection from "../../components/howItWorks";
import AboutUs from "../../components/aboutus";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container">
                <section className="hero">
                    <div className="hero-left">
                        <h1>
                            Quick and Easy <br />
                            Loans for Your <br />
                            Financial Needs.
                        </h1>

                        <p>
                            Our loan services offer a hassle-free and streamlined borrowing
                            experience, providing you with the funds you need in a timely
                            manner to meet your financial requirements.
                        </p>

                        <Link to='/loan'><button className="hero-btn">Get started</button></Link>
                    </div>

                    <div className="hero-right">
                        <img src={heroImg} alt="Loan Illustration" />
                    </div>
                </section>
            </div>

            <ServicesSection />
            <StepsSection/>
            <AboutUs/>
            <Footer/>
        </>
    );
};

export default Home;
