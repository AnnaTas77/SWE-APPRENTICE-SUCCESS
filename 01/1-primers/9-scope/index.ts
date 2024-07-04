// 1. Currently there is an error in the scope of fixMyScope. Fix the code so that it can be exported to our tests.

let fixMyScope:string;

{
  fixMyScope = "Help export me";
}

// 2. A function called updateCity has been written to update the variable myCity. Unfortunately, it currently is returning undefined when the function is executed. Fix scope so that myCity is updated with the specified city everytime updateCity is run.
/*
Examples
updateCity("New York"); // myCity now has the value "New York"
updateCity("London"); // myCity now has the value "London"
updateCity("Chicago");
*/

let myCity:string;

function updateCity(city:string):string {
  myCity = city;
  return myCity;
}

// 3. Create a global variable called currentSum that contains an initial value of zero. Next, create a function called `incrementSum` that increments the currentSum by 1 every time that it is run.
/*
Example
incrementSum()
incrementSum()
incrementSum()
console.log(currentSum) // Outputs the value 3
*/

let currentSum:number = 0;

function incrementSum():number {
  return (currentSum += 1);
}

// DO NOT EDIT BELOW
console.log(updateCity("New York"));


