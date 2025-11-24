import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ResultsPage from '../src/components/viewresults/index.js';
import CheckCreditScore from '../src/components/CheckCreditScore/index.js';
import CheckCreditScoreResult from './components/score/index.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />}></Route>
          <Route path='/loan' exact={true} element={<LoanDetails />}></Route>
          <Route path='/personalInfo' exact={true} element={<PersonalInfo />}></Route>
          <Route path='/financialInfo' exact={true} element={<FinancialInfo />}></Route>
          <Route path='/About' exact={true} element={<AboutUs />}></Route>
          <Route path='/loanPages' exact={true} element={<ServicePage />}></Route>
          <Route path='/homePage' exact={true} element={<HomeLoan />}></Route>
          <Route path='/contact' exact={true} element={<ContactUs />}></Route>
          <Route path='/results' element={<ResultsPage />} />


          <Route path='/check-credit-score' element={<CheckCreditScore />} />
          <Route
            path="/credit-result"
            element={<CheckCreditScoreResult />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
