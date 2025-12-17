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



function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact={true} element={<Home />}></Route>
        <Route path='/loan' exact={true} element={<LoanDetails />}></Route>
        <Route path='/personalInfo' exact={true} element={<PersonalInfo />}></Route>
        <Route path='/financialInfo' exact={true} element={<FinancialInfo />}></Route>
        <Route path='/About' exact={true} element={<AboutUs />}></Route>
        <Route path='/loanPages' exact={true} element={<ServicePage />}></Route>
        <Route path='/homeLoan' exact={true} element={<HomeLoan />}></Route>
        <Route path='/homeApply' exact={true} element={<HomeLoanApplication />}></Route>
        <Route path='/autoLoan' exact={true} element={<AutoLoan />}></Route>
        <Route path='/autoApply' exact={true} element={<AutoLoanApplication />}></Route>
        <Route path='/studentApply' exact={true} element={<StudentLoanApplication />}></Route>
        <Route path='/studentLoan' exact={true} element={<StudentLoan />}></Route>
        <Route path='/businessLoan' exact={true} element={<BusinessLoan />}></Route>
        <Route path='/businessApply' exact={true} element={<BusinessLoanApplication />}></Route>
        <Route path='/personalLoan' exact={true} element={<PersonalLoan />}></Route>
        <Route path='/personalApply' exact={true} element={<PersonalLoanApplication />}></Route>
        <Route path='/contact' exact={true} element={<ContactUs />}></Route>
        <Route path='/eligible' exact={true} element={<CheckEligibility />}></Route>
        <Route path='/calcy' exact={true} element={<LoanCalculator />}></Route>
        <Route path='/results' element={<LoanOffers />} />
        <Route path='/check-credit-score' element={<CheckCreditScore />} />
        <Route
          path="/credit-result"
          element={<CheckCreditScoreResult />}
        />

        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
