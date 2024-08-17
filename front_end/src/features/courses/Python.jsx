import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description: 'This is the description for question 1.',
  },
  {
    title: 'Question 2',
    description: 'This is the description for question 2.',
  },
  {
    title: 'Question 3',
    description: 'This is the description for question 3.',
  },
];

function Python() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2>welcome to python</h2>
      <CourseQuestions questions={questions} language={'python'} />
      <Coding />
    </div>
  );
}

export default Python;
