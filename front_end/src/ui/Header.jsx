import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center font-sans">
      {/* Title Section */}
      <div className="bg-blue-600 p-5 py-4">
        <Link
          to="/home"
          className="text-center text-3xl font-bold text-yellow-300"
        >
          codecraft.io
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-between bg-blue-800">
        <Link
          to="/courses"
          className="w-1/3 border-r-2 border-white px-4 py-2 text-xl font-semibold text-white no-underline duration-200 hover:bg-blue-900"
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="w-1/3 border-r-2 border-white px-4 py-2 text-xl font-semibold text-white no-underline duration-200 hover:bg-blue-900"
        >
          About
        </Link>
        <Link
          to="/"
          className="w-1/3 px-4 py-2 text-xl font-semibold text-white no-underline duration-200 hover:bg-blue-900"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
