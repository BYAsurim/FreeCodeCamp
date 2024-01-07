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