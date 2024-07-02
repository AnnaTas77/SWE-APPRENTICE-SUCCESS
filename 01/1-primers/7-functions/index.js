// 1. Create a new function declaration called `myName` that returns your name

function myName() {
  return "Anna";
}

// 2. Create a new function declaration called `currentYear` that returns the current year

function currentYear() {
  return new Date().getFullYear();
}

// 3. Create a new function called `favoriteNumber` that returns your favorite number

const favoriteNumber = () => {
  return 7;
};

console.log(myName());
console.log(currentYear());
console.log(favoriteNumber());

// DO NOT EDIT BELOW
export { myName, currentYear, favoriteNumber };
