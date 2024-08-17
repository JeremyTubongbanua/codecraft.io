import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description: 'What is the difference between "==" and "===" in JavaScript?',
  },
  {
    title: 'Question 2',
    description: 'Explain the concept of hoisting in JavaScript.',
  },
  {
    title: 'Question 3',
    description: 'What are closures in JavaScript and how do they work?',
  },
];

function JavaScript() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2>Welcome to JavaScript</h2>
      <CourseQuestions questions={questions} language={'javascript'} />
      <Coding />
    </div>
  );
}

export default JavaScript;
