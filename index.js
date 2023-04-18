function SUM(a, b) {
  return a + b;
}
console.log(SUM(5, 6));

var myName;
var a;
a = 7;

var a;
a = 7;
var b;
b = a;

var a = 9;
var myFirstName = "Aleksandr";
var myLastName = "Nikolayevich";

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
console.log(6);

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";

console.log(FCC, fact); // Change this line
let myVar = 87;

myVar = myVar++;

let myVar7 = 11;

myVar = --myVar;

let myVar9 = 11;

myVar = --myVar;
const ourDecimal = 5.7;
let myDecimal = 5.7;

const product = 2.0 * 2.5;

const quotient = 4.4 / 2.0; // Change this line

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

const myStr0 = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr23 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const myStr7 = "This is the start. " + "This is the end."; // Change this line

let myStr8 = "This is the first sentence. ";
myStr += "This is the second sentence.";

const myName = "Alex";
const myStr4 = "My name is " + myName + "and I am well!";

const someAdjective = "alex";
let myStr12 = "Learning to code is ";
myStr += someAdjective;

Setup;
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

Setup;
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

firstLetterOfLastName = lastName[0]; // Change this line

Setup;
let myStr6 = "Jello World";

myStr6 = "Hello World"; // Change this line

Setup;
const lastName4 = "Lovelace";

const thirdLetterOfLastName = lastName[2]; // Change this line

Setup;
const lastName6 = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

Setup;
const lastName1 = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line

const myArray = ["Alex", 1];

const myArray2 = [[myArray]];

const myArray4 = [50, 60, 70];
const myData = myArray[0];
Setup;
const myArray6 = [18, 64, 99];
myArray[0] = 45;

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData7 = myArray[2][1];

Setup;
const myArray = [
  ["John", 23],
  ["cat", 2],
];

myArray.push(["dog", 3]);

Setup;
const myArray = [
  ["John", 23],
  ["cat", 2],
];

const removedFromMyArray = myArray.pop();

Setup;
const myArray = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray3 = myArray.shift();

Setup;
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);

const myList = [];
myList.push(
  ["alex", 29],
  ["alex", 29],
  ["alex", 29],
  ["alex", 29],
  ["alex", 29]
);

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);

function timesFive(num) {
  return num * 5;
}

let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

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
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar);

Setup;
const outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = "sweater";

  return outerWear;
}

myOutfit();

Setup;
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

Setup;
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();

  return item;
}

Setup;
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
  return true; // Change this line
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
Setup;
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

Setup;
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

Setup;
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

Setup;
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

Setup;
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  testSize(7);

  const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
  ];

  function golfScore(par, strokes) {
    debugger;
    if (strokes == "1") {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes == par - 1) {
      return names[2];
    } else if (strokes == par) {
      return names[3];
    } else if (strokes == par + 1) {
      return names[4];
    } else if (strokes == par + 2) {
      return names[5];
    } else if (strokes >= par + 3) {
      return names[6];
    }

    // Only change code above this line
  }
  console.log(golfScore(4, 1));
  console.log(golfScore(4, 2));
  console.log(golfScore(5, 2));
  console.log(golfScore(4, 3));
  console.log(golfScore(4, 4));

  function caseInSwitch(val) {
    let answer = "";

    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;

      case 4:
        answer = "delta";
        break;
    }

    return answer;
  }

  caseInSwitch(1);

  function switchOfStuff(val) {
    let answer = "";

    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;

      default:
        answer = "stuff";
        break;
    }

    return answer;
  }

  switchOfStuff(1);

  function sequentialSizes(val) {
    let answer = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }

    return answer;
  }

  sequentialSizes(1);

  function chainToSwitch(val) {
    let answer = "";

    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }

    return answer;
  }

  chainToSwitch(7);

  function reverseWords(str) {
    return str.split("").reverse().join("");
  }

  console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

  function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }

  function getGrade(s1, s2, s3) {
    debugger;
    const sum = (s1 + s2 + s3) / 3;
    if (90 <= sum && sum <= 100) {
      return "A";
    } else if (80 <= sum && sum < 90) {
      return "B";
    } else if (70 <= sum && sum < 80) {
      return "C";
    } else if (60 <= sum && sum < 70) {
      return "D";
    } else 0 <= sum && sum < 60;
    return "F";
  }
  console.log(getGrade(70, 70, 50));
  function isLess(a, b) {
    return a < b;
  }
  isLess(10, 15);

  Setup;
  function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  abTest(2, 2);
  let count = 0;

  function cc(card) {
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
      alert("2 3 4 5 6");
      count += 1;
    } else if (card == 7 || card == 8 || card == 9) {
      count += 0;
    } else if (
      card == 10 ||
      card == "J" ||
      card == "Q" ||
      card == "K" ||
      card == "A"
    ) {
      count -= 1;
    }
    if (count <= 0) {
      return String(count) + " Hold";
    } else {
      return String(count) + " Bet";
    }
  }

  cc(2);
  cc(3);
  cc(7);
  cc("K");
  cc("A");

  const myDog5 = {
    name: "Lord",
    legs: 4,
    tails: 1,
    friends: [1, 2, 3],
  };

  Setup;
  const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats",
  };

  const hatValue = testObj.hat;
  const shirtValue = testObj.shirt;

  const testObj5 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
  };

  const entreeValue = testObj["an entree"];
  const drinkValue = testObj["the drink"];

  Setup;
  const testObj1 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
  };

  const playerNumber = 16;
  const player = testObj[playerNumber];
  Setup;
  const myDog3 = {
    name: "Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
  };
  myDog.name = "Happy Coder";

  const myDog4 = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
  };
  myDog.bark = "woof";

  const myDog7 = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof",
  };

  delete myDog.tails;

  function phoneticLookup(val) {
    let result = "";

    const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank",
    };

    return lookup[val];
  }
  function phoneticLookup(val) {
    let result = "";

    const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank",
    };
    return lookup[val];

    return result;
  }

  phoneticLookup("charlie");

  function removeExclamationMarks(s) {
    let b = "";
    for (let i = 0; i < i.length; i++) {
      if (s[i] != "!") {
        b += s[i];
      }
    }
    return b;
  }
  console.log(removeExclamationMarks("hello world!"));
  console.log(removeExclamationMarks("hello world"));
  const removeExclamationMarks = (s) => s.replace(/\!/g, "");
  function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }
  console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

  const myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true,
    },
    {
      artist: "kish",
      title: "rok",
      release_year: 2013,
      formats: ["CD", "8T", "LP"],
    },
  ];
  const myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };

  const gloveBoxContents = myStorage.car.inside["glove box"];
  const myPlants = [
    {
      type: "flowers",
      list: ["rose", "tulip", "dandelion"],
    },
    {
      type: "trees",
      list: ["fir", "pine", "birch"],
    },
  ];

  const secondTree = myPlants[1].list[1];

  const recordCollection = {
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  };

  function updateRecords(records, id, prop, value) {
    return records;
  }

  updateRecords(recordCollection, 5439, "artist", "ABBA");

  const myArray = [];
  let i = 5;
  debugger;
  while (i >= 0) {
    myArray.push(i);
    i--;
  }
  console.log(myArray);

  const myArray1 = [];
  for (let i = 0; i <= 5; i++) {
    myArray1.push(i);
  }
  for (let i = 1; i <= 9; i += 2) {
    myArray.push(i);
  }
  for (let i = 9; i >= 0; i -= 2) {
    myArray.push(i);
  }
  const myArr = [2, 3, 4, 5, 6];
  let total = 0;
  for (let i = 0; i <= myArr.length - 1; i++) {
    total += myArr[i];
  }
  console.log(total);

  function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
  }
  console.log(
    multiplyAll([
      [1, 2],
      [3, 4],
      [5, 6, 7],
    ])
  );

  const myArray2 = [];
  let i2 = 10;
  do {
    myArray2.push(i);
    i2++;
  } while (i < 5);

  function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
}
