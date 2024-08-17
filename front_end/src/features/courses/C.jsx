import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description: 'What is the difference between "printf" and "puts" in C?',
  },
  {
    title: 'Question 2',
    description: 'Explain the concept of pointers in C.',
  },
  {
    title: 'Question 3',
    description: 'What are the different data types available in C?',
  },
];

function C() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2>Welcome to C</h2>
      <CourseQuestions questions={questions} />
      <Coding language={'C'}/>
    </div>
  );
}

export default C;
