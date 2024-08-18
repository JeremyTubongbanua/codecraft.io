import ChatBot from '../chatbot/ChatBot';
import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description:
      'Write a program to iterate the first 10 numbers, and in each iteration, print the sum of the current and previous number.',
  },
  {
    title: 'Question 2',
    description:
      'Write a program to accept a string from the user and display characters that are present at an even index number.',
  },
  {
    title: 'Question 3',
    description:
      'Write a function to return True if the first and last number of a given list is same. If numbers are different then return False.',
  },
];

function AdvancedPython() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2 className="text-2xl font-bold text-blue-400">
        Welcome to Advanced Python!
      </h2>
      <CourseQuestions questions={questions} />
      <Coding language={'python'} />
      <ChatBot />
    </div>
  );
}

export default AdvancedPython;
