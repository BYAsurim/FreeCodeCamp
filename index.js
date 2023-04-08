// this is code 
function SUM(a,b){

return a+b;

}
console.log(SUM(5,6));

var myName ;
var a; 
a = 7;

var a;
a = 7;
var b;
b = a;

var  a = 9;
var myFirstName = "Aleksandr";
var myLastName = "Nikolayevich";

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
console.log(6);

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let  catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";

console.log(FCC, fact); // Change this line
let myVar = 87;

// Only change code below this line
myVar = myVar ++;

// let myVar = 11;

// // Only change code below this line
// myVar = --myVar ;

// let myVar = 11;

// Only change code below this line
// myVar = --myVar;
const ourDecimal = 5.7;
let myDecimal = 5.7;
// Only change code below this line
const product = 2.0 * 2.5;

const quotient = 4.4 / 2.0; // Change this line

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9 ;
c += 7;

let a = 11;
let b = 9;
let c = 3;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /=  12;
b /=  4;
c /=  11;

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"." // Change this line

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//const myStr = "This is the start. "+"This is the end."; // Change this line

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Only change code below this line
// const myName = "Alex";
// const myStr = "My name is " + myName + "and I am well!";

// Change code below this line
// const someAdjective = "alex";
// let myStr = "Learning to code is ";
// myStr += someAdjective;

// Setup
let lastNameLength = 0;
//const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
// let myStr = "Jello World";

// // Only change code below this line
// myStr = "Hello World"; // Change this line
// // Only change code above this line

// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
// const lastName = "Lovelace";

// // Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
// const lastName = "Lovelace";

// // Only change code below this line
// const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective+ " " + myNoun+" " + myVerb+ " " + myAdverb; // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ["Alex", 1];

// Only change code below this line
// const myArray = [[myArray]];

// const myArray = [50, 60, 70];
// const myData = myArray[0];
// Setup
// const myArray = [18, 64, 99];
// myArray[0] = 45;
// // Only change code below this line

// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];
  
//   const myData = myArray[2][1];

// Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// myArray.push(["dog", 3]);

// Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// const removedFromMyArray = myArray.pop();

// Setup
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();
// // Only change code below this line

// Setup
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

// // Only change code below this line
const myList = [];
myList.push(["alex",29], ["alex",29], ["alex",29], ["alex",29], ["alex",29]);

function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

  function functionWithArgs(a, b) {
    console.log(a+b);
  }
  functionWithArgs(1, 2);

  function timesFive(num) {
    return num *5;
  }

  // Declare the myGlobal variable below this line
let myGlobal  = 10;

function fun1() {
  oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
    // Only change code below this line
  let myVar ;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
 let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
// Only change code below this line



