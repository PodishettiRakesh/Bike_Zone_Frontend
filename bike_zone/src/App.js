import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import CustomerSignup from './components/CustomerSignup';
import CustomerLogin from './components/CustomerLogin';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
