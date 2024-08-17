import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description: 'In JavaScript, use `console.log` to print "Hello, World!" to the console.',
  },
  {
    title: 'Question 2',
    description: 'Use `let` and `const` to create a program that calculates the area of a circle.',
  },
  {
    title: 'Question 3',
    description: 'Use `if`, `else if`, and `else` statements to create a program that determines if a number is positive, negative, or zero.',
  },
];

function JavaScript() {
  return (
    <div className="flex w-full flex-col gap-10 text-center">
      <h2>Welcome to JavaScript</h2>
      <CourseQuestions questions={questions} />
      <Coding language={'javascript'}/>
      <ChatBot/>
    </div>
  );
}

export default JavaScript;
