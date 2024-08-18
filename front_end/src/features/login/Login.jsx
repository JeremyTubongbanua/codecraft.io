import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    if (username === 'demo' && password === 'demo') {
      navigate('/home');
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="bg-gradient-to-r from-blue-400 to-indigo-600 py-4 shadow-md">
        <h1 className="text-center text-4xl font-extrabold text-yellow-300">
          codecraft.io
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-200">
          <div className="w-80 rounded-xl bg-opacity-20 bg-gradient-to-r from-blue-200 to-indigo-300 p-8 shadow-lg backdrop-blur-lg">
            <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
              Login
            </h2>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-blue-500"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full rounded-lg border border-gray-300 p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button className="w-full transform rounded-lg bg-yellow-300 py-3 text-lg font-bold text-blue-800 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
