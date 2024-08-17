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
        if(username == 'demo' && password == 'demo') {
            alert('Login successful!');
            // @jerry add code to redirect to courses
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-6 border border-gray-300 rounded"
            />
            <button className="w-full py-2 bg-blue-300 text-white rounded hover:bg-blue-400">
              Login
            </button>
          </div>
        </div>
      );
}

export default Login;
