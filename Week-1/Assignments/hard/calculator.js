/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(number) {
      this.result += number;
  }

  subtract(number) {
      this.result -= number;
  }

  multiply(number) {
      this.result *= number;
  }

  divide(number) {
      if (number === 0) {
          throw new Error("Cannot divide by 0");
      }
      this.result /= number;
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(str) {
      // Validate the expression for non-numerical characters
      if (!/^[0-9+\-*/().]+$/.test(str.replace(/\s+/g, ''))) {
          throw new Error("Invalid characters in expression");
      }
      try {
          this.result = eval(str);
          if (isNaN(this.result) || !isFinite(this.result)) {
              throw new Error("Invalid result");
          }
      } catch (error) {
          throw new Error(`Invalid expression: ${error.message}`);
      }
  }
}

const calculator = new Calculator();
calculator.add(5);
console.log("Result:", calculator.getResult());