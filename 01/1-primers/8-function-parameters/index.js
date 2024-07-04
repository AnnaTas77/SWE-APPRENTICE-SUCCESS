// 1. Declare a function called `subtract` that takes two numbers and returns the difference between them
// Example: subtract(5, 2) returns 3

function subtract(num1, num2) {
  return num1 - num2;
}

// 2. Declare a function called `sum` that takes two numbers and returns the sum of them
// Example: sum(3, 4) returns 7

function sum(num1, num2) {
  return num1 + num2;
}

// 3. Declare a function called `convert` that takes an integer `minutes` and converts it to seconds.
// Examples:
// convert(5) -> 300
// convert(3) -> 180
// convert(2) -> 120

function convert(minutes) {
  return minutes * 60;
}

// 4. Declare a function called `addition` that takes a number as an argument, increments the number by +1 and returns the result.
// Examples:
// addition(0) -> 1
// addition(9) -> 10
// addition(-3) -> -2

function addition(num) {
  return (num += 1);
}

// 5. Declare a function called `concatenate` that takes two strings and returns the concatenation of the two strings.
// Examples:
// concatenate("a", "b") -> "ab"
// concatenate("code", "up") -> "codeup"
// concatenate("connect", "four") -> "connectfour"

function concatenate(str1, str2) {
  return str1 + str2;
}

// 6. Declare a function called 'isEqual' that takes two arguments and returns true if the two arguments are equal. Make sure they are strictly equal.
// examples:
// isEqual(1, 1) -> true
// isEqual(1, 2) -> false
// isEqual("1", 1) -> false
// isEqual("1", "1") -> true
// isEqual("billy", "billy") -> true
// isEqual("billy", "bill") -> false

function isEqual(input1, input2) {
  if (input1 === input2) {
    return true;
  } else {
    return false;
  }
}

// 7. Declare a function called `max` that takes three numbers and returns the largest number.
// Examples:
// max(1, 2, 3) -> 3
// max(5, 3, 1) -> 5
// max(5, 5, 5) -> 5
// max(5, 5, 1) -> 5

function max(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// 8. Declare a function called `isEmpty` that takes a string and returns true if the string is empty. Otherwise, returns false.
// Examples:
// isEmpty("") -> true
// isEmpty(" ") -> false
// isEmpty("a") -> false

function isEmpty(str) {
  if (str.length) {
    return false;
  } else {
    return true;
  }
}

export { subtract, sum, convert, addition, concatenate, isEqual, max, isEmpty };
