import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHandshake,
    FaClock,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";


const faqData = [
    {
        question: "How long does it take to receive a response?",
        answer:
            "We usually respond within 24 hours, except on Sundays and public holidays.",
    },
    {
        question: "Do you charge any fees for using LoanHub?",
        answer:
            "No. LoanHub is completely free to use. We do not charge users for comparing or applying for loans.",
    },
    {
        question: "Can I apply for loans directly through LoanHub?",
        answer:
            "Yes. You can submit your basic details and we will connect you with trusted loan providers.",
    },
    {
        question: "Are my documents safe?",
        answer:
            "Yes, we use secure systems and encrypt your data. Your documents are never shared without consent.",
    },
    {
        question: "What documents are required to apply?",
        answer:
            "Basic KYC documents such as Aadhaar, PAN, Bank Statement, and Income Proof depending on loan type.",
    },
];

export default function ContactUs() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p className="contact-sub">We’re here to help you with any questions or support you need.</p>

            <div className="contact-grid">

                <div className="contact-info">
                    <h3>Get in Touch</h3>

                    <p>
                        <FaMapMarkerAlt className="icon" />
                        <strong>Office Address:</strong><br />
                        Mumbai, Maharashtra, India
                    </p>

                    <p>
                        <FaPhoneAlt className="icon" />
                        <strong>Customer Support:</strong><br />
                        +91 98765 43210
                    </p>

                    <p>
                        <FaEnvelope className="icon" />
                        <strong>General Enquiries:</strong><br />
                        support@loanhub.in
                    </p>

                    <p>
                        <FaHandshake className="icon" />
                        <strong>Partnerships:</strong><br />
                        partners@loanhub.in
                    </p>

                    <p>
                        <FaClock className="icon" />
                        <strong>Support Hours:</strong><br />
                        Mon - Sat: 9:00 AM – 7:00 PM
                    </p>

                    <h4>Follow us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>

                    <p className="note">
                        We typically respond within 24 hours.
                        For urgent issues, please contact us by phone.
                    </p>
                </div>

                <form className="contact-form">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" />

                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Subject</label>
                    <input type="text" placeholder="Enter subject" />

                    <label>Your Message</label>
                    <textarea placeholder="Write your message..."></textarea>

                    <button type="submit">Send Message</button>

                    <p className="after-submit">
                        After you submit, our team will reach out to you via email or phone within 24 hours.
                    </p>
                </form>
            </div>

            <div className="map-section">
                <h3>Our Office Location</h3>
                <div className="map-placeholder">
                    <p>Map will be displayed here</p>
                </div>
            </div>
            <div className="faq-accordion">
                <h2>Frequently Asked Questions</h2>

                {faqData.map((item, index) => (
                    <div className="faq-card" key={index}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h4>{item.question}</h4>
                            <span className="faq-arrow">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>

                        <div
                            className={`faq-answer ${openIndex === index ? "open" : ""
                                }`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
