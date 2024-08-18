import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
      <div className="max-w-md rounded-xl bg-white bg-opacity-20 p-10 shadow-lg backdrop-blur-lg">
        <h1 className="mb-6 text-center text-5xl font-extrabold text-white">
          Welcome to <span className="text-yellow-300">codecraft.io</span>
        </h1>
        <p className="mb-4 text-center text-lg leading-relaxed">
          Your ultimate platform for aspiring software engineers. We offer free
          beginner courses and 24/7 AI-powered tutoring to help you excel in
          your learning journey.
        </p>
        <div className="flex justify-center">
          <Link
            className="transform rounded-lg bg-yellow-300 px-6 py-3 text-lg font-bold text-blue-800 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            to={'/courses'}
          >
            Learn Now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
