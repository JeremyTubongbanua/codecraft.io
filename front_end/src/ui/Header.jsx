import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center font-sans">
      {/* Title Section */}
      <div className="border-b-2 border-blue-400 bg-blue-300 p-5">
        <Link to="/" className="m-0 text-5xl text-white">
          CodeCraft
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-around bg-blue-200 p-3">
        <Link to="/login" className="text-xl text-black no-underline">
          Login
        </Link>
        <Link to="/courses" className="text-xl text-black no-underline">
          Courses
        </Link>
        <Link to="/about" className="text-xl text-black no-underline">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
