import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ title, icon, link }) => {
  return (
    <Link
      to={`/courses${link}`}
      className="flex w-1/4 flex-col items-center justify-center rounded-md bg-blue-800 p-4 text-white duration-200 hover:bg-blue-600"
    >
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <img src={icon} alt="Course Icon" className="h-16 w-16" />
    </Link>
  );
};

export default CourseItem;