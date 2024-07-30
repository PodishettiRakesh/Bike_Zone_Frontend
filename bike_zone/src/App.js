import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from './components/InitialPage';
// Import other components like CustomerLogin and AdminLogin once they are created

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InitialPage />} />
          {/* <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} /> */}
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
