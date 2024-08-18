import ChatBot from '../chatbot/ChatBot';
import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description:
      "Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.",
  },
  {
    title: 'Question 2',
    description:
      'Write a JavaScript program to find the most frequent item in an array.',
  },
  {
    title: 'Question 3',
    description:
      'Write a JavaScript function to get the greatest common divisor (GCD) of two integers.',
  },
];

function AdvancedjavaScript() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2 className="text-2xl font-bold text-blue-700">
        Welcome to Advanced Javascript!
      </h2>
      <CourseQuestions questions={questions} />
      <Coding language={'javascript'} />
      <ChatBot />
    </div>
  );
}

export default AdvancedjavaScript;
