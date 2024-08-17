import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == 'demo' && password == 'demo') {
      alert('Login successful!');
      // @jerry add code to redirect to courses
    }
  };

  return (
    <div className="flex h-full items-center justify-center bg-gray-100">
      <div className="w-80 rounded-lg bg-white p-8 shadow-lg">
        <input
          type="text"
          placeholder="Username"
          className="mb-4 w-full rounded border border-gray-300 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded border border-gray-300 p-2"
        />
        <button className="w-full rounded bg-blue-300 py-2 text-white hover:bg-blue-400">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
