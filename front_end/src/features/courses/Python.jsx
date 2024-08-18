import ChatBot from '../chatbot/ChatBot';
import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description:
      'Use `print("Hello, World!")` in your `def main():` function to make a basic Hello World program in Python.',
  },
  {
    title: 'Question 2',
    description:
      'Use `input()` and `int()` functions to create a program that calculates the area of a circle.',
  },
  {
    title: 'Question 3',
    description:
      'Use `if`, `elif`, and `else` statements to create a program that determines if a number is positive, negative, or zero.',
  },
];

function Python() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2 className="text-2xl font-bold text-blue-700">
        Welcome to Intro to Python!
      </h2>
      <CourseQuestions questions={questions} />
      <Coding language={'python'} />
      <ChatBot />
    </div>
  );
}

export default Python;
