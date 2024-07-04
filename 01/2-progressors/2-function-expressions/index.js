// 1. Define a function expression, `strictlyEqual` that takes two parameters and checks if they are strictly equal
/* 
  Examples:
  strictlyEqual(1, 1) // true
  strictlyEqual(1, '1') // false
  strictlyEqual('1', '1') // true
  strictlyEqual('billy', 'billy') // true
  strictlyEqual('billy', 'bill') // false
*/

const strictlyEqual = function (param1, param2) {
  return param1 === param2;
};

// 2. Define a function expression, `looselyEqual` that takes two parameters and checks if they are loosely equal
/*
  Examples:
  looselyEqual(1, 1) // true
  looselyEqual(1, '1') // true
  looselyEqual('1', '1') // true
  looselyEqual('billy', 'billy') // true
  looselyEqual('billy', 'bill') // false
  looselyEqual('false', false) // true
*/

const looselyEqual = function (param1, param2) {
  return param1 == param2;
};

// 3. Define a function expression, `isAdult` that takes in a number representing a person's age and returns true if they are 18 or older, and false otherwise.
/*
  Examples:
  isAdult(18) // true
  isAdult(20) // true
  isAdult(17) // false
  isAdult(16) // false
*/

const isAdult = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

// 4. Define a function expression, `isOdd` that takes in a number and returns true if it is odd, and false otherwise.
/* 
  Examples:
  isOdd(1) // true
  isOdd(2) // false
  isOdd(3) // true
  isOdd(4) // false
  // etc.
*/

const isOdd = function (num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

// 5. Define a function expression, `isPositive` that takes in a number and returns true if it is positive, and false otherwise.
/*
  Examples:
  isPositive(1) // true
  isPositive(-1) // false
  isPositive(0) // false
*/

const isPositive = function (num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};

// 6. Define a function expression, `isLeapYear` that takes in a number representing a year and returns true if it is a leap year, and false otherwise. Hint: A leap year is divisible by 4, but not divisible by 100 unless also divisible by 400.
/*
  Examples:
  isLeapYear(2016) // true
  isLeapYear(2015) // false
  isLeapYear(2100) // false
  isLeapYear(2400) // true
*/

const isLeapYear = function (num) {
  if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  } else if (num % 100 === 0 && num % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

export { strictlyEqual, looselyEqual, isAdult, isOdd, isPositive, isLeapYear };
