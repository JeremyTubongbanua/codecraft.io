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
    <div className="flex h-full w-full items-center justify-center">
      {isCourseSelected ? (
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <Outlet />
          <button
            onClick={handleBack}
            className="mb-4 rounded-lg bg-gray-200 px-4 py-2 text-blue-500"
          >
            Course Selection
          </button>
        </div>
      ) : (
        <div className="flex h-full w-3/4 flex-col justify-evenly gap-20 py-20">
          <div className="flex h-3/4 justify-evenly">
            {courses.map((course) => (
              <CourseItem
                key={course.name}
                title={course.name}
                link={course.link}
                icon={course.icon}
              ></CourseItem>
            ))}
          </div>
          <div className="flex h-3/4 justify-evenly">
            {advancedCourses.map((course) => (
              <CourseItem
                key={course.name}
                title={course.name}
                link={course.link}
                icon={course.icon}
              ></CourseItem>
            ))}
          </div>
          <ChatBot />
        </div>
        
      )}
    </div>
  );
}

export default Courses;
