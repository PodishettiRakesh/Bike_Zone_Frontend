import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import CustomerSignup from './components/CustomerSignup';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
