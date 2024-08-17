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
      navigate('/courses');
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="bg-blue-600 py-4">
        <h1 className="text-center text-3xl font-bold text-white">
          codecraft.io
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex h-full items-center justify-center bg-gray-100">
          <div className="w-80 rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-blue-600">Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full rounded border border-gray-300 p-2 text-white"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded border border-gray-300 p-2 text-white"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button className="w-full rounded bg-blue-500 py-2 text-white duration-200 hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
