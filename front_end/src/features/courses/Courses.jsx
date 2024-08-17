import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CourseItem from './CourseItem';

function Courses() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCourseSelected = location.pathname !== '/courses';

  const handleBack = () => {
    navigate(-1);
  };

  const courses = [
    { name: 'Python', icon: 'python-icon', link: '/python' },
    { name: 'Javascript', icon: 'javascript-icon', link: '/javascript' },
    { name: 'C', icon: 'c-icon', link: '/c' },
  ];
  const advancedCourses = [
    {
      name: 'Advanced Python',
      icon: 'advanced-python-icon',
      link: '/advancedpython',
    },
    {
      name: 'Advanced Javascript',
      icon: 'advanced-javascript-icon',
      link: '/advancedjavascript',
    },
    { name: 'Advanced C', icon: 'advanced-c-icon', link: '/advancedc' },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      {isCourseSelected ? (
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <Outlet />
          <button onClick={handleBack} className="mb-4 text-blue-500">
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
        </div>
      )}
    </div>
  );
}

export default Courses;
