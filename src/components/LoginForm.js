import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [myPassword, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const readData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://sheetdb.io/api/v1/mazx77jivumms');
      const data = await response.json();
      console.log(data);
      checkCredentials(data); // Pass the fetched data to checkCredentials
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkCredentials = (data) => {
    const isValidUser = data.some((item) => 
      item.username === userName && item.password === myPassword
    );

    if (isValidUser) {
      console.log('Login Successfully');
      navigate('/home');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (

    <div>
        <h1 style={{margin:'5vh 5vw 20vh 5vw'}}>Orange Line Train Driver Route Management</h1>
    <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'start', alignItems: 'center', height: '100vh' }}>

      <div style={{ width: '80%', maxWidth: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'darkblue', borderRadius: '10px' }}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Login Form</h2>

        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0', boxSizing: 'border-box'}}
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
          style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)'}}
        >
          Login
        </button>

        {loading && <div style={{ marginTop: '20px', textAlign: 'center', color:'white'}}><p>Loading...</p></div>}
      </div>
    </div>
    </div>

  );
}

export default Login;
