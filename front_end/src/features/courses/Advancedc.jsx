import ChatBot from '../chatbot/ChatBot';
import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description: 'Write a Program to Swap the values of two variables.',
  },
  {
    title: 'Question 2',
    description: 'Write a Program to calculate Compound Interest.',
  },
  {
    title: 'Question 3',
    description:
      'Write a Program to print the Fibonacci series using recursion.',
  },
];

function Advancedc() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2 className="text-2xl font-bold text-blue-700">
        Welcome to Advanced C!
      </h2>
      <CourseQuestions questions={questions} />
      <Coding language={'c'} />
      <ChatBot />
    </div>
  );
}

export default Advancedc;
