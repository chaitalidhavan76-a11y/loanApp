import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navigate } from "react-router-dom";
import Home from './pages/home/index.js';
import Header from './components/Header/index.js';
import LoanDetails from './components/loanDetails/index.js';
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
import ScrollToTop from "./ScrollToTop.js";
import CheckEligibility from './components/eligibility/index.js';
import LoanCalculator from './components/loanCalculator/index.js';
import LoanOffers from '../src/components/viewresults/index.js';

import { Routes, Route, useLocation } from "react-router-dom";
import LenderLayout from './lendersDashboard/lenderLayout.js';
import LenderLogin from './lendersDashboard/pages/login/index.js';
import LenderRegister from './lendersDashboard/pages/register/index.js';
import BestOffers from './components/bestOffers/index.js';
import UserDashboard from './userDashboard/userLayout.js';
import DsaLayout from './DSAdashboard/dsaLayout.js';
import AdminApp from './adminDashboard/admin.js';

import Me from "./userDashboard/me.js"
import Ops from './opsDashboard/ops.js';
import Login from './opsDashboard/components/login.js';
import Register from './opsDashboard/components/register.js';
import DsaLogin from './DSAdashboard/components/login.js';
import DsaRegister from './DSAdashboard/components/register.js';
import AdminLogin from './adminDashboard/components/login.js';
import AdminRegister from './adminDashboard/components/register.js';
import FAQs from './components/FAQs/index.js';



function App() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isLenderRoute = path.startsWith("/lender");
  const isDashboardRoute = path.startsWith("/dashboard");
  const isDsaRoute = path.startsWith("/dsa");
  const isadminRoute = path.startsWith("/admin");
  const isopsRoute = path.startsWith("/ops");

  const isOpsAuth = localStorage.getItem("opsAuth");
  const isDsaAuth = localStorage.getItem("dsaAuth");
  const isAdminAuth = localStorage.getItem("adminAuth");


  return (
    <>
      <ScrollToTop />

      {/* Header: show on website + dashboard, hide on admin */}
      {!isLenderRoute && !isDsaRoute && !isadminRoute && !isopsRoute && <Header />}

      <Routes location={location} key={location.pathname}>
        {/* User Dashboard */}
        <Route path="/dashboard" element={<UserDashboard />} />

        {/*admin*/}
        {/* ADMIN AUTH */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* ADMIN DASHBOARD (PROTECTED) */}
        <Route
          path="/admin/dashboard"
          element={isAdminAuth ? <AdminApp /> : <Navigate to="/admin/login" />}
        />

        {/* DEFAULT /admin → LOGIN */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />


        {/* Lender */}
        <Route path="/lender/*" element={<LenderLayout />} />
        <Route path="/lender-login" element={<LenderLogin />} />
        <Route path="/lender-register" element={<LenderRegister />} />

        // DSA AUTH PAGES
        <Route path="/dsa/login" element={<DsaLogin />} />
        <Route path="/dsa/register" element={<DsaRegister />} />

// DSA DASHBOARD (PROTECTED)
        <Route
          path="/dsa/dashboard"
          element={isDsaAuth ? <DsaLayout /> : <Navigate to="/dsa/login" />}
        />

// DEFAULT /dsa → LOGIN
        <Route path="/dsa" element={<Navigate to="/dsa/login" />} />



        {/* Admin */}
        <Route path="/admin" element={<AdminApp />} />

        {/* OPS AUTH */}
        <Route path="/ops/login" element={<Login />} />
        <Route path="/ops/register" element={<Register />} />
        <Route
          path="/ops"
          element={isOpsAuth ? <Ops /> : <Login />}
        />

        <Route path="/me" element={<Me />} />

        {/* Website */}
        <Route path="/" element={<Home />} />
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
        <Route path="/faq" element={<FAQs />} />
      </Routes>


      {/* Footer: hide on admin + dashboard */}
      {!isLenderRoute && !isDashboardRoute && !isDsaRoute && !isadminRoute && !isopsRoute && <Footer />}
    </>
  );
}

export default App;
