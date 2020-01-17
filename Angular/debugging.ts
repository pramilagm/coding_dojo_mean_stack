var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
//
myString = "Hello"; //since the string assigned as string so the variable myString so it cannot store a number
function sayHello(name: string) {
  return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("Pramila")); //the parameter name is assigned as string so we cannot pass number as an argument in sayHello function

//Optional parameters
function fullName(firstName: string, lastName: string, middleName: string) {
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Pramila", "Jones")); //the function is expecting 3 argument as the function full name is given three parameters

interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student) {
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
};
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
};
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay)); //the attribute name doesnt match with the belts that is belt
var increment = (x: number) => x + 1; //parameter x was any so needs to be declared number
// This works great:
console.log(increment(3));
var square = (x: number) => {
  x * x;
}; //parameter x was any so needs to be declared number

console.log(square(4));
// This is not working:
var multiply = (x: number, y: number) => x * y; //function parameter is accepting their types
// Nor is this working:
var math = (x: number, y: number) => {
  // need to declare the type of x and y parameter ,needed the curly braces to wrap the asynchronous function

  var sum = x + y;
  let product = x * y;
  let difference = Math.abs(x - y);
  return [sum, product, difference];
};
class Elephant {
  constructor(public age: number) {}
  birthday = () => {
    this.age++;
  };
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000);
setTimeout(() => {
  console.log(`Babar's age is ${babar.age}.`);
}, 2000);
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
