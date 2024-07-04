// 1. Create a new function declaration called `myName` that returns your name

function myName():string {
  return "Anna";
}

// 2. Create a new function declaration called `currentYear` that returns the current year

function currentYear():number {
  return new Date().getFullYear();
}

// 3. Create a new function called `favoriteNumber` that returns your favorite number

const favoriteNumber = ():number => {
  return 7;
};

console.log(myName());
console.log(currentYear());
console.log(favoriteNumber());


