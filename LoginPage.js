import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('authToken'); // token le rahe hain
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {       // <-- headers object
        'Content-Type': 'application/json',  // <-- content-type attribute
        'Authorization': `Bearer ${token}`   // <-- Authorization attribute
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
