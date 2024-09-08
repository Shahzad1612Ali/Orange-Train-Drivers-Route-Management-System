import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const [userName, setUserName] = useState('');
  const [myPassword, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const readData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://sheetdb.io/api/v1/mstlueekjwc12');
      const data = await response.json();
      setLoginData(data);
      console.log(data);
      checkCredentials();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkCredentials = () => {
    loginData.forEach((item) => {
      if (item.username === userName && item.password === myPassword) {
        console.log('Login Successfully');
        // Navigate to the home page
        window.location.href = '/home'; // You can replace this with your own routing logic
      }
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'grey', borderRadius: '10px' }}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Login Form</h2>

        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0', boxSizing: 'border-box' }}
        />

        <input
          type="password"
          placeholder="Password"
          value={myPassword}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0', boxSizing: 'border-box' }}
        />

        <button
          onClick={readData}
          style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
        >
          Login
        </button>

        {loading && <div style={{ marginTop: '20px', textAlign: 'center' }}><p>Loading...</p></div>}
      </div>
    </div>
  );
}

export default Login;
