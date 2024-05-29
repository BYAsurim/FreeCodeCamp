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



let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


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

function findLargestSum(numbers) {
    let Sum = 0

    for (let i = 0; i< numbers.length; i++){
        debugger
        Sum += numbers[i]
    }
        return Sum
}

console.log('hey')
console.log(findLargestSum([1, -2, 3, 10, -4, 7, 2, -5]));

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false

function generateRandomPassword(length) {
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

console.log(generateRandomPassword(8));

function findLargestNumber(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findLargestNumber(10, 5, 8));

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));

function isFactorial(number, factorial) {
    let product = 1;
    let i = 1;
    while (product <= number) {
        product *= i;
        if (product === number) {
            return i === factorial;
        }
        i++;
    }
    return false;
}

console.log(isFactorial(120, 5));
console.log(isFactorial(100, 5));

function getUnique(arr) {
    return [...new Set(arr)];
}

console.log(getUnique([1, 2, 3, 2, 4, 1, 5]));

function convertVowels(str) {
    return str.replace(/[aeiou]/gi, (vowel) => vowel.toUpperCase());
}
console.log(convertVowels("javascript is awesome"));

function sortByAge(persons) {
    return persons.sort((a, b) => b.age - a.age);
}


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 35 },
];
console.log(sortByAge(people));

function reverseNumber(num) {
    return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(98.76));


function foo(){
    const sum = Array.from(arguments)
    return  sum.reduce((acc, value)=>{
       return  acc + value
    })

}
console.log(foo(1,2,3,4,5))
console.log(foo(1,2,3))

