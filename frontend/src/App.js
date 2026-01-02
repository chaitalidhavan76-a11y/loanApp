import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import Header from './components/Header';
import LoanDetails from './components/loanDetails.js';
import PersonalInfo from './components/personalInfo/index.js';
import FinancialInfo from './components/financialDetails/index.js';
import AboutUs from './pages/about/index.js';
import ContactUs from './pages/contact/index.js';
import Footer from './components/footer/index.js';
import ServicePage from './pages/servicePages/ServicePages.js';
import HomeLoan from './pages/servicePages/home.js';
import CheckCreditScore from '../src/components/CheckCreditScore/index.js';
import CheckCreditScoreResult from './components/score/index.js';
import PersonalLoan from './pages/servicePages/personal.js';
import AutoLoan from './pages/servicePages/auto.js';
import StudentLoan from './pages/servicePages/student.js';
import HomeLoanApplication from './components/ApplyLoans/homeApply.js';
import PersonalLoanApplication from './components/ApplyLoans/personalApply.js';
import BusinessLoan from './pages/servicePages/buisness.js';
import StudentLoanApplication from './components/ApplyLoans/studentApply.js';
import AutoLoanApplication from './components/ApplyLoans/autoApply.js';
import BusinessLoanApplication from './components/ApplyLoans/buisnessApply.js';
import ScrollToTop from "./ScrollToTop";
import CheckEligibility from './components/eligibility/index.js';
import LoanCalculator from './components/loanCalculator/index.js';
import LoanOffers from '../src/components/viewresults/index.js';

import { Routes, Route, useLocation } from "react-router-dom";
import AdminLayout from '../src/Admin/adminLayout.js';
import AdminLogin from './Admin/pages/login/index.js';
import AdminRegister from './Admin/pages/register/index.js';
import BestOffers from './components/bestOffers/index.js';
import UserDashboard from './userDashboard/user.js';

import Me from "./userDashboard/me.js"



function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      <ScrollToTop />

      {/* Header: show on website + dashboard, hide on admin */}
      {!isAdminRoute && <Header />}

      <Routes location={location} key={location.pathname}>
        <Route path="/dashboard" element={<UserDashboard />} />

        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/loan" element={<LoanDetails />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/financialInfo" element={<FinancialInfo />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/loanPages" element={<ServicePage />} />
        <Route path="/homeLoan" element={<HomeLoan />} />
        <Route path="/homeApply" element={<HomeLoanApplication />} />
        <Route path="/autoLoan" element={<AutoLoan />} />
        <Route path="/autoApply" element={<AutoLoanApplication />} />
        <Route path="/studentLoan" element={<StudentLoan />} />
        <Route path="/studentApply" element={<StudentLoanApplication />} />
        <Route path="/businessLoan" element={<BusinessLoan />} />
        <Route path="/businessApply" element={<BusinessLoanApplication />} />
        <Route path="/personalLoan" element={<PersonalLoan />} />
        <Route path="/personalApply" element={<PersonalLoanApplication />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/eligible" element={<CheckEligibility />} />
        <Route path="/calcy" element={<LoanCalculator />} />
        <Route path="/results" element={<LoanOffers />} />
        <Route path="/Offers" element={<BestOffers />} />
        <Route path="/check-credit-score" element={<CheckCreditScore />} />
        <Route path="/credit-result" element={<CheckCreditScoreResult />} />

        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
      </Routes>

      {/* Footer: hide on admin + dashboard */}
      {!isAdminRoute && !isDashboardRoute && <Footer />}
    </>
  );
}

export default App;
