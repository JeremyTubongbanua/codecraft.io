import Coding from '../coding/Coding';
import CourseQuestions from './CourseQuestions';

const questions = [
  {
    title: 'Question 1',
    description: 'Use `#include <stdio.h>` and `printf("Hello, World!\n");` in your `int main() {}` function to make a basic Hello World program in C.',
  },
  {
    title: 'Question 2',
    description: 'Use `int` and `float` data types to create a program that calculates the area of a circle.',
  },
  {
    title: 'Question 3',
    description: 'Use `if`, `else if`, and `else` statements to create a program that determines if a number is positive, negative, or zero.',
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
