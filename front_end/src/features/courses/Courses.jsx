import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CourseItem from './CourseItem';
import introPythonIcon from '../../assets/intropython.png';
import introJSIcon from '../../assets/introjs.png';
import introCIcon from '../../assets/introc.png';
import advancedPythonIcon from '../../assets/intropython2.png';
import advancedJSIcon from '../../assets/introjs2.png';
import advancedCIcon from '../../assets/introc2.png';
import ChatBot from '../chatbot/ChatBot';

function Courses() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCourseSelected = location.pathname !== '/courses';
  const handleBack = () => {
    navigate(-1);
  };

  const courses = [
    { name: 'Python', icon: introPythonIcon, link: '/python' },
    { name: 'Javascript', icon: introJSIcon, link: '/javascript' },
    { name: 'C', icon: introCIcon, link: '/c' },
  ];
  const advancedCourses = [
    {
      name: 'Advanced Python',
      icon: advancedPythonIcon,
      link: '/AdvancedPython',
    },
    {
      name: 'Advanced Javascript',
      icon: advancedJSIcon,
      link: '/AdvancedjavaScript',
    },
    { name: 'Advanced C', 
      icon: advancedCIcon, 
      link: '/advancedc' },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-t from-blue-200 to-indigo-300">
      {isCourseSelected ? (
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <div className="w-3/4 rounded-xl bg-white bg-opacity-20 p-10 shadow-lg backdrop-blur-lg">
            <Outlet />
          </div>
          <button
            onClick={handleBack}
            className="mb-4 transform rounded-lg bg-yellow-300 px-6 py-3 text-lg font-bold text-blue-800 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          >
            Course Selection
          </button>
        </div>
      ) : (
        <div className="flex w-3/4 flex-col gap-20 py-20">
          <div className="flex justify-evenly">
            {courses.map((course) => (
              <CourseItem
                key={course.name}
                title={course.name}
                link={course.link}
                icon={course.icon}
              />
            ))}
          </div>
          <div className="flex justify-evenly">
            {advancedCourses.map((course) => (
              <CourseItem
                key={course.name}
                title={course.name}
                link={course.link}
                icon={course.icon}
              />
            ))}
          </div>
          <ChatBot />
        </div>
        
      )}
    </div>
  );
}

export default Courses;
