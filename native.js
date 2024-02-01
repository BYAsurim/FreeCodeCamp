function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Hello World'));

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome('racecar'));

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

function findMaxNumber(arr) {
    return Math.max(...arr);
}

console.log(findMaxNumber([10, 5, 20, 8, 15]));

function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

console.log(reverseWords('Hello World'));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent'))

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

function findMaxValue(array) {
    return Math.max(...array);
}

console.log(findMaxValue([3, 8, 2, 6, 1]));

function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

console.log(calculateSum([1, 2, 3, 4, 5]));

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

let numbers = [10, 5, 8, 3, 15];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log(maxNumber);

let fruits = ['apple', 'banana', 'orange', 'grape'];
let searchItem = 'orange';
let found = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === searchItem) {
        found = true;
        break;
    }
}

console.log(found);

let str = 'Hello, world!';
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(reversedStr);

let str = 'JavaScript is awesome';
let vowelCount = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}

console.log(vowelCount);

let numbers = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueValues = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueValues.includes(numbers[i])) {
        uniqueValues.push(numbers[i]);
    }
}

console.log(uniqueValues);

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);

let str = 'level';
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

let isPalindrome = str === reversedStr;

console.log(isPalindrome);

let sentence = 'JavaScript is a programming language';
let words = sentence.split(' ');
let wordCount = words.length;

console.log(wordCount);

let sentence = 'JavaScript is an amazing programming language';
let words = sentence.split(' ');
let longestWord = '';

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log(longestWord);

function isNumberInRange(number, min, max) {
    return number >= min && number <= max;
}

console.log(isNumberInRange(10, 5, 15));
console.log(isNumberInRange(20, 5, 15));

function findSmallestNumber(numbers) {
    let smallestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }

    return smallestNumber;
}

console.log(findSmallestNumber([10, 5, 8, 3, 15]));

function convertToCamelCase(text) {
    let words = text.split(' ');

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

console.log(convertToCamelCase('hello world'));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17));
console.log(isPrime(10));

function countCharacters(text) {
    let characterCount = {};

    for (let i = 0; i < text.length; i++) {
        let character = text[i];

        if (characterCount[character]) {
            characterCount[character]++;
        } else {
            characterCount[character] = 1;
        }
    }

    return characterCount;
}

console.log(countCharacters('hello'));