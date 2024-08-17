import React from 'react';

const Header = () => {
  return (
    <div className="text-center font-sans">
      {/* Title Section */}
      <div className="bg-blue-300 p-5 border-b-2 border-blue-400">
        <h1 className="text-5xl text-white m-0">CodeCraft</h1>
      </div>
      
      {/* Navigation Section */}
      <div className="bg-blue-200 p-3 flex justify-around">
        <a href="#login" className="text-black text-xl no-underline">Login</a>
        <a href="#courses" className="text-black text-xl no-underline">Courses</a>
        <a href="#about" className="text-black text-xl no-underline">About</a>
      </div>
    </div>
  );
};

export default Header;
