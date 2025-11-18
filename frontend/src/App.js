import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import LoanDetails from './components/loanDetails.js';
import PersonalInfo from './components/personalInfo/index.js';
import FinancialInfo from './components/financialDetails/index.js';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
