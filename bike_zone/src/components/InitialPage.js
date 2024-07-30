import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InitialPage = () => {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === 'customer') {
      navigate('/customer-login');
    } else if (userType === 'admin') {
      navigate('/admin-login');
    }
  };

  const handleSignup = () => {
    if (userType === 'customer') {
      navigate('/customer-signup');
    } else if (userType === 'admin') {
      navigate('/admin-signup');
    }
  };

  return (
    <div className="initial-page">
      <h1>Welcome to Bike Zone</h1>
      <p>Please select your user type:</p>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        
        <option value="" disabled>Select User Type</option>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      {userType && (
        <div className="user-type-buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default InitialPage;
