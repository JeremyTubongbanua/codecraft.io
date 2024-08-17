import { Link } from 'react-router-dom';

const CourseItem = ({ title, icon, link }) => {
  return (
    <Link
      to={`/courses${link}`}
      className="flex w-1/4 flex-col items-center justify-center rounded-md border-2 border-sky-500 bg-blue-900 p-4 text-white duration-200 hover:bg-blue-800"
      style={{ textDecoration: 'none' }}
    >
      <h2 className="mb-6 text-xl font-bold">{title}</h2>
      <div className="image-container rounded-md border border-black">
        <img src={icon} alt="Course Icon" className="rounded-md" />
      </div>
    </Link>
  );
};

export default CourseItem;
