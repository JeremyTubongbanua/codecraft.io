import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (username === 'jeremy' && password === '123') {
      navigate('/courses');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-full items-center justify-center bg-gray-100">
        <div className="w-80 rounded-lg bg-white p-8 shadow-lg">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 w-full rounded border border-gray-300 p-2 text-black"
            value={username}
            onChange={handleUsername}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded border border-gray-300 p-2 text-black"
            value={password}
            onChange={handlePassword}
          />
          <button className="w-full rounded bg-blue-300 py-2 text-white duration-200 hover:bg-blue-400">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
